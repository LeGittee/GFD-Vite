(async()=>{(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const mc="167",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eg=0,xu=1,tg=2,bu=1,Su=2,yr=3,sr=0,vi=1,xi=2,Vr=0,_n=1,To=2,Mu=3,Eu=4,ig=5,gn=100,rg=101,ng=102,sg=103,ag=104,og=200,lg=201,cg=202,hg=203,fc=204,_c=205,dg=206,ug=207,pg=208,mg=209,fg=210,_g=211,gg=212,wg=213,yg=214,vg=0,xg=1,bg=2,Ao=3,Sg=4,Mg=5,Eg=6,Tg=7,Tu=0,Ag=1,Rg=2,Gr=0,Cg=1,Pg=2,Lg=3,Ig=4,Ng=5,Ug=6,Dg=7,Au="attached",Og="detached",Ru=300,Xn=301,qn=302,gc=303,wc=304,Ro=306,Yn=1e3,jr=1001,Co=1002,ci=1003,Cu=1004,ra=1005,Si=1006,Po=1007,vr=1008,xr=1009,Pu=1010,Lu=1011,na=1012,yc=1013,wn=1014,Hi=1015,sa=1016,vc=1017,xc=1018,Jn=1020,Iu=35902,Nu=1021,Uu=1022,Ui=1023,Du=1024,Ou=1025,Kn=1026,Zn=1027,bc=1028,Sc=1029,zu=1030,Mc=1031,Ec=1033,Lo=33776,Io=33777,No=33778,Uo=33779,Tc=35840,Ac=35841,Rc=35842,Cc=35843,Pc=36196,Lc=37492,Ic=37496,Nc=37808,Uc=37809,Dc=37810,Oc=37811,zc=37812,Fc=37813,Bc=37814,kc=37815,Hc=37816,Vc=37817,Gc=37818,jc=37819,Wc=37820,Xc=37821,Do=36492,qc=36494,Yc=36495,Fu=36283,Jc=36284,Kc=36285,Zc=36286,aa=2300,oa=2301,Qc=2302,Bu=2400,ku=2401,Hu=2402,zg=2500,Fg=0,Vu=1,$c=2,Bg=3200,kg=3201,Gu=0,Hg=1,Wr="",hi="srgb",Zt="srgb-linear",eh="display-p3",Oo="display-p3-linear",zo="linear",St="srgb",Fo="rec709",Bo="p3",Qn=7680,ju=519,Vg=512,Gg=513,jg=514,Wu=515,Wg=516,Xg=517,qg=518,Yg=519,th=35044,di=35048,Xu="300 es",br=2e3,ko=2001;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const la=Math.PI/180,$n=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[n&255]+ni[n>>8&255]+ni[n>>16&255]+ni[n>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function ih(n,e){return(n%e+e)%e}function Jg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Kg(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function Zg(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function Qg(n,e=1){return e-Math.abs(ih(n,e*2)-e)}function $g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ew(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function iw(n,e){return n+Math.random()*(e-n)}function rw(n){return n*(.5-Math.random())}function nw(n){n!==void 0&&(qu=n);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sw(n){return n*la}function aw(n){return n*$n}function ow(n){return(n&n-1)===0&&n!==0}function lw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hw(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rh={DEG2RAD:la,RAD2DEG:$n,generateUUID:Vi,clamp:Qt,euclideanModulo:ih,mapLinear:Jg,inverseLerp:Kg,lerp:ca,damp:Zg,pingpong:Qg,smoothstep:$g,smootherstep:ew,randInt:tw,randFloat:iw,randFloatSpread:rw,seededRandom:nw,degToRad:sw,radToDeg:aw,isPowerOfTwo:ow,ceilPowerOfTwo:lw,floorPowerOfTwo:cw,setQuaternionFromProperEuler:hw,normalize:ht,denormalize:Gi};let De=class J_{constructor(e=0,t=0){J_.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class K_{constructor(e,t,i,r,s,a,o,l,c){K_.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],y=r[0],f=r[3],_=r[6],S=r[1],v=r[4],M=r[7],I=r[2],R=r[5],A=r[8];return s[0]=a*y+o*S+l*I,s[3]=a*f+o*v+l*R,s[6]=a*_+o*M+l*A,s[1]=c*y+h*S+d*I,s[4]=c*f+h*v+d*R,s[7]=c*_+h*M+d*A,s[2]=u*y+p*S+g*I,s[5]=u*f+p*v+g*R,s[8]=u*_+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const nh=new Ze;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dw(){const n=ha("canvas");return n.style.display="block",n}const Ju={};function es(n){n in Ju||(Ju[n]=!0,console.warn(n))}function uw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ku=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zu=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[Zt]:{transfer:zo,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[hi]:{transfer:St,primaries:Fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oo]:{transfer:zo,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Zu),fromReference:n=>n.applyMatrix3(Ku)},[eh]:{transfer:St,primaries:Bo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zu),fromReference:n=>n.applyMatrix3(Ku).convertLinearToSRGB()}},pw=new Set([Zt,Oo]),ot={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=da[e].toReference,r=da[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return da[n].primaries},getTransfer:function(n){return n===Wr?zo:da[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(da[e].luminanceCoefficients)}};function ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class mw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=ha("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ts(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ts(t[i]/255)*255):t[i]=ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fw=0;class Qu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ah(r[a].image)):s.push(ah(r[a]))}else s=ah(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _w=0;class qt extends yn{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=jr,r=jr,s=Si,a=vr,o=Ui,l=xr,c=qt.DEFAULT_ANISOTROPY,h=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=Vi(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=Ru,qt.DEFAULT_ANISOTROPY=1;let ft=class Z_{constructor(e=0,t=0,i=0,r=1){Z_.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],d=a[5],u=a[9],p=a[2],g=a[6],y=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(o+1)/2,S=(d+1)/2,v=(y+1)/2,M=(l+h)/4,I=(c+p)/4,R=(u+g)/4;return _>S&&_>v?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=I/i):S>v?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=R/r):v<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),i=I/s,r=R/s),this.set(i,r,s,t),this}let f=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(g-u)/f,this.y=(c-p)/f,this.z=(h-l)/f,this.w=Math.acos((o+d+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};class gw extends yn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends gw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $u extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ww extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Mi=class{constructor(n=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=n,this._y=e,this._z=t,this._w=i}static slerpFlat(n,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const d=r[s+0],u=r[s+1],p=r[s+2],g=r[s+3];if(a===0){n[e+0]=o,n[e+1]=l,n[e+2]=c,n[e+3]=h;return}if(a===1){n[e+0]=d,n[e+1]=u,n[e+2]=p,n[e+3]=g;return}if(h!==g||o!==d||l!==u||c!==p){let y=1-a;const f=o*d+l*u+c*p+h*g,_=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const M=Math.sqrt(S),I=Math.atan2(M,f*_);y=Math.sin(y*I)/M,a=Math.sin(a*I)/M}const v=a*_;if(o=o*y+d*v,l=l*y+u*v,c=c*y+p*v,h=h*y+g*v,y===1-a){const M=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=M,l*=M,c*=M,h*=M}}n[e]=o,n[e+1]=l,n[e+2]=c,n[e+3]=h}static multiplyQuaternionsFlat(n,e,t,i,r,s){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=r[s],d=r[s+1],u=r[s+2],p=r[s+3];return n[e]=a*p+c*h+o*u-l*d,n[e+1]=o*p+c*d+l*h-a*u,n[e+2]=l*p+c*u+a*d-o*h,n[e+3]=c*p-a*h-o*d-l*u,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,e,t,i){return this._x=n,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,e=!0){const t=n._x,i=n._y,r=n._z,s=n._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),h=a(r/2),d=o(t/2),u=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,e){const t=e/2,i=Math.sin(t);return this._x=n.x*i,this._y=n.y*i,this._z=n.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(n){const e=n.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=t+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(t>a&&t>h){const u=2*Math.sqrt(1+t-a-h);this._w=(c-o)/u,this._x=.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-t-h);this._w=(r-l)/u,this._x=(i+s)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-t-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(n,e){let t=n.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=t):(this._x=0,this._y=-n.z,this._z=n.y,this._w=t)):(this._x=n.y*e.z-n.z*e.y,this._y=n.z*e.x-n.x*e.z,this._z=n.x*e.y-n.y*e.x,this._w=t),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Qt(this.dot(n),-1,1)))}rotateTowards(n,e){const t=this.angleTo(n);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(n,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,e){const t=n._x,i=n._y,r=n._z,s=n._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-t*l,this._z=r*c+s*l+t*o-i*a,this._w=s*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(n,e){if(e===0)return this;if(e===1)return this.copy(n);const t=this._x,i=this._y,r=this._z,s=this._w;let a=s*n._w+t*n._x+i*n._y+r*n._z;if(a<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,a=-a):this.copy(n),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const u=1-e;return this._w=u*s+e*this._w,this._x=u*t+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=s*h+this._w*d,this._x=t*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(n,e,t){return this.copy(n).slerp(e,t)}random(){const n=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t);return this.set(i*Math.sin(n),i*Math.cos(n),r*Math.sin(e),r*Math.cos(e))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,e=0){return this._x=n[e],this._y=n[e+1],this._z=n[e+2],this._w=n[e+3],this._onChangeCallback(),this}toArray(n=[],e=0){return n[e]=this._x,n[e+1]=this._y,n[e+2]=this._z,n[e+3]=this._w,n}fromBufferAttribute(n,e){return this._x=n.getX(e),this._y=n.getY(e),this._z=n.getZ(e),this._w=n.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class Q_{constructor(e=0,t=0,i=0){Q_.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ep.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ep.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const oh=new U,ep=new Mi;class bi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ji):ji.fromBufferAttribute(s,a),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Vo.subVectors(this.max,ua),rs.subVectors(e.a,ua),ns.subVectors(e.b,ua),ss.subVectors(e.c,ua),Xr.subVectors(ns,rs),qr.subVectors(ss,ns),xn.subVectors(rs,ss);let t=[0,-Xr.z,Xr.y,0,-qr.z,qr.y,0,-xn.z,xn.y,Xr.z,0,-Xr.x,qr.z,0,-qr.x,xn.z,0,-xn.x,-Xr.y,Xr.x,0,-qr.y,qr.x,0,-xn.y,xn.x,0];return!lh(t,rs,ns,ss,Vo)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,rs,ns,ss,Vo))?!1:(Go.crossVectors(Xr,qr),t=[Go.x,Go.y,Go.z],lh(t,rs,ns,ss,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new U,new U,new U,new U,new U,new U,new U,new U],ji=new U,Ho=new bi,rs=new U,ns=new U,ss=new U,Xr=new U,qr=new U,xn=new U,ua=new U,Vo=new U,Go=new U,bn=new U;function lh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){bn.fromArray(n,s);const o=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),h=i.dot(bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yw=new bi,pa=new U,ch=new U;class ar{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(ch)),this.expandByPoint(pa.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new U,hh=new U,jo=new U,Yr=new U,dh=new U,Wo=new U,uh=new U;let ma=class{constructor(n=new U,e=new U(0,0,-1)){this.origin=n,this.direction=e}set(n,e){return this.origin.copy(n),this.direction.copy(e),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,e){return e.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,Mr)),this}closestPointToPoint(n,e){e.subVectors(n,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const e=Mr.subVectors(n,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(n):(Mr.copy(this.origin).addScaledVector(this.direction,e),Mr.distanceToSquared(n))}distanceSqToSegment(n,e,t,i){hh.copy(n).add(e).multiplyScalar(.5),jo.copy(e).sub(n).normalize(),Yr.copy(this.origin).sub(hh);const r=n.distanceTo(e)*.5,s=-this.direction.dot(jo),a=Yr.dot(this.direction),o=-Yr.dot(jo),l=Yr.lengthSq(),c=Math.abs(1-s*s);let h,d,u,p;if(c>0)if(h=s*o-a,d=s*a-o,p=r*c,h>=0)if(d>=-p)if(d<=p){const g=1/c;h*=g,d*=g,u=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hh).addScaledVector(jo,d),u}intersectSphere(n,e){Mr.subVectors(n.center,this.origin);const t=Mr.dot(this.direction),i=Mr.dot(Mr)-t*t,r=n.radius*n.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=t-s,o=t+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const e=n.normal.dot(this.direction);if(e===0)return n.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(n.normal)+n.constant)/e;return t>=0?t:null}intersectPlane(n,e){const t=this.distanceToPlane(n);return t===null?null:this.at(t,e)}intersectsPlane(n){const e=n.distanceToPoint(this.origin);return e===0||n.normal.dot(this.direction)*e<0}intersectBox(n,e){let t,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(t=(n.min.x-d.x)*l,i=(n.max.x-d.x)*l):(t=(n.max.x-d.x)*l,i=(n.min.x-d.x)*l),c>=0?(r=(n.min.y-d.y)*c,s=(n.max.y-d.y)*c):(r=(n.max.y-d.y)*c,s=(n.min.y-d.y)*c),t>s||r>i||((r>t||isNaN(t))&&(t=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(n.min.z-d.z)*h,o=(n.max.z-d.z)*h):(a=(n.max.z-d.z)*h,o=(n.min.z-d.z)*h),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(n){return this.intersectBox(n,Mr)!==null}intersectTriangle(n,e,t,i,r){dh.subVectors(e,n),Wo.subVectors(t,n),uh.crossVectors(dh,Wo);let s=this.direction.dot(uh),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Yr.subVectors(this.origin,n);const o=a*this.direction.dot(Wo.crossVectors(Yr,Wo));if(o<0)return null;const l=a*this.direction.dot(dh.cross(Yr));if(l<0||o+l>s)return null;const c=-a*Yr.dot(uh);return c<0?null:this.at(c/s,r)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class vu{constructor(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f){vu.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f)}set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=p,_[7]=g,_[11]=y,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vw,e,xw)}lookAt(e,t,i){const r=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Jr.crossVectors(i,Ei),Jr.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Jr.crossVectors(i,Ei)),Jr.normalize(),Xo.crossVectors(Ei,Jr),r[0]=Jr.x,r[4]=Xo.x,r[8]=Ei.x,r[1]=Jr.y,r[5]=Xo.y,r[9]=Ei.y,r[2]=Jr.z,r[6]=Xo.z,r[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],y=i[6],f=i[10],_=i[14],S=i[3],v=i[7],M=i[11],I=i[15],R=r[0],A=r[4],z=r[8],E=r[12],x=r[1],O=r[5],G=r[9],X=r[13],K=r[2],te=r[6],Y=r[10],ie=r[14],J=r[3],oe=r[7],pe=r[11],be=r[15];return s[0]=a*R+o*x+l*K+c*J,s[4]=a*A+o*O+l*te+c*oe,s[8]=a*z+o*G+l*Y+c*pe,s[12]=a*E+o*X+l*ie+c*be,s[1]=h*R+d*x+u*K+p*J,s[5]=h*A+d*O+u*te+p*oe,s[9]=h*z+d*G+u*Y+p*pe,s[13]=h*E+d*X+u*ie+p*be,s[2]=g*R+y*x+f*K+_*J,s[6]=g*A+y*O+f*te+_*oe,s[10]=g*z+y*G+f*Y+_*pe,s[14]=g*E+y*X+f*ie+_*be,s[3]=S*R+v*x+M*K+I*J,s[7]=S*A+v*O+M*te+I*oe,s[11]=S*z+v*G+M*Y+I*pe,s[15]=S*E+v*X+M*ie+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],y=e[7],f=e[11],_=e[15];return g*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*p-i*l*p)+y*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+f*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+_*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],y=e[13],f=e[14],_=e[15],S=d*f*c-y*u*c+y*l*p-o*f*p-d*l*_+o*u*_,v=g*u*c-h*f*c-g*l*p+a*f*p+h*l*_-a*u*_,M=h*y*c-g*d*c+g*o*p-a*y*p-h*o*_+a*d*_,I=g*d*l-h*y*l-g*o*u+a*y*u+h*o*f-a*d*f,R=t*S+i*v+r*M+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(y*u*s-d*f*s-y*r*p+i*f*p+d*r*_-i*u*_)*A,e[2]=(o*f*s-y*l*s+y*r*c-i*f*c-o*r*_+i*l*_)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*p-i*l*p)*A,e[4]=v*A,e[5]=(h*f*s-g*u*s+g*r*p-t*f*p-h*r*_+t*u*_)*A,e[6]=(g*l*s-a*f*s-g*r*c+t*f*c+a*r*_-t*l*_)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*A,e[8]=M*A,e[9]=(g*d*s-h*y*s-g*i*p+t*y*p+h*i*_-t*d*_)*A,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*_+t*o*_)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=I*A,e[13]=(h*y*r-g*d*r+g*i*u-t*y*u-h*i*f+t*d*f)*A,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*f-t*o*f)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,y=a*h,f=a*d,_=o*d,S=l*c,v=l*h,M=l*d,I=i.x,R=i.y,A=i.z;return r[0]=(1-(y+_))*I,r[1]=(p+M)*I,r[2]=(g-v)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+_))*R,r[6]=(f+S)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(f-S)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const a=as.set(r[4],r[5],r[6]).length(),o=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wi.copy(this);const l=1/s,c=1/a,h=1/o;return Wi.elements[0]*=l,Wi.elements[1]*=l,Wi.elements[2]*=l,Wi.elements[4]*=c,Wi.elements[5]*=c,Wi.elements[6]*=c,Wi.elements[8]*=h,Wi.elements[9]*=h,Wi.elements[10]*=h,t.setFromRotationMatrix(Wi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=br){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let p,g;if(o===br)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ko)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=br){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-s),u=(t+e)*c,p=(i+r)*h;let g,y;if(o===br)g=(a+s)*d,y=-2*d;else if(o===ko)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const as=new U,Wi=new Xe,vw=new U(0,0,0),xw=new U(1,1,1),Jr=new U,Xo=new U,Ei=new U,tp=new Xe,ip=new Mi;let Kr=class $_{constructor(e=0,t=0,i=0,r=$_.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kr.DEFAULT_ORDER="XYZ";class os{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bw=0;const rp=new U,ls=new Mi,Er=new Xe,qo=new U,fa=new U,Sw=new U,Mw=new Mi,np=new U(1,0,0),sp=new U(0,1,0),ap=new U(0,0,1),op={type:"added"},Ew={type:"removed"},cs={type:"childadded",child:null},ph={type:"childremoved",child:null};class _t extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new Kr,i=new Mi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ze}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qo.copy(e):qo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(fa,qo,this.up):Er.lookAt(qo,fa,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(Er),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ew),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,Sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new U,Tr=new U,mh=new U,Ar=new U,hs=new U,ds=new U,lp=new U,fh=new U,_h=new U,gh=new U;let _a=class ia{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xi.subVectors(e,t),r.cross(Xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xi.subVectors(r,t),Tr.subVectors(i,t),mh.subVectors(e,t);const a=Xi.dot(Xi),o=Xi.dot(Tr),l=Xi.dot(mh),c=Tr.dot(Tr),h=Tr.dot(mh),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(a,Ar.y),l.addScaledVector(o,Ar.z),l)}static isFrontFacing(e,t,i,r){return Xi.subVectors(i,t),Tr.subVectors(e,t),Xi.cross(Tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Xi.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ia.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ia.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ia.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ia.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ia.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;hs.subVectors(r,i),ds.subVectors(s,i),fh.subVectors(e,i);const l=hs.dot(fh),c=ds.dot(fh);if(l<=0&&c<=0)return t.copy(i);_h.subVectors(e,r);const h=hs.dot(_h),d=ds.dot(_h);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(hs,a);gh.subVectors(e,s);const p=hs.dot(gh),g=ds.dot(gh);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ds,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return lp.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(lp,o);const _=1/(f+y+u);return a=y*_,o=u*_,t.copy(i).addScaledVector(hs,a).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function wh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=ih(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=wh(a,s,e+1/3),this.g=wh(a,s,e),this.b=wh(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=sh(e.r),this.g=sh(e.g),this.b=sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return ot.fromWorkingColorSpace(si.copy(this),e),Math.round(Qt(si.r*255,0,255))*65536+Math.round(Qt(si.g*255,0,255))*256+Math.round(Qt(si.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(si.copy(this),t);const i=si.r,r=si.g,s=si.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=hi){ot.fromWorkingColorSpace(si.copy(this),e);const t=si.r,i=si.g,r=si.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Yo);const i=ca(Zr.h,Yo.h,t),r=ca(Zr.s,Yo.s,t),s=ca(Zr.l,Yo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new Ve;Ve.NAMES=cp;let Tw=0;class or extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=_n,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=_c,this.blendEquation=gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fc&&(i.blendSrc=this.blendSrc),this.blendDst!==_c&&(i.blendDst=this.blendDst),this.blendEquation!==gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Di extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new U,Jo=new De;class gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}}class hp extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dp extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lr extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Aw=0;const Oi=new Xe,yh=new _t,us=new U,Ti=new bi,ga=new bi,Yt=new U;class ui extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?dp:hp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Ti.min,ga.min),Ti.expandByPoint(Yt),Yt.addVectors(Ti.max,ga.max),Ti.expandByPoint(Yt)):(Ti.expandByPoint(ga.min),Ti.expandByPoint(ga.max))}Ti.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Yt.add(us)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new U,l[z]=new U;const c=new U,h=new U,d=new U,u=new De,p=new De,g=new De,y=new U,f=new U;function _(z,E,x){c.fromBufferAttribute(i,z),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),u.fromBufferAttribute(s,z),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(O),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),o[z].add(y),o[E].add(y),o[x].add(y),l[z].add(f),l[E].add(f),l[x].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let z=0,E=S.length;z<E;++z){const x=S[z],O=x.start,G=x.count;for(let X=O,K=O+G;X<K;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new U,M=new U,I=new U,R=new U;function A(z){I.fromBufferAttribute(r,z),R.copy(I);const E=o[z];v.copy(E),v.sub(I.multiplyScalar(I.dot(E))).normalize(),M.crossVectors(R,E);const x=M.dot(l[z])<0?-1:1;a.setXYZW(z,v.x,v.y,v.z,x)}for(let z=0,E=S.length;z<E;++z){const x=S[z],O=x.start,G=x.count;for(let X=O,K=O+G;X<K;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let _=0;_<h;_++)u[g++]=c[p++]}return new gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new Xe,Sn=new ma,Ko=new ar,pp=new U,ps=new U,ms=new U,fs=new U,vh=new U,Zo=new U,Qo=new De,$o=new De,el=new De,mp=new U,fp=new U,_p=new U,tl=new U,il=new U;class pi extends _t{constructor(e=new ui,t=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(vh.fromBufferAttribute(d,e),a?Zo.addScaledVector(vh,h):Zo.addScaledVector(vh.sub(t),h))}t.add(Zo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Sn.copy(e.ray).recast(e.near),!(Ko.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(Ko,pp)===null||Sn.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(up.copy(s).invert(),Sn.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&Sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Sn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const f=u[g],_=a[f.materialIndex],S=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,I=v;M<I;M+=3){const R=o.getX(M),A=o.getX(M+1),z=o.getX(M+2);r=rl(this,_,e,i,c,h,d,R,A,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=g,_=y;f<_;f+=3){const S=o.getX(f),v=o.getX(f+1),M=o.getX(f+2);r=rl(this,a,e,i,c,h,d,S,v,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const f=u[g],_=a[f.materialIndex],S=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=S,I=v;M<I;M+=3){const R=M,A=M+1,z=M+2;r=rl(this,_,e,i,c,h,d,R,A,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=g,_=y;f<_;f+=3){const S=f,v=f+1,M=f+2;r=rl(this,a,e,i,c,h,d,S,v,M),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Rw(n,e,t,i,r,s,a,o){let l;if(e.side===vi?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;il.copy(o),il.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:n}}function rl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,fs);const h=Rw(n,e,t,i,ps,ms,fs,tl);if(h){r&&(Qo.fromBufferAttribute(r,o),$o.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),h.uv=_a.getInterpolation(tl,ps,ms,fs,Qo,$o,el,new De)),s&&(Qo.fromBufferAttribute(s,o),$o.fromBufferAttribute(s,l),el.fromBufferAttribute(s,c),h.uv1=_a.getInterpolation(tl,ps,ms,fs,Qo,$o,el,new De)),a&&(mp.fromBufferAttribute(a,o),fp.fromBufferAttribute(a,l),_p.fromBufferAttribute(a,c),h.normal=_a.getInterpolation(tl,ps,ms,fs,mp,fp,_p,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};_a.getNormal(ps,ms,fs,d.normal),h.face=d}return h}class wa extends ui{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lr(c,3)),this.setAttribute("normal",new lr(h,3)),this.setAttribute("uv",new lr(d,2));function g(y,f,_,S,v,M,I,R,A,z,E){const x=M/A,O=I/z,G=M/2,X=I/2,K=R/2,te=A+1,Y=z+1;let ie=0,J=0;const oe=new U;for(let pe=0;pe<Y;pe++){const be=pe*O-X;for(let je=0;je<te;je++){const Je=je*x-G;oe[y]=Je*S,oe[f]=be*v,oe[_]=K,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[f]=0,oe[_]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(je/A),d.push(1-pe/z),ie+=1}}for(let pe=0;pe<z;pe++)for(let be=0;be<A;be++){const je=u+be+te*pe,Je=u+be+te*(pe+1),Z=u+(be+1)+te*(pe+1),se=u+(be+1)+te*pe;l.push(je,Je,se),l.push(Je,Z,se),J+=6}o.addGroup(p,J,E),p+=J,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mi(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}function Cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Pw={clone:_s,merge:mi};var Lw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wp extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new U,yp=new De,vp=new De;class fi extends wp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,yp,vp),t.subVectors(vp,yp)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,ws=1;class Nw extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(gs,ws,e,t);r.layers=this.layers,this.add(r);const s=new fi(gs,ws,e,t);s.layers=this.layers,this.add(s);const a=new fi(gs,ws,e,t);a.layers=this.layers,this.add(a);const o=new fi(gs,ws,e,t);o.layers=this.layers,this.add(o);const l=new fi(gs,ws,e,t);l.layers=this.layers,this.add(l);const c=new fi(gs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xp extends qt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Xn,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uw extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wa(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:Vr});s.uniforms.tEquirect.value=t;const a=new pi(r,s),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=Si),new Nw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const xh=new U,Dw=new U,Ow=new Ze;class $r{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xh.subVectors(i,t).cross(Dw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ow.getNormalMatrix(e),r=this.coplanarPoint(xh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new ar,nl=new U;class bh{constructor(e=new $r,t=new $r,i=new $r,r=new $r,s=new $r,a=new $r){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=br){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],g=r[9],y=r[10],f=r[11],_=r[12],S=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,u-c,f-p,M-_).normalize(),i[1].setComponents(l+s,u+c,f+p,M+_).normalize(),i[2].setComponents(l+a,u+h,f+g,M+S).normalize(),i[3].setComponents(l-a,u-h,f-g,M-S).normalize(),i[4].setComponents(l-o,u-d,f-y,M-v).normalize(),t===br)i[5].setComponents(l+o,u+d,f+y,M+v).normalize();else if(t===ko)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zw(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(n.bindBuffer(c,o),d.count===-1&&u.length===0&&n.bufferSubData(c,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){const y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ys extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],y=[],f=[];for(let _=0;_<h;_++){const S=_*u-a;for(let v=0;v<c;v++){const M=v*d-s;g.push(M,-S,0),y.push(0,0,1),f.push(v/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const v=S+c*_,M=S+c*(_+1),I=S+1+c*(_+1),R=S+1+c*_;p.push(v,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new lr(g,3)),this.setAttribute("normal",new lr(y,3)),this.setAttribute("uv",new lr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ly=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,By=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Fw,alphahash_pars_fragment:Bw,alphamap_fragment:kw,alphamap_pars_fragment:Hw,alphatest_fragment:Vw,alphatest_pars_fragment:Gw,aomap_fragment:jw,aomap_pars_fragment:Ww,batching_pars_vertex:Xw,batching_vertex:qw,begin_vertex:Yw,beginnormal_vertex:Jw,bsdfs:Kw,iridescence_fragment:Zw,bumpmap_pars_fragment:Qw,clipping_planes_fragment:$w,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ty,clipping_planes_vertex:iy,color_fragment:ry,color_pars_fragment:ny,color_pars_vertex:sy,color_vertex:ay,common:oy,cube_uv_reflection_fragment:ly,defaultnormal_vertex:cy,displacementmap_pars_vertex:hy,displacementmap_vertex:dy,emissivemap_fragment:uy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:fy,envmap_fragment:_y,envmap_common_pars_fragment:gy,envmap_pars_fragment:wy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Py,envmap_vertex:vy,fog_vertex:xy,fog_pars_vertex:by,fog_fragment:Sy,fog_pars_fragment:My,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Ry,lights_pars_begin:Cy,lights_toon_fragment:Ly,lights_toon_pars_fragment:Iy,lights_phong_fragment:Ny,lights_phong_pars_fragment:Uy,lights_physical_fragment:Dy,lights_physical_pars_fragment:Oy,lights_fragment_begin:zy,lights_fragment_maps:Fy,lights_fragment_end:By,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Gy,map_fragment:jy,map_pars_fragment:Wy,map_particle_fragment:Xy,map_particle_pars_fragment:qy,metalnessmap_fragment:Yy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:Ky,morphcolor_vertex:Zy,morphnormal_vertex:Qy,morphtarget_pars_vertex:$y,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:iv,normal_pars_fragment:rv,normal_pars_vertex:nv,normal_vertex:sv,normalmap_pars_fragment:av,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:lv,clearcoat_pars_fragment:cv,iridescence_pars_fragment:hv,opaque_fragment:dv,packing:uv,premultiplied_alpha_fragment:pv,project_vertex:mv,dithering_fragment:fv,dithering_pars_fragment:_v,roughnessmap_fragment:gv,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:vv,shadowmap_vertex:xv,shadowmask_pars_fragment:bv,skinbase_vertex:Sv,skinning_pars_vertex:Mv,skinning_vertex:Ev,skinnormal_vertex:Tv,specularmap_fragment:Av,specularmap_pars_fragment:Rv,tonemapping_fragment:Cv,tonemapping_pars_fragment:Pv,transmission_fragment:Lv,transmission_pars_fragment:Iv,uv_pars_fragment:Nv,uv_pars_vertex:Uv,uv_vertex:Dv,worldpos_vertex:Ov,background_vert:zv,background_frag:Fv,backgroundCube_vert:Bv,backgroundCube_frag:kv,cube_vert:Hv,cube_frag:Vv,depth_vert:Gv,depth_frag:jv,distanceRGBA_vert:Wv,distanceRGBA_frag:Xv,equirect_vert:qv,equirect_frag:Yv,linedashed_vert:Jv,linedashed_frag:Kv,meshbasic_vert:Zv,meshbasic_frag:Qv,meshlambert_vert:$v,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:n0,meshphong_vert:s0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:d0,points_frag:u0,shadow_vert:p0,shadow_frag:m0,sprite_vert:f0,sprite_frag:_0},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},cr={basic:{uniforms:mi([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:mi([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:mi([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:mi([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:mi([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:mi([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:mi([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:mi([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:mi([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:mi([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:mi([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:mi([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:mi([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};cr.physical={uniforms:mi([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const sl={r:0,b:0,g:0},En=new Kr,g0=new Xe;function w0(n,e,t,i,r,s,a){const o=new Ve(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function y(S){let v=!1;const M=g(S);M===null?_(o,l):M&&M.isColor&&(_(M,1),v=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(S,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===Ro)?(h===void 0&&(h=new pi(new wa(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:_s(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),En.copy(v.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(En)),h.material.toneMapped=ot.getTransfer(M.colorSpace)!==St,(d!==M||u!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new pi(new ys(2,2),new qi({name:"BackgroundMaterial",uniforms:_s(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function _(S,v){S.getRGB(sl,gp(n)),i.buffers.color.setClear(sl.r,sl.g,sl.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,_(o,l)},render:y,addToRenderList:f}}function y0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(x,O,G,X,K){let te=!1;const Y=d(X,G,O);s!==Y&&(s=Y,c(s.object)),te=p(x,X,G,K),te&&g(x,X,G,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(x,O,G,X),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,O,G){const X=G.wireframe===!0;let K=i[x.id];K===void 0&&(K={},i[x.id]=K);let te=K[O.id];te===void 0&&(te={},K[O.id]=te);let Y=te[X];return Y===void 0&&(Y=u(l()),te[X]=Y),Y}function u(x){const O=[],G=[],X=[];for(let K=0;K<t;K++)O[K]=0,G[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:X,object:x,attributes:{},index:null}}function p(x,O,G,X){const K=s.attributes,te=O.attributes;let Y=0;const ie=G.getAttributes();for(const J in ie)if(ie[J].location>=0){const oe=K[J];let pe=te[J];if(pe===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==X}function g(x,O,G,X){const K={},te=O.attributes;let Y=0;const ie=G.getAttributes();for(const J in ie)if(ie[J].location>=0){let oe=te[J];oe===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),K[J]=pe,Y++}s.attributes=K,s.attributesNum=Y,s.index=X}function y(){const x=s.newAttributes;for(let O=0,G=x.length;O<G;O++)x[O]=0}function f(x){_(x,0)}function _(x,O){const G=s.newAttributes,X=s.enabledAttributes,K=s.attributeDivisors;G[x]=1,X[x]===0&&(n.enableVertexAttribArray(x),X[x]=1),K[x]!==O&&(n.vertexAttribDivisor(x,O),K[x]=O)}function S(){const x=s.newAttributes,O=s.enabledAttributes;for(let G=0,X=O.length;G<X;G++)O[G]!==x[G]&&(n.disableVertexAttribArray(G),O[G]=0)}function v(x,O,G,X,K,te,Y){Y===!0?n.vertexAttribIPointer(x,O,G,K,te):n.vertexAttribPointer(x,O,G,X,K,te)}function M(x,O,G,X){y();const K=X.attributes,te=G.getAttributes(),Y=O.defaultAttributeValues;for(const ie in te){const J=te[ie];if(J.location>=0){let oe=K[ie];if(oe===void 0&&(ie==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),ie==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const pe=oe.normalized,be=oe.itemSize,je=e.get(oe);if(je===void 0)continue;const Je=je.buffer,Z=je.type,se=je.bytesPerElement,me=Z===n.INT||Z===n.UNSIGNED_INT||oe.gpuType===yc;if(oe.isInterleavedBufferAttribute){const he=oe.data,Oe=he.stride,ke=oe.offset;if(he.isInstancedInterleavedBuffer){for(let We=0;We<J.locationSize;We++)_(J.location+We,he.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let We=0;We<J.locationSize;We++)f(J.location+We);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let We=0;We<J.locationSize;We++)v(J.location+We,be/J.locationSize,Z,pe,Oe*se,(ke+be/J.locationSize*We)*se,me)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<J.locationSize;he++)_(J.location+he,oe.meshPerAttribute);x.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<J.locationSize;he++)f(J.location+he);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let he=0;he<J.locationSize;he++)v(J.location+he,be/J.locationSize,Z,pe,be*se,be/J.locationSize*he*se,me)}}else if(Y!==void 0){const pe=Y[ie];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(J.location,pe);break;case 3:n.vertexAttrib3fv(J.location,pe);break;case 4:n.vertexAttrib4fv(J.location,pe);break;default:n.vertexAttrib1fv(J.location,pe)}}}}S()}function I(){z();for(const x in i){const O=i[x];for(const G in O){const X=O[G];for(const K in X)h(X[K].object),delete X[K];delete O[G]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const O=i[x.id];for(const G in O){const X=O[G];for(const K in X)h(X[K].object),delete X[K];delete O[G]}delete i[x.id]}function A(x){for(const O in i){const G=i[O];if(G[x.id]===void 0)continue;const X=G[x.id];for(const K in X)h(X[K].object),delete X[K];delete G[x.id]}}function z(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function v0(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)t.update(g,i,u[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function x0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ui&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const A=R===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Hi&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:f,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:M,maxSamples:I}}function b0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new $r,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,y=d.clipIntersection,f=d.clipShadows,_=n.get(d);if(!r||g===null||g.length===0||s&&!f)s?h(null):c();else{const S=s?0:i,v=S*4;let M=_.clippingState||null;l.value=M,M=h(g,u,v,p);for(let I=0;I!==v;++I)M[I]=t[I];_.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const y=d!==null?d.length:0;let f=null;if(y!==0){if(f=l.value,g!==!0||f===null){const _=p+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,M=p;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(S,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function S0(n){let e=new WeakMap;function t(a,o){return o===gc?a.mapping=Xn:o===wc&&(a.mapping=qn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gc||o===wc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Uw(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sh extends wp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,Sp=[.125,.215,.35,.446,.526,.582],Tn=20,Mh=new Sh,Mp=new Ve;let Eh=null,Th=0,Ah=0,Rh=!1;const An=(1+Math.sqrt(5))/2,xs=1/An,Ep=[new U(-An,xs,0),new U(An,xs,0),new U(-xs,0,An),new U(xs,0,An),new U(0,An,-xs),new U(0,An,xs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:sa,format:Ui,colorSpace:Zt,depthBuffer:!1},r=Ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(s)),this._blurMaterial=E0(s,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,i,r){const s=new fi(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Mp),l.toneMapping=Gr,l.autoClear=!1;const d=new Di({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1}),u=new pi(new wa,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Mp),p=!0);for(let y=0;y<6;y++){const f=y%3;f===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):f===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));const _=this._cubeSize;al(r,f*_,y>2?_:0,_,_),l.setRenderTarget(r),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xn||e.mapping===qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new pi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;al(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Mh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ep[(r-s-1)%Ep.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new pi(this._lodPlanes[r],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tn-1),y=s/g,f=isFinite(s)?1+Math.floor(h*y):Tn;f>Tn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Tn}`);const _=[];let S=0;for(let A=0;A<Tn;++A){const z=A/y,E=Math.exp(-z*z/2);_.push(E),A===0?S+=E:A<f&&(S+=2*E)}for(let A=0;A<_.length;A++)_[A]=_[A]/S;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const M=this._sizeLods[r],I=3*M*(r>v-vs?r-v+vs:0),R=4*(this._cubeSize-M);al(t,I,R,3*M,2*M),l.setRenderTarget(t),l.render(d,Mh)}}function M0(n){const e=[],t=[],i=[];let r=n;const s=n-vs+1+Sp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-vs?l=Sp[a-n+vs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,f=2,_=1,S=new Float32Array(y*g*p),v=new Float32Array(f*g*p),M=new Float32Array(_*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,z=R>2?0:-1,E=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];S.set(E,y*g*R),v.set(u,f*g*R);const x=[R,R,R,R,R,R];M.set(x,_*g*R)}const I=new ui;I.setAttribute("position",new gt(S,y)),I.setAttribute("uv",new gt(v,f)),I.setAttribute("faceIndex",new gt(M,_)),e.push(I),r>vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ap(n,e,t){const i=new vn(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function E0(n,e,t){const i=new Float32Array(Tn),r=new U(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Rp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Cp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gc||l===wc,h=l===Xn||l===qn;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Tp(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Tp(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function A0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&es("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function R0(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const y=u.morphAttributes[g];for(let f=0,_=y.length;f<_;f++)e.remove(y[f])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const y=p[g];for(let f=0,_=y.length;f<_;f++)e.update(y[f],n.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const S=p.array;y=p.version;for(let v=0,M=S.length;v<M;v+=3){const I=S[v+0],R=S[v+1],A=S[v+2];u.push(I,R,R,A,A,I)}}else if(g!==void 0){const S=g.array;y=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const I=v+0,R=v+1,A=v+2;u.push(I,R,R,A,A,I)}}else return;const f=new(Yu(u)?dp:hp)(u,1);f.version=y;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function C0(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){n.drawElements(i,p,s,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let y=0;for(let f=0;f<g;f++)y+=p[f];t.update(y,i,1)}function d(u,p,g,y){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u.length;_++)c(u[_]/a,p[_],y[_]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,y,0,g);let _=0;for(let S=0;S<g;S++)_+=p[S];for(let S=0;S<y.length;S++)t.update(_,i,y[S])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function P0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function L0(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){z.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),f===!0&&(M=3);let I=o.attributes.position.count*M,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const A=new Float32Array(I*R*4*d),z=new $u(A,I,R,d);z.type=Hi,z.needsUpdate=!0;const E=M*4;for(let x=0;x<d;x++){const O=_[x],G=S[x],X=v[x],K=I*R*4*x;for(let te=0;te<O.count;te++){const Y=te*E;g===!0&&(r.fromBufferAttribute(O,te),A[K+Y+0]=r.x,A[K+Y+1]=r.y,A[K+Y+2]=r.z,A[K+Y+3]=0),y===!0&&(r.fromBufferAttribute(G,te),A[K+Y+4]=r.x,A[K+Y+5]=r.y,A[K+Y+6]=r.z,A[K+Y+7]=0),f===!0&&(r.fromBufferAttribute(X,te),A[K+Y+8]=r.x,A[K+Y+9]=r.y,A[K+Y+10]=r.z,A[K+Y+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:z,size:new De(I,R)},i.set(o,u),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function I0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Pp extends qt{constructor(e,t,i,r,s,a,o,l,c,h=Kn){if(h!==Kn&&h!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Kn&&(i=wn),i===void 0&&h===Zn&&(i=Jn),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lp=new qt,Ip=new Pp(1,1),Np=new $u,Up=new ww,Dp=new xp,Op=[],zp=[],Fp=new Float32Array(16),Bp=new Float32Array(9),kp=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ol(n,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function z0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;kp.set(i),n.uniformMatrix2fv(this.addr,!1,kp),Gt(t,i)}}function F0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Bp.set(i),n.uniformMatrix3fv(this.addr,!1,Bp),Gt(t,i)}}function B0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Fp.set(i),n.uniformMatrix4fv(this.addr,!1,Fp),Gt(t,i)}}function k0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function j0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function X0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function Y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ip.compareFunction=Wu,s=Ip):s=Lp,t.setTexture2D(e||s,r)}function J0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Up,r)}function K0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dp,r)}function Z0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Np,r)}function Q0(n){switch(n){case 5126:return N0;case 35664:return U0;case 35665:return D0;case 35666:return O0;case 35674:return z0;case 35675:return F0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return j0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return Z0}}function $0(n,e){n.uniform1fv(this.addr,e)}function ex(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function tx(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function ix(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function rx(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nx(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sx(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ax(n,e){n.uniform1iv(this.addr,e)}function ox(n,e){n.uniform2iv(this.addr,e)}function lx(n,e){n.uniform3iv(this.addr,e)}function cx(n,e){n.uniform4iv(this.addr,e)}function hx(n,e){n.uniform1uiv(this.addr,e)}function dx(n,e){n.uniform2uiv(this.addr,e)}function ux(n,e){n.uniform3uiv(this.addr,e)}function px(n,e){n.uniform4uiv(this.addr,e)}function mx(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Lp,s[a])}function fx(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Up,s[a])}function _x(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dp,s[a])}function gx(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Np,s[a])}function wx(n){switch(n){case 5126:return $0;case 35664:return ex;case 35665:return tx;case 35666:return ix;case 35674:return rx;case 35675:return nx;case 35676:return sx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return dx;case 36295:return ux;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return gx}}class yx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q0(t.type)}}class vx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function Hp(n,e){n.seq.push(e),n.map[e.id]=e}function bx(n,e,t){const i=n.name,r=i.length;for(Ph.lastIndex=0;;){const s=Ph.exec(i),a=Ph.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hp(t,c===void 0?new yx(o,n,e):new vx(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new xx(o),Hp(t,h)),t=h}}}class ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);bx(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Vp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Sx=37297;let Mx=0;function Ex(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Tx(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Bo&&t===Fo?i="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Bo&&(i="LinearSRGBToLinearDisplayP3"),n){case Zt:case Oo:return[i,"LinearTransferOETF"];case hi:case eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ex(n.getShaderSource(e),a)}else return r}function Ax(n,e){const t=Tx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rx(n,e){let t;switch(e){case Cg:t="Linear";break;case Pg:t="Reinhard";break;case Lg:t="OptimizedCineon";break;case Ig:t="ACESFilmic";break;case Ug:t="AgX";break;case Dg:t="Neutral";break;case Ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cl=new U;function Cx(){ot.getLuminanceCoefficients(cl);const n=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function Lx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ix(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ya(n){return n!==""}function jp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(n){return n.replace(Nx,Dx)}const Ux=new Map;function Dx(n,e){let t=Ge[e];if(t===void 0){const i=Ux.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lh(t)}const Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(n){return n.replace(Ox,zx)}function zx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yr&&(e="SHADOWMAP_TYPE_VSM"),e}function Bx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xn:case qn:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Ag:e="ENVMAP_BLENDING_MIX";break;case Rg:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Gx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fx(t),c=Bx(t),h=kx(t),d=Hx(t),u=Vx(t),p=Px(t),g=Lx(s),y=r.createProgram();let f,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),f.length>0&&(f+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),_.length>0&&(_+=`
`)):(f=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),_=[qp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Gr?Rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Ax("linearToOutputTexel",t.outputColorSpace),Cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Lh(a),a=jp(a,t),a=Wp(a,t),o=Lh(o),o=jp(o,t),o=Wp(o,t),a=Xp(a),o=Xp(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=S+f+a,M=S+_+o,I=Vp(r,r.VERTEX_SHADER,v),R=Vp(r,r.FRAGMENT_SHADER,M);r.attachShader(y,I),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(O){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),X=r.getShaderInfoLog(I).trim(),K=r.getShaderInfoLog(R).trim();let te=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,R);else{const ie=Gp(r,I,"vertex"),J=Gp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+G+`
`+ie+`
`+J)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||K==="")&&(Y=!1);Y&&(O.diagnostics={runnable:te,programLog:G,vertexShader:{log:X,prefix:f},fragmentShader:{log:K,prefix:_}})}r.deleteShader(I),r.deleteShader(R),z=new ll(r,y),E=Ix(r,y)}let z;this.getUniforms=function(){return z===void 0&&A(this),z};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Sx)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}let jx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xx(e),t.set(e,i)),i}}class Xx{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function qx(n,e,t,i,r,s,a){const o=new os,l=new Wx,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function f(E,x,O,G,X){const K=G.fog,te=X.geometry,Y=E.isMeshStandardMaterial?G.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),J=ie&&ie.mapping===Ro?ie.image.height:null,oe=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=pe!==void 0?pe.length:0;let je=0;te.morphAttributes.position!==void 0&&(je=1),te.morphAttributes.normal!==void 0&&(je=2),te.morphAttributes.color!==void 0&&(je=3);let Je,Z,se,me;if(oe){const Ke=cr[oe];Je=Ke.vertexShader,Z=Ke.fragmentShader}else Je=E.vertexShader,Z=E.fragmentShader,l.update(E),se=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Oe=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,We=!!E.map,ut=!!E.matcap,D=!!ie,xt=!!E.aoMap,it=!!E.lightMap,st=!!E.bumpMap,Me=!!E.normalMap,bt=!!E.displacementMap,Ie=!!E.emissiveMap,Ne=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,V=E.clearcoat>0,ne=E.dispersion>0,ae=E.iridescence>0,re=E.sheen>0,Te=E.transmission>0,de=b&&!!E.anisotropyMap,fe=V&&!!E.clearcoatMap,Pe=V&&!!E.clearcoatNormalMap,ee=V&&!!E.clearcoatRoughnessMap,ge=ae&&!!E.iridescenceMap,rt=ae&&!!E.iridescenceThicknessMap,ze=re&&!!E.sheenColorMap,we=re&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,He=!!E.specularColorMap,L=!!E.specularIntensityMap,C=Te&&!!E.transmissionMap,Q=Te&&!!E.thicknessMap,q=!!E.gradientMap,$=!!E.alphaMap,le=E.alphaTest>0,Se=!!E.alphaHash,mt=!!E.extensions;let Rt=Gr;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const vt={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:Z,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&X.instanceColor!==null,instancingMorph:Oe&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Zt,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:ut,envMap:D,envMapMode:D&&ie.mapping,envMapCubeUVHeight:J,aoMap:xt,lightMap:it,bumpMap:st,normalMap:Me,displacementMap:u&&bt,emissiveMap:Ie,normalMapObjectSpace:Me&&E.normalMapType===Hg,normalMapTangentSpace:Me&&E.normalMapType===Gu,metalnessMap:Ne,roughnessMap:P,anisotropy:b,anisotropyMap:de,clearcoat:V,clearcoatMap:fe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ee,dispersion:ne,iridescence:ae,iridescenceMap:ge,iridescenceThicknessMap:rt,sheen:re,sheenColorMap:ze,sheenRoughnessMap:we,specularMap:Fe,specularColorMap:He,specularIntensityMap:L,transmission:Te,transmissionMap:C,thicknessMap:Q,gradientMap:q,opaque:E.transparent===!1&&E.blending===_n&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:le,alphaHash:Se,combine:E.combine,mapUv:We&&y(E.map.channel),aoMapUv:xt&&y(E.aoMap.channel),lightMapUv:it&&y(E.lightMap.channel),bumpMapUv:st&&y(E.bumpMap.channel),normalMapUv:Me&&y(E.normalMap.channel),displacementMapUv:bt&&y(E.displacementMap.channel),emissiveMapUv:Ie&&y(E.emissiveMap.channel),metalnessMapUv:Ne&&y(E.metalnessMap.channel),roughnessMapUv:P&&y(E.roughnessMap.channel),anisotropyMapUv:de&&y(E.anisotropyMap.channel),clearcoatMapUv:fe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(E.sheenRoughnessMap.channel),specularMapUv:Fe&&y(E.specularMap.channel),specularColorMapUv:He&&y(E.specularColorMap.channel),specularIntensityMapUv:L&&y(E.specularIntensityMap.channel),transmissionMapUv:C&&y(E.transmissionMap.channel),thicknessMapUv:Q&&y(E.thicknessMap.channel),alphaMapUv:$&&y(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Me||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(We||$),fog:!!K,useFog:E.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:je,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xi,flipSided:E.side===vi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:mt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&E.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function _(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)x.push(O),x.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(S(x,E),v(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function v(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),E.push(o.mask)}function M(E){const x=g[E.type];let O;if(x){const G=cr[x];O=Pw.clone(G.uniforms)}else O=E.uniforms;return O}function I(E,x){let O;for(let G=0,X=h.length;G<X;G++){const K=h[G];if(K.cacheKey===x){O=K,++O.usedTimes;break}}return O===void 0&&(O=new Gx(n,x,E,s),h.push(O)),O}function R(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:z}}function Yx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Jx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,p,g,y,f){let _=n[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:f},n[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=y,_.group=f),e++,_}function o(d,u,p,g,y,f){const _=a(d,u,p,g,y,f);p.transmission>0?i.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(d,u,p,g,y,f){const _=a(d,u,p,g,y,f);p.transmission>0?i.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(d,u){t.length>1&&t.sort(d||Jx),i.length>1&&i.sort(u||Yp),r.length>1&&r.sort(u||Yp)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Kx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Jp,n.set(i,[a])):r>=s.length?(a=new Jp,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $x=0;function eb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tb(n){const e=new Zx,t=Qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new Xe,a=new Xe;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,y=0,f=0,_=0,S=0,v=0,M=0,I=0,R=0,A=0;c.sort(eb);for(let E=0,x=c.length;E<x;E++){const O=c[E],G=O.color,X=O.intensity,K=O.distance,te=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=G.r*X,d+=G.g*X,u+=G.b*X;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],X);A++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ie=O.shadow,J=t.get(O);J.shadowIntensity=ie.intensity,J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=O.shadow.matrix,S++}i.directional[p]=Y,p++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(G).multiplyScalar(X),Y.distance=K,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[y]=Y;const ie=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,ie.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[y]=ie.matrix,O.castShadow){const J=t.get(O);J.shadowIntensity=ie.intensity,J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,i.spotShadow[y]=J,i.spotShadowMap[y]=te,M++}y++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(G).multiplyScalar(X),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[f]=Y,f++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const ie=O.shadow,J=t.get(O);J.shadowIntensity=ie.intensity,J.shadowBias=ie.bias,J.shadowNormalBias=ie.normalBias,J.shadowRadius=ie.radius,J.shadowMapSize=ie.mapSize,J.shadowCameraNear=ie.camera.near,J.shadowCameraFar=ie.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=O.shadow.matrix,v++}i.point[g]=Y,g++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(X),Y.groundColor.copy(O.groundColor).multiplyScalar(X),i.hemi[_]=Y,_++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const z=i.hash;(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==y||z.rectAreaLength!==f||z.hemiLength!==_||z.numDirectionalShadows!==S||z.numPointShadows!==v||z.numSpotShadows!==M||z.numSpotMaps!==I||z.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=f,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,z.directionalLength=p,z.pointLength=g,z.spotLength=y,z.rectAreaLength=f,z.hemiLength=_,z.numDirectionalShadows=S,z.numPointShadows=v,z.numSpotShadows=M,z.numSpotMaps=I,z.numLightProbes=A,i.version=$x++)}function l(c,h){let d=0,u=0,p=0,g=0,y=0;const f=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){const v=c[_];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(v.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(f),u++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(f),y++}}}return{setup:o,setupView:l,state:i}}function Kp(n){const e=new tb(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ib(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Kp(n),e.set(r,[o])):s>=a.length?(o=new Kp(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class rb extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nb extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ob(n,e,t){let i=new bh;const r=new De,s=new De,a=new ft,o=new rb({depthPacking:kg}),l=new nb,c={},h=t.maxTextureSize,d={[sr]:vi,[vi]:sr,[xi]:xi},u=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:sb,fragmentShader:ab}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pi(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let _=this.type;this.render=function(R,A,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=_!==yr&&this.type===yr,K=_===yr&&this.type!==yr;for(let te=0,Y=R.length;te<Y;te++){const ie=R[te],J=ie.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const oe=J.getFrameExtents();if(r.multiply(oe),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,J.mapSize.y=s.y)),J.map===null||X===!0||K===!0){const be=this.type!==yr?{minFilter:ci,magFilter:ci}:{};J.map!==null&&J.map.dispose(),J.map=new vn(r.x,r.y,be),J.map.texture.name=ie.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const pe=J.getViewportCount();for(let be=0;be<pe;be++){const je=J.getViewport(be);a.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),G.viewport(a),J.updateMatrices(ie,be),i=J.getFrustum(),M(A,z,J.camera,ie,this.type)}J.isPointLightShadow!==!0&&this.type===yr&&S(J,z),J.needsUpdate=!1}_=this.type,f.needsUpdate=!1,n.setRenderTarget(E,x,O)};function S(R,A){const z=e.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,z,u,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,z,p,y,null)}function v(R,A,z,E){let x=null;const O=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)x=O;else if(x=z.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,X=A.uuid;let K=c[G];K===void 0&&(K={},c[G]=K);let te=K[X];te===void 0&&(te=x.clone(),K[X]=te,A.addEventListener("dispose",I)),x=te}if(x.visible=A.visible,x.wireframe=A.wireframe,E===yr?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=n.properties.get(x);G.light=z}return x}function M(R,A,z,E,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===yr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const G=e.update(R),X=R.material;if(Array.isArray(X)){const K=G.groups;for(let te=0,Y=K.length;te<Y;te++){const ie=K[te],J=X[ie.materialIndex];if(J&&J.visible){const oe=v(R,J,E,x);R.onBeforeShadow(n,R,A,z,G,oe,ie),n.renderBufferDirect(z,null,G,oe,R,ie),R.onAfterShadow(n,R,A,z,G,oe,ie)}}}else if(X.visible){const K=v(R,X,E,x);R.onBeforeShadow(n,R,A,z,G,K,null),n.renderBufferDirect(z,null,G,K,R,null),R.onAfterShadow(n,R,A,z,G,K,null)}}const O=R.children;for(let G=0,X=O.length;G<X;G++)M(O[G],A,z,E,x)}function I(R){R.target.removeEventListener("dispose",I);for(const A in c){const z=c[A],E=R.target.uuid;E in z&&(z[E].dispose(),delete z[E])}}}function lb(n){function e(){let C=!1;const Q=new ft;let q=null;const $=new ft(0,0,0,0);return{setMask:function(le){q!==le&&!C&&(n.colorMask(le,le,le,le),q=le)},setLocked:function(le){C=le},setClear:function(le,Se,mt,Rt,vt){vt===!0&&(le*=Rt,Se*=Rt,mt*=Rt),Q.set(le,Se,mt,Rt),$.equals(Q)===!1&&(n.clearColor(le,Se,mt,Rt),$.copy(Q))},reset:function(){C=!1,q=null,$.set(-1,0,0,0)}}}function t(){let C=!1,Q=null,q=null,$=null;return{setTest:function(le){le?me(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(le){Q!==le&&!C&&(n.depthMask(le),Q=le)},setFunc:function(le){if(q!==le){switch(le){case vg:n.depthFunc(n.NEVER);break;case xg:n.depthFunc(n.ALWAYS);break;case bg:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case Sg:n.depthFunc(n.EQUAL);break;case Mg:n.depthFunc(n.GEQUAL);break;case Eg:n.depthFunc(n.GREATER);break;case Tg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=le}},setLocked:function(le){C=le},setClear:function(le){$!==le&&(n.clearDepth(le),$=le)},reset:function(){C=!1,Q=null,q=null,$=null}}}function i(){let C=!1,Q=null,q=null,$=null,le=null,Se=null,mt=null,Rt=null,vt=null;return{setTest:function(Ke){C||(Ke?me(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Ke){Q!==Ke&&!C&&(n.stencilMask(Ke),Q=Ke)},setFunc:function(Ke,wi,Bt){(q!==Ke||$!==wi||le!==Bt)&&(n.stencilFunc(Ke,wi,Bt),q=Ke,$=wi,le=Bt)},setOp:function(Ke,wi,Bt){(Se!==Ke||mt!==wi||Rt!==Bt)&&(n.stencilOp(Ke,wi,Bt),Se=Ke,mt=wi,Rt=Bt)},setLocked:function(Ke){C=Ke},setClear:function(Ke){vt!==Ke&&(n.clearStencil(Ke),vt=Ke)},reset:function(){C=!1,Q=null,q=null,$=null,le=null,Se=null,mt=null,Rt=null,vt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],p=null,g=!1,y=null,f=null,_=null,S=null,v=null,M=null,I=null,R=new Ve(0,0,0),A=0,z=!1,E=null,x=null,O=null,G=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Y=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),te=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),te=Y>=2);let J=null,oe={};const pe=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),je=new ft().fromArray(pe),Je=new ft().fromArray(be);function Z(C,Q,q,$){const le=new Uint8Array(4),Se=n.createTexture();n.bindTexture(C,Se),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<q;mt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(Q+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return Se}const se={};se[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(Ao),st(!1),Me(xu),me(n.CULL_FACE),xt(Vr);function me(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function he(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function Oe(C,Q){return h[C]!==Q?(n.bindFramebuffer(C,Q),h[C]=Q,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(C,Q){let q=u,$=!1;if(C){q=d.get(Q),q===void 0&&(q=[],d.set(Q,q));const le=C.textures;if(q.length!==le.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,mt=le.length;Se<mt;Se++)q[Se]=n.COLOR_ATTACHMENT0+Se;q.length=le.length,$=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,$=!0);$&&n.drawBuffers(q)}function We(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const ut={[gn]:n.FUNC_ADD,[rg]:n.FUNC_SUBTRACT,[ng]:n.FUNC_REVERSE_SUBTRACT};ut[sg]=n.MIN,ut[ag]=n.MAX;const D={[og]:n.ZERO,[lg]:n.ONE,[cg]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[fg]:n.SRC_ALPHA_SATURATE,[pg]:n.DST_COLOR,[dg]:n.DST_ALPHA,[hg]:n.ONE_MINUS_SRC_COLOR,[_c]:n.ONE_MINUS_SRC_ALPHA,[mg]:n.ONE_MINUS_DST_COLOR,[ug]:n.ONE_MINUS_DST_ALPHA,[_g]:n.CONSTANT_COLOR,[gg]:n.ONE_MINUS_CONSTANT_COLOR,[wg]:n.CONSTANT_ALPHA,[yg]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(C,Q,q,$,le,Se,mt,Rt,vt,Ke){if(C===Vr){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),C!==ig){if(C!==y||Ke!==z){if((f!==gn||v!==gn)&&(n.blendEquation(n.FUNC_ADD),f=gn,v=gn),Ke)switch(C){case _n:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case _n:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}_=null,S=null,M=null,I=null,R.set(0,0,0),A=0,y=C,z=Ke}return}le=le||Q,Se=Se||q,mt=mt||$,(Q!==f||le!==v)&&(n.blendEquationSeparate(ut[Q],ut[le]),f=Q,v=le),(q!==_||$!==S||Se!==M||mt!==I)&&(n.blendFuncSeparate(D[q],D[$],D[Se],D[mt]),_=q,S=$,M=Se,I=mt),(Rt.equals(R)===!1||vt!==A)&&(n.blendColor(Rt.r,Rt.g,Rt.b,vt),R.copy(Rt),A=vt),y=C,z=!1}function it(C,Q){C.side===xi?he(n.CULL_FACE):me(n.CULL_FACE);let q=C.side===vi;Q&&(q=!q),st(q),C.blending===_n&&C.transparent===!1?xt(Vr):xt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const $=C.stencilWrite;a.setTest($),$&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ie(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(C){E!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),E=C)}function Me(C){C!==eg?(me(n.CULL_FACE),C!==x&&(C===xu?n.cullFace(n.BACK):C===tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),x=C}function bt(C){C!==O&&(te&&n.lineWidth(C),O=C)}function Ie(C,Q,q){C?(me(n.POLYGON_OFFSET_FILL),(G!==Q||X!==q)&&(n.polygonOffset(Q,q),G=Q,X=q)):he(n.POLYGON_OFFSET_FILL)}function Ne(C){C?me(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function P(C){C===void 0&&(C=n.TEXTURE0+K-1),J!==C&&(n.activeTexture(C),J=C)}function b(C,Q,q){q===void 0&&(J===null?q=n.TEXTURE0+K-1:q=J);let $=oe[q];$===void 0&&($={type:void 0,texture:void 0},oe[q]=$),($.type!==C||$.texture!==Q)&&(J!==q&&(n.activeTexture(q),J=q),n.bindTexture(C,Q||se[C]),$.type=C,$.texture=Q)}function V(){const C=oe[J];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(C){je.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),je.copy(C))}function we(C){Je.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Je.copy(C))}function Fe(C,Q){let q=l.get(Q);q===void 0&&(q=new WeakMap,l.set(Q,q));let $=q.get(C);$===void 0&&($=n.getUniformBlockIndex(Q,C.name),q.set(C,$))}function He(C,Q){const q=l.get(Q).get(C);o.get(Q)!==q&&(n.uniformBlockBinding(Q,q,C.__bindingPointIndex),o.set(Q,q))}function L(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},J=null,oe={},h={},d=new WeakMap,u=[],p=null,g=!1,y=null,f=null,_=null,S=null,v=null,M=null,I=null,R=new Ve(0,0,0),A=0,z=!1,E=null,x=null,O=null,G=null,X=null,je.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:he,bindFramebuffer:Oe,drawBuffers:ke,useProgram:We,setBlending:xt,setMaterial:it,setFlipSided:st,setCullFace:Me,setLineWidth:bt,setPolygonOffset:Ie,setScissorTest:Ne,activeTexture:P,bindTexture:b,unbindTexture:V,compressedTexImage2D:ne,compressedTexImage3D:ae,texImage2D:ge,texImage3D:rt,updateUBOMapping:Fe,uniformBlockBinding:He,texStorage2D:Pe,texStorage3D:ee,texSubImage2D:re,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:fe,scissor:ze,viewport:we,reset:L}}function Zp(n,e,t,i){const r=cb(i);switch(t){case Nu:return n*e;case Du:return n*e;case Ou:return n*e*2;case bc:return n*e/r.components*r.byteLength;case Sc:return n*e/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case Mc:return n*e*2/r.components*r.byteLength;case Uu:return n*e*3/r.components*r.byteLength;case Ui:return n*e*4/r.components*r.byteLength;case Ec:return n*e*4/r.components*r.byteLength;case Lo:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Cc:return Math.max(n,16)*Math.max(e,8)/4;case Tc:case Rc:return Math.max(n,8)*Math.max(e,8)/2;case Pc:case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Do:case qc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fu:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cb(n){switch(n){case xr:case Pu:return{byteLength:1,components:1};case na:case Lu:case sa:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case wn:case yc:case Hi:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return p?new OffscreenCanvas(P,b):ha("canvas")}function y(P,b,V){let ne=1;const ae=Ne(P);if((ae.width>V||ae.height>V)&&(ne=V/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(ne*ae.width),Te=Math.floor(ne*ae.height);d===void 0&&(d=g(re,Te));const de=b?g(re,Te):d;return de.width=re,de.height=Te,de.getContext("2d").drawImage(P,0,0,re,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+re+"x"+Te+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==ci&&P.minFilter!==Si}function _(P){n.generateMipmap(P)}function S(P,b,V,ne,ae=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=b;if(b===n.RED&&(V===n.FLOAT&&(re=n.R32F),V===n.HALF_FLOAT&&(re=n.R16F),V===n.UNSIGNED_BYTE&&(re=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.R8UI),V===n.UNSIGNED_SHORT&&(re=n.R16UI),V===n.UNSIGNED_INT&&(re=n.R32UI),V===n.BYTE&&(re=n.R8I),V===n.SHORT&&(re=n.R16I),V===n.INT&&(re=n.R32I)),b===n.RG&&(V===n.FLOAT&&(re=n.RG32F),V===n.HALF_FLOAT&&(re=n.RG16F),V===n.UNSIGNED_BYTE&&(re=n.RG8)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.RG8UI),V===n.UNSIGNED_SHORT&&(re=n.RG16UI),V===n.UNSIGNED_INT&&(re=n.RG32UI),V===n.BYTE&&(re=n.RG8I),V===n.SHORT&&(re=n.RG16I),V===n.INT&&(re=n.RG32I)),b===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),b===n.RGBA){const Te=ae?zo:ot.getTransfer(ne);V===n.FLOAT&&(re=n.RGBA32F),V===n.HALF_FLOAT&&(re=n.RGBA16F),V===n.UNSIGNED_BYTE&&(re=Te===St?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function v(P,b){let V;return P?b===null||b===wn||b===Jn?V=n.DEPTH24_STENCIL8:b===Hi?V=n.DEPTH32F_STENCIL8:b===na&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wn||b===Jn?V=n.DEPTH_COMPONENT24:b===Hi?V=n.DEPTH_COMPONENT32F:b===na&&(V=n.DEPTH_COMPONENT16),V}function M(P,b){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==Si?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function I(P){const b=P.target;b.removeEventListener("dispose",I),A(b),b.isVideoTexture&&h.delete(b)}function R(P){const b=P.target;b.removeEventListener("dispose",R),E(b)}function A(P){const b=i.get(P);if(b.__webglInit===void 0)return;const V=P.source,ne=u.get(V);if(ne){const ae=ne[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&z(P),Object.keys(ne).length===0&&u.delete(V)}i.remove(P)}function z(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const V=P.source,ne=u.get(V);delete ne[b.__cacheKey],a.memory.textures--}function E(P){const b=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let ae=0;ae<b.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(b.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=P.textures;for(let ne=0,ae=V.length;ne<ae;ne++){const re=i.get(V[ne]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(V[ne])}i.remove(P)}let x=0;function O(){x=0}function G(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function X(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function K(P,b){const V=i.get(P);if(P.isVideoTexture&&bt(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(V,P,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function te(P,b){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Je(V,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function Y(P,b){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Je(V,P,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function ie(P,b){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Z(V,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}const J={[Yn]:n.REPEAT,[jr]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},oe={[ci]:n.NEAREST,[Cu]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Si]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[vr]:n.LINEAR_MIPMAP_LINEAR},pe={[Vg]:n.NEVER,[Yg]:n.ALWAYS,[Gg]:n.LESS,[Wu]:n.LEQUAL,[jg]:n.EQUAL,[qg]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function be(P,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Si||b.magFilter===Po||b.magFilter===ra||b.magFilter===vr||b.minFilter===Si||b.minFilter===Po||b.minFilter===ra||b.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,J[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,oe[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==ra&&b.minFilter!==vr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function je(P,b){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",I));const ne=b.source;let ae=u.get(ne);ae===void 0&&(ae={},u.set(ne,ae));const re=X(b);if(re!==P.__cacheKey){ae[re]===void 0&&(ae[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[re].usedTimes++;const Te=ae[P.__cacheKey];Te!==void 0&&(ae[P.__cacheKey].usedTimes--,Te.usedTimes===0&&z(b)),P.__cacheKey=re,P.__webglTexture=ae[re].texture}return V}function Je(P,b,V){let ne=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=n.TEXTURE_3D);const ae=je(P,b),re=b.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+V);const Te=i.get(re);if(re.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+V);const de=ot.getPrimaries(ot.workingColorSpace),fe=b.colorSpace===Wr?null:ot.getPrimaries(b.colorSpace),Pe=b.colorSpace===Wr||de===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ee=y(b.image,!1,r.maxTextureSize);ee=Ie(b,ee);const ge=s.convert(b.format,b.colorSpace),rt=s.convert(b.type);let ze=S(b.internalFormat,ge,rt,b.colorSpace,b.isVideoTexture);be(ne,b);let we;const Fe=b.mipmaps,He=b.isVideoTexture!==!0,L=Te.__version===void 0||ae===!0,C=re.dataReady,Q=M(b,ee);if(b.isDepthTexture)ze=v(b.format===Zn,b.type),L&&(He?t.texStorage2D(n.TEXTURE_2D,1,ze,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ze,ee.width,ee.height,0,ge,rt,null));else if(b.isDataTexture)if(Fe.length>0){He&&L&&t.texStorage2D(n.TEXTURE_2D,Q,ze,Fe[0].width,Fe[0].height);for(let q=0,$=Fe.length;q<$;q++)we=Fe[q],He?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,ge,rt,we.data):t.texImage2D(n.TEXTURE_2D,q,ze,we.width,we.height,0,ge,rt,we.data);b.generateMipmaps=!1}else He?(L&&t.texStorage2D(n.TEXTURE_2D,Q,ze,ee.width,ee.height),C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,ge,rt,ee.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ee.width,ee.height,0,ge,rt,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){He&&L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,ze,Fe[0].width,Fe[0].height,ee.depth);for(let q=0,$=Fe.length;q<$;q++)if(we=Fe[q],b.format!==Ui)if(ge!==null)if(He){if(C)if(b.layerUpdates.size>0){const le=Zp(we.width,we.height,b.format,b.type);for(const Se of b.layerUpdates){const mt=we.data.subarray(Se*le/we.data.BYTES_PER_ELEMENT,(Se+1)*le/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Se,we.width,we.height,1,ge,mt,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ee.depth,ge,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ze,we.width,we.height,ee.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,ee.depth,ge,rt,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,ze,we.width,we.height,ee.depth,0,ge,rt,we.data)}else{He&&L&&t.texStorage2D(n.TEXTURE_2D,Q,ze,Fe[0].width,Fe[0].height);for(let q=0,$=Fe.length;q<$;q++)we=Fe[q],b.format!==Ui?ge!==null?He?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,ge,we.data):t.compressedTexImage2D(n.TEXTURE_2D,q,ze,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,we.width,we.height,ge,rt,we.data):t.texImage2D(n.TEXTURE_2D,q,ze,we.width,we.height,0,ge,rt,we.data)}else if(b.isDataArrayTexture)if(He){if(L&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Q,ze,ee.width,ee.height,ee.depth),C)if(b.layerUpdates.size>0){const q=Zp(ee.width,ee.height,b.format,b.type);for(const $ of b.layerUpdates){const le=ee.data.subarray($*q/ee.data.BYTES_PER_ELEMENT,($+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,ge,rt,le)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,rt,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ee.width,ee.height,ee.depth,0,ge,rt,ee.data);else if(b.isData3DTexture)He?(L&&t.texStorage3D(n.TEXTURE_3D,Q,ze,ee.width,ee.height,ee.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,rt,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ee.width,ee.height,ee.depth,0,ge,rt,ee.data);else if(b.isFramebufferTexture){if(L)if(He)t.texStorage2D(n.TEXTURE_2D,Q,ze,ee.width,ee.height);else{let q=ee.width,$=ee.height;for(let le=0;le<Q;le++)t.texImage2D(n.TEXTURE_2D,le,ze,q,$,0,ge,rt,null),q>>=1,$>>=1}}else if(Fe.length>0){if(He&&L){const q=Ne(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Q,ze,q.width,q.height)}for(let q=0,$=Fe.length;q<$;q++)we=Fe[q],He?C&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,ge,rt,we):t.texImage2D(n.TEXTURE_2D,q,ze,ge,rt,we);b.generateMipmaps=!1}else if(He){if(L){const q=Ne(ee);t.texStorage2D(n.TEXTURE_2D,Q,ze,q.width,q.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,rt,ee)}else t.texImage2D(n.TEXTURE_2D,0,ze,ge,rt,ee);f(b)&&_(ne),Te.__version=re.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,V){if(b.image.length!==6)return;const ne=je(P,b),ae=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const re=i.get(ae);if(ae.version!==re.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const Te=ot.getPrimaries(ot.workingColorSpace),de=b.colorSpace===Wr?null:ot.getPrimaries(b.colorSpace),fe=b.colorSpace===Wr||Te===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let $=0;$<6;$++)!Pe&&!ee?ge[$]=y(b.image[$],!0,r.maxCubemapSize):ge[$]=ee?b.image[$].image:b.image[$],ge[$]=Ie(b,ge[$]);const rt=ge[0],ze=s.convert(b.format,b.colorSpace),we=s.convert(b.type),Fe=S(b.internalFormat,ze,we,b.colorSpace),He=b.isVideoTexture!==!0,L=re.__version===void 0||ne===!0,C=ae.dataReady;let Q=M(b,rt);be(n.TEXTURE_CUBE_MAP,b);let q;if(Pe){He&&L&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Fe,rt.width,rt.height);for(let $=0;$<6;$++){q=ge[$].mipmaps;for(let le=0;le<q.length;le++){const Se=q[le];b.format!==Ui?ze!==null?He?C&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,Se.width,Se.height,ze,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,Se.width,Se.height,ze,we,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,Fe,Se.width,Se.height,0,ze,we,Se.data)}}}else{if(q=b.mipmaps,He&&L){q.length>0&&Q++;const $=Ne(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Q,Fe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){He?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ge[$].width,ge[$].height,ze,we,ge[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,ge[$].width,ge[$].height,0,ze,we,ge[$].data);for(let le=0;le<q.length;le++){const Se=q[le].image[$].image;He?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Se.width,Se.height,ze,we,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Fe,Se.width,Se.height,0,ze,we,Se.data)}}else{He?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ze,we,ge[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Fe,ze,we,ge[$]);for(let le=0;le<q.length;le++){const Se=q[le];He?C&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,ze,we,Se.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,Fe,ze,we,Se.image[$])}}}f(b)&&_(n.TEXTURE_CUBE_MAP),re.__version=ae.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function se(P,b,V,ne,ae,re){const Te=s.convert(V.format,V.colorSpace),de=s.convert(V.type),fe=S(V.internalFormat,Te,de,V.colorSpace);if(!i.get(b).__hasExternalTextures){const Pe=Math.max(1,b.width>>re),ee=Math.max(1,b.height>>re);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,re,fe,Pe,ee,b.depth,0,Te,de,null):t.texImage2D(ae,re,fe,Pe,ee,0,Te,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,i.get(V).__webglTexture,0,st(b)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,i.get(V).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(P,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const ne=b.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,re=v(b.stencilBuffer,ae),Te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=st(b);Me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,re,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,re,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,re,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{const ne=b.textures;for(let ae=0;ae<ne.length;ae++){const re=ne[ae],Te=s.convert(re.format,re.colorSpace),de=s.convert(re.type),fe=S(re.internalFormat,Te,de,re.colorSpace),Pe=st(b);V&&Me(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,b.width,b.height):Me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const V=i.get(b.depthTexture).__webglTexture,ne=st(b);if(b.depthTexture.format===Kn)Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(b.depthTexture.format===Zn)Me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const b=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");he(b.__webglFramebuffer,P)}else if(V){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=n.createRenderbuffer(),me(b.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),me(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(P,b,V){const ne=i.get(P);b!==void 0&&se(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(P)}function We(P){const b=P.texture,V=i.get(P),ne=i.get(b);P.addEventListener("dispose",R);const ae=P.textures,re=P.isWebGLCubeRenderTarget===!0,Te=ae.length>1;if(Te||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=b.version,a.memory.textures++),re){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let fe=0;fe<b.mipmaps.length;fe++)V.__webglFramebuffer[de][fe]=n.createFramebuffer()}else V.__webglFramebuffer[de]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)V.__webglFramebuffer[de]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let de=0,fe=ae.length;de<fe;de++){const Pe=i.get(ae[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Me(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const fe=ae[de];V.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Pe=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),ge=S(fe.internalFormat,Pe,ee,fe.colorSpace,P.isXRRenderTarget===!0),rt=st(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,V.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),me(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),be(n.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)se(V.__webglFramebuffer[de][fe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else se(V.__webglFramebuffer[de],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);f(b)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,fe=ae.length;de<fe;de++){const Pe=ae[de],ee=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),be(n.TEXTURE_2D,Pe),se(V.__webglFramebuffer,P,Pe,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),f(Pe)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),be(de,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)se(V.__webglFramebuffer[fe],P,b,n.COLOR_ATTACHMENT0,de,fe);else se(V.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,de,0);f(b)&&_(de),t.unbindTexture()}P.depthBuffer&&Oe(P)}function ut(P){const b=P.textures;for(let V=0,ne=b.length;V<ne;V++){const ae=b[V];if(f(ae)){const re=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ae).__webglTexture;t.bindTexture(re,Te),_(re),t.unbindTexture()}}}const D=[],xt=[];function it(P){if(P.samples>0){if(Me(P)===!1){const b=P.textures,V=P.width,ne=P.height;let ae=n.COLOR_BUFFER_BIT;const re=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),de=b.length>1;if(de)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[fe]);const Pe=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,ae,n.NEAREST),l===!0&&(D.length=0,xt.length=0,D.push(n.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(re),xt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Te.__webglColorRenderbuffer[fe]);const Pe=i.get(b[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function st(P){return Math.min(r.maxSamples,P.samples)}function Me(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Ie(P,b){const V=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Zt&&V!==Wr&&(ot.getTransfer(V)===St?(ne!==Ui||ae!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ne(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=Y,this.setTextureCube=ie,this.rebindTextures=ke,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Me}function db(n,e){function t(i,r=Wr){let s;const a=ot.getTransfer(r);if(i===xr)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===na)return n.UNSIGNED_SHORT;if(i===yc)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===sa)return n.HALF_FLOAT;if(i===Nu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===Ui)return n.RGBA;if(i===Du)return n.LUMINANCE;if(i===Ou)return n.LUMINANCE_ALPHA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===Zn)return n.DEPTH_STENCIL;if(i===bc)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===Mc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===Lo||i===Io||i===No||i===Uo)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===Ac||i===Rc||i===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc||i===Lc||i===Ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pc||i===Lc)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ic)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Uc||i===Dc||i===Oc||i===zc||i===Fc||i===Bc||i===kc||i===Hc||i===Vc||i===Gc||i===jc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===qc||i===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Do)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fu||i===Jc||i===Kc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ub extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pb={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,i),_=this._getHandJoint(c,y);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qi({vertexShader:mb,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends yn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const y=new _b,f=t.getContextAttributes();let _=null,S=null;const v=[],M=[],I=new De;let R=null;const A=new fi;A.layers.enable(1),A.viewport=new ft;const z=new fi;z.layers.enable(2),z.viewport=new ft;const E=[A,z],x=new ub;x.layers.enable(1),x.layers.enable(2);let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=v[Z];return se===void 0&&(se=new Ih,v[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=v[Z];return se===void 0&&(se=new Ih,v[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=v[Z];return se===void 0&&(se=new Ih,v[Z]=se),se.getHandSpace()};function X(Z){const se=M.indexOf(Z.inputSource);if(se===-1)return;const me=v[se];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",te);for(let Z=0;Z<v.length;Z++){const se=M[Z];se!==null&&(M[Z]=null,v[Z].disconnect(se))}O=null,G=null,y.reset(),e.setRenderTarget(_),p=null,u=null,d=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",K),r.addEventListener("inputsourceschange",te),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const se={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new vn(p.framebufferWidth,p.framebufferHeight,{format:Ui,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let se=null,me=null,he=null;f.depth&&(he=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=f.stencil?Zn:Kn,me=f.stencil?Jn:wn);const Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Oe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new vn(u.textureWidth,u.textureHeight,{format:Ui,type:xr,depthTexture:new Pp(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(Z){for(let se=0;se<Z.removed.length;se++){const me=Z.removed[se],he=M.indexOf(me);he>=0&&(M[he]=null,v[he].disconnect(me))}for(let se=0;se<Z.added.length;se++){const me=Z.added[se];let he=M.indexOf(me);if(he===-1){for(let ke=0;ke<v.length;ke++)if(ke>=M.length){M.push(me),he=ke;break}else if(M[ke]===null){M[ke]=me,he=ke;break}if(he===-1)break}const Oe=v[he];Oe&&Oe.connect(me)}}const Y=new U,ie=new U;function J(Z,se,me){Y.setFromMatrixPosition(se.matrixWorld),ie.setFromMatrixPosition(me.matrixWorld);const he=Y.distanceTo(ie),Oe=se.projectionMatrix.elements,ke=me.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),ut=Oe[14]/(Oe[10]+1),D=(Oe[9]+1)/Oe[5],xt=(Oe[9]-1)/Oe[5],it=(Oe[8]-1)/Oe[0],st=(ke[8]+1)/ke[0],Me=We*it,bt=We*st,Ie=he/(-it+st),Ne=Ie*-it;se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ne),Z.translateZ(Ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=We+Ie,b=ut+Ie,V=Me-Ne,ne=bt+(he-Ne),ae=D*ut/b*P,re=xt*ut/b*P;Z.projectionMatrix.makePerspective(V,ne,ae,re,P,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function oe(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;y.texture!==null&&(Z.near=y.depthNear,Z.far=y.depthFar),x.near=z.near=A.near=Z.near,x.far=z.far=A.far=Z.far,(O!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),O=x.near,G=x.far,A.near=O,A.far=G,z.near=O,z.far=G,A.updateProjectionMatrix(),z.updateProjectionMatrix(),Z.updateProjectionMatrix());const se=Z.parent,me=x.cameras;oe(x,se);for(let he=0;he<me.length;he++)oe(me[he],se);me.length===2?J(x,A,z):x.projectionMatrix.copy(A.projectionMatrix),pe(Z,x,se)};function pe(Z,se,me){me===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$n*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let be=null;function je(Z,se){if(h=se.getViewerPose(c||a),g=se,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let he=!1;me.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let ke=0;ke<me.length;ke++){const We=me[ke];let ut=null;if(p!==null)ut=p.getViewport(We);else{const xt=d.getViewSubImage(u,We);ut=xt.viewport,ke===0&&(e.setRenderTargetTextures(S,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(S))}let D=E[ke];D===void 0&&(D=new fi,D.layers.enable(ke),D.viewport=new ft,E[ke]=D),D.matrix.fromArray(We.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(We.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ut.x,ut.y,ut.width,ut.height),ke===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(D)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const ke=d.getDepthInformation(me[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,r.renderState)}}for(let me=0;me<v.length;me++){const he=M[me],Oe=v[me];he!==null&&Oe!==void 0&&Oe.update(he,se,c||a)}be&&be(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new bp;Je.setAnimationLoop(je),this.setAnimationLoop=function(Z){be=Z},this.dispose=function(){}}}const Rn=new Kr,wb=new Xe;function yb(n,e){function t(f,_){f.matrixAutoUpdate===!0&&f.updateMatrix(),_.value.copy(f.matrix)}function i(f,_){_.color.getRGB(f.fogColor.value,gp(n)),_.isFog?(f.fogNear.value=_.near,f.fogFar.value=_.far):_.isFogExp2&&(f.fogDensity.value=_.density)}function r(f,_,S,v,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(f,_):_.isMeshToonMaterial?(s(f,_),d(f,_)):_.isMeshPhongMaterial?(s(f,_),h(f,_)):_.isMeshStandardMaterial?(s(f,_),u(f,_),_.isMeshPhysicalMaterial&&p(f,_,M)):_.isMeshMatcapMaterial?(s(f,_),g(f,_)):_.isMeshDepthMaterial?s(f,_):_.isMeshDistanceMaterial?(s(f,_),y(f,_)):_.isMeshNormalMaterial?s(f,_):_.isLineBasicMaterial?(a(f,_),_.isLineDashedMaterial&&o(f,_)):_.isPointsMaterial?l(f,_,S,v):_.isSpriteMaterial?c(f,_):_.isShadowMaterial?(f.color.value.copy(_.color),f.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(f,_){f.opacity.value=_.opacity,_.color&&f.diffuse.value.copy(_.color),_.emissive&&f.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(f.map.value=_.map,t(_.map,f.mapTransform)),_.alphaMap&&(f.alphaMap.value=_.alphaMap,t(_.alphaMap,f.alphaMapTransform)),_.bumpMap&&(f.bumpMap.value=_.bumpMap,t(_.bumpMap,f.bumpMapTransform),f.bumpScale.value=_.bumpScale,_.side===vi&&(f.bumpScale.value*=-1)),_.normalMap&&(f.normalMap.value=_.normalMap,t(_.normalMap,f.normalMapTransform),f.normalScale.value.copy(_.normalScale),_.side===vi&&f.normalScale.value.negate()),_.displacementMap&&(f.displacementMap.value=_.displacementMap,t(_.displacementMap,f.displacementMapTransform),f.displacementScale.value=_.displacementScale,f.displacementBias.value=_.displacementBias),_.emissiveMap&&(f.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,f.emissiveMapTransform)),_.specularMap&&(f.specularMap.value=_.specularMap,t(_.specularMap,f.specularMapTransform)),_.alphaTest>0&&(f.alphaTest.value=_.alphaTest);const S=e.get(_),v=S.envMap,M=S.envMapRotation;v&&(f.envMap.value=v,Rn.copy(M),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),f.envMapRotation.value.setFromMatrix4(wb.makeRotationFromEuler(Rn)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=_.reflectivity,f.ior.value=_.ior,f.refractionRatio.value=_.refractionRatio),_.lightMap&&(f.lightMap.value=_.lightMap,f.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,f.lightMapTransform)),_.aoMap&&(f.aoMap.value=_.aoMap,f.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,f.aoMapTransform))}function a(f,_){f.diffuse.value.copy(_.color),f.opacity.value=_.opacity,_.map&&(f.map.value=_.map,t(_.map,f.mapTransform))}function o(f,_){f.dashSize.value=_.dashSize,f.totalSize.value=_.dashSize+_.gapSize,f.scale.value=_.scale}function l(f,_,S,v){f.diffuse.value.copy(_.color),f.opacity.value=_.opacity,f.size.value=_.size*S,f.scale.value=v*.5,_.map&&(f.map.value=_.map,t(_.map,f.uvTransform)),_.alphaMap&&(f.alphaMap.value=_.alphaMap,t(_.alphaMap,f.alphaMapTransform)),_.alphaTest>0&&(f.alphaTest.value=_.alphaTest)}function c(f,_){f.diffuse.value.copy(_.color),f.opacity.value=_.opacity,f.rotation.value=_.rotation,_.map&&(f.map.value=_.map,t(_.map,f.mapTransform)),_.alphaMap&&(f.alphaMap.value=_.alphaMap,t(_.alphaMap,f.alphaMapTransform)),_.alphaTest>0&&(f.alphaTest.value=_.alphaTest)}function h(f,_){f.specular.value.copy(_.specular),f.shininess.value=Math.max(_.shininess,1e-4)}function d(f,_){_.gradientMap&&(f.gradientMap.value=_.gradientMap)}function u(f,_){f.metalness.value=_.metalness,_.metalnessMap&&(f.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,f.metalnessMapTransform)),f.roughness.value=_.roughness,_.roughnessMap&&(f.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,f.roughnessMapTransform)),_.envMap&&(f.envMapIntensity.value=_.envMapIntensity)}function p(f,_,S){f.ior.value=_.ior,_.sheen>0&&(f.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),f.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(f.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,f.sheenColorMapTransform)),_.sheenRoughnessMap&&(f.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,f.sheenRoughnessMapTransform))),_.clearcoat>0&&(f.clearcoat.value=_.clearcoat,f.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(f.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,f.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(f.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===vi&&f.clearcoatNormalScale.value.negate())),_.dispersion>0&&(f.dispersion.value=_.dispersion),_.iridescence>0&&(f.iridescence.value=_.iridescence,f.iridescenceIOR.value=_.iridescenceIOR,f.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(f.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,f.iridescenceMapTransform)),_.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),_.transmission>0&&(f.transmission.value=_.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(f.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,f.transmissionMapTransform)),f.thickness.value=_.thickness,_.thicknessMap&&(f.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=_.attenuationDistance,f.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(f.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(f.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=_.specularIntensity,f.specularColor.value.copy(_.specularColor),_.specularColorMap&&(f.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,f.specularColorMapTransform)),_.specularIntensityMap&&(f.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,_){_.matcap&&(f.matcap.value=_.matcap)}function y(f,_){const S=e.get(_).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const M=v.program;i.uniformBlockBinding(S,M)}function c(S,v){let M=r[S.id];M===void 0&&(g(S),M=h(S),r[S.id]=M,S.addEventListener("dispose",f));const I=v.program;i.updateUBOMapping(S,I);const R=e.render.frame;s[S.id]!==R&&(u(S),s[S.id]=R)}function h(S){const v=d();S.__bindingPointIndex=v;const M=n.createBuffer(),I=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const v=r[S.id],M=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,A=M.length;R<A;R++){const z=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,x=z.length;E<x;E++){const O=z[E];if(p(O,R,E,I)===!0){const G=O.__offset,X=Array.isArray(O.value)?O.value:[O.value];let K=0;for(let te=0;te<X.length;te++){const Y=X[te],ie=y(Y);typeof Y=="number"||typeof Y=="boolean"?(O.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,G+K,O.__data)):Y.isMatrix3?(O.__data[0]=Y.elements[0],O.__data[1]=Y.elements[1],O.__data[2]=Y.elements[2],O.__data[3]=0,O.__data[4]=Y.elements[3],O.__data[5]=Y.elements[4],O.__data[6]=Y.elements[5],O.__data[7]=0,O.__data[8]=Y.elements[6],O.__data[9]=Y.elements[7],O.__data[10]=Y.elements[8],O.__data[11]=0):(Y.toArray(O.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,v,M,I){const R=S.value,A=v+"_"+M;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{const z=I[A];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return I[A]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(S){const v=S.uniforms;let M=0;const I=16;for(let A=0,z=v.length;A<z;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,O=E.length;x<O;x++){const G=E[x],X=Array.isArray(G.value)?G.value:[G.value];for(let K=0,te=X.length;K<te;K++){const Y=X[K],ie=y(Y),J=M%I,oe=J%ie.boundary,pe=J+oe;M+=oe,pe!==0&&I-pe<ie.storage&&(M+=I-pe),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ie.storage}}}const R=M%I;return R>0&&(M+=I-R),S.__size=M,S.__cache={},this}function y(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function f(S){const v=S.target;v.removeEventListener("dispose",f);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}class xb{constructor(e={}){const{canvas:t=dw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,f=null;const _=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=Gr,this.toneMappingExposure=1;const v=this;let M=!1,I=0,R=0,A=null,z=-1,E=null;const x=new ft,O=new ft;let G=null;const X=new Ve(0);let K=0,te=t.width,Y=t.height,ie=1,J=null,oe=null;const pe=new ft(0,0,te,Y),be=new ft(0,0,te,Y);let je=!1;const Je=new bh;let Z=!1,se=!1;const me=new Xe,he=new U,Oe=new ft,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ut(){return A===null?ie:1}let D=i;function xt(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mc}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const k="webgl2";if(D=xt(k,T),D===null)throw xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,st,Me,bt,Ie,Ne,P,b,V,ne,ae,re,Te,de,fe,Pe,ee,ge,rt,ze,we,Fe,He,L;function C(){it=new A0(D),it.init(),Fe=new db(D,it),st=new x0(D,it,e,Fe),Me=new lb(D),bt=new P0(D),Ie=new Yx,Ne=new hb(D,it,Me,Ie,st,Fe,bt),P=new S0(v),b=new T0(v),V=new zw(D),He=new y0(D,V),ne=new R0(D,V,bt,He),ae=new I0(D,ne,V,bt),rt=new L0(D,st,Ne),Pe=new b0(Ie),re=new qx(v,P,b,it,st,He,Pe),Te=new yb(v,Ie),de=new Kx,fe=new ib(it),ge=new w0(v,P,b,Me,ae,u,l),ee=new ob(v,ae,st),L=new vb(D,bt,st,Me),ze=new v0(D,it,bt),we=new C0(D,it,bt),bt.programs=re.programs,v.capabilities=st,v.extensions=it,v.properties=Ie,v.renderLists=de,v.shadowMap=ee,v.state=Me,v.info=bt}C();const Q=new gb(v,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(te,Y,!1))},this.getSize=function(T){return T.set(te,Y)},this.setSize=function(T,k,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,Y=k,t.width=Math.floor(T*ie),t.height=Math.floor(k*ie),j===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(te*ie,Y*ie).floor()},this.setDrawingBufferSize=function(T,k,j){te=T,Y=k,ie=j,t.width=Math.floor(T*j),t.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,k,j,W){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,k,j,W),Me.viewport(x.copy(pe).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(be)},this.setScissor=function(T,k,j,W){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,k,j,W),Me.scissor(O.copy(be).multiplyScalar(ie).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){Me.setScissorTest(je=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(T=!0,k=!0,j=!0){let W=0;if(T){let H=!1;if(A!==null){const ce=A.texture.format;H=ce===Ec||ce===Mc||ce===Sc}if(H){const ce=A.texture.type,ye=ce===xr||ce===wn||ce===na||ce===Jn||ce===vc||ce===xc,Ee=ge.getClearColor(),Ae=ge.getClearAlpha(),Be=Ee.r,qe=Ee.g,Ue=Ee.b;ye?(p[0]=Be,p[1]=qe,p[2]=Ue,p[3]=Ae,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Be,g[1]=qe,g[2]=Ue,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),fe.dispose(),Ie.dispose(),P.dispose(),b.dispose(),ae.dispose(),He.dispose(),L.dispose(),re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Bt),Q.removeEventListener("sessionend",mn),Bi.stop()};function q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=bt.autoReset,k=ee.enabled,j=ee.autoUpdate,W=ee.needsUpdate,H=ee.type;C(),bt.autoReset=T,ee.enabled=k,ee.autoUpdate=j,ee.needsUpdate=W,ee.type=H}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Se(T){const k=T.target;k.removeEventListener("dispose",Se),mt(k)}function mt(T){Rt(T),Ie.remove(T)}function Rt(T){const k=Ie.get(T).programs;k!==void 0&&(k.forEach(function(j){re.releaseProgram(j)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,W,H,ce){k===null&&(k=ke);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Ee=rU(T,k,j,W,H);Me.setMaterial(W,ye);let Ae=j.index,Be=1;if(W.wireframe===!0){if(Ae=ne.getWireframeAttribute(j),Ae===void 0)return;Be=2}const qe=j.drawRange,Ue=j.attributes.position;let pt=qe.start*Be,kt=(qe.start+qe.count)*Be;ce!==null&&(pt=Math.max(pt,ce.start*Be),kt=Math.min(kt,(ce.start+ce.count)*Be)),Ae!==null?(pt=Math.max(pt,0),kt=Math.min(kt,Ae.count)):Ue!=null&&(pt=Math.max(pt,0),kt=Math.min(kt,Ue.count));const Pt=kt-pt;if(Pt<0||Pt===1/0)return;He.setup(H,W,Ee,j,Ae);let Xt,Tt=ze;if(Ae!==null&&(Xt=V.get(Ae),Tt=we,Tt.setIndex(Xt)),H.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*ut()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(H.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Me.setLineWidth(Re*ut()),H.isLineSegments?Tt.setMode(D.LINES):H.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else H.isPoints?Tt.setMode(D.POINTS):H.isSprite&&Tt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,yi=H._multiDrawCounts,Gn=H._multiDrawCount,nr=Ae?V.get(Ae).bytesPerElement:1,ta=Ie.get(W).currentProgram.getUniforms();for(let Ni=0;Ni<Gn;Ni++)ta.setValue(D,"_gl_DrawID",Ni),Tt.render(Re[Ni]/nr,yi[Ni])}else if(H.isInstancedMesh)Tt.renderInstances(pt,Pt,H.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yi=Math.min(j.instanceCount,Re);Tt.renderInstances(pt,Pt,yi)}else Tt.render(pt,Pt)};function vt(T,k,j){T.transparent===!0&&T.side===xi&&T.forceSinglePass===!1?(T.side=vi,T.needsUpdate=!0,pc(T,k,j),T.side=sr,T.needsUpdate=!0,pc(T,k,j),T.side=xi):pc(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),f=fe.get(j),f.init(k),S.push(f),j.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const W=new Set;return T.traverse(function(H){const ce=H.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Ee=ce[ye];vt(Ee,j,H),W.add(Ee)}else vt(ce,j,H),W.add(ce)}),S.pop(),f=null,W},this.compileAsync=function(T,k,j=null){const W=this.compile(T,k,j);return new Promise(H=>{function ce(){if(W.forEach(function(ye){Ie.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){H(T);return}setTimeout(ce,10)}it.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ke=null;function wi(T){Ke&&Ke(T)}function Bt(){Bi.stop()}function mn(){Bi.start()}const Bi=new bp;Bi.setAnimationLoop(wi),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){Ke=T,Q.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},Q.addEventListener("sessionstart",Bt),Q.addEventListener("sessionend",mn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,A),f=fe.get(T,S.length),f.init(k),S.push(f),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Je.setFromProjectionMatrix(me),se=this.localClippingEnabled,Z=Pe.init(this.clippingPlanes,se),y=de.get(T,_.length),y.init(),_.push(y),Q.enabled===!0&&Q.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&ea(ce,k,-1/0,v.sortObjects)}ea(T,k,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(J,oe),We=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,We&&ge.addToRenderList(y,T),this.info.render.frame++,Z===!0&&Pe.beginShadows();const j=f.state.shadowsArray;ee.render(j,T,k),Z===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,H=y.transmissive;if(f.setupLights(),k.isArrayCamera){const ce=k.cameras;if(H.length>0)for(let ye=0,Ee=ce.length;ye<Ee;ye++){const Ae=ce[ye];j_(W,H,T,Ae)}We&&ge.render(T);for(let ye=0,Ee=ce.length;ye<Ee;ye++){const Ae=ce[ye];G_(y,T,Ae,Ae.viewport)}}else H.length>0&&j_(W,H,T,k),We&&ge.render(T),G_(y,T,k);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,k),He.resetDefaultState(),z=-1,E=null,S.pop(),S.length>0?(f=S[S.length-1],Z===!0&&Pe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?y=_[_.length-1]:y=null};function ea(T,k,j,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Je.intersectsSprite(T)){W&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const ce=ae.update(T),ye=T.material;ye.visible&&y.push(T,ce,ye,j,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Je.intersectsObject(T))){const ce=ae.update(T),ye=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Oe.copy(ce.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Ee=ce.groups;for(let Ae=0,Be=Ee.length;Ae<Be;Ae++){const qe=Ee[Ae],Ue=ye[qe.materialIndex];Ue&&Ue.visible&&y.push(T,ce,Ue,j,Oe.z,qe)}}else ye.visible&&y.push(T,ce,ye,j,Oe.z,null)}}const H=T.children;for(let ce=0,ye=H.length;ce<ye;ce++)ea(H[ce],k,j,W)}function G_(T,k,j,W){const H=T.opaque,ce=T.transmissive,ye=T.transparent;f.setupLightsView(j),Z===!0&&Pe.setGlobalState(v.clippingPlanes,j),W&&Me.viewport(x.copy(W)),H.length>0&&uc(H,k,j),ce.length>0&&uc(ce,k,j),ye.length>0&&uc(ye,k,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function j_(T,k,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new vn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?sa:xr,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const H=f.state.transmissionRenderTarget[W.id],ce=W.viewport||x;H.setSize(ce.z,ce.w);const ye=v.getRenderTarget();v.setRenderTarget(H),v.getClearColor(X),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),We&&ge.render(j);const Ee=v.toneMapping;v.toneMapping=Gr;const Ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),Z===!0&&Pe.setGlobalState(v.clippingPlanes,W),uc(T,j,W),Ne.updateMultisampleRenderTarget(H),Ne.updateRenderTargetMipmap(H),it.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let qe=0,Ue=k.length;qe<Ue;qe++){const pt=k[qe],kt=pt.object,Pt=pt.geometry,Xt=pt.material,Tt=pt.group;if(Xt.side===xi&&kt.layers.test(W.layers)){const Re=Xt.side;Xt.side=vi,Xt.needsUpdate=!0,W_(kt,j,W,Pt,Xt,Tt),Xt.side=Re,Xt.needsUpdate=!0,Be=!0}}Be===!0&&(Ne.updateMultisampleRenderTarget(H),Ne.updateRenderTargetMipmap(H))}v.setRenderTarget(ye),v.setClearColor(X,K),Ae!==void 0&&(W.viewport=Ae),v.toneMapping=Ee}function uc(T,k,j){const W=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ce=T.length;H<ce;H++){const ye=T[H],Ee=ye.object,Ae=ye.geometry,Be=W===null?ye.material:W,qe=ye.group;Ee.layers.test(j.layers)&&W_(Ee,k,j,Ae,Be,qe)}}function W_(T,k,j,W,H,ce){T.onBeforeRender(v,k,j,W,H,ce),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.transparent===!0&&H.side===xi&&H.forceSinglePass===!1?(H.side=vi,H.needsUpdate=!0,v.renderBufferDirect(j,k,W,H,T,ce),H.side=sr,H.needsUpdate=!0,v.renderBufferDirect(j,k,W,H,T,ce),H.side=xi):v.renderBufferDirect(j,k,W,H,T,ce),T.onAfterRender(v,k,j,W,H,ce)}function pc(T,k,j){k.isScene!==!0&&(k=ke);const W=Ie.get(T),H=f.state.lights,ce=f.state.shadowsArray,ye=H.state.version,Ee=re.getParameters(T,H.state,ce,k,j),Ae=re.getProgramCacheKey(Ee);let Be=W.programs;W.environment=T.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(T.isMeshStandardMaterial?b:P).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Be===void 0&&(T.addEventListener("dispose",Se),Be=new Map,W.programs=Be);let qe=Be.get(Ae);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===ye)return q_(T,Ee),qe}else Ee.uniforms=re.getUniforms(T),T.onBeforeCompile(Ee,v),qe=re.acquireProgram(Ee,Ae),Be.set(Ae,qe),W.uniforms=Ee.uniforms;const Ue=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Pe.uniform),q_(T,Ee),W.needsLights=sU(T),W.lightsStateVersion=ye,W.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function X_(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=ll.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function q_(T,k){const j=Ie.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function rU(T,k,j,W,H){k.isScene!==!0&&(k=ke),Ne.resetTextureUnits();const ce=k.fog,ye=W.isMeshStandardMaterial?k.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt,Ae=(W.isMeshStandardMaterial?b:P).get(W.envMap||ye),Be=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!j.morphAttributes.position,pt=!!j.morphAttributes.normal,kt=!!j.morphAttributes.color;let Pt=Gr;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=Xt!==void 0?Xt.length:0,Re=Ie.get(W),yi=f.state.lights;if(Z===!0&&(se===!0||T!==E)){const ki=T===E&&W.id===z;Pe.setState(W,T,ki)}let Gn=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==yi.state.version||Re.outputColorSpace!==Ee||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==Ae||W.fog===!0&&Re.fog!==ce||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Pe.numPlanes||Re.numIntersection!==Pe.numIntersection)||Re.vertexAlphas!==Be||Re.vertexTangents!==qe||Re.morphTargets!==Ue||Re.morphNormals!==pt||Re.morphColors!==kt||Re.toneMapping!==Pt||Re.morphTargetsCount!==Tt)&&(Gn=!0):(Gn=!0,Re.__version=W.version);let nr=Re.currentProgram;Gn===!0&&(nr=pc(W,k,H));let ta=!1,Ni=!1,gu=!1;const Ht=nr.getUniforms(),fn=Re.uniforms;if(Me.useProgram(nr.program)&&(ta=!0,Ni=!0,gu=!0),W.id!==z&&(z=W.id,Ni=!0),ta||E!==T){Ht.setValue(D,"projectionMatrix",T.projectionMatrix),Ht.setValue(D,"viewMatrix",T.matrixWorldInverse);const ki=Ht.map.cameraPosition;ki!==void 0&&ki.setValue(D,he.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&Ht.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Ni=!0,gu=!0)}if(H.isSkinnedMesh){Ht.setOptional(D,H,"bindMatrix"),Ht.setOptional(D,H,"bindMatrixInverse");const ki=H.skeleton;ki&&(ki.boneTexture===null&&ki.computeBoneTexture(),Ht.setValue(D,"boneTexture",ki.boneTexture,Ne))}H.isBatchedMesh&&(Ht.setOptional(D,H,"batchingTexture"),Ht.setValue(D,"batchingTexture",H._matricesTexture,Ne),Ht.setOptional(D,H,"batchingIdTexture"),Ht.setValue(D,"batchingIdTexture",H._indirectTexture,Ne),Ht.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ht.setValue(D,"batchingColorTexture",H._colorsTexture,Ne));const wu=j.morphAttributes;if((wu.position!==void 0||wu.normal!==void 0||wu.color!==void 0)&&rt.update(H,j,nr),(Ni||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,Ht.setValue(D,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fn.envMap.value=Ae,fn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),Ni&&(Ht.setValue(D,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&nU(fn,gu),ce&&W.fog===!0&&Te.refreshFogUniforms(fn,ce),Te.refreshMaterialUniforms(fn,W,ie,Y,f.state.transmissionRenderTarget[T.id]),ll.upload(D,X_(Re),fn,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ll.upload(D,X_(Re),fn,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(D,"center",H.center),Ht.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(D,"normalMatrix",H.normalMatrix),Ht.setValue(D,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ki=W.uniformsGroups;for(let yu=0,aU=ki.length;yu<aU;yu++){const Y_=ki[yu];L.update(Y_,nr),L.bind(Y_,nr)}}return nr}function nU(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function sU(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,k,j){Ie.get(T.texture).__webglTexture=k,Ie.get(T.depthTexture).__webglTexture=j;const W=Ie.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const j=Ie.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){A=T,I=k,R=j;let W=!0,H=null,ce=!1,ye=!1;if(T){const Ee=Ie.get(T);Ee.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):Ee.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):Ee.__hasExternalTextures&&Ne.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const Be=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?H=Be[k][j]:H=Be[k],ce=!0):T.samples>0&&Ne.useMultisampledRTT(T)===!1?H=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[j]:H=Be,x.copy(T.viewport),O.copy(T.scissor),G=T.scissorTest}else x.copy(pe).multiplyScalar(ie).floor(),O.copy(be).multiplyScalar(ie).floor(),G=je;if(Me.bindFramebuffer(D.FRAMEBUFFER,H)&&W&&Me.drawBuffers(T,H),Me.viewport(x),Me.scissor(O),Me.setScissorTest(G),ce){const Ee=Ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,j)}else if(ye){const Ee=Ie.get(T.texture),Ae=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,j||0,Ae)}z=-1},this.readRenderTargetPixels=function(T,k,j,W,H,ce,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Me.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ae=T.texture,Be=Ae.format,qe=Ae.type;if(!st.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&j>=0&&j<=T.height-H&&D.readPixels(k,j,W,H,Fe.convert(Be),Fe.convert(qe),ce)}finally{const Ae=A!==null?Ie.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,k,j,W,H,ce,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Me.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ae=T.texture,Be=Ae.format,qe=Ae.type;if(!st.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-W&&j>=0&&j<=T.height-H){const Ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(k,j,W,H,Fe.convert(Be),Fe.convert(qe),0),D.flush();const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await uw(D,pt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce)}finally{D.deleteBuffer(Ue),D.deleteSync(pt)}return ce}}finally{const Ae=A!==null?Ie.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(T,k=null,j=0){T.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-j),H=Math.floor(T.image.width*W),ce=Math.floor(T.image.height*W),ye=k!==null?k.x:0,Ee=k!==null?k.y:0;Ne.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ye,Ee,H,ce),Me.unbindTexture()},this.copyTextureToTexture=function(T,k,j=null,W=null,H=0){T.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,j=null);let ce,ye,Ee,Ae,Be,qe;j!==null?(ce=j.max.x-j.min.x,ye=j.max.y-j.min.y,Ee=j.min.x,Ae=j.min.y):(ce=T.image.width,ye=T.image.height,Ee=0,Ae=0),W!==null?(Be=W.x,qe=W.y):(Be=0,qe=0);const Ue=Fe.convert(k.format),pt=Fe.convert(k.type);Ne.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const kt=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),Tt=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),yi=T.isCompressedTexture?T.mipmaps[H]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,yi.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yi.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,Be,qe,ce,ye,Ue,pt,yi.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,Be,qe,yi.width,yi.height,Ue,yi.data):D.texSubImage2D(D.TEXTURE_2D,H,Be,qe,ce,ye,Ue,pt,yi),D.pixelStorei(D.UNPACK_ROW_LENGTH,kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),H===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j=null,W=null,H=0){T.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,W=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0);let ce,ye,Ee,Ae,Be,qe,Ue,pt,kt;const Pt=T.isCompressedTexture?T.mipmaps[H]:T.image;j!==null?(ce=j.max.x-j.min.x,ye=j.max.y-j.min.y,Ee=j.max.z-j.min.z,Ae=j.min.x,Be=j.min.y,qe=j.min.z):(ce=Pt.width,ye=Pt.height,Ee=Pt.depth,Ae=0,Be=0,qe=0),W!==null?(Ue=W.x,pt=W.y,kt=W.z):(Ue=0,pt=0,kt=0);const Xt=Fe.convert(k.format),Tt=Fe.convert(k.type);let Re;if(k.isData3DTexture)Ne.setTexture3D(k,0),Re=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ne.setTexture2DArray(k,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const yi=D.getParameter(D.UNPACK_ROW_LENGTH),Gn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),nr=D.getParameter(D.UNPACK_SKIP_PIXELS),ta=D.getParameter(D.UNPACK_SKIP_ROWS),Ni=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Re,H,Ue,pt,kt,ce,ye,Ee,Xt,Tt,Pt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,H,Ue,pt,kt,ce,ye,Ee,Xt,Pt.data):D.texSubImage3D(Re,H,Ue,pt,kt,ce,ye,Ee,Xt,Tt,Pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,yi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,nr),D.pixelStorei(D.UNPACK_SKIP_ROWS,ta),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),H===0&&k.generateMipmaps&&D.generateMipmap(Re),Me.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){I=0,R=0,A=null,Me.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eh?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Oo?"display-p3":"srgb"}}class Nh{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new Nh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bb extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _i=new U;class Uh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix4(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.applyNormalMatrix(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.transformDirection(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qp=new U,$p=new ft,em=new ft,Mb=new U,tm=new Xe,hl=new U,Dh=new ar,im=new Xe,Oh=new ma;class Eb extends pi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Au,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingBox.expandByPoint(hl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ar),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hl),this.boundingSphere.expandByPoint(hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dh.copy(this.boundingSphere),Dh.applyMatrix4(r),e.ray.intersectsSphere(Dh)!==!1&&(im.copy(r).invert(),Oh.copy(e.ray).applyMatrix4(im),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Og?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;$p.fromBufferAttribute(r.attributes.skinIndex,e),em.fromBufferAttribute(r.attributes.skinWeight,e),Qp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=em.getComponent(s);if(a!==0){const o=$p.getComponent(s);tm.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Mb.copy(Qp).applyMatrix4(tm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class rm extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nm extends qt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=ci,h=ci,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sm=new Xe,Tb=new Xe;class zh{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Tb;sm.multiplyMatrices(o,t[s]),sm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new zh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new nm(t,e,e,Ui,Hi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new rm),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class hr extends gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new Xe,am=new Xe,dl=[],om=new bi,Ab=new Xe,va=new pi,xa=new ar;class Rb extends pi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ab)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),om.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(om)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),xa.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),am.multiplyMatrices(i,Ss),va.matrixWorld=am,va.raycast(e,dl);for(let a=0,o=dl.length;a<o;a++){const l=dl[a];l.instanceId=s,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new nm(new Float32Array(r*this.count),r,this.count,bc,Hi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ul extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new U,ml=new U,lm=new Xe,ba=new ma,fl=new ar,Fh=new U,cm=new U;class Bh extends _t{constructor(e=new ui,t=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)pl.fromBufferAttribute(t,r-1),ml.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new lr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;lm.copy(r).invert(),ba.copy(e.ray).applyMatrix4(lm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=u,y=p-1;g<y;g+=c){const f=h.getX(g),_=h.getX(g+1),S=_l(this,e,ba,l,f,_);S&&t.push(S)}if(this.isLineLoop){const g=h.getX(p-1),y=h.getX(u),f=_l(this,e,ba,l,g,y);f&&t.push(f)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,y=p-1;g<y;g+=c){const f=_l(this,e,ba,l,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=_l(this,e,ba,l,p-1,u);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _l(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(pl.fromBufferAttribute(a,r),ml.fromBufferAttribute(a,s),t.distanceSqToSegment(pl,ml,Fh,cm)>i)return;Fh.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Fh);if(!(o<e.near||o>e.far))return{distance:o,point:cm.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const hm=new U,dm=new U;class kh extends Bh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hm.fromBufferAttribute(t,r),dm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hm.distanceTo(dm);e.setAttribute("lineDistance",new lr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cb extends Bh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class um extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new Xe,Hh=new ma,gl=new ar,wl=new U;class Pb extends _t{constructor(e=new ui,t=new um){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;pm.copy(r).invert(),Hh.copy(e.ray).applyMatrix4(pm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,g=u;p<g;p++){const y=c.getX(p);wl.fromBufferAttribute(h,y),mm(wl,y,l,r,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,g=u;p<g;p++)wl.fromBufferAttribute(h,p),mm(wl,p,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mm(n,e,t,i,r,s,a){const o=Hh.distanceSqToPoint(n);if(o<t){const l=new U;Hh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class yl extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends yl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Lb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ib(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function fm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function _m(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Sa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];i:{e:{let a;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nb extends Sa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ku:s=e,o=2*t-i;break;case Hu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:a=e,l=2*i-t;break;case Hu:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,f=y*g,_=-u*f+2*u*y-u*g,S=(1+u)*f+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-p)*f+(1.5+p)*y+.5*g,M=p*f-p*y;for(let I=0;I!==o;++I)s[I]=_*a[h+I]+S*a[c+I]+v*a[l+I]+M*a[d+I];return s}}class Ub extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class Db extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class dr{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vl(t,this.TimeBufferType),this.values=vl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vl(e.times,Array),values:vl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Db(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ub(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case Qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Lb(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){const y=t[d+g];if(y!==t[u+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}dr.prototype.TimeBufferType=Float32Array,dr.prototype.ValueBufferType=Float32Array,dr.prototype.DefaultInterpolation=oa;class Ms extends dr{constructor(e,t,i){super(e,t,i)}}Ms.prototype.ValueTypeName="bool",Ms.prototype.ValueBufferType=Array,Ms.prototype.DefaultInterpolation=aa,Ms.prototype.InterpolantFactoryMethodLinear=void 0,Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class gm extends dr{}gm.prototype.ValueTypeName="color";class Es extends dr{}Es.prototype.ValueTypeName="number";class Ob extends Sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Mi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ts extends dr{InterpolantFactoryMethodLinear(e){return new Ob(this.times,this.values,this.getValueSize(),e)}}Ts.prototype.ValueTypeName="quaternion",Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends dr{constructor(e,t,i){super(e,t,i)}}As.prototype.ValueTypeName="string",As.prototype.ValueBufferType=Array,As.prototype.DefaultInterpolation=aa,As.prototype.InterpolantFactoryMethodLinear=void 0,As.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends dr{}Rs.prototype.ValueTypeName="vector";class zb{constructor(e="",t=-1,i=[],r=zg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Vi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Bb(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(dr.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ib(l);l=fm(l,1,h),c=fm(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=r[d];u||(r[d]=u=[]),u.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,p,g){if(u.length!==0){const y=[],f=[];_m(u,y,f,p),y.length!==0&&g.push(new h(d,y,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)u[d[p].morphTargets[g]]=-1;for(const g in u){const y=[],f=[];for(let _=0;_!==d[p].morphTargets.length;++_){const S=d[p];y.push(S.time),f.push(S.morphTarget===g?1:0)}r.push(new Es(".morphTargetInfluence["+g+"]",y,f))}l=u.length*a}else{const u=".bones["+t[h].name+"]";i(Rs,u+".position",d,"pos",r),i(Ts,u+".quaternion",d,"rot",r),i(Rs,u+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return gm;case"quaternion":return Ts;case"bool":case"boolean":return Ms;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Bb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fb(n.type);if(n.times===void 0){const t=[],i=[];_m(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const en={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class wm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const kb=new wm;class Cn{constructor(e){this.manager=e!==void 0?e:kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class Hb extends Error{constructor(e,t){super(e),this.response=t}}class Vh extends Cn{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=en.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:i,onError:r});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cr[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let y=0;const f=new ReadableStream({start(_){S();function S(){d.read().then(({done:v,value:M})=>{if(v)_.close();else{y+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let R=0,A=h.length;R<A;R++){const z=h[R];z.onProgress&&z.onProgress(I)}_.enqueue(M),S()}},v=>{_.error(v)})}}});return new Response(f)}else throw new Hb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{en.add(e,c);const h=Cr[e];delete Cr[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Cr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Cr[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vb extends Cn{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=en.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ha("img");function l(){h(),en.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Gb extends Cn{constructor(e){super(e)}load(e,t,i,r){const s=new qt,a=new Vb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xl extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gh=new Xe,ym=new U,vm=new U;class jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vm),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jb extends jh{constructor(){super(new fi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=$n*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wb extends xl{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new jb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xm=new Xe,Ma=new U,Wh=new U;class Xb extends jh{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ma),Wh.copy(i.position),Wh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wh),i.updateMatrixWorld(),r.makeTranslation(-Ma.x,-Ma.y,-Ma.z),xm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xm)}}class qb extends xl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Xb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yb extends jh{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bm extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Yb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jb extends xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ea{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kb extends ui{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Zb extends Cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=en.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return en.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),en.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});en.add(e,l),s.manager.itemStart(e)}}let bl;class Sm{static getContext(){return bl===void 0&&(bl=new(window.AudioContext||window.webkitAudioContext)),bl}static setContext(e){bl=e}}class Qb extends Cn{constructor(e){super(e)}load(e,t,i,r){const s=this,a=new Vh(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Sm.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class $b{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Mm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Mm(){return(typeof performance>"u"?Date:performance).now()}const Pn=new U,Em=new Mi,eS=new U,Ln=new U;class tS extends _t{constructor(){super(),this.type="AudioListener",this.context=Sm.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $b}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Pn,Em,eS),Ln.set(0,0,-1).applyQuaternion(Em),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Pn.x,r),t.positionY.linearRampToValueAtTime(Pn.y,r),t.positionZ.linearRampToValueAtTime(Pn.z,r),t.forwardX.linearRampToValueAtTime(Ln.x,r),t.forwardY.linearRampToValueAtTime(Ln.y,r),t.forwardZ.linearRampToValueAtTime(Ln.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Pn.x,Pn.y,Pn.z),t.setOrientation(Ln.x,Ln.y,Ln.z,i.x,i.y,i.z)}}let iS=class extends _t{constructor(n){super(),this.type="Audio",this.listener=n,this.context=n.context,this.gain=this.context.createGain(),this.gain.connect(n.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(n){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=n,this.connect(),this}setMediaElementSource(n){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(n),this.connect(),this}setMediaStreamSource(n){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(n),this.connect(),this}setBuffer(n){return this.buffer=n,this.sourceType="buffer",this.autoplay&&this.play(),this}play(n=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+n;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let n=1,e=this.filters.length;n<e;n++)this.filters[n-1].connect(this.filters[n]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let n=1,e=this.filters.length;n<e;n++)this.filters[n-1].disconnect(this.filters[n]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(n){return n||(n=[]),this._connected===!0?(this.disconnect(),this.filters=n.slice(),this.connect()):this.filters=n.slice(),this}setDetune(n){return this.detune=n,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(n){return this.setFilters(n?[n]:[])}setPlaybackRate(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=n,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=n,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(n){return this.loopStart=n,this}setLoopEnd(n){return this.loopEnd=n,this}getVolume(){return this.gain.gain.value}setVolume(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this}};const In=new U,Tm=new Mi,rS=new U,Nn=new U;class Am extends iS{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(In,Tm,rS),Nn.set(0,0,1).applyQuaternion(Tm);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(In.x,i),t.positionY.linearRampToValueAtTime(In.y,i),t.positionZ.linearRampToValueAtTime(In.z,i),t.orientationX.linearRampToValueAtTime(Nn.x,i),t.orientationY.linearRampToValueAtTime(Nn.y,i),t.orientationZ.linearRampToValueAtTime(Nn.z,i)}else t.setPosition(In.x,In.y,In.z),t.setOrientation(Nn.x,Nn.y,Nn.z)}}const Xh="\\[\\]\\.:\\/",nS=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",sS="[^"+Xh.replace("\\.","")+"]",aS=/((?:WC+[\/:])*)/.source.replace("WC",qh),oS=/(WCOD+)?/.source.replace("WCOD",sS),lS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),cS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),hS=new RegExp("^"+aS+oS+lS+cS+"$"),dS=["material","materials","bones","map"];class uS{constructor(e,t,i){const r=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class dt{constructor(e,t,i){this.path=t,this.parsedPath=i||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,i):new dt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nS,"")}static parseTrackName(e){const t=hS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);dS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=uS,dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray],dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const oU=new Float32Array(1);class Ai{constructor(e){this.value=e}clone(){return new Ai(this.value.clone===void 0?this.value:this.value.clone())}}class Rm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cm extends kh{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new ui;s.setIndex(new gt(i,1)),s.setAttribute("position",new lr(r,3)),super(s,new ul({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function Pm(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new ui;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const d=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Lm(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][u]);const g=Lm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Lm(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new gt(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function Im(n,e){if(e===Fg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===$c||e===Vu){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===$c)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class pS extends Cn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new IS(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Ea.extractUrlBase(e);a=Ea.resolveURL(c,this.path)}else a=Ea.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Vh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Nm){try{a[$e.KHR_BINARY_GLTF]=new NS(e)}catch(h){r&&r(h);return}s=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:a[d]=new _S;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[d]=new US(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[d]=new DS;break;case $e.KHR_MESH_QUANTIZATION:a[d]=new OS;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function mS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fS{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let o;const l=new Ve(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],Zt);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new bm(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new qb(l),o.distance=c;break;case"spot":o=new Wb(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,Pr(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],s=(r.extensions&&r.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(a){return i._getNodeRef(t.cache,s,a)})}}class _S{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Di}extendParams(e,t,i){const r=[];e.color=new Ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,hi))}return Promise.all(r)}}class gS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class wS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(s)}}class yS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class xS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,hi)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class bS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class SS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(o[0],o[1],o[2],Zt),Promise.all(s)}}class MS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ES{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(o[0],o[1],o[2],Zt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,hi)),Promise.all(s)}}class TS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class AS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class RS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class CS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,d=r.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(p),h,d,u,r.mode,r.filter),p})})}else return null}}class IS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==zi.TRIANGLES&&l.mode!==zi.TRIANGLE_STRIP&&l.mode!==zi.TRIANGLE_FAN&&l.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],o={};for(const l in s)a.push(this.parser.getDependency("accessor",s[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],d=l[0].count,u=[];for(const p of h){const g=new Xe,y=new U,f=new Mi,_=new U(1,1,1),S=new Rb(p.geometry,p.material,d);for(let v=0;v<d;v++)o.TRANSLATION&&y.fromBufferAttribute(o.TRANSLATION,v),o.ROTATION&&f.fromBufferAttribute(o.ROTATION,v),o.SCALE&&_.fromBufferAttribute(o.SCALE,v),S.setMatrixAt(v,g.compose(y,f,_));for(const v in o)if(v==="_COLOR_0"){const M=o[v];S.instanceColor=new hr(M.array,M.itemSize,M.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,o[v]);_t.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),u.push(S)}return c.isGroup?(c.clear(),c.add(...u),c):u[0]}))}}const Nm="glTF",Ta=12,Um={JSON:1313821514,BIN:5130562};class NS{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ta),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ta,s=new DataView(e,Ta);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Um.JSON){const c=new Uint8Array(e,Ta+a,o);this.content=i.decode(c)}else if(l===Um.BIN){const c=Ta+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class US{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=Jh[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Jh[h]||h.toLowerCase();if(a[h]!==void 0){const u=i.accessors[e.attributes[h]],p=Cs[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,u){r.decodeDracoFile(h,function(p){for(const g in p.attributes){const y=p.attributes[g],f=l[g];f!==void 0&&(y.normalized=f)}d(p)},o,c,Zt,u)})})}}class DS{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Dm extends Sa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,d=(i-t)/h,u=d*d,p=u*d,g=e*c,y=g-c,f=-2*p+3*u,_=p-u,S=1-f,v=_-u+d;for(let M=0;M!==o;M++){const I=a[y+M+o],R=a[y+M+l]*h,A=a[g+M+o],z=a[g+M]*h;s[M]=S*I+v*R+f*A+_*z}return s}}const zS=new Mi;class FS extends Dm{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return zS.fromArray(s).normalize().toArray(s),s}}const zi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Om={9728:ci,9729:Si,9984:Cu,9985:Po,9986:ra,9987:vr},zm={33071:jr,33648:Co,10497:Yn},Yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BS={CUBICSPLINE:void 0,LINEAR:oa,STEP:aa},Kh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new yl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),n.DefaultMaterial}function Un(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pr(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HS(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(i){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(u)}if(r){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return i&&(n.morphAttributes.position=h),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function VS(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GS(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zh(t.attributes):e=n.indices+":"+Zh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Zh(n.targets[i]);return e}function Zh(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Qh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const WS=new Xe;class XS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new Gb(this.options.manager):this.textureLoader=new Zb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Un(s,o,r),Pr(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(Ea.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Yh[r.type],o=Cs[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new gt(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Yh[r.type],c=Cs[r.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let y,f;if(p&&p!==d){const _=Math.floor(u/p),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let v=t.cache.get(S);v||(y=new c(o,_*p,r.count*p/h),v=new Sb(y,p/h),t.cache.add(S,v)),f=new Uh(v,l,u%p/h,g)}else o===null?y=new c(r.count*l):y=new c(o,u,r.count*l),f=new gt(y,l,g);if(r.sparse!==void 0){const _=Yh.SCALAR,S=Cs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,I=new S(a[1],v,r.sparse.count*_),R=new c(a[2],M,r.sparse.count*l);o!==null&&(f=new gt(f.array.slice(),f.itemSize,f.normalized));for(let A=0,z=I.length;A<z;A++){const E=I[A];if(f.setX(E,R[A*l]),l>=2&&f.setY(E,R[A*l+1]),l>=3&&f.setZ(E,R[A*l+2]),l>=4&&f.setW(E,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const o=i.manager.getHandler(s.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Om[d.magFilter]||Si,h.minFilter=Om[d.minFilter]||vr,h.wrapS=zm[d.wrapS]||Yn,h.wrapT=zm[d.wrapT]||Yn,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){const f=new qt(y);f.needsUpdate=!0,u(f)}),t.load(Ea.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Pr(d,a),d.userData.mimeType=a.mimeType||jS(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new um,or.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ul,or.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return yl}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const d=r[$e.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Zt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,hi)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xi);const h=s.alphaMode||Kh.OPAQUE;if(h===Kh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Kh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Di&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Di){const d=s.emissiveFactor;o.emissive=new Ve().setRGB(d[0],d[1],d[2],Zt)}return s.emissiveTexture!==void 0&&a!==Di&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,hi)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),Pr(d,s),t.associations.set(d,{materials:e}),s.extensions&&Un(r,d,s),d})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=GS(c),d=r[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=Fm(new ui,c,t),r[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?kS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const y=h[p],f=a[p];let _;const S=c[p];if(f.mode===zi.TRIANGLES||f.mode===zi.TRIANGLE_STRIP||f.mode===zi.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new Eb(y,S):new pi(y,S),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),f.mode===zi.TRIANGLE_STRIP?_.geometry=Im(_.geometry,Vu):f.mode===zi.TRIANGLE_FAN&&(_.geometry=Im(_.geometry,$c));else if(f.mode===zi.LINES)_=new kh(y,S);else if(f.mode===zi.LINE_STRIP)_=new Bh(y,S);else if(f.mode===zi.LINE_LOOP)_=new Cb(y,S);else if(f.mode===zi.POINTS)_=new Pb(y,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&VS(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Pr(_,s),f.extensions&&Un(r,_,f),t.assignFinalMaterial(_),d.push(_)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Un(r,d[0],s),d[0];const u=new Rr;s.extensions&&Un(r,u,s),t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new fi(rh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Sh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Xe;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zh(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=r.channels.length;d<u;d++){const p=r.channels[d],g=r.samplers[p.sampler],y=p.target,f=y.node,_=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],p=d[1],g=d[2],y=d[3],f=d[4],_=[];for(let S=0,v=u.length;S<v;S++){const M=u[S],I=p[S],R=g[S],A=y[S],z=f[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=i._createAnimationTracks(M,I,R,A,z);if(E)for(let x=0;x<E.length;x++)_.push(E[x])}return new zb(s,void 0,_)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,WS)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new rm:c.length>1?h=new Rr:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=a),Pr(h,s),s.extensions&&Un(i,h,s),s.matrix!==void 0){const d=new Xe;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Rr;i.name&&(s.name=r.createUniqueName(i.name)),Pr(s,i),i.extensions&&Un(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,p]of r.associations)(u instanceof or||u instanceof qt)&&d.set(u,p);return h.traverse(u=>{const p=r.associations.get(u);p!=null&&d.set(u,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];tn[s.path]===tn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(tn[s.path]){case tn.weights:c=Es;break;case tn.rotation:c=Ts;break;case tn.position:case tn.scale:c=Rs;break;default:switch(i.itemSize){case 1:c=Es;break;case 2:case 3:default:c=Rs;break}break}const h=r.interpolation!==void 0?BS[r.interpolation]:oa,d=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+tn[s.path],t.array,d,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Qh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Ts?FS:Dm;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qS(n,e,t){const i=e.attributes,r=new bi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const h=Qh(Cs[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const y=Qh(Cs[u.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new ar;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function Fm(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Jh[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return ot.workingColorSpace!==Zt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Pr(n,e),qS(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?HS(n,e.targets,t):n})}const Bm={type:"change"},$h={type:"start"},km={type:"end"},Sl=new ma,Hm=new $r,YS=Math.cos(70*rh.DEG2RAD);class JS extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",fe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Bm),i.update(),s=r.NONE},this.update=(function(){const L=new U,C=new Mi().setFromUnitVectors(e.up,new U(0,1,0)),Q=C.clone().invert(),q=new U,$=new Mi,le=new U,Se=2*Math.PI;return function(mt=null){const Rt=i.object.position;L.copy(Rt).sub(i.target),L.applyQuaternion(C),o.setFromVector3(L),i.autoRotate&&s===r.NONE&&G(x(mt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let vt=i.minAzimuthAngle,Ke=i.maxAzimuthAngle;isFinite(vt)&&isFinite(Ke)&&(vt<-Math.PI?vt+=Se:vt>Math.PI&&(vt-=Se),Ke<-Math.PI?Ke+=Se:Ke>Math.PI&&(Ke-=Se),vt<=Ke?o.theta=Math.max(vt,Math.min(Ke,o.theta)):o.theta=o.theta>(vt+Ke)/2?Math.max(vt,o.theta):Math.min(Ke,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let wi=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=pe(o.radius);else{const Bt=o.radius;o.radius=pe(o.radius*c),wi=Bt!=o.radius}if(L.setFromSpherical(o),L.applyQuaternion(Q),Rt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),i.zoomToCursor&&R){let Bt=null;if(i.object.isPerspectiveCamera){const mn=L.length();Bt=pe(mn*c);const Bi=mn-Bt;i.object.position.addScaledVector(M,Bi),i.object.updateMatrixWorld(),wi=!!Bi}else if(i.object.isOrthographicCamera){const mn=new U(I.x,I.y,0);mn.unproject(i.object);const Bi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),wi=Bi!==i.object.zoom;const ea=new U(I.x,I.y,0);ea.unproject(i.object),i.object.position.sub(ea).add(mn),i.object.updateMatrixWorld(),Bt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Bt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Bt).add(i.object.position):(Sl.origin.copy(i.object.position),Sl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Sl.direction))<YS?e.lookAt(i.target):(Hm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Sl.intersectPlane(Hm,i.target))))}else if(i.object.isOrthographicCamera){const Bt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Bt!==i.object.zoom&&(i.object.updateProjectionMatrix(),wi=!0)}return c=1,R=!1,wi||q.distanceToSquared(i.object.position)>a||8*(1-$.dot(i.object.quaternion))>a||le.distanceToSquared(i.target)>a?(i.dispatchEvent(Bm),q.copy(i.object.position),$.copy(i.object.quaternion),le.copy(i.target),!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ge),i.domElement.removeEventListener("pointerdown",Ne),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",Te,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Rm,l=new Rm;let c=1;const h=new U,d=new De,u=new De,p=new De,g=new De,y=new De,f=new De,_=new De,S=new De,v=new De,M=new U,I=new De;let R=!1;const A=[],z={};let E=!1;function x(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function O(L){const C=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*C)}function G(L){l.theta-=L}function X(L){l.phi-=L}const K=(function(){const L=new U;return function(C,Q){L.setFromMatrixColumn(Q,0),L.multiplyScalar(-C),h.add(L)}})(),te=(function(){const L=new U;return function(C,Q){i.screenSpacePanning===!0?L.setFromMatrixColumn(Q,1):(L.setFromMatrixColumn(Q,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(C),h.add(L)}})(),Y=(function(){const L=new U;return function(C,Q){const q=i.domElement;if(i.object.isPerspectiveCamera){const $=i.object.position;L.copy($).sub(i.target);let le=L.length();le*=Math.tan(i.object.fov/2*Math.PI/180),K(2*C*le/q.clientHeight,i.object.matrix),te(2*Q*le/q.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(C*(i.object.right-i.object.left)/i.object.zoom/q.clientWidth,i.object.matrix),te(Q*(i.object.top-i.object.bottom)/i.object.zoom/q.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function ie(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function oe(L,C){if(!i.zoomToCursor)return;R=!0;const Q=i.domElement.getBoundingClientRect(),q=L-Q.left,$=C-Q.top,le=Q.width,Se=Q.height;I.x=q/le*2-1,I.y=-($/Se)*2+1,M.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function pe(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function be(L){d.set(L.clientX,L.clientY)}function je(L){oe(L.clientX,L.clientX),_.set(L.clientX,L.clientY)}function Je(L){g.set(L.clientX,L.clientY)}function Z(L){u.set(L.clientX,L.clientY),p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const C=i.domElement;G(2*Math.PI*p.x/C.clientHeight),X(2*Math.PI*p.y/C.clientHeight),d.copy(u),i.update()}function se(L){S.set(L.clientX,L.clientY),v.subVectors(S,_),v.y>0?ie(O(v.y)):v.y<0&&J(O(v.y)),_.copy(S),i.update()}function me(L){y.set(L.clientX,L.clientY),f.subVectors(y,g).multiplyScalar(i.panSpeed),Y(f.x,f.y),g.copy(y),i.update()}function he(L){oe(L.clientX,L.clientY),L.deltaY<0?J(O(L.deltaY)):L.deltaY>0&&ie(O(L.deltaY)),i.update()}function Oe(L){let C=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),C=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),C=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),C=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),C=!0;break}C&&(L.preventDefault(),i.update())}function ke(L){if(A.length===1)d.set(L.pageX,L.pageY);else{const C=He(L),Q=.5*(L.pageX+C.x),q=.5*(L.pageY+C.y);d.set(Q,q)}}function We(L){if(A.length===1)g.set(L.pageX,L.pageY);else{const C=He(L),Q=.5*(L.pageX+C.x),q=.5*(L.pageY+C.y);g.set(Q,q)}}function ut(L){const C=He(L),Q=L.pageX-C.x,q=L.pageY-C.y,$=Math.sqrt(Q*Q+q*q);_.set(0,$)}function D(L){i.enableZoom&&ut(L),i.enablePan&&We(L)}function xt(L){i.enableZoom&&ut(L),i.enableRotate&&ke(L)}function it(L){if(A.length==1)u.set(L.pageX,L.pageY);else{const Q=He(L),q=.5*(L.pageX+Q.x),$=.5*(L.pageY+Q.y);u.set(q,$)}p.subVectors(u,d).multiplyScalar(i.rotateSpeed);const C=i.domElement;G(2*Math.PI*p.x/C.clientHeight),X(2*Math.PI*p.y/C.clientHeight),d.copy(u)}function st(L){if(A.length===1)y.set(L.pageX,L.pageY);else{const C=He(L),Q=.5*(L.pageX+C.x),q=.5*(L.pageY+C.y);y.set(Q,q)}f.subVectors(y,g).multiplyScalar(i.panSpeed),Y(f.x,f.y),g.copy(y)}function Me(L){const C=He(L),Q=L.pageX-C.x,q=L.pageY-C.y,$=Math.sqrt(Q*Q+q*q);S.set(0,$),v.set(0,Math.pow(S.y/_.y,i.zoomSpeed)),ie(v.y),_.copy(S);const le=(L.pageX+C.x)*.5,Se=(L.pageY+C.y)*.5;oe(le,Se)}function bt(L){i.enableZoom&&Me(L),i.enablePan&&st(L)}function Ie(L){i.enableZoom&&Me(L),i.enableRotate&&it(L)}function Ne(L){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",P),i.domElement.addEventListener("pointerup",b)),!we(L)&&(rt(L),L.pointerType==="touch"?Pe(L):V(L)))}function P(L){i.enabled!==!1&&(L.pointerType==="touch"?ee(L):ne(L))}function b(L){switch(ze(L),A.length){case 0:i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",P),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(km),s=r.NONE;break;case 1:const C=A[0],Q=z[C];Pe({pointerId:C,pageX:Q.x,pageY:Q.y});break}}function V(L){let C;switch(L.button){case 0:C=i.mouseButtons.LEFT;break;case 1:C=i.mouseButtons.MIDDLE;break;case 2:C=i.mouseButtons.RIGHT;break;default:C=-1}switch(C){case jn.DOLLY:if(i.enableZoom===!1)return;je(L),s=r.DOLLY;break;case jn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Je(L),s=r.PAN}else{if(i.enableRotate===!1)return;be(L),s=r.ROTATE}break;case jn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;be(L),s=r.ROTATE}else{if(i.enablePan===!1)return;Je(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($h)}function ne(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(L);break;case r.DOLLY:if(i.enableZoom===!1)return;se(L);break;case r.PAN:if(i.enablePan===!1)return;me(L);break}}function ae(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent($h),he(re(L)),i.dispatchEvent(km))}function re(L){const C=L.deltaMode,Q={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(C){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return L.ctrlKey&&!E&&(Q.deltaY*=10),Q}function Te(L){L.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(L){L.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function fe(L){i.enabled===!1||i.enablePan===!1||Oe(L)}function Pe(L){switch(Fe(L),A.length){case 1:switch(i.touches.ONE){case Wn.ROTATE:if(i.enableRotate===!1)return;ke(L),s=r.TOUCH_ROTATE;break;case Wn.PAN:if(i.enablePan===!1)return;We(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Wn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(L),s=r.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($h)}function ee(L){switch(Fe(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;it(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;st(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;bt(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ie(L),i.update();break;default:s=r.NONE}}function ge(L){i.enabled!==!1&&L.preventDefault()}function rt(L){A.push(L.pointerId)}function ze(L){delete z[L.pointerId];for(let C=0;C<A.length;C++)if(A[C]==L.pointerId){A.splice(C,1);return}}function we(L){for(let C=0;C<A.length;C++)if(A[C]==L.pointerId)return!0;return!1}function Fe(L){let C=z[L.pointerId];C===void 0&&(C=new De,z[L.pointerId]=C),C.set(L.pageX,L.pageY)}function He(L){const C=L.pointerId===A[0]?A[1]:A[0];return z[C]}i.domElement.addEventListener("contextmenu",ge),i.domElement.addEventListener("pointerdown",Ne),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",ae,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Te,{passive:!0,capture:!0}),this.update()}}const KS=""+new URL("rapier_wasm3d_bg-CN52XpWN.wasm",import.meta.url).href,ZS=async(n={},e)=>{let t;if(e.startsWith("data:")){const i=e.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(i,"base64");else if(typeof atob=="function"){const s=atob(i);r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(r,n)}else{const i=await fetch(e),r=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(i,n);else{const s=await i.arrayBuffer();t=await WebAssembly.instantiate(s,n)}}return t.instance.exports};let m;function QS(n){m=n}const at=new Array(128).fill(void 0);at.push(void 0,null,!0,!1);let Aa=at.length;function It(n){Aa===at.length&&at.push(at.length+1);const e=Aa;return Aa=at[e],at[e]=n,e}function ct(n){return at[n]}function $S(n){n<132||(at[n]=Aa,Aa=n)}function Ra(n){const e=ct(n);return $S(n),e}function xe(n){return n==null}let Ml=null;function Ca(){return(Ml===null||Ml.byteLength===0)&&(Ml=new Float64Array(m.memory.buffer)),Ml}let El=null;function Le(){return(El===null||El.byteLength===0)&&(El=new Int32Array(m.memory.buffer)),El}const eM=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Vm=new eM("utf-8",{ignoreBOM:!0,fatal:!0});Vm.decode();let Tl=null;function tM(){return(Tl===null||Tl.byteLength===0)&&(Tl=new Uint8Array(m.memory.buffer)),Tl}function Gm(n,e){return n=n>>>0,Vm.decode(tM().subarray(n,n+e))}function iM(){let n,e;try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.version(r);var t=Le()[r/4+0],i=Le()[r/4+1];return n=t,e=i,Gm(t,i)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_free(n,e,1)}}function N(n,e){if(!(n instanceof e))throw new Error(`expected instance of ${e.name}`);return n.ptr}let Al=null;function Mt(){return(Al===null||Al.byteLength===0)&&(Al=new Float32Array(m.memory.buffer)),Al}let wt=128;function Et(n){if(wt==1)throw new Error("out of js stack");return at[--wt]=n,wt}function jm(n,e){return n=n>>>0,Mt().subarray(n/4,n/4+e)}let Rl=null;function Wm(){return(Rl===null||Rl.byteLength===0)&&(Rl=new Uint32Array(m.memory.buffer)),Rl}function rM(n,e){return n=n>>>0,Wm().subarray(n/4,n/4+e)}let Ri=0;function Dn(n,e){const t=e(n.length*4,4)>>>0;return Mt().set(n,t/4),Ri=n.length,t}function Cl(n,e){const t=e(n.length*4,4)>>>0;return Wm().set(n,t/4),Ri=n.length,t}function ed(n,e){try{return n.apply(this,e)}catch(t){m.__wbindgen_exn_store(It(t))}}const lU=Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"}),$t=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"}),Pl=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),cU=Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased"}),hU=Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"}),Ji=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Xm=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawbroadphase_free(n>>>0));class On{static __wrap(e){e=e>>>0;const t=Object.create(On.prototype);return t.__wbg_ptr=e,Xm.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Xm.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawbroadphase_free(e)}constructor(){const e=m.rawbroadphase_new();return this.__wbg_ptr=e>>>0,this}}const nM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawccdsolver_free(n>>>0));class td{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,nM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawccdsolver_free(e)}constructor(){const e=m.rawccdsolver_new();return this.__wbg_ptr=e>>>0,this}}const sM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcharactercollision_free(n>>>0));class qm{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,sM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcharactercollision_free(e)}constructor(){const e=m.rawcharactercollision_new();return this.__wbg_ptr=e>>>0,this}handle(){return m.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const e=m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return B.__wrap(e)}translationDeltaRemaining(){const e=m.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return B.__wrap(e)}toi(){return m.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const e=m.rawcharactercollision_worldWitness1(this.__wbg_ptr);return B.__wrap(e)}worldWitness2(){const e=m.rawcharactercollision_worldWitness2(this.__wbg_ptr);return B.__wrap(e)}worldNormal1(){const e=m.rawcharactercollision_worldNormal1(this.__wbg_ptr);return B.__wrap(e)}worldNormal2(){const e=m.rawcharactercollision_worldNormal2(this.__wbg_ptr);return B.__wrap(e)}}const Ym=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcolliderset_free(n>>>0));class At{static __wrap(e){e=e>>>0;const t=Object.create(At.prototype);return t.__wbg_ptr=e,Ym.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ym.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcolliderset_free(e)}coTranslation(e){const t=m.rawcolliderset_coTranslation(this.__wbg_ptr,e);return B.__wrap(t)}coRotation(e){const t=m.rawcolliderset_coRotation(this.__wbg_ptr,e);return et.__wrap(t)}coSetTranslation(e,t,i,r){m.rawcolliderset_coSetTranslation(this.__wbg_ptr,e,t,i,r)}coSetTranslationWrtParent(e,t,i,r){m.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,e,t,i,r)}coSetRotation(e,t,i,r,s){m.rawcolliderset_coSetRotation(this.__wbg_ptr,e,t,i,r,s)}coSetRotationWrtParent(e,t,i,r,s){m.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,e,t,i,r,s)}coIsSensor(e){return m.rawcolliderset_coIsSensor(this.__wbg_ptr,e)!==0}coShapeType(e){return m.rawcolliderset_coShapeType(this.__wbg_ptr,e)}coHalfspaceNormal(e){const t=m.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}coHalfExtents(e){const t=m.rawcolliderset_coHalfExtents(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}coSetHalfExtents(e,t){N(t,B),m.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,e,t.__wbg_ptr)}coRadius(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coRadius(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}coSetRadius(e,t){m.rawcolliderset_coSetRadius(this.__wbg_ptr,e,t)}coHalfHeight(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coHalfHeight(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}coSetHalfHeight(e,t){m.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,e,t)}coRoundRadius(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coRoundRadius(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}coSetRoundRadius(e,t){m.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,e,t)}coVertices(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coVertices(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];let s;return t!==0&&(s=jm(t,i).slice(),m.__wbindgen_free(t,i*4,4)),s}finally{m.__wbindgen_add_to_stack_pointer(16)}}coIndices(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coIndices(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];let s;return t!==0&&(s=rM(t,i).slice(),m.__wbindgen_free(t,i*4,4)),s}finally{m.__wbindgen_add_to_stack_pointer(16)}}coTriMeshFlags(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coTriMeshFlags(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];return t===0?void 0:i>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}coHeightFieldFlags(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coHeightFieldFlags(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];return t===0?void 0:i>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];let s;return t!==0&&(s=jm(t,i).slice(),m.__wbindgen_free(t,i*4,4)),s}finally{m.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(e){const t=m.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}coHeightfieldNRows(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coHeightfieldNRows(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];return t===0?void 0:i>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coHeightfieldNCols(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Le()[r/4+1];return t===0?void 0:i>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}coParent(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawcolliderset_coParent(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Ca()[r/8+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(e,t){m.rawcolliderset_coSetEnabled(this.__wbg_ptr,e,t)}coIsEnabled(e){return m.rawcolliderset_coIsEnabled(this.__wbg_ptr,e)!==0}coSetContactSkin(e,t){m.rawcolliderset_coSetContactSkin(this.__wbg_ptr,e,t)}coContactSkin(e){return m.rawcolliderset_coContactSkin(this.__wbg_ptr,e)}coFriction(e){return m.rawcolliderset_coFriction(this.__wbg_ptr,e)}coRestitution(e){return m.rawcolliderset_coRestitution(this.__wbg_ptr,e)}coDensity(e){return m.rawcolliderset_coDensity(this.__wbg_ptr,e)}coMass(e){return m.rawcolliderset_coMass(this.__wbg_ptr,e)}coVolume(e){return m.rawcolliderset_coVolume(this.__wbg_ptr,e)}coCollisionGroups(e){return m.rawcolliderset_coCollisionGroups(this.__wbg_ptr,e)>>>0}coSolverGroups(e){return m.rawcolliderset_coSolverGroups(this.__wbg_ptr,e)>>>0}coActiveHooks(e){return m.rawcolliderset_coActiveHooks(this.__wbg_ptr,e)>>>0}coActiveCollisionTypes(e){return m.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,e)}coActiveEvents(e){return m.rawcolliderset_coActiveEvents(this.__wbg_ptr,e)>>>0}coContactForceEventThreshold(e){return m.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,e)}coContainsPoint(e,t){return N(t,B),m.rawcolliderset_coContainsPoint(this.__wbg_ptr,e,t.__wbg_ptr)!==0}coCastShape(e,t,i,r,s,a,o,l,c){N(t,B),N(i,Ce),N(r,B),N(s,et),N(a,B);const h=m.rawcolliderset_coCastShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c);return h===0?void 0:zl.__wrap(h)}coCastCollider(e,t,i,r,s,a,o){N(t,B),N(r,B);const l=m.rawcolliderset_coCastCollider(this.__wbg_ptr,e,t.__wbg_ptr,i,r.__wbg_ptr,s,a,o);return l===0?void 0:Ll.__wrap(l)}coIntersectsShape(e,t,i,r){return N(t,Ce),N(i,B),N(r,et),m.rawcolliderset_coIntersectsShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(e,t,i,r,s){N(t,Ce),N(i,B),N(r,et);const a=m.rawcolliderset_coContactShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s);return a===0?void 0:Pa.__wrap(a)}coContactCollider(e,t,i){const r=m.rawcolliderset_coContactCollider(this.__wbg_ptr,e,t,i);return r===0?void 0:Pa.__wrap(r)}coProjectPoint(e,t,i){N(t,B);const r=m.rawcolliderset_coProjectPoint(this.__wbg_ptr,e,t.__wbg_ptr,i);return Nl.__wrap(r)}coIntersectsRay(e,t,i,r){return N(t,B),N(i,B),m.rawcolliderset_coIntersectsRay(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)!==0}coCastRay(e,t,i,r,s){return N(t,B),N(i,B),m.rawcolliderset_coCastRay(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,s)}coCastRayAndGetNormal(e,t,i,r,s){N(t,B),N(i,B);const a=m.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,s);return a===0?void 0:Dl.__wrap(a)}coSetSensor(e,t){m.rawcolliderset_coSetSensor(this.__wbg_ptr,e,t)}coSetRestitution(e,t){m.rawcolliderset_coSetRestitution(this.__wbg_ptr,e,t)}coSetFriction(e,t){m.rawcolliderset_coSetFriction(this.__wbg_ptr,e,t)}coFrictionCombineRule(e){return m.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,e)>>>0}coSetFrictionCombineRule(e,t){m.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,e,t)}coRestitutionCombineRule(e){return m.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,e)>>>0}coSetRestitutionCombineRule(e,t){m.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,e,t)}coSetCollisionGroups(e,t){m.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,e,t)}coSetSolverGroups(e,t){m.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,e,t)}coSetActiveHooks(e,t){m.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,e,t)}coSetActiveEvents(e,t){m.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,e,t)}coSetActiveCollisionTypes(e,t){m.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,e,t)}coSetShape(e,t){N(t,Ce),m.rawcolliderset_coSetShape(this.__wbg_ptr,e,t.__wbg_ptr)}coSetContactForceEventThreshold(e,t){m.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,e,t)}coSetDensity(e,t){m.rawcolliderset_coSetDensity(this.__wbg_ptr,e,t)}coSetMass(e,t){m.rawcolliderset_coSetMass(this.__wbg_ptr,e,t)}coSetMassProperties(e,t,i,r,s){N(i,B),N(r,B),N(s,et),m.rawcolliderset_coSetMassProperties(this.__wbg_ptr,e,t,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}constructor(){const e=m.rawcolliderset_new();return this.__wbg_ptr=e>>>0,this}len(){return m.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return m.rawcolliderset_contains(this.__wbg_ptr,e)!==0}createCollider(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f,_,S,v,M,I,R,A,z,E){try{const G=m.__wbindgen_add_to_stack_pointer(-16);N(t,Ce),N(i,B),N(r,et),N(o,B),N(l,B),N(c,et),N(E,Ct),m.rawcolliderset_createCollider(G,this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h,d,u,p,g,y,f,_,S,v,M,I,R,A,z,E.__wbg_ptr);var x=Le()[G/4+0],O=Ca()[G/8+1];return x===0?void 0:O}finally{m.__wbindgen_add_to_stack_pointer(16)}}remove(e,t,i,r){N(t,Ir),N(i,Ct),m.rawcolliderset_remove(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}isHandleValid(e){return m.rawcolliderset_contains(this.__wbg_ptr,e)!==0}forEachColliderHandle(e){try{m.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}}const Jm=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcollidershapecasthit_free(n>>>0));class Ll{static __wrap(e){e=e>>>0;const t=Object.create(Ll.prototype);return t.__wbg_ptr=e,Jm.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Jm.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcollidershapecasthit_free(e)}colliderHandle(){return m.rawcharactercollision_handle(this.__wbg_ptr)}time_of_impact(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}witness1(){const e=m.rawcollidershapecasthit_witness1(this.__wbg_ptr);return B.__wrap(e)}witness2(){const e=m.rawcollidershapecasthit_witness2(this.__wbg_ptr);return B.__wrap(e)}normal1(){const e=m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return B.__wrap(e)}normal2(){const e=m.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return B.__wrap(e)}}const Km=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcontactforceevent_free(n>>>0));class id{static __wrap(e){e=e>>>0;const t=Object.create(id.prototype);return t.__wbg_ptr=e,Km.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Km.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcontactforceevent_free(e)}collider1(){return m.rawcharactercollision_handle(this.__wbg_ptr)}collider2(){return m.rawcontactforceevent_collider2(this.__wbg_ptr)}total_force(){const e=m.rawcontactforceevent_total_force(this.__wbg_ptr);return B.__wrap(e)}total_force_magnitude(){return m.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}max_force_direction(){const e=m.rawcontactforceevent_max_force_direction(this.__wbg_ptr);return B.__wrap(e)}max_force_magnitude(){return m.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}}const Zm=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcontactmanifold_free(n>>>0));class rd{static __wrap(e){e=e>>>0;const t=Object.create(rd.prototype);return t.__wbg_ptr=e,Zm.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Zm.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcontactmanifold_free(e)}normal(){const e=m.rawcontactmanifold_normal(this.__wbg_ptr);return B.__wrap(e)}local_n1(){const e=m.rawcontactmanifold_local_n1(this.__wbg_ptr);return B.__wrap(e)}local_n2(){const e=m.rawcontactmanifold_local_n2(this.__wbg_ptr);return B.__wrap(e)}subshape1(){return m.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return m.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return m.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(e){const t=m.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}contact_local_p2(e){const t=m.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}contact_dist(e){return m.rawcontactmanifold_contact_dist(this.__wbg_ptr,e)}contact_fid1(e){return m.rawcontactmanifold_contact_fid1(this.__wbg_ptr,e)>>>0}contact_fid2(e){return m.rawcontactmanifold_contact_fid2(this.__wbg_ptr,e)>>>0}contact_impulse(e){return m.rawcontactmanifold_contact_impulse(this.__wbg_ptr,e)}contact_tangent_impulse_x(e){return m.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,e)}contact_tangent_impulse_y(e){return m.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,e)}num_solver_contacts(){return m.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(e){const t=m.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}solver_contact_dist(e){return m.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,e)}solver_contact_friction(e){return m.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,e)}solver_contact_restitution(e){return m.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,e)}solver_contact_tangent_velocity(e){const t=m.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,e);return B.__wrap(t)}}const Qm=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawcontactpair_free(n>>>0));class nd{static __wrap(e){e=e>>>0;const t=Object.create(nd.prototype);return t.__wbg_ptr=e,Qm.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Qm.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawcontactpair_free(e)}collider1(){return m.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return m.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return m.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(e){const t=m.rawcontactpair_contactManifold(this.__wbg_ptr,e);return t===0?void 0:rd.__wrap(t)}}const aM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawdebugrenderpipeline_free(n>>>0));class oM{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,aM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawdebugrenderpipeline_free(e)}constructor(){const e=m.rawdebugrenderpipeline_new();return this.__wbg_ptr=e>>>0,this}vertices(){const e=m.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return Ra(e)}colors(){const e=m.rawdebugrenderpipeline_colors(this.__wbg_ptr);return Ra(e)}render(e,t,i,r,s){N(e,Ct),N(t,At),N(i,Lr),N(r,Nr),N(s,rn),m.rawdebugrenderpipeline_render(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}}const $m=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawdeserializedworld_free(n>>>0));class sd{static __wrap(e){e=e>>>0;const t=Object.create(sd.prototype);return t.__wbg_ptr=e,$m.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$m.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawdeserializedworld_free(e)}takeGravity(){const e=m.rawdeserializedworld_takeGravity(this.__wbg_ptr);return e===0?void 0:B.__wrap(e)}takeIntegrationParameters(){const e=m.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return e===0?void 0:zn.__wrap(e)}takeIslandManager(){const e=m.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return e===0?void 0:Ir.__wrap(e)}takeBroadPhase(){const e=m.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return e===0?void 0:On.__wrap(e)}takeNarrowPhase(){const e=m.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return e===0?void 0:rn.__wrap(e)}takeBodies(){const e=m.rawdeserializedworld_takeBodies(this.__wbg_ptr);return e===0?void 0:Ct.__wrap(e)}takeColliders(){const e=m.rawdeserializedworld_takeColliders(this.__wbg_ptr);return e===0?void 0:At.__wrap(e)}takeImpulseJoints(){const e=m.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return e===0?void 0:Lr.__wrap(e)}takeMultibodyJoints(){const e=m.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return e===0?void 0:Nr.__wrap(e)}}const lM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawdynamicraycastvehiclecontroller_free(n>>>0));class cM{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,lM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawdynamicraycastvehiclecontroller_free(e)}constructor(e){const t=m.rawdynamicraycastvehiclecontroller_new(e);return this.__wbg_ptr=t>>>0,this}current_vehicle_speed(){return m.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return m.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return m.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(e){m.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}index_forward_axis(){return m.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(e){m.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,e)}add_wheel(e,t,i,r,s){N(e,B),N(t,B),N(i,B),m.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,s)}num_wheels(){return m.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(e,t,i,r,s,a,o){try{N(t,Ct),N(i,At),N(r,ad),m.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,!xe(a),xe(a)?0:a,Et(o))}finally{at[wt++]=void 0}}wheel_chassis_connection_point_cs(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}set_wheel_chassis_connection_point_cs(e,t){N(t,B),m.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_suspension_rest_length(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_rest_length(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,e,t)}wheel_max_suspension_travel(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_travel(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,e,t)}wheel_radius(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_radius(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_radius(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,e,t)}wheel_suspension_stiffness(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_stiffness(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,e,t)}wheel_suspension_compression(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_compression(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,e,t)}wheel_suspension_relaxation(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_relaxation(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,e,t)}wheel_max_suspension_force(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_force(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,e,t)}wheel_brake(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_brake(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_brake(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,e,t)}wheel_steering(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_steering(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_steering(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,e,t)}wheel_engine_force(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_engine_force(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_engine_force(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,e,t)}wheel_direction_cs(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}set_wheel_direction_cs(e,t){N(t,B),m.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_axle_cs(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}set_wheel_axle_cs(e,t){N(t,B),m.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_friction_slip(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_friction_slip(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_friction_slip(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,e,t)}wheel_side_friction_stiffness(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}set_wheel_side_friction_stiffness(e,t){m.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,e,t)}wheel_rotation(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_rotation(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}wheel_forward_impulse(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}wheel_side_impulse(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_side_impulse(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}wheel_suspension_force(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_force(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}wheel_contact_normal_ws(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}wheel_contact_point_ws(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}wheel_suspension_length(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_suspension_length(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Mt()[r/4+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(e){const t=m.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,e);return t===0?void 0:B.__wrap(t)}wheel_is_in_contact(e){return m.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,e)!==0}wheel_ground_object(e){try{const r=m.__wbindgen_add_to_stack_pointer(-16);m.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,e);var t=Le()[r/4+0],i=Ca()[r/8+1];return t===0?void 0:i}finally{m.__wbindgen_add_to_stack_pointer(16)}}}const hM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_raweventqueue_free(n>>>0));class ef{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,hM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_raweventqueue_free(e)}constructor(e){const t=m.raweventqueue_new(e);return this.__wbg_ptr=t>>>0,this}drainCollisionEvents(e){try{m.raweventqueue_drainCollisionEvents(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}drainContactForceEvents(e){try{m.raweventqueue_drainContactForceEvents(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}clear(){m.raweventqueue_clear(this.__wbg_ptr)}}const tf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawgenericjoint_free(n>>>0));class Jt{static __wrap(e){e=e>>>0;const t=Object.create(Jt.prototype);return t.__wbg_ptr=e,tf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,tf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawgenericjoint_free(e)}static generic(e,t,i,r){N(e,B),N(t,B),N(i,B);const s=m.rawgenericjoint_generic(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return s===0?void 0:Jt.__wrap(s)}static spring(e,t,i,r,s){N(r,B),N(s,B);const a=m.rawgenericjoint_spring(e,t,i,r.__wbg_ptr,s.__wbg_ptr);return Jt.__wrap(a)}static rope(e,t,i){N(t,B),N(i,B);const r=m.rawgenericjoint_rope(e,t.__wbg_ptr,i.__wbg_ptr);return Jt.__wrap(r)}static spherical(e,t){N(e,B),N(t,B);const i=m.rawgenericjoint_spherical(e.__wbg_ptr,t.__wbg_ptr);return Jt.__wrap(i)}static prismatic(e,t,i,r,s,a){N(e,B),N(t,B),N(i,B);const o=m.rawgenericjoint_prismatic(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,s,a);return o===0?void 0:Jt.__wrap(o)}static fixed(e,t,i,r){N(e,B),N(t,et),N(i,B),N(r,et);const s=m.rawgenericjoint_fixed(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr);return Jt.__wrap(s)}static revolute(e,t,i){N(e,B),N(t,B),N(i,B);const r=m.rawgenericjoint_revolute(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr);return r===0?void 0:Jt.__wrap(r)}}const rf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawimpulsejointset_free(n>>>0));class Lr{static __wrap(e){e=e>>>0;const t=Object.create(Lr.prototype);return t.__wbg_ptr=e,rf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,rf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawimpulsejointset_free(e)}jointType(e){return m.rawimpulsejointset_jointType(this.__wbg_ptr,e)}jointBodyHandle1(e){return m.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,e)}jointBodyHandle2(e){return m.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,e)}jointFrameX1(e){const t=m.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,e);return et.__wrap(t)}jointFrameX2(e){const t=m.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,e);return et.__wrap(t)}jointAnchor1(e){const t=m.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,e);return B.__wrap(t)}jointAnchor2(e){const t=m.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,e);return B.__wrap(t)}jointSetAnchor1(e,t){N(t,B),m.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,e,t.__wbg_ptr)}jointSetAnchor2(e,t){N(t,B),m.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,e,t.__wbg_ptr)}jointContactsEnabled(e){return m.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){m.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return m.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return m.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return m.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,e,t)}jointSetLimits(e,t,i,r){m.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,e,t,i,r)}jointConfigureMotorModel(e,t,i){m.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,e,t,i)}jointConfigureMotorVelocity(e,t,i,r){m.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,e,t,i,r)}jointConfigureMotorPosition(e,t,i,r,s){m.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,e,t,i,r,s)}jointConfigureMotor(e,t,i,r,s,a){m.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,e,t,i,r,s,a)}constructor(){const e=m.rawimpulsejointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,i,r){return N(e,Jt),m.rawimpulsejointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,i,r)}remove(e,t){m.rawimpulsejointset_remove(this.__wbg_ptr,e,t)}len(){return m.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(e){return m.rawimpulsejointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{m.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{m.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,Et(t))}finally{at[wt++]=void 0}}}const nf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawintegrationparameters_free(n>>>0));class zn{static __wrap(e){e=e>>>0;const t=Object.create(zn.prototype);return t.__wbg_ptr=e,nf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,nf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawintegrationparameters_free(e)}constructor(){const e=m.rawintegrationparameters_new();return this.__wbg_ptr=e>>>0,this}get dt(){return m.rawintegrationparameters_dt(this.__wbg_ptr)}get contact_erp(){return m.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get normalizedAllowedLinearError(){return m.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}get normalizedPredictionDistance(){return m.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}get numSolverIterations(){return m.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return m.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return m.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}get minIslandSize(){return m.rawimpulsejointset_len(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return m.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}get lengthUnit(){return m.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}set dt(e){m.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}set contact_natural_frequency(e){m.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,e)}set normalizedAllowedLinearError(e){m.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,e)}set normalizedPredictionDistance(e){m.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,e)}set numSolverIterations(e){m.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,e)}set numAdditionalFrictionIterations(e){m.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}set numInternalPgsIterations(e){m.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,e)}set minIslandSize(e){m.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr,e)}set maxCcdSubsteps(e){m.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,e)}set lengthUnit(e){m.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,e)}switchToStandardPgsSolver(){m.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){m.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolverWithoutWarmstart(){m.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr)}}const sf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawislandmanager_free(n>>>0));class Ir{static __wrap(e){e=e>>>0;const t=Object.create(Ir.prototype);return t.__wbg_ptr=e,sf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,sf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawislandmanager_free(e)}constructor(){const e=m.rawislandmanager_new();return this.__wbg_ptr=e>>>0,this}forEachActiveRigidBodyHandle(e){try{m.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}}const dM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawkinematiccharactercontroller_free(n>>>0));class uM{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,dM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawkinematiccharactercontroller_free(e)}constructor(e){const t=m.rawkinematiccharactercontroller_new(e);return this.__wbg_ptr=t>>>0,this}up(){const e=m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return B.__wrap(e)}setUp(e){N(e,B),m.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,e.__wbg_ptr)}normalNudgeFactor(){return m.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}setNormalNudgeFactor(e){m.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,e)}offset(){return m.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(e){m.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,e)}slideEnabled(){return m.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(e){m.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,e)}autostepMaxHeight(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawkinematiccharactercontroller_autostepMaxHeight(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Mt()[i/4+1];return e===0?void 0:t}finally{m.__wbindgen_add_to_stack_pointer(16)}}autostepMinWidth(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawkinematiccharactercontroller_autostepMinWidth(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Mt()[i/4+1];return e===0?void 0:t}finally{m.__wbindgen_add_to_stack_pointer(16)}}autostepIncludesDynamicBodies(){const e=m.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return m.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(e,t,i){m.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,e,t,i)}disableAutostep(){m.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return m.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(e){m.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,e)}minSlopeSlideAngle(){return m.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(e){m.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,e)}snapToGroundDistance(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawkinematiccharactercontroller_snapToGroundDistance(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Mt()[i/4+1];return e===0?void 0:t}finally{m.__wbindgen_add_to_stack_pointer(16)}}enableSnapToGround(e){m.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,e)}disableSnapToGround(){m.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return m.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(e,t,i,r,s,a,o,l,c,h,d){try{N(t,Ct),N(i,At),N(r,ad),N(a,B),m.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a.__wbg_ptr,o,!xe(l),xe(l)?0:l,c,!xe(h),xe(h)?0:h,Et(d))}finally{at[wt++]=void 0}}computedMovement(){const e=m.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return B.__wrap(e)}computedGrounded(){return m.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return m.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(e,t){return N(t,qm),m.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,e,t.__wbg_ptr)!==0}}const af=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawmultibodyjointset_free(n>>>0));class Nr{static __wrap(e){e=e>>>0;const t=Object.create(Nr.prototype);return t.__wbg_ptr=e,af.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,af.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawmultibodyjointset_free(e)}jointType(e){return m.rawmultibodyjointset_jointType(this.__wbg_ptr,e)}jointFrameX1(e){const t=m.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,e);return et.__wrap(t)}jointFrameX2(e){const t=m.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,e);return et.__wrap(t)}jointAnchor1(e){const t=m.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,e);return B.__wrap(t)}jointAnchor2(e){const t=m.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,e);return B.__wrap(t)}jointContactsEnabled(e){return m.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){m.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return m.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return m.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return m.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,e,t)}constructor(){const e=m.rawmultibodyjointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,i,r){return N(e,Jt),m.rawmultibodyjointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,i,r)}remove(e,t){m.rawmultibodyjointset_remove(this.__wbg_ptr,e,t)}contains(e){return m.rawmultibodyjointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{m.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{m.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,Et(t))}finally{at[wt++]=void 0}}}const of=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawnarrowphase_free(n>>>0));class rn{static __wrap(e){e=e>>>0;const t=Object.create(rn.prototype);return t.__wbg_ptr=e,of.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,of.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawnarrowphase_free(e)}constructor(){const e=m.rawnarrowphase_new();return this.__wbg_ptr=e>>>0,this}contact_pairs_with(e,t){m.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,e,It(t))}contact_pair(e,t){const i=m.rawnarrowphase_contact_pair(this.__wbg_ptr,e,t);return i===0?void 0:nd.__wrap(i)}intersection_pairs_with(e,t){m.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,e,It(t))}intersection_pair(e,t){return m.rawnarrowphase_intersection_pair(this.__wbg_ptr,e,t)!==0}}const pM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawphysicspipeline_free(n>>>0));class mM{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,pM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawphysicspipeline_free(e)}constructor(){const e=m.rawphysicspipeline_new();return this.__wbg_ptr=e>>>0,this}step(e,t,i,r,s,a,o,l,c,h){N(e,B),N(t,zn),N(i,Ir),N(r,On),N(s,rn),N(a,Ct),N(o,At),N(l,Lr),N(c,Nr),N(h,td),m.rawphysicspipeline_step(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr)}stepWithEvents(e,t,i,r,s,a,o,l,c,h,d,u,p,g){N(e,B),N(t,zn),N(i,Ir),N(r,On),N(s,rn),N(a,Ct),N(o,At),N(l,Lr),N(c,Nr),N(h,td),N(d,ef),m.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,d.__wbg_ptr,It(u),It(p),It(g))}}const lf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawpointcolliderprojection_free(n>>>0));class Il{static __wrap(e){e=e>>>0;const t=Object.create(Il.prototype);return t.__wbg_ptr=e,lf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,lf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawpointcolliderprojection_free(e)}colliderHandle(){return m.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const e=m.rawpointcolliderprojection_point(this.__wbg_ptr);return B.__wrap(e)}isInside(){return m.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return m.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Le()[i/4+1];return e===0?void 0:t>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}}const cf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawpointprojection_free(n>>>0));class Nl{static __wrap(e){e=e>>>0;const t=Object.create(Nl.prototype);return t.__wbg_ptr=e,cf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,cf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawpointprojection_free(e)}point(){const e=m.rawpointprojection_point(this.__wbg_ptr);return B.__wrap(e)}isInside(){return m.rawpointprojection_isInside(this.__wbg_ptr)!==0}}const fM=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawquerypipeline_free(n>>>0));class ad{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,fM.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawquerypipeline_free(e)}constructor(){const e=m.rawquerypipeline_new();return this.__wbg_ptr=e>>>0,this}update(e){N(e,At),m.rawquerypipeline_update(this.__wbg_ptr,e.__wbg_ptr)}castRay(e,t,i,r,s,a,o,l,c,h,d){try{N(e,Ct),N(t,At),N(i,B),N(r,B);const u=m.rawquerypipeline_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a,o,!xe(l),xe(l)?0:l,!xe(c),xe(c)?0:c,!xe(h),xe(h)?0:h,Et(d));return u===0?void 0:od.__wrap(u)}finally{at[wt++]=void 0}}castRayAndGetNormal(e,t,i,r,s,a,o,l,c,h,d){try{N(e,Ct),N(t,At),N(i,B),N(r,B);const u=m.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a,o,!xe(l),xe(l)?0:l,!xe(c),xe(c)?0:c,!xe(h),xe(h)?0:h,Et(d));return u===0?void 0:Ul.__wrap(u)}finally{at[wt++]=void 0}}intersectionsWithRay(e,t,i,r,s,a,o,l,c,h,d,u){try{N(e,Ct),N(t,At),N(i,B),N(r,B),m.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a,Et(o),l,!xe(c),xe(c)?0:c,!xe(h),xe(h)?0:h,!xe(d),xe(d)?0:d,Et(u))}finally{at[wt++]=void 0,at[wt++]=void 0}}intersectionWithShape(e,t,i,r,s,a,o,l,c,h){try{const p=m.__wbindgen_add_to_stack_pointer(-16);N(e,Ct),N(t,At),N(i,B),N(r,et),N(s,Ce),m.rawquerypipeline_intersectionWithShape(p,this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a,!xe(o),xe(o)?0:o,!xe(l),xe(l)?0:l,!xe(c),xe(c)?0:c,Et(h));var d=Le()[p/4+0],u=Ca()[p/8+1];return d===0?void 0:u}finally{m.__wbindgen_add_to_stack_pointer(16),at[wt++]=void 0}}projectPoint(e,t,i,r,s,a,o,l,c){try{N(e,Ct),N(t,At),N(i,B);const h=m.rawquerypipeline_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,s,!xe(a),xe(a)?0:a,!xe(o),xe(o)?0:o,!xe(l),xe(l)?0:l,Et(c));return h===0?void 0:Il.__wrap(h)}finally{at[wt++]=void 0}}projectPointAndGetFeature(e,t,i,r,s,a,o,l){try{N(e,Ct),N(t,At),N(i,B);const c=m.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,!xe(s),xe(s)?0:s,!xe(a),xe(a)?0:a,!xe(o),xe(o)?0:o,Et(l));return c===0?void 0:Il.__wrap(c)}finally{at[wt++]=void 0}}intersectionsWithPoint(e,t,i,r,s,a,o,l,c){try{N(e,Ct),N(t,At),N(i,B),m.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,Et(r),s,!xe(a),xe(a)?0:a,!xe(o),xe(o)?0:o,!xe(l),xe(l)?0:l,Et(c))}finally{at[wt++]=void 0,at[wt++]=void 0}}castShape(e,t,i,r,s,a,o,l,c,h,d,u,p,g){try{N(e,Ct),N(t,At),N(i,B),N(r,et),N(s,B),N(a,Ce);const y=m.rawquerypipeline_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o,l,c,h,!xe(d),xe(d)?0:d,!xe(u),xe(u)?0:u,!xe(p),xe(p)?0:p,Et(g));return y===0?void 0:Ll.__wrap(y)}finally{at[wt++]=void 0}}intersectionsWithShape(e,t,i,r,s,a,o,l,c,h,d){try{N(e,Ct),N(t,At),N(i,B),N(r,et),N(s,Ce),m.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,Et(a),o,!xe(l),xe(l)?0:l,!xe(c),xe(c)?0:c,!xe(h),xe(h)?0:h,Et(d))}finally{at[wt++]=void 0,at[wt++]=void 0}}collidersWithAabbIntersectingAabb(e,t,i){try{N(e,B),N(t,B),m.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,Et(i))}finally{at[wt++]=void 0}}}const hf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawraycolliderhit_free(n>>>0));class od{static __wrap(e){e=e>>>0;const t=Object.create(od.prototype);return t.__wbg_ptr=e,hf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,hf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawraycolliderhit_free(e)}colliderHandle(){return m.rawcharactercollision_handle(this.__wbg_ptr)}timeOfImpact(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}}const df=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawraycolliderintersection_free(n>>>0));class Ul{static __wrap(e){e=e>>>0;const t=Object.create(Ul.prototype);return t.__wbg_ptr=e,df.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,df.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawraycolliderintersection_free(e)}colliderHandle(){return m.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const e=m.rawcollidershapecasthit_witness1(this.__wbg_ptr);return B.__wrap(e)}time_of_impact(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return m.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Le()[i/4+1];return e===0?void 0:t>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}}const uf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawrayintersection_free(n>>>0));class Dl{static __wrap(e){e=e>>>0;const t=Object.create(Dl.prototype);return t.__wbg_ptr=e,uf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,uf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawrayintersection_free(e)}normal(){const e=m.rawcollidershapecasthit_witness1(this.__wbg_ptr);return B.__wrap(e)}time_of_impact(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}featureType(){return m.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=m.__wbindgen_add_to_stack_pointer(-16);m.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Le()[i/4+0],t=Le()[i/4+1];return e===0?void 0:t>>>0}finally{m.__wbindgen_add_to_stack_pointer(16)}}}const pf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawrigidbodyset_free(n>>>0));class Ct{static __wrap(e){e=e>>>0;const t=Object.create(Ct.prototype);return t.__wbg_ptr=e,pf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,pf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawrigidbodyset_free(e)}rbTranslation(e){const t=m.rawrigidbodyset_rbTranslation(this.__wbg_ptr,e);return B.__wrap(t)}rbRotation(e){const t=m.rawrigidbodyset_rbRotation(this.__wbg_ptr,e);return et.__wrap(t)}rbSleep(e){m.rawrigidbodyset_rbSleep(this.__wbg_ptr,e)}rbIsSleeping(e){return m.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,e)!==0}rbIsMoving(e){return m.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,e)!==0}rbNextTranslation(e){const t=m.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,e);return B.__wrap(t)}rbNextRotation(e){const t=m.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,e);return et.__wrap(t)}rbSetTranslation(e,t,i,r,s){m.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,e,t,i,r,s)}rbSetRotation(e,t,i,r,s,a){m.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,e,t,i,r,s,a)}rbSetLinvel(e,t,i){N(t,B),m.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbSetAngvel(e,t,i){N(t,B),m.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbSetNextKinematicTranslation(e,t,i,r){m.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,e,t,i,r)}rbSetNextKinematicRotation(e,t,i,r,s){m.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,e,t,i,r,s)}rbRecomputeMassPropertiesFromColliders(e,t){N(t,At),m.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,e,t.__wbg_ptr)}rbSetAdditionalMass(e,t,i){m.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,e,t,i)}rbSetAdditionalMassProperties(e,t,i,r,s,a){N(i,B),N(r,B),N(s,et),m.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,e,t,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a)}rbLinvel(e){const t=m.rawrigidbodyset_rbLinvel(this.__wbg_ptr,e);return B.__wrap(t)}rbAngvel(e){const t=m.rawrigidbodyset_rbAngvel(this.__wbg_ptr,e);return B.__wrap(t)}rbLockTranslations(e,t,i){m.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,e,t,i)}rbSetEnabledTranslations(e,t,i,r,s){m.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,e,t,i,r,s)}rbLockRotations(e,t,i){m.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,e,t,i)}rbSetEnabledRotations(e,t,i,r,s){m.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,e,t,i,r,s)}rbDominanceGroup(e){return m.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,e)}rbSetDominanceGroup(e,t){m.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,e,t)}rbEnableCcd(e,t){m.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,e,t)}rbSetSoftCcdPrediction(e,t){m.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,e,t)}rbMass(e){return m.rawrigidbodyset_rbMass(this.__wbg_ptr,e)}rbInvMass(e){return m.rawrigidbodyset_rbInvMass(this.__wbg_ptr,e)}rbEffectiveInvMass(e){const t=m.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,e);return B.__wrap(t)}rbLocalCom(e){const t=m.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,e);return B.__wrap(t)}rbWorldCom(e){const t=m.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,e);return B.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=m.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,e);return B.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=m.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,e);return et.__wrap(t)}rbPrincipalInertia(e){const t=m.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,e);return B.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=m.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,e);return Ol.__wrap(t)}rbEffectiveAngularInertia(e){const t=m.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,e);return Ol.__wrap(t)}rbWakeUp(e){m.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,e)}rbIsCcdEnabled(e){return m.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,e)!==0}rbSoftCcdPrediction(e){return m.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,e)}rbNumColliders(e){return m.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,e)>>>0}rbCollider(e,t){return m.rawrigidbodyset_rbCollider(this.__wbg_ptr,e,t)}rbBodyType(e){return m.rawrigidbodyset_rbBodyType(this.__wbg_ptr,e)}rbSetBodyType(e,t,i){m.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,e,t,i)}rbIsFixed(e){return m.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,e)!==0}rbIsKinematic(e){return m.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,e)!==0}rbIsDynamic(e){return m.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,e)!==0}rbLinearDamping(e){return m.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,e)}rbAngularDamping(e){return m.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,e)}rbSetLinearDamping(e,t){m.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,e,t)}rbSetAngularDamping(e,t){m.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,e,t)}rbSetEnabled(e,t){m.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,e,t)}rbIsEnabled(e){return m.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,e)!==0}rbGravityScale(e){return m.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,e)}rbSetGravityScale(e,t,i){m.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,e,t,i)}rbResetForces(e,t){m.rawrigidbodyset_rbResetForces(this.__wbg_ptr,e,t)}rbResetTorques(e,t){m.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,e,t)}rbAddForce(e,t,i){N(t,B),m.rawrigidbodyset_rbAddForce(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbApplyImpulse(e,t,i){N(t,B),m.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbAddTorque(e,t,i){N(t,B),m.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbApplyTorqueImpulse(e,t,i){N(t,B),m.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbAddForceAtPoint(e,t,i,r){N(t,B),N(i,B),m.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}rbApplyImpulseAtPoint(e,t,i,r){N(t,B),N(i,B),m.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}rbAdditionalSolverIterations(e){return m.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,e)>>>0}rbSetAdditionalSolverIterations(e,t){m.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,e,t)}rbUserData(e){return m.rawrigidbodyset_rbUserData(this.__wbg_ptr,e)>>>0}rbSetUserData(e,t){m.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,e,t)}rbUserForce(e){const t=m.rawrigidbodyset_rbUserForce(this.__wbg_ptr,e);return B.__wrap(t)}rbUserTorque(e){const t=m.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,e);return B.__wrap(t)}constructor(){const e=m.rawrigidbodyset_new();return this.__wbg_ptr=e>>>0,this}createRigidBody(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f,_,S,v,M,I,R,A,z,E,x){return N(t,B),N(i,et),N(o,B),N(l,B),N(c,B),N(h,B),N(d,et),m.rawrigidbodyset_createRigidBody(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,s,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,d.__wbg_ptr,u,p,g,y,f,_,S,v,M,I,R,A,z,E,x)}remove(e,t,i,r,s){N(t,Ir),N(i,At),N(r,Lr),N(s,Nr),m.rawrigidbodyset_remove(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)}len(){return m.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return m.rawrigidbodyset_contains(this.__wbg_ptr,e)!==0}forEachRigidBodyHandle(e){try{m.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,Et(e))}finally{at[wt++]=void 0}}propagateModifiedBodyPositionsToColliders(e){N(e,At),m.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,e.__wbg_ptr)}}const mf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawrotation_free(n>>>0));class et{static __wrap(e){e=e>>>0;const t=Object.create(et.prototype);return t.__wbg_ptr=e,mf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,mf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawrotation_free(e)}constructor(e,t,i,r){const s=m.rawrotation_new(e,t,i,r);return this.__wbg_ptr=s>>>0,this}static identity(){const e=m.rawrotation_identity();return et.__wrap(e)}get x(){return m.rawrotation_x(this.__wbg_ptr)}get y(){return m.rawintegrationparameters_dt(this.__wbg_ptr)}get z(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}get w(){return m.rawrotation_w(this.__wbg_ptr)}}const ff=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawsdpmatrix3_free(n>>>0));class Ol{static __wrap(e){e=e>>>0;const t=Object.create(Ol.prototype);return t.__wbg_ptr=e,ff.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ff.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawsdpmatrix3_free(e)}elements(){const e=m.rawsdpmatrix3_elements(this.__wbg_ptr);return Ra(e)}}const _M=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawserializationpipeline_free(n>>>0));class gM{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,_M.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawserializationpipeline_free(e)}constructor(){const e=m.rawserializationpipeline_new();return this.__wbg_ptr=e>>>0,this}serializeAll(e,t,i,r,s,a,o,l,c){N(e,B),N(t,zn),N(i,Ir),N(r,On),N(s,rn),N(a,Ct),N(o,At),N(l,Lr),N(c,Nr);const h=m.rawserializationpipeline_serializeAll(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return Ra(h)}deserializeAll(e){const t=m.rawserializationpipeline_deserializeAll(this.__wbg_ptr,It(e));return t===0?void 0:sd.__wrap(t)}}const _f=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawshape_free(n>>>0));class Ce{static __wrap(e){e=e>>>0;const t=Object.create(Ce.prototype);return t.__wbg_ptr=e,_f.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,_f.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawshape_free(e)}static cuboid(e,t,i){const r=m.rawshape_cuboid(e,t,i);return Ce.__wrap(r)}static roundCuboid(e,t,i,r){const s=m.rawshape_roundCuboid(e,t,i,r);return Ce.__wrap(s)}static ball(e){const t=m.rawshape_ball(e);return Ce.__wrap(t)}static halfspace(e){N(e,B);const t=m.rawshape_halfspace(e.__wbg_ptr);return Ce.__wrap(t)}static capsule(e,t){const i=m.rawshape_capsule(e,t);return Ce.__wrap(i)}static cylinder(e,t){const i=m.rawshape_cylinder(e,t);return Ce.__wrap(i)}static roundCylinder(e,t,i){const r=m.rawshape_roundCylinder(e,t,i);return Ce.__wrap(r)}static cone(e,t){const i=m.rawshape_cone(e,t);return Ce.__wrap(i)}static roundCone(e,t,i){const r=m.rawshape_roundCone(e,t,i);return Ce.__wrap(r)}static polyline(e,t){const i=Dn(e,m.__wbindgen_malloc),r=Ri,s=Cl(t,m.__wbindgen_malloc),a=Ri,o=m.rawshape_polyline(i,r,s,a);return Ce.__wrap(o)}static trimesh(e,t,i){const r=Dn(e,m.__wbindgen_malloc),s=Ri,a=Cl(t,m.__wbindgen_malloc),o=Ri,l=m.rawshape_trimesh(r,s,a,o,i);return Ce.__wrap(l)}static heightfield(e,t,i,r,s){const a=Dn(i,m.__wbindgen_malloc),o=Ri;N(r,B);const l=m.rawshape_heightfield(e,t,a,o,r.__wbg_ptr,s);return Ce.__wrap(l)}static segment(e,t){N(e,B),N(t,B);const i=m.rawshape_segment(e.__wbg_ptr,t.__wbg_ptr);return Ce.__wrap(i)}static triangle(e,t,i){N(e,B),N(t,B),N(i,B);const r=m.rawshape_triangle(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr);return Ce.__wrap(r)}static roundTriangle(e,t,i,r){N(e,B),N(t,B),N(i,B);const s=m.rawshape_roundTriangle(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return Ce.__wrap(s)}static convexHull(e){const t=Dn(e,m.__wbindgen_malloc),i=Ri,r=m.rawshape_convexHull(t,i);return r===0?void 0:Ce.__wrap(r)}static roundConvexHull(e,t){const i=Dn(e,m.__wbindgen_malloc),r=Ri,s=m.rawshape_roundConvexHull(i,r,t);return s===0?void 0:Ce.__wrap(s)}static convexMesh(e,t){const i=Dn(e,m.__wbindgen_malloc),r=Ri,s=Cl(t,m.__wbindgen_malloc),a=Ri,o=m.rawshape_convexMesh(i,r,s,a);return o===0?void 0:Ce.__wrap(o)}static roundConvexMesh(e,t,i){const r=Dn(e,m.__wbindgen_malloc),s=Ri,a=Cl(t,m.__wbindgen_malloc),o=Ri,l=m.rawshape_roundConvexMesh(r,s,a,o,i);return l===0?void 0:Ce.__wrap(l)}castShape(e,t,i,r,s,a,o,l,c,h){N(e,B),N(t,et),N(i,B),N(r,Ce),N(s,B),N(a,et),N(o,B);const d=m.rawshape_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c,h);return d===0?void 0:zl.__wrap(d)}intersectsShape(e,t,i,r,s){return N(e,B),N(t,et),N(i,Ce),N(r,B),N(s,et),m.rawshape_intersectsShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr)!==0}contactShape(e,t,i,r,s,a){N(e,B),N(t,et),N(i,Ce),N(r,B),N(s,et);const o=m.rawshape_contactShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s.__wbg_ptr,a);return o===0?void 0:Pa.__wrap(o)}containsPoint(e,t,i){return N(e,B),N(t,et),N(i,B),m.rawshape_containsPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr)!==0}projectPoint(e,t,i,r){N(e,B),N(t,et),N(i,B);const s=m.rawshape_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return Nl.__wrap(s)}intersectsRay(e,t,i,r,s){return N(e,B),N(t,et),N(i,B),N(r,B),m.rawshape_intersectsRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s)!==0}castRay(e,t,i,r,s,a){return N(e,B),N(t,et),N(i,B),N(r,B),m.rawshape_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a)}castRayAndGetNormal(e,t,i,r,s,a){N(e,B),N(t,et),N(i,B),N(r,B);const o=m.rawshape_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,s,a);return o===0?void 0:Dl.__wrap(o)}}const gf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawshapecasthit_free(n>>>0));class zl{static __wrap(e){e=e>>>0;const t=Object.create(zl.prototype);return t.__wbg_ptr=e,gf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,gf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawshapecasthit_free(e)}time_of_impact(){return m.rawrotation_x(this.__wbg_ptr)}witness1(){const e=m.rawshapecasthit_witness1(this.__wbg_ptr);return B.__wrap(e)}witness2(){const e=m.rawcontactforceevent_total_force(this.__wbg_ptr);return B.__wrap(e)}normal1(){const e=m.rawshapecasthit_normal1(this.__wbg_ptr);return B.__wrap(e)}normal2(){const e=m.rawshapecasthit_normal2(this.__wbg_ptr);return B.__wrap(e)}}const wf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawshapecontact_free(n>>>0));class Pa{static __wrap(e){e=e>>>0;const t=Object.create(Pa.prototype);return t.__wbg_ptr=e,wf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,wf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawshapecontact_free(e)}distance(){return m.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const e=m.rawpointprojection_point(this.__wbg_ptr);return B.__wrap(e)}point2(){const e=m.rawcollidershapecasthit_witness1(this.__wbg_ptr);return B.__wrap(e)}normal1(){const e=m.rawcollidershapecasthit_witness2(this.__wbg_ptr);return B.__wrap(e)}normal2(){const e=m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return B.__wrap(e)}}const yf=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>m.__wbg_rawvector_free(n>>>0));class B{static __wrap(e){e=e>>>0;const t=Object.create(B.prototype);return t.__wbg_ptr=e,yf.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,yf.unregister(this),e}free(){const e=this.__destroy_into_raw();m.__wbg_rawvector_free(e)}static zero(){const e=m.rawvector_zero();return B.__wrap(e)}constructor(e,t,i){const r=m.rawvector_new(e,t,i);return this.__wbg_ptr=r>>>0,this}get x(){return m.rawrotation_x(this.__wbg_ptr)}set x(e){m.rawvector_set_x(this.__wbg_ptr,e)}get y(){return m.rawintegrationparameters_dt(this.__wbg_ptr)}set y(e){m.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}get z(){return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr)}set z(e){m.rawvector_set_z(this.__wbg_ptr,e)}xyz(){const e=m.rawvector_xyz(this.__wbg_ptr);return B.__wrap(e)}yxz(){const e=m.rawvector_yxz(this.__wbg_ptr);return B.__wrap(e)}zxy(){const e=m.rawvector_zxy(this.__wbg_ptr);return B.__wrap(e)}xzy(){const e=m.rawvector_xzy(this.__wbg_ptr);return B.__wrap(e)}yzx(){const e=m.rawvector_yzx(this.__wbg_ptr);return B.__wrap(e)}zyx(){const e=m.rawvector_zyx(this.__wbg_ptr);return B.__wrap(e)}}function wM(n){return It(n)}function yM(n){const e=ct(n);return typeof e=="boolean"?e?1:0:2}function vM(n){Ra(n)}function xM(n,e){const t=ct(e),i=typeof t=="number"?t:void 0;Ca()[n/8+1]=xe(i)?0:i,Le()[n/4+0]=!xe(i)}function bM(n){return typeof ct(n)=="function"}function SM(n){const e=Ul.__wrap(n);return It(e)}function MM(n){const e=id.__wrap(n);return It(e)}function EM(){return ed(function(n,e,t){const i=ct(n).call(ct(e),ct(t));return It(i)},arguments)}function TM(){return ed(function(n,e,t,i){const r=ct(n).call(ct(e),ct(t),ct(i));return It(r)},arguments)}function AM(){return ed(function(n,e,t,i,r){const s=ct(n).call(ct(e),ct(t),ct(i),ct(r));return It(s)},arguments)}function RM(n,e,t,i){const r=ct(n).bind(ct(e),ct(t),ct(i));return It(r)}function CM(n){const e=ct(n).buffer;return It(e)}function PM(n,e,t){const i=new Uint8Array(ct(n),e>>>0,t>>>0);return It(i)}function LM(n){const e=new Uint8Array(ct(n));return It(e)}function IM(n,e,t){ct(n).set(ct(e),t>>>0)}function NM(n){return ct(n).length}function UM(n,e,t){const i=new Float32Array(ct(n),e>>>0,t>>>0);return It(i)}function DM(n,e,t){ct(n).set(ct(e),t>>>0)}function OM(n){return ct(n).length}function zM(n){const e=new Float32Array(n>>>0);return It(e)}function FM(n,e){throw new Error(Gm(n,e))}function BM(){const n=m.memory;return It(n)}URL=globalThis.URL;const w=await ZS({"./rapier_wasm3d_bg.js":{__wbindgen_number_new:wM,__wbindgen_boolean_get:yM,__wbindgen_object_drop_ref:vM,__wbindgen_number_get:xM,__wbindgen_is_function:bM,__wbg_rawraycolliderintersection_new:SM,__wbg_rawcontactforceevent_new:MM,__wbg_call_b3ca7c6051f9bec1:EM,__wbg_call_8e7cb608789c2528:TM,__wbg_call_938992c832f74314:AM,__wbg_bind_4d857b598695205e:RM,__wbg_buffer_12d079cc21e14bdb:CM,__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb:PM,__wbg_new_63b92bc8671ed464:LM,__wbg_set_a47bac70306a19a7:IM,__wbg_length_c20a40f15020d68a:NM,__wbg_newwithbyteoffsetandlength_4a659d079a1650e0:UM,__wbg_set_bd975934d1b1fddb:DM,__wbg_length_d25bbcbc3367f684:OM,__wbg_newwithlength_1e8b839a06de01c5:zM,__wbindgen_throw:FM,__wbindgen_memory:BM}},KS),kM=w.memory,HM=w.version,VM=w.__wbg_rawkinematiccharactercontroller_free,GM=w.rawkinematiccharactercontroller_new,jM=w.rawkinematiccharactercontroller_setUp,WM=w.rawkinematiccharactercontroller_normalNudgeFactor,XM=w.rawkinematiccharactercontroller_setNormalNudgeFactor,qM=w.rawkinematiccharactercontroller_setOffset,YM=w.rawkinematiccharactercontroller_slideEnabled,JM=w.rawkinematiccharactercontroller_setSlideEnabled,KM=w.rawkinematiccharactercontroller_autostepMaxHeight,ZM=w.rawkinematiccharactercontroller_autostepMinWidth,QM=w.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,$M=w.rawkinematiccharactercontroller_autostepEnabled,e1=w.rawkinematiccharactercontroller_enableAutostep,t1=w.rawkinematiccharactercontroller_disableAutostep,i1=w.rawkinematiccharactercontroller_maxSlopeClimbAngle,r1=w.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,n1=w.rawkinematiccharactercontroller_minSlopeSlideAngle,s1=w.rawkinematiccharactercontroller_setMinSlopeSlideAngle,a1=w.rawkinematiccharactercontroller_snapToGroundDistance,o1=w.rawkinematiccharactercontroller_enableSnapToGround,l1=w.rawkinematiccharactercontroller_disableSnapToGround,c1=w.rawkinematiccharactercontroller_snapToGroundEnabled,h1=w.rawkinematiccharactercontroller_computeColliderMovement,d1=w.rawkinematiccharactercontroller_computedMovement,u1=w.rawkinematiccharactercontroller_computedGrounded,p1=w.rawkinematiccharactercontroller_numComputedCollisions,m1=w.rawkinematiccharactercontroller_computedCollision,f1=w.__wbg_rawcharactercollision_free,_1=w.rawcharactercollision_new,g1=w.rawcharactercollision_handle,w1=w.rawcharactercollision_translationDeltaApplied,y1=w.rawcharactercollision_translationDeltaRemaining,v1=w.rawcharactercollision_toi,x1=w.rawcharactercollision_worldWitness1,b1=w.rawcharactercollision_worldWitness2,S1=w.rawcharactercollision_worldNormal1,M1=w.rawcharactercollision_worldNormal2,E1=w.__wbg_rawdynamicraycastvehiclecontroller_free,T1=w.rawdynamicraycastvehiclecontroller_new,A1=w.rawdynamicraycastvehiclecontroller_current_vehicle_speed,R1=w.rawdynamicraycastvehiclecontroller_chassis,C1=w.rawdynamicraycastvehiclecontroller_index_up_axis,P1=w.rawdynamicraycastvehiclecontroller_set_index_up_axis,L1=w.rawdynamicraycastvehiclecontroller_index_forward_axis,I1=w.rawdynamicraycastvehiclecontroller_set_index_forward_axis,N1=w.rawdynamicraycastvehiclecontroller_add_wheel,U1=w.rawdynamicraycastvehiclecontroller_num_wheels,D1=w.rawdynamicraycastvehiclecontroller_update_vehicle,O1=w.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs,z1=w.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs,F1=w.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length,B1=w.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length,k1=w.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel,H1=w.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel,V1=w.rawdynamicraycastvehiclecontroller_wheel_radius,G1=w.rawdynamicraycastvehiclecontroller_set_wheel_radius,j1=w.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness,W1=w.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness,X1=w.rawdynamicraycastvehiclecontroller_wheel_suspension_compression,q1=w.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression,Y1=w.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation,J1=w.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation,K1=w.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force,Z1=w.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force,Q1=w.rawdynamicraycastvehiclecontroller_wheel_brake,$1=w.rawdynamicraycastvehiclecontroller_set_wheel_brake,eE=w.rawdynamicraycastvehiclecontroller_wheel_steering,tE=w.rawdynamicraycastvehiclecontroller_set_wheel_steering,iE=w.rawdynamicraycastvehiclecontroller_wheel_engine_force,rE=w.rawdynamicraycastvehiclecontroller_set_wheel_engine_force,nE=w.rawdynamicraycastvehiclecontroller_wheel_direction_cs,sE=w.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs,aE=w.rawdynamicraycastvehiclecontroller_wheel_axle_cs,oE=w.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs,lE=w.rawdynamicraycastvehiclecontroller_wheel_friction_slip,cE=w.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip,hE=w.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness,dE=w.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness,uE=w.rawdynamicraycastvehiclecontroller_wheel_rotation,pE=w.rawdynamicraycastvehiclecontroller_wheel_forward_impulse,mE=w.rawdynamicraycastvehiclecontroller_wheel_side_impulse,fE=w.rawdynamicraycastvehiclecontroller_wheel_suspension_force,_E=w.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws,gE=w.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws,wE=w.rawdynamicraycastvehiclecontroller_wheel_suspension_length,yE=w.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws,vE=w.rawdynamicraycastvehiclecontroller_wheel_is_in_contact,xE=w.rawdynamicraycastvehiclecontroller_wheel_ground_object,bE=w.__wbg_rawccdsolver_free,SE=w.rawccdsolver_new,ME=w.rawimpulsejointset_jointType,EE=w.rawimpulsejointset_jointBodyHandle1,TE=w.rawimpulsejointset_jointBodyHandle2,AE=w.rawimpulsejointset_jointFrameX1,RE=w.rawimpulsejointset_jointFrameX2,CE=w.rawimpulsejointset_jointAnchor1,PE=w.rawimpulsejointset_jointAnchor2,LE=w.rawimpulsejointset_jointSetAnchor1,IE=w.rawimpulsejointset_jointSetAnchor2,NE=w.rawimpulsejointset_jointContactsEnabled,UE=w.rawimpulsejointset_jointSetContactsEnabled,DE=w.rawimpulsejointset_jointLimitsEnabled,OE=w.rawimpulsejointset_jointLimitsMin,zE=w.rawimpulsejointset_jointLimitsMax,FE=w.rawimpulsejointset_jointSetLimits,BE=w.rawimpulsejointset_jointConfigureMotorModel,kE=w.rawimpulsejointset_jointConfigureMotorVelocity,HE=w.rawimpulsejointset_jointConfigureMotorPosition,VE=w.rawimpulsejointset_jointConfigureMotor,GE=w.__wbg_rawimpulsejointset_free,jE=w.rawimpulsejointset_new,WE=w.rawimpulsejointset_createJoint,XE=w.rawimpulsejointset_remove,qE=w.rawimpulsejointset_len,YE=w.rawimpulsejointset_contains,JE=w.rawimpulsejointset_forEachJointHandle,KE=w.rawimpulsejointset_forEachJointAttachedToRigidBody,ZE=w.__wbg_rawintegrationparameters_free,QE=w.rawintegrationparameters_new,$E=w.rawintegrationparameters_dt,eT=w.rawintegrationparameters_contact_erp,tT=w.rawintegrationparameters_numSolverIterations,iT=w.rawintegrationparameters_maxCcdSubsteps,rT=w.rawintegrationparameters_lengthUnit,nT=w.rawintegrationparameters_set_dt,sT=w.rawintegrationparameters_set_contact_natural_frequency,aT=w.rawintegrationparameters_set_normalizedAllowedLinearError,oT=w.rawintegrationparameters_set_normalizedPredictionDistance,lT=w.rawintegrationparameters_set_numSolverIterations,cT=w.rawintegrationparameters_set_minIslandSize,hT=w.rawintegrationparameters_set_maxCcdSubsteps,dT=w.rawintegrationparameters_set_lengthUnit,uT=w.rawintegrationparameters_switchToStandardPgsSolver,pT=w.rawintegrationparameters_switchToSmallStepsPgsSolver,mT=w.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart,fT=w.__wbg_rawislandmanager_free,_T=w.rawislandmanager_new,gT=w.rawislandmanager_forEachActiveRigidBodyHandle,wT=w.__wbg_rawgenericjoint_free,yT=w.rawgenericjoint_generic,vT=w.rawgenericjoint_spring,xT=w.rawgenericjoint_rope,bT=w.rawgenericjoint_spherical,ST=w.rawgenericjoint_prismatic,MT=w.rawgenericjoint_fixed,ET=w.rawgenericjoint_revolute,TT=w.rawmultibodyjointset_jointType,AT=w.rawmultibodyjointset_jointFrameX1,RT=w.rawmultibodyjointset_jointFrameX2,CT=w.rawmultibodyjointset_jointAnchor1,PT=w.rawmultibodyjointset_jointAnchor2,LT=w.rawmultibodyjointset_jointContactsEnabled,IT=w.rawmultibodyjointset_jointSetContactsEnabled,NT=w.rawmultibodyjointset_jointLimitsEnabled,UT=w.rawmultibodyjointset_jointLimitsMin,DT=w.rawmultibodyjointset_jointLimitsMax,OT=w.__wbg_rawmultibodyjointset_free,zT=w.rawmultibodyjointset_new,FT=w.rawmultibodyjointset_createJoint,BT=w.rawmultibodyjointset_remove,kT=w.rawmultibodyjointset_contains,HT=w.rawmultibodyjointset_forEachJointHandle,VT=w.rawmultibodyjointset_forEachJointAttachedToRigidBody,GT=w.rawrigidbodyset_rbTranslation,jT=w.rawrigidbodyset_rbRotation,WT=w.rawrigidbodyset_rbSleep,XT=w.rawrigidbodyset_rbIsSleeping,qT=w.rawrigidbodyset_rbIsMoving,YT=w.rawrigidbodyset_rbNextTranslation,JT=w.rawrigidbodyset_rbNextRotation,KT=w.rawrigidbodyset_rbSetTranslation,ZT=w.rawrigidbodyset_rbSetRotation,QT=w.rawrigidbodyset_rbSetLinvel,$T=w.rawrigidbodyset_rbSetAngvel,eA=w.rawrigidbodyset_rbSetNextKinematicTranslation,tA=w.rawrigidbodyset_rbSetNextKinematicRotation,iA=w.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,rA=w.rawrigidbodyset_rbSetAdditionalMass,nA=w.rawrigidbodyset_rbSetAdditionalMassProperties,sA=w.rawrigidbodyset_rbLinvel,aA=w.rawrigidbodyset_rbAngvel,oA=w.rawrigidbodyset_rbLockTranslations,lA=w.rawrigidbodyset_rbSetEnabledTranslations,cA=w.rawrigidbodyset_rbLockRotations,hA=w.rawrigidbodyset_rbSetEnabledRotations,dA=w.rawrigidbodyset_rbDominanceGroup,uA=w.rawrigidbodyset_rbSetDominanceGroup,pA=w.rawrigidbodyset_rbEnableCcd,mA=w.rawrigidbodyset_rbSetSoftCcdPrediction,fA=w.rawrigidbodyset_rbMass,_A=w.rawrigidbodyset_rbInvMass,gA=w.rawrigidbodyset_rbEffectiveInvMass,wA=w.rawrigidbodyset_rbLocalCom,yA=w.rawrigidbodyset_rbWorldCom,vA=w.rawrigidbodyset_rbInvPrincipalInertiaSqrt,xA=w.rawrigidbodyset_rbPrincipalInertiaLocalFrame,bA=w.rawrigidbodyset_rbPrincipalInertia,SA=w.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,MA=w.rawrigidbodyset_rbEffectiveAngularInertia,EA=w.rawrigidbodyset_rbWakeUp,TA=w.rawrigidbodyset_rbIsCcdEnabled,AA=w.rawrigidbodyset_rbSoftCcdPrediction,RA=w.rawrigidbodyset_rbNumColliders,CA=w.rawrigidbodyset_rbCollider,PA=w.rawrigidbodyset_rbBodyType,LA=w.rawrigidbodyset_rbSetBodyType,IA=w.rawrigidbodyset_rbIsFixed,NA=w.rawrigidbodyset_rbIsKinematic,UA=w.rawrigidbodyset_rbIsDynamic,DA=w.rawrigidbodyset_rbLinearDamping,OA=w.rawrigidbodyset_rbAngularDamping,zA=w.rawrigidbodyset_rbSetLinearDamping,FA=w.rawrigidbodyset_rbSetAngularDamping,BA=w.rawrigidbodyset_rbSetEnabled,kA=w.rawrigidbodyset_rbIsEnabled,HA=w.rawrigidbodyset_rbGravityScale,VA=w.rawrigidbodyset_rbSetGravityScale,GA=w.rawrigidbodyset_rbResetForces,jA=w.rawrigidbodyset_rbResetTorques,WA=w.rawrigidbodyset_rbAddForce,XA=w.rawrigidbodyset_rbApplyImpulse,qA=w.rawrigidbodyset_rbAddTorque,YA=w.rawrigidbodyset_rbApplyTorqueImpulse,JA=w.rawrigidbodyset_rbAddForceAtPoint,KA=w.rawrigidbodyset_rbApplyImpulseAtPoint,ZA=w.rawrigidbodyset_rbAdditionalSolverIterations,QA=w.rawrigidbodyset_rbSetAdditionalSolverIterations,$A=w.rawrigidbodyset_rbUserData,eR=w.rawrigidbodyset_rbSetUserData,tR=w.rawrigidbodyset_rbUserForce,iR=w.rawrigidbodyset_rbUserTorque,rR=w.__wbg_rawrigidbodyset_free,nR=w.rawrigidbodyset_new,sR=w.rawrigidbodyset_createRigidBody,aR=w.rawrigidbodyset_remove,oR=w.rawrigidbodyset_contains,lR=w.rawrigidbodyset_forEachRigidBodyHandle,cR=w.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,hR=w.__wbg_rawbroadphase_free,dR=w.rawbroadphase_new,uR=w.rawcolliderset_coTranslation,pR=w.rawcolliderset_coRotation,mR=w.rawcolliderset_coSetTranslation,fR=w.rawcolliderset_coSetTranslationWrtParent,_R=w.rawcolliderset_coSetRotation,gR=w.rawcolliderset_coSetRotationWrtParent,wR=w.rawcolliderset_coIsSensor,yR=w.rawcolliderset_coShapeType,vR=w.rawcolliderset_coHalfspaceNormal,xR=w.rawcolliderset_coHalfExtents,bR=w.rawcolliderset_coSetHalfExtents,SR=w.rawcolliderset_coRadius,MR=w.rawcolliderset_coSetRadius,ER=w.rawcolliderset_coHalfHeight,TR=w.rawcolliderset_coSetHalfHeight,AR=w.rawcolliderset_coRoundRadius,RR=w.rawcolliderset_coSetRoundRadius,CR=w.rawcolliderset_coVertices,PR=w.rawcolliderset_coIndices,LR=w.rawcolliderset_coTriMeshFlags,IR=w.rawcolliderset_coHeightFieldFlags,NR=w.rawcolliderset_coHeightfieldHeights,UR=w.rawcolliderset_coHeightfieldScale,DR=w.rawcolliderset_coHeightfieldNRows,OR=w.rawcolliderset_coHeightfieldNCols,zR=w.rawcolliderset_coParent,FR=w.rawcolliderset_coSetEnabled,BR=w.rawcolliderset_coIsEnabled,kR=w.rawcolliderset_coSetContactSkin,HR=w.rawcolliderset_coContactSkin,VR=w.rawcolliderset_coFriction,GR=w.rawcolliderset_coRestitution,jR=w.rawcolliderset_coDensity,WR=w.rawcolliderset_coMass,XR=w.rawcolliderset_coVolume,qR=w.rawcolliderset_coCollisionGroups,YR=w.rawcolliderset_coSolverGroups,JR=w.rawcolliderset_coActiveHooks,KR=w.rawcolliderset_coActiveCollisionTypes,ZR=w.rawcolliderset_coActiveEvents,QR=w.rawcolliderset_coContactForceEventThreshold,$R=w.rawcolliderset_coContainsPoint,eC=w.rawcolliderset_coCastShape,tC=w.rawcolliderset_coCastCollider,iC=w.rawcolliderset_coIntersectsShape,rC=w.rawcolliderset_coContactShape,nC=w.rawcolliderset_coContactCollider,sC=w.rawcolliderset_coProjectPoint,aC=w.rawcolliderset_coIntersectsRay,oC=w.rawcolliderset_coCastRay,lC=w.rawcolliderset_coCastRayAndGetNormal,cC=w.rawcolliderset_coSetSensor,hC=w.rawcolliderset_coSetRestitution,dC=w.rawcolliderset_coSetFriction,uC=w.rawcolliderset_coFrictionCombineRule,pC=w.rawcolliderset_coSetFrictionCombineRule,mC=w.rawcolliderset_coRestitutionCombineRule,fC=w.rawcolliderset_coSetRestitutionCombineRule,_C=w.rawcolliderset_coSetCollisionGroups,gC=w.rawcolliderset_coSetSolverGroups,wC=w.rawcolliderset_coSetActiveHooks,yC=w.rawcolliderset_coSetActiveEvents,vC=w.rawcolliderset_coSetActiveCollisionTypes,xC=w.rawcolliderset_coSetShape,bC=w.rawcolliderset_coSetContactForceEventThreshold,SC=w.rawcolliderset_coSetDensity,MC=w.rawcolliderset_coSetMass,EC=w.rawcolliderset_coSetMassProperties,TC=w.__wbg_rawcolliderset_free,AC=w.rawcolliderset_new,RC=w.rawcolliderset_len,CC=w.rawcolliderset_contains,PC=w.rawcolliderset_createCollider,LC=w.rawcolliderset_remove,IC=w.rawcolliderset_forEachColliderHandle,NC=w.__wbg_rawshapecontact_free,UC=w.__wbg_rawnarrowphase_free,DC=w.rawnarrowphase_new,OC=w.rawnarrowphase_contact_pairs_with,zC=w.rawnarrowphase_contact_pair,FC=w.rawnarrowphase_intersection_pairs_with,BC=w.rawnarrowphase_intersection_pair,kC=w.__wbg_rawcontactmanifold_free,HC=w.rawcontactpair_collider1,VC=w.rawcontactpair_collider2,GC=w.rawcontactpair_numContactManifolds,jC=w.rawcontactpair_contactManifold,WC=w.rawcontactmanifold_normal,XC=w.rawcontactmanifold_local_n1,qC=w.rawcontactmanifold_local_n2,YC=w.rawcontactmanifold_subshape1,JC=w.rawcontactmanifold_subshape2,KC=w.rawcontactmanifold_num_contacts,ZC=w.rawcontactmanifold_contact_local_p1,QC=w.rawcontactmanifold_contact_local_p2,$C=w.rawcontactmanifold_contact_dist,eP=w.rawcontactmanifold_contact_fid1,tP=w.rawcontactmanifold_contact_fid2,iP=w.rawcontactmanifold_contact_impulse,rP=w.rawcontactmanifold_contact_tangent_impulse_x,nP=w.rawcontactmanifold_contact_tangent_impulse_y,sP=w.rawcontactmanifold_num_solver_contacts,aP=w.rawcontactmanifold_solver_contact_point,oP=w.rawcontactmanifold_solver_contact_dist,lP=w.rawcontactmanifold_solver_contact_friction,cP=w.rawcontactmanifold_solver_contact_restitution,hP=w.rawcontactmanifold_solver_contact_tangent_velocity,dP=w.__wbg_rawpointprojection_free,uP=w.rawpointprojection_point,pP=w.rawpointprojection_isInside,mP=w.__wbg_rawpointcolliderprojection_free,fP=w.rawpointcolliderprojection_colliderHandle,_P=w.rawpointcolliderprojection_point,gP=w.rawpointcolliderprojection_isInside,wP=w.rawpointcolliderprojection_featureType,yP=w.rawpointcolliderprojection_featureId,vP=w.__wbg_rawrayintersection_free,xP=w.__wbg_rawraycolliderhit_free,bP=w.__wbg_rawshape_free,SP=w.rawshape_cuboid,MP=w.rawshape_roundCuboid,EP=w.rawshape_ball,TP=w.rawshape_halfspace,AP=w.rawshape_capsule,RP=w.rawshape_cylinder,CP=w.rawshape_roundCylinder,PP=w.rawshape_cone,LP=w.rawshape_roundCone,IP=w.rawshape_polyline,NP=w.rawshape_trimesh,UP=w.rawshape_heightfield,DP=w.rawshape_segment,OP=w.rawshape_triangle,zP=w.rawshape_roundTriangle,FP=w.rawshape_convexHull,BP=w.rawshape_roundConvexHull,kP=w.rawshape_convexMesh,HP=w.rawshape_roundConvexMesh,VP=w.rawshape_castShape,GP=w.rawshape_intersectsShape,jP=w.rawshape_contactShape,WP=w.rawshape_containsPoint,XP=w.rawshape_projectPoint,qP=w.rawshape_intersectsRay,YP=w.rawshape_castRay,JP=w.rawshape_castRayAndGetNormal,KP=w.__wbg_rawshapecasthit_free,ZP=w.rawshapecasthit_witness1,QP=w.rawshapecasthit_normal1,$P=w.rawshapecasthit_normal2,eL=w.__wbg_rawcollidershapecasthit_free,tL=w.rawcollidershapecasthit_time_of_impact,iL=w.rawcollidershapecasthit_witness1,rL=w.rawcollidershapecasthit_witness2,nL=w.rawrotation_new,sL=w.rawrotation_identity,aL=w.rawrotation_x,oL=w.rawrotation_w,lL=w.rawvector_zero,cL=w.rawvector_new,hL=w.rawvector_set_x,dL=w.rawvector_set_z,uL=w.rawvector_xyz,pL=w.rawvector_yxz,mL=w.rawvector_zxy,fL=w.rawvector_xzy,_L=w.rawvector_yzx,gL=w.rawvector_zyx,wL=w.rawsdpmatrix3_elements,yL=w.__wbg_rawdebugrenderpipeline_free,vL=w.rawdebugrenderpipeline_new,xL=w.rawdebugrenderpipeline_vertices,bL=w.rawdebugrenderpipeline_colors,SL=w.rawdebugrenderpipeline_render,ML=w.__wbg_raweventqueue_free,EL=w.__wbg_rawcontactforceevent_free,TL=w.rawcontactforceevent_collider2,AL=w.rawcontactforceevent_total_force,RL=w.rawcontactforceevent_total_force_magnitude,CL=w.rawcontactforceevent_max_force_direction,PL=w.rawcontactforceevent_max_force_magnitude,LL=w.raweventqueue_new,IL=w.raweventqueue_drainCollisionEvents,NL=w.raweventqueue_drainContactForceEvents,UL=w.raweventqueue_clear,DL=w.__wbg_rawphysicspipeline_free,OL=w.rawphysicspipeline_new,zL=w.rawphysicspipeline_step,FL=w.rawphysicspipeline_stepWithEvents,BL=w.rawquerypipeline_new,kL=w.rawquerypipeline_update,HL=w.rawquerypipeline_castRay,VL=w.rawquerypipeline_castRayAndGetNormal,GL=w.rawquerypipeline_intersectionsWithRay,jL=w.rawquerypipeline_intersectionWithShape,WL=w.rawquerypipeline_projectPoint,XL=w.rawquerypipeline_projectPointAndGetFeature,qL=w.rawquerypipeline_intersectionsWithPoint,YL=w.rawquerypipeline_castShape,JL=w.rawquerypipeline_intersectionsWithShape,KL=w.rawquerypipeline_collidersWithAabbIntersectingAabb,ZL=w.__wbg_rawdeserializedworld_free,QL=w.rawdeserializedworld_takeGravity,$L=w.rawdeserializedworld_takeIntegrationParameters,eI=w.rawdeserializedworld_takeIslandManager,tI=w.rawdeserializedworld_takeBroadPhase,iI=w.rawdeserializedworld_takeNarrowPhase,rI=w.rawdeserializedworld_takeBodies,nI=w.rawdeserializedworld_takeColliders,sI=w.rawdeserializedworld_takeImpulseJoints,aI=w.rawdeserializedworld_takeMultibodyJoints,oI=w.rawserializationpipeline_new,lI=w.rawserializationpipeline_serializeAll,cI=w.rawserializationpipeline_deserializeAll,hI=w.rawkinematiccharactercontroller_offset,dI=w.rawintegrationparameters_normalizedAllowedLinearError,uI=w.rawintegrationparameters_numAdditionalFrictionIterations,pI=w.rawintegrationparameters_numInternalPgsIterations,mI=w.rawintegrationparameters_minIslandSize,fI=w.rawrigidbodyset_len,_I=w.rawshapecontact_distance,gI=w.rawrayintersection_featureType,wI=w.rawraycolliderintersection_colliderHandle,yI=w.rawrayintersection_time_of_impact,vI=w.rawraycolliderintersection_featureType,xI=w.rawraycolliderhit_colliderHandle,bI=w.rawraycolliderintersection_time_of_impact,SI=w.rawcollidershapecasthit_colliderHandle,MI=w.rawraycolliderhit_timeOfImpact,EI=w.rawshapecasthit_time_of_impact,TI=w.rawrotation_y,AI=w.rawrotation_z,RI=w.rawvector_x,CI=w.rawvector_y,PI=w.rawvector_z,LI=w.rawcontactforceevent_collider1,II=w.rawintegrationparameters_normalizedPredictionDistance,NI=w.rawrayintersection_featureId,UI=w.rawraycolliderintersection_featureId,DI=w.rawcolliderset_isHandleValid,OI=w.rawintegrationparameters_set_numAdditionalFrictionIterations,zI=w.rawintegrationparameters_set_numInternalPgsIterations,FI=w.rawvector_set_y,BI=w.__wbg_rawcontactpair_free,kI=w.__wbg_rawraycolliderintersection_free,HI=w.__wbg_rawrotation_free,VI=w.__wbg_rawvector_free,GI=w.__wbg_rawsdpmatrix3_free,jI=w.__wbg_rawserializationpipeline_free,WI=w.__wbg_rawquerypipeline_free,XI=w.rawkinematiccharactercontroller_up,qI=w.rawshapecontact_normal2,YI=w.rawshapecontact_point1,JI=w.rawshapecontact_point2,KI=w.rawrayintersection_normal,ZI=w.rawraycolliderintersection_normal,QI=w.rawshapecontact_normal1,$I=w.rawcollidershapecasthit_normal1,eN=w.rawcollidershapecasthit_normal2,tN=w.rawshapecasthit_witness2,iN=w.__wbindgen_add_to_stack_pointer,rN=w.__wbindgen_free,nN=w.__wbindgen_malloc,sN=w.__wbindgen_exn_store,aN=Object.freeze(Object.defineProperty({__proto__:null,__wbg_rawbroadphase_free:hR,__wbg_rawccdsolver_free:bE,__wbg_rawcharactercollision_free:f1,__wbg_rawcolliderset_free:TC,__wbg_rawcollidershapecasthit_free:eL,__wbg_rawcontactforceevent_free:EL,__wbg_rawcontactmanifold_free:kC,__wbg_rawcontactpair_free:BI,__wbg_rawdebugrenderpipeline_free:yL,__wbg_rawdeserializedworld_free:ZL,__wbg_rawdynamicraycastvehiclecontroller_free:E1,__wbg_raweventqueue_free:ML,__wbg_rawgenericjoint_free:wT,__wbg_rawimpulsejointset_free:GE,__wbg_rawintegrationparameters_free:ZE,__wbg_rawislandmanager_free:fT,__wbg_rawkinematiccharactercontroller_free:VM,__wbg_rawmultibodyjointset_free:OT,__wbg_rawnarrowphase_free:UC,__wbg_rawphysicspipeline_free:DL,__wbg_rawpointcolliderprojection_free:mP,__wbg_rawpointprojection_free:dP,__wbg_rawquerypipeline_free:WI,__wbg_rawraycolliderhit_free:xP,__wbg_rawraycolliderintersection_free:kI,__wbg_rawrayintersection_free:vP,__wbg_rawrigidbodyset_free:rR,__wbg_rawrotation_free:HI,__wbg_rawsdpmatrix3_free:GI,__wbg_rawserializationpipeline_free:jI,__wbg_rawshape_free:bP,__wbg_rawshapecasthit_free:KP,__wbg_rawshapecontact_free:NC,__wbg_rawvector_free:VI,__wbindgen_add_to_stack_pointer:iN,__wbindgen_exn_store:sN,__wbindgen_free:rN,__wbindgen_malloc:nN,memory:kM,rawbroadphase_new:dR,rawccdsolver_new:SE,rawcharactercollision_handle:g1,rawcharactercollision_new:_1,rawcharactercollision_toi:v1,rawcharactercollision_translationDeltaApplied:w1,rawcharactercollision_translationDeltaRemaining:y1,rawcharactercollision_worldNormal1:S1,rawcharactercollision_worldNormal2:M1,rawcharactercollision_worldWitness1:x1,rawcharactercollision_worldWitness2:b1,rawcolliderset_coActiveCollisionTypes:KR,rawcolliderset_coActiveEvents:ZR,rawcolliderset_coActiveHooks:JR,rawcolliderset_coCastCollider:tC,rawcolliderset_coCastRay:oC,rawcolliderset_coCastRayAndGetNormal:lC,rawcolliderset_coCastShape:eC,rawcolliderset_coCollisionGroups:qR,rawcolliderset_coContactCollider:nC,rawcolliderset_coContactForceEventThreshold:QR,rawcolliderset_coContactShape:rC,rawcolliderset_coContactSkin:HR,rawcolliderset_coContainsPoint:$R,rawcolliderset_coDensity:jR,rawcolliderset_coFriction:VR,rawcolliderset_coFrictionCombineRule:uC,rawcolliderset_coHalfExtents:xR,rawcolliderset_coHalfHeight:ER,rawcolliderset_coHalfspaceNormal:vR,rawcolliderset_coHeightFieldFlags:IR,rawcolliderset_coHeightfieldHeights:NR,rawcolliderset_coHeightfieldNCols:OR,rawcolliderset_coHeightfieldNRows:DR,rawcolliderset_coHeightfieldScale:UR,rawcolliderset_coIndices:PR,rawcolliderset_coIntersectsRay:aC,rawcolliderset_coIntersectsShape:iC,rawcolliderset_coIsEnabled:BR,rawcolliderset_coIsSensor:wR,rawcolliderset_coMass:WR,rawcolliderset_coParent:zR,rawcolliderset_coProjectPoint:sC,rawcolliderset_coRadius:SR,rawcolliderset_coRestitution:GR,rawcolliderset_coRestitutionCombineRule:mC,rawcolliderset_coRotation:pR,rawcolliderset_coRoundRadius:AR,rawcolliderset_coSetActiveCollisionTypes:vC,rawcolliderset_coSetActiveEvents:yC,rawcolliderset_coSetActiveHooks:wC,rawcolliderset_coSetCollisionGroups:_C,rawcolliderset_coSetContactForceEventThreshold:bC,rawcolliderset_coSetContactSkin:kR,rawcolliderset_coSetDensity:SC,rawcolliderset_coSetEnabled:FR,rawcolliderset_coSetFriction:dC,rawcolliderset_coSetFrictionCombineRule:pC,rawcolliderset_coSetHalfExtents:bR,rawcolliderset_coSetHalfHeight:TR,rawcolliderset_coSetMass:MC,rawcolliderset_coSetMassProperties:EC,rawcolliderset_coSetRadius:MR,rawcolliderset_coSetRestitution:hC,rawcolliderset_coSetRestitutionCombineRule:fC,rawcolliderset_coSetRotation:_R,rawcolliderset_coSetRotationWrtParent:gR,rawcolliderset_coSetRoundRadius:RR,rawcolliderset_coSetSensor:cC,rawcolliderset_coSetShape:xC,rawcolliderset_coSetSolverGroups:gC,rawcolliderset_coSetTranslation:mR,rawcolliderset_coSetTranslationWrtParent:fR,rawcolliderset_coShapeType:yR,rawcolliderset_coSolverGroups:YR,rawcolliderset_coTranslation:uR,rawcolliderset_coTriMeshFlags:LR,rawcolliderset_coVertices:CR,rawcolliderset_coVolume:XR,rawcolliderset_contains:CC,rawcolliderset_createCollider:PC,rawcolliderset_forEachColliderHandle:IC,rawcolliderset_isHandleValid:DI,rawcolliderset_len:RC,rawcolliderset_new:AC,rawcolliderset_remove:LC,rawcollidershapecasthit_colliderHandle:SI,rawcollidershapecasthit_normal1:$I,rawcollidershapecasthit_normal2:eN,rawcollidershapecasthit_time_of_impact:tL,rawcollidershapecasthit_witness1:iL,rawcollidershapecasthit_witness2:rL,rawcontactforceevent_collider1:LI,rawcontactforceevent_collider2:TL,rawcontactforceevent_max_force_direction:CL,rawcontactforceevent_max_force_magnitude:PL,rawcontactforceevent_total_force:AL,rawcontactforceevent_total_force_magnitude:RL,rawcontactmanifold_contact_dist:$C,rawcontactmanifold_contact_fid1:eP,rawcontactmanifold_contact_fid2:tP,rawcontactmanifold_contact_impulse:iP,rawcontactmanifold_contact_local_p1:ZC,rawcontactmanifold_contact_local_p2:QC,rawcontactmanifold_contact_tangent_impulse_x:rP,rawcontactmanifold_contact_tangent_impulse_y:nP,rawcontactmanifold_local_n1:XC,rawcontactmanifold_local_n2:qC,rawcontactmanifold_normal:WC,rawcontactmanifold_num_contacts:KC,rawcontactmanifold_num_solver_contacts:sP,rawcontactmanifold_solver_contact_dist:oP,rawcontactmanifold_solver_contact_friction:lP,rawcontactmanifold_solver_contact_point:aP,rawcontactmanifold_solver_contact_restitution:cP,rawcontactmanifold_solver_contact_tangent_velocity:hP,rawcontactmanifold_subshape1:YC,rawcontactmanifold_subshape2:JC,rawcontactpair_collider1:HC,rawcontactpair_collider2:VC,rawcontactpair_contactManifold:jC,rawcontactpair_numContactManifolds:GC,rawdebugrenderpipeline_colors:bL,rawdebugrenderpipeline_new:vL,rawdebugrenderpipeline_render:SL,rawdebugrenderpipeline_vertices:xL,rawdeserializedworld_takeBodies:rI,rawdeserializedworld_takeBroadPhase:tI,rawdeserializedworld_takeColliders:nI,rawdeserializedworld_takeGravity:QL,rawdeserializedworld_takeImpulseJoints:sI,rawdeserializedworld_takeIntegrationParameters:$L,rawdeserializedworld_takeIslandManager:eI,rawdeserializedworld_takeMultibodyJoints:aI,rawdeserializedworld_takeNarrowPhase:iI,rawdynamicraycastvehiclecontroller_add_wheel:N1,rawdynamicraycastvehiclecontroller_chassis:R1,rawdynamicraycastvehiclecontroller_current_vehicle_speed:A1,rawdynamicraycastvehiclecontroller_index_forward_axis:L1,rawdynamicraycastvehiclecontroller_index_up_axis:C1,rawdynamicraycastvehiclecontroller_new:T1,rawdynamicraycastvehiclecontroller_num_wheels:U1,rawdynamicraycastvehiclecontroller_set_index_forward_axis:I1,rawdynamicraycastvehiclecontroller_set_index_up_axis:P1,rawdynamicraycastvehiclecontroller_set_wheel_axle_cs:oE,rawdynamicraycastvehiclecontroller_set_wheel_brake:$1,rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs:z1,rawdynamicraycastvehiclecontroller_set_wheel_direction_cs:sE,rawdynamicraycastvehiclecontroller_set_wheel_engine_force:rE,rawdynamicraycastvehiclecontroller_set_wheel_friction_slip:cE,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force:Z1,rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel:H1,rawdynamicraycastvehiclecontroller_set_wheel_radius:G1,rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness:dE,rawdynamicraycastvehiclecontroller_set_wheel_steering:tE,rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression:q1,rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation:J1,rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length:B1,rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness:W1,rawdynamicraycastvehiclecontroller_update_vehicle:D1,rawdynamicraycastvehiclecontroller_wheel_axle_cs:aE,rawdynamicraycastvehiclecontroller_wheel_brake:Q1,rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs:O1,rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws:_E,rawdynamicraycastvehiclecontroller_wheel_contact_point_ws:gE,rawdynamicraycastvehiclecontroller_wheel_direction_cs:nE,rawdynamicraycastvehiclecontroller_wheel_engine_force:iE,rawdynamicraycastvehiclecontroller_wheel_forward_impulse:pE,rawdynamicraycastvehiclecontroller_wheel_friction_slip:lE,rawdynamicraycastvehiclecontroller_wheel_ground_object:xE,rawdynamicraycastvehiclecontroller_wheel_hard_point_ws:yE,rawdynamicraycastvehiclecontroller_wheel_is_in_contact:vE,rawdynamicraycastvehiclecontroller_wheel_max_suspension_force:K1,rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel:k1,rawdynamicraycastvehiclecontroller_wheel_radius:V1,rawdynamicraycastvehiclecontroller_wheel_rotation:uE,rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness:hE,rawdynamicraycastvehiclecontroller_wheel_side_impulse:mE,rawdynamicraycastvehiclecontroller_wheel_steering:eE,rawdynamicraycastvehiclecontroller_wheel_suspension_compression:X1,rawdynamicraycastvehiclecontroller_wheel_suspension_force:fE,rawdynamicraycastvehiclecontroller_wheel_suspension_length:wE,rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation:Y1,rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length:F1,rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness:j1,raweventqueue_clear:UL,raweventqueue_drainCollisionEvents:IL,raweventqueue_drainContactForceEvents:NL,raweventqueue_new:LL,rawgenericjoint_fixed:MT,rawgenericjoint_generic:yT,rawgenericjoint_prismatic:ST,rawgenericjoint_revolute:ET,rawgenericjoint_rope:xT,rawgenericjoint_spherical:bT,rawgenericjoint_spring:vT,rawimpulsejointset_contains:YE,rawimpulsejointset_createJoint:WE,rawimpulsejointset_forEachJointAttachedToRigidBody:KE,rawimpulsejointset_forEachJointHandle:JE,rawimpulsejointset_jointAnchor1:CE,rawimpulsejointset_jointAnchor2:PE,rawimpulsejointset_jointBodyHandle1:EE,rawimpulsejointset_jointBodyHandle2:TE,rawimpulsejointset_jointConfigureMotor:VE,rawimpulsejointset_jointConfigureMotorModel:BE,rawimpulsejointset_jointConfigureMotorPosition:HE,rawimpulsejointset_jointConfigureMotorVelocity:kE,rawimpulsejointset_jointContactsEnabled:NE,rawimpulsejointset_jointFrameX1:AE,rawimpulsejointset_jointFrameX2:RE,rawimpulsejointset_jointLimitsEnabled:DE,rawimpulsejointset_jointLimitsMax:zE,rawimpulsejointset_jointLimitsMin:OE,rawimpulsejointset_jointSetAnchor1:LE,rawimpulsejointset_jointSetAnchor2:IE,rawimpulsejointset_jointSetContactsEnabled:UE,rawimpulsejointset_jointSetLimits:FE,rawimpulsejointset_jointType:ME,rawimpulsejointset_len:qE,rawimpulsejointset_new:jE,rawimpulsejointset_remove:XE,rawintegrationparameters_contact_erp:eT,rawintegrationparameters_dt:$E,rawintegrationparameters_lengthUnit:rT,rawintegrationparameters_maxCcdSubsteps:iT,rawintegrationparameters_minIslandSize:mI,rawintegrationparameters_new:QE,rawintegrationparameters_normalizedAllowedLinearError:dI,rawintegrationparameters_normalizedPredictionDistance:II,rawintegrationparameters_numAdditionalFrictionIterations:uI,rawintegrationparameters_numInternalPgsIterations:pI,rawintegrationparameters_numSolverIterations:tT,rawintegrationparameters_set_contact_natural_frequency:sT,rawintegrationparameters_set_dt:nT,rawintegrationparameters_set_lengthUnit:dT,rawintegrationparameters_set_maxCcdSubsteps:hT,rawintegrationparameters_set_minIslandSize:cT,rawintegrationparameters_set_normalizedAllowedLinearError:aT,rawintegrationparameters_set_normalizedPredictionDistance:oT,rawintegrationparameters_set_numAdditionalFrictionIterations:OI,rawintegrationparameters_set_numInternalPgsIterations:zI,rawintegrationparameters_set_numSolverIterations:lT,rawintegrationparameters_switchToSmallStepsPgsSolver:pT,rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart:mT,rawintegrationparameters_switchToStandardPgsSolver:uT,rawislandmanager_forEachActiveRigidBodyHandle:gT,rawislandmanager_new:_T,rawkinematiccharactercontroller_autostepEnabled:$M,rawkinematiccharactercontroller_autostepIncludesDynamicBodies:QM,rawkinematiccharactercontroller_autostepMaxHeight:KM,rawkinematiccharactercontroller_autostepMinWidth:ZM,rawkinematiccharactercontroller_computeColliderMovement:h1,rawkinematiccharactercontroller_computedCollision:m1,rawkinematiccharactercontroller_computedGrounded:u1,rawkinematiccharactercontroller_computedMovement:d1,rawkinematiccharactercontroller_disableAutostep:t1,rawkinematiccharactercontroller_disableSnapToGround:l1,rawkinematiccharactercontroller_enableAutostep:e1,rawkinematiccharactercontroller_enableSnapToGround:o1,rawkinematiccharactercontroller_maxSlopeClimbAngle:i1,rawkinematiccharactercontroller_minSlopeSlideAngle:n1,rawkinematiccharactercontroller_new:GM,rawkinematiccharactercontroller_normalNudgeFactor:WM,rawkinematiccharactercontroller_numComputedCollisions:p1,rawkinematiccharactercontroller_offset:hI,rawkinematiccharactercontroller_setMaxSlopeClimbAngle:r1,rawkinematiccharactercontroller_setMinSlopeSlideAngle:s1,rawkinematiccharactercontroller_setNormalNudgeFactor:XM,rawkinematiccharactercontroller_setOffset:qM,rawkinematiccharactercontroller_setSlideEnabled:JM,rawkinematiccharactercontroller_setUp:jM,rawkinematiccharactercontroller_slideEnabled:YM,rawkinematiccharactercontroller_snapToGroundDistance:a1,rawkinematiccharactercontroller_snapToGroundEnabled:c1,rawkinematiccharactercontroller_up:XI,rawmultibodyjointset_contains:kT,rawmultibodyjointset_createJoint:FT,rawmultibodyjointset_forEachJointAttachedToRigidBody:VT,rawmultibodyjointset_forEachJointHandle:HT,rawmultibodyjointset_jointAnchor1:CT,rawmultibodyjointset_jointAnchor2:PT,rawmultibodyjointset_jointContactsEnabled:LT,rawmultibodyjointset_jointFrameX1:AT,rawmultibodyjointset_jointFrameX2:RT,rawmultibodyjointset_jointLimitsEnabled:NT,rawmultibodyjointset_jointLimitsMax:DT,rawmultibodyjointset_jointLimitsMin:UT,rawmultibodyjointset_jointSetContactsEnabled:IT,rawmultibodyjointset_jointType:TT,rawmultibodyjointset_new:zT,rawmultibodyjointset_remove:BT,rawnarrowphase_contact_pair:zC,rawnarrowphase_contact_pairs_with:OC,rawnarrowphase_intersection_pair:BC,rawnarrowphase_intersection_pairs_with:FC,rawnarrowphase_new:DC,rawphysicspipeline_new:OL,rawphysicspipeline_step:zL,rawphysicspipeline_stepWithEvents:FL,rawpointcolliderprojection_colliderHandle:fP,rawpointcolliderprojection_featureId:yP,rawpointcolliderprojection_featureType:wP,rawpointcolliderprojection_isInside:gP,rawpointcolliderprojection_point:_P,rawpointprojection_isInside:pP,rawpointprojection_point:uP,rawquerypipeline_castRay:HL,rawquerypipeline_castRayAndGetNormal:VL,rawquerypipeline_castShape:YL,rawquerypipeline_collidersWithAabbIntersectingAabb:KL,rawquerypipeline_intersectionWithShape:jL,rawquerypipeline_intersectionsWithPoint:qL,rawquerypipeline_intersectionsWithRay:GL,rawquerypipeline_intersectionsWithShape:JL,rawquerypipeline_new:BL,rawquerypipeline_projectPoint:WL,rawquerypipeline_projectPointAndGetFeature:XL,rawquerypipeline_update:kL,rawraycolliderhit_colliderHandle:xI,rawraycolliderhit_timeOfImpact:MI,rawraycolliderintersection_colliderHandle:wI,rawraycolliderintersection_featureId:UI,rawraycolliderintersection_featureType:vI,rawraycolliderintersection_normal:ZI,rawraycolliderintersection_time_of_impact:bI,rawrayintersection_featureId:NI,rawrayintersection_featureType:gI,rawrayintersection_normal:KI,rawrayintersection_time_of_impact:yI,rawrigidbodyset_contains:oR,rawrigidbodyset_createRigidBody:sR,rawrigidbodyset_forEachRigidBodyHandle:lR,rawrigidbodyset_len:fI,rawrigidbodyset_new:nR,rawrigidbodyset_propagateModifiedBodyPositionsToColliders:cR,rawrigidbodyset_rbAddForce:WA,rawrigidbodyset_rbAddForceAtPoint:JA,rawrigidbodyset_rbAddTorque:qA,rawrigidbodyset_rbAdditionalSolverIterations:ZA,rawrigidbodyset_rbAngularDamping:OA,rawrigidbodyset_rbAngvel:aA,rawrigidbodyset_rbApplyImpulse:XA,rawrigidbodyset_rbApplyImpulseAtPoint:KA,rawrigidbodyset_rbApplyTorqueImpulse:YA,rawrigidbodyset_rbBodyType:PA,rawrigidbodyset_rbCollider:CA,rawrigidbodyset_rbDominanceGroup:dA,rawrigidbodyset_rbEffectiveAngularInertia:MA,rawrigidbodyset_rbEffectiveInvMass:gA,rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt:SA,rawrigidbodyset_rbEnableCcd:pA,rawrigidbodyset_rbGravityScale:HA,rawrigidbodyset_rbInvMass:_A,rawrigidbodyset_rbInvPrincipalInertiaSqrt:vA,rawrigidbodyset_rbIsCcdEnabled:TA,rawrigidbodyset_rbIsDynamic:UA,rawrigidbodyset_rbIsEnabled:kA,rawrigidbodyset_rbIsFixed:IA,rawrigidbodyset_rbIsKinematic:NA,rawrigidbodyset_rbIsMoving:qT,rawrigidbodyset_rbIsSleeping:XT,rawrigidbodyset_rbLinearDamping:DA,rawrigidbodyset_rbLinvel:sA,rawrigidbodyset_rbLocalCom:wA,rawrigidbodyset_rbLockRotations:cA,rawrigidbodyset_rbLockTranslations:oA,rawrigidbodyset_rbMass:fA,rawrigidbodyset_rbNextRotation:JT,rawrigidbodyset_rbNextTranslation:YT,rawrigidbodyset_rbNumColliders:RA,rawrigidbodyset_rbPrincipalInertia:bA,rawrigidbodyset_rbPrincipalInertiaLocalFrame:xA,rawrigidbodyset_rbRecomputeMassPropertiesFromColliders:iA,rawrigidbodyset_rbResetForces:GA,rawrigidbodyset_rbResetTorques:jA,rawrigidbodyset_rbRotation:jT,rawrigidbodyset_rbSetAdditionalMass:rA,rawrigidbodyset_rbSetAdditionalMassProperties:nA,rawrigidbodyset_rbSetAdditionalSolverIterations:QA,rawrigidbodyset_rbSetAngularDamping:FA,rawrigidbodyset_rbSetAngvel:$T,rawrigidbodyset_rbSetBodyType:LA,rawrigidbodyset_rbSetDominanceGroup:uA,rawrigidbodyset_rbSetEnabled:BA,rawrigidbodyset_rbSetEnabledRotations:hA,rawrigidbodyset_rbSetEnabledTranslations:lA,rawrigidbodyset_rbSetGravityScale:VA,rawrigidbodyset_rbSetLinearDamping:zA,rawrigidbodyset_rbSetLinvel:QT,rawrigidbodyset_rbSetNextKinematicRotation:tA,rawrigidbodyset_rbSetNextKinematicTranslation:eA,rawrigidbodyset_rbSetRotation:ZT,rawrigidbodyset_rbSetSoftCcdPrediction:mA,rawrigidbodyset_rbSetTranslation:KT,rawrigidbodyset_rbSetUserData:eR,rawrigidbodyset_rbSleep:WT,rawrigidbodyset_rbSoftCcdPrediction:AA,rawrigidbodyset_rbTranslation:GT,rawrigidbodyset_rbUserData:$A,rawrigidbodyset_rbUserForce:tR,rawrigidbodyset_rbUserTorque:iR,rawrigidbodyset_rbWakeUp:EA,rawrigidbodyset_rbWorldCom:yA,rawrigidbodyset_remove:aR,rawrotation_identity:sL,rawrotation_new:nL,rawrotation_w:oL,rawrotation_x:aL,rawrotation_y:TI,rawrotation_z:AI,rawsdpmatrix3_elements:wL,rawserializationpipeline_deserializeAll:cI,rawserializationpipeline_new:oI,rawserializationpipeline_serializeAll:lI,rawshape_ball:EP,rawshape_capsule:AP,rawshape_castRay:YP,rawshape_castRayAndGetNormal:JP,rawshape_castShape:VP,rawshape_cone:PP,rawshape_contactShape:jP,rawshape_containsPoint:WP,rawshape_convexHull:FP,rawshape_convexMesh:kP,rawshape_cuboid:SP,rawshape_cylinder:RP,rawshape_halfspace:TP,rawshape_heightfield:UP,rawshape_intersectsRay:qP,rawshape_intersectsShape:GP,rawshape_polyline:IP,rawshape_projectPoint:XP,rawshape_roundCone:LP,rawshape_roundConvexHull:BP,rawshape_roundConvexMesh:HP,rawshape_roundCuboid:MP,rawshape_roundCylinder:CP,rawshape_roundTriangle:zP,rawshape_segment:DP,rawshape_triangle:OP,rawshape_trimesh:NP,rawshapecasthit_normal1:QP,rawshapecasthit_normal2:$P,rawshapecasthit_time_of_impact:EI,rawshapecasthit_witness1:ZP,rawshapecasthit_witness2:tN,rawshapecontact_distance:_I,rawshapecontact_normal1:QI,rawshapecontact_normal2:qI,rawshapecontact_point1:YI,rawshapecontact_point2:JI,rawvector_new:cL,rawvector_set_x:hL,rawvector_set_y:FI,rawvector_set_z:dL,rawvector_x:RI,rawvector_xyz:uL,rawvector_xzy:fL,rawvector_y:CI,rawvector_yxz:pL,rawvector_yzx:_L,rawvector_z:PI,rawvector_zero:lL,rawvector_zxy:mL,rawvector_zyx:gL,version:HM},Symbol.toStringTag,{value:"Module"}));QS(aN);let vf=class{constructor(n,e,t){this.x=n,this.y=e,this.z=t}};class F{static new(e,t,i){return new vf(e,t,i)}static intoRaw(e){return new B(e.x,e.y,e.z)}static zeros(){return F.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=F.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}let ld=class{constructor(n,e,t,i){this.x=n,this.y=e,this.z=t,this.w=i}};class Ye{static identity(){return new ld(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new ld(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new et(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class xf{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class cd{static fromRaw(e){const t=new xf(e.elements());return e.free(),t}}var Ki;(function(n){n[n.Dynamic=0]="Dynamic",n[n.Fixed=1]="Fixed",n[n.KinematicPositionBased=2]="KinematicPositionBased",n[n.KinematicVelocityBased=3]="KinematicVelocityBased"})(Ki||(Ki={}));class hd{constructor(e,t,i){this.rawSet=e,this.colliderSet=t,this.handle=i}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,i,r){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,i,r)}restrictTranslations(e,t,i,r){this.setEnabledTranslations(e,t,i,r)}setEnabledRotations(e,t,i,r){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,i,r)}restrictRotations(e,t,i,r){this.setEnabledRotations(e,t,i,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(e){this.rawSet.rbSetAdditionalSolverIterations(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}setSoftCcdPrediction(e){this.rawSet.rbSetSoftCcdPrediction(this.handle,e)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(){let e=this.rawSet.rbTranslation(this.handle);return F.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return Ye.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return F.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return Ye.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let i=F.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,i,t),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let i=F.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,i,t),i.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return F.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return F.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return F.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return F.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return F.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return F.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return F.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Ye.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return cd.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return cd.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,i,r,s){let a=F.intoRaw(t),o=F.intoRaw(i),l=Ye.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,a,o,l,s),a.free(),o.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const i=F.intoRaw(e);this.rawSet.rbAddForce(this.handle,i,t),i.free()}applyImpulse(e,t){const i=F.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,i,t),i.free()}addTorque(e,t){const i=F.intoRaw(e);this.rawSet.rbAddTorque(this.handle,i,t),i.free()}applyTorqueImpulse(e,t){const i=F.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,i,t),i.free()}addForceAtPoint(e,t,i){const r=F.intoRaw(e),s=F.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,r,s,i),r.free(),s.free()}applyImpulseAtPoint(e,t,i){const r=F.intoRaw(e),s=F.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,s,i),r.free(),s.free()}userForce(){return F.fromRaw(this.rawSet.rbUserForce(this.handle))}userTorque(){return F.fromRaw(this.rawSet.rbUserTorque(this.handle))}}class ur{constructor(e){this.enabled=!0,this.status=e,this.translation=F.zeros(),this.rotation=Ye.identity(),this.gravityScale=1,this.linvel=F.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=F.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=F.zeros(),this.principalAngularInertia=F.zeros(),this.angularInertiaLocalFrame=Ye.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new ur(Ki.Dynamic)}static kinematicPositionBased(){return new ur(Ki.KinematicPositionBased)}static kinematicVelocityBased(){return new ur(Ki.KinematicVelocityBased)}static fixed(){return new ur(Ki.Fixed)}static newDynamic(){return new ur(Ki.Dynamic)}static newKinematicPositionBased(){return new ur(Ki.KinematicPositionBased)}static newKinematicVelocityBased(){return new ur(Ki.KinematicVelocityBased)}static newStatic(){return new ur(Ki.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setAdditionalSolverIterations(e){return this.additionalSolverIterations=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return Ye.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:i},this}setAngvel(e){return F.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,i,r){return this.mass=e,F.copy(this.centerOfMass,t),F.copy(this.principalAngularInertia,i),Ye.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(e,t,i){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=i,this}restrictTranslations(e,t,i){return this.enabledTranslations(e,t,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,i){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=i,this}restrictRotations(e,t,i){return this.enabledRotations(e,t,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setSoftCcdPrediction(e){return this.softCcdPrediction=e,this}setUserData(e){return this.userData=e,this}}class Fl{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let i=this.index(e);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class bf{constructor(e){this.raw=e||new Ct,this.map=new Fl,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new hd(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let i=F.intoRaw(t.translation),r=Ye.intoRaw(t.rotation),s=F.intoRaw(t.linvel),a=F.intoRaw(t.centerOfMass),o=F.intoRaw(t.angvel),l=F.intoRaw(t.principalAngularInertia),c=Ye.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,i,r,t.gravityScale,t.mass,t.massOnly,a,s,o,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.softCcdPrediction,t.ccdEnabled,t.dominanceGroup,t.additionalSolverIterations);i.free(),r.free(),s.free(),a.free(),o.free(),l.free(),c.free();const d=new hd(this.raw,e,h);return d.userData=t.userData,this.map.set(h,d),d}remove(e,t,i,r,s){for(let a=0;a<this.raw.rbNumColliders(e);a+=1)i.unmap(this.raw.rbCollider(e,a));r.forEachJointHandleAttachedToRigidBody(e,a=>r.unmap(a)),s.forEachJointHandleAttachedToRigidBody(e,a=>s.unmap(a)),this.raw.remove(e,t.raw,i.raw,r.raw,s.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(i=>{t(this.get(i))})}getAll(){return this.map.getAll()}}class Sf{constructor(e){this.raw=e||new zn}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set contact_natural_frequency(e){this.raw.contact_natural_frequency=e}set lengthUnit(e){this.raw.lengthUnit=e}set normalizedAllowedLinearError(e){this.raw.normalizedAllowedLinearError=e}set normalizedPredictionDistance(e){this.raw.normalizedPredictionDistance=e}set numSolverIterations(e){this.raw.numSolverIterations=e}set numAdditionalFrictionIterations(e){this.raw.numAdditionalFrictionIterations=e}set numInternalPgsIterations(e){this.raw.numInternalPgsIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.raw.switchToSmallStepsPgsSolverWithoutWarmstart()}}var ei;(function(n){n[n.Revolute=0]="Revolute",n[n.Fixed=1]="Fixed",n[n.Prismatic=2]="Prismatic",n[n.Rope=3]="Rope",n[n.Spring=4]="Spring",n[n.Spherical=5]="Spherical",n[n.Generic=6]="Generic"})(ei||(ei={}));var dd;(function(n){n[n.AccelerationBased=0]="AccelerationBased",n[n.ForceBased=1]="ForceBased"})(dd||(dd={}));var ud;(function(n){n[n.LinX=1]="LinX",n[n.LinY=2]="LinY",n[n.LinZ=4]="LinZ",n[n.AngX=8]="AngX",n[n.AngY=16]="AngY",n[n.AngZ=32]="AngZ"})(ud||(ud={}));class Zi{constructor(e,t,i){this.rawSet=e,this.bodySet=t,this.handle=i}static newTyped(e,t,i){switch(e.jointType(i)){case Ji.Revolute:return new Rf(e,t,i);case Ji.Prismatic:return new Af(e,t,i);case Ji.Fixed:return new Mf(e,t,i);case Ji.Spring:return new Tf(e,t,i);case Ji.Rope:return new Ef(e,t,i);case Ji.Spherical:return new Pf(e,t,i);case Ji.Generic:return new Cf(e,t,i);default:return new Zi(e,t,i)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Ye.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Ye.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return F.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return F.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=F.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=F.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class pd extends Zi{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,i)}configureMotor(e,t,i,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,i,r)}}class Mf extends Zi{}class Ef extends Zi{}class Tf extends Zi{}class Af extends pd{rawAxis(){return Pl.LinX}}class Rf extends pd{rawAxis(){return Pl.AngX}}class Cf extends Zi{}class Pf extends Zi{}class Ur{constructor(){}static fixed(e,t,i,r){let s=new Ur;return s.anchor1=e,s.anchor2=i,s.frame1=t,s.frame2=r,s.jointType=ei.Fixed,s}static spring(e,t,i,r,s){let a=new Ur;return a.anchor1=r,a.anchor2=s,a.length=e,a.stiffness=t,a.damping=i,a.jointType=ei.Spring,a}static rope(e,t,i){let r=new Ur;return r.anchor1=t,r.anchor2=i,r.length=e,r.jointType=ei.Rope,r}static generic(e,t,i,r){let s=new Ur;return s.anchor1=e,s.anchor2=t,s.axis=i,s.axesMask=r,s.jointType=ei.Generic,s}static spherical(e,t){let i=new Ur;return i.anchor1=e,i.anchor2=t,i.jointType=ei.Spherical,i}static prismatic(e,t,i){let r=new Ur;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=ei.Prismatic,r}static revolute(e,t,i){let r=new Ur;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=ei.Revolute,r}intoRaw(){let e=F.intoRaw(this.anchor1),t=F.intoRaw(this.anchor2),i,r,s=!1,a=0,o=0;switch(this.jointType){case ei.Fixed:let l=Ye.intoRaw(this.frame1),c=Ye.intoRaw(this.frame2);r=Jt.fixed(e,l,t,c),l.free(),c.free();break;case ei.Spring:r=Jt.spring(this.length,this.stiffness,this.damping,e,t);break;case ei.Rope:r=Jt.rope(this.length,e,t);break;case ei.Prismatic:i=F.intoRaw(this.axis),this.limitsEnabled&&(s=!0,a=this.limits[0],o=this.limits[1]),r=Jt.prismatic(e,t,i,s,a,o),i.free();break;case ei.Generic:i=F.intoRaw(this.axis);let h=this.axesMask;r=Jt.generic(e,t,i,h);break;case ei.Spherical:r=Jt.spherical(e,t);break;case ei.Revolute:i=F.intoRaw(this.axis),r=Jt.revolute(e,t,i),i.free();break}return e.free(),t.free(),r}}class Lf{constructor(e){this.raw=e||new Lr,this.map=new Fl,e&&e.forEachJointHandle(t=>{this.map.set(t,Zi.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,i,r,s){const a=t.intoRaw(),o=this.raw.createJoint(a,i,r,s);a.free();let l=Zi.newTyped(this.raw,e,o);return this.map.set(o,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class nn{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case Ji.Revolute:return new Uf(e,t);case Ji.Prismatic:return new Nf(e,t);case Ji.Fixed:return new If(e,t);case Ji.Spherical:return new Df(e,t);default:return new nn(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class md extends nn{}class If extends nn{}class Nf extends md{rawAxis(){return Pl.LinX}}class Uf extends md{rawAxis(){return Pl.AngX}}class Df extends nn{}class Of{constructor(e){this.raw=e||new Nr,this.map=new Fl,e&&e.forEachJointHandle(t=>{this.map.set(t,nn.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,i,r){const s=e.intoRaw(),a=this.raw.createJoint(s,t,i,r);s.free();let o=nn.newTyped(this.raw,a);return this.map.set(a,o),o}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var La;(function(n){n[n.Average=0]="Average",n[n.Min=1]="Min",n[n.Multiply=2]="Multiply",n[n.Max=3]="Max"})(La||(La={}));class zf{constructor(e){this.raw=e||new td}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Ff{constructor(e){this.raw=e||new Ir}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class Bf{constructor(e){this.raw=e||new On}free(){this.raw&&this.raw.free(),this.raw=void 0}}class kf{constructor(e){this.raw=e||new rn,this.tempManifold=new Hf(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(e,t){this.raw.contact_pairs_with(e,t)}intersectionPairsWith(e,t){this.raw.intersection_pairs_with(e,t)}contactPair(e,t,i){const r=this.raw.contact_pair(e,t);if(r){const s=r.collider1()!=e;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&i(this.tempManifold,s),this.tempManifold.free();r.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class Hf{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return F.fromRaw(this.raw.normal())}localNormal1(){return F.fromRaw(this.raw.local_n1())}localNormal2(){return F.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return F.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return F.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return F.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return F.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class Ps{constructor(e,t,i,r,s){this.distance=e,this.point1=t,this.point2=i,this.normal1=r,this.normal2=s}static fromRaw(e){if(!e)return null;const t=new Ps(e.distance(),F.fromRaw(e.point1()),F.fromRaw(e.point2()),F.fromRaw(e.normal1()),F.fromRaw(e.normal2()));return e.free(),t}}var Ls;(function(n){n[n.Vertex=0]="Vertex",n[n.Edge=1]="Edge",n[n.Face=2]="Face",n[n.Unknown=3]="Unknown"})(Ls||(Ls={}));class Ia{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new Ia(F.fromRaw(e.point()),e.isInside());return e.free(),t}}class Na{constructor(e,t,i,r,s){this.featureType=Ls.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=i,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new Na(e.get(t.colliderHandle()),F.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),i}}class oN{constructor(e,t){this.origin=e,this.dir=t}pointAt(e){return{x:this.origin.x+this.dir.x*e,y:this.origin.y+this.dir.y*e,z:this.origin.z+this.dir.z*e}}}class Ua{constructor(e,t,i,r){this.featureType=Ls.Unknown,this.featureId=void 0,this.timeOfImpact=e,this.normal=t,r!==void 0&&(this.featureId=r),i!==void 0&&(this.featureType=i)}static fromRaw(e){if(!e)return null;const t=new Ua(e.time_of_impact(),F.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class Da{constructor(e,t,i,r,s){this.featureType=Ls.Unknown,this.featureId=void 0,this.collider=e,this.timeOfImpact=t,this.normal=i,s!==void 0&&(this.featureId=s),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new Da(e.get(t.colliderHandle()),t.time_of_impact(),F.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),i}}class Bl{constructor(e,t){this.collider=e,this.timeOfImpact=t}static fromRaw(e,t){if(!t)return null;const i=new Bl(e.get(t.colliderHandle()),t.timeOfImpact());return t.free(),i}}class Is{constructor(e,t,i,r,s){this.time_of_impact=e,this.witness1=t,this.witness2=i,this.normal1=r,this.normal2=s}static fromRaw(e,t){if(!t)return null;const i=new Is(t.time_of_impact(),F.fromRaw(t.witness1()),F.fromRaw(t.witness2()),F.fromRaw(t.normal1()),F.fromRaw(t.normal2()));return t.free(),i}}class Oa extends Is{constructor(e,t,i,r,s,a){super(t,i,r,s,a),this.collider=e}static fromRaw(e,t){if(!t)return null;const i=new Oa(e.get(t.colliderHandle()),t.time_of_impact(),F.fromRaw(t.witness1()),F.fromRaw(t.witness2()),F.fromRaw(t.normal1()),F.fromRaw(t.normal2()));return t.free(),i}}class jt{static fromRaw(e,t){const i=e.coShapeType(t);let r,s,a,o,l,c,h;switch(i){case $t.Ball:return new gd(e.coRadius(t));case $t.Cuboid:return r=e.coHalfExtents(t),new wd(r.x,r.y,r.z);case $t.RoundCuboid:return r=e.coHalfExtents(t),s=e.coRoundRadius(t),new yd(r.x,r.y,r.z,s);case $t.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new vd(l,c);case $t.Segment:return a=e.coVertices(t),new xd(F.new(a[0],a[1],a[2]),F.new(a[3],a[4],a[5]));case $t.Polyline:return a=e.coVertices(t),o=e.coIndices(t),new Md(a,o);case $t.Triangle:return a=e.coVertices(t),new bd(F.new(a[0],a[1],a[2]),F.new(a[3],a[4],a[5]),F.new(a[6],a[7],a[8]));case $t.RoundTriangle:return a=e.coVertices(t),s=e.coRoundRadius(t),new Sd(F.new(a[0],a[1],a[2]),F.new(a[3],a[4],a[5]),F.new(a[6],a[7],a[8]),s);case $t.HalfSpace:return h=F.fromRaw(e.coHalfspaceNormal(t)),new Vf(h);case $t.TriMesh:a=e.coVertices(t),o=e.coIndices(t);const d=e.coTriMeshFlags(t);return new Ed(a,o,d);case $t.HeightField:const u=e.coHeightfieldScale(t),p=e.coHeightfieldHeights(t),g=e.coHeightfieldNRows(t),y=e.coHeightfieldNCols(t),f=e.coHeightFieldFlags(t);return new Td(g,y,p,u,f);case $t.ConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),new kl(a,o);case $t.RoundConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),s=e.coRoundRadius(t),new Hl(a,o,s);case $t.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new Ad(l,c);case $t.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),s=e.coRoundRadius(t),new Rd(l,c,s);case $t.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new Cd(l,c);case $t.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),s=e.coRoundRadius(t),new Pd(l,c,s);default:throw new Error("unknown shape type: "+i)}}castShape(e,t,i,r,s,a,o,l,c,h){let d=F.intoRaw(e),u=Ye.intoRaw(t),p=F.intoRaw(i),g=F.intoRaw(s),y=Ye.intoRaw(a),f=F.intoRaw(o),_=this.intoRaw(),S=r.intoRaw(),v=Is.fromRaw(null,_.castShape(d,u,p,S,g,y,f,l,c,h));return d.free(),u.free(),p.free(),g.free(),y.free(),f.free(),_.free(),S.free(),v}intersectsShape(e,t,i,r,s){let a=F.intoRaw(e),o=Ye.intoRaw(t),l=F.intoRaw(r),c=Ye.intoRaw(s),h=this.intoRaw(),d=i.intoRaw(),u=h.intersectsShape(a,o,d,l,c);return a.free(),o.free(),l.free(),c.free(),h.free(),d.free(),u}contactShape(e,t,i,r,s,a){let o=F.intoRaw(e),l=Ye.intoRaw(t),c=F.intoRaw(r),h=Ye.intoRaw(s),d=this.intoRaw(),u=i.intoRaw(),p=Ps.fromRaw(d.contactShape(o,l,u,c,h,a));return o.free(),l.free(),c.free(),h.free(),d.free(),u.free(),p}containsPoint(e,t,i){let r=F.intoRaw(e),s=Ye.intoRaw(t),a=F.intoRaw(i),o=this.intoRaw(),l=o.containsPoint(r,s,a);return r.free(),s.free(),a.free(),o.free(),l}projectPoint(e,t,i,r){let s=F.intoRaw(e),a=Ye.intoRaw(t),o=F.intoRaw(i),l=this.intoRaw(),c=Ia.fromRaw(l.projectPoint(s,a,o,r));return s.free(),a.free(),o.free(),l.free(),c}intersectsRay(e,t,i,r){let s=F.intoRaw(t),a=Ye.intoRaw(i),o=F.intoRaw(e.origin),l=F.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(s,a,o,l,r);return s.free(),a.free(),o.free(),l.free(),c.free(),h}castRay(e,t,i,r,s){let a=F.intoRaw(t),o=Ye.intoRaw(i),l=F.intoRaw(e.origin),c=F.intoRaw(e.dir),h=this.intoRaw(),d=h.castRay(a,o,l,c,r,s);return a.free(),o.free(),l.free(),c.free(),h.free(),d}castRayAndGetNormal(e,t,i,r,s){let a=F.intoRaw(t),o=Ye.intoRaw(i),l=F.intoRaw(e.origin),c=F.intoRaw(e.dir),h=this.intoRaw(),d=Ua.fromRaw(h.castRayAndGetNormal(a,o,l,c,r,s));return a.free(),o.free(),l.free(),c.free(),h.free(),d}}var Nt;(function(n){n[n.Ball=0]="Ball",n[n.Cuboid=1]="Cuboid",n[n.Capsule=2]="Capsule",n[n.Segment=3]="Segment",n[n.Polyline=4]="Polyline",n[n.Triangle=5]="Triangle",n[n.TriMesh=6]="TriMesh",n[n.HeightField=7]="HeightField",n[n.ConvexPolyhedron=9]="ConvexPolyhedron",n[n.Cylinder=10]="Cylinder",n[n.Cone=11]="Cone",n[n.RoundCuboid=12]="RoundCuboid",n[n.RoundTriangle=13]="RoundTriangle",n[n.RoundCylinder=14]="RoundCylinder",n[n.RoundCone=15]="RoundCone",n[n.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",n[n.HalfSpace=17]="HalfSpace"})(Nt||(Nt={}));var fd;(function(n){n[n.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(fd||(fd={}));var _d;(function(n){n[n.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",n[n.ORIENTED=8]="ORIENTED",n[n.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",n[n.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",n[n.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",n[n.FIX_INTERNAL_EDGES=152]="FIX_INTERNAL_EDGES"})(_d||(_d={}));class gd extends jt{constructor(e){super(),this.type=Nt.Ball,this.radius=e}intoRaw(){return Ce.ball(this.radius)}}class Vf extends jt{constructor(e){super(),this.type=Nt.HalfSpace,this.normal=e}intoRaw(){let e=F.intoRaw(this.normal),t=Ce.halfspace(e);return e.free(),t}}class wd extends jt{constructor(e,t,i){super(),this.type=Nt.Cuboid,this.halfExtents=F.new(e,t,i)}intoRaw(){return Ce.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class yd extends jt{constructor(e,t,i,r){super(),this.type=Nt.RoundCuboid,this.halfExtents=F.new(e,t,i),this.borderRadius=r}intoRaw(){return Ce.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class vd extends jt{constructor(e,t){super(),this.type=Nt.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return Ce.capsule(this.halfHeight,this.radius)}}class xd extends jt{constructor(e,t){super(),this.type=Nt.Segment,this.a=e,this.b=t}intoRaw(){let e=F.intoRaw(this.a),t=F.intoRaw(this.b),i=Ce.segment(e,t);return e.free(),t.free(),i}}class bd extends jt{constructor(e,t,i){super(),this.type=Nt.Triangle,this.a=e,this.b=t,this.c=i}intoRaw(){let e=F.intoRaw(this.a),t=F.intoRaw(this.b),i=F.intoRaw(this.c),r=Ce.triangle(e,t,i);return e.free(),t.free(),i.free(),r}}class Sd extends jt{constructor(e,t,i,r){super(),this.type=Nt.RoundTriangle,this.a=e,this.b=t,this.c=i,this.borderRadius=r}intoRaw(){let e=F.intoRaw(this.a),t=F.intoRaw(this.b),i=F.intoRaw(this.c),r=Ce.roundTriangle(e,t,i,this.borderRadius);return e.free(),t.free(),i.free(),r}}class Md extends jt{constructor(e,t){super(),this.type=Nt.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return Ce.polyline(this.vertices,this.indices)}}class Ed extends jt{constructor(e,t,i){super(),this.type=Nt.TriMesh,this.vertices=e,this.indices=t,this.flags=i}intoRaw(){return Ce.trimesh(this.vertices,this.indices,this.flags)}}class kl extends jt{constructor(e,t){super(),this.type=Nt.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?Ce.convexMesh(this.vertices,this.indices):Ce.convexHull(this.vertices)}}class Hl extends jt{constructor(e,t,i){super(),this.type=Nt.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=i}intoRaw(){return this.indices?Ce.roundConvexMesh(this.vertices,this.indices,this.borderRadius):Ce.roundConvexHull(this.vertices,this.borderRadius)}}class Td extends jt{constructor(e,t,i,r,s){super(),this.type=Nt.HeightField,this.nrows=e,this.ncols=t,this.heights=i,this.scale=r,this.flags=s}intoRaw(){let e=F.intoRaw(this.scale),t=Ce.heightfield(this.nrows,this.ncols,this.heights,e,this.flags);return e.free(),t}}class Ad extends jt{constructor(e,t){super(),this.type=Nt.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return Ce.cylinder(this.halfHeight,this.radius)}}class Rd extends jt{constructor(e,t,i){super(),this.type=Nt.RoundCylinder,this.borderRadius=i,this.halfHeight=e,this.radius=t}intoRaw(){return Ce.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class Cd extends jt{constructor(e,t){super(),this.type=Nt.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return Ce.cone(this.halfHeight,this.radius)}}class Pd extends jt{constructor(e,t,i){super(),this.type=Nt.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=i}intoRaw(){return Ce.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class Gf{constructor(e){this.raw=e||new mM}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,i,r,s,a,o,l,c,h,d,u){let p=F.intoRaw(e);d?this.raw.stepWithEvents(p,t.raw,i.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,h.raw,d.raw,u,u?u.filterContactPair:null,u?u.filterIntersectionPair:null):this.raw.step(p,t.raw,i.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw,h.raw),p.free()}}var Ld;(function(n){n[n.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",n[n.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",n[n.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",n[n.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",n[n.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",n[n.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",n[n.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",n[n.ONLY_FIXED=6]="ONLY_FIXED"})(Ld||(Ld={}));class jf{constructor(e){this.raw=e||new ad}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e){this.raw.update(e.raw)}castRay(e,t,i,r,s,a,o,l,c,h){let d=F.intoRaw(i.origin),u=F.intoRaw(i.dir),p=Bl.fromRaw(t,this.raw.castRay(e.raw,t.raw,d,u,r,s,a,o,l,c,h));return d.free(),u.free(),p}castRayAndGetNormal(e,t,i,r,s,a,o,l,c,h){let d=F.intoRaw(i.origin),u=F.intoRaw(i.dir),p=Da.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,d,u,r,s,a,o,l,c,h));return d.free(),u.free(),p}intersectionsWithRay(e,t,i,r,s,a,o,l,c,h,d){let u=F.intoRaw(i.origin),p=F.intoRaw(i.dir),g=y=>a(Da.fromRaw(t,y));this.raw.intersectionsWithRay(e.raw,t.raw,u,p,r,s,g,o,l,c,h,d),u.free(),p.free()}intersectionWithShape(e,t,i,r,s,a,o,l,c,h){let d=F.intoRaw(i),u=Ye.intoRaw(r),p=s.intoRaw(),g=this.raw.intersectionWithShape(e.raw,t.raw,d,u,p,a,o,l,c,h);return d.free(),u.free(),p.free(),g}projectPoint(e,t,i,r,s,a,o,l,c){let h=F.intoRaw(i),d=Na.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,r,s,a,o,l,c));return h.free(),d}projectPointAndGetFeature(e,t,i,r,s,a,o,l){let c=F.intoRaw(i),h=Na.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,r,s,a,o,l));return c.free(),h}intersectionsWithPoint(e,t,i,r,s,a,o,l,c){let h=F.intoRaw(i);this.raw.intersectionsWithPoint(e.raw,t.raw,h,r,s,a,o,l,c),h.free()}castShape(e,t,i,r,s,a,o,l,c,h,d,u,p,g){let y=F.intoRaw(i),f=Ye.intoRaw(r),_=F.intoRaw(s),S=a.intoRaw(),v=Oa.fromRaw(t,this.raw.castShape(e.raw,t.raw,y,f,_,S,o,l,c,h,d,u,p,g));return y.free(),f.free(),_.free(),S.free(),v}intersectionsWithShape(e,t,i,r,s,a,o,l,c,h,d){let u=F.intoRaw(i),p=Ye.intoRaw(r),g=s.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,u,p,g,a,o,l,c,h,d),u.free(),p.free(),g.free()}collidersWithAabbIntersectingAabb(e,t,i){let r=F.intoRaw(e),s=F.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(r,s,i),r.free(),s.free()}}class Id{constructor(e){this.raw=e||new gM}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,i,r,s,a,o,l,c){let h=F.intoRaw(e);const d=this.raw.serializeAll(h,t.raw,i.raw,r.raw,s.raw,a.raw,o.raw,l.raw,c.raw);return h.free(),d}deserializeAll(e){return Vl.fromRaw(this.raw.deserializeAll(e))}}class Wf{constructor(e,t){this.vertices=e,this.colors=t}}class Xf{constructor(e){this.raw=e||new oM}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,i,r,s){this.raw.render(e.raw,t.raw,i.raw,r.raw,s.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class qf{}class Yf{constructor(e,t,i,r,s){this.params=t,this.bodies=i,this.colliders=r,this.queries=s,this.raw=new uM(e),this.rawCharacterCollision=new qm,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=F.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(e){this.raw.setNormalNudgeFactor(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,i){this.raw.enableAutostep(e,t,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,i,r,s){let a=F.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,i,r,this.colliders.castClosure(s)),a.free()}computedMovement(){return F.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return t=t??new qf,t.translationDeltaApplied=F.fromRaw(i.translationDeltaApplied()),t.translationDeltaRemaining=F.fromRaw(i.translationDeltaRemaining()),t.toi=i.toi(),t.witness1=F.fromRaw(i.worldWitness1()),t.witness2=F.fromRaw(i.worldWitness2()),t.normal1=F.fromRaw(i.worldNormal1()),t.normal2=F.fromRaw(i.worldNormal2()),t.collider=this.colliders.get(i.handle()),t}else return null}}class Jf{constructor(e,t,i,r){this.raw=new cM(e.handle),this.bodies=t,this.colliders=i,this.queries=r,this._chassis=e}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(e,t,i,r){this.raw.update_vehicle(e,this.bodies.raw,this.colliders.raw,this.queries.raw,t,i,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(e){this.raw.set_index_up_axis(e)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(e){this.raw.set_index_forward_axis(e)}addWheel(e,t,i,r,s){let a=F.intoRaw(e),o=F.intoRaw(t),l=F.intoRaw(i);this.raw.add_wheel(a,o,l,r,s),a.free(),o.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(e){return F.fromRaw(this.raw.wheel_chassis_connection_point_cs(e))}setWheelChassisConnectionPointCs(e,t){let i=F.intoRaw(t);this.raw.set_wheel_chassis_connection_point_cs(e,i),i.free()}wheelSuspensionRestLength(e){return this.raw.wheel_suspension_rest_length(e)}setWheelSuspensionRestLength(e,t){this.raw.set_wheel_suspension_rest_length(e,t)}wheelMaxSuspensionTravel(e){return this.raw.wheel_max_suspension_travel(e)}setWheelMaxSuspensionTravel(e,t){this.raw.set_wheel_max_suspension_travel(e,t)}wheelRadius(e){return this.raw.wheel_radius(e)}setWheelRadius(e,t){this.raw.set_wheel_radius(e,t)}wheelSuspensionStiffness(e){return this.raw.wheel_suspension_stiffness(e)}setWheelSuspensionStiffness(e,t){this.raw.set_wheel_suspension_stiffness(e,t)}wheelSuspensionCompression(e){return this.raw.wheel_suspension_compression(e)}setWheelSuspensionCompression(e,t){this.raw.set_wheel_suspension_compression(e,t)}wheelSuspensionRelaxation(e){return this.raw.wheel_suspension_relaxation(e)}setWheelSuspensionRelaxation(e,t){this.raw.set_wheel_suspension_relaxation(e,t)}wheelMaxSuspensionForce(e){return this.raw.wheel_max_suspension_force(e)}setWheelMaxSuspensionForce(e,t){this.raw.set_wheel_max_suspension_force(e,t)}wheelBrake(e){return this.raw.wheel_brake(e)}setWheelBrake(e,t){this.raw.set_wheel_brake(e,t)}wheelSteering(e){return this.raw.wheel_steering(e)}setWheelSteering(e,t){this.raw.set_wheel_steering(e,t)}wheelEngineForce(e){return this.raw.wheel_engine_force(e)}setWheelEngineForce(e,t){this.raw.set_wheel_engine_force(e,t)}wheelDirectionCs(e){return F.fromRaw(this.raw.wheel_direction_cs(e))}setWheelDirectionCs(e,t){let i=F.intoRaw(t);this.raw.set_wheel_direction_cs(e,i),i.free()}wheelAxleCs(e){return F.fromRaw(this.raw.wheel_axle_cs(e))}setWheelAxleCs(e,t){let i=F.intoRaw(t);this.raw.set_wheel_axle_cs(e,i),i.free()}wheelFrictionSlip(e){return this.raw.wheel_friction_slip(e)}setWheelFrictionSlip(e,t){this.raw.set_wheel_friction_slip(e,t)}wheelSideFrictionStiffness(e){return this.raw.wheel_side_friction_stiffness(e)}setWheelSideFrictionStiffness(e,t){this.raw.set_wheel_side_friction_stiffness(e,t)}wheelRotation(e){return this.raw.wheel_rotation(e)}wheelForwardImpulse(e){return this.raw.wheel_forward_impulse(e)}wheelSideImpulse(e){return this.raw.wheel_side_impulse(e)}wheelSuspensionForce(e){return this.raw.wheel_suspension_force(e)}wheelContactNormal(e){return F.fromRaw(this.raw.wheel_contact_normal_ws(e))}wheelContactPoint(e){return F.fromRaw(this.raw.wheel_contact_point_ws(e))}wheelSuspensionLength(e){return this.raw.wheel_suspension_length(e)}wheelHardPoint(e){return F.fromRaw(this.raw.wheel_hard_point_ws(e))}wheelIsInContact(e){return this.raw.wheel_is_in_contact(e)}wheelGroundObject(e){return this.colliders.get(this.raw.wheel_ground_object(e))}}class Vl{constructor(e,t,i,r,s,a,o,l,c,h,d,u,p,g){this.gravity=e,this.integrationParameters=new Sf(t),this.islands=new Ff(i),this.broadPhase=new Bf(r),this.narrowPhase=new kf(s),this.bodies=new bf(a),this.colliders=new Zf(o),this.impulseJoints=new Lf(l),this.multibodyJoints=new Of(c),this.ccdSolver=new zf(h),this.queryPipeline=new jf(d),this.physicsPipeline=new Gf(u),this.serializationPipeline=new Id(p),this.debugRenderPipeline=new Xf(g),this.characterControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.vehicleControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.vehicleControllers=void 0}static fromRaw(e){return e?new Vl(F.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new Id().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new Wf(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(e){this.integrationParameters.lengthUnit=e}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(e){this.integrationParameters.numSolverIterations=e}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(e){this.integrationParameters.numAdditionalFrictionIterations=e}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(e){this.integrationParameters.numInternalPgsIterations=e}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}switchToSmallStepsPgsSolverWithoutWarmstart(){this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart()}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new Yf(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createVehicleController(e){let t=new Jf(e,this.bodies,this.colliders,this.queryPipeline);return this.vehicleControllers.add(t),t}removeVehicleController(e){this.vehicleControllers.delete(e),e.free()}createCollider(e,t){let i=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,i)}createImpulseJoint(e,t,i,r){return this.impulseJoints.createJoint(this.bodies,e,t.handle,i.handle,r)}createMultibodyJoint(e,t,i,r){return this.multibodyJoints.createJoint(e,t.handle,i.handle,r)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,i,r,s,a,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,i,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,i,r,s,a,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,i,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,i,r,s,a,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,i,r,s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,i,r,s,a,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,i,r,s,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,i,r,s,a,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,i,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(e,t,i,r,s,a){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,i,r?r.handle:null,s?s.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(e,t,i,r,s,a,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),i,r,s?s.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(e,t,i,r,s,a,o,l,c,h,d,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,i,r,s,a,o,l,c,h?h.handle:null,d?d.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,i,r,s,a,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,i,this.colliders.castClosure(r),s,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,i){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(i))}contactPairsWith(e,t){this.narrowPhase.contactPairsWith(e.handle,this.colliders.castClosure(t))}intersectionPairsWith(e,t){this.narrowPhase.intersectionPairsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,i){this.narrowPhase.contactPair(e.handle,t.handle,i)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}}var Gl;(function(n){n[n.NONE=0]="NONE",n[n.COLLISION_EVENTS=1]="COLLISION_EVENTS",n[n.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Gl||(Gl={}));class Kf{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return F.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return F.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class lN{constructor(e,t){this.raw=t||new ef(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new Kf;this.raw.drainContactForceEvents(i=>{t.raw=i,e(t),t.free()})}clear(){this.raw.clear()}}var jl;(function(n){n[n.NONE=0]="NONE",n[n.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",n[n.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(jl||(jl={}));var Nd;(function(n){n[n.EMPTY=0]="EMPTY",n[n.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Nd||(Nd={}));var Wl;(function(n){n[n.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",n[n.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",n[n.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",n[n.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",n[n.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",n[n.FIXED_FIXED=32]="FIXED_FIXED",n[n.DEFAULT=15]="DEFAULT",n[n.ALL=60943]="ALL"})(Wl||(Wl={}));class Ud{constructor(e,t,i,r){this.colliderSet=e,this.handle=t,this._parent=i,this._shape=r}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=jt.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return F.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Ye.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(e){return this.colliderSet.raw.coSetContactSkin(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,i,r){let s=F.intoRaw(t),a=F.intoRaw(i),o=Ye.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,e,s,a,o),s.free(),a.free(),o.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return F.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=F.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return F.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=F.intoRaw(e),i=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),i}projectPoint(e,t){let i=F.intoRaw(e),r=Ia.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,i,t));return i.free(),r}intersectsRay(e,t){let i=F.intoRaw(e.origin),r=F.intoRaw(e.dir),s=this.colliderSet.raw.coIntersectsRay(this.handle,i,r,t);return i.free(),r.free(),s}castShape(e,t,i,r,s,a,o,l){let c=F.intoRaw(e),h=F.intoRaw(i),d=Ye.intoRaw(r),u=F.intoRaw(s),p=t.intoRaw(),g=Is.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,c,p,h,d,u,a,o,l));return c.free(),h.free(),d.free(),u.free(),p.free(),g}castCollider(e,t,i,r,s,a){let o=F.intoRaw(e),l=F.intoRaw(i),c=Oa.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,o,t.handle,l,r,s,a));return o.free(),l.free(),c}intersectsShape(e,t,i){let r=F.intoRaw(t),s=Ye.intoRaw(i),a=e.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,s);return r.free(),s.free(),a.free(),o}contactShape(e,t,i,r){let s=F.intoRaw(t),a=Ye.intoRaw(i),o=e.intoRaw(),l=Ps.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,s,a,r));return s.free(),a.free(),o.free(),l}contactCollider(e,t){return Ps.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,i){let r=F.intoRaw(e.origin),s=F.intoRaw(e.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,s,t,i);return r.free(),s.free(),a}castRayAndGetNormal(e,t,i){let r=F.intoRaw(e.origin),s=F.intoRaw(e.dir),a=Ua.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,s,t,i));return r.free(),s.free(),a}}var Fn;(function(n){n[n.Density=0]="Density",n[n.Mass=1]="Mass",n[n.MassProps=2]="MassProps"})(Fn||(Fn={}));class Ut{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=Fn.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Ye.identity(),this.translation=F.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=La.Average,this.restitutionCombineRule=La.Average,this.activeCollisionTypes=Wl.DEFAULT,this.activeEvents=Gl.NONE,this.activeHooks=jl.NONE,this.mass=0,this.centerOfMass=F.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=F.zeros(),this.angularInertiaLocalFrame=Ye.identity()}static ball(e){const t=new gd(e);return new Ut(t)}static capsule(e,t){const i=new vd(e,t);return new Ut(i)}static segment(e,t){const i=new xd(e,t);return new Ut(i)}static triangle(e,t,i){const r=new bd(e,t,i);return new Ut(r)}static roundTriangle(e,t,i,r){const s=new Sd(e,t,i,r);return new Ut(s)}static polyline(e,t){const i=new Md(e,t);return new Ut(i)}static trimesh(e,t,i){const r=new Ed(e,t,i);return new Ut(r)}static cuboid(e,t,i){const r=new wd(e,t,i);return new Ut(r)}static roundCuboid(e,t,i,r){const s=new yd(e,t,i,r);return new Ut(s)}static heightfield(e,t,i,r,s){const a=new Td(e,t,i,r,s);return new Ut(a)}static cylinder(e,t){const i=new Ad(e,t);return new Ut(i)}static roundCylinder(e,t,i){const r=new Rd(e,t,i);return new Ut(r)}static cone(e,t){const i=new Cd(e,t);return new Ut(i)}static roundCone(e,t,i){const r=new Pd(e,t,i);return new Ut(r)}static convexHull(e){const t=new kl(e,null);return new Ut(t)}static convexMesh(e,t){const i=new kl(e,t);return new Ut(i)}static roundConvexHull(e,t){const i=new Hl(e,null,t);return new Ut(i)}static roundConvexMesh(e,t,i){const r=new Hl(e,t,i);return new Ut(r)}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return Ye.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setContactSkin(e){return this.contactSkin=e,this}setDensity(e){return this.massPropsMode=Fn.Density,this.density=e,this}setMass(e){return this.massPropsMode=Fn.Mass,this.mass=e,this}setMassProperties(e,t,i,r){return this.massPropsMode=Fn.MassProps,this.mass=e,F.copy(this.centerOfMass,t),F.copy(this.principalAngularInertia,i),Ye.copy(this.angularInertiaLocalFrame,r),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class Zf{constructor(e){this.raw=e||new At,this.map=new Fl,e&&e.forEachColliderHandle(t=>{this.map.set(t,new Ud(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,i){let r=i!=null&&i!=null;if(r&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let s=t.shape.intoRaw(),a=F.intoRaw(t.translation),o=Ye.intoRaw(t.rotation),l=F.intoRaw(t.centerOfMass),c=F.intoRaw(t.principalAngularInertia),h=Ye.intoRaw(t.angularInertiaLocalFrame),d=this.raw.createCollider(t.enabled,s,a,o,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,t.contactSkin,r,r?i:0,e.raw);s.free(),a.free(),o.free(),l.free(),c.free(),h.free();let u=r?e.get(i):null,p=new Ud(this,d,u,t.shape);return this.map.set(d,p),p}remove(e,t,i,r){this.raw.remove(e,t.raw,i.raw,r),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}function cN(){return iM()}const Dr=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return Wl},get ActiveEvents(){return Gl},get ActiveHooks(){return jl},Ball:gd,BroadPhase:Bf,CCDSolver:zf,Capsule:vd,CharacterCollision:qf,get CoefficientCombineRule(){return La},Collider:Ud,ColliderDesc:Ut,ColliderSet:Zf,ColliderShapeCastHit:Oa,Cone:Cd,ConvexPolyhedron:kl,Cuboid:wd,Cylinder:Ad,DebugRenderBuffers:Wf,DebugRenderPipeline:Xf,DynamicRayCastVehicleController:Jf,EventQueue:lN,get FeatureType(){return Ls},FixedImpulseJoint:Mf,FixedMultibodyJoint:If,GenericImpulseJoint:Cf,HalfSpace:Vf,get HeightFieldFlags(){return fd},Heightfield:Td,ImpulseJoint:Zi,ImpulseJointSet:Lf,IntegrationParameters:Sf,IslandManager:Ff,get JointAxesMask(){return ud},JointData:Ur,get JointType(){return ei},KinematicCharacterController:Yf,get MassPropsMode(){return Fn},get MotorModel(){return dd},MultibodyJoint:nn,MultibodyJointSet:Of,NarrowPhase:kf,PhysicsPipeline:Gf,PointColliderProjection:Na,PointProjection:Ia,Polyline:Md,PrismaticImpulseJoint:Af,PrismaticMultibodyJoint:Nf,Quaternion:ld,get QueryFilterFlags(){return Ld},QueryPipeline:jf,Ray:oN,RayColliderHit:Bl,RayColliderIntersection:Da,RayIntersection:Ua,RevoluteImpulseJoint:Rf,RevoluteMultibodyJoint:Uf,RigidBody:hd,RigidBodyDesc:ur,RigidBodySet:bf,get RigidBodyType(){return Ki},RopeImpulseJoint:Ef,RotationOps:Ye,RoundCone:Pd,RoundConvexPolyhedron:Hl,RoundCuboid:yd,RoundCylinder:Rd,RoundTriangle:Sd,SdpMatrix3:xf,SdpMatrix3Ops:cd,Segment:xd,SerializationPipeline:Id,Shape:jt,ShapeCastHit:Is,ShapeContact:Ps,get ShapeType(){return Nt},get SolverFlags(){return Nd},SphericalImpulseJoint:Pf,SphericalMultibodyJoint:Df,SpringImpulseJoint:Tf,TempContactForceEvent:Kf,TempContactManifold:Hf,TriMesh:Ed,get TriMeshFlags(){return _d},Triangle:bd,UnitImpulseJoint:pd,UnitMultibodyJoint:md,Vector3:vf,VectorOps:F,World:Vl,version:cN},Symbol.toStringTag,{value:"Module"})),ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qf=1234567;const $f=Math.PI/180,e_=180/Math.PI;function hN(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function pr(n,e,t){return Math.max(e,Math.min(t,n))}function t_(n,e){return(n%e+e)%e}function dN(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function uN(n,e,t){return n!==e?(t-n)/(e-n):0}function i_(n,e,t){return(1-t)*n+t*e}function pN(n,e,t,i){return i_(n,e,1-Math.exp(-t*i))}function mN(n,e=1){return e-Math.abs(t_(n,e*2)-e)}function fN(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _N(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gN(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wN(n,e){return n+Math.random()*(e-n)}function yN(n){return n*(.5-Math.random())}function vN(n){n!==void 0&&(Qf=n);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xN(n){return n*$f}function bN(n){return n*e_}function SN(n){return(n&n-1)===0&&n!==0}function MN(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function EN(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function TN(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("../math.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function AN(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function RN(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ns={DEG2RAD:$f,RAD2DEG:e_,generateUUID:hN,clamp:pr,euclideanModulo:t_,mapLinear:dN,inverseLerp:uN,lerp:i_,damp:pN,pingpong:mN,smoothstep:fN,smootherstep:_N,randInt:gN,randFloat:wN,randFloatSpread:yN,seededRandom:vN,degToRad:xN,radToDeg:bN,isPowerOfTwo:SN,ceilPowerOfTwo:MN,floorPowerOfTwo:EN,setQuaternionFromProperEuler:TN,normalize:RN,denormalize:AN};class lt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==p||h!==g){let f=1-o;const _=l*u+c*p+h*g+d*y,S=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const I=Math.sqrt(v),R=Math.atan2(I,_*S);f=Math.sin(f*R)/I,o=Math.sin(o*R)/I}const M=o*S;if(l=l*f+u*M,c=c*f+p*M,h=h*f+g*M,d=d*f+y*M,f===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new lt(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("../math.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pr(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,t=0,i=0){this.isVector3=!0,_e.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new _e(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(r_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this.z=Math.abs(this.z),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new _e,r_=new lt,Xl=2e3,n_=2001;class Qi{constructor(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f){this.isMatrix4=!0,Qi.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f)}extractPosition(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)}multiplyToArray(e,t,i){return console.error("THREE.Matrix4: .multiplyToArray() has been removed."),this}setRotationFromQuaternion(e){return this.makeRotationFromQuaternion(e)}set(e,t,i,r,s,a,o,l,c,h,d,u,p,g,y,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=p,_[7]=g,_[11]=y,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qi().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CN,e,PN)}lookAt(e,t,i){const r=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),sn.crossVectors(i,Ci),sn.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),sn.crossVectors(i,Ci)),sn.normalize(),ql.crossVectors(Ci,sn),r[0]=sn.x,r[4]=ql.x,r[8]=Ci.x,r[1]=sn.y,r[5]=ql.y,r[9]=Ci.y,r[2]=sn.z,r[6]=ql.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],y=i[6],f=i[10],_=i[14],S=i[3],v=i[7],M=i[11],I=i[15],R=r[0],A=r[4],z=r[8],E=r[12],x=r[1],O=r[5],G=r[9],X=r[13],K=r[2],te=r[6],Y=r[10],ie=r[14],J=r[3],oe=r[7],pe=r[11],be=r[15];return s[0]=a*R+o*x+l*K+c*J,s[4]=a*A+o*O+l*te+c*oe,s[8]=a*z+o*G+l*Y+c*pe,s[12]=a*E+o*X+l*ie+c*be,s[1]=h*R+d*x+u*K+p*J,s[5]=h*A+d*O+u*te+p*oe,s[9]=h*z+d*G+u*Y+p*pe,s[13]=h*E+d*X+u*ie+p*be,s[2]=g*R+y*x+f*K+_*J,s[6]=g*A+y*O+f*te+_*oe,s[10]=g*z+y*G+f*Y+_*pe,s[14]=g*E+y*X+f*ie+_*be,s[3]=S*R+v*x+M*K+I*J,s[7]=S*A+v*O+M*te+I*oe,s[11]=S*z+v*G+M*Y+I*pe,s[15]=S*E+v*X+M*ie+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],y=e[7],f=e[11],_=e[15];return g*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*p-i*l*p)+y*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+f*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+_*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],y=e[13],f=e[14],_=e[15],S=d*f*c-y*u*c+y*l*p-o*f*p-d*l*_+o*u*_,v=g*u*c-h*f*c-g*l*p+a*f*p+h*l*_-a*u*_,M=h*y*c-g*d*c+g*o*p-a*y*p-h*o*_+a*d*_,I=g*d*l-h*y*l-g*o*u+a*y*u+h*o*f-a*d*f,R=t*S+i*v+r*M+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(y*u*s-d*f*s-y*r*p+i*f*p+d*r*_-i*u*_)*A,e[2]=(o*f*s-y*l*s+y*r*c-i*f*c-o*r*_+i*l*_)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*p-i*l*p)*A,e[4]=v*A,e[5]=(h*f*s-g*u*s+g*r*p-t*f*p-h*r*_+t*u*_)*A,e[6]=(g*l*s-a*f*s-g*r*c+t*f*c+a*r*_-t*l*_)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*A,e[8]=M*A,e[9]=(g*d*s-h*y*s-g*i*p+t*y*p+h*i*_-t*d*_)*A,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*_+t*o*_)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=I*A,e[13]=(h*y*r-g*d*r+g*i*u-t*y*u-h*i*f+t*d*f)*A,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*f-t*o*f)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,y=a*h,f=a*d,_=o*d,S=l*c,v=l*h,M=l*d,I=i.x,R=i.y,A=i.z;return r[0]=(1-(y+_))*I,r[1]=(p+M)*I,r[2]=(g-v)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+_))*R,r[6]=(f+S)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(f-S)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const a=Us.set(r[4],r[5],r[6]).length(),o=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const l=1/s,c=1/a,h=1/o;return $i.elements[0]*=l,$i.elements[1]*=l,$i.elements[2]*=l,$i.elements[4]*=c,$i.elements[5]*=c,$i.elements[6]*=c,$i.elements[8]*=h,$i.elements[9]*=h,$i.elements[10]*=h,t.setFromRotationMatrix($i),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Xl){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let p,g;if(o===Xl)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===n_)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Xl){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-s),u=(t+e)*c,p=(i+r)*h;let g,y;if(o===Xl)g=(a+s)*d,y=-2*d;else if(o===n_)g=s*d,y=-1*d;else throw new Error("../math.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new _e,$i=new Qi,CN=new _e(0,0,0),PN=new _e(1,1,1),sn=new _e,ql=new _e,Ci=new _e,s_=new Qi,a_=new lt;class za{constructor(e=0,t=0,i=0,r=za.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new za(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pr(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pr(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pr(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pr(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("../math.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(e){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class an{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new an(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pr(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}an.isVector2=!0;class gi{constructor(e=0,t=0,i=0,r=1){gi.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new gi(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],d=a[5],u=a[9],p=a[2],g=a[6],y=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(o+1)/2,S=(d+1)/2,v=(y+1)/2,M=(l+h)/4,I=(c+p)/4,R=(u+g)/4;return _>S&&_>v?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=M/i,s=I/i):S>v?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=R/r):v<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),i=I/s,r=R/s),this.set(i,r,s,t),this}let f=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(g-u)/f,this.y=(c-p)/f,this.z=(h-l)/f,this.w=Math.acos((o+d+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mr{constructor(e,t,i,r,s,a,o,l,c){mr.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],y=r[0],f=r[3],_=r[6],S=r[1],v=r[4],M=r[7],I=r[2],R=r[5],A=r[8];return s[0]=a*y+o*S+l*I,s[3]=a*f+o*v+l*R,s[6]=a*_+o*M+l*A,s[1]=c*y+h*S+d*I,s[4]=c*f+h*v+d*R,s[7]=c*_+h*M+d*A,s[2]=u*y+p*S+g*I,s[5]=u*f+p*v+g*R,s[8]=u*_+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Od.makeScale(e,t)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,t){return this.premultiply(Od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new mr().fromArray(this.elements)}}const Od=new mr;var oi;(function(n){n[n.Random=0]="Random",n[n.Loop=1]="Loop",n[n.PingPong=2]="PingPong",n[n.Burst=3]="Burst"})(oi||(oi={}));function Ds(n,e,t,i){let r;switch(oi.Random===n?e=Math.random():oi.Burst===n&&i.isBursting&&(e=i.burstParticleIndex/i.burstParticleCount),t>0?r=Math.floor(e/t)*t:r=e,n){case oi.Loop:r=r%1;break;case oi.PingPong:r=Math.abs(r%2-1);break}return r}class er{constructor(e,t,i,r){this.p=[e,t,i,r]}genValue(e){const t=e*e,i=e*e*e,r=1-e,s=r*r,a=s*r;return this.p[0]*a+this.p[1]*s*e*3+this.p[2]*r*t*3+this.p[3]*i}derivativeCoefficients(e){const t=[];for(let i=e,r=i.length-1;r>0;r--){const s=[];for(let a=0;a<r;a++){const o=r*(i[a+1]-i[a]);s.push(o)}t.push(s),i=s}return t}getSlope(e){const t=this.derivativeCoefficients(this.p)[0],i=1-e,r=i*i,s=i*e*2,a=e*e;return r*t[0]+s*t[1]+a*t[2]}controlCurve(e,t){this.p[1]=e/3+this.p[0],this.p[2]=this.p[3]-t/3}hull(e){let t=this.p,i=[],r,s=0,a=0,o=0;const l=[];for(l[s++]=t[0],l[s++]=t[1],l[s++]=t[2],l[s++]=t[3];t.length>1;){for(i=[],a=0,o=t.length-1;a<o;a++)r=e*t[a]+(1-e)*t[a+1],l[s++]=r,i.push(r);t=i}return l}split(e){const t=this.hull(e);return{left:new er(t[0],t[4],t[7],t[9]),right:new er(t[9],t[8],t[6],t[3]),span:t}}clone(){return new er(this.p[0],this.p[1],this.p[2],this.p[3])}toJSON(){return{p0:this.p[0],p1:this.p[1],p2:this.p[2],p3:this.p[3]}}static fromJSON(e){return new er(e.p0,e.p1,e.p2,e.p3)}}const Fa=n=>({r:n.x,g:n.y,b:n.z,a:n.w}),Ba=n=>new gi(n.r,n.g,n.b,n.a),LN=(n,e)=>{switch(e){case"Vector3":return new _e(n.x,n.y,n.z);case"Vector4":return new gi(n.x,n.y,n.z,n.w);case"Color":return new _e(n.r,n.g,n.b);case"Number":return n;default:return n}},IN=(n,e)=>{switch(e){case"Vector3":return{x:n.x,y:n.y,z:n.z};case"Vector4":return{x:n.x,y:n.y,z:n.z,w:n.w};case"Color":return{r:n.x,g:n.y,b:n.z};case"Number":return n;default:return n}};class ka{constructor(e,t){this.a=e,this.b=t,this.type="value"}startGen(e){}genColor(e,t){const i=Math.random();return t.copy(this.a).lerp(this.b,i)}toJSON(){return{type:"RandomColor",a:Fa(this.a),b:Fa(this.b)}}static fromJSON(e){return new ka(Ba(e.a),Ba(e.b))}clone(){return new ka(this.a.clone(),this.b.clone())}}class Os{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t){return this.indexCount===-1&&this.startGen(e),t.copy(this.a).lerp(this.b,e[this.indexCount])}toJSON(){return{type:"ColorRange",a:Fa(this.a),b:Fa(this.b)}}static fromJSON(e){return new Os(Ba(e.a),Ba(e.b))}clone(){return new Os(this.a.clone(),this.b.clone())}}class on{constructor(e,t){this.subType=t,this.type="function",this.keys=e}findKey(e){let t=0,i=0,r=this.keys.length-1;for(;i+1<r;)if(t=Math.floor((i+r)/2),e<this.getStartX(t))r=t-1;else if(e>this.getEndX(t))i=t+1;else return t;for(let s=i;s<=r;s++)if(e>=this.getStartX(s)&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.keys[e][1]}getEndX(e){return e+1<this.keys.length?this.keys[e+1][1]:1}genValue(e,t){const i=this.findKey(t);return this.subType==="Number"?i===-1?this.keys[0][0]:i+1>=this.keys.length?this.keys[this.keys.length-1][0]:(this.keys[i+1][0]-this.keys[i][0])*((t-this.getStartX(i))/(this.getEndX(i)-this.getStartX(i)))+this.keys[i][0]:i===-1?e.copy(this.keys[0][0]):i+1>=this.keys.length?e.copy(this.keys[this.keys.length-1][0]):e.copy(this.keys[i][0]).lerp(this.keys[i+1][0],(t-this.getStartX(i))/(this.getEndX(i)-this.getStartX(i)))}toJSON(){return this.keys[0][0].constructor.name,{type:"CLinearFunction",subType:this.subType,keys:this.keys.map(([e,t])=>({value:IN(e,this.subType),pos:t}))}}static fromJSON(e){return new on(e.keys.map(t=>[LN(t.value,e.subType),t.pos]),e.subType)}clone(){return this.subType==="Number"?new on(this.keys.map(([e,t])=>[e,t]),this.subType):new on(this.keys.map(([e,t])=>[e.clone(),t]),this.subType)}}const Yl=new _e;class ln{constructor(e=[[new _e(0,0,0),0],[new _e(1,1,1),0]],t=[[1,0],[1,1]]){this.type="function",this.color=new on(e,"Color"),this.alpha=new on(t,"Number")}genColor(e,t,i){return this.color.genValue(Yl,i),t.set(Yl.x,Yl.y,Yl.z,this.alpha.genValue(1,i))}toJSON(){return{type:"Gradient",color:this.color.toJSON(),alpha:this.alpha.toJSON()}}static fromJSON(e){if(e.functions){const t=e.functions.map(i=>[Os.fromJSON(i.function).a,i.start]);return e.functions.length>0&&t.push([Os.fromJSON(e.functions[e.functions.length-1].function).b,1]),new ln(t.map(i=>[new _e(i[0].x,i[0].y,i[0].z),i[1]]),t.map(i=>[i[0].w,i[1]]))}else{const t=new ln;return t.alpha=on.fromJSON(e.alpha),t.color=on.fromJSON(e.color),t}}clone(){const e=new ln;return e.alpha=this.alpha.clone(),e.color=this.color.clone(),e}startGen(e){}}const zd=new gi;class Jl{constructor(e,t){this.indexCount=0,this.type="function",this.gradient1=e,this.gradient2=t}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t,i){return this.gradient1.genColor(e,t,i),this.gradient2.genColor(e,zd,i),e&&e[this.indexCount]!==void 0?t.lerp(zd,e[this.indexCount]):t.lerp(zd,Math.random()),t}toJSON(){return{type:"RandomColorBetweenGradient",gradient1:this.gradient1.toJSON(),gradient2:this.gradient2.toJSON()}}static fromJSON(e){return new Jl(ln.fromJSON(e.gradient1),ln.fromJSON(e.gradient2))}clone(){return new Jl(this.gradient1.clone(),this.gradient2.clone())}}class Bn{constructor(e){this.color=e,this.type="value"}startGen(e){}genColor(e,t){return t.copy(this.color)}toJSON(){return{type:"ConstantColor",color:Fa(this.color)}}static fromJSON(e){return new Bn(Ba(e.color))}clone(){return new Bn(this.color.clone())}}function Fd(n){switch(n.type){case"ConstantColor":return Bn.fromJSON(n);case"ColorRange":return Os.fromJSON(n);case"RandomColor":return ka.fromJSON(n);case"Gradient":return ln.fromJSON(n);case"RandomColorBetweenGradient":return Jl.fromJSON(n);default:return new Bn(new gi(1,1,1,1))}}class nt{constructor(e){this.value=e,this.type="value"}startGen(e){}genValue(e){return this.value}toJSON(){return{type:"ConstantValue",value:this.value}}static fromJSON(e){return new nt(e.value)}clone(){return new nt(this.value)}}class fr{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type="value"}startGen(e){this.indexCount=e.length,e.push(Math.random())}genValue(e){return this.indexCount===-1&&this.startGen(e),Ns.lerp(this.a,this.b,e[this.indexCount])}toJSON(){return{type:"IntervalValue",a:this.a,b:this.b}}static fromJSON(e){return new fr(e.a,e.b)}clone(){return new fr(this.a,this.b)}}class NN{constructor(){this.functions=new Array}findFunction(e){let t=0,i=0,r=this.functions.length-1;for(;i+1<r;)if(t=Math.floor((i+r)/2),e<this.getStartX(t))r=t-1;else if(e>this.getEndX(t))i=t+1;else return t;for(let s=i;s<=r;s++)if(e>=this.functions[s][1]&&e<=this.getEndX(s))return s;return-1}getStartX(e){return this.functions[e][1]}setStartX(e,t){e>0&&(this.functions[e][1]=t)}getEndX(e){return e+1<this.functions.length?this.functions[e+1][1]:1}setEndX(e,t){e+1<this.functions.length&&(this.functions[e+1][1]=t)}insertFunction(e,t){const i=this.findFunction(e);this.functions.splice(i+1,0,[t,e])}removeFunction(e){return this.functions.splice(e,1)[0][0]}getFunction(e){return this.functions[e][0]}setFunction(e,t){this.functions[e][0]=t}get numOfFunctions(){return this.functions.length}}class cn extends NN{constructor(e=[[new er(0,1/3,1/3*2,1),0]]){super(),this.type="function",this.functions=e}genValue(e,t=0){const i=this.findFunction(t);return i===-1?0:this.functions[i][0].genValue((t-this.getStartX(i))/(this.getEndX(i)-this.getStartX(i)))}toSVG(e,t){if(t<1)return"";let i=["M",0,this.functions[0][0].p[0]].join(" ");for(let r=1/t;r<=1;r+=1/t)i=[i,"L",r*e,this.genValue(void 0,r)].join(" ");return i}toJSON(){return{type:"PiecewiseBezier",functions:this.functions.map(([e,t])=>({function:e.toJSON(),start:t}))}}static fromJSON(e){return new cn(e.functions.map(t=>[er.fromJSON(t.function),t.start]))}clone(){return new cn(this.functions.map(([e,t])=>[e.clone(),t]))}startGen(e){}}function Qe(n){switch(n.type){case"ConstantValue":return nt.fromJSON(n);case"IntervalValue":return fr.fromJSON(n);case"PiecewiseBezier":return cn.fromJSON(n);default:return new nt(0)}}class Ha{constructor(){this.indexCount=0,this.type="rotation"}startGen(e){this.indexCount=e.length,e.push(new lt);let t,i,r,s,a,o;do t=Math.random()*2-1,i=Math.random()*2-1,r=t*t+i*i;while(r>1);do s=Math.random()*2-1,a=Math.random()*2-1,o=s*s+a*a;while(o>1);const l=Math.sqrt((1-r)/o);e[this.indexCount].set(t,i,l*s,l*a)}genValue(e,t,i,r){return this.indexCount===-1&&this.startGen(e),t.copy(e[this.indexCount]),t}toJSON(){return{type:"RandomQuat"}}static fromJSON(e){return new Ha}clone(){return new Ha}}class Va{constructor(e,t){this.axis=e,this.angle=t,this.type="rotation"}startGen(e){this.angle.startGen(e)}genValue(e,t,i,r){return t.setFromAxisAngle(this.axis,this.angle.genValue(e,r)*i)}toJSON(){return{type:"AxisAngle",axis:{x:this.axis.x,y:this.axis.y,z:this.axis.z},angle:this.angle.toJSON()}}static fromJSON(e){return new Va(new _e(e.axis.x,e.axis.y,e.axis.z),Qe(e.angle))}clone(){return new Va(this.axis.clone(),this.angle.clone())}}class Kl{constructor(e,t,i,r){this.angleX=e,this.angleY=t,this.angleZ=i,this.type="rotation",this.eular=new za(0,0,0,r)}startGen(e){this.angleX.startGen(e),this.angleY.startGen(e),this.angleZ.startGen(e)}genValue(e,t,i,r){return this.eular.set(this.angleX.genValue(e,r)*i,this.angleY.genValue(e,r)*i,this.angleZ.genValue(e,r)*i),t.setFromEuler(this.eular)}toJSON(){return{type:"Euler",angleX:this.angleX.toJSON(),angleY:this.angleY.toJSON(),angleZ:this.angleZ.toJSON(),eulerOrder:this.eular.order}}static fromJSON(e){return new Kl(Qe(e.angleX),Qe(e.angleY),Qe(e.angleZ),e.eulerOrder)}clone(){return new Kl(this.angleX,this.angleY,this.angleZ,this.eular.order)}}function o_(n){switch(n.type){case"AxisAngle":return Va.fromJSON(n);case"Euler":return Kl.fromJSON(n);case"RandomQuat":return Ha.fromJSON(n);default:return new Ha}}class kn{constructor(e,t,i){this.x=e,this.y=t,this.z=i,this.type="vec3function"}startGen(e){this.x.startGen(e),this.y.startGen(e),this.z.startGen(e)}genValue(e,t,i){return t.set(this.x.genValue(e,i),this.y.genValue(e,i),this.z.genValue(e,i))}toJSON(){return{type:"Vector3Function",x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new kn(Qe(e.x),Qe(e.y),Qe(e.z))}clone(){return new kn(this.x,this.y,this.z)}}function UN(n){switch(n.type){case"Vector3Function":return kn.fromJSON(n);default:return new kn(new nt(0),new nt(0),new nt(0))}}function Zl(n){switch(n.type){case"ConstantValue":case"IntervalValue":case"PiecewiseBezier":return Qe(n);case"AxisAngle":case"RandomQuat":case"Euler":return o_(n);case"Vector3Function":return UN(n);default:return new nt(0)}}class Ga{constructor(e={}){this.type="cone",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.angle=e.angle??Math.PI/6,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[]}update(e,t){oi.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=Ns.lerp(1-this.thickness,1,Math.random()),s=i*this.arc,a=Math.sqrt(r),o=Math.sin(s),l=Math.cos(s);e.position.x=a*l,e.position.y=a*o,e.position.z=0;const c=this.angle*a;e.velocity.set(0,0,Math.cos(c)).addScaledVector(e.position,Math.sin(c)).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius)}toJSON(){return{type:"cone",radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Ga({radius:e.radius,arc:e.arc,thickness:e.thickness,angle:e.angle,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new Ga({radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class ja{constructor(e={}){this.type="circle",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[]}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=Ns.lerp(1-this.thickness,1,Math.random()),s=i*this.arc;e.position.x=Math.cos(s),e.position.y=Math.sin(s),e.position.z=0,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*r)}toJSON(){return{type:"circle",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new ja({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new ja({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}function Ql(n,e){return Math.floor(Math.random()*(e-n))+n}const Wa=new _e(0,1,0),Xa=new _e(0,0,0),DN=new _e(1,1,1),l_=new _e(0,0,1);class qa{constructor(e={}){this.type="donut",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.donutRadius=e.donutRadius??this.radius*.2,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[],this._m1=new Qi}update(e,t){oi.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=Math.random(),s=Ns.lerp(1-this.thickness,1,Math.random()),a=i*this.arc,o=r*Math.PI*2,l=Math.sin(a),c=Math.cos(a);e.position.x=this.radius*c,e.position.y=this.radius*l,e.position.z=0,e.velocity.z=this.donutRadius*s*Math.sin(o),e.velocity.x=this.donutRadius*s*Math.cos(o)*c,e.velocity.y=this.donutRadius*s*Math.cos(o)*l,e.position.add(e.velocity),e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof lt&&(this._m1.lookAt(Xa,e.velocity,Wa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"donut",radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new qa({radius:e.radius,arc:e.arc,thickness:e.thickness,donutRadius:e.donutRadius,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new qa({radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class zs{constructor(){this.type="point",this._m1=new Qi}update(e,t){}initialize(e){const t=Math.random(),i=Math.random(),r=t*Math.PI*2,s=Math.acos(2*i-1),a=Math.cbrt(Math.random()),o=Math.sin(r),l=Math.cos(r),c=Math.sin(s),h=Math.cos(s);e.velocity.x=a*c*l,e.velocity.y=a*c*o,e.velocity.z=a*h,e.velocity.multiplyScalar(e.startSpeed),e.position.setScalar(0),e.rotation instanceof lt&&(this._m1.lookAt(Xa,e.position,Wa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"point"}}static fromJSON(e){return new zs}clone(){return new zs}}class Fs{constructor(e={}){this.type="sphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[],this._m1=new Qi}update(e,t){oi.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=Math.random(),s=Ns.lerp(1-this.thickness,1,Math.random()),a=i*this.arc,o=Math.acos(2*r-1),l=Math.sin(a),c=Math.cos(a),h=Math.sin(o),d=Math.cos(o);e.position.x=h*c,e.position.y=h*l,e.position.z=d,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof lt&&(this._m1.lookAt(Xa,e.position,Wa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"sphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Fs({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new Fs({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class Ya{constructor(e={}){this.type="hemisphere",this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[],this._m1=new Qi}update(e,t){oi.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=Math.random(),s=Ns.lerp(1-this.thickness,1,Math.random()),a=i*this.arc,o=Math.acos(r),l=Math.sin(a),c=Math.cos(a),h=Math.sin(o),d=Math.cos(o);e.position.x=h*c,e.position.y=h*l,e.position.z=d,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*s),e.rotation instanceof lt&&(this._m1.lookAt(Xa,e.position,Wa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"hemisphere",radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Ya({radius:e.radius,arc:e.arc,thickness:e.thickness,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new Ya({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}class Ja{constructor(e={}){this.type="grid",this.width=e.width??1,this.height=e.height??1,this.column=e.column??10,this.row=e.row??10}initialize(e){const t=Math.floor(Math.random()*this.row),i=Math.floor(Math.random()*this.column);e.position.x=i*this.width/this.column-this.width/2,e.position.y=t*this.height/this.row-this.height/2,e.position.z=0,e.velocity.set(0,0,e.startSpeed)}toJSON(){return{type:"grid",width:this.width,height:this.height,column:this.column,row:this.row}}static fromJSON(e){return new Ja(e)}clone(){return new Ja({width:this.width,height:this.height,column:this.column,row:this.row})}update(e,t){}}class Ka{constructor(e={}){this.type="rectangle",this.currentValue=0,this.width=e.width??10,this.height=e.height??10,this.thickness=e.thickness??1,this.mode=e.mode??oi.Random,this.spread=e.spread??0,this.speed=e.speed??new nt(1),this.memory=[],this._m1=new Qi}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){const i=Ds(this.mode,this.currentValue,this.spread,t),r=2*(this.width+this.height),s=i*r;let a,o;s<this.width?(a=s-this.width/2,o=-this.height/2):s<this.width+this.height?(a=this.width/2,o=s-this.width-this.height/2):s<2*this.width+this.height?(a=this.width/2-(s-this.width-this.height),o=this.height/2):(a=-this.width/2,o=this.height/2-(s-2*this.width-this.height));const l=Math.random(),c=1-this.thickness*l;e.position.x=a*c,e.position.y=o*c,e.position.z=0,e.velocity.x=a,e.velocity.y=o,e.velocity.z=0,e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof lt&&(this._m1.lookAt(Xa,e.velocity,Wa),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:"rectangle",width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(e){return new Ka({width:e.width,height:e.height,thickness:e.thickness,mode:e.mode,speed:e.speed?Qe(e.speed):void 0,spread:e.spread})}clone(){return new Ka({width:this.width,height:this.height,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}}const Bd={circle:{type:"circle",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:ja,loadJSON:ja.fromJSON},cone:{type:"cone",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Ga,loadJSON:Ga.fromJSON},donut:{type:"donut",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["donutRadius",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:qa,loadJSON:qa.fromJSON},point:{type:"point",params:[],constructor:zs,loadJSON:zs.fromJSON},sphere:{type:"sphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Fs,loadJSON:Fs.fromJSON},hemisphere:{type:"hemisphere",params:[["radius",["number"]],["arc",["radian"]],["thickness",["number"]],["angle",["radian"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Ya,loadJSON:Ya.fromJSON},grid:{type:"grid",params:[["width",["number"]],["height",["number"]],["rows",["number"]],["column",["number"]]],constructor:Ja,loadJSON:Ja.fromJSON},rectangle:{type:"rectangle",params:[["width",["number"]],["height",["number"]],["thickness",["number"]],["mode",["emitterMode"]],["spread",["number"]],["speed",["valueFunc","value"]]],constructor:Ka,loadJSON:Ka.fromJSON}};function ON(n,e){return Bd[n.type].loadJSON(n,e)}class Bs{constructor(e){this.color=e,this.type="ColorOverLife"}initialize(e){this.color.startGen(e.memory)}update(e,t){this.color.genColor(e.memory,e.color,e.age/e.life),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON()}}static fromJSON(e){return new Bs(Fd(e.color))}clone(){return new Bs(this.color.clone())}reset(){}}class Za{constructor(e){this.angularVelocity=e,this.type="RotationOverLife"}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){typeof e.rotation=="number"&&(e.rotation+=t*this.angularVelocity.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new Za(Qe(e.angularVelocity))}frameUpdate(e){}clone(){return new Za(this.angularVelocity.clone())}reset(){}}class Qa{constructor(e){this.angularVelocity=e,this.type="Rotation3DOverLife",this.tempQuat=new lt,this.tempQuat2=new lt}initialize(e){e.rotation instanceof lt&&(e.angularVelocity=new lt,this.angularVelocity.startGen(e.memory))}update(e,t){e.rotation instanceof lt&&(this.angularVelocity.genValue(e.memory,this.tempQuat,t,e.age/e.life),e.rotation.multiply(this.tempQuat))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(e){return new Qa(o_(e.angularVelocity))}frameUpdate(e){}clone(){return new Qa(this.angularVelocity.clone())}reset(){}}class $a{initialize(e,t){this.ps=t,this.x.startGen(e.memory),this.y.startGen(e.memory),this.z.startGen(e.memory)}constructor(e,t,i){this.x=e,this.y=t,this.z=i,this.type="ForceOverLife",this._temp=new _e,this._tempScale=new _e,this._tempQ=new lt}update(e,t){this._temp.set(this.x.genValue(e.memory,e.age/e.life),this.y.genValue(e.memory,e.age/e.life),this.z.genValue(e.memory,e.age/e.life)),this.ps.worldSpace?e.velocity.addScaledVector(this._temp,t):(this._temp.multiply(this._tempScale).applyQuaternion(this._tempQ),e.velocity.addScaledVector(this._temp,t))}toJSON(){return{type:this.type,x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(e){return new $a(Qe(e.x),Qe(e.y),Qe(e.z))}frameUpdate(e){if(this.ps&&!this.ps.worldSpace){const t=this._temp,i=this._tempQ,r=this._tempScale;this.ps.emitter.matrixWorld.decompose(t,i,r),i.invert(),r.set(1/r.x,1/r.y,1/r.z)}}clone(){return new $a(this.x.clone(),this.y.clone(),this.z.clone())}reset(){}}class ks{initialize(e){this.size.startGen(e.memory)}constructor(e){this.size=e,this.type="SizeOverLife"}update(e){this.size instanceof kn?this.size.genValue(e.memory,e.size,e.age/e.life).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,size:this.size.toJSON()}}static fromJSON(e){return new ks(Zl(e.size))}frameUpdate(e){}clone(){return new ks(this.size.clone())}reset(){}}class Hs{initialize(e){this.speed.startGen(e.memory)}constructor(e){this.speed=e,this.type="SpeedOverLife"}update(e){e.speedModifier=this.speed.genValue(e.memory,e.age/e.life)}toJSON(){return{type:this.type,speed:this.speed.toJSON()}}static fromJSON(e){return new Hs(Qe(e.speed))}frameUpdate(e){}clone(){return new Hs(this.speed.clone())}reset(){}}class eo{constructor(e){this.frame=e,this.type="FrameOverLife"}initialize(e){this.frame.startGen(e.memory)}update(e,t){this.frame instanceof cn&&(e.uvTile=this.frame.genValue(e.memory,e.age/e.life))}frameUpdate(e){}toJSON(){return{type:this.type,frame:this.frame.toJSON()}}static fromJSON(e){return new eo(Qe(e.frame))}clone(){return new eo(this.frame.clone())}reset(){}}class to{constructor(e,t=new _e(0,1,0)){this.orbitSpeed=e,this.axis=t,this.type="OrbitOverLife",this.temp=new _e,this.rotation=new lt}initialize(e){this.orbitSpeed.startGen(e.memory)}update(e,t){this.temp.copy(e.position).projectOnVector(this.axis),this.rotation.setFromAxisAngle(this.axis,this.orbitSpeed.genValue(e.memory,e.age/e.life)*t),e.position.sub(this.temp),e.position.applyQuaternion(this.rotation),e.position.add(this.temp)}frameUpdate(e){}toJSON(){return{type:this.type,orbitSpeed:this.orbitSpeed.toJSON(),axis:[this.axis.x,this.axis.y,this.axis.z]}}static fromJSON(e){return new to(Qe(e.orbitSpeed),e.axis?new _e(e.axis[0],e.axis[1],e.axis[2]):void 0)}clone(){return new to(this.orbitSpeed.clone())}reset(){}}class kd{constructor(e){this.data=e,this.next=null,this.prev=null}hasPrev(){return this.prev!==null}hasNext(){return this.next!==null}}class zN{constructor(){this.length=0,this.head=this.tail=null}isEmpty(){return this.head===null}clear(){this.length=0,this.head=this.tail=null}front(){return this.head===null?null:this.head.data}back(){return this.tail===null?null:this.tail.data}dequeue(){if(this.head){const e=this.head.data;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}}pop(){if(this.tail){const e=this.tail.data;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}}queue(e){const t=new kd(e);this.tail||(this.tail=t),this.head&&(this.head.prev=t,t.next=this.head),this.head=t,this.length++}push(e){const t=new kd(e);this.head||(this.head=t),this.tail&&(this.tail.next=t,t.prev=this.tail),this.tail=t,this.length++}insertBefore(e,t){const i=new kd(t);i.next=e,i.prev=e.prev,i.prev!==null&&(i.prev.next=i),i.next.prev=i,e==this.head&&(this.head=i),this.length++}remove(e){if(this.head===null||this.tail===null)return;let t=this.head;for(e===this.head.data&&(this.head=this.head.next),e===this.tail.data&&(this.tail=this.tail.prev);t.next!==null&&t.data!==e;)t=t.next;t.data===e&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.length--)}*values(){let e=this.head;for(;e!==null;)yield e.data,e=e.next}}class FN{constructor(){this.startSpeed=0,this.startColor=new gi,this.startSize=new _e(1,1,1),this.position=new _e,this.velocity=new _e,this.age=0,this.life=1,this.size=new _e(1,1,1),this.speedModifier=1,this.rotation=0,this.color=new gi,this.uvTile=0,this.memory=[]}get died(){return this.age>=this.life}reset(){this.memory.length=0}}class BN{constructor(e,t,i){this.position=e,this.size=t,this.color=i}}class Hd{constructor(){this.startSpeed=0,this.startColor=new gi,this.startSize=new _e(1,1,1),this.position=new _e,this.velocity=new _e,this.age=0,this.life=1,this.size=new _e(1,1,1),this.length=100,this.speedModifier=1,this.color=new gi,this.previous=new zN,this.uvTile=0,this.memory=[]}update(){for(this.age<=this.life?this.previous.push(new BN(this.position.clone(),this.size.x,this.color.clone())):this.previous.length>0&&this.previous.dequeue();this.previous.length>this.length;)this.previous.dequeue()}get died(){return this.age>=this.life}reset(){this.memory.length=0,this.previous.clear()}}class io{initialize(e){this.width.startGen(e.memory)}constructor(e){this.width=e,this.type="WidthOverLength"}update(e){if(e instanceof Hd){const t=e.previous.values();for(let i=0;i<e.previous.length;i++){const r=t.next();r.value.size=this.width.genValue(e.memory,(e.previous.length-i)/e.length)}}}frameUpdate(e){}toJSON(){return{type:this.type,width:this.width.toJSON()}}static fromJSON(e){return new io(Qe(e.width))}clone(){return new io(this.width.clone())}reset(){}}class Vs{constructor(e,t){this.direction=e,this.magnitude=t,this.type="ApplyForce",this.memory={data:[],dataCount:0},this.magnitudeValue=this.magnitude.genValue(this.memory)}initialize(e){}update(e,t){e.velocity.addScaledVector(this.direction,this.magnitudeValue*t)}frameUpdate(e){this.magnitudeValue=this.magnitude.genValue(this.memory)}toJSON(){return{type:this.type,direction:[this.direction.x,this.direction.y,this.direction.z],magnitude:this.magnitude.toJSON()}}static fromJSON(e){return new Vs(new _e(e.direction[0],e.direction[1],e.direction[2]),Qe(e.magnitude??e.force))}clone(){return new Vs(this.direction.clone(),this.magnitude.clone())}reset(){}}class ro{constructor(e,t){this.center=e,this.magnitude=t,this.type="GravityForce",this.temp=new _e}initialize(e){}update(e,t){this.temp.copy(this.center).sub(e.position).normalize(),e.velocity.addScaledVector(this.temp,this.magnitude/e.position.distanceToSquared(this.center)*t)}frameUpdate(e){}toJSON(){return{type:this.type,center:[this.center.x,this.center.y,this.center.z],magnitude:this.magnitude}}static fromJSON(e){return new ro(new _e(e.center[0],e.center[1],e.center[2]),e.magnitude)}clone(){return new ro(this.center.clone(),this.magnitude)}reset(){}}class no{constructor(e){this.angle=e,this.type="ChangeEmitDirection",this._temp=new _e,this._q=new lt,this.memory={data:[],dataCount:0}}initialize(e){const t=e.velocity.length();t!=0&&(e.velocity.normalize(),e.velocity.x===0&&e.velocity.y===0?this._temp.set(0,e.velocity.z,0):this._temp.set(-e.velocity.y,e.velocity.x,0),this.angle.startGen(this.memory),this._q.setFromAxisAngle(this._temp.normalize(),this.angle.genValue(this.memory)),this._temp.copy(e.velocity),e.velocity.applyQuaternion(this._q),this._q.setFromAxisAngle(this._temp,Math.random()*Math.PI*2),e.velocity.applyQuaternion(this._q),e.velocity.setLength(t))}update(e,t){}frameUpdate(e){}toJSON(){return{type:this.type,angle:this.angle.toJSON()}}static fromJSON(e){return new no(Qe(e.angle))}clone(){return new no(this.angle)}reset(){}}var Gs;(function(n){n[n.Death=0]="Death",n[n.Birth=1]="Birth",n[n.Frame=2]="Frame"})(Gs||(Gs={}));class so{constructor(e,t,i,r=Gs.Frame,s=1){this.particleSystem=e,this.useVelocityAsBasis=t,this.subParticleSystem=i,this.mode=r,this.emitProbability=s,this.type="EmitSubParticleSystem",this.q_=new lt,this.v_=new _e,this.v2_=new _e,this.subEmissions=new Array,this.subParticleSystem&&this.subParticleSystem.system&&(this.subParticleSystem.system.onlyUsedByOther=!0)}initialize(e){}update(e,t){this.mode===Gs.Frame?this.emit(e,t):this.mode===Gs.Birth&&e.age===0?this.emit(e,t):this.mode===Gs.Death&&e.age+t>=e.life&&this.emit(e,t)}emit(e,t){if(!this.subParticleSystem||Math.random()>this.emitProbability)return;const i=new Qi;this.setMatrixFromParticle(i,e),this.subEmissions.push({burstParticleCount:0,burstParticleIndex:0,isBursting:!1,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,matrix:i,travelDistance:0,particle:e})}frameUpdate(e){if(this.subParticleSystem)for(let t=0;t<this.subEmissions.length;t++)if(this.subEmissions[t].time>=this.subParticleSystem.system.duration)this.subEmissions[t]=this.subEmissions[this.subEmissions.length-1],this.subEmissions.length=this.subEmissions.length-1,t--;else{const i=this.subEmissions[t];i.particle&&i.particle.age<i.particle.life?this.setMatrixFromParticle(i.matrix,i.particle):i.particle=void 0,this.subParticleSystem.system.emit(e,i,i.matrix)}}toJSON(){return{type:this.type,subParticleSystem:this.subParticleSystem?this.subParticleSystem.uuid:"",useVelocityAsBasis:this.useVelocityAsBasis,mode:this.mode,emitProbability:this.emitProbability}}static fromJSON(e,t){return new so(t,e.useVelocityAsBasis,e.subParticleSystem,e.mode,e.emitProbability)}clone(){return new so(this.particleSystem,this.useVelocityAsBasis,this.subParticleSystem,this.mode,this.emitProbability)}reset(){}setMatrixFromParticle(e,t){let i;if(t.rotation===void 0||this.useVelocityAsBasis)if(t.velocity.x===0&&t.velocity.y===0&&(t.velocity.z===1||t.velocity.z===0))e.set(1,0,0,t.position.x,0,1,0,t.position.y,0,0,1,t.position.z,0,0,0,1);else{this.v_.copy(l_).cross(t.velocity),this.v2_.copy(t.velocity).cross(this.v_);const r=this.v_.length(),s=this.v2_.length();e.set(this.v_.x/r,this.v2_.x/s,t.velocity.x,t.position.x,this.v_.y/r,this.v2_.y/s,t.velocity.y,t.position.y,this.v_.z/r,this.v2_.z/s,t.velocity.z,t.position.z,0,0,0,1)}else t.rotation instanceof lt?i=t.rotation:(this.q_.setFromAxisAngle(l_,t.rotation),i=this.q_),e.compose(t.position,i,DN);this.particleSystem.worldSpace||e.multiplyMatrices(this.particleSystem.emitter.matrixWorld,e)}}const kN=.5*(Math.sqrt(3)-1),ao=(3-Math.sqrt(3))/6,HN=1/3,_r=1/6,VN=(Math.sqrt(5)-1)/4,ti=(5-Math.sqrt(5))/20,Kt=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Dt=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class c_{constructor(e=Math.random){const t=typeof e=="function"?e:jN(e);this.p=GN(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let i=0;i<512;i++)this.perm[i]=this.p[i&255],this.permMod12[i]=this.perm[i]%12}noise2D(e,t){const i=this.permMod12,r=this.perm;let s=0,a=0,o=0;const l=(e+t)*kN,c=Math.floor(e+l),h=Math.floor(t+l),d=(c+h)*ao,u=c-d,p=h-d,g=e-u,y=t-p;let f,_;g>y?(f=1,_=0):(f=0,_=1);const S=g-f+ao,v=y-_+ao,M=g-1+2*ao,I=y-1+2*ao,R=c&255,A=h&255;let z=.5-g*g-y*y;if(z>=0){const O=i[R+r[A]]*3;z*=z,s=z*z*(Kt[O]*g+Kt[O+1]*y)}let E=.5-S*S-v*v;if(E>=0){const O=i[R+f+r[A+_]]*3;E*=E,a=E*E*(Kt[O]*S+Kt[O+1]*v)}let x=.5-M*M-I*I;if(x>=0){const O=i[R+1+r[A+1]]*3;x*=x,o=x*x*(Kt[O]*M+Kt[O+1]*I)}return 70*(s+a+o)}noise3D(e,t,i){const r=this.permMod12,s=this.perm;let a,o,l,c;const h=(e+t+i)*HN,d=Math.floor(e+h),u=Math.floor(t+h),p=Math.floor(i+h),g=(d+u+p)*_r,y=d-g,f=u-g,_=p-g,S=e-y,v=t-f,M=i-_;let I,R,A,z,E,x;S>=v?v>=M?(I=1,R=0,A=0,z=1,E=1,x=0):S>=M?(I=1,R=0,A=0,z=1,E=0,x=1):(I=0,R=0,A=1,z=1,E=0,x=1):v<M?(I=0,R=0,A=1,z=0,E=1,x=1):S<M?(I=0,R=1,A=0,z=0,E=1,x=1):(I=0,R=1,A=0,z=1,E=1,x=0);const O=S-I+_r,G=v-R+_r,X=M-A+_r,K=S-z+2*_r,te=v-E+2*_r,Y=M-x+2*_r,ie=S-1+3*_r,J=v-1+3*_r,oe=M-1+3*_r,pe=d&255,be=u&255,je=p&255;let Je=.6-S*S-v*v-M*M;if(Je<0)a=0;else{const he=r[pe+s[be+s[je]]]*3;Je*=Je,a=Je*Je*(Kt[he]*S+Kt[he+1]*v+Kt[he+2]*M)}let Z=.6-O*O-G*G-X*X;if(Z<0)o=0;else{const he=r[pe+I+s[be+R+s[je+A]]]*3;Z*=Z,o=Z*Z*(Kt[he]*O+Kt[he+1]*G+Kt[he+2]*X)}let se=.6-K*K-te*te-Y*Y;if(se<0)l=0;else{const he=r[pe+z+s[be+E+s[je+x]]]*3;se*=se,l=se*se*(Kt[he]*K+Kt[he+1]*te+Kt[he+2]*Y)}let me=.6-ie*ie-J*J-oe*oe;if(me<0)c=0;else{const he=r[pe+1+s[be+1+s[je+1]]]*3;me*=me,c=me*me*(Kt[he]*ie+Kt[he+1]*J+Kt[he+2]*oe)}return 32*(a+o+l+c)}noise4D(e,t,i,r){const s=this.perm;let a,o,l,c,h;const d=(e+t+i+r)*VN,u=Math.floor(e+d),p=Math.floor(t+d),g=Math.floor(i+d),y=Math.floor(r+d),f=(u+p+g+y)*ti,_=u-f,S=p-f,v=g-f,M=y-f,I=e-_,R=t-S,A=i-v,z=r-M;let E=0,x=0,O=0,G=0;I>R?E++:x++,I>A?E++:O++,I>z?E++:G++,R>A?x++:O++,R>z?x++:G++,A>z?O++:G++;const X=E>=3?1:0,K=x>=3?1:0,te=O>=3?1:0,Y=G>=3?1:0,ie=E>=2?1:0,J=x>=2?1:0,oe=O>=2?1:0,pe=G>=2?1:0,be=E>=1?1:0,je=x>=1?1:0,Je=O>=1?1:0,Z=G>=1?1:0,se=I-X+ti,me=R-K+ti,he=A-te+ti,Oe=z-Y+ti,ke=I-ie+2*ti,We=R-J+2*ti,ut=A-oe+2*ti,D=z-pe+2*ti,xt=I-be+3*ti,it=R-je+3*ti,st=A-Je+3*ti,Me=z-Z+3*ti,bt=I-1+4*ti,Ie=R-1+4*ti,Ne=A-1+4*ti,P=z-1+4*ti,b=u&255,V=p&255,ne=g&255,ae=y&255;let re=.6-I*I-R*R-A*A-z*z;if(re<0)a=0;else{const ee=s[b+s[V+s[ne+s[ae]]]]%32*4;re*=re,a=re*re*(Dt[ee]*I+Dt[ee+1]*R+Dt[ee+2]*A+Dt[ee+3]*z)}let Te=.6-se*se-me*me-he*he-Oe*Oe;if(Te<0)o=0;else{const ee=s[b+X+s[V+K+s[ne+te+s[ae+Y]]]]%32*4;Te*=Te,o=Te*Te*(Dt[ee]*se+Dt[ee+1]*me+Dt[ee+2]*he+Dt[ee+3]*Oe)}let de=.6-ke*ke-We*We-ut*ut-D*D;if(de<0)l=0;else{const ee=s[b+ie+s[V+J+s[ne+oe+s[ae+pe]]]]%32*4;de*=de,l=de*de*(Dt[ee]*ke+Dt[ee+1]*We+Dt[ee+2]*ut+Dt[ee+3]*D)}let fe=.6-xt*xt-it*it-st*st-Me*Me;if(fe<0)c=0;else{const ee=s[b+be+s[V+je+s[ne+Je+s[ae+Z]]]]%32*4;fe*=fe,c=fe*fe*(Dt[ee]*xt+Dt[ee+1]*it+Dt[ee+2]*st+Dt[ee+3]*Me)}let Pe=.6-bt*bt-Ie*Ie-Ne*Ne-P*P;if(Pe<0)h=0;else{const ee=s[b+1+s[V+1+s[ne+1+s[ae+1]]]]%32*4;Pe*=Pe,h=Pe*Pe*(Dt[ee]*bt+Dt[ee+1]*Ie+Dt[ee+2]*Ne+Dt[ee+3]*P)}return 27*(a+o+l+c+h)}}function GN(n){const e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=0;t<255;t++){const i=t+~~(n()*(256-t)),r=e[t];e[t]=e[i],e[i]=r}return e}function jN(n){let e=0,t=0,i=0,r=1;const s=WN();return e=s(" "),t=s(" "),i=s(" "),e-=s(n),e<0&&(e+=1),t-=s(n),t<0&&(t+=1),i-=s(n),i<0&&(i+=1),function(){const a=2091639*e+r*23283064365386963e-26;return e=t,t=i,i=a-(r=a|0)}}function WN(){let n=4022871197;return function(e){e=e.toString();for(let t=0;t<e.length;t++){n+=e.charCodeAt(t);let i=.02519603282416938*n;n=i>>>0,i-=n,i*=n,n=i>>>0,i-=n,n+=i*4294967296}return(n>>>0)*23283064365386963e-26}}class oo{constructor(e,t,i,r){this.scale=e,this.octaves=t,this.velocityMultiplier=i,this.timeScale=r,this.type="TurbulenceField",this.generator=new c_,this.timeOffset=new _e,this.temp=new _e,this.temp2=new _e,this.timeOffset.x=Math.random()/this.scale.x*this.timeScale.x,this.timeOffset.y=Math.random()/this.scale.y*this.timeScale.y,this.timeOffset.z=Math.random()/this.scale.z*this.timeScale.z}initialize(e){}update(e,t){const i=e.position.x/this.scale.x,r=e.position.y/this.scale.y,s=e.position.z/this.scale.z;this.temp.set(0,0,0);let a=1;for(let o=0;o<this.octaves;o++)this.temp2.set(this.generator.noise4D(i*a,r*a,s*a,this.timeOffset.x*a)/a,this.generator.noise4D(i*a,r*a,s*a,this.timeOffset.y*a)/a,this.generator.noise4D(i*a,r*a,s*a,this.timeOffset.z*a)/a),this.temp.add(this.temp2),a*=2;this.temp.multiply(this.velocityMultiplier),e.velocity.addScaledVector(this.temp,t)}toJSON(){return{type:this.type,scale:[this.scale.x,this.scale.y,this.scale.z],octaves:this.octaves,velocityMultiplier:[this.velocityMultiplier.x,this.velocityMultiplier.y,this.velocityMultiplier.z],timeScale:[this.timeScale.x,this.timeScale.y,this.timeScale.z]}}frameUpdate(e){this.timeOffset.x+=e*this.timeScale.x,this.timeOffset.y+=e*this.timeScale.y,this.timeOffset.z+=e*this.timeScale.z}static fromJSON(e){return new oo(new _e(e.scale[0],e.scale[1],e.scale[2]),e.octaves,new _e(e.velocityMultiplier[0],e.velocityMultiplier[1],e.velocityMultiplier[2]),new _e(e.timeScale[0],e.timeScale[1],e.timeScale[2]))}clone(){return new oo(this.scale.clone(),this.octaves,this.velocityMultiplier.clone(),this.timeScale.clone())}reset(){}}const gr=[],Vd=new _e,Gd=new lt;class js{constructor(e,t,i=new nt(1),r=new nt(0)){if(this.frequency=e,this.power=t,this.positionAmount=i,this.rotationAmount=r,this.type="Noise",this.duration=0,gr.length===0)for(let s=0;s<100;s++)gr.push(new c_)}initialize(e){e.lastPosNoise=new _e,typeof e.rotation=="number"?e.lastRotNoise=0:e.lastRotNoise=new lt,e.generatorIndex=[Ql(0,100),Ql(0,100),Ql(0,100),Ql(0,100)],this.positionAmount.startGen(e.memory),this.rotationAmount.startGen(e.memory),this.frequency.startGen(e.memory),this.power.startGen(e.memory)}update(e,t){let i=this.frequency.genValue(e.memory,e.age/e.life),r=this.power.genValue(e.memory,e.age/e.life),s=this.positionAmount.genValue(e.memory,e.age/e.life),a=this.rotationAmount.genValue(e.memory,e.age/e.life);s>0&&e.lastPosNoise!==void 0&&(e.position.sub(e.lastPosNoise),Vd.set(gr[e.generatorIndex[0]].noise2D(0,e.age*i)*r*s,gr[e.generatorIndex[1]].noise2D(0,e.age*i)*r*s,gr[e.generatorIndex[2]].noise2D(0,e.age*i)*r*s),e.position.add(Vd),e.lastPosNoise.copy(Vd)),a>0&&e.lastRotNoise!==void 0&&(typeof e.rotation=="number"?(e.rotation-=e.lastRotNoise,e.rotation+=gr[e.generatorIndex[3]].noise2D(0,e.age*i)*Math.PI*r*a):(e.lastRotNoise.invert(),e.rotation.multiply(e.lastRotNoise),Gd.set(gr[e.generatorIndex[0]].noise2D(0,e.age*i)*r*a,gr[e.generatorIndex[1]].noise2D(0,e.age*i)*r*a,gr[e.generatorIndex[2]].noise2D(0,e.age*i)*r*a,gr[e.generatorIndex[3]].noise2D(0,e.age*i)*r*a).normalize(),e.rotation.multiply(Gd),e.lastRotNoise.copy(Gd)))}toJSON(){return{type:this.type,frequency:this.frequency.toJSON(),power:this.power.toJSON(),positionAmount:this.positionAmount.toJSON(),rotationAmount:this.rotationAmount.toJSON()}}frameUpdate(e){this.duration+=e}static fromJSON(e){return new js(Qe(e.frequency),Qe(e.power),Qe(e.positionAmount),Qe(e.rotationAmount))}clone(){return new js(this.frequency.clone(),this.power.clone(),this.positionAmount.clone(),this.rotationAmount.clone())}reset(){}}class lo{constructor(e=0,t=0,i=new _e){this.scaleX=e,this.scaleY=t,this.position=i,this.locations=[]}transform(e,t){e.x=this.locations[t%this.locations.length].x*this.scaleX+this.position.x,e.y=this.locations[t%this.locations.length].y*this.scaleY+this.position.y,e.z=this.position.z}static fromJSON(e){const t=new lo(e.scaleX,e.scaleY,new _e(e.position[0],e.position[1],e.position[2]));return t.locations=e.locations.map(i=>new an(i.x,i.y)),t}clone(){const e=new lo(this.scaleX,this.scaleY,this.position.clone());return e.locations=this.locations.map(t=>t.clone()),e}toJSON(){return{scaleX:this.scaleX,scaleY:this.scaleY,position:this.position,locations:this.locations.map(e=>({x:e.x,y:e.y}))}}fromImage(e,t){const i=document.createElement("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");if(!r)return;r.drawImage(e,0,0);const s=r.getImageData(0,0,i.width,i.height,{colorSpace:"srgb"});i.remove(),this.locations.length=0;for(let a=0;a<s.height;a++)for(let o=0;o<s.width;o++)s.data[(a*s.width+o)*4+3]>t&&this.locations.push(new an(o,s.height-a))}}function XN(n){switch(n.type){case"TextureSequencer":return lo.fromJSON(n);default:return new lo}}class co{constructor(e){this.type="ApplySequences",this.sequencers=[],this.time=0,this.index=0,this.pCount=0,this.tempV=new _e,this.delay=e}initialize(e){e.id=this.pCount,e.dst=new _e,e.begin=new _e,e.inMotion=!1,this.pCount++}reset(){this.time=0,this.index=0,this.pCount=0}update(e,t){const i=this.sequencers[this.index],r=e.id*this.delay;this.time>=i[0].a+r&&this.time<=i[0].b+r?(e.inMotion||(e.inMotion=!0,e.begin.copy(e.position),i[1].transform(e.dst,e.id)),e.position.lerpVectors(e.begin,e.dst,co.BEZIER.genValue((this.time-i[0].a-r)/(i[0].b-i[0].a)))):this.time>i[0].b+r&&(e.inMotion=!1)}frameUpdate(e){for(;this.index+1<this.sequencers.length&&this.time>=this.sequencers[this.index+1][0].a;)this.index++;this.time+=e}appendSequencer(e,t){this.sequencers.push([e,t])}toJSON(){return{type:this.type,delay:this.delay,sequencers:this.sequencers.map(([e,t])=>({range:e.toJSON(),sequencer:t.toJSON()}))}}static fromJSON(e){const t=new co(e.delay);return e.sequencers.forEach(i=>{t.sequencers.push([Qe(i.range),XN(i.sequencer)])}),t}clone(){const e=new co(this.delay);return e.sequencers=this.sequencers.map(t=>[t[0].clone(),t[1].clone()]),e}}co.BEZIER=new er(0,0,1,1);class ho{constructor(e,t){this.color=e,this.speedRange=t,this.type="ColorBySpeed"}initialize(e){this.color.startGen(e.memory)}update(e,t){const i=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.color.genColor(e.memory,e.color,i),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new ho(Fd(e.color),fr.fromJSON(e.speedRange))}clone(){return new ho(this.color.clone(),this.speedRange.clone())}reset(){}}class uo{initialize(e){this.size.startGen(e.memory)}constructor(e,t){this.size=e,this.speedRange=t,this.type="SizeBySpeed"}update(e){const t=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.size instanceof kn?this.size.genValue(e.memory,e.size,t).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,t))}toJSON(){return{type:this.type,size:this.size.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new uo(Zl(e.size),fr.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new uo(this.size.clone(),this.speedRange.clone())}reset(){}}class po{constructor(e,t){this.angularVelocity=e,this.speedRange=t,this.type="RotationBySpeed",this.tempQuat=new lt}initialize(e){typeof e.rotation=="number"&&this.angularVelocity.startGen(e.memory)}update(e,t){if(typeof e.rotation=="number"){const i=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);e.rotation+=t*this.angularVelocity.genValue(e.memory,i)}}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(e){return new po(Qe(e.angularVelocity),fr.fromJSON(e.speedRange))}frameUpdate(e){}clone(){return new po(this.angularVelocity.clone(),this.speedRange.clone())}reset(){}}class mo{initialize(e){this.speed.startGen(e.memory)}constructor(e,t){this.speed=e,this.dampen=t,this.type="LimitSpeedOverLife"}update(e,t){let i=e.velocity.length(),r=this.speed.genValue(e.memory,e.age/e.life);if(i>r){const s=(i-r)/i;e.velocity.multiplyScalar(1-s*this.dampen*t*20)}}toJSON(){return{type:this.type,speed:this.speed.toJSON(),dampen:this.dampen}}static fromJSON(e){return new mo(Qe(e.speed),e.dampen)}frameUpdate(e){}clone(){return new mo(this.speed.clone(),this.dampen)}reset(){}}const $l={ApplyForce:{type:"ApplyForce",constructor:Vs,params:[["direction",["vec3"]],["magnitude",["value"]]],loadJSON:Vs.fromJSON},Noise:{type:"Noise",constructor:js,params:[["frequency",["value"]],["power",["value"]],["positionAmount",["value"]],["rotationAmount",["value"]]],loadJSON:js.fromJSON},TurbulenceField:{type:"TurbulenceField",constructor:oo,params:[["scale",["vec3"]],["octaves",["number"]],["velocityMultiplier",["vec3"]],["timeScale",["vec3"]]],loadJSON:oo.fromJSON},GravityForce:{type:"GravityForce",constructor:ro,params:[["center",["vec3"]],["magnitude",["number"]]],loadJSON:ro.fromJSON},ColorOverLife:{type:"ColorOverLife",constructor:Bs,params:[["color",["colorFunc"]]],loadJSON:Bs.fromJSON},RotationOverLife:{type:"RotationOverLife",constructor:Za,params:[["angularVelocity",["value","valueFunc"]]],loadJSON:Za.fromJSON},Rotation3DOverLife:{type:"Rotation3DOverLife",constructor:Qa,params:[["angularVelocity",["rotationFunc"]]],loadJSON:Qa.fromJSON},SizeOverLife:{type:"SizeOverLife",constructor:ks,params:[["size",["value","valueFunc","vec3Func"]]],loadJSON:ks.fromJSON},ColorBySpeed:{type:"ColorBySpeed",constructor:ho,params:[["color",["colorFunc"]],["speedRange",["range"]]],loadJSON:ho.fromJSON},RotationBySpeed:{type:"RotationBySpeed",constructor:po,params:[["angularVelocity",["value","valueFunc"]],["speedRange",["range"]]],loadJSON:po.fromJSON},SizeBySpeed:{type:"SizeBySpeed",constructor:uo,params:[["size",["value","valueFunc","vec3Func"]],["speedRange",["range"]]],loadJSON:uo.fromJSON},SpeedOverLife:{type:"SpeedOverLife",constructor:Hs,params:[["speed",["value","valueFunc"]]],loadJSON:Hs.fromJSON},FrameOverLife:{type:"FrameOverLife",constructor:eo,params:[["frame",["value","valueFunc"]]],loadJSON:eo.fromJSON},ForceOverLife:{type:"ForceOverLife",constructor:$a,params:[["x",["value","valueFunc"]],["y",["value","valueFunc"]],["z",["value","valueFunc"]]],loadJSON:$a.fromJSON},OrbitOverLife:{type:"OrbitOverLife",constructor:to,params:[["orbitSpeed",["value","valueFunc"]],["axis",["vec3"]]],loadJSON:to.fromJSON},WidthOverLength:{type:"WidthOverLength",constructor:io,params:[["width",["value","valueFunc"]]],loadJSON:io.fromJSON},ChangeEmitDirection:{type:"ChangeEmitDirection",constructor:no,params:[["angle",["value"]]],loadJSON:no.fromJSON},EmitSubParticleSystem:{type:"EmitSubParticleSystem",constructor:so,params:[["particleSystem",["self"]],["useVelocityAsBasis",["boolean"]],["subParticleSystem",["particleSystem"]],["mode",["number"]],["emitProbability",["number"]]],loadJSON:so.fromJSON},LimitSpeedOverLife:{type:"LimitSpeedOverLife",constructor:mo,params:[["speed",["value","valueFunc"]],["dampen",["number"]]],loadJSON:mo.fromJSON}};function qN(n,e){return $l[n.type]?$l[n.type].loadJSON(n,e):null}const YN=[];function JN(n){if(!YN.find(e=>e.id===n.id)){n.initialize();for(const e of n.emitterShapes)Bd[e.type]||(Bd[e.type]=e);for(const e of n.behaviors)$l[e.type]||($l[e.type]=e)}}class fo{get geometry(){return this._geometry}set geometry(e){if(this._geometry=e,e===void 0||typeof e=="string")return;const t=new _a;this._triangleIndexToArea.length=0;let i=0;if(!e.getIndex())return;const r=e.getIndex().array,s=r.length/3;this._triangleIndexToArea.push(0);for(let a=0;a<s;a++)t.setFromAttributeAndIndices(e.getAttribute("position"),r[a*3],r[a*3+1],r[a*3+2]),i+=t.getArea(),this._triangleIndexToArea.push(i);e.userData.triangleIndexToArea=this._triangleIndexToArea}constructor(e){this.type="mesh_surface",this._triangleIndexToArea=[],this._tempA=new U,this._tempB=new U,this._tempC=new U,e&&(this.geometry=e)}initialize(e){const t=this._geometry;if(!t||t.getIndex()===null){e.position.set(0,0,0),e.velocity.set(0,0,1).multiplyScalar(e.startSpeed);return}const i=this._triangleIndexToArea.length-1;let r=0,s=i;const a=Math.random()*this._triangleIndexToArea[i];for(;r+1<s;){const p=Math.floor((r+s)/2);a<this._triangleIndexToArea[p]?s=p:r=p}let o=Math.random(),l=Math.random();o+l>1&&(o=1-o,l=1-l);const c=t.getIndex().array[r*3],h=t.getIndex().array[r*3+1],d=t.getIndex().array[r*3+2],u=t.getAttribute("position");this._tempA.fromBufferAttribute(u,c),this._tempB.fromBufferAttribute(u,h),this._tempC.fromBufferAttribute(u,d),this._tempB.sub(this._tempA),this._tempC.sub(this._tempA),this._tempA.addScaledVector(this._tempB,o).addScaledVector(this._tempC,l),e.position.copy(this._tempA),this._tempA.copy(this._tempB).cross(this._tempC).normalize(),e.velocity.copy(this._tempA).normalize().multiplyScalar(e.startSpeed)}toJSON(){return{type:"mesh_surface",mesh:this._geometry?this._geometry.uuid:""}}static fromJSON(e,t){return new fo(t.geometries[e.geometry])}clone(){return new fo(this._geometry)}update(e,t){}}const KN={id:"three.quarks",initialize:()=>{},emitterShapes:[{type:"mesh_surface",params:[["geometry",["geometry"]]],constructor:fo,loadJSON:fo.fromJSON}],behaviors:[]};var ZN=`
#ifdef SOFT_PARTICLES

    /* #ifdef LOGDEPTH
    float distSample = linearize_depth_log(sampleDepth, near, far);
    #else
    float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);
    #endif */

    vec2 p2 = projPosition.xy / projPosition.w;
    
    p2 = 0.5 * p2 + 0.5;

    float readDepth = texture2D(depthTexture, p2.xy).r;
    float viewDepth = linearize_depth(readDepth);

    float softParticlesFade = saturate(SOFT_INV_FADE_DISTANCE * ((viewDepth - SOFT_NEAR_FADE) - linearDepth));
    
    gl_FragColor *= softParticlesFade;

    //gl_FragColor = vec4(softParticlesFade , 0, 0, 1);
#endif
`,QN=`
#ifdef SOFT_PARTICLES

    uniform sampler2D depthTexture;
    uniform vec4 projParams;
    uniform vec2 softParams;

    varying vec4 projPosition;
    varying float linearDepth;

    #define SOFT_NEAR_FADE softParams.x
    #define SOFT_INV_FADE_DISTANCE softParams.y

    #define zNear projParams.x
    #define zFar projParams.y

    float linearize_depth(float d)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }

#endif
`,$N=`
#ifdef SOFT_PARTICLES
    varying vec4 projPosition;
    varying float linearDepth;
#endif
`,e2=`
#ifdef SOFT_PARTICLES
    projPosition = gl_Position;
    linearDepth = -mvPosition.z;
#endif
`,t2=`
#ifdef USE_MAP
    vec4 texelColor = texture2D( map, vUv);
    #ifdef TILE_BLEND
        texelColor = mix( texelColor, texture2D( map, vUvNext ), vUvBlend );
    #endif
    diffuseColor *= texelColor;
#endif
`,i2=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,r2=`
#ifdef UV_TILE
    attribute float uvTile;
    uniform vec2 tileCount;
    
    mat3 makeTileTransform(float uvTile) {
        float col = mod(uvTile, tileCount.x);
        float row = (tileCount.y - floor(uvTile / tileCount.x) - 1.0);
        
        return mat3(
          1.0 / tileCount.x, 0.0, 0.0,
          0.0, 1.0 / tileCount.y, 0.0, 
          col / tileCount.x, row / tileCount.y, 1.0);
    }
#else
    mat3 makeTileTransform(float uvTile) {
        return mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
    }
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`,n2=`
#ifdef UV_TILE
    mat3 tileTransform = makeTileTransform(floor(uvTile));
    #ifdef TILE_BLEND
        mat3 nextTileTransform = makeTileTransform(ceil(uvTile));
        vUvBlend = fract(uvTile);
    #endif
#else
    mat3 tileTransform = makeTileTransform(0.0);
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

vUv = (tileTransform *vec3( uv, 1 )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vUvNext = (nextTileTransform *vec3( uv, 1 )).xy;
#endif

#endif
#ifdef USE_MAP

vMapUv = ( tileTransform * (mapTransform * vec3( MAP_UV, 1 ) )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vMapUvNext = (nextTileTransform * (mapTransform * vec3( MAP_UV, 1 ))).xy;
#endif

#endif
#ifdef USE_ALPHAMAP

vAlphaMapUv = ( tileTransform * (alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) )).xy;
    
#endif
#ifdef USE_LIGHTMAP

vLightMapUv = ( tileTransform * (lightMapTransform * vec3( LIGHTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_AOMAP

vAoMapUv = ( tileTransform * (aoMapTransform * vec3( AOMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_BUMPMAP

vBumpMapUv = ( tileTransform * (bumpMapTransform * vec3( BUMPMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_NORMALMAP

vNormalMapUv = ( tileTransform * (normalMapTransform * vec3( NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

vDisplacementMapUv = ( tileTransform * (displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_EMISSIVEMAP

vEmissiveMapUv = ( tileTransform * (emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_METALNESSMAP

vMetalnessMapUv = ( tileTransform * (metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ROUGHNESSMAP

vRoughnessMapUv = ( tileTransform * (roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ANISOTROPYMAP

vAnisotropyMapUv = ( tileTransform * (anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOATMAP

vClearcoatMapUv = ( tileTransform * (clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

vClearcoatNormalMapUv = ( tileTransform * (clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

vClearcoatRoughnessMapUv = ( tileTransform * (clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

vIridescenceMapUv = ( tileTransform * (iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

vIridescenceThicknessMapUv = ( tileTransform * (iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

vSheenColorMapUv = ( tileTransform * (sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

vSheenRoughnessMapUv = ( tileTransform * (sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULARMAP

vSpecularMapUv = ( tileTransform * (specularMapTransform * vec3( SPECULARMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

vSpecularColorMapUv = ( tileTransform * (specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

vSpecularIntensityMapUv = ( tileTransform * (specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

vTransmissionMapUv = ( tileTransform * transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_THICKNESSMAP

vThicknessMapUv = ( tileTransform * thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) )).xy;

#endif

`;const hn=Ge;function s2(){hn.tile_pars_vertex=r2,hn.tile_vertex=n2,hn.tile_pars_fragment=i2,hn.tile_fragment=t2,hn.soft_pars_vertex=$N,hn.soft_vertex=e2,hn.soft_pars_fragment=QN,hn.soft_fragment=ZN}class a2 extends _t{constructor(e){super(),this.type="ParticleEmitter",this.system=e}clone(){const e=this.system.clone();return e.emitter.copy(this,!0),e.emitter}dispose(){}extractFromCache(e){const t=[];for(const i in e){const r=e[i];delete r.metadata,t.push(r)}return t}toJSON(e,t={}){const i=this.children;this.children=this.children.filter(s=>s.type!=="ParticleSystemPreview");const r=super.toJSON(e);return this.children=i,this.system!==null&&(r.object.ps=this.system.toJSON(e,t)),r}}var ve;(function(n){n[n.BillBoard=0]="BillBoard",n[n.StretchedBillBoard=1]="StretchedBillBoard",n[n.Mesh=2]="Mesh",n[n.Trail=3]="Trail",n[n.HorizontalBillBoard=4]="HorizontalBillBoard",n[n.VerticalBillBoard=5]="VerticalBillBoard"})(ve||(ve={}));class h_ extends pi{constructor(e){super(),this.type="VFXBatch",this.maxParticles=1e3,this.systems=new Set;const t=new os;t.mask=e.layers.mask;const i=e.material.clone();i.defines={},Object.assign(i.defines,e.material.defines),this.settings={instancingGeometry:e.instancingGeometry,renderMode:e.renderMode,renderOrder:e.renderOrder,material:i,uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softNearFade:e.softNearFade,softFarFade:e.softFarFade,layers:t},this.frustumCulled=!1,this.renderOrder=this.settings.renderOrder}addSystem(e){this.systems.add(e)}removeSystem(e){this.systems.delete(e)}applyDepthTexture(e){const t=this.material.uniforms.depthTexture;t&&t.value!==e&&(t.value=e,this.material.needsUpdate=!0)}getVisibleSystems(){return Array.from(this.systems).filter(e=>e.emitter.visible)}}const o2=new _e(0,0,1),jd=new lt,l2=new _e,c2=new _e;new _e;const d_=60,ec=new ys(1,1,1,1);class tc{set time(e){this.emissionState.time=e}get time(){return this.emissionState.time}get layers(){return this.rendererSettings.layers}get texture(){return this.rendererSettings.material.map}set texture(e){this.rendererSettings.material.map=e,this.neededToUpdateRender=!0}get material(){return this.rendererSettings.material}set material(e){this.rendererSettings.material=e,this.neededToUpdateRender=!0}get uTileCount(){return this.rendererSettings.uTileCount}set uTileCount(e){this.rendererSettings.uTileCount=e,this.neededToUpdateRender=!0}get vTileCount(){return this.rendererSettings.vTileCount}set vTileCount(e){this.rendererSettings.vTileCount=e,this.neededToUpdateRender=!0}get blendTiles(){return this.rendererSettings.blendTiles}set blendTiles(e){this.rendererSettings.blendTiles=e,this.neededToUpdateRender=!0}get softParticles(){return this.rendererSettings.softParticles}set softParticles(e){this.rendererSettings.softParticles=e,this.neededToUpdateRender=!0}get softNearFade(){return this.rendererSettings.softNearFade}set softNearFade(e){this.rendererSettings.softNearFade=e,this.neededToUpdateRender=!0}get softFarFade(){return this.rendererSettings.softFarFade}set softFarFade(e){this.rendererSettings.softFarFade=e,this.neededToUpdateRender=!0}get instancingGeometry(){return this.rendererSettings.instancingGeometry}set instancingGeometry(e){this.restart(),this.particles.length=0,this.rendererSettings.instancingGeometry=e,this.neededToUpdateRender=!0}get renderMode(){return this.rendererSettings.renderMode}set renderMode(e){if(this.rendererSettings.renderMode!==e){let t=!1;switch(this.rendererSettings.renderMode===ve.Trail&&(t=!0),this.rendererSettings.renderMode===ve.Mesh&&(this.startRotation=new nt(0)),e){case ve.Trail:this.rendererEmitterSettings={startLength:new nt(30),followLocalOrigin:!1},t=!0;break;case ve.Mesh:this.rendererEmitterSettings={geometry:ec},this.startRotation=new Va(new _e(0,1,0),new nt(0));break;case ve.StretchedBillBoard:this.rendererEmitterSettings={speedFactor:0,lengthFactor:2},this.rendererSettings.instancingGeometry=ec;break;case ve.BillBoard:case ve.VerticalBillBoard:case ve.HorizontalBillBoard:this.rendererEmitterSettings={},this.rendererSettings.instancingGeometry=ec;break}this.rendererSettings.renderMode=e,t&&(this.restart(),this.particles.length=0),this.neededToUpdateRender=!0}}get renderOrder(){return this.rendererSettings.renderOrder}set renderOrder(e){this.rendererSettings.renderOrder=e,this.neededToUpdateRender=!0}get blending(){return this.rendererSettings.material.blending}set blending(e){this.rendererSettings.material.blending=e,this.neededToUpdateRender=!0}constructor(e){if(this.temp=new _e,this.travelDistance=0,this.normalMatrix=new mr,this.memory=[],this.listeners={},this.firstTimeUpdate=!0,this.autoDestroy=e.autoDestroy===void 0?!1:e.autoDestroy,this.duration=e.duration??1,this.looping=e.looping===void 0?!0:e.looping,this.prewarm=e.prewarm===void 0?!1:e.prewarm,this.startLife=e.startLife??new nt(5),this.startSpeed=e.startSpeed??new nt(0),this.startRotation=e.startRotation??new nt(0),this.startSize=e.startSize??new nt(1),this.startColor=e.startColor??new Bn(new gi(1,1,1,1)),this.emissionOverTime=e.emissionOverTime??new nt(10),this.emissionOverDistance=e.emissionOverDistance??new nt(0),this.emissionBursts=e.emissionBursts??[],this.onlyUsedByOther=e.onlyUsedByOther??!1,this.emitterShape=e.shape??new Fs,this.behaviors=e.behaviors??new Array,this.worldSpace=e.worldSpace??!1,this.rendererEmitterSettings=e.rendererEmitterSettings??{},e.renderMode===ve.StretchedBillBoard){const t=this.rendererEmitterSettings;e.speedFactor!==void 0&&(t.speedFactor=e.speedFactor),t.speedFactor=t.speedFactor??0,t.lengthFactor=t.lengthFactor??0}this.rendererSettings={instancingGeometry:e.instancingGeometry??ec,renderMode:e.renderMode??ve.BillBoard,renderOrder:e.renderOrder??0,material:e.material,uTileCount:e.uTileCount??1,vTileCount:e.vTileCount??1,blendTiles:e.blendTiles??!1,softParticles:e.softParticles??!1,softNearFade:e.softNearFade??0,softFarFade:e.softFarFade??0,layers:e.layers??new os},this.neededToUpdateRender=!0,this.particles=new Array,this.startTileIndex=e.startTileIndex||new nt(0),this.emitter=new a2(this),this.paused=!1,this.particleNum=0,this.emissionState={isBursting:!1,burstParticleIndex:0,burstParticleCount:0,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,travelDistance:0},this.emissionBursts.forEach(t=>t.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1}pause(){this.paused=!0}play(){this.paused=!1}stop(){this.restart(),this.pause()}spawn(e,t,i){jd.setFromRotationMatrix(i);const r=l2,s=jd,a=c2;i.decompose(r,s,a);for(let o=0;o<e;o++){for(t.burstParticleIndex=o,this.particleNum++;this.particles.length<this.particleNum;)this.rendererSettings.renderMode===ve.Trail?this.particles.push(new Hd):this.particles.push(new FN);const l=this.particles[this.particleNum-1];if(l.reset(),l.speedModifier=1,this.startColor.startGen(l.memory),this.startColor.genColor(l.memory,l.startColor,this.emissionState.time),l.color.copy(l.startColor),this.startSpeed.startGen(l.memory),l.startSpeed=this.startSpeed.genValue(l.memory,t.time/this.duration),this.startLife.startGen(l.memory),l.life=this.startLife.genValue(l.memory,t.time/this.duration),l.age=0,this.startSize.startGen(l.memory),this.startSize.type==="vec3function")this.startSize.genValue(l.memory,l.startSize,t.time/this.duration);else{const c=this.startSize.genValue(l.memory,t.time/this.duration);l.startSize.set(c,c,c)}if(this.startTileIndex.startGen(l.memory),l.uvTile=this.startTileIndex.genValue(l.memory),l.size.copy(l.startSize),this.rendererSettings.renderMode===ve.Mesh||this.rendererSettings.renderMode===ve.BillBoard||this.rendererSettings.renderMode===ve.VerticalBillBoard||this.rendererSettings.renderMode===ve.HorizontalBillBoard||this.rendererSettings.renderMode===ve.StretchedBillBoard){const c=l;this.startRotation.startGen(l.memory),this.rendererSettings.renderMode===ve.Mesh?(c.rotation instanceof lt||(c.rotation=new lt),this.startRotation.type==="rotation"?this.startRotation.genValue(l.memory,c.rotation,1,t.time/this.duration):c.rotation.setFromAxisAngle(o2,this.startRotation.genValue(c.memory,t.time/this.duration))):this.startRotation.type==="rotation"?c.rotation=0:c.rotation=this.startRotation.genValue(c.memory,t.time/this.duration)}else if(this.rendererSettings.renderMode===ve.Trail){const c=l;this.rendererEmitterSettings.startLength.startGen(c.memory),c.length=this.rendererEmitterSettings.startLength.genValue(c.memory,t.time/this.duration)}if(this.emitterShape.initialize(l,t),this.rendererSettings.renderMode===ve.Trail&&this.rendererEmitterSettings.followLocalOrigin){const c=l;c.localPosition=new _e().copy(c.position)}this.worldSpace?(l.position.applyMatrix4(i),l.startSize.multiply(a).abs(),l.size.copy(l.startSize),l.velocity.multiply(a).applyMatrix3(this.normalMatrix),l.rotation&&l.rotation instanceof lt&&l.rotation.multiplyQuaternions(jd,l.rotation)):this.onlyUsedByOther&&(l.parentMatrix=i);for(let c=0;c<this.behaviors.length;c++)this.behaviors[c].initialize(l,this)}}endEmit(){this.emitEnded=!0,this.autoDestroy&&(this.markForDestroy=!0),this.fire({type:"emitEnd",particleSystem:this})}dispose(){this._renderer&&this._renderer.deleteSystem(this),this.emitter.dispose(),this.emitter.parent&&this.emitter.parent.remove(this.emitter),this.fire({type:"destroy",particleSystem:this})}restart(){this.memory.length=0,this.paused=!1,this.particleNum=0,this.emissionState.isBursting=!1,this.emissionState.burstIndex=0,this.emissionState.burstWaveIndex=0,this.emissionState.time=0,this.emissionState.waitEmiting=0,this.behaviors.forEach(e=>{e.reset()}),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1,this.emissionBursts.forEach(e=>e.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory)}update(e){if(this.paused)return;let t=this.emitter;for(;t.parent;)t=t.parent;if(t.type!=="Scene"){this.dispose();return}if(this.firstTimeUpdate&&(this.firstTimeUpdate=!1,this.emitter.updateWorldMatrix(!0,!1)),this.emitEnded&&this.particleNum===0){this.markForDestroy&&this.emitter.parent&&this.dispose();return}if(this.looping&&this.prewarm&&!this.prewarmed){this.prewarmed=!0;for(let i=0;i<this.duration*d_;i++)this.update(1/d_)}e>.1&&(e=.1),this.neededToUpdateRender&&(this._renderer&&this._renderer.updateSystem(this),this.neededToUpdateRender=!1),this.onlyUsedByOther||this.emit(e,this.emissionState,this.emitter.matrixWorld),this.emitterShape.update(this,e);for(let i=0;i<this.behaviors.length;i++){this.behaviors[i].frameUpdate(e);for(let r=0;r<this.particleNum;r++)this.particles[r].died||this.behaviors[i].update(this.particles[r],e)}for(let i=0;i<this.particleNum;i++)this.rendererEmitterSettings.followLocalOrigin&&this.particles[i].localPosition?(this.particles[i].position.copy(this.particles[i].localPosition),this.particles[i].parentMatrix?this.particles[i].position.applyMatrix4(this.particles[i].parentMatrix):this.particles[i].position.applyMatrix4(this.emitter.matrixWorld)):this.particles[i].position.addScaledVector(this.particles[i].velocity,e*this.particles[i].speedModifier),this.particles[i].age+=e;if(this.rendererSettings.renderMode===ve.Trail)for(let i=0;i<this.particleNum;i++)this.particles[i].update();for(let i=0;i<this.particleNum;i++){const r=this.particles[i];r.died&&(!(r instanceof Hd)||r.previous.length===0)&&(this.particles[i]=this.particles[this.particleNum-1],this.particles[this.particleNum-1]=r,this.particleNum--,i--,this.fire({type:"particleDied",particleSystem:this,particle:r}))}}emit(e,t,i){t.time>this.duration&&(this.looping?(t.time-=this.duration,t.burstIndex=0,this.behaviors.forEach(s=>{s.reset()})):!this.emitEnded&&!this.onlyUsedByOther&&this.endEmit()),this.normalMatrix.getNormalMatrix(i);const r=Math.ceil(t.waitEmiting);for(this.spawn(r,t,i),t.waitEmiting-=r;t.burstIndex<this.emissionBursts.length&&this.emissionBursts[t.burstIndex].time<=t.time;){if(Math.random()<this.emissionBursts[t.burstIndex].probability){const s=this.emissionBursts[t.burstIndex].count.genValue(this.memory,this.time);t.isBursting=!0,t.burstParticleCount=s,this.spawn(s,t,i),t.isBursting=!1}t.burstIndex++}if(!this.emitEnded&&(t.waitEmiting+=e*this.emissionOverTime.genValue(this.memory,t.time/this.duration),t.previousWorldPos!=null)){this.temp.set(i.elements[12],i.elements[13],i.elements[14]),t.travelDistance+=t.previousWorldPos.distanceTo(this.temp);const s=this.emissionOverDistance.genValue(this.memory,t.time/this.duration);if(t.travelDistance*s>0){const a=Math.floor(t.travelDistance*s);t.travelDistance-=a/s,t.waitEmiting+=a}}t.previousWorldPos===void 0&&(t.previousWorldPos=new _e),t.previousWorldPos.set(i.elements[12],i.elements[13],i.elements[14]),t.time+=e}toJSON(e,t={}){if((e===void 0||typeof e=="string")&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}}),e.materials[this.rendererSettings.material.uuid]=this.rendererSettings.material.toJSON(e),t.useUrlForImage&&this.texture?.source!==void 0){const s=this.texture.source;e.images[s.uuid]={uuid:s.uuid,url:this.texture.image.url}}let i;this.renderMode===ve.Trail?i={startLength:this.rendererEmitterSettings.startLength.toJSON(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===ve.Mesh?i={}:this.renderMode===ve.StretchedBillBoard?i={speedFactor:this.rendererEmitterSettings.speedFactor,lengthFactor:this.rendererEmitterSettings.lengthFactor}:i={};const r=this.rendererSettings.instancingGeometry;return e.geometries&&!e.geometries[r.uuid]&&(e.geometries[r.uuid]=r.toJSON()),{version:"3.0",autoDestroy:this.autoDestroy,looping:this.looping,prewarm:this.prewarm,duration:this.duration,shape:this.emitterShape.toJSON(),startLife:this.startLife.toJSON(),startSpeed:this.startSpeed.toJSON(),startRotation:this.startRotation.toJSON(),startSize:this.startSize.toJSON(),startColor:this.startColor.toJSON(),emissionOverTime:this.emissionOverTime.toJSON(),emissionOverDistance:this.emissionOverDistance.toJSON(),emissionBursts:this.emissionBursts.map(s=>({time:s.time,count:s.count.toJSON(),probability:s.probability,interval:s.interval,cycle:s.cycle})),onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry.uuid,renderOrder:this.renderOrder,renderMode:this.renderMode,rendererEmitterSettings:i,material:this.rendererSettings.material.uuid,layers:this.layers.mask,startTileIndex:this.startTileIndex.toJSON(),uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.rendererSettings.softParticles,softFarFade:this.rendererSettings.softFarFade,softNearFade:this.rendererSettings.softNearFade,behaviors:this.behaviors.map(s=>s.toJSON()),worldSpace:this.worldSpace}}static fromJSON(e,t,i){const r=ON(e.shape,t);let s;if(e.renderMode===ve.Trail){const l=e.rendererEmitterSettings;s={startLength:l.startLength!=null?Qe(l.startLength):new nt(30),followLocalOrigin:l.followLocalOrigin}}else e.renderMode===ve.Mesh?s={}:e.renderMode===ve.StretchedBillBoard?(s=e.rendererEmitterSettings,e.speedFactor!=null&&(s.speedFactor=e.speedFactor)):s={};const a=new os;e.layers&&(a.mask=e.layers);const o=new tc({autoDestroy:e.autoDestroy,looping:e.looping,prewarm:e.prewarm,duration:e.duration,shape:r,startLife:Qe(e.startLife),startSpeed:Qe(e.startSpeed),startRotation:Zl(e.startRotation),startSize:Zl(e.startSize),startColor:Fd(e.startColor),emissionOverTime:Qe(e.emissionOverTime),emissionOverDistance:Qe(e.emissionOverDistance),emissionBursts:e.emissionBursts?.map(l=>({time:l.time,count:typeof l.count=="number"?new nt(l.count):Qe(l.count),probability:l.probability??1,interval:l.interval??.1,cycle:l.cycle??1})),onlyUsedByOther:e.onlyUsedByOther,instancingGeometry:t.geometries[e.instancingGeometry],renderMode:e.renderMode,rendererEmitterSettings:s,renderOrder:e.renderOrder,layers:a,material:e.material?t.materials[e.material]:e.texture?new Di({map:t.textures[e.texture],transparent:e.transparent??!0,blending:e.blending,side:xi}):new Di({color:16777215,transparent:!0,blending:To,side:xi}),startTileIndex:typeof e.startTileIndex=="number"?new nt(e.startTileIndex):Qe(e.startTileIndex),uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softFarFade:e.softFarFade,softNearFade:e.softNearFade,behaviors:[],worldSpace:e.worldSpace});return o.behaviors=e.behaviors.map(l=>{const c=qN(l,o);return c&&c.type==="EmitSubParticleSystem"&&(i[l.subParticleSystem]=c),c}).filter(l=>l!==null),o}addBehavior(e){this.behaviors.push(e)}getRendererSettings(){return this.rendererSettings}addEventListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}removeAllEventListeners(e){this.listeners[e]&&(this.listeners[e]=[])}removeEventListener(e,t){if(this.listeners[e]){const i=this.listeners[e].indexOf(t);i!==-1&&this.listeners[e].splice(i,1)}}fire(e){this.listeners[e.type]&&this.listeners[e.type].forEach(t=>t(e))}clone(){const e=[];for(const s of this.emissionBursts){const a={};Object.assign(a,s),e.push(a)}const t=[];for(const s of this.behaviors)t.push(s.clone());let i;this.renderMode===ve.Trail?i={startLength:this.rendererEmitterSettings.startLength.clone(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===ve.StretchedBillBoard?i={lengthFactor:this.rendererEmitterSettings.lengthFactor,speedFactor:this.rendererEmitterSettings.speedFactor}:i={};const r=new os;return r.mask=this.layers.mask,new tc({autoDestroy:this.autoDestroy,looping:this.looping,duration:this.duration,shape:this.emitterShape.clone(),startLife:this.startLife.clone(),startSpeed:this.startSpeed.clone(),startRotation:this.startRotation.clone(),startSize:this.startSize.clone(),startColor:this.startColor.clone(),emissionOverTime:this.emissionOverTime.clone(),emissionOverDistance:this.emissionOverDistance.clone(),emissionBursts:e,onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry,renderMode:this.renderMode,renderOrder:this.renderOrder,rendererEmitterSettings:i,material:this.rendererSettings.material,startTileIndex:this.startTileIndex,uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.softParticles,softFarFade:this.softFarFade,softNearFade:this.softNearFade,behaviors:t,worldSpace:this.worldSpace,layers:r})}}var Wd=`

#include <common>
#include <color_pars_fragment>
#include <map_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <alphatest_pars_fragment>

#include <tile_pars_fragment>
#include <soft_pars_fragment>

void main() {

    #include <clipping_planes_fragment>
    
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vColor;
    
    #include <logdepthbuf_fragment>
    
    #include <tile_fragment>
    #include <alphatest_fragment>

    outgoingLight = diffuseColor.rgb;
    
    #ifdef USE_COLOR_AS_ALPHA
    gl_FragColor = vec4( outgoingLight, diffuseColor.r );
    #else
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #endif
    
    #include <soft_fragment>
    #include <tonemapping_fragment>
}
`,Xd=`
#define STANDARD

#ifdef PHYSICAL
#define IOR
#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
uniform float ior;
#endif

#ifdef USE_SPECULAR
uniform float specularIntensity;
uniform vec3 specularColor;

#ifdef USE_SPECULAR_COLORMAP
uniform sampler2D specularColorMap;
#endif

#ifdef USE_SPECULAR_INTENSITYMAP
uniform sampler2D specularIntensityMap;
#endif
#endif

#ifdef USE_CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
uniform float dispersion;
#endif

#ifdef USE_IRIDESCENCE
uniform float iridescence;
uniform float iridescenceIOR;
uniform float iridescenceThicknessMinimum;
uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
uniform vec3 sheenColor;
uniform float sheenRoughness;

#ifdef USE_SHEEN_COLORMAP
uniform sampler2D sheenColorMap;
#endif

#ifdef USE_SHEEN_ROUGHNESSMAP
uniform sampler2D sheenRoughnessMap;
#endif
#endif

#ifdef USE_ANISOTROPY
uniform vec2 anisotropyVector;

#ifdef USE_ANISOTROPYMAP
uniform sampler2D anisotropyMap;
#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

vec4 diffuseColor = vec4( diffuse, opacity );
#include <clipping_planes_fragment>

ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
vec3 totalEmissiveRadiance = emissive;

#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <alphahash_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>

// accumulation
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>

// modulation
#include <aomap_fragment>

vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

#include <transmission_fragment>

vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

#ifdef USE_SHEEN

// Sheen energy compensation approximation calculation can be found at the end of
// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

#endif

#ifdef USE_CLEARCOAT

float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

#endif

#include <opaque_fragment>
#include <tonemapping_fragment>
#include <colorspace_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}`,h2=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;

void main() {
	
    vec2 alignedPosition = position.xy * size.xy;
    
    vec2 rotatedPosition;
    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
#ifdef HORIZONTAL
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.x += rotatedPosition.x;
    mvPosition.z -= rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
#elif defined(VERTICAL)
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.y += rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
    mvPosition.x += rotatedPosition.x;
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    mvPosition.xy += rotatedPosition;
#endif

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>

	#include <clipping_planes_vertex>

	#include <tile_vertex>
	#include <soft_vertex>
}
`,d2=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
// attribute vec4 color;

void main() {

    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;
    
    mat4 matrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);
    
    vec4 mvPosition = modelViewMatrix * (matrix * vec4( position, 1.0 ));

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
    #include <tile_vertex>
    #include <soft_vertex>
}
`,qd=`
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
#include <tile_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

    #include <tile_vertex>
    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;

    mat4 particleMatrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);

#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>

#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>

	// replace defaultnormal_vertex
	vec3 transformedNormal = objectNormal;
    mat3 m = mat3( particleMatrix );
    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    transformedNormal = m * transformedNormal;
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
        transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
        vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
        #ifdef FLIP_SIDED
        transformedTangent = - transformedTangent;
        #endif
    #endif

	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	// replace include <project_vertex>
  vec4 mvPosition = vec4( transformed, 1.0 );
  mvPosition = modelViewMatrix * (particleMatrix * mvPosition);
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
	vViewPosition = - mvPosition.xyz;
	
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
#endif
}
`,u2=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;
attribute vec4 velocity;

uniform float speedFactor;

void main() {
    float lengthFactor = velocity.w;
    float avgSize = (size.x + size.y) * 0.5;
#ifdef USE_SKEW
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;

    vec3 scaledPos = vec3(position.xy * size.xy, position.z);
    float vlength = length(viewVelocity);
    vec3 projVelocity =  dot(scaledPos, viewVelocity) * viewVelocity / vlength;
    mvPosition.xyz += scaledPos + projVelocity * (speedFactor / avgSize + lengthFactor / vlength);
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;
    float vlength = length(viewVelocity); 
    mvPosition.xyz += position.y * normalize(cross(mvPosition.xyz, viewVelocity)) * avgSize; // switch the cross to  match unity implementation
    mvPosition.xyz -= (position.x + 0.5) * viewVelocity * (1.0 + lengthFactor / vlength) * avgSize; // minus position.x to match unity implementation
#endif
	vColor = color;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <tile_vertex>
	#include <soft_vertex>
}
`;function Yd(n){return n===0?"uv":`uv${n}`}class p2 extends yl{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=qd,e.fragmentShader=Xd}}class m2 extends Yi{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=qd,e.fragmentShader=Xd}}class f2 extends h_{constructor(e){super(e),this.vector_=new _e,this.vector2_=new _e,this.vector3_=new _e,this.quaternion_=new lt,this.quaternion2_=new lt,this.quaternion3_=new lt,this.rotationMat_=new mr,this.rotationMat2_=new mr,this.maxParticles=1e3,this.setupBuffers(),this.rebuildMaterial()}buildExpandableBuffers(){this.offsetBuffer=new hr(new Float32Array(this.maxParticles*3),3),this.offsetBuffer.setUsage(di),this.geometry.setAttribute("offset",this.offsetBuffer),this.colorBuffer=new hr(new Float32Array(this.maxParticles*4),4),this.colorBuffer.setUsage(di),this.geometry.setAttribute("color",this.colorBuffer),this.settings.renderMode===ve.Mesh?(this.rotationBuffer=new hr(new Float32Array(this.maxParticles*4),4),this.rotationBuffer.setUsage(di),this.geometry.setAttribute("rotation",this.rotationBuffer)):(this.settings.renderMode===ve.BillBoard||this.settings.renderMode===ve.HorizontalBillBoard||this.settings.renderMode===ve.VerticalBillBoard||this.settings.renderMode===ve.StretchedBillBoard)&&(this.rotationBuffer=new hr(new Float32Array(this.maxParticles),1),this.rotationBuffer.setUsage(di),this.geometry.setAttribute("rotation",this.rotationBuffer)),this.sizeBuffer=new hr(new Float32Array(this.maxParticles*3),3),this.sizeBuffer.setUsage(di),this.geometry.setAttribute("size",this.sizeBuffer),this.uvTileBuffer=new hr(new Float32Array(this.maxParticles),1),this.uvTileBuffer.setUsage(di),this.geometry.setAttribute("uvTile",this.uvTileBuffer),this.settings.renderMode===ve.StretchedBillBoard&&(this.velocityBuffer=new hr(new Float32Array(this.maxParticles*4),4),this.velocityBuffer.setUsage(di),this.geometry.setAttribute("velocity",this.velocityBuffer))}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new Kb,this.geometry.setIndex(this.settings.instancingGeometry.getIndex()),this.settings.instancingGeometry.hasAttribute("normal")&&this.geometry.setAttribute("normal",this.settings.instancingGeometry.getAttribute("normal")),this.geometry.setAttribute("position",this.settings.instancingGeometry.getAttribute("position")),this.settings.instancingGeometry.hasAttribute("uv")&&this.geometry.setAttribute("uv",this.settings.instancingGeometry.getAttribute("uv")),this.buildExpandableBuffers()}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={},t={};this.settings.material.type!=="MeshStandardMaterial"&&this.settings.material.type!=="MeshPhysicalMaterial"&&(e.map=new Ai(this.settings.material.map)),this.settings.material.alphaTest&&(t.USE_ALPHATEST="",e.alphaTest=new Ai(this.settings.material.alphaTest)),t.USE_UV="";const i=this.settings.uTileCount,r=this.settings.vTileCount;(i>1||r>1)&&(t.UV_TILE="",e.tileCount=new Ai(new an(i,r))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.material.normalMap&&(t.USE_NORMALMAP="",t.NORMALMAP_UV=Yd(this.settings.material.normalMap.channel),e.normalMapTransform=new Ai(new mr().copy(this.settings.material.normalMap.matrix))),this.settings.material.map&&(t.USE_MAP="",this.settings.blendTiles&&(t.TILE_BLEND=""),t.MAP_UV=Yd(this.settings.material.map.channel),e.mapTransform=new Ai(new mr().copy(this.settings.material.map.matrix))),t.USE_COLOR_ALPHA="";let s;if(this.settings.softParticles){t.SOFT_PARTICLES="";const o=this.settings.softNearFade,l=1/(this.settings.softFarFade-this.settings.softNearFade);e.softParams=new Ai(new an(o,l)),e.depthTexture=new Ai(null);const c=e.projParams=new Ai(new gi);s=(h,d,u)=>{c.value.set(u.near,u.far,0,0)}}let a=!1;if(this.settings.renderMode===ve.BillBoard||this.settings.renderMode===ve.VerticalBillBoard||this.settings.renderMode===ve.HorizontalBillBoard||this.settings.renderMode===ve.Mesh){let o,l;this.settings.renderMode===ve.Mesh?this.settings.material.type==="MeshStandardMaterial"||this.settings.material.type==="MeshPhysicalMaterial"?(t.USE_COLOR="",o=qd,l=Xd,a=!0):(o=d2,l=Wd):(o=h2,l=Wd),this.settings.renderMode===ve.VerticalBillBoard?t.VERTICAL="":this.settings.renderMode===ve.HorizontalBillBoard&&(t.HORIZONTAL="");let c=!1;this.settings.renderMode===ve.Mesh&&(this.settings.material.type==="MeshStandardMaterial"?(this.material=new p2({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0):this.settings.material.type==="MeshPhysicalMaterial"&&(this.material=new m2({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,c=!0)),c||(this.material=new qi({uniforms:e,defines:t,vertexShader:o,fragmentShader:l,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest,lights:a}))}else if(this.settings.renderMode===ve.StretchedBillBoard)e.speedFactor=new Ai(1),this.material=new qi({uniforms:e,defines:t,vertexShader:u2,fragmentShader:Wd,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest});else throw new Error("render mode unavailable");this.material&&s&&(this.material.onBeforeRender=s)}update(){let e=0,t=0;const i=this.getVisibleSystems();for(const r of i)t+=r.particleNum;t>this.maxParticles&&this.expandBuffers(t);for(const r of i){r.emitter.updateMatrixWorld&&(r.emitter.updateWorldMatrix(!0,!1),r.emitter.updateMatrixWorld(!0));const s=r.particles,a=r.particleNum,o=this.quaternion2_,l=this.vector2_,c=this.vector3_;r.emitter.matrixWorld.decompose(l,o,c),this.rotationMat_.setFromMatrix4(r.emitter.matrixWorld);for(let h=0;h<a;h++,e++){const d=s[h];if(this.settings.renderMode===ve.Mesh){let p;if(r.worldSpace)p=d.rotation;else{let g;d.parentMatrix?g=this.quaternion3_.setFromRotationMatrix(d.parentMatrix):g=o,p=this.quaternion_,p.copy(g).multiply(d.rotation)}this.rotationBuffer.setXYZW(e,p.x,p.y,p.z,p.w)}else(this.settings.renderMode===ve.StretchedBillBoard||this.settings.renderMode===ve.VerticalBillBoard||this.settings.renderMode===ve.HorizontalBillBoard||this.settings.renderMode===ve.BillBoard)&&this.rotationBuffer.setX(e,d.rotation);let u;if(r.worldSpace?u=d.position:(u=this.vector_,d.parentMatrix?u.copy(d.position).applyMatrix4(d.parentMatrix):u.copy(d.position).applyMatrix4(r.emitter.matrixWorld)),this.offsetBuffer.setXYZ(e,u.x,u.y,u.z),this.colorBuffer.setXYZW(e,d.color.x,d.color.y,d.color.z,d.color.w),r.worldSpace?this.sizeBuffer.setXYZ(e,d.size.x,d.size.y,d.size.z):d.parentMatrix?this.sizeBuffer.setXYZ(e,d.size.x,d.size.y,d.size.z):this.sizeBuffer.setXYZ(e,d.size.x*Math.abs(c.x),d.size.y*Math.abs(c.y),d.size.z*Math.abs(c.z)),this.uvTileBuffer.setX(e,d.uvTile),this.settings.renderMode===ve.StretchedBillBoard&&this.velocityBuffer){let p=r.rendererEmitterSettings.speedFactor;p===0&&(p=.001);const g=r.rendererEmitterSettings.lengthFactor;let y;r.worldSpace?y=d.velocity:(y=this.vector_,d.parentMatrix?(this.rotationMat2_.setFromMatrix4(d.parentMatrix),y.copy(d.velocity).applyMatrix3(this.rotationMat2_)):y.copy(d.velocity).applyMatrix3(this.rotationMat_)),this.velocityBuffer.setXYZW(e,y.x*p,y.y*p,y.z*p,g)}}}this.geometry.instanceCount=e,e>0&&(this.offsetBuffer.clearUpdateRanges(),this.offsetBuffer.addUpdateRange(0,e*3),this.offsetBuffer.needsUpdate=!0,this.sizeBuffer.clearUpdateRanges(),this.sizeBuffer.addUpdateRange(0,e*3),this.sizeBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.uvTileBuffer.clearUpdateRanges(),this.uvTileBuffer.addUpdateRange(0,e),this.uvTileBuffer.needsUpdate=!0,this.settings.renderMode===ve.StretchedBillBoard&&this.velocityBuffer&&(this.velocityBuffer.clearUpdateRanges(),this.velocityBuffer.addUpdateRange(0,e*4),this.velocityBuffer.needsUpdate=!0),this.settings.renderMode===ve.Mesh?(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e*4),this.rotationBuffer.needsUpdate=!0):(this.settings.renderMode===ve.StretchedBillBoard||this.settings.renderMode===ve.HorizontalBillBoard||this.settings.renderMode===ve.VerticalBillBoard||this.settings.renderMode===ve.BillBoard)&&(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e),this.rotationBuffer.needsUpdate=!0))}dispose(){this.geometry.dispose()}}var _2=`

#include <common>
#include <tile_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform sampler2D alphaMap;
uniform float useAlphaMap;
uniform float visibility;
uniform float alphaTest;

varying vec4 vColor;
    
void main() {
    #include <clipping_planes_fragment>
    #include <logdepthbuf_fragment>

    vec4 diffuseColor = vColor;
    
    #ifdef USE_MAP
    #include <tile_fragment>
    #ifndef USE_COLOR_AS_ALPHA
    #endif
    #endif
    if( useAlphaMap == 1. ) diffuseColor.a *= texture2D( alphaMap, vUv).a;
    if( diffuseColor.a < alphaTest ) discard;
    gl_FragColor = diffuseColor;

    #include <fog_fragment>
    #include <tonemapping_fragment>
}`,g2=`
#include <common>
#include <tile_pars_vertex>
#include <color_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <fog_pars_vertex>

attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;

uniform vec2 resolution;
uniform float lineWidth;
uniform float sizeAttenuation;
    
vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
}
    
void main() {

    #include <tile_vertex>
    
    float aspect = resolution.x / resolution.y;

    vColor = color;

    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4( position, 1.0 );
    vec4 prevPos = m * vec4( previous, 1.0 );
    vec4 nextPos = m * vec4( next, 1.0 );

    vec2 currentP = fix( finalPosition, aspect );
    vec2 prevP = fix( prevPos, aspect );
    vec2 nextP = fix( nextPos, aspect );

    float w = lineWidth * width;

    vec2 dir;
    if( nextP == currentP ) dir = normalize( currentP - prevP );
    else if( prevP == currentP ) dir = normalize( nextP - currentP );
    else {
        vec2 dir1 = normalize( currentP - prevP );
        vec2 dir2 = normalize( nextP - currentP );
        dir = normalize( dir1 + dir2 );

        vec2 perp = vec2( -dir1.y, dir1.x );
        vec2 miter = vec2( -dir.y, dir.x );
        //w = clamp( w / dot( miter, perp ), 0., 4., * lineWidth * width );

    }

    //vec2 normal = ( cross( vec3( dir, 0. ) vec3( 0., 0., 1. ) ) ).xy;
    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
    normal.xy *= .5 * w;
    normal *= projectionMatrix;
    if( sizeAttenuation == 0. ) {
        normal.xy *= finalPosition.w;
        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
    }

    finalPosition.xy += normal.xy * side;

    gl_Position = finalPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    
	#include <fog_vertex>
}`;class w2 extends h_{constructor(e){super(e),this.vector_=new _e,this.vector2_=new _e,this.vector3_=new _e,this.quaternion_=new lt,this.maxParticles=1e4,this.setupBuffers(),this.rebuildMaterial()}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new ui,this.indexBuffer=new gt(new Uint32Array(this.maxParticles*6),1),this.indexBuffer.setUsage(di),this.geometry.setIndex(this.indexBuffer),this.positionBuffer=new gt(new Float32Array(this.maxParticles*6),3),this.positionBuffer.setUsage(di),this.geometry.setAttribute("position",this.positionBuffer),this.previousBuffer=new gt(new Float32Array(this.maxParticles*6),3),this.previousBuffer.setUsage(di),this.geometry.setAttribute("previous",this.previousBuffer),this.nextBuffer=new gt(new Float32Array(this.maxParticles*6),3),this.nextBuffer.setUsage(di),this.geometry.setAttribute("next",this.nextBuffer),this.widthBuffer=new gt(new Float32Array(this.maxParticles*2),1),this.widthBuffer.setUsage(di),this.geometry.setAttribute("width",this.widthBuffer),this.sideBuffer=new gt(new Float32Array(this.maxParticles*2),1),this.sideBuffer.setUsage(di),this.geometry.setAttribute("side",this.sideBuffer),this.uvBuffer=new gt(new Float32Array(this.maxParticles*4),2),this.uvBuffer.setUsage(di),this.geometry.setAttribute("uv",this.uvBuffer),this.colorBuffer=new gt(new Float32Array(this.maxParticles*8),4),this.colorBuffer.setUsage(di),this.geometry.setAttribute("color",this.colorBuffer)}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;const e={lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},resolution:{value:new an(1,1)},sizeAttenuation:{value:1},visibility:{value:1},alphaTest:{value:0}},t={};if(t.USE_UV="",t.USE_COLOR_ALPHA="",this.settings.material.map&&(t.USE_MAP="",t.MAP_UV=Yd(this.settings.material.map.channel),e.map=new Ai(this.settings.material.map),e.mapTransform=new Ai(new mr().copy(this.settings.material.map.matrix))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=""),this.settings.renderMode===ve.Trail)this.material=new qi({uniforms:e,defines:t,vertexShader:g2,fragmentShader:_2,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,side:this.settings.material.side,blending:this.settings.material.blending||To,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha});else throw new Error("render mode unavailable")}update(){let e=0,t=0,i=0;const r=this.getVisibleSystems();for(const s of r)for(let a=0;a<s.particleNum;a++)i+=s.particles[a].previous.length*2;i>this.maxParticles&&this.expandBuffers(i);for(const s of r){s.emitter.updateMatrixWorld&&(s.emitter.updateWorldMatrix(!0,!1),s.emitter.updateMatrixWorld(!0));const a=this.quaternion_,o=this.vector2_,l=this.vector3_;s.emitter.matrixWorld.decompose(o,a,l);const c=s.particles,h=s.particleNum,d=this.settings.uTileCount,u=this.settings.vTileCount,p=1/d,g=1/u;for(let y=0;y<h;y++){const f=c[y],_=f.uvTile%u,S=Math.floor(f.uvTile/u+.001),v=f.previous.values();let M=v.next(),I=M.value,R=I;M.done||(M=v.next());let A;M.value!==void 0?A=M.value:A=R;for(let z=0;z<f.previous.length;z++,e+=2){if(this.positionBuffer.setXYZ(e,R.position.x,R.position.y,R.position.z),this.positionBuffer.setXYZ(e+1,R.position.x,R.position.y,R.position.z),s.worldSpace?(this.positionBuffer.setXYZ(e,R.position.x,R.position.y,R.position.z),this.positionBuffer.setXYZ(e+1,R.position.x,R.position.y,R.position.z)):(f.parentMatrix?this.vector_.copy(R.position).applyMatrix4(f.parentMatrix):this.vector_.copy(R.position).applyMatrix4(s.emitter.matrixWorld),this.positionBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.positionBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.previousBuffer.setXYZ(e,I.position.x,I.position.y,I.position.z),this.previousBuffer.setXYZ(e+1,I.position.x,I.position.y,I.position.z)):(f.parentMatrix?this.vector_.copy(I.position).applyMatrix4(f.parentMatrix):this.vector_.copy(I.position).applyMatrix4(s.emitter.matrixWorld),this.previousBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.previousBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),s.worldSpace?(this.nextBuffer.setXYZ(e,A.position.x,A.position.y,A.position.z),this.nextBuffer.setXYZ(e+1,A.position.x,A.position.y,A.position.z)):(f.parentMatrix?this.vector_.copy(A.position).applyMatrix4(f.parentMatrix):this.vector_.copy(A.position).applyMatrix4(s.emitter.matrixWorld),this.nextBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.nextBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),this.sideBuffer.setX(e,1),this.sideBuffer.setX(e+1,-1),s.worldSpace)this.widthBuffer.setX(e,R.size),this.widthBuffer.setX(e+1,R.size);else if(f.parentMatrix)this.widthBuffer.setX(e,R.size),this.widthBuffer.setX(e+1,R.size);else{const E=(Math.abs(l.x)+Math.abs(l.y)+Math.abs(l.z))/3;this.widthBuffer.setX(e,R.size*E),this.widthBuffer.setX(e+1,R.size*E)}this.uvBuffer.setXY(e,(z/f.previous.length+_)*p,(u-S-1)*g),this.uvBuffer.setXY(e+1,(z/f.previous.length+_)*p,(u-S)*g),this.colorBuffer.setXYZW(e,R.color.x,R.color.y,R.color.z,R.color.w),this.colorBuffer.setXYZW(e+1,R.color.x,R.color.y,R.color.z,R.color.w),z+1<f.previous.length&&(this.indexBuffer.setX(t*3,e),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+2),t++,this.indexBuffer.setX(t*3,e+2),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+3),t++),I=R,R=A,M.done||(M=v.next(),M.value!==void 0&&(A=M.value))}}}this.positionBuffer.clearUpdateRanges(),this.positionBuffer.addUpdateRange(0,e*3),this.positionBuffer.needsUpdate=!0,this.previousBuffer.clearUpdateRanges(),this.previousBuffer.addUpdateRange(0,e*3),this.previousBuffer.needsUpdate=!0,this.nextBuffer.clearUpdateRanges(),this.nextBuffer.addUpdateRange(0,e*3),this.nextBuffer.needsUpdate=!0,this.sideBuffer.clearUpdateRanges(),this.sideBuffer.addUpdateRange(0,e),this.sideBuffer.needsUpdate=!0,this.widthBuffer.clearUpdateRanges(),this.widthBuffer.addUpdateRange(0,e),this.widthBuffer.needsUpdate=!0,this.uvBuffer.clearUpdateRanges(),this.uvBuffer.addUpdateRange(0,e*2),this.uvBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.indexBuffer.clearUpdateRanges(),this.indexBuffer.addUpdateRange(0,t*3),this.indexBuffer.needsUpdate=!0,this.geometry.setDrawRange(0,t*3)}dispose(){this.geometry.dispose()}}class Jd extends _t{constructor(){super(),this.batches=[],this.systemToBatchIndex=new Map,this.type="BatchedRenderer",this.depthTexture=null}static equals(e,t){return e.material.side===t.material.side&&e.material.blending===t.material.blending&&e.material.blendSrc===t.material.blendSrc&&e.material.blendDst===t.material.blendDst&&e.material.blendEquation===t.material.blendEquation&&e.material.premultipliedAlpha===t.material.premultipliedAlpha&&e.material.transparent===t.material.transparent&&e.material.depthTest===t.material.depthTest&&e.material.type===t.material.type&&e.material.alphaTest===t.material.alphaTest&&e.material.map===t.material.map&&e.renderMode===t.renderMode&&e.blendTiles===t.blendTiles&&e.softParticles===t.softParticles&&e.softFarFade===t.softFarFade&&e.softNearFade===t.softNearFade&&e.uTileCount===t.uTileCount&&e.vTileCount===t.vTileCount&&e.instancingGeometry===t.instancingGeometry&&e.renderOrder===t.renderOrder&&e.layers.mask===t.layers.mask}addSystem(e){e._renderer=this;const t=e.getRendererSettings();for(let r=0;r<this.batches.length;r++)if(Jd.equals(this.batches[r].settings,t)){this.batches[r].addSystem(e),this.systemToBatchIndex.set(e,r);return}let i;switch(t.renderMode){case ve.Trail:i=new w2(t);break;case ve.Mesh:case ve.BillBoard:case ve.VerticalBillBoard:case ve.HorizontalBillBoard:case ve.StretchedBillBoard:i=new f2(t);break}this.depthTexture&&i.applyDepthTexture(this.depthTexture),i.addSystem(e),this.batches.push(i),this.systemToBatchIndex.set(e,this.batches.length-1),this.add(i)}deleteSystem(e){const t=this.systemToBatchIndex.get(e);t!=null&&(this.batches[t].removeSystem(e),this.systemToBatchIndex.delete(e))}setDepthTexture(e){this.depthTexture=e;for(const t of this.batches)t.applyDepthTexture(e)}updateSystem(e){this.deleteSystem(e),this.addSystem(e)}update(e){this.systemToBatchIndex.forEach((t,i)=>{i.update(e)});for(let t=0;t<this.batches.length;t++)this.batches[t].update()}}s2(),JN(KN),console.log("%c Particle system powered by three.quarks. https://quarks.art/","font-size: 14px; font-weight: bold;");const Kd=new Xe;class ic{constructor(e){e=e||{},this.vertices={near:[new U,new U,new U,new U],far:[new U,new U,new U,new U]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return Kd.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(r){r.applyMatrix4(Kd)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(r){r.applyMatrix4(Kd);const s=Math.abs(r.z);i?r.z*=Math.min(t/s,1):r.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new ic);t.length=e.length;for(let i=0;i<e.length;i++){const r=t[i];if(i===0)for(let s=0;s<4;s++)r.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)r.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)r.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)r.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}const u_={lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		// Iridescence F0 approximation
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
 	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

  		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )
		vec2 cascade;
		float cascadeCenter;
		float closestEdge;
		float margin;
		float csmx;
		float csmy;

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
				// NOTE: Depth gets larger away from the camera.
				// cascade.x is closer, cascade.y is further
				cascade = CSM_cascades[ i ];
				cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
				closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
				margin = 0.25 * pow( closestEdge, 2.0 );
				csmx = cascade.x - margin / 2.0;
				csmy = cascade.y + margin / 2.0;
				if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

					float dist = min( linearDepth - csmx, csmy - linearDepth );
					float ratio = clamp( dist / margin, 0.0, 1.0 );

					vec3 prevColor = directLight.color;
					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
					directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

					ReflectedLight prevLight = reflectedLight;
					RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

					bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
					float blendRatio = shouldBlend ? ratio : 1.0;

					reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
					reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
					reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
					reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

				}
			#endif

		}
		#pragma unroll_loop_end
	#elif defined (USE_SHADOWMAP)

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, directLight );

			#if ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )

				directionalLightShadow = directionalLightShadows[ i ];
				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

				if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

			#endif

		}
		#pragma unroll_loop_end

	#elif ( NUM_DIR_LIGHT_SHADOWS > 0 )
		// note: no loop here - all CSM lights are in fact one light only
		getDirectionalLightInfo( directionalLights[0], directLight );
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, directLight );

			RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[CSM_CASCADES];
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+Ge.lights_pars_begin},p_=new Xe,Zd=new ic,Or=new U,_o=new bi,Qd=[],$d=[],eu=new Xe,m_=new Xe,y2=new U(0,1,0);class v2{constructor(e){this.camera=e.camera,this.parent=e.parent,this.cascades=e.cascades||3,this.maxFar=e.maxFar||1e5,this.mode=e.mode||"practical",this.shadowMapSize=e.shadowMapSize||2048,this.shadowBias=e.shadowBias||1e-6,this.lightDirection=e.lightDirection||new U(1,-1,1).normalize(),this.lightIntensity=e.lightIntensity||3,this.lightNear=e.lightNear||1,this.lightFar=e.lightFar||2e3,this.lightMargin=e.lightMargin||200,this.customSplitsCallback=e.customSplitsCallback,this.fade=!1,this.mainFrustum=new ic,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new bm(16777215,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=this.lightNear,t.shadow.camera.far=this.lightFar,t.shadow.bias=this.shadowBias,this.parent.add(t),this.parent.add(t.target),this.lights.push(t)}}initCascades(){const e=this.camera;e.updateProjectionMatrix(),this.mainFrustum.setFromProjectionMatrix(e.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const i=this.lights[t].shadow.camera,r=this.frustums[t],s=r.vertices.near,a=r.vertices.far,o=a[0];let l;o.distanceTo(a[2])>o.distanceTo(s[2])?l=a[2]:l=s[2];let c=o.distanceTo(l);if(this.fade){const h=this.camera,d=Math.max(h.far,this.maxFar),u=r.vertices.far[0].z/(d-h.near),p=.25*Math.pow(u,2)*(d-h.near);c+=p}i.left=-c/2,i.right=c/2,i.top=c/2,i.bottom=-c/2,i.updateProjectionMatrix()}}getBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":i(this.cascades,e.near,t,this.breaks);break;case"logarithmic":r(this.cascades,e.near,t,this.breaks);break;case"practical":s(this.cascades,e.near,t,.5,this.breaks);break;case"custom":this.customSplitsCallback===void 0&&console.error("CSM: Custom split scheme callback not defined."),this.customSplitsCallback(this.cascades,e.near,t,this.breaks);break}function i(a,o,l,c){for(let h=1;h<a;h++)c.push((o+(l-o)*h/a)/l);c.push(1)}function r(a,o,l,c){for(let h=1;h<a;h++)c.push(o*(l/o)**(h/a)/l);c.push(1)}function s(a,o,l,c,h){Qd.length=0,$d.length=0,r(a,o,l,$d),i(a,o,l,Qd);for(let d=1;d<a;d++)h.push(rh.lerp(Qd[d-1],$d[d-1],c));h.push(1)}}update(){const e=this.camera,t=this.frustums;eu.lookAt(new U,this.lightDirection,y2),m_.copy(eu).invert();for(let i=0;i<t.length;i++){const r=this.lights[i],s=r.shadow.camera,a=(s.right-s.left)/this.shadowMapSize,o=(s.top-s.bottom)/this.shadowMapSize;p_.multiplyMatrices(m_,e.matrixWorld),t[i].toSpace(p_,Zd);const l=Zd.vertices.near,c=Zd.vertices.far;_o.makeEmpty();for(let h=0;h<4;h++)_o.expandByPoint(l[h]),_o.expandByPoint(c[h]);_o.getCenter(Or),Or.z=_o.max.z+this.lightMargin,Or.x=Math.floor(Or.x/a)*a,Or.y=Math.floor(Or.y/o)*o,Or.applyMatrix4(eu),r.position.copy(Or),r.target.position.copy(Or),r.target.position.x+=this.lightDirection.x,r.target.position.y+=this.lightDirection.y,r.target.position.z+=this.lightDirection.z}}injectInclude(){Ge.lights_fragment_begin=u_.lights_fragment_begin,Ge.lights_pars_begin=u_.lights_pars_begin}setupMaterial(e){e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,this.fade&&(e.defines.CSM_FADE="");const t=[],i=this,r=this.shaders;e.onBeforeCompile=function(s){const a=Math.min(i.camera.far,i.maxFar);i.getExtendedBreaks(t),s.uniforms.CSM_cascades={value:t},s.uniforms.cameraNear={value:i.camera.near},s.uniforms.shadowFar={value:a},r.set(e,s)},r.set(e,null)}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar);this.shaders.forEach(function(t,i){if(t!==null){const r=t.uniforms;this.getExtendedBreaks(r.CSM_cascades.value),r.cameraNear.value=this.camera.near,r.shadowFar.value=e}!this.fade&&"CSM_FADE"in i.defines?(delete i.defines.CSM_FADE,i.needsUpdate=!0):this.fade&&!("CSM_FADE"in i.defines)&&(i.defines.CSM_FADE="",i.needsUpdate=!0)},this)}getExtendedBreaks(e){for(;e.length<this.breaks.length;)e.push(new De);e.length=this.breaks.length;for(let t=0;t<this.cascades;t++){const i=this.breaks[t],r=this.breaks[t-1]||0;e[t].x=r,e[t].y=i}}updateFrustums(){this.getBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}remove(){for(let e=0;e<this.lights.length;e++)this.parent.remove(this.lights[e].target),this.parent.remove(this.lights[e])}dispose(){const e=this.shaders;e.forEach(function(t,i){delete i.onBeforeCompile,delete i.defines.USE_CSM,delete i.defines.CSM_CASCADES,delete i.defines.CSM_FADE,t!==null&&(delete t.uniforms.CSM_cascades,delete t.uniforms.cameraNear,delete t.uniforms.shadowFar),i.needsUpdate=!0}),e.clear()}}class x2 extends Rr{constructor(e){super(),this.csm=e,this.displayFrustum=!0,this.displayPlanes=!0,this.displayShadowBounds=!0;const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new ui;r.setIndex(new gt(t,1)),r.setAttribute("position",new gt(i,3,!1));const s=new kh(r,new ul);this.add(s),this.frustumLines=s,this.cascadeLines=[],this.cascadePlanes=[],this.shadowLines=[]}updateVisibility(){const e=this.displayFrustum,t=this.displayPlanes,i=this.displayShadowBounds,r=this.frustumLines,s=this.cascadeLines,a=this.cascadePlanes,o=this.shadowLines;for(let l=0,c=s.length;l<c;l++){const h=s[l],d=a[l],u=o[l];h.visible=e,d.visible=e&&t,u.visible=i}r.visible=e}update(){const e=this.csm,t=e.camera,i=e.cascades,r=e.mainFrustum,s=e.frustums,a=e.lights,o=this.frustumLines.geometry.getAttribute("position"),l=this.cascadeLines,c=this.cascadePlanes,h=this.shadowLines;for(this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.updateMatrixWorld(!0);l.length>i;)this.remove(l.pop()),this.remove(c.pop()),this.remove(h.pop());for(;l.length<i;){const p=new Cm(new bi,16777215),g=new Di({transparent:!0,opacity:.1,depthWrite:!1,side:xi}),y=new pi(new ys,g),f=new Rr,_=new Cm(new bi,16776960);f.add(_),this.add(p),this.add(y),this.add(f),l.push(p),c.push(y),h.push(f)}for(let p=0;p<i;p++){const g=s[p],y=a[p].shadow.camera,f=g.vertices.far,_=l[p],S=c[p],v=h[p],M=v.children[0];_.box.min.copy(f[2]),_.box.max.copy(f[0]),_.box.max.z+=1e-4,S.position.addVectors(f[0],f[2]),S.position.multiplyScalar(.5),S.scale.subVectors(f[0],f[2]),S.scale.z=1e-4,this.remove(v),v.position.copy(y.position),v.quaternion.copy(y.quaternion),v.scale.copy(y.scale),v.updateMatrixWorld(!0),this.attach(v),M.box.min.set(y.bottom,y.left,-y.far),M.box.max.set(y.top,y.right,-y.near)}const d=r.vertices.near,u=r.vertices.far;o.setXYZ(0,u[0].x,u[0].y,u[0].z),o.setXYZ(1,u[3].x,u[3].y,u[3].z),o.setXYZ(2,u[2].x,u[2].y,u[2].z),o.setXYZ(3,u[1].x,u[1].y,u[1].z),o.setXYZ(4,d[0].x,d[0].y,d[0].z),o.setXYZ(5,d[3].x,d[3].y,d[3].z),o.setXYZ(6,d[2].x,d[2].y,d[2].z),o.setXYZ(7,d[1].x,d[1].y,d[1].z),o.needsUpdate=!0}dispose(){const e=this.frustumLines,t=this.cascadeLines,i=this.cascadePlanes,r=this.shadowLines;e.geometry.dispose(),e.material.dispose();const s=this.csm.cascades;for(let a=0;a<s;a++){const o=t[a],l=i[a],c=r[a].children[0];o.dispose(),l.geometry.dispose(),l.material.dispose(),c.dispose()}}}var Ws=!1,dU=new Dr.Vector3(425,-45,-120),Xs=new Dr.Vector3(440.32,-46.964,-96.437),f_=new Mi(0,-.279,0,.96),__=1/60,qs=!1,rc={x:-3.5,y:1.1,z:0},b2=.2,S2=.4,tu=Ft(rc,Xs),iu=Xs,li,ii,Fi,dn,go,Ys;let nc,Js;var g_={x:-10,y:10,z:0},Hn,Ot,zt,wo=0;const ri={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,VIEW:8,MENU:9,DPAD_LEFT:14,DPAD_RIGHT:15},M2=.5,ru=.15;var w_=[],yo=!1,nu=!1,su=!1,au=!1,ou=!1,lu=!1,cu=!1;function sc(){return document.body.classList.contains("touchDetected")?.9:.77}var hu=!1,ac=!1,y_=new Audio("./assets/music.mp3"),vo,xo;let oc=1,E2=1.01,T2=.45,zr=1,lc=80,A2=10,R2=.03,C2=.02,P2=.02,du=.25,L2=Math.PI*.139,I2=.2,N2=.01,U2=1,Fr,uu;const v_=new wm,bo=new pS(v_);v_.onLoad=function(){console.log("Loading complete!"),tU()};var Br=[],cc=[],x_,b_,S_,pu,mu=.05;let D2,O2,z2,F2,un=[D2,O2,z2,F2],M_=["./assets/wheelFL.glb","./assets/wheelFR.glb","./assets/wheelRL.glb","./assets/wheelRR.glb"],fu=[];A_(),V2(),R_();function B2(){li.updateMatrixWorld(!0),Hn=new tS,li.add(Hn),Ot=new Am(Hn),zt=new Am(Hn),E_(Ot),E_(zt);const n=new Qb;n.load("./assets/engine.mp3",function(e){Ot.setBuffer(T_(e,Ot)),Ot.setLoop(!0)}),n.load("./assets/skid.mp3",function(e){zt.setBuffer(T_(e,zt)),zt.setLoop(!0),zt.setVolume(0)})}function E_(n){n.setDistanceModel("inverse"),n.setRefDistance(4),n.setRolloffFactor(.9),n.setMaxDistance(1e4),n.panner.panningModel="HRTF"}const k2=.01,H2=.01;function T_(n,e){const t=e.context,i=n.sampleRate,r=n.numberOfChannels,s=n.length,a=[];for(let p=0;p<r;p++)a.push(n.getChannelData(p));function o(p){for(let g=0;g<r;g++)if(Math.abs(a[g][p])>k2)return!1;return!0}let l=0;for(;l<s&&o(l);)l++;let c=s;for(;c>l&&o(c-1);)c--;if(l>=c)return console.warn("[audio] trimLoopSilence: buffer enti\xE8rement silencieux, buffer original conserv\xE9"),n;const h=c-l,d=Math.min(Math.floor(H2*i),Math.floor(h/2)),u=t.createBuffer(r,h,i);for(let p=0;p<r;p++){const g=u.getChannelData(p),y=a[p];for(let f=0;f<h;f++)g[f]=y[l+f];for(let f=0;f<d;f++){const _=f/d,S=h-d+f;g[S]=g[S]*(1-_)+y[l+f]*_}}return console.log("[audio] trimLoopSilence: conserv\xE9 "+(h/i).toFixed(3)+"s sur "+n.duration.toFixed(3)+"s (silence retir\xE9: d\xE9but "+(l/i).toFixed(3)+"s, fin "+((s-c)/i).toFixed(3)+"s), crossfade "+(d/i*1e3).toFixed(1)+"ms"),u}function V2(){let n=document.getElementById("gameContainer");ii=new bb,ii.fog=new Nh(0,500,1e4),li=new fi(51.615,window.innerWidth/(window.innerHeight*sc()),.5,1e4),li.position.copy(Xs),li.quaternion.setFromAxisAngle(new U(0,1,0),Math.PI/2),ii.add(li),B2();var e;ii.add(new Jb(6710886));var t=new Dr.Vector3(-451,185,215),i=Vn(Xs,t);li.far=2e3,dn=new v2({maxFar:200,cascades:4,shadowMapSize:document.body.classList.contains("touchDetected")?1024*3/4:1024*3,camera:li,parent:ii,mode:"practical",lightDirection:new U().copy(i).normalize(),lightIntensity:3,shadowBias:-25e-5,fade:!0,noLastCascadeCutOff:!0}),dn.lightMargin=1500;for(let r=0;r<dn.lights.length;r++)dn.lights[r].shadow.autoUpdate=!0;go=new x2(dn),go.visible=!1,ii.add(go),nc=new Jd,ii.add(nc),Js=new tc({duration:3.5,looping:!0,shape:new zs,emissionOverTime:new cn([[new er(2,8,15,9),0]]),startLife:new fr(.8,3.5),startSpeed:new fr(.8,1.5),startSize:new fr(.08,.17),startColor:new Bn(new ft(0,0,0,1)),worldSpace:!0,material:new Di({color:16777215,transparent:!0,blending:_n}),behaviors:[new Bs(new ln([[new ka(new gi(0,0,0,1),new gi(.3,.3,.3,1)),0],[new _e(.6,.6,.6),1]],[[.6,0],[0,1]])),new Vs(g_,new nt(1)),new Hs(new cn([[new er(1,.005,0,0),0]])),new js(new nt(.15),new nt(.22),new nt(.3),new nt(.0015)),new ks(new cn([[new er(1,1,1.5,4),0]]))]}),ii.add(Js.emitter),nc.addSystem(Js);for(let r=0;r<M_.length;r++)bo.load(M_[r],function(s){un[r]=s.scene,fu[r]=new bi().setFromObject(un[r]).getSize(new U).y*.5,ii.add(un[r])},void 0,function(s){console.error(s)});bo.load("./assets/geepChassis.glb",function(r){let s=r.scene;S_=X2(s).attributes.position.array,Br.push(s),ii.add(s),Ot.position.set(-1.4,.2,0),Ot.rotation.y=-Math.PI/2,Ot.setDirectionalCone(60,150,.15),Ot&&s.add(Ot),zt&&s.add(zt),pu=new bi().setFromObject(s).getSize(new U),vo=pu.z,xo=pu.x*.55},void 0,function(r){console.error(r)}),bo.load("./assets/map3.glb",function(r){let s=r.scene;var a,o=[];s.traverse(function(c){c.isMesh&&(a=c.geometry,a.rotateX(c.rotation.x),a.rotateY(c.rotation.y),a.rotateZ(c.rotation.z),a.scale(c.scale.x,c.scale.y,c.scale.z),a.translate(c.position.x,c.position.y,c.position.z),o.push(a),c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,dn.setupMaterial(c.material))});let l=[o[0],o[1],o[6],o[8],o[9],o[10]];a=Pm(l),x_=a.attributes.position.array,b_=new Uint32Array(a.getIndex().array),ii.add(s)},void 0,function(r){console.log(r)}),bo.load("./assets/ufo.glb",function(r){ii.add(r.scene.children[0])},void 0,function(r){console.log(r)}),bo.load("./assets/skybox.glb",function(r){let s=r.scene.children[0],a=new Di;a.map=s.material.map,s.material=a,s.scale.set(mu,mu,mu),ii.add(s)},void 0,function(r){console.log(r)}),Fi=new xb({antialias:!0}),Fi.setSize(window.innerWidth,window.innerHeight*sc()),Fi.setClearColor(ii.fog.color),Fi.shadowMap.enabled=!0,Fi.shadowMap.type=Su,n.appendChild(Fi.domElement),Fi.gammaInput=!0,Fi.gammaOutput=!0,window.addEventListener("resize",q2,!1),G2()}function G2(){Ys=new JS(li,Fi.domElement),Ys.minDistance=P_(rc),Ys.maxDistance=P_(rc),Ys.maxPolarAngle=Math.PI/2}function j2(){const n=Fi.domElement;n.addEventListener("pointerdown",function(e){qs=!0,n.setPointerCapture(e.pointerId)}),n.addEventListener("pointerup",function(){qs=!1}),n.addEventListener("pointercancel",function(){qs=!1})}function W2(){let n=Ft(wr(rc,tt.rotation()),new U().copy(tt.translation())),e=Ft(yt(Vn(n,tu),b2),tu);qs===!1&&li.position.copy(new U().copy(e));let t=new U().copy(tt.translation()),i=Ft(yt(Vn(t,iu),S2),iu);qs===!1&&li.lookAt(new U().copy(i)),tu=li.position,iu=i}function X2(n){var e,t=[];return n.traverse(function(i){i.isMesh&&(e=i.geometry,e.rotateX(i.rotation.x),e.rotateY(i.rotation.y),e.rotateZ(i.rotation.z),e.scale(i.scale.x,i.scale.y,i.scale.z),e.translate(i.position.x,i.position.y,i.position.z),t.push(e))}),e=Pm(t),e}function q2(){li.aspect=window.innerWidth/(window.innerHeight*sc()),li.updateProjectionMatrix(),Fi.setSize(window.innerWidth,window.innerHeight*sc())}function Y2(){if(navigator.getGamepads===void 0)return;const n=navigator.getGamepads();let e=null;for(let g=0;g<n.length;g++)if(n[g]!==null&&n[g].connected){e=n[g];break}if(e===null){yo&&(tr=Pi=Li=Ii=ir=kr=!1,yo=!1);return}document.body.classList.contains("gamepadDetected")||document.body.classList.add("gamepadDetected");const t=function(g){const y=e.buttons[g];return y===void 0?!1:y.pressed||y.value>M2},i=t(ri.A),r=t(ri.B),s=t(ri.X),a=t(ri.Y),o=t(ri.RT),l=t(ri.LT),c=t(ri.MENU),h=t(ri.DPAD_LEFT),d=t(ri.DPAD_RIGHT),u=function(g){return w_[g]===!0};i&&!u(ri.A)&&!Ws&&typeof window.startGame=="function"&&window.startGame(),c&&!u(ri.MENU)&&!Ws&&typeof window.startGame=="function"&&window.startGame(),t(ri.LB)&&!u(ri.LB)&&typeof window.soundBtnToggle=="function"&&window.soundBtnToggle(),t(ri.RB)&&!u(ri.RB)&&typeof window.musicBtnToggle=="function"&&window.musicBtnToggle(),t(ri.VIEW)&&!u(ri.VIEW)&&typeof window.restartGame=="function"&&window.restartGame(),w_=e.buttons.map(function(g){return g.pressed});const p=e.axes[0]!==void 0?e.axes[0]:0;i||r||s||a||o||l||h||d||Math.abs(p)>ru?(yo=!0,tr=o||i,Pi=l||s,Li=p<-ru||h,Ii=p>ru||d,ir=a,kr=r):yo&&(tr=Pi=Li=Ii=ir=kr=!1,yo=!1)}window.addEventListener("gamepadconnected",function(n){document.body.classList.add("gamepadDetected"),console.info("[manette] d\xE9tect\xE9e:",n.gamepad.id)}),window.addEventListener("gamepaddisconnected",function(n){document.body.classList.remove("gamepadDetected"),console.info("[manette] d\xE9connect\xE9e:",n.gamepad.id)});function A_(){let n=window.location.search.includes("touch=1");if(!n){const e=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,t=navigator.maxTouchPoints>0||"ontouchstart"in window,i=!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches);n=e||t&&i}return n&&!document.body.classList.contains("touchDetected")&&document.body.classList.add("touchDetected"),console.info("[tactile] appareil tactile d\xE9tect\xE9:",n),n}function J2(){[{id:"fwdTouchBtn",set:function(n){nu=n}},{id:"backTouchBtn",set:function(n){su=n}},{id:"leftTouchBtn",set:function(n){au=n}},{id:"rightTouchBtn",set:function(n){ou=n}},{id:"flipTouchBtn",set:function(n){lu=n}}].forEach(function(n){const e=document.getElementById(n.id);if(e===null)return;e.addEventListener("pointerdown",function(i){n.set(!0),e.setPointerCapture(i.pointerId)});const t=function(){n.set(!1)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("lostpointercapture",t)})}function K2(){const n=document.getElementById("fullscreenTouchBtn");if(n===null)return;const e=function(){n.innerHTML=document.fullscreenElement?"&#8682;":"&#9974;"};n.addEventListener("pointerdown",function(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()}),document.addEventListener("fullscreenchange",e),e()}function Z2(){nu||su||au||ou||lu?(cu=!0,tr=nu,Pi=su,Li=au,Ii=ou,ir=lu):cu&&(tr=Pi=Li=Ii=ir=!1,cu=!1)}A_(),J2(),K2(),j2();function R_(){Y2(),Z2(),nc.update(__),Fi.render(ii,li),requestAnimationFrame(R_)}function C_(n,e){return{w:n.w*e.w-n.x*e.x-n.y*e.y-n.z*e.z,x:n.w*e.x+n.x*e.w+n.y*e.z-n.z*e.y,y:n.w*e.y-n.x*e.z+n.y*e.w+n.z*e.x,z:n.w*e.z+n.x*e.y-n.y*e.x+n.z*e.w}}function wr(n,e){let t={w:0,x:n.x,y:n.y,z:n.z},i={w:e.w,x:-e.x,y:-e.y,z:-e.z},r=C_(e,t),s=C_(r,i);return{x:s.x,y:s.y,z:s.z}}function P_(n){return Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2)+Math.pow(n.z,2))}function yt(n,e){let t={x:n.x*e,y:n.y*e,z:n.z*e};return{x:t.x,y:t.y,z:t.z}}function Ft(n,e){let t={x:n.x+e.x,y:n.y+e.y,z:n.z+e.z};return{x:t.x,y:t.y,z:t.z}}function Vn(n,e){let t={x:n.x-e.x,y:n.y-e.y,z:n.z-e.z};return{x:t.x,y:t.y,z:t.z}}function Q2(n,e){if(Object.keys(n).length!==3||Object.keys(e).length!==3)throw new Error("Les vecteurs doivent avoir 3 composantes chacun.");return{x:n.y*e.z-n.z*e.y,y:n.z*e.x-n.x*e.z,z:n.x*e.y-n.y*e.x}}function Ks(n,e){if(!("x"in n&&"y"in n&&"z"in n)||!("x"in e&&"y"in e&&"z"in e))throw new Error("Vectors must have x, y, and z properties.");return n.x*e.x+n.y*e.y+n.z*e.z}var L_,pn,I_,Zs,N_,$2,U_,D_,O_,eU,tr,Pi,Li,Ii,kr,ir,Wt,rr,tt,Hr,_u,So,Mo,hc,z_,Qs,$s,F_,B_,k_,H_,Eo;function tU(){ii.traverse(function(n){n.isMesh&&n.name!=="skybox"&&(n.material.side=sr,n.material.shadowSide=xi,n.castShadow=!0,n.receiveShadow=!0,n.material.metalness=0,n.material.roughness=.9,dn.setupMaterial(n.material))}),L_=ii.getObjectByName("ufo"),pn=new Dr.World({x:0,y:-9.81,z:0}),pn.timestep=__,I_=Dr.RigidBodyDesc.dynamic(),Zs=pn.createRigidBody(I_),N_=Dr.ColliderDesc.convexHull(S_),$2=pn.createCollider(N_,Zs),Zs.setTranslation(Xs),Zs.setRotation(f_),cc.push(Zs),console.log("bodies",cc),console.log("meshes",Br),U_=Dr.RigidBodyDesc.fixed(),D_=pn.createRigidBody(U_),O_=Dr.ColliderDesc.trimesh(x_,b_,"FIX_INTERNAL_EDGES"),eU=pn.createCollider(O_,D_),tr=!1,Pi=!1,Li=!1,Ii=!1,kr=!1,ir=!1,Wt=0,rr=0,tt=Zs,Hr=[!1,!1,!1,!1],_u=[0,0,0,0],So=tt.localCom(),Mo=new Dr.Ray,hc={x:0,y:1,z:0},z_={x:0,y:-1,z:0},Qs={x:1,y:0,z:0},$s={x:0,y:0,z:1},F_=Ft(So,Ft(yt($s,vo*.5*-1),yt(Qs,xo*.5))),B_=Ft(So,Ft(yt($s,vo*.5),yt(Qs,xo*.5))),k_=Ft(So,Ft(yt($s,vo*.5*-1),yt(Qs,xo*.5*-1))),H_=Ft(So,Ft(yt($s,vo*.5),yt(Qs,xo*.5*-1))),Eo=[F_,B_,k_,H_],document.addEventListener("keydown",n=>{n.key==="ArrowRight"&&(Ii=!0),n.key==="ArrowLeft"&&(Li=!0),n.key==="ArrowUp"&&(tr=!0),n.key==="ArrowDown"&&(Pi=!0),n.key==="r"&&(ir=!0),n.key===" "&&(kr=!0)}),document.addEventListener("keyup",n=>{n.key==="ArrowRight"&&(Ii=!1),n.key==="ArrowLeft"&&(Li=!1),n.key==="ArrowUp"&&(tr=!1),n.key==="ArrowDown"&&(Pi=!1),n.key==="r"&&(ir=!1),n.key===" "&&(kr=!1)})}let V_=()=>{if(!Ws)return;pn.step();for(var n=0;n!==Br.length;n++)Br[n].position.copy(cc[n].translation()),Br[n].quaternion.copy(cc[n].rotation());var e={x:-1.6,y:.14,z:.65};Js.emitter.position.copy(Ft(wr(e,Br[0].quaternion),Br[0].position)),Js.emitter.quaternion.copy(Br[0].quaternion),Js.behaviors[1].direction=wr(g_,Br[0].quaternion),qs&&Ys.update(),Ys.target.copy(tt.translation()),W2(),li.updateMatrixWorld(),dn.update(),go&&go.update(),L_.rotateY(Math.PI/360),tt.wakeUp();let t=tt.rotation(),i=wr(hc,t),r=wr($s,t),s=wr(Qs,t);if(ir&&Ks(i,hc)<.5){tt.setLinvel({x:0,y:0,z:0}),tt.setAngvel({x:0,y:0,z:0});let v=Ft(tt.translation(),yt(hc,oc*5));tt.setTranslation(v),tt.setRotation({x:0,y:-.7071068,z:0,w:.7071068})}Fr=(Hr[0]+Hr[1]+Hr[2]+Hr[3])*.25,Fr===0?uu=!1:uu=!0;let a=tt.linvel(),o=Ks(a,s),l=Math.min(Math.abs(o)/lc,1),c=tt.angvel();if(tr){let v=lc-o,M=yt(s,v*R2*zr*Fr);tt.applyImpulse(M)}if(Pi){let v=-lc-o,M=yt(s,v*C2*zr*Fr);tt.applyImpulse(M)}if(kr){let v=yt(s,-o*P2*zr*Fr);tt.applyImpulse(v)}let h=Math.min(Math.abs(o),(1-l)*A2),d=Math.abs(Ks(c,i))<h;if(d&&Li){let v=yt(i,du*zr*Fr);Pi&&(v=yt(v,-1)),tt.applyTorqueImpulse(v)}if(d&&Ii){let v=yt(i,-du*zr*Fr);Pi&&(v=yt(v,-1)),tt.applyTorqueImpulse(v)}let u=Ks(r,a);if(!kr){let v=yt(r,-u*zr*I2*Fr);tt.applyImpulse(v)}if(!d||!Li&&!Ii){let v=yt(i,Ks(c,i)*(-du*zr)*Fr);tt.applyTorqueImpulse(v)}let p=yt(a,-1*(N2*zr));tt.applyImpulse(p);let g=wr(z_,t),y=tt.linvel(),f=tt.angvel();for(let v=0;v<Eo.length;v++){Hr[v]=!1;let M=wr(Eo[v],t),I=Ft(M,tt.translation());Mo.dir=g,Mo.origin=I;let R=pn.castRay(Mo,200,!1,null,null,null,tt);if(R!==null&&R.timeOfImpact<oc){let A=Mo.pointAt(R.timeOfImpact),z=Ft(y,Q2(f,Vn(I,tt.translation()))),E=Vn(A,I),x=-E2*(oc-R.timeOfImpact);x=x-T2*Ks(z,E);let O=yt(yt(E,x),zr);tt.applyImpulseAtPoint(O,I),Hr[v]=!0,_u[v]=R.timeOfImpact}}let _=o;Li&&(Wt<-.9||(Wt=Wt-.1)),Ii&&(Wt>.9||(Wt=Wt+.1)),!Li&&!Ii&&Wt!==0&&(Wt>-.1&&Wt<.1?Wt=0:Wt<0?Wt=Wt+.1:Wt>0&&(Wt=Wt-.1)),rr=rr-_*U2,rr>360?rr=rr-360:rr<-360&&(rr=rr+360);let S=rr*2*Math.PI/360;for(let v=0;v<Hr.length;v++){if(Hr[v]){let M=wr(Eo[v],t),I=Ft(M,tt.translation()),R=Vn(Ft(I,yt(g,_u[v])),yt(g,fu[v]));un[v].position.copy(R)}else{let M=wr(Eo[v],t),I=Ft(M,tt.translation()),R=Vn(Ft(I,yt(g,oc)),yt(g,fu[v]));un[v].position.copy(R)}if(un[v].quaternion.copy(tt.rotation()),v===0||v===1){let M=L2*Wt;un[v].rotateOnWorldAxis(new U().copy(g),M)}un[v].rotateZ(S)}if(ac&&Ot){Ot.isPlaying||Ot.play(),zt&&zt.buffer&&!zt.isPlaying&&zt.play();let v=typeof o=="number"&&!isNaN(o)?o:0;const M=Math.min(Math.abs(v)/lc,1),I=Math.sqrt(M),R=tr||Pi||ir?1:0;wo+=(R-wo)*(R>wo?.25:.06);let A=.9+(3-.9)*Math.min(I*.75+wo*.25,1);Ot.setPlaybackRate(A);let z=c&&typeof c.y=="number"&&!isNaN(c.y)?c.y:0,E=Math.abs(z);if(uu&&E>1.4){let x=E*Math.abs(v*.007)*4;x=Math.min(Math.max(x,0),1.5),zt.setVolume(x)}else zt.setVolume(0)}else Ot&&Ot.isPlaying&&Ot.stop(),zt&&zt.isPlaying&&zt.stop();setTimeout(V_,10)};window.startGameLoop=function(){Ws||(Ws=!0,V_())},window.stopGameLoop=function(){Ws=!1},window.resetPhysicsAndScene=function(){window.stopGameLoop(),tr=!1,Pi=!1,Li=!1,Ii=!1,kr=!1,ir=!1,Wt=0,rr=0,wo=0,tt&&(tt.setTranslation(Xs),tt.setRotation(f_),tt.setLinvel({x:0,y:0,z:0}),tt.setAngvel({x:0,y:0,z:0})),Ot&&Ot.isPlaying&&Ot.stop(),zt&&zt.isPlaying&&zt.stop()};const dc=document.getElementById("customCursor"),iU=document.querySelectorAll(".startBtn, .btnScreen2");document.addEventListener("mousemove",n=>{dc.style.left=n.clientX+"px",dc.style.top=n.clientY+"px"}),iU.forEach(n=>{n.addEventListener("mouseenter",()=>{dc.style.display="block"}),n.addEventListener("mouseleave",()=>{dc.style.display="none"})}),window.musicBtnToggle=function(){hu=!hu,hu?(document.getElementById("musicBtn").innerHTML="music <br> On",y_.play()):(document.getElementById("musicBtn").innerHTML="music <br> Off",y_.pause())},window.soundBtnToggle=function(){ac=!ac,ac?(document.getElementById("soundBtn").innerHTML="sound <br> On",Hn&&Hn.context.state!=="running"&&Hn.context.resume()):document.getElementById("soundBtn").innerHTML="sound <br> Off"}})();
