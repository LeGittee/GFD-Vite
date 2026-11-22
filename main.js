import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import RAPIER from '@dimforge/rapier3d';
import * as QUARKS from "three.quarks";
import { CSM } from 'three/addons/csm/CSM.js';
import { CSMHelper } from 'three/addons/csm/CSMHelper.js'; // Optionnel pour le débug


var isGameRunning = false;

var spawnPosCube= new RAPIER.Vector3(425, -45, -120);
var spawnPosition= new RAPIER.Vector3(440.32, -46.964, -96.437)
var spawnOrientation= new THREE.Quaternion(0, -0.279, 0, 0.960)
var dt = 1 / 60;

var useFreeCam= false;
//offset local vector for the camera position
var offsetCam= {x:-3.5, y:1.1, z:0};
var camMoveCoef = 0.2;
var camAimCoef = 0.4;
//initialize camera positions
var camCurrentPos = AddTwoVec3(offsetCam, spawnPosition);
var targetCurrentPos = spawnPosition;

var camera, scene, renderer, csm, csmHelper;
var controls;
var cubeSizeX= 3, cubeSizeY= 0.8, cubeSizeZ= 1.8;
//particle variables
let batchedRenderer, particleSystem;
var particleForce = {x:-10, y:10, z:0};
//Audio variables
var audioListener, engineSound, skidSound;
var throttleBlend = 0; // régime moteur lissé (0..1), pour le son du moteur (RPM model)

// ==================================================================
// MANETTE (Gamepad API — mapping standard / layout Xbox)
// ==================================================================
// Index boutons standard : 0=A, 1=B, 2=X, 3=Y, 4=LB, 5=RB,
// 6=LT (analogique), 7=RT (analogique), 8=View ("affichage"), 9=Menu,
// 14=D-pad gauche, 15=D-pad droite
const GP_BTN = { A: 0, B: 1, X: 2, Y: 3, LB: 4, RB: 5, LT: 6, RT: 7, VIEW: 8, MENU: 9,
                 DPAD_LEFT: 14, DPAD_RIGHT: 15 };
const GP_TRIGGER_THRESHOLD = 0.5; // seuil d'activation des gâchettes analogiques
const GP_STICK_DEADZONE = 0.15;   // zone morte de l'axe horizontal du stick gauche
var gamepadPrevButtons = [];      // état précédent des boutons (détection des fronts montants)
var gamepadRouting = false;       // la manette pilote-t-elle actuellement les entrées de conduite ?

// ==================================================================
// ÉCRAN TACTILE (Pointer Events)
// ==================================================================
// État maintenu par les handlers d'événements, appliqué aux entrées de
// conduite à chaque frame par updateTouchInput() (sondé par animate(),
// exactement comme la manette).
var touchBtnForwardHeld = false;  // bouton tactile "avancer" maintenu
var touchBtnBackwardHeld = false; // bouton tactile "reculer" maintenu
var touchBtnLeftHeld = false;     // bouton tactile "tourner à gauche" maintenu
var touchBtnRightHeld = false;    // bouton tactile "tourner à droite" maintenu
var touchFlipHeld = false;        // le bouton flip est maintenu ?
var touchRouting = false;         // le tactile pilote-t-il les entrées de conduite ?

// facteur de hauteur du canvas de jeu. Sur desktop le rendu s'arrête à 87%
// (0.77 depuis top:10%) pour laisser la place à la bottomBar. En mode tactile
// la bottomBar est masquée : le rendu occupe toute la hauteur restante (90%).
function gameHeightFactor() {
    return document.body.classList.contains("touchDetected") ? 0.90 : 0.77;
}
var isMusicOn = false;
var isSoundOn = false;
var musicHtmlAudio = new Audio("./assets/music.mp3"); 


// parameters of the car
var chassisWidth, wheelBase;
let hoverDist= 1;
let wheelRadius= "not used";
let strength= 1.01;
let damping= 0.45;
let chassisMass= 1;
let maxSpeed= 80;
let maxTurnSpeed= 10;
let accGain= 0.03;
let decGain= 0.02;
let brakeGain= 0.02;
let turnGain= 0.25;
let maxWheelTurn= Math.PI*0.139;
let grip= 0.2;
let drag= 0.01;
let wheelSpincoeff= 1;

let powerCoeff, skidfx;

const ldManager = new THREE.LoadingManager()
const loader = new GLTFLoader(ldManager);
ldManager.onLoad = function() { console.log( 'Loading complete!'); initRapier() }

// To be synced
var meshes=[], bodies=[];
var heartRawPoints, mapRawPoints, mapIndices, geepRawPoints, geepBBoxSize;
var globalScale= 0.05;
let wheelA, wheelB, wheelC, wheelD, wheelList=[wheelA, wheelB, wheelC, wheelD];
let wheelPathList= ['./assets/wheelFL.glb', './assets/wheelFR.glb', './assets/wheelRL.glb', './assets/wheelRR.glb'];
let wheelRadiusList= [];


detectTouchDevice();
initThree();
animate();

function initAudioSystem() {

    camera.updateMatrixWorld(true);

    // 1. Créer le Listener et l'attacher à la caméra via l'instance THREE importée du module
    //    -> l'auditeur WebAudio suit désormais la position/orientation de la caméra à chaque frame
    //    (indispensable pour que le PannerNode calcule le son relativement au joueur)
    audioListener = new THREE.AudioListener();
    camera.add(audioListener);

    // 2. Initialiser les sons positionnels du véhicule
    //    ATTENTION: THREE.PositionalAudio est un Object3D. Il DOIT être rattaché
    //    à un objet présent dans la scène (fait dans le callback de chargement du
    //    châssis plus bas) pour que sa position monde soit calculée et poussée
    //    vers le PannerNode de WebAudio.
    engineSound = new THREE.PositionalAudio(audioListener);
    skidSound = new THREE.PositionalAudio(audioListener);

    configurePositionalSound(engineSound);
    configurePositionalSound(skidSound);

    const audioLoader = new THREE.AudioLoader();

    // Charger le son du moteur
    audioLoader.load("./assets/engine.mp3", function(buffer) {
        // suppression du silence d'encodage + crossfade -> boucle continue
        engineSound.setBuffer(trimLoopSilence(buffer, engineSound));
        engineSound.setLoop(true);
    });

    // Charger le son de dérapage
    audioLoader.load("./assets/skid.mp3", function(buffer) {
        skidSound.setBuffer(trimLoopSilence(buffer, skidSound));
        skidSound.setLoop(true);
        skidSound.setVolume(0); // Volume initial à 0, géré dynamiquement dans la gameLoop
    });
}

// Réglages du PannerNode pour un rendu réaliste :
// - volume plein tant que la source est à moins de "refDistance" unités (caméra poursuite)
// - atténuation douce au-delà (utile en caméra libre / quand la voiture s'éloigne)
// - pans stéréo 3D (HRTF) selon la direction voiture/caméra
function configurePositionalSound(sound) {
    sound.setDistanceModel("inverse");
    sound.setRefDistance(4);      // volume plein sous 4 unités (caméra poursuite ~3.7)
    sound.setRolloffFactor(0.9);  // atténuation nette au-delà (renforce la perception en caméra libre)
    sound.setMaxDistance(10000);
    sound.panner.panningModel = "HRTF"; // mettre "equalpower" pour un simple pan stéréo L/R
}

// ==================================================================
// SUPPRESSION DU SILENCE DE BOUCLAGE
// ==================================================================
// Les MP3 "génériques" embarquent du silence d'encodage (encoder delay /
// padding) et se terminent souvent par une retombée à zéro. Une fois le
// buffer décodé puis bouclé par WebAudio, ces zones muettes créent le
// trou d'air entendu entre chaque cycle du moteur.
// 1) on repère la première et la dernière frame audible du buffer décodé
// 2) on reconstruit un AudioBuffer ne contenant que la partie audible
// 3) on fond progressivement la fin du son vers son début (crossfade)
//    pour que la reprise de boucle ne produise aucun clic
const LOOP_TRIM_THRESHOLD = 0.01; // amplitude sous laquelle une frame est "muette"
                                  // (relevé de 0.004 à 0.01 pour couper une
                                  // retombée de basse faiblement audible en fin de boucle)
const LOOP_CROSSFADE_SEC = 0.010;  // durée du crossfade à la jonction de boucle (secondes)

function trimLoopSilence(sourceBuffer, sound) {

    const ctx = sound.context;
    const sampleRate = sourceBuffer.sampleRate;
    const channels = sourceBuffer.numberOfChannels;
    const totalFrames = sourceBuffer.length;

    // récupérer les canaux une seule fois pour la recherche
    const channelData = [];
    for (let c = 0; c < channels; c++) {
        channelData.push(sourceBuffer.getChannelData(c));
    }

    // une frame est muette si TOUS ses canaux sont sous le seuil
    function isSilentFrame(frame) {
        for (let c = 0; c < channels; c++) {
            if (Math.abs(channelData[c][frame]) > LOOP_TRIM_THRESHOLD) return false;
        }
        return true;
    }

    // recherche du début de la partie audible
    let start = 0;
    while (start < totalFrames && isSilentFrame(start)) start++;

    // recherche de la fin de la partie audible (borne exclusive)
    let end = totalFrames;
    while (end > start && isSilentFrame(end - 1)) end--;

    // sécurité : buffer entièrement muet -> on renvoie l'original tel quel
    if (start >= end) {
        console.warn("[audio] trimLoopSilence: buffer entièrement silencieux, buffer original conservé");
        return sourceBuffer;
    }

    const keptFrames = end - start;
    const crossFade = Math.min(
        Math.floor(LOOP_CROSSFADE_SEC * sampleRate),
        Math.floor(keptFrames / 2)
    );

    const loopBuffer = ctx.createBuffer(channels, keptFrames, sampleRate);

    for (let c = 0; c < channels; c++) {
        const out = loopBuffer.getChannelData(c);
        const src = channelData[c];
        // copie de la partie audible
        for (let i = 0; i < keptFrames; i++) {
            out[i] = src[start + i];
        }
        // crossfade à la jonction de boucle : les dernières frames (fin du son)
        // sont fondues progressivement vers les premières frames (début du son),
        // si bien que la reprise au début retombe sur un contenu déjà amorcé
        // -> pas de saut d'amplitude, donc pas de clic à chaque cycle
        for (let i = 0; i < crossFade; i++) {
            const headWeight = i / crossFade; // 0 -> 1
            const tailIndex = keptFrames - crossFade + i;
            out[tailIndex] = out[tailIndex] * (1 - headWeight) + src[start + i] * headWeight;
        }
    }

    console.log(
        "[audio] trimLoopSilence: conservé " + (keptFrames / sampleRate).toFixed(3) + "s sur " +
        sourceBuffer.duration.toFixed(3) + "s (silence retiré: début " +
        (start / sampleRate).toFixed(3) + "s, fin " + ((totalFrames - end) / sampleRate).toFixed(3) +
        "s), crossfade " + (crossFade / sampleRate * 1000).toFixed(1) + "ms"
    );

    return loopBuffer;
}

function initThree() {
    //create a div to show the 3d scene and insert it between top and bottom bar
    /*
    let gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    let lastDiv= document.getElementsByClassName("bottomBar")[0];
    document.body.insertBefore(gameDiv, lastDiv)
    */
   
    //screens merge chatgpt change 
   let gameDiv = document.getElementById("gameContainer");


    // scene b
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 500, 10000 );

    // camera
    // NB: Vector3.set(x, y, z) attend des nombres. Lui passer un Vector3 (RAPIER
    // ou THREE) met y/z à undefined -> NaN dans la matrice caméra, ce qui faisait
    // planter l'AudioListener positionnel au premier rendu (setPosition: NaN).
    // copy() lit v.x/v.y/v.z et accepte un Vector3 de RAPIER (duck typing).
    camera = new THREE.PerspectiveCamera( 51.6150, window.innerWidth / (window.innerHeight*gameHeightFactor()) , 0.5, 10000 );
    camera.position.copy(spawnPosition);
    camera.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0), Math.PI/2);
    scene.add(camera);

    //init audio
    initAudioSystem()

    // lights
    var light;
    scene.add( new THREE.AmbientLight( 0x666666 ) );

    /*light = new THREE.DirectionalLight( 0xffffff, 11 );
    var shadowCamSize = 700;
    light.position.set( -451, 185 , 215 );

    light.castShadow = true;
    //shadow projection settings
    light.shadow.mapSize.width = 1024*4;
    light.shadow.mapSize.height = 1024*4;
    light.shadow.camera.near = -200;
    light.shadow.camera.far = 1500; 
    light.shadow.camera.left = shadowCamSize;
    light.shadow.camera.right = -shadowCamSize;
    light.shadow.camera.top = -shadowCamSize;
    light.shadow.camera.bottom = shadowCamSize;
    light.shadow.bias = -0.0015;

    scene.add( light );
    scene.add( light.target );
    light.target.position.copy(spawnPosition);

    //scene.add( new THREE.CameraHelper( light.shadow.camera ) );*/
    var oldLightPosition = new RAPIER.Vector3(-451, 185 , 215);
    var csmLightPosition = SubtTwoVec3(spawnPosition, oldLightPosition);
    camera.far = 2000
    //console.log("camera far value", camera.far);

    csm = new CSM({
        maxFar: 200,                   // Distance max couverte par les ombres (ex: 1000)
        cascades: 4,                          // Nombre de découpages du frustum (3 ou 4 recommandé)
        // résolution des ombres divisée par 4 sur appareil tactile (économie mémoire/GPU)
        shadowMapSize: document.body.classList.contains("touchDetected") ? 1024*3/4 : 1024*3,
        camera: camera,                       // Votre PerspectiveCamera principale
        parent: scene,                        // Le conteneur où CSM va injecter ses lumières d'ombre
        mode: 'practical',                    // Répartition intelligente : 'practical', 'uniform' ou 'logarithmic'
        lightDirection: new THREE.Vector3().copy(csmLightPosition).normalize(), //devrait reprendre la direction de mon ancien soleil
        lightIntensity: 3.0,                  // Intensité de la lumière globale
        shadowBias: -0.00025,                  // Évite les artefacts de moirage (shadow acne)
        fade: true,                            // Transition fluide et invisible entre chaque cascade d'ombre
        noLastCascadeCutOff: true
    });

    csm.lightMargin = 1500;
    //csm.shadowNormalBias = 0.05 // 💡 AJOUT : Évite que les ombres clignotent selon l'orientation

    for ( let i = 0; i < csm.lights.length; i ++ ) {
        // Force la shadow map à se caler sur des pixels fixes pour bloquer le scintillement au mouvement
        csm.lights[i].shadow.autoUpdate = true; 
    }
    csmHelper = new CSMHelper(csm);
    csmHelper.visible = false; // Passez à false en production
    scene.add(csmHelper);

    //initialize particle emitter 
    // Create a batched renderer for efficient particle rendering
    batchedRenderer = new QUARKS.BatchedRenderer();
    scene.add(batchedRenderer);
    
    // Create a particle system
    particleSystem = new QUARKS.ParticleSystem({
        // Duration of the particle system in seconds
        duration: 3.5,
        // Whether the particle system should loop
        looping: true,
        // Emission shape (where particles are emitted from)
        shape: new QUARKS.PointEmitter(),
        emissionOverTime: new QUARKS.PiecewiseBezier([[new QUARKS.Bezier(2, 8, 15, 9), 0]]),
        
        // Initial particle properties
        startLife: new QUARKS.IntervalValue(0.8, 3.5),
        startSpeed: new QUARKS.IntervalValue(0.8, 1.5),
        startSize: new QUARKS.IntervalValue(0.08, 0.17),
        startColor: new QUARKS.ConstantColor(new THREE.Vector4(0, 0, 0, 1)),
        
        // Whether to use world space coordinates
        worldSpace: true,
        
        // Material for particles
        material: new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            blending: THREE.NormalBlending,
        }),
        
        // Behaviors controlling particle evolution over time
        behaviors: [
            new QUARKS.ColorOverLife(
                new QUARKS.Gradient(
                        [[new QUARKS.RandomColor(new QUARKS.Vector4(0, 0, 0, 1), new QUARKS.Vector4(0.3, 0.3, 0.3, 1)), 0], [new QUARKS.Vector3(0.6, 0.6, 0.6), 1]],// random around black to grey 
                        [[0.60, 0], [0, 1]] //  Semi transparent to fully transparent
                    )
                ),
                
                new QUARKS.ApplyForce(particleForce, new QUARKS.ConstantValue(1)),
                //new QUARKS.LimitSpeedOverLife(new QUARKS.PiecewiseBezier([[new QUARKS.Bezier(1, 0.002, 0.001, 0.0005), -0.8]]), 0.2),
                new QUARKS.SpeedOverLife(new QUARKS.PiecewiseBezier([[new QUARKS.Bezier(1, 0.005, 0, 0), 0]])),
                
                new QUARKS.Noise(
                    new QUARKS.ConstantValue(0.15), //frequency
                    new QUARKS.ConstantValue(0.22), // power
                    new QUARKS.ConstantValue(0.3), //pos amount
                    new QUARKS.ConstantValue(0.0015) // rot amount
                ),
                
                new QUARKS.SizeOverLife(new QUARKS.PiecewiseBezier([[new QUARKS.Bezier(1, 1, 1.5, 4), 0]]))
        ]
    })
    
    // Add the particle system to the scene
    scene.add(particleSystem.emitter);
    
    // Add the particle system to the batched renderer
    batchedRenderer.addSystem(particleSystem);
    //en of the particle code

    //create placeholder wheel models
    /*
    for (let j=0; j<wheelList.length; j++) {
        wheelList[j]= (new THREE.Mesh(new THREE.CylinderGeometry(wheelRadius, wheelRadius, 0.2, 6), cubeMaterial));
        scene.add(wheelList[j]);
    }*/

    //import the wheel models
    for (let k=0; k<wheelPathList.length; k++){
        loader.load( wheelPathList[k], function ( gltf ) {
            wheelList[k]= gltf.scene;
            wheelRadiusList[k]= new THREE.Box3().setFromObject(wheelList[k]).getSize(new THREE.Vector3()).y*0.5;
            scene.add(wheelList[k])
    
        }, undefined, function ( error ) {
    
            console.error( error );
    
        } );
        
    }
    /*
    // cube
    var cubeGeo = new THREE.BoxGeometry( cubeSizeX, cubeSizeY, cubeSizeZ);
    var cubeMaterial = new THREE.MeshPhysicalMaterial( { color: 0x888888 } );
    let cubeMesh = new THREE.Mesh(cubeGeo, cubeMaterial);
    meshes.push(cubeMesh);
    scene.add(cubeMesh);
    //heart model
    loader.load( '../assets/heart.glb', function ( gltf ) {

        let heartGeo= gltf.scene.children[0];
        heartGeo.name= "heart"
        heartRawPoints = new Float32Array(gltf.scene.children[0].geometry.getAttribute('position').array);
        //console.log('heartmodel'); console.log(gltf.scene.children[0])
        let heartScale= 0.5
        //heartGeo.scale.set( heartScale, heartScale, heartScale );
        heartGeo.material= cubeMaterial
        meshes.push(heartGeo)
        scene.add(heartGeo)

    }, undefined, function ( error ) {

        console.error( error );

    } );
    */
    //Geep chassis model
    loader.load( './assets/geepChassis.glb', function ( gltf ) {

        let geepMesh= gltf.scene;
        //TO DO: filter out the exhausts ?
        let geepGeo= makeMergedGeo(geepMesh);
        geepRawPoints= geepGeo.attributes.position.array;
        meshes.push(geepMesh)
        scene.add(geepMesh)

        // rattacher les sons positionnels au châssis : ils hériteront de la position
        // du meshes[0] synchronisé chaque frame avec le body physique dans la gameLoop

        // Son moteur orienté vers l'arrière du véhicule (côté échappement) :
        // convention locale du châssis -> avant = +X (offsetCam.x négatif = caméra
        // derrière ; fumée d'échappement à x=-1.6), axe des roues = Z, haut = +Y.
        // three.js envoie le +Z LOCAL du son comme orientation du PannerNode
        // (cf. PositionalAudio.updateMatrixWorld : _orientation.set(0, 0, 1)).
        // rotation.y = -PI/2 fait donc pointer +Z vers -X local = l'arrière.
        engineSound.position.set(-1.4, 0.2, 0);   // source décalée côté échappement
        engineSound.rotation.y = -Math.PI / 2;    // plein volume derrière, étouffé devant
        engineSound.setDirectionalCone(60, 150, 0.15); // plein dans les 60°, atténué au-delà de 150°

        if (engineSound) { geepMesh.add(engineSound); }
        if (skidSound) { geepMesh.add(skidSound); }

        //get the bounding box for car parameters
        geepBBoxSize = new THREE.Box3().setFromObject(geepMesh).getSize(new THREE.Vector3());
        //assign them to car parameters
        chassisWidth= geepBBoxSize.z;
        wheelBase= geepBBoxSize.x*0.55;

    }, undefined, function ( error ) {

        console.error( error );

    } );

    //map model 
    loader.load( './assets/map3.glb', function ( gltf ) {

        let mapGeo= gltf.scene
        // Merge geometries from model meshes (code copied from doppl3r KCC example - Trimesh Class)
        var geometry;
        var geometries = [];
        mapGeo.traverse(function(child) {
          if (child.isMesh) {
            // Translate geometry from mesh origin
            geometry = child.geometry;
            geometry.rotateX(child.rotation.x);
            geometry.rotateY(child.rotation.y);
            geometry.rotateZ(child.rotation.z);
            geometry.scale(child.scale.x, child.scale.y, child.scale.z);
            geometry.translate(child.position.x, child.position.y, child.position.z);
            // Push geometry to array for merge
            geometries.push(geometry);
            //gere les ombres pour ce modele
            child.castShadow = true;
            child.receiveShadow = true;
            child.frustumCulled = false;
            // INJECTER LE SHADER CSM :
            csm.setupMaterial(child.material);
          }
        });
        let geometries2 = [geometries[0], geometries[1], geometries[6], geometries[8], geometries[9], geometries[10]]//filter the models i want to keep for collisions
        geometry = mergeGeometries(geometries2);
        
        mapRawPoints = geometry.attributes.position.array
        mapIndices = new Uint32Array(geometry.getIndex().array)
        //mapGeo.material= new THREE.MeshStandardMaterial()
        scene.add( mapGeo );

        }, undefined, function ( error ) {
    
            console.log( error );
    
        }
    ); 
    
    //ufo model
    loader.load( './assets/ufo.glb', function ( gltf ) {
        scene.add( gltf.scene.children[0] );

        }, undefined, function ( error ) {
    
            console.log( error );
    
        }
    );
    
    //skybox model
    loader.load( './assets/skybox.glb', function ( gltf ) {

        let skyboxGeo= gltf.scene.children[0]
        //console.log('skybox object', skyboxGeo)
        let newMat= new THREE.MeshBasicMaterial()
        newMat.map= skyboxGeo.material.map
        skyboxGeo.material= newMat
        skyboxGeo.scale.set(globalScale, globalScale, globalScale)
        scene.add( skyboxGeo );

        }, undefined, function ( error ) {
    
            console.log( error );
    
        }
    );  

    //rendering stuff
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight*gameHeightFactor() );
    renderer.setClearColor( scene.fog.color );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap ;
    gameDiv.appendChild( renderer.domElement );

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    window.addEventListener( 'resize', onWindowResize, false );
    
    createOrbitControls(); 

}

function createOrbitControls() {

    // creates orbit controls class instance for camera controls
    controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = getVector3Magnitude(offsetCam);
    controls.maxDistance = getVector3Magnitude(offsetCam);
    controls.maxPolarAngle = Math.PI / 2;
    //controls.enableDamping = true ;
}

// Bracket de caméra libre en Pointer Events (inscription UNIQUE au chargement).
// · Pointer Events : canaux natifs du tactile (l'ancien onmousedown/onmouseup
//   était réassigné à chaque tick du gameLoop et non fiable sur mobile : le
//   drag tactile finissait par un "up" synthétique et le springarm ramenait
//   la caméra à sa position).
// · le bracket ne s'arme que si le pointer démarre sur le canvas : un tap sur
//   un bouton d'UI tactile ne déclenche plus la caméra libre.
function setupFreeCamPointerBracket() {
    const canvas = renderer.domElement;

    canvas.addEventListener("pointerdown", function (event) {
        useFreeCam = true;
        canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointerup", function () {
        useFreeCam = false;
    });
    canvas.addEventListener("pointercancel", function () {
        useFreeCam = false;
    });
}

function updateSpringarmCam(){

    //make the position of the camera
    let camFinalPosition = AddTwoVec3(rotateVectorByQuaternion(offsetCam, chassisRB.rotation()), new THREE.Vector3().copy(chassisRB.translation()));
    let camNextPosition= AddTwoVec3(vector3ByScalar(SubtTwoVec3(camFinalPosition, camCurrentPos), camMoveCoef), camCurrentPos);
    if (useFreeCam===false){camera.position.copy(new THREE.Vector3().copy(camNextPosition));}
    //make the position of the aim target of the camera
    let targetFinalPosition = new THREE.Vector3().copy(chassisRB.translation());
    let targetNextPosition = AddTwoVec3(vector3ByScalar(SubtTwoVec3(targetFinalPosition, targetCurrentPos), camAimCoef), targetCurrentPos);
    if (useFreeCam===false){camera.lookAt(new THREE.Vector3().copy(targetNextPosition));}
    //store calculated positions for the next frame
    camCurrentPos = camera.position;
    targetCurrentPos= targetNextPosition;
}

function makeMergedGeo(loadedGeo) {
    // Merge geometries from model meshes (code copied from doppl3r KCC example - Trimesh Class)
    var geometry;
    var geometries = [];
    loadedGeo.traverse(function(child) {
      if (child.isMesh) {
        // Translate geometry from mesh origin
        geometry = child.geometry;
        geometry.rotateX(child.rotation.x);
        geometry.rotateY(child.rotation.y);
        geometry.rotateZ(child.rotation.z);
        geometry.scale(child.scale.x, child.scale.y, child.scale.z);
        geometry.translate(child.position.x, child.position.y, child.position.z);
        // Push geometry to array for merge
        geometries.push(geometry);
      }
    });
    geometry = mergeGeometries(geometries);
    return geometry;
}


function onWindowResize() {
    camera.aspect = window.innerWidth / (window.innerHeight*gameHeightFactor()) ;
    camera.updateProjectionMatrix();
    //controls.handleResize();
    renderer.setSize( window.innerWidth, window.innerHeight*gameHeightFactor() );
}

// ==================================================================
// SONDAGE MANETTE (appelé à chaque frame d'animate())
// ==================================================================
// Fonctionne sur l'écran d'intro (Menu ou A -> startGame) comme en jeu
// (gâchettes, stick, boutons de face). Les actions ponctuelles utilisent
// des fronts montants (appui frais) pour éviter les répétitions à 60 Hz.
function updateGamepadInput() {

    if (navigator.getGamepads === undefined) return;

    const pads = navigator.getGamepads();
    let pad = null;
    for (let i = 0; i < pads.length; i++) {
        if (pads[i] !== null && pads[i].connected) { pad = pads[i]; break; }
    }

    // aucune manette -> on rend la main au clavier si nécessaire
    if (pad === null) {
        if (gamepadRouting) {
            GoingForward = GoingBackward = GoingLeft = GoingRight = Flipping = Braking = false;
            gamepadRouting = false;
        }
        return;
    }

    // manette connectée : afficher les symboles manette dans l'UI
    // (couvre le cas d'une manette déjà connectée au chargement de la page,
    // pour laquelle le navigateur ne renvoie pas l'événement gamepadconnected)
    if (!document.body.classList.contains("gamepadDetected")) {
        document.body.classList.add("gamepadDetected");
    }

    // lecture des boutons (les gâchettes analogiques s'activent au-delà du seuil)
    const btnPressed = function(index) {
        const b = pad.buttons[index];
        if (b === undefined) return false;
        return b.pressed || b.value > GP_TRIGGER_THRESHOLD;
    };

    const aPressed    = btnPressed(GP_BTN.A);
    const bPressed    = btnPressed(GP_BTN.B);
    const xPressed    = btnPressed(GP_BTN.X);
    const yPressed    = btnPressed(GP_BTN.Y);
    const rtPressed   = btnPressed(GP_BTN.RT);
    const ltPressed   = btnPressed(GP_BTN.LT);
    const menuPressed = btnPressed(GP_BTN.MENU);
    const dpadLeftPressed  = btnPressed(GP_BTN.DPAD_LEFT);
    const dpadRightPressed = btnPressed(GP_BTN.DPAD_RIGHT);

    // ---- fronts montants (pressée cette frame, relâchée la frame précédente)
    const wasPressed = function(index) {
        return gamepadPrevButtons[index] === true;
    };
    // Menu ou A : démarrer le jeu (uniquement depuis l'écran d'intro :
    // startGame() togglerait le son à chaque appel, on protège donc le jeu en cours)
    if (aPressed && !wasPressed(GP_BTN.A)) {
        if (!isGameRunning && typeof window.startGame === "function") { window.startGame(); }
    }
    if (menuPressed && !wasPressed(GP_BTN.MENU)) {
        if (!isGameRunning && typeof window.startGame === "function") { window.startGame(); }
    }
    if (btnPressed(GP_BTN.LB) && !wasPressed(GP_BTN.LB)) {
        if (typeof window.soundBtnToggle === "function") { window.soundBtnToggle(); }
    }
    if (btnPressed(GP_BTN.RB) && !wasPressed(GP_BTN.RB)) {
        if (typeof window.musicBtnToggle === "function") { window.musicBtnToggle(); }
    }
    if (btnPressed(GP_BTN.VIEW) && !wasPressed(GP_BTN.VIEW)) {
        if (typeof window.restartGame === "function") { window.restartGame(); }
    }

    // mémorise l'état pour la détection des fronts de la frame suivante
    gamepadPrevButtons = pad.buttons.map(function(b) { return b.pressed; });

    // ---- conduite : la manette prend le relais uniquement quand elle est utilisée
    const stickX = (pad.axes[0] !== undefined) ? pad.axes[0] : 0;
    const drivingActive = aPressed || bPressed || xPressed || yPressed || rtPressed || ltPressed || dpadLeftPressed || dpadRightPressed || Math.abs(stickX) > GP_STICK_DEADZONE;

    if (drivingActive) {
        gamepadRouting = true;
        GoingForward  = (rtPressed || aPressed);
        GoingBackward = (ltPressed || xPressed);   // LT et X = marche arrière
        // croix directionnelle ET stick gauche tournent tous les deux :
        // OU logique (pas un combo, l'un ou l'autre suffit)
        GoingLeft     = (stickX < -GP_STICK_DEADZONE) || dpadLeftPressed;
        GoingRight    = (stickX >  GP_STICK_DEADZONE) || dpadRightPressed;
        Flipping      = yPressed;
        Braking       = bPressed;   // B = frein à main (équivalent de la barre d'espace)
    } else if (gamepadRouting) {
        // la manette vient d'être relâchée : remise à zéro en une seule frame,
        // puis le clavier reprend naturellement la main
        GoingForward = GoingBackward = GoingLeft = GoingRight = Flipping = Braking = false;
        gamepadRouting = false;
    }
}

// Détection officielle du navigateur : bascule l'affichage des symboles manette
window.addEventListener("gamepadconnected", function(event) {
    document.body.classList.add("gamepadDetected");
    console.info("[manette] détectée:", event.gamepad.id);
});
window.addEventListener("gamepaddisconnected", function(event) {
    document.body.classList.remove("gamepadDetected");
    console.info("[manette] déconnectée:", event.gamepad.id);
});

// ==================================================================
// ÉCRAN TACTILE : détection + contrôles (Pointer Events)
// ==================================================================
// - Détection : pointeur "grossier" (téléphone/tablette) ou écran tactile
//   sans souris. Un laptop tactile avec souris ne déclenche PAS le mode
//   tactile. "?touch=1" dans l'URL force le mode pour tester sur desktop.
// - L'UI tactile est dans #screen2 (index.html) : invisible pendant l'intro.
// - Le tactile n'écrit les entrées de conduite que pendant qu'il est utilisé
//   (même schéma que la manette), puis rend la main au clavier/manette.
function detectTouchDevice() {
    // mode de test forcé depuis l'URL
    let isTouch = window.location.search.includes("touch=1");
    if (!isTouch) {
        const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
        const hasTouch = (navigator.maxTouchPoints > 0) || ("ontouchstart" in window);
        const noFine = !(window.matchMedia && window.matchMedia("(pointer: fine)").matches);
        isTouch = coarse || (hasTouch && noFine);
    }
    if (isTouch && !document.body.classList.contains("touchDetected")) {
        document.body.classList.add("touchDetected");
    }
    console.info("[tactile] appareil tactile détecté:", isTouch);
    return isTouch;
}

// Installe les contrôles tactiles : 4 boutons de conduite (avancer, reculer,
// tourner à gauche, tourner à droite) + bouton flip. Chaque bouton est un
// "hold" : maintenu = true, relâché = false. La capture du pointerId garantit
// que plusieurs doigts peuvent servir plusieurs boutons simultanément.
function initTouchControls() {
    const driveButtons = [
        { id: "fwdTouchBtn",   set: function(v) { touchBtnForwardHeld = v; } },
        { id: "backTouchBtn",  set: function(v) { touchBtnBackwardHeld = v; } },
        { id: "leftTouchBtn",  set: function(v) { touchBtnLeftHeld = v; } },
        { id: "rightTouchBtn", set: function(v) { touchBtnRightHeld = v; } },
        { id: "flipTouchBtn",  set: function(v) { touchFlipHeld = v; } }
    ];

    driveButtons.forEach(function (btnDef) {
        const element = document.getElementById(btnDef.id);
        if (element === null) return;

        element.addEventListener("pointerdown", function (event) {
            btnDef.set(true);
            element.setPointerCapture(event.pointerId);
        });
        const release = function () {
            btnDef.set(false);
        };
        element.addEventListener("pointerup", release);
        element.addEventListener("pointercancel", release);
        element.addEventListener("lostpointercapture", release);
    });
}

// Bouton plein écran (haut gauche, sous la top bar), mode tactile uniquement.
function setupFullscreenToggle() {
    const fsBtn = document.getElementById("fullscreenTouchBtn");
    if (fsBtn === null) return;

    const applyIcon = function () {
        fsBtn.innerHTML = document.fullscreenElement ? "&#8682;" : "&#9974;";
    };
    fsBtn.addEventListener("pointerdown", function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    });
    document.addEventListener("fullscreenchange", applyIcon);
    applyIcon();
}

// applique l'état tactile aux entrées de conduite (sondé chaque frame par animate())
function updateTouchInput() {
    const touchActive = touchBtnForwardHeld || touchBtnBackwardHeld ||
                        touchBtnLeftHeld || touchBtnRightHeld || touchFlipHeld;

    if (touchActive) {
        touchRouting = true;
        GoingForward  = touchBtnForwardHeld;
        GoingBackward = touchBtnBackwardHeld;
        GoingLeft     = touchBtnLeftHeld;
        GoingRight    = touchBtnRightHeld;
        Flipping      = touchFlipHeld;
    } else if (touchRouting) {
        // relâchement : remise à zéro en une frame, le clavier/manette reprend
        GoingForward = GoingBackward = GoingLeft = GoingRight = Flipping = false;
        touchRouting = false;
    }
}

// détection + branchement (le module s'exécute après le parsing du DOM)
detectTouchDevice();
initTouchControls();
setupFullscreenToggle();
setupFreeCamPointerBracket();

function animate() {
    // sondage manette + tactile : écran d'intro comme écran de jeu
    updateGamepadInput();
    updateTouchInput();
    // Update the batched renderer of particle emitter
    batchedRenderer.update(dt); // Pass delta time in seconds
    // NOTE : renderer.render() appelle scene.updateMatrixWorld(), ce qui met à jour
    // l'audioListener (enfant de la caméra) et les PositionalAudio (enfants du
    // châssis) avant le rendu. Le gameLoop appelle aussi camera.updateMatrixWorld().
    //renders the Three js scene to the canvas
    renderer.render(scene, camera);
    //asks the browser to update the canvas ?
    requestAnimationFrame( animate );
}


//two functions (copied from chatGPT) used to get my directional vector3 using the orientation quaternion
function multiplyQuaternions(q, r) {
    return {
        w: q.w * r.w - q.x * r.x - q.y * r.y - q.z * r.z,
        x: q.w * r.x + q.x * r.w + q.y * r.z - q.z * r.y,
        y: q.w * r.y - q.x * r.z + q.y * r.w + q.z * r.x,
        z: q.w * r.z + q.x * r.y - q.y * r.x + q.z * r.w
    };
}

function rotateVectorByQuaternion(v, q) {
    // Convertir le vecteur en quaternion avec une partie w = 0
    let p = { w: 0, x: v.x, y: v.y, z: v.z };

    // Calculer q * p * q^-1 (où q^-1 est l'inverse du quaternion q)
    let q_conjugate = { w: q.w, x: -q.x, y: -q.y, z: -q.z };

    let q_p = multiplyQuaternions(q, p);
    let q_p_q_inverse = multiplyQuaternions(q_p, q_conjugate);

    // Le vecteur résultant est contenu dans la partie x, y, z du résultat
    return { x: q_p_q_inverse.x, y: q_p_q_inverse.y, z: q_p_q_inverse.z };
}

function getRayLength(rayDir, timeOfImpact){
    //give the correct value to the vector by multiplying it by ToI
    let tempVector= {
    x:rayDir.x*timeOfImpact,
    y:rayDir.y*timeOfImpact,
    z:rayDir.z*timeOfImpact
    };
    //calculate the magnitude of the vector
    return Math.sqrt(Math.pow(tempVector.x, 2)+Math.pow(tempVector.y, 2)+Math.pow(tempVector.z, 2))
}

function getVector3Magnitude(vector){
    //calculate the magnitude of the vector
    return Math.sqrt(Math.pow(vector.x, 2)+Math.pow(vector.y, 2)+Math.pow(vector.z, 2))
}

function vector3ByScalar(vec3, scalar){
    let tempVector2= {
        x:vec3.x*scalar,
        y:vec3.y*scalar,
        z:vec3.z*scalar
    };
    return {x:tempVector2.x, y:tempVector2.y, z:tempVector2.z}
}
function AddTwoVec3(vector1, vector2){
    let tempVector3= {
        x:vector1.x+vector2.x,
        y:vector1.y+vector2.y,
        z:vector1.z+vector2.z
    }
    return {x:tempVector3.x, y:tempVector3.y, z:tempVector3.z}
}
function SubtTwoVec3(vector1, vector2){
    let tempVector4= {
        x:vector1.x-vector2.x,
        y:vector1.y-vector2.y,
        z:vector1.z-vector2.z
    }
    return {x:tempVector4.x, y:tempVector4.y, z:tempVector4.z}
}
function crossProduct(vector1, vector2){
    if (Object.keys(vector1).length !== 3 || Object.keys(vector2).length !== 3) {
        throw new Error("Les vecteurs doivent avoir 3 composantes chacun.");
    }
    return {x:(vector1.y*vector2.z-vector1.z*vector2.y), y:(vector1.z*vector2.x-vector1.x*vector2.z), z:(vector1.x*vector2.y-vector1.y*vector2.x)}
}
function dotProduct(vector1, vector2) {
    // Ensure the vectors contain x, y, and z components
    if (!("x" in vector1 && "y" in vector1 && "z" in vector1) ||
        !("x" in vector2 && "y" in vector2 && "z" in vector2)) {
        throw new Error("Vectors must have x, y, and z properties.");
    }
    // Calculate the dot product
    return vector1.x * vector2.x +
           vector1.y * vector2.y +
           vector1.z * vector2.z;
}

//declare variables of initRapier
var ufo;
var world;
var CubeBodyDesc, CubeBody, CubeColDesc, CubeCol;
var heartBodyDesc, heartBody, heartColDesc, heartCol;
var geepBodyDesc, geepBody, geepColDesc, geepCol;
var mapBodyDesc, mapBody, mapColDesc, mapCol;
var GoingForward, GoingBackward, GoingLeft, GoingRight, Braking, Flipping, WheelTurn, WheelSpin;
var chassisRB, isHoveringList, hoverDistList, com, ray;
var localUp, localDown, localFwd, localRight, posA, posB, posC, posD, wheelPointList;

function initRapier() {

    //set all the models except skybox to cast shadows
    scene.traverse( function ( node ) {
        if ( node.isMesh && node.name !== "skybox") {
            //console.log(node.material)
            node.material.side = THREE.FrontSide;
            node.material.shadowSide = THREE.DoubleSide;
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.metalness = 0;
            node.material.roughness = 0.9;
            csm.setupMaterial(node.material)
        }
    } );

    //declare a variable to animate the flying saucer, after loading is finished
    ufo= scene.getObjectByName("ufo");


    world = new RAPIER.World({ x: 0.0, y: -9.81, z: 0.0 });
    world.timestep = dt
    //console.log("world timestep", world.timestep)
    /*
    // Create the Cube physics
    CubeBodyDesc = RAPIER.RigidBodyDesc.dynamic();
    CubeBody = world.createRigidBody(CubeBodyDesc);
    CubeBody.setTranslation(spawnPosCube)
    CubeColDesc = RAPIER.ColliderDesc.cuboid(cubeSizeX*0.5,cubeSizeY*0.5,cubeSizeZ*0.5);
    CubeCol = world.createCollider(CubeColDesc, CubeBody);
    bodies.push(CubeBody);

    //create the heart physics
    heartBodyDesc = RAPIER.RigidBodyDesc.dynamic();
    heartBody = world.createRigidBody(heartBodyDesc);
    heartColDesc = RAPIER.ColliderDesc.convexHull(heartRawPoints);
    heartCol = world.createCollider(heartColDesc, heartBody)
    heartBody.setTranslation(new RAPIER.Vector3(425, -40, -120))

    bodies.push(heartBody)
    */

    //create geep chassis physics
    geepBodyDesc= RAPIER.RigidBodyDesc.dynamic();
    geepBody= world.createRigidBody(geepBodyDesc);
    geepColDesc= RAPIER.ColliderDesc.convexHull(geepRawPoints);
    geepCol= world.createCollider(geepColDesc, geepBody);
    geepBody.setTranslation( spawnPosition)
    geepBody.setRotation( spawnOrientation )
    //console.log("chass rotation", geepBody.rotation())
    
    bodies.push(geepBody) 

    console.log("bodies", bodies)
    console.log("meshes", meshes)

    //create map physics
    mapBodyDesc = RAPIER.RigidBodyDesc.fixed()
    mapBody = world.createRigidBody(mapBodyDesc)
    mapColDesc = RAPIER.ColliderDesc.trimesh(mapRawPoints, mapIndices, 'FIX_INTERNAL_EDGES');
    mapCol = world.createCollider(mapColDesc, mapBody)

    //initialize drive
    GoingForward  = false
    GoingBackward = false
    GoingLeft     = false
    GoingRight    = false
    Braking       = false
    Flipping      = false
    WheelTurn     = 0.0
    WheelSpin     = 0.0

    //initialize hover
    chassisRB = geepBody;
    isHoveringList = [false, false, false, false];
    hoverDistList = [0.0, 0.0, 0.0, 0.0];
    com= chassisRB.localCom(); //chassis get the center of mass
    ray = new RAPIER.Ray();
    //calculate the local position of each wheel point where we will cast the ray from
    localUp = {x:0, y:1, z:0};
    localDown = {x:0, y:-1, z:0};
    localFwd={x:1, y:0, z:0};
    localRight={x:0, y:0, z:1};
    posA= AddTwoVec3(com, AddTwoVec3(vector3ByScalar(localRight, chassisWidth*0.5*-1), vector3ByScalar(localFwd, wheelBase*0.5)));
    posB= AddTwoVec3(com, AddTwoVec3(vector3ByScalar(localRight, chassisWidth*0.5), vector3ByScalar(localFwd, wheelBase*0.5)));
    posC= AddTwoVec3(com, AddTwoVec3(vector3ByScalar(localRight, chassisWidth*0.5*-1), vector3ByScalar(localFwd, wheelBase*0.5*-1)));
    posD= AddTwoVec3(com, AddTwoVec3(vector3ByScalar(localRight, chassisWidth*0.5), vector3ByScalar(localFwd, wheelBase*0.5*-1)));
    //creer un array de positions locales
    wheelPointList = [posA, posB, posC, posD];

    //GET KEYS
    //two listeners to get key events
    document.addEventListener("keydown", event => {
        
        if(event.key === "ArrowRight") {
            GoingRight = true;
        }
        if(event.key === "ArrowLeft") {
            GoingLeft = true;
        }
        if(event.key === "ArrowUp") {
            GoingForward = true;
        }
        if(event.key === "ArrowDown") {
            GoingBackward = true;
        }
        if(event.key === "r") {
            Flipping = true;
        }
        if(event.key === " ") {
            Braking = true;
        }
    });
    document.addEventListener("keyup", event => {
        if(event.key === "ArrowRight") {
            GoingRight = false;
        }
        if(event.key === "ArrowLeft") {
            GoingLeft = false;
        }
        if(event.key === "ArrowUp") {
            GoingForward = false;
        }
        if(event.key === "ArrowDown") {
            GoingBackward = false;
        }
        if(event.key === "r") {
            Flipping = false;
        }
        if(event.key === " ") {
            Braking = false;   
        }
    });

    //start the physics loop
    //gameLoop();

}

//animate the models
let gameLoop = () => {
    if (!isGameRunning) return; // Arrête immédiatement la boucle si le jeu est stopped

    world.step();
    
    //updates display of threejs meshes
    for(var i=0; i !== meshes.length; i++){
        meshes[i].position.copy(bodies[i].translation());
        meshes[i].quaternion.copy(bodies[i].rotation());
    }
    //updates position of particle emitter
    var smokePosOffset = {x:-1.6, y:0.14, z:0.65};//local vec
    particleSystem.emitter.position.copy(AddTwoVec3(rotateVectorByQuaternion(smokePosOffset, meshes[0].quaternion), meshes[0].position));//calculate world smoke position
    particleSystem.emitter.quaternion.copy(meshes[0].quaternion);

    particleSystem.behaviors[1].direction = rotateVectorByQuaternion(particleForce, meshes[0].quaternion); //force vector oriented like car 
    //console.log("partSystem behaviour", particleSystem.behaviors[1].direction);

    //disable spring arm camera while a pointer is down on the canvas
    //useFreeCam bracketing handled by setupFreeCamPointerBracket() (single registration)
    if (useFreeCam){
        //updates the Orbitcontrols instance
        controls.update();
    }
    //updates the target of Orbitcontols instance
    controls.target.copy(chassisRB.translation());
    //updates springarm cam
    updateSpringarmCam();

    camera.updateMatrixWorld();
    //updates CSM Cascaded shadow map
    csm.update(); 
    if (csmHelper) csmHelper.update();

    //rotates the ufo by 1 degree every frame
    ufo.rotateY(Math.PI/360);

    
    //UPDATE DRIVE
    //prevents the chassis from being put to sleep
    chassisRB.wakeUp()
    //flipping feature in case the car is flipped
    let chasRot =  chassisRB.rotation();
    let worldUp= rotateVectorByQuaternion(localUp, chasRot)
    let worldRight= rotateVectorByQuaternion(localRight, chasRot);
    let worldFwd= rotateVectorByQuaternion(localFwd, chasRot);
    if (Flipping) {
        let cosine= dotProduct(worldUp, localUp);
        if ( cosine < 0.5) {
            chassisRB.setLinvel({x:0, y:0, z:0})
            chassisRB.setAngvel({x:0, y:0, z:0})
            let newPos= AddTwoVec3(chassisRB.translation(), vector3ByScalar(localUp, hoverDist*5));
            chassisRB.setTranslation(newPos)
            //reinitialiser l orientation
            chassisRB.setRotation({x:0, y:-0.7071068, z:0, w:0.7071068})
        }
    }
    //power coefficient based on the nbr of wheels touching the ground
    powerCoeff= (isHoveringList[0]+isHoveringList[1]+isHoveringList[2]+isHoveringList[3])*0.25
    if (powerCoeff === 0) { skidfx = false }
    else { skidfx = true }
    
    //commonly used physical information
    let currentVel= chassisRB.linvel();
    let currentSpeed= dotProduct(currentVel, worldFwd);
    let propSpeed= Math.min(Math.abs(currentSpeed)/maxSpeed, 1);
    let angularVel= chassisRB.angvel();
    //If going forward we want to reach our Max Speed
    if (GoingForward){
        let diff= maxSpeed - currentSpeed;
        //Apply an impulse proportial to the difference between our desired speed and our actual speed
        let imp= vector3ByScalar(worldFwd, (diff * accGain * chassisMass) * powerCoeff);
        chassisRB.applyImpulse(imp)
    }
    //If reversing we reach -Max Speed
    if (GoingBackward){
        let diff= -maxSpeed - currentSpeed;
        let imp= vector3ByScalar(worldFwd, (diff * decGain * chassisMass) * powerCoeff);
        chassisRB.applyImpulse(imp)
    }
    //If braking we reach 0
    if (Braking){
        let imp= vector3ByScalar(worldFwd, (-currentSpeed * brakeGain * chassisMass) * powerCoeff);
        chassisRB.applyImpulse(imp)
    }
    //Check if we can turn. We check if the magnitude of our angular velocity is less than our max turn speed. Max Turning speed depends on velocity
    let mTS= Math.min(Math.abs(currentSpeed), (1-propSpeed) * maxTurnSpeed)
    let canTurn= (Math.abs(dotProduct(angularVel, worldUp)) < mTS)
    //If we can turn and we're turning right
    if (canTurn && GoingLeft){
        //Apply an angular impulse to turn us left
        let imp= vector3ByScalar(worldUp, (turnGain * chassisMass) * powerCoeff);
        if(GoingBackward){ imp= vector3ByScalar(imp, -1)}
        chassisRB.applyTorqueImpulse(imp)
    }
    if (canTurn && GoingRight){
        //Apply an angular impulse to turn us right
            let imp= vector3ByScalar(worldUp, (-turnGain * chassisMass) * powerCoeff);
            if(GoingBackward){ imp= vector3ByScalar(imp, -1)}
            chassisRB.applyTorqueImpulse(imp)
        }
        //Work out how fast we're sliding left/right and compensate according to the grip property. We just allow the car to slide if its braking
        let slideSpeed= dotProduct(worldRight, currentVel);
        if (!Braking){
        let imp= vector3ByScalar(worldRight, (-slideSpeed*chassisMass*grip)*powerCoeff);
        //Apply an impulse to compensate for sliding
        chassisRB.applyImpulse(imp)
        }
        //Apply an angular impulse to compensate for spinning
        if(!canTurn || (!GoingLeft && !GoingRight)){
        let imp= vector3ByScalar(worldUp, dotProduct(angularVel, worldUp)*(-turnGain*chassisMass)*powerCoeff);
        chassisRB.applyTorqueImpulse(imp)
        }
        //Apply Drag proportional to speed
        let imp= vector3ByScalar(currentVel, -1*(drag*chassisMass));
        chassisRB.applyImpulse(imp)


    //UPDATE HOVER 
    //Find the downward direction of the chassis in world space
    let worldDownDir = rotateVectorByQuaternion(localDown, chasRot);
    let linVel= chassisRB.linvel();
    //console.log("linVel", linVel)
    let angVel= chassisRB.angvel();
    //console.log("angVel", angVel)
    //console.log("Chassis Down Dir: ", worldDownDir);

    //for each wheel do
    for (let i=0; i<wheelPointList.length; i++) {
        isHoveringList[i]=false;
        //trouver les world coord des wheel points
        //appliquer la rotation
        let tempVar= rotateVectorByQuaternion(wheelPointList[i], chasRot)
        //appliquer la translation
        let worldWheelPoint = AddTwoVec3(tempVar, chassisRB.translation());
        //raycaster
        ray.dir= worldDownDir;
        ray.origin= worldWheelPoint;
        let hit = world.castRay(ray, 200, false, null, null, null, chassisRB);
        //console.log("wheel", i, "distance", hit.timeOfImpact);
        if (hit !== null) {
            if (hit.timeOfImpact<hoverDist) {
            let hitPoint = ray.pointAt(hit.timeOfImpact);
            //calculate point velocity at wheelpoint
            let pointVelocity = AddTwoVec3(linVel, crossProduct(angVel, SubtTwoVec3(worldWheelPoint, chassisRB.translation())));
            let diff= SubtTwoVec3(hitPoint, worldWheelPoint);
            //force of the spring 
            let f= -strength * (hoverDist - hit.timeOfImpact);
            //force of the damper 
            f= f -damping * dotProduct(pointVelocity, diff)
            let force= vector3ByScalar(vector3ByScalar(diff, f), chassisMass);
            //console.log("force at wheel", i, force)

            //Apply the force to the wheelPoint
            chassisRB.applyImpulseAtPoint(force, worldWheelPoint)
            //set the value to say we are hovering
            isHoveringList[i]= true;
            hoverDistList[i]=hit.timeOfImpact;
                }
            }
    }
    //UPDATE WHEEL MODELS
    let forwardVel= currentSpeed;
    //Update the wheels rotations
    if (GoingLeft){
        if(!(WheelTurn < -0.9)){
            WheelTurn= WheelTurn-0.1;
        }
    }
    if (GoingRight){
        if(!(WheelTurn > 0.9)){
            WheelTurn= WheelTurn+0.1;
        }
    }
    if (!GoingLeft && !GoingRight){
        if(WheelTurn !== 0){
            //WheelTurn= WheelTurn*0.8;
            if(WheelTurn>-0.1 && WheelTurn<0.1){
                WheelTurn=0;
            } else if (WheelTurn<0) { 
                WheelTurn= WheelTurn+0.1;
            } else if(WheelTurn>0){ 
                WheelTurn= WheelTurn-0.1
            }
        }
    }
    // Cap wheelspin
    WheelSpin= WheelSpin - (forwardVel*wheelSpincoeff);
    if(WheelSpin>360){
        WheelSpin= WheelSpin-360;
    } else if(WheelSpin<-360){
        WheelSpin= WheelSpin+360;
    }
    let WheelSpinRad= (WheelSpin*2*Math.PI)/360;
    //determine wheel positions
    for (let i=0; i<isHoveringList.length; i++) {
        if(isHoveringList[i]){ //when touching the ground
            //trouver les world coord des wheel points
            let worldWheelOffset= rotateVectorByQuaternion(wheelPointList[i], chasRot);
            let worldWheelPoint = AddTwoVec3(worldWheelOffset, chassisRB.translation());
            //trouver la coord du centre de la roue et appliquer la position au modele
            let wheelPos= SubtTwoVec3(AddTwoVec3(worldWheelPoint, vector3ByScalar(worldDownDir, hoverDistList[i])) , vector3ByScalar(worldDownDir, wheelRadiusList[i]));
            wheelList[i].position.copy(wheelPos);
        } else { //when not touching ground
            let worldWheelOffset= rotateVectorByQuaternion(wheelPointList[i], chasRot);
            let worldWheelPoint = AddTwoVec3(worldWheelOffset, chassisRB.translation());
            let wheelPos= SubtTwoVec3(AddTwoVec3(worldWheelPoint, vector3ByScalar(worldDownDir, hoverDist)) , vector3ByScalar(worldDownDir, wheelRadiusList[i]));
            wheelList[i].position.copy(wheelPos);
        }
        //orient the wheel models like the chassis and upright
        wheelList[i].quaternion.copy(chassisRB.rotation())
        
        //steering of the front wheels
        if (i === 0 || i === 1){
            let tempRot= maxWheelTurn*WheelTurn;
            wheelList[i].rotateOnWorldAxis(new THREE.Vector3().copy(worldDownDir), tempRot)
        }
        //update the spinning of the wheels
        wheelList[i].rotateZ(WheelSpinRad)
    }
    //deal with the Audio of the car
    if (isSoundOn && engineSound) {
        if (!engineSound.isPlaying) engineSound.play();
        if (skidSound && skidSound.buffer && !skidSound.isPlaying) skidSound.play();

        // SÉCURITÉ : S'assurer que la vitesse est bien un nombre valide
        let safeSpeed = typeof currentSpeed === 'number' && !isNaN(currentSpeed) ? currentSpeed : 0;

        // 1. Gestion du son du Moteur : petit modèle de régime moteur
        //    (ralenti + courbe de vitesse + coup d'accélérateur)
        //    - sqrt : le régime varie fort en début d'accélération (l'ancienne
        //      courbe linéaire plafonnée restait muette jusqu'à ~18 de vitesse)
        //    - accélérateur : le moteur monte dans les tours immédiatement,
        //      même à l'arrêt (montée ~90 ms, retombée ~380 ms au relâchement)
        const speedNorm = Math.min(Math.abs(safeSpeed) / maxSpeed, 1);
        const speedRate = Math.sqrt(speedNorm);

        const throttleInput = (GoingForward || GoingBackward || Flipping) ? 1 : 0;
        throttleBlend += (throttleInput - throttleBlend) * (throttleInput > throttleBlend ? 0.25 : 0.06);

        let enginePlaybackRate = 0.9 + (3.0 - 0.9) * Math.min(speedRate * 0.75 + throttleBlend * 0.25, 1);
        engineSound.setPlaybackRate(enginePlaybackRate);

        // 2. Gestion du son de Dérapage (basé sur Director)
        // SÉCURITÉ : S'assurer que angularVel.y existe et est un nombre valide
        let safeAngularY = angularVel && typeof angularVel.y === 'number' && !isNaN(angularVel.y) ? angularVel.y : 0;
        let skidValue = Math.abs(safeAngularY); 
        
        if (skidfx && skidValue > 1.4) {
            let skidVolume = skidValue * Math.abs(safeSpeed * 0.007) * 4;
            skidVolume = Math.min(Math.max(skidVolume, 0), 1.5); // Reste bien entre 0.0 et 1.0
            skidSound.setVolume(skidVolume);
        } else {
            skidSound.setVolume(0);
        }
    } else {
        if (engineSound && engineSound.isPlaying) engineSound.stop();
        if (skidSound && skidSound.isPlaying) skidSound.stop();
    }
    
    setTimeout(gameLoop, 10);
};

// Rendre la boucle gameloop accessible depuis le fichier index.html
window.startGameLoop = function() {
    if (!isGameRunning) {
        isGameRunning = true;
        gameLoop();
    }
};

window.stopGameLoop = function() {
    isGameRunning = false;
};

window.resetPhysicsAndScene = function() {
    // 1. On stoppe la boucle
    window.stopGameLoop();

    // 2. On remet à zéro les entrées de conduite pour éviter que la voiture reparte seule
    GoingForward = false;
    GoingBackward = false;
    GoingLeft = false;
    GoingRight = false;
    Braking = false;
    Flipping = false;
    WheelTurn = 0.0;
    WheelSpin = 0.0;
    throttleBlend = 0; // remise à zéro du régime moteur lissé
    

    // 3. On replace le corps physique (Rapier) au point de départ
    if (chassisRB) {
        chassisRB.setTranslation(spawnPosition);
        chassisRB.setRotation(spawnOrientation);
        // On réinitialise les forces et vitesses accumulées pour immobiliser le véhicule
        chassisRB.setLinvel({ x: 0, y: 0, z: 0 });
        chassisRB.setAngvel({ x: 0, y: 0, z: 0 });
    }
    
    // Arrêter les sons du véhicule
    if (engineSound && engineSound.isPlaying) engineSound.stop();
    if (skidSound && skidSound.isPlaying) skidSound.stop();
};

const customCursor = document.getElementById('customCursor');
const interactiveButtons = document.querySelectorAll('.startBtn, .btnScreen2');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

interactiveButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
    });
    button.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });
});

// Rendre les contrôles audio accessibles depuis les boutons onclick de index.html
window.musicBtnToggle = function() {
    isMusicOn = !isMusicOn;
    if (isMusicOn) {
        document.getElementById("musicBtn").innerHTML = "music <br> On";
        musicHtmlAudio.play();
    } else {
        document.getElementById("musicBtn").innerHTML = "music <br> Off";
        musicHtmlAudio.pause();
    }
};

window.soundBtnToggle = function() {
    isSoundOn = !isSoundOn;
    if (isSoundOn) {
        document.getElementById("soundBtn").innerHTML = "sound <br> On";
        // L'AudioContext est créé dès le chargement de la page (hors geste utilisateur)
        // et reste donc "suspended" (politique autoplay des navigateurs). Il ne peut
        // démarrer qu'après un geste utilisateur: le clic sur "START" (startGame())
        // appelle automatiquement cette fonction, ce qui débloque le contexte.
        if (audioListener && audioListener.context.state !== "running") {
            audioListener.context.resume();
        }
    } else {
        document.getElementById("soundBtn").innerHTML = "sound <br> Off";
    }
};