var Wv=Object.defineProperty;var qv=(n,e)=>{for(var t in e)Wv(n,t,{get:e[t],enumerable:!0})};var ol="abcdefghijklmnopqrstuvwxyz234567",co=Object.create(null);for(let n=0;n<ol.length;n++)co[ol[n]]=n;co[0]=co.o;co[1]=co.i;function F0(n){let e=0,t=0,i="";function r(s){return e<0?t|=s>>-e:t=s<<e&248,e>3?(e-=8,1):(e<4&&(i+=ol[t>>3],e+=5),0)}for(let s=0;s<n.length;)s+=r(n[s]);return i+(e<0?ol[t>>3]:"")}function U0(n){let e=0,t=0,i=new Uint8Array(n.length*4/3|0),r=0;function s(o){let a=co[o.toLowerCase()];if(a===void 0)throw new Error(`Invalid character: ${JSON.stringify(o)}`);a<<=3,t|=a>>>e,e+=5,e>=8&&(i[r++]=t,e-=8,e>0?t=a<<5-e&255:t=0)}for(let o of n)s(o);return i.slice(0,r)}var $v=new Uint32Array([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]);function D0(n){let e=-1;for(let t=0;t<n.length;t++){let r=(n[t]^e)&255;e=$v[r]^e>>>8}return(e^-1)>>>0}var al=BigInt(4294967295),k0=BigInt(32);function Xv(n,e=!1){return e?{h:Number(n&al),l:Number(n>>k0&al)}:{h:Number(n>>k0&al)|0,l:Number(n&al)|0}}function z0(n,e=!1){let t=n.length,i=new Uint32Array(t),r=new Uint32Array(t);for(let s=0;s<t;s++){let{h:o,l:a}=Xv(n[s],e);[i[s],r[s]]=[o,a]}return[i,r]}var Yv=n=>n/2**32|0,jv=n=>n>>>0;function V0(n,e,t,i){let r=Yv(t),s=jv(t);n.setUint32(e,i?s:r,i),n.setUint32(e+4,i?r:s,i)}var ff=(n,e,t)=>n>>>t,pf=(n,e,t)=>n<<32-t|e>>>t,ws=(n,e,t)=>n>>>t|e<<32-t,Ss=(n,e,t)=>n<<32-t|e>>>t,_a=(n,e,t)=>n<<64-t|e>>>t-32,ba=(n,e,t)=>n>>>t-32|e<<64-t;function Li(n,e,t,i){let r=(e>>>0)+(i>>>0);return{h:n+t+(r/2**32|0)|0,l:r|0}}var G0=(n,e,t)=>(n>>>0)+(e>>>0)+(t>>>0),H0=(n,e,t,i)=>e+t+i+(n/2**32|0)|0,W0=(n,e,t,i)=>(n>>>0)+(e>>>0)+(t>>>0)+(i>>>0),q0=(n,e,t,i,r)=>e+t+i+r+(n/2**32|0)|0,$0=(n,e,t,i,r)=>(n>>>0)+(e>>>0)+(t>>>0)+(i>>>0)+(r>>>0),X0=(n,e,t,i,r,s)=>e+t+i+r+s+(n/2**32|0)|0;function cl(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in n&&n.BYTES_PER_ELEMENT===1}var mf=n=>n?`"${n}" `:"";function va(n,e=""){if(typeof n!="number")throw new TypeError(mf(e)+"expected number, got "+typeof n);if(!Number.isSafeInteger(n)||n<0)throw new RangeError(mf(e)+"expected integer >= 0, got "+n);return n}function Bi(n,e,t=""){if(cl(n)&&(e===void 0||n.length===e))return n;e!==void 0&&va(e,"length");let i=cl(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,o=mf(t)+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(o):new TypeError(o)}var Kv=(n,e)=>{if(n===null||typeof n!="object"||Array.isArray(n))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof n)},Y0=(n,e)=>{Kv(n,e);let t=Object.getPrototypeOf(n);if(t!==Object.prototype&&t!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(n,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function gf(n,e=!0){if(n.destroyed)throw new Error("hash was destroyed");if(e&&n.finished)throw new Error("digest() was already called")}function Z0(n,e){Bi(n,void 0,"output");let t=e.outputLen;if(!(n.length>=t))throw new RangeError('"output" expected length >= '+t)}function lo(...n){for(let e=0;e<n.length;e++)n[e].fill(0)}function ll(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function di(n,e){return n<<32-e|n>>>e}var K0=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",Jv=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function ft(n){if(Bi(n),K0)return n.toHex();let e="";for(let t=0;t<n.length;t++)e+=Jv[n[t]];return e}function j0(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:void 0}function $t(n){if(typeof n!="string")throw new TypeError("hex string expected, got "+typeof n);if(K0)try{return Uint8Array.fromHex(n)}catch(r){throw r instanceof SyntaxError?new RangeError(r.message):r}let e=n.length,t=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);let i=new Uint8Array(t);for(let r=0,s=0;r<t;r++,s+=2){let o=j0(n.charCodeAt(s)),a=j0(n.charCodeAt(s+1));if(o===void 0||a===void 0){let c=n[s]+n[s+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+s)}i[r]=o*16+a}return i}function pn(n){if(typeof n!="string")throw new TypeError("string expected");let e=new TextEncoder().encode(n);try{return new Uint8Array(e)}finally{lo(e)}}function mn(...n){let e=0;for(let i=0;i<n.length;i++){let r=n[i];Bi(r),e+=r.length}let t=new Uint8Array(e);for(let i=0,r=0;i<n.length;i++){let s=n[i];t.set(s,r),r+=s.length}return t}function Qv(n,e,t="opts"){return Y0(n,"defaults"),e!==void 0&&Y0(e,t),Object.assign(Object.create(null),n,e)}function ul(n,e={}){if(typeof n!="function")throw new TypeError('"hashCons" expected function, got type='+typeof n);e=Qv({},e,"info");let t=(r,s)=>n(s).update(r).digest(),i=n(void 0);return t.outputLen=i.outputLen,t.blockLen=i.blockLen,t.canXOF=i.canXOF,t.create=r=>n(r),Object.assign(t,e),Object.freeze(t)}function J0(n=32){va(n,"bytesLength");let e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(n>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${n}`);return e.getRandomValues(new Uint8Array(n))}var hl=n=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,n])});function Q0(n,e,t){return n&e^~n&t}function eg(n,e,t){return n&e^n&t^e&t}var wa=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,i,r){this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=r,this.buffer=new Uint8Array(e),this.view=ll(this.buffer)}update(e){gf(this),Bi(e);let{view:t,buffer:i,blockLen:r}=this,s=e.length,o=!1;for(let a=0;a<s;){let c=Math.min(r-this.pos,s-a);if(c===r){let l=ll(e);for(;r<=s-a;a+=r)this.process(l,a);o=!0;continue}i.set(a===0&&c===s?e:e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===r&&(this.process(t,0),this.pos=0,o=!0)}return this.length+=e.length,o&&this.roundClean(),this}digestInto(e){gf(this),Z0(e,this),this.finished=!0;let{buffer:t,view:i,blockLen:r,isLE:s}=this,{pos:o}=this;t[o++]=128,t.fill(0,o),this.padOffset>r-o&&(this.process(i,0),t.fill(0)),V0(i,r-8,this.length*8,s),this.process(i,0),this.roundClean();let a=e===t?i:ll(e),c=this.outputLen,l=c/4,u=this.get();if(c%4||l>u.length)throw new Error("invalid outputLen");for(let h=0;h<l;h++)a.setUint32(4*h,u[h],s)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let i=e.slice(0,t);return this.destroy(),i}_cloneIntoMeta(e){let{buffer:t,length:i,finished:r,destroyed:s,pos:o}=this;return e.destroyed=s,e.finished=r,e.length=i,e.pos=o,o&&e.buffer.set(t),e}clone(){return this._cloneInto()}},tg=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ng=Uint32Array.from([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]);var ig=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]);var ew=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array(64),dl=class extends wa{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:i,D:r,E:s,F:o,G:a,H:c}=this;return[e,t,i,r,s,o,a,c]}set(e,t,i,r,s,o,a,c){this.A=e|0,this.B=t|0,this.C=i|0,this.D=r|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=c|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let h=0;h<16;h++,t+=4)Lr[h]=e.getUint32(t,!1);for(let h=16;h<64;h++){let f=Lr[h-15],p=Lr[h-2],g=di(f,7)^di(f,18)^f>>>3,y=di(p,17)^di(p,19)^p>>>10;Lr[h]=y+Lr[h-7]+g+Lr[h-16]|0}let{A:i,B:r,C:s,D:o,E:a,F:c,G:l,H:u}=this;for(let h=0;h<64;h++){let f=di(a,6)^di(a,11)^di(a,25),p=u+f+Q0(a,c,l)+ew[h]+Lr[h]|0,y=(di(i,2)^di(i,13)^di(i,22))+eg(i,r,s)|0;u=l,l=c,c=a,a=o+p|0,o=s,s=r,r=i,i=p+y|0}i=i+this.A|0,r=r+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,r,s,o,a,c,l,u)}roundClean(){lo(Lr)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),lo(this.buffer)}},yf=class extends dl{constructor(){super(32,tg)}},xf=class extends dl{constructor(){super(28,ng)}},rg=z0(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(n=>BigInt(n))),tw=rg[0],nw=rg[1],Br=new Uint32Array(80),Fr=new Uint32Array(80),_f=class extends wa{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:i,Bl:r,Ch:s,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:h,Fl:f,Gh:p,Gl:g,Hh:y,Hl:m}=this;return[e,t,i,r,s,o,a,c,l,u,h,f,p,g,y,m]}set(e,t,i,r,s,o,a,c,l,u,h,f,p,g,y,m){this.Ah=e|0,this.Al=t|0,this.Bh=i|0,this.Bl=r|0,this.Ch=s|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=h|0,this.Fl=f|0,this.Gh=p|0,this.Gl=g|0,this.Hh=y|0,this.Hl=m|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let b=0;b<16;b++,t+=4)Br[b]=e.getUint32(t),Fr[b]=e.getUint32(t+=4);for(let b=16;b<80;b++){let v=Br[b-15]|0,E=Fr[b-15]|0,T=ws(v,E,1)^ws(v,E,8)^ff(v,E,7),x=Ss(v,E,1)^Ss(v,E,8)^pf(v,E,7),w=Br[b-2]|0,I=Fr[b-2]|0,R=ws(w,I,19)^_a(w,I,61)^ff(w,I,6),O=Ss(w,I,19)^ba(w,I,61)^pf(w,I,6),P=W0(x,O,Fr[b-7],Fr[b-16]),U=q0(P,T,R,Br[b-7],Br[b-16]);Br[b]=U|0,Fr[b]=P|0}let{Ah:i,Al:r,Bh:s,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:h,El:f,Fh:p,Fl:g,Gh:y,Gl:m,Hh:d,Hl:_}=this;for(let b=0;b<80;b++){let v=ws(h,f,14)^ws(h,f,18)^_a(h,f,41),E=Ss(h,f,14)^Ss(h,f,18)^ba(h,f,41),T=h&p^~h&y,x=f&g^~f&m,w=$0(_,E,x,nw[b],Fr[b]),I=X0(w,d,v,T,tw[b],Br[b]),R=w|0,O=ws(i,r,28)^_a(i,r,34)^_a(i,r,39),P=Ss(i,r,28)^ba(i,r,34)^ba(i,r,39),U=i&s^i&a^s&a,A=r&o^r&c^o&c;d=y|0,_=m|0,y=p|0,m=g|0,p=h|0,g=f|0,{h,l:f}=Li(l|0,u|0,I|0,R|0),l=a|0,u=c|0,a=s|0,c=o|0,s=i|0,o=r|0;let z=G0(R,P,A);i=H0(z,I,O,U),r=z|0}({h:i,l:r}=Li(this.Ah|0,this.Al|0,i|0,r|0)),{h:s,l:o}=Li(this.Bh|0,this.Bl|0,s|0,o|0),{h:a,l:c}=Li(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=Li(this.Dh|0,this.Dl|0,l|0,u|0),{h,l:f}=Li(this.Eh|0,this.El|0,h|0,f|0),{h:p,l:g}=Li(this.Fh|0,this.Fl|0,p|0,g|0),{h:y,l:m}=Li(this.Gh|0,this.Gl|0,y|0,m|0),{h:d,l:_}=Li(this.Hh|0,this.Hl|0,d|0,_|0),this.set(i,r,s,o,a,c,l,u,h,f,p,g,y,m,d,_)}roundClean(){lo(Br,Fr)}destroy(){this.destroyed=!0,lo(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},bf=class extends _f{constructor(){super(64,ig)}};var Cn=ul(()=>new yf,hl(1)),sg=ul(()=>new xf,hl(4)),vf=ul(()=>new bf,hl(3));var fl="__principal__",iw=2,og=4,rw="aaaaa-aa",Ve=class n{static anonymous(){return new this(new Uint8Array([og]))}static managementCanister(){return this.fromText(rw)}static selfAuthenticating(e){let t=sg(e);return new this(new Uint8Array([...t,iw]))}static from(e){if(typeof e=="string")return n.fromText(e);if(Object.getPrototypeOf(e)===Uint8Array.prototype)return new n(e);if(n.isPrincipal(e))return new n(e._arr);throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`)}static fromHex(e){return new this($t(e))}static fromText(e){let t=e;if(e.includes(fl)){let o=JSON.parse(e);fl in o&&(t=o[fl])}let i=t.toLowerCase().replace(/-/g,""),r=U0(i);r=r.slice(4,r.length);let s=new this(r);if(s.toText()!==t)throw new Error(`Principal "${s.toText()}" does not have a valid checksum (original value "${t}" may not be a valid Principal ID).`);return s}static fromUint8Array(e){return new this(e)}static isPrincipal(e){return e instanceof n||typeof e=="object"&&e!==null&&"_isPrincipal"in e&&e._isPrincipal===!0&&"_arr"in e&&e._arr instanceof Uint8Array}constructor(e){this._arr=e,this._isPrincipal=!0}isAnonymous(){return this._arr.byteLength===1&&this._arr[0]===og}toUint8Array(){return this._arr}toHex(){return ft(this._arr).toUpperCase()}toText(){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,D0(this._arr));let i=new Uint8Array(e),r=new Uint8Array([...i,...this._arr]),o=F0(r).match(/.{1,5}/g);if(!o)throw new Error;return o.join("-")}toString(){return this.toText()}toJSON(){return{[fl]:this.toText()}}compareTo(e){for(let t=0;t<Math.min(this._arr.length,e._arr.length);t++){if(this._arr[t]<e._arr[t])return"lt";if(this._arr[t]>e._arr[t])return"gt"}return this._arr.length<e._arr.length?"lt":this._arr.length>e._arr.length?"gt":"eq"}ltEq(e){let t=this.compareTo(e);return t=="lt"||t=="eq"}gtEq(e){let t=this.compareTo(e);return t=="gt"||t=="eq"}};var or=class extends Error{constructor(e){super(e),this.name="DecodingError"}},lg=55799,ug=Symbol("CBOR_STOP_CODE"),pi=(n=>(n[n.False=20]="False",n[n.True=21]="True",n[n.Null=22]="Null",n[n.Undefined=23]="Undefined",n[n.Break=31]="Break",n))(pi||{}),tn=(n=>(n[n.UnsignedInteger=0]="UnsignedInteger",n[n.NegativeInteger=1]="NegativeInteger",n[n.ByteString=2]="ByteString",n[n.TextString=3]="TextString",n[n.Array=4]="Array",n[n.Map=5]="Map",n[n.Tag=6]="Tag",n[n.Simple=7]="Simple",n))(tn||{}),sw=23,ow=255,aw=65535,cw=4294967295,lw=BigInt("0xffffffffffffffff"),fi=(n=>(n[n.Value=23]="Value",n[n.OneByte=24]="OneByte",n[n.TwoBytes=25]="TwoBytes",n[n.FourBytes=26]="FourBytes",n[n.EightBytes=27]="EightBytes",n[n.Indefinite=31]="Indefinite",n))(fi||{}),uo=!1;function uw(n){return n==null}function hw(n,e){let t=new Uint8Array(e);return t.set(n),t}var dw=new TextDecoder;function fw(n){return(n&224)>>5}function pw(n){return n&31}var Ma=new Uint8Array,Sa,mi=0;function hg(n,e){Ma=n,mi=0;let t=Es(e);return e?.(t)??t}function Es(n){let[e,t]=pl();switch(e){case tn.UnsignedInteger:return ho(t);case tn.NegativeInteger:return xw(t);case tn.ByteString:return dg(t);case tn.TextString:return Sf(t);case tn.Array:return mw(t,n);case tn.Map:return yw(t,n);case tn.Tag:return _w(t,n);case tn.Simple:return gw(t)}throw new or(`Unsupported major type: ${e}`)}function pl(){let n=Ma.at(mi);if(uw(n))throw new or("Provided CBOR data is empty");let e=fw(n),t=pw(n);return mi++,[e,t]}function mw(n,e){let t=ho(n);if(t===1/0){let r=[],s=Es(e);for(;s!==ug;)r.push(e?.(s)??s),s=Es(e);return r}let i=new Array(t);for(let r=0;r<t;r++){let s=Es(e);i[r]=e?.(s)??s}return i}function gw(n){switch(n){case pi.False:return!1;case pi.True:return!0;case pi.Null:return null;case pi.Undefined:return;case pi.Break:return ug}throw new or(`Unrecognized simple type: ${n.toString(2)}`)}function yw(n,e){let t=ho(n),i={};if(t===1/0){let[r,s]=pl();for(;r!==tn.Simple&&s!==pi.Break;){let o=Sf(s),a=Es(e);i[o]=e?.(a,o)??a,[r,s]=pl()}return i}for(let r=0;r<t;r++){let[s,o]=pl();if(s!==tn.TextString)throw new or("Map keys must be text strings");let a=Sf(o),c=Es(e);i[a]=e?.(c,a)??c}return i}function ho(n){if(n<=fi.Value)return n;switch(Sa=new DataView(Ma.buffer,Ma.byteOffset+mi),n){case fi.OneByte:return mi++,Sa.getUint8(0);case fi.TwoBytes:return mi+=2,Sa.getUint16(0,uo);case fi.FourBytes:return mi+=4,Sa.getUint32(0,uo);case fi.EightBytes:return mi+=8,Sa.getBigUint64(0,uo);case fi.Indefinite:return 1/0;default:throw new or(`Unsupported integer info: ${n.toString(2)}`)}}function xw(n){let e=ho(n);return typeof e=="number"?-1-e:-1n-e}function dg(n){let e=ho(n);if(e>Number.MAX_SAFE_INTEGER)throw new or("Byte length is too large");let t=Number(e);return mi+=t,Ma.slice(mi-t,mi)}function Sf(n){let e=dg(n);return dw.decode(e)}function _w(n,e){let t=ho(n);if(t===lg)return Es(e);throw new or(`Unsupported tag: ${t}.`)}var Ta=class extends Error{constructor(e){super(e),this.name="SerializationError"}},bw=2*1024,ag=100,vw=new TextEncoder;function Ea(n){return n<<5}var sr=new Uint8Array(bw),Fi=new DataView(sr.buffer),Xt=0,wf=[];function fg(n,e){Xt=0;let t=e?.(n)??n;return Cw(lg,t,e),sr.slice(0,Xt)}function pg(n){let e=sr.length*2;for(;e<n;)e*=2;sr=hw(sr,e),Fi=new DataView(sr.buffer)}function Ef(n,e){if(n===!1||n===!0||n===null||n===void 0){Ew(n);return}if(typeof n=="number"||typeof n=="bigint"){Rw(n);return}if(typeof n=="string"){yg(n);return}if(n instanceof Uint8Array){cg(n);return}if(n instanceof ArrayBuffer){cg(new Uint8Array(n));return}if(Array.isArray(n)){ww(n,e);return}if(typeof n=="object"){Sw(n,e);return}throw new Ta(`Unsupported type: ${typeof n}`)}function ww(n,e){fo(tn.Array,n.length),n.forEach((t,i)=>{Ef(e?.(t,i.toString())??t,e)})}function Sw(n,e){wf=Object.entries(n),fo(tn.Map,wf.length),wf.forEach(([t,i])=>{yg(t),Ef(e?.(i,t)??i,e)})}function fo(n,e){if(Xt>sr.length-ag&&pg(Xt+ag),e<=sw){Fi.setUint8(Xt++,Ea(n)|Number(e));return}if(e<=ow){Fi.setUint8(Xt++,Ea(n)|fi.OneByte),Fi.setUint8(Xt,Number(e)),Xt+=1;return}if(e<=aw){Fi.setUint8(Xt++,Ea(n)|fi.TwoBytes),Fi.setUint16(Xt,Number(e),uo),Xt+=2;return}if(e<=cw){Fi.setUint8(Xt++,Ea(n)|fi.FourBytes),Fi.setUint32(Xt,Number(e),uo),Xt+=4;return}if(e<=lw){Fi.setUint8(Xt++,Ea(n)|fi.EightBytes),Fi.setBigUint64(Xt,BigInt(e),uo),Xt+=8;return}throw new Ta(`Value too large to encode: ${e}`)}function Ew(n){fo(tn.Simple,Mw(n))}function Mw(n){if(n===!1)return pi.False;if(n===!0)return pi.True;if(n===null)return pi.Null;if(n===void 0)return pi.Undefined;throw new Ta(`Unrecognized simple value: ${n.toString()}`)}function mg(n,e){fo(n,e.length),Xt>sr.length-e.length&&pg(Xt+e.length),sr.set(e,Xt),Xt+=e.length}function gg(n,e){fo(n,e)}function Tw(n){gg(tn.UnsignedInteger,n)}function Aw(n){gg(tn.NegativeInteger,typeof n=="bigint"?-1n-n:-1-n)}function Rw(n){n>=0?Tw(n):Aw(n)}function yg(n){mg(tn.TextString,vw.encode(n))}function cg(n){mg(tn.ByteString,n)}function Cw(n,e,t){fo(tn.Tag,n),Ef(e,t)}var ar;(function(n){n.Trust="Trust",n.Protocol="Protocol",n.Reject="Reject",n.Transport="Transport",n.External="External",n.Limit="Limit",n.Input="Input",n.Unknown="Unknown"})(ar||(ar={}));var ml;(function(n){n.Normal="normal",n.Verbose="verbose"})(ml||(ml={}));var Pw=new Set(["arg","certificate","nonce"]);function Mf(n){return(e,t)=>t instanceof Uint8Array?n===ml.Normal&&Pw.has(e)?`<${t.length} bytes, set ErrorCode.verbosity = ErrorVerbosity.Verbose to display>`:`hex(${t.length}):${ft(t)}`:t}var qe=class n{static{this.verbosity=ml.Normal}constructor(e=!1){this.isCertified=e}toString(){let e=this.toErrorMessage();return this.requestContext&&(e+=`
Request context:
  Request ID (hex): ${this.requestContext.requestId?ft(this.requestContext.requestId):"undefined"}
  Sender pubkey (hex): ${ft(this.requestContext.senderPubKey)}
  Sender signature (hex): ${ft(this.requestContext.senderSignature)}
  Ingress expiry: ${this.requestContext.ingressExpiry.toString()}`),this.callContext&&(e+=`
Call context:
  Canister ID: ${this.callContext.canisterId.toText()}
  Method name: ${this.callContext.methodName}`,"subnetId"in this.callContext.effectiveTarget?e+=`
  Effective target subnet: ${this.callContext.effectiveTarget.subnetId.toText()}`:this.callContext.effectiveTarget.canisterId.toText()!==this.callContext.canisterId.toText()&&(e+=`
  Effective target canister: ${this.callContext.effectiveTarget.canisterId.toText()}`),"httpDetails"in this.callContext&&(e+=`
  HTTP details: ${JSON.stringify(this.callContext.httpDetails,Mf(n.verbosity),2)}`)),e}},qn=class n extends Error{get code(){return this.cause.code}set code(e){this.cause.code=e}get kind(){return this.cause.kind}set kind(e){this.cause.kind=e}get isCertified(){return this.code.isCertified}constructor(e,t){super(e.toString()),this.name="AgentError",this.cause={code:e,kind:t},Object.setPrototypeOf(this,n.prototype)}hasCode(e){return this.code instanceof e}toString(){return`${this.name} (${this.kind}): ${this.message}`}},cr=class extends qn{static fromCode(e){return new this(e)}},kn=class n extends cr{constructor(e){super(e,ar.Trust),this.name="TrustError",Object.setPrototypeOf(this,n.prototype)}},Mt=class n extends cr{constructor(e){super(e,ar.Protocol),this.name="ProtocolError",Object.setPrototypeOf(this,n.prototype)}},gi=class n extends cr{constructor(e){super(e,ar.Reject),this.name="RejectError",Object.setPrototypeOf(this,n.prototype)}},Aa=class n extends cr{constructor(e){super(e,ar.Transport),this.name="TransportError",Object.setPrototypeOf(this,n.prototype)}},$n=class n extends cr{constructor(e){super(e,ar.External),this.name="ExternalError",Object.setPrototypeOf(this,n.prototype)}};var Je=class n extends cr{constructor(e){super(e,ar.Input),this.name="InputError",Object.setPrototypeOf(this,n.prototype)}},nn=class n extends cr{constructor(e){super(e,ar.Unknown),this.name="UnknownError",Object.setPrototypeOf(this,n.prototype)}},yi=class n extends qe{constructor(e,t){super(),this.reason=e,this.error=t,this.name="CertificateVerificationErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){let e=this.reason;return this.error&&(e+=`: ${La(this.error)}`),`Certificate verification error: "${e}"`}},lr=class n extends qe{constructor(e,t,i,r,s){super(),this.maxAgeInMinutes=e,this.certificateTime=t,this.currentTime=i,this.timeDiffMsecs=r,this.ageType=s,this.name="CertificateTimeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Certificate is signed more than ${this.maxAgeInMinutes} minutes in the ${this.ageType}. Certificate time: ${this.certificateTime.toISOString()} Current time: ${this.currentTime.toISOString()} Clock drift: ${this.timeDiffMsecs}ms`}},gl=class n extends qe{constructor(){super(),this.name="CertificateHasTooManyDelegationsErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"Certificate has too many delegations"}},Ms=class n extends qe{constructor(e,t){super(),this.canisterId=e,this.subnetId=t,this.name="CertificateNotAuthorizedErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`The certificate contains a delegation that does not include the canister ${this.canisterId.toText()} in the canister_ranges field. Subnet ID: ${this.subnetId.toText()}`}},yl=class n extends qe{constructor(e){super(),this.subnetId=e,this.name="CertificateNotAuthorizedForSubnetErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`The certificate is not authorized for subnet ${this.subnetId.toText()}`}},xi=class n extends qe{constructor(e,t){super(),this.message=e,this.lookupStatus=t,this.name="LookupErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`${this.message}. Lookup status: ${this.lookupStatus}`}},xl=class n extends qe{constructor(e){super(),this.message=e,this.name="MalformedLookupFoundValueErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return this.message}},_l=class n extends qe{constructor(e){super(),this.message=e,this.name="MissingLookupValueErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return this.message}},po=class n extends qe{constructor(e,t){super(),this.expectedLength=e,this.actualLength=t,this.name="DerKeyLengthMismatchErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`BLS DER-encoded public key must be ${this.expectedLength} bytes long, but is ${this.actualLength} bytes long`}},bl=class n extends qe{constructor(e,t){super(),this.expectedPrefix=e,this.actualPrefix=t,this.name="DerPrefixMismatchErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`BLS DER-encoded public key is invalid. Expected the following prefix: ${ft(this.expectedPrefix)}, but got ${ft(this.actualPrefix)}`}},vl=class n extends qe{constructor(e,t){super(),this.expectedLength=e,this.actualLength=t,this.name="DerDecodeLengthMismatchErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`DER payload mismatch: Expected length ${this.expectedLength}, actual length: ${this.actualLength}`}},_i=class n extends qe{constructor(e){super(),this.error=e,this.name="DerDecodeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to decode DER: ${this.error}`}},Ra=class n extends qe{constructor(e){super(),this.error=e,this.name="DerEncodeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to encode DER: ${this.error}`}},wl=class n extends qe{constructor(e,t){super(),this.error=e,this.input=t,this.name="CborDecodeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to decode CBOR: ${La(this.error)}, input: ${ft(this.input)}`}},Sl=class n extends qe{constructor(e,t){super(),this.error=e,this.value=t,this.name="CborEncodeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to encode CBOR: ${La(this.error)}, input: ${this.value}`}};var Ts=class n extends qe{constructor(e,t,i){super(),this.message=e,this.requestId=t,this.status=i,this.name="TimeoutWaitingForResponseErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){let e=`${this.message}
`;return this.requestId&&(e+=`  Request ID: ${ft(this.requestId)}
`),this.status&&(e+=`  Request status: ${this.status}
`),e}},El=class n extends qe{constructor(e,t,i){super(),this.maxIngressExpiryInMinutes=e,this.requestId=t,this.retryTimes=i,this.name="CertificateOutdatedErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){let e=`Certificate is stale (over ${this.maxIngressExpiryInMinutes} minutes). Is the computer's clock synchronized?
  Request ID: ${ft(this.requestId)}
`;return this.retryTimes!==void 0&&(e+=`  Retried ${this.retryTimes} times.`),e}},Ml=class n extends qe{constructor(e,t,i,r){super(!0),this.requestId=e,this.rejectCode=t,this.rejectMessage=i,this.rejectErrorCode=r,this.name="CertifiedRejectErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`The replica returned a rejection error:
  Request ID: ${ft(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`}},Tl=class n extends qe{constructor(e,t,i,r,s){super(),this.requestId=e,this.rejectCode=t,this.rejectMessage=i,this.rejectErrorCode=r,this.signatures=s,this.name="UncertifiedRejectErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`The replica returned a rejection error:
  Request ID: ${ft(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`}},Al=class n extends qe{constructor(e,t,i,r){super(),this.requestId=e,this.rejectCode=t,this.rejectMessage=i,this.rejectErrorCode=r,this.name="UncertifiedRejectUpdateErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`The replica returned a rejection error:
  Request ID: ${ft(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`}},Rl=class n extends qe{constructor(e){super(),this.requestId=e,this.name="RequestStatusDoneNoReplyErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Call was marked as done but we never saw the reply:
  Request ID: ${ft(this.requestId)}
`}},Xn=class n extends qe{constructor(e){super(),this.shouldFetchRootKey=e,this.name="MissingRootKeyErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return this.shouldFetchRootKey===void 0?"Agent is missing root key":`Agent is missing root key and the shouldFetchRootKey value is set to ${this.shouldFetchRootKey}. The root key should only be unknown if you are in local development. Otherwise you should avoid fetching and use the default IC Root Key or the known root key of your environment.`}},Cl=class n extends qe{constructor(e){super(),this.value=e,this.name="HashValueErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Attempt to hash a value of unsupported type: ${this.value}`}},Ur=class n extends qe{constructor(){super(),this.name="IdentityInvalidErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"This identity has expired due this application's security policy. Please refresh your authentication."}},Ui=class n extends qe{constructor(e,t){super(),this.message=e,this.providedIngressExpiryInMinutes=t,this.name="IngressExpiryInvalidErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`${this.message}. Provided ingress expiry time is ${this.providedIngressExpiryInMinutes} minutes.`}},Il=class n extends qe{constructor(){super(),this.name="MissingFetchErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"No fetch implementation available. Provide a `fetch` function in HttpAgentOptions or ensure `globalThis.fetch` is defined."}},Pl=class n extends qe{constructor(){super(),this.name="CreateHttpAgentErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"Failed to create agent from provided agent"}},Nl=class n extends qe{constructor(e,t){super(),this.signatureCount=e,this.maxExpected=t,this.name="ExcessiveSignaturesErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Query response contains ${this.signatureCount} signatures, which exceeds the subnet size of ${this.maxExpected}. This suggests a malformed or malicious response.`}},Ol=class n extends qe{constructor(e){super(),this.error=e,this.name="MalformedSignatureErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Query response contained a malformed signature: ${this.error}`}};var Ll=class n extends qe{constructor(){super(),this.name="MalformedPublicKeyErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"Read state response contained a malformed public key"}},Bl=class n extends qe{constructor(e){super(),this.nodeId=e,this.name="QuerySignatureVerificationFailedErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Query signature verification failed. Node ID: ${this.nodeId}`}},zn=class n extends qe{constructor(e){super(),this.error=e,this.name="UnexpectedErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Unexpected error: ${La(this.error)}`}},Fl=class n extends qe{constructor(e,t,i,r){super(),this.status=e,this.requestId=t,this.response=i,this.rawCertificate=r,this.name="UnexpectedV4StatusErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){let e=(t,i)=>i instanceof Uint8Array?`hex(${i.length}):${ft(i)}`:i;return`Unexpected request status in v4 sync response: "${this.status}"
  Request ID (hex): ${ft(this.requestId)}
  Response: ${JSON.stringify(this.response,e,2)}`}},Dr=class n extends qe{constructor(e){super(),this.error=e,this.name="HashTreeDecodeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to decode certificate: ${this.error}`}},Ca=class n extends qe{constructor(e,t,i,r){super(),this.status=e,this.statusText=t,this.headers=i,this.bodyText=r,this.name="HttpErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){let e=`HTTP request failed:
  Status: ${this.status} (${this.statusText})
  Headers: ${JSON.stringify(this.headers,Mf(qe.verbosity))}
`;return this.bodyText&&(e+=`  Body: ${this.bodyText}
`),e}},Ia=class n extends qe{constructor(){super(),this.name="HttpV4ApiNotSupportedErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"HTTP request failed: v4 API is not supported"}},Pa=class n extends qe{constructor(e){super(),this.error=e,this.name="HttpFetchErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to fetch HTTP request: ${La(this.error)}`}},Na=class n extends qe{constructor(e){super(),this.receivedCanisterId=e,this.name="MissingCanisterIdErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Canister ID is required, but received ${typeof this.receivedCanisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`}},Ul=class n extends qe{constructor(e){super(),this.request=e,this.name="InvalidReadStateRequestErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Invalid read state request: ${this.request}`}},Oa=class n extends qe{constructor(e){super(),this.error=e,this.name="ExpiryJsonDeserializeErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Failed to deserialize expiry: ${this.error}`}},Dl=class n extends qe{constructor(e,t){super(),this.rootKey=e,this.expectedLength=t,this.name="InvalidRootKeyErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Invalid root key. Expected length: ${this.expectedLength}, actual length: ${this.rootKey.length}`}},kl=class n extends qe{constructor(e){super(),this.expectedCookieName=e,this.name="MissingCookieErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Cookie '${this.expectedCookieName}' not found`}},zl=class n extends qe{constructor(e){super(),this.expectedCookieName=e,this.name="EmptyCookieErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Cookie '${this.expectedCookieName}' is empty`}},Vl=class n extends qe{constructor(e){super(),this.expectedCookieName=e,this.name="MalformedCookieErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Cookie '${this.expectedCookieName}' is not valid URI-encoded content`}},Gl=class n extends qe{constructor(e,t){super(),this.expectedCookieName=e,this.values=t,this.name="ConflictingCanisterEnvErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return`Found ${this.values.length} conflicting values for the '${this.expectedCookieName}' cookie. This usually means a stale cookie from a previous deployment is still present on this origin. Clear the site data for this origin and reload.`}},Hl=class n extends qe{constructor(){super(),this.name="EffectiveSubnetIdAsyncErrorCode",Object.setPrototypeOf(this,n.prototype)}toErrorMessage(){return"Setting `effectiveTarget` to a `subnetId` is not allowed in `callSync = false` calls"}};function La(n){if(n instanceof Error)return n.stack??n.message;try{return JSON.stringify(n,Mf(qe.verbosity))}catch{return String(n)}}var Di=new Error("unreachable");var vi={};qv(vi,{Bool:()=>Tg,BoolClass:()=>jl,CandidDecodeError:()=>wn,ConstructType:()=>zi,Empty:()=>Eg,EmptyClass:()=>Ua,FixedIntClass:()=>dr,FixedNatClass:()=>ki,Float32:()=>Pg,Float64:()=>Ng,FloatClass:()=>za,Func:()=>Yg,FuncClass:()=>Cs,Int:()=>Cg,Int16:()=>Lg,Int32:()=>Bg,Int64:()=>Fg,Int8:()=>Og,IntClass:()=>Da,Nat:()=>Ig,Nat16:()=>Dg,Nat32:()=>kg,Nat64:()=>zg,Nat8:()=>Ug,NatClass:()=>ka,Null:()=>Ag,NullClass:()=>As,Opt:()=>Wg,OptClass:()=>zr,PrimitiveType:()=>Vn,Principal:()=>Vg,PrincipalClass:()=>Jl,Rec:()=>Xg,RecClass:()=>ii,Record:()=>qg,RecordClass:()=>Rs,Reserved:()=>Mg,ReservedClass:()=>Vi,Service:()=>jg,ServiceClass:()=>bo,Text:()=>Rg,TextClass:()=>Zl,Tuple:()=>Gg,TupleClass:()=>Kl,Type:()=>yo,Unknown:()=>Vw,UnknownClass:()=>Yl,Variant:()=>$g,VariantClass:()=>_o,Vec:()=>Hg,VecClass:()=>xo,Visitor:()=>Pf,decode:()=>zw,encode:()=>kw,resetSubtypeCache:()=>Nf,subtype:()=>Bf});function pt(...n){let e=new Uint8Array(n.reduce((i,r)=>i+r.byteLength,0)),t=0;for(let i of n)e.set(i,t),t+=i.byteLength;return e}var bi=class{save(){return this._view}restore(e){if(!(e instanceof Uint8Array))throw new Error("Checkpoint must be a Uint8Array");this._view=e}constructor(e,t=e?.byteLength||0){if(e&&!(e instanceof Uint8Array))try{e=mo(e)}catch{throw new Error("Buffer must be a Uint8Array")}if(t<0||!Number.isInteger(t))throw new Error("Length must be a non-negative integer");if(e&&t>e.byteLength)throw new Error("Length cannot exceed buffer length");this._buffer=e||new Uint8Array(0),this._view=new Uint8Array(this._buffer.buffer,0,t)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(e){let t=this._view.subarray(0,e);return this._view=this._view.subarray(e),t.slice()}readUint8(){if(this._view.byteLength===0)return;let e=this._view[0];return this._view=this._view.subarray(1),e}write(e){if(!(e instanceof Uint8Array))throw new Error("Buffer must be a Uint8Array");let t=this._view.byteLength;this._view.byteOffset+this._view.byteLength+e.byteLength>=this._buffer.byteLength?this.alloc(e.byteLength):this._view=new Uint8Array(this._buffer.buffer,this._view.byteOffset,this._view.byteLength+e.byteLength),this._view.set(e,t)}get end(){return this._view.byteLength===0}alloc(e){if(e<=0||!Number.isInteger(e))throw new Error("Amount must be a positive integer");let t=new Uint8Array((this._buffer.byteLength+e)*1.2|0),i=new Uint8Array(t.buffer,0,this._view.byteLength+e);i.set(this._view),this._buffer=t,this._view=i}};function mo(n){if(!n)throw new Error("Input cannot be null or undefined");return n instanceof Uint8Array?n.buffer instanceof ArrayBuffer?n:new Uint8Array(n):n instanceof ArrayBuffer?new Uint8Array(n):Array.isArray(n)?new Uint8Array(n):"buffer"in n?mo(n.buffer):new Uint8Array(n).slice()}function go(n,e){if(n.byteLength!==e.byteLength)return n.byteLength-e.byteLength;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return n[t]-e[t];return 0}function xg(n,e){return go(n,e)===0}function _g(n){if(!(n instanceof Uint8Array))throw new Error("Input must be a Uint8Array");return new DataView(n.buffer,n.byteOffset,n.byteLength)}function Nw(n){let t=new TextEncoder().encode(n),i=0;for(let r of t)i=(i*223+r)%2**32;return i}function In(n){if(/^_\d+_$/.test(n)||/^_0x[0-9a-fA-F]+_$/.test(n)){let e=+n.slice(1,-1);if(Number.isSafeInteger(e)&&e>=0&&e<2**32)return e}return Nw(n)}function Tf(n){let e=BigInt(n);if(n<=0)throw new RangeError("Input must be positive");return e.toString(2).length-1}function Wl(n){let e=BigInt(n);if(n<0)throw new RangeError("Input must be non-negative");return BigInt(1)<<e}function bg(){throw new Error("unexpected end of buffer")}var ql=8192;function vn(n,e){return n.byteLength<e&&bg(),n.read(e)}function kr(n){let e=n.readUint8();return e===void 0&&bg(),e}function Pt(n){if(typeof n=="number"&&(n=BigInt(n)),n<BigInt(0))throw new Error("Cannot leb encode negative values.");let e=(n===BigInt(0)?0:Tf(n))+1,t=new bi(new Uint8Array(e),0);for(;;){let i=Number(n&BigInt(127));if(n/=BigInt(128),n===BigInt(0)){t.write(new Uint8Array([i]));break}else t.write(new Uint8Array([i|128]))}return t.buffer}function Kt(n){let e=BigInt(1),t=BigInt(0),i,r=0;do{if(r++>=ql)throw new Error(`LEB128 value exceeds maximum length of ${ql} bytes`);i=kr(n),t+=BigInt(i&127).valueOf()*e,e*=BigInt(128)}while(i>=128);return t}function Jt(n){typeof n=="number"&&(n=BigInt(n));let e=n<BigInt(0);e&&(n=-n-BigInt(1));let t=(n===BigInt(0)?0:Tf(n))+1,i=new bi(new Uint8Array(t),0);for(;;){let s=r(n);if(n/=BigInt(128),e&&n===BigInt(0)&&(s&64)!==0||!e&&n===BigInt(0)&&(s&64)===0){i.write(new Uint8Array([s]));break}else i.write(new Uint8Array([s|128]))}function r(s){let o=s%BigInt(128);return Number(e?BigInt(128)-o-BigInt(1):o)}return i.buffer}function ur(n){let e=new Uint8Array(n.buffer),t=0;for(;t<e.byteLength;t++){if(t>=ql)throw new Error(`LEB128 value exceeds maximum length of ${ql} bytes`);if(e[t]<128){if((e[t]&64)===0)return Kt(n);break}}let i=new Uint8Array(vn(n,t+1)),r=BigInt(0);for(let s=i.byteLength-1;s>=0;s--)r=r*BigInt(128)+BigInt(128-(i[s]&127)-1);return-r-BigInt(1)}function vg(n,e){if(BigInt(n)<BigInt(0))throw new Error("Cannot write negative values.");return Af(n,e)}function Af(n,e){n=BigInt(n);let t=new bi(new Uint8Array(Math.min(1,e)),0),i=0,r=BigInt(256),s=BigInt(0),o=Number(n%r);for(t.write(new Uint8Array([o]));++i<e;)n<0&&s===BigInt(0)&&o!==0&&(s=BigInt(1)),o=Number((n/r-s)%BigInt(256)),t.write(new Uint8Array([o])),r*=BigInt(256);return t.buffer}function Rf(n,e){if(e<=0||!Number.isInteger(e))throw new Error("Byte length must be a positive integer");let t=BigInt(kr(n)),i=BigInt(1),r=0;for(;++r<e;){i*=BigInt(256);let s=BigInt(kr(n));t=t+i*s}return t}function wg(n,e){if(e<=0||!Number.isInteger(e))throw new Error("Byte length must be a positive integer");let t=Rf(n,e),i=BigInt(2)**(BigInt(8)*BigInt(e-1)+BigInt(7));return t>=i&&(t-=i*BigInt(2)),t}var Ow=65536,Lw=4,Ba=Number.MAX_SAFE_INTEGER;function Bw(n){Ba=Ow+Lw*n}function Fw(){Ba=Number.MAX_SAFE_INTEGER}function Of(n){if(n>Ba)throw new wn(`Decoded value exceeds the allocation budget: tried to allocate ${n} elements with ${Ba} remaining`);Ba-=n}function Uw(n){let e=Kt(n);if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new wn(`Length out of range: ${e}`);return Number(e)}var wn=class n extends Error{constructor(e){super(e),this.name="CandidDecodeError",Object.setPrototypeOf(this,n.prototype)}},xt;(function(n){n[n.Null=-1]="Null",n[n.Bool=-2]="Bool",n[n.Nat=-3]="Nat",n[n.Int=-4]="Int",n[n.Float32=-13]="Float32",n[n.Float64=-14]="Float64",n[n.Text=-15]="Text",n[n.Reserved=-16]="Reserved",n[n.Empty=-17]="Empty",n[n.Opt=-18]="Opt",n[n.Vector=-19]="Vector",n[n.Record=-20]="Record",n[n.Variant=-21]="Variant",n[n.Func=-22]="Func",n[n.Service=-23]="Service",n[n.Principal=-24]="Principal"})(xt||(xt={}));var $l="DIDL",Dw=new TextEncoder().encode($l),Sg=400;function Fa(n,e,t){return n.map((i,r)=>t(i,e[r]))}var If=class{constructor(){this._typs=[],this._idx=new Map,this._idxRefCount=new Map}has(e){return this._idx.has(e.name)}add(e,t){let i=this._typs.length;this._idx.set(e.name,i),this._idxRefCount.set(i,1),this._typs.push(t)}merge(e,t){let i=this._idx.get(e.name),r=this._idx.get(t);if(i===void 0)throw new Error(`Missing type index for ${e}`);if(r===void 0)throw new Error(`Missing type index for ${t}`);this._typs[i]=this._typs[r];let s=this._getIdxRefCount(i),o=this._getIdxRefCount(r);this._idxRefCount.set(i,s+o),this._idx.set(t,i),this._idxRefCount.set(r,0),this._compactFromEnd()}_getIdxRefCount(e){return this._idxRefCount.get(e)||0}_compactFromEnd(){for(;this._typs.length>0;){let e=this._typs.length-1;if(this._getIdxRefCount(e)>0)break;this._typs.pop(),this._idxRefCount.delete(e)}}encode(){let e=Pt(this._typs.length),t=pt(...this._typs);return pt(e,t)}indexOf(e){if(!this._idx.has(e))throw new Error(`Missing type index for ${e}`);return Jt(this._idx.get(e)||0)}},Pf=class{visitType(e,t){throw new Error("Not implemented")}visitPrimitive(e,t){return this.visitType(e,t)}visitEmpty(e,t){return this.visitPrimitive(e,t)}visitBool(e,t){return this.visitPrimitive(e,t)}visitNull(e,t){return this.visitPrimitive(e,t)}visitReserved(e,t){return this.visitPrimitive(e,t)}visitText(e,t){return this.visitPrimitive(e,t)}visitNumber(e,t){return this.visitPrimitive(e,t)}visitInt(e,t){return this.visitNumber(e,t)}visitNat(e,t){return this.visitNumber(e,t)}visitFloat(e,t){return this.visitPrimitive(e,t)}visitFixedInt(e,t){return this.visitNumber(e,t)}visitFixedNat(e,t){return this.visitNumber(e,t)}visitPrincipal(e,t){return this.visitPrimitive(e,t)}visitConstruct(e,t){return this.visitType(e,t)}visitVec(e,t,i){return this.visitConstruct(e,i)}visitOpt(e,t,i){return this.visitConstruct(e,i)}visitRecord(e,t,i){return this.visitConstruct(e,i)}visitTuple(e,t,i){let r=t.map((s,o)=>[`_${o}_`,s]);return this.visitRecord(e,r,i)}visitVariant(e,t,i){return this.visitConstruct(e,i)}visitRec(e,t,i){return this.visitConstruct(t,i)}visitFunc(e,t){return this.visitConstruct(e,t)}visitService(e,t){return this.visitConstruct(e,t)}},Qe;(function(n){n.EmptyClass="__IDL_EmptyClass__",n.UnknownClass="__IDL_UnknownClass__",n.BoolClass="__IDL_BoolClass__",n.NullClass="__IDL_NullClass__",n.ReservedClass="__IDL_ReservedClass__",n.TextClass="__IDL_TextClass__",n.IntClass="__IDL_IntClass__",n.NatClass="__IDL_NatClass__",n.FloatClass="__IDL_FloatClass__",n.FixedIntClass="__IDL_FixedIntClass__",n.FixedNatClass="__IDL_FixedNatClass__",n.VecClass="__IDL_VecClass__",n.OptClass="__IDL_OptClass__",n.RecordClass="__IDL_RecordClass__",n.TupleClass="__IDL_TupleClass__",n.VariantClass="__IDL_VariantClass__",n.RecClass="__IDL_RecClass__",n.PrincipalClass="__IDL_PrincipalClass__",n.FuncClass="__IDL_FuncClass__",n.ServiceClass="__IDL_ServiceClass__"})(Qe||(Qe={}));var yo=class{display(){return this.name}valueToString(e){return Yt(e)}buildTypeTable(e){e.has(this)||this._buildTypeTableImpl(e)}},Vn=class extends yo{checkType(e){if(this.name!==e.name)throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);return e}_buildTypeTableImpl(e){}},zi=class extends yo{checkType(e){if(e instanceof ii){let t=e.getType();if(typeof t>"u")throw new wn("Type mismatch: cannot decode from uninitialized recursive type");return t}throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`)}encodeType(e){return e.indexOf(this.name)}},Ua=class extends Vn{get typeName(){return Qe.EmptyClass}static[Symbol.hasInstance](e){return e.typeName===Qe.EmptyClass}accept(e,t){return e.visitEmpty(this,t)}covariant(e){throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(){throw new Error("Empty cannot appear as a function argument")}valueToString(){throw new Error("Empty cannot appear as a value")}encodeType(){return Jt(xt.Empty)}decodeValue(){throw new Error("Empty cannot appear as an output")}get name(){return"empty"}},Yl=class extends yo{get typeName(){return Qe.UnknownClass}static[Symbol.hasInstance](e){return e.typeName===Qe.UnknownClass}checkType(e){throw new Error("Method not implemented for unknown.")}accept(e,t){throw e.visitType(this,t)}covariant(e){throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(){throw new Error("Unknown cannot appear as a function argument")}valueToString(){throw new Error("Unknown cannot appear as a value")}encodeType(){throw new Error("Unknown cannot be serialized")}decodeValue(e,t){let i=t.decodeValue(e,t);Object(i)!==i&&(i=Object(i));let r;return t instanceof ii?r=()=>t.getType():r=()=>t,Object.defineProperty(i,"type",{value:r,writable:!0,enumerable:!1,configurable:!0}),i}_buildTypeTableImpl(){throw new Error("Unknown cannot be serialized")}get name(){return"Unknown"}},jl=class extends Vn{get typeName(){return Qe.BoolClass}static[Symbol.hasInstance](e){return e.typeName===Qe.BoolClass}accept(e,t){return e.visitBool(this,t)}covariant(e){if(typeof e=="boolean")return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return new Uint8Array([e?1:0])}encodeType(){return Jt(xt.Bool)}decodeValue(e,t){switch(this.checkType(t),kr(e)){case 0:return!1;case 1:return!0;default:throw new Error("Boolean value out of range")}}get name(){return"bool"}},As=class extends Vn{get typeName(){return Qe.NullClass}static[Symbol.hasInstance](e){return e.typeName===Qe.NullClass}accept(e,t){return e.visitNull(this,t)}covariant(e){if(e===null)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(){return new Uint8Array(0)}encodeType(){return Jt(xt.Null)}decodeValue(e,t){return this.checkType(t),null}get name(){return"null"}},Vi=class extends Vn{get typeName(){return Qe.ReservedClass}static[Symbol.hasInstance](e){return e.typeName===Qe.ReservedClass}accept(e,t){return e.visitReserved(this,t)}covariant(e){return!0}encodeValue(){return new Uint8Array(0)}encodeType(){return Jt(xt.Reserved)}decodeValue(e,t){return t.name!==this.name&&t.decodeValue(e,t),null}get name(){return"reserved"}},Zl=class extends Vn{get typeName(){return Qe.TextClass}static[Symbol.hasInstance](e){return e.typeName===Qe.TextClass}accept(e,t){return e.visitText(this,t)}covariant(e){if(typeof e=="string")return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=new TextEncoder().encode(e),i=Pt(t.byteLength);return pt(i,t)}encodeType(){return Jt(xt.Text)}decodeValue(e,t){this.checkType(t);let i=Kt(e),r=vn(e,Number(i));return new TextDecoder("utf8",{fatal:!0}).decode(r)}get name(){return"text"}valueToString(e){return`"${e}"`}},Da=class extends Vn{get typeName(){return Qe.IntClass}static[Symbol.hasInstance](e){return e.typeName===Qe.IntClass}accept(e,t){return e.visitInt(this,t)}covariant(e){if(typeof e=="bigint"||Number.isInteger(e))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return Jt(e)}encodeType(){return Jt(xt.Int)}decodeValue(e,t){return this.checkType(t),ur(e)}get name(){return"int"}valueToString(e){return e.toString()}},ka=class extends Vn{get typeName(){return Qe.NatClass}static[Symbol.hasInstance](e){return e.typeName===Qe.NatClass}accept(e,t){return e.visitNat(this,t)}covariant(e){if(typeof e=="bigint"&&e>=BigInt(0)||Number.isInteger(e)&&e>=0)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return Pt(e)}encodeType(){return Jt(xt.Nat)}decodeValue(e,t){return this.checkType(t),Kt(e)}get name(){return"nat"}valueToString(e){return e.toString()}},za=class extends Vn{get typeName(){return Qe.FloatClass}static[Symbol.hasInstance](e){return e.typeName===Qe.FloatClass}constructor(e){if(super(),this._bits=e,e!==32&&e!==64)throw new Error("not a valid float type")}accept(e,t){return e.visitFloat(this,t)}covariant(e){if(typeof e=="number"||e instanceof Number)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=new ArrayBuffer(this._bits/8),i=new DataView(t);return this._bits===32?i.setFloat32(0,e,!0):i.setFloat64(0,e,!0),new Uint8Array(t)}encodeType(){let e=this._bits===32?xt.Float32:xt.Float64;return Jt(e)}decodeValue(e,t){this.checkType(t);let i=vn(e,this._bits/8),r=_g(i);return this._bits===32?r.getFloat32(0,!0):r.getFloat64(0,!0)}get name(){return`float${this._bits}`}valueToString(e){return e.toString()}},dr=class extends Vn{get typeName(){return Qe.FixedIntClass}static[Symbol.hasInstance](e){return e.typeName===Qe.FixedIntClass}constructor(e){super(),this._bits=e}accept(e,t){return e.visitFixedInt(this,t)}covariant(e){let t=Wl(this._bits-1)*BigInt(-1),i=Wl(this._bits-1)-BigInt(1);if(typeof e=="bigint"){if(e>=t&&e<=i)return!0}else if(Number.isInteger(e)){let r=BigInt(e);if(r>=t&&r<=i)return!0}throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return Af(e,this._bits/8)}encodeType(){let e=Math.log2(this._bits)-3;return Jt(-9-e)}decodeValue(e,t){this.checkType(t);let i=wg(e,this._bits/8);return this._bits<=32?Number(i):i}get name(){return`int${this._bits}`}valueToString(e){return e.toString()}},ki=class extends Vn{get typeName(){return Qe.FixedNatClass}static[Symbol.hasInstance](e){return e.typeName===Qe.FixedNatClass}constructor(e){super(),this._bits=e}accept(e,t){return e.visitFixedNat(this,t)}covariant(e){let t=Wl(this._bits);if(typeof e=="bigint"&&e>=BigInt(0)){if(e<t)return!0}else if(Number.isInteger(e)&&e>=0&&BigInt(e)<t)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return vg(e,this._bits/8)}encodeType(){let e=Math.log2(this._bits)-3;return Jt(-5-e)}decodeValue(e,t){this.checkType(t);let i=Rf(e,this._bits/8);return this._bits<=32?Number(i):i}get name(){return`nat${this._bits}`}valueToString(e){return e.toString()}},xo=class n extends zi{get typeName(){return Qe.VecClass}static[Symbol.hasInstance](e){return e.typeName===Qe.VecClass}constructor(e){super(),this._type=e,this._blobOptimization=!1,e instanceof ki&&e._bits===8&&(this._blobOptimization=!0)}accept(e,t){return e.visitVec(this,this._type,t)}covariant(e){let t=this._type instanceof ki?this._type._bits:this._type instanceof dr?this._type._bits:0;if(ArrayBuffer.isView(e)&&t==e.BYTES_PER_ELEMENT*8||Array.isArray(e)&&e.every((i,r)=>{try{return this._type.covariant(i)}catch(s){throw new Error(`Invalid ${this.display()} argument: 

index ${r} -> ${s.message}`,{cause:s})}}))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=Pt(e.length);if(this._blobOptimization)return pt(t,new Uint8Array(e));if(ArrayBuffer.isView(e)){if(e instanceof Int16Array||e instanceof Uint16Array){let r=new DataView(new ArrayBuffer(e.length*2));for(let s=0;s<e.length;s++)e instanceof Int16Array?r.setInt16(s*2,e[s],!0):r.setUint16(s*2,e[s],!0);return pt(t,new Uint8Array(r.buffer))}if(e instanceof Int32Array||e instanceof Uint32Array){let r=new DataView(new ArrayBuffer(e.length*4));for(let s=0;s<e.length;s++)e instanceof Int32Array?r.setInt32(s*4,e[s],!0):r.setUint32(s*4,e[s],!0);return pt(t,new Uint8Array(r.buffer))}if(e instanceof BigInt64Array||e instanceof BigUint64Array){let r=new DataView(new ArrayBuffer(e.length*8));for(let s=0;s<e.length;s++)e instanceof BigInt64Array?r.setBigInt64(s*8,e[s],!0):r.setBigUint64(s*8,e[s],!0);return pt(t,new Uint8Array(r.buffer))}return pt(t,new Uint8Array(e.buffer,e.byteOffset,e.byteLength))}let i=new bi(new Uint8Array(t.byteLength+e.length),0);i.write(t);for(let r of e){let s=this._type.encodeValue(r);i.write(new Uint8Array(s))}return i.buffer}_buildTypeTableImpl(e){this._type.buildTypeTable(e);let t=Jt(xt.Vector),i=this._type.encodeType(e);e.add(this,pt(t,i))}decodeValue(e,t){let i=this.checkType(t);if(!(i instanceof n))throw new wn(`Expected type '${this.display()}', but received non-vector type '${i.display()}'`);let r=Uw(e);if(this._type instanceof ki){if(this._type._bits==8)return new Uint8Array(vn(e,r));if(this._type._bits==16){let o=vn(e,r*2);return new Uint16Array(o.buffer,o.byteOffset,r)}if(this._type._bits==32){let o=vn(e,r*4);return new Uint32Array(o.buffer,o.byteOffset,r)}if(this._type._bits==64)return new BigUint64Array(vn(e,r*8).buffer)}if(this._type instanceof dr){if(this._type._bits==8)return new Int8Array(vn(e,r));if(this._type._bits==16){let o=vn(e,r*2),a=new DataView(o.buffer,o.byteOffset,o.byteLength),c=new Int16Array(r);for(let l=0;l<r;l++)c[l]=a.getInt16(l*2,!0);return c}if(this._type._bits==32){let o=vn(e,r*4),a=new DataView(o.buffer,o.byteOffset,o.byteLength),c=new Int32Array(r);for(let l=0;l<r;l++)c[l]=a.getInt32(l*4,!0);return c}if(this._type._bits==64){let o=vn(e,r*8),a=new DataView(o.buffer,o.byteOffset,o.byteLength),c=new BigInt64Array(r);for(let l=0;l<r;l++)c[l]=a.getBigInt64(l*8,!0);return c}}Of(r);let s=[];for(let o=0;o<r;o++)s.push(this._type.decodeValue(e,i._type));return s}get name(){return`vec ${this._type.name}`}display(){return`vec ${this._type.display()}`}valueToString(e){return`vec {${e.map(i=>this._type.valueToString(i)).join("; ")}}`}},zr=class n extends zi{get typeName(){return Qe.OptClass}static[Symbol.hasInstance](e){return e.typeName===Qe.OptClass}constructor(e){super(),this._type=e}accept(e,t){return e.visitOpt(this,this._type,t)}covariant(e){try{if(Array.isArray(e)&&(e.length===0||e.length===1&&this._type.covariant(e[0])))return!0}catch(t){throw new Error(`Invalid ${this.display()} argument: ${Yt(e)} 

-> ${t.message}`,{cause:t})}throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){return e.length===0?new Uint8Array([0]):pt(new Uint8Array([1]),this._type.encodeValue(e[0]))}_buildTypeTableImpl(e){this._type.buildTypeTable(e);let t=Jt(xt.Opt),i=this._type.encodeType(e);e.add(this,pt(t,i))}decodeValue(e,t){if(t instanceof As)return[];if(t instanceof Vi)return[];let i=t;if(t instanceof ii){let r=t.getType();if(typeof r>"u")throw new wn("Type mismatch: cannot decode from uninitialized recursive type");i=r}if(i instanceof n)switch(kr(e)){case 0:return[];case 1:{let r=e.save();try{return[this._type.decodeValue(e,i._type)]}catch{return e.restore(r),i._type.decodeValue(e,i._type),[]}}default:throw new wn(`Invalid option value: expected 0 (None) or 1 (Some) for type '${this.display()}'`)}else{if(this._type instanceof As||this._type instanceof n||this._type instanceof Vi)return i.decodeValue(e,i),[];{let r=e.save();try{return[this._type.decodeValue(e,t)]}catch{return e.restore(r),i.decodeValue(e,t),[]}}}}get name(){return`opt ${this._type.name}`}display(){return`opt ${this._type.display()}`}valueToString(e){return e.length===0?"null":`opt ${this._type.valueToString(e[0])}`}},Rs=class n extends zi{get typeName(){return Qe.RecordClass}static[Symbol.hasInstance](e){return e.typeName===Qe.RecordClass||e.typeName===Qe.TupleClass}constructor(e={}){super(),this._fields=Object.entries(e).sort((t,i)=>In(t[0])-In(i[0]))}accept(e,t){return e.visitRecord(this,this._fields,t)}tryAsTuple(){let e=[];for(let t=0;t<this._fields.length;t++){let[i,r]=this._fields[t];if(i!==`_${t}_`)return null;e.push(r)}return e}covariant(e){if(typeof e=="object"&&this._fields.every(([t,i])=>{if(!e.hasOwnProperty(t))throw new Error(`Record is missing key "${t}".`);try{return i.covariant(e[t])}catch(r){throw new Error(`Invalid ${this.display()} argument: 

field ${t} -> ${r.message}`,{cause:r})}}))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=this._fields.map(([r])=>e[r]),i=Fa(this._fields,t,([,r],s)=>r.encodeValue(s));return pt(...i)}_buildTypeTableImpl(e){this._fields.forEach(([s,o])=>o.buildTypeTable(e));let t=Jt(xt.Record),i=Pt(this._fields.length),r=this._fields.map(([s,o])=>pt(Pt(In(s)),o.encodeType(e)));e.add(this,pt(t,i,pt(...r)))}decodeValue(e,t){let i=this.checkType(t);if(!(i instanceof n))throw new wn(`Expected type '${this.display()}', but received non-record type '${i.display()}'`);let r={};Of(i._fields.length);let s=0,o=0;for(;o<i._fields.length;){let[a,c]=i._fields[o];if(s>=this._fields.length){c.decodeValue(e,c),o++;continue}let[l,u]=this._fields[s],h=In(this._fields[s][0]),f=In(a);if(h===f)r[l]=u.decodeValue(e,c),s++,o++;else if(f>h)if(u instanceof zr||u instanceof Vi)r[l]=[],s++;else{let p=this._fields.map(([y])=>y).join(", "),g=i._fields.map(([y])=>y).join(", ");throw new wn(`Cannot find required field '${l}' in record, expected fields: [${p}], received fields: [${g}]`)}else c.decodeValue(e,c),o++}for(let[a,c]of this._fields.slice(s))if(c instanceof zr||c instanceof Vi)r[a]=[];else{let l=this._fields.map(([h])=>h).join(", "),u=i._fields.map(([h])=>h).join(", ");throw new wn(`Cannot find required field '${a}' in record, expected fields: [${l}], received fields: [${u}]`)}return r}get fieldsAsObject(){let e={};for(let[t,i]of this._fields)e[In(t)]=i;return e}get name(){return`record {${this._fields.map(([t,i])=>`${t}:${i.name}`).join("; ")}}`}display(){return`record {${this._fields.map(([t,i])=>`${t}:${i.display()}`).join("; ")}}`}valueToString(e){let t=this._fields.map(([r])=>e[r]);return`record {${Fa(this._fields,t,([r,s],o)=>`${r}=${s.valueToString(o)}`).join("; ")}}`}},Kl=class n extends Rs{get typeName(){return Qe.TupleClass}static[Symbol.hasInstance](e){return e.typeName===Qe.TupleClass}constructor(e){let t={};e.forEach((i,r)=>t[`_${r}_`]=i),super(t),this._components=e}accept(e,t){return e.visitTuple(this,this._components,t)}covariant(e){if(Array.isArray(e)&&e.length>=this._fields.length&&this._components.every((t,i)=>{try{return t.covariant(e[i])}catch(r){throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${r.message}`,{cause:r})}}))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=Fa(this._components,e,(i,r)=>i.encodeValue(r));return pt(...t)}decodeValue(e,t){let i=this.checkType(t);if(!(i instanceof n))throw new wn(`Expected type '${this.display()}', but received non-tuple type '${i.display()}'`);if(i._components.length<this._components.length)throw new wn(`Tuple mismatch: expected ${this._components.length} components, but received ${i._components.length}`);Of(i._components.length);let r=[];for(let[s,o]of i._components.entries())s>=this._components.length?o.decodeValue(e,o):r.push(this._components[s].decodeValue(e,o));return r}display(){return`record {${this._components.map(t=>t.display()).join("; ")}}`}valueToString(e){return`record {${Fa(this._components,e,(i,r)=>i.valueToString(r)).join("; ")}}`}},_o=class n extends zi{get typeName(){return Qe.VariantClass}static[Symbol.hasInstance](e){return e.typeName===Qe.VariantClass}constructor(e={}){super(),this._fields=Object.entries(e).sort((t,i)=>In(t[0])-In(i[0]))}accept(e,t){return e.visitVariant(this,this._fields,t)}covariant(e){if(typeof e=="object"&&Object.entries(e).length===1&&this._fields.every(([t,i])=>{try{return!e.hasOwnProperty(t)||i.covariant(e[t])}catch(r){throw new Error(`Invalid ${this.display()} argument: 

variant ${t} -> ${r.message}`,{cause:r})}}))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){for(let t=0;t<this._fields.length;t++){let[i,r]=this._fields[t];if(e.hasOwnProperty(i)){let s=Pt(t),o=r.encodeValue(e[i]);return pt(s,o)}}throw Error(`Variant has no data: ${e}`)}_buildTypeTableImpl(e){this._fields.forEach(([,s])=>{s.buildTypeTable(e)});let t=Jt(xt.Variant),i=Pt(this._fields.length),r=this._fields.map(([s,o])=>pt(Pt(In(s)),o.encodeType(e)));e.add(this,pt(t,i,...r))}decodeValue(e,t){let i=this.checkType(t);if(!(i instanceof n))throw new wn(`Expected type '${this.display()}', but received non-variant type '${i.display()}'`);let r=Number(Kt(e));if(r>=i._fields.length)throw Error(`Invalid variant index: ${r}`);let[s,o]=i._fields[r];for(let[c,l]of this._fields)if(In(s)===In(c)){let u=l.decodeValue(e,o);return{[c]:u}}let a=this._fields.map(([c])=>c).join(", ");throw new wn(`Cannot find field hash ${s} in variant, expected fields: [${a}]`)}get name(){return`variant {${this._fields.map(([t,i])=>`${t}:${i.name}`).join("; ")}}`}display(){return`variant {${this._fields.map(([t,i])=>t+(i.name==="null"?"":`:${i.display()}`)).join("; ")}}`}valueToString(e){for(let[t,i]of this._fields)if(e.hasOwnProperty(t)){let r=i.valueToString(e[t]);return r==="null"?`variant {${t}}`:`variant {${t}=${r}}`}throw new Error(`Variant has no data: ${e}`)}get alternativesAsObject(){let e={};for(let[t,i]of this._fields)e[In(t)]=i;return e}},ii=class n extends zi{constructor(){super(...arguments),this._id=n._counter++}get typeName(){return Qe.RecClass}static{this._counter=0}static[Symbol.hasInstance](e){return e.typeName===Qe.RecClass}accept(e,t){if(!this._type)throw Error("Recursive type uninitialized.");return e.visitRec(this,this._type,t)}fill(e){this._type=e}getType(){return this._type}covariant(e){if(this._type&&this._type.covariant(e))return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(e)}_buildTypeTableImpl(e){if(!this._type)throw Error("Recursive type uninitialized.");e.add(this,new Uint8Array([])),this._type.buildTypeTable(e),e.merge(this,this._type.name)}decodeValue(e,t){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(e,t)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03BC${this.name}.${this._type.name}`}valueToString(e){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(e)}};function Lf(n){if(kr(n)!==1)throw new Error("Cannot decode principal");let t=Number(Kt(n));return Ve.fromUint8Array(new Uint8Array(vn(n,t)))}var Jl=class extends Vn{get typeName(){return Qe.PrincipalClass}static[Symbol.hasInstance](e){return e.typeName===Qe.PrincipalClass}accept(e,t){return e.visitPrincipal(this,t)}covariant(e){if(e&&e._isPrincipal)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=e.toUint8Array(),i=Pt(t.byteLength);return pt(new Uint8Array([1]),i,t)}encodeType(){return Jt(xt.Principal)}decodeValue(e,t){return this.checkType(t),Lf(e)}get name(){return"principal"}valueToString(e){return`${this.name} "${e.toText()}"`}},Cs=class extends zi{get typeName(){return Qe.FuncClass}static[Symbol.hasInstance](e){return e.typeName===Qe.FuncClass}static argsToString(e,t){if(e.length!==t.length)throw new Error("arity mismatch");return`(${e.map((i,r)=>i.valueToString(t[r])).join(", ")})`}constructor(e,t,i=[]){super(),this.argTypes=e,this.retTypes=t,this.annotations=i}accept(e,t){return e.visitFunc(this,t)}covariant(e){if(Array.isArray(e)&&e.length===2&&e[0]&&e[0]._isPrincipal&&typeof e[1]=="string")return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue([e,t]){let i=e.toUint8Array(),r=Pt(i.byteLength),s=pt(new Uint8Array([1]),r,i),o=new TextEncoder().encode(t),a=Pt(o.byteLength);return pt(new Uint8Array([1]),s,a,o)}_buildTypeTableImpl(e){this.argTypes.forEach(l=>l.buildTypeTable(e)),this.retTypes.forEach(l=>l.buildTypeTable(e));let t=Jt(xt.Func),i=Pt(this.argTypes.length),r=pt(...this.argTypes.map(l=>l.encodeType(e))),s=Pt(this.retTypes.length),o=pt(...this.retTypes.map(l=>l.encodeType(e))),a=Pt(this.annotations.length),c=pt(...this.annotations.map(l=>this.encodeAnnotation(l)));e.add(this,pt(t,i,r,s,o,a,c))}decodeValue(e,t){let i=t instanceof ii?t.getType()??t:t;if(!Bf(i,this))throw new Error(`Cannot decode function reference at type ${this.display()} from wire type ${i.display()}`);if(kr(e)!==1)throw new Error("Cannot decode function reference");let s=Lf(e),o=Number(Kt(e)),a=vn(e,o),l=new TextDecoder("utf8",{fatal:!0}).decode(a);return[s,l]}get name(){let e=this.argTypes.map(r=>r.name).join(", "),t=this.retTypes.map(r=>r.name).join(", "),i=` ${this.annotations.join(" ")}`;return`(${e}) -> (${t})${i}`}valueToString([e,t]){return`func "${e.toText()}".${t}`}display(){let e=this.argTypes.map(r=>r.display()).join(", "),t=this.retTypes.map(r=>r.display()).join(", "),i=` ${this.annotations.join(" ")}`;return`(${e}) \u2192 (${t})${i}`}encodeAnnotation(e){if(e==="query")return new Uint8Array([1]);if(e==="oneway")return new Uint8Array([2]);if(e==="composite_query")return new Uint8Array([3]);throw new Error("Illegal function annotation")}},bo=class extends zi{get typeName(){return Qe.ServiceClass}static[Symbol.hasInstance](e){return e.typeName===Qe.ServiceClass}constructor(e){super(),this._fields=Object.entries(e).sort((t,i)=>t[0]<i[0]?-1:t[0]>i[0]?1:0)}accept(e,t){return e.visitService(this,t)}covariant(e){if(e&&e._isPrincipal)return!0;throw new Error(`Invalid ${this.display()} argument: ${Yt(e)}`)}encodeValue(e){let t=e.toUint8Array(),i=Pt(t.length);return pt(new Uint8Array([1]),i,t)}_buildTypeTableImpl(e){this._fields.forEach(([s,o])=>o.buildTypeTable(e));let t=Jt(xt.Service),i=Pt(this._fields.length),r=this._fields.map(([s,o])=>{let a=new TextEncoder().encode(s),c=Pt(a.length);return pt(c,a,o.encodeType(e))});e.add(this,pt(t,i,...r))}decodeValue(e,t){let i=t instanceof ii?t.getType()??t:t;if(!Bf(i,this))throw new Error(`Cannot decode service reference at type ${this.display()} from wire type ${i.display()}`);return Lf(e)}get name(){return`service {${this._fields.map(([t,i])=>`${t}:${i.name}`).join("; ")}}`}valueToString(e){return`service "${e.toText()}"`}fieldsAsObject(){let e={};for(let[t,i]of this._fields)e[t]=i;return e}};function Yt(n){let e=JSON.stringify(n,(t,i)=>typeof i=="bigint"?`BigInt(${i})`:i);return e&&e.length>Sg?`${e.substring(0,Sg-3)}...`:e}function kw(n,e){if(e.length<n.length)throw Error("Wrong number of message arguments");let t=new If;n.forEach(a=>a.buildTypeTable(t));let i=t.encode(),r=Pt(e.length),s=pt(...n.map(a=>a.encodeType(t))),o=pt(...Fa(n,e,(a,c)=>{try{a.covariant(c)}catch(l){throw new Error(`${l.message}

`)}return a.encodeValue(c)}));return pt(Dw,i,r,s,o)}function zw(n,e){let t=new bi(e);if(e.byteLength<$l.length)throw new Error("Message length smaller than magic number");let i=vn(t,$l.length),r=new TextDecoder().decode(i);if(r!==$l)throw new Error(`Wrong magic number: ${JSON.stringify(r)}`);function s(h){let f=[],p=Number(Kt(h));for(let m=0;m<p;m++){let d=Number(ur(h));switch(d){case xt.Opt:case xt.Vector:{let _=Number(ur(h));f.push([d,_]);break}case xt.Record:case xt.Variant:{let _=[],b=Number(Kt(h)),v;for(;b--;){let E=Number(Kt(h));if(E>=Math.pow(2,32))throw new Error("field id out of 32-bit range");if(typeof v=="number"&&v>=E)throw new Error("field id collision or not sorted");v=E;let T=Number(ur(h));_.push([E,T])}f.push([d,_]);break}case xt.Func:{let _=[],b=Number(Kt(h));for(;b--;)_.push(Number(ur(h)));let v=[],E=Number(Kt(h));for(;E--;)v.push(Number(ur(h)));let T=[],x=Number(Kt(h));for(;x--;)switch(Number(Kt(h))){case 1:{T.push("query");break}case 2:{T.push("oneway");break}case 3:{T.push("composite_query");break}default:throw new Error("unknown annotation")}f.push([d,[_,v,T]]);break}case xt.Service:{let _=Number(Kt(h)),b=[];for(;_--;){let v=Number(Kt(h)),E=new TextDecoder().decode(vn(h,v)),T=ur(h);b.push([E,T])}f.push([d,b]);break}default:throw new Error(`Illegal op_code: ${d}`)}}let g=[],y=Number(Kt(h));for(let m=0;m<y;m++)g.push(Number(ur(h)));return[f,g]}let[o,a]=s(t);if(a.length<n.length)throw new Error("Wrong number of return values");let c=o.map(h=>Xg());function l(h){if(h<-24)throw new Error("future value not supported");if(h<0)switch(h){case-1:return Ag;case-2:return Tg;case-3:return Ig;case-4:return Cg;case-5:return Ug;case-6:return Dg;case-7:return kg;case-8:return zg;case-9:return Og;case-10:return Lg;case-11:return Bg;case-12:return Fg;case-13:return Pg;case-14:return Ng;case-15:return Rg;case-16:return Mg;case-17:return Eg;case-24:return Vg;default:throw new Error(`Illegal op_code: ${h}`)}if(h>=o.length)throw new Error("type index out of range");return c[h]}function u(h){switch(h[0]){case xt.Vector:{let f=l(h[1]);return Hg(f)}case xt.Opt:{let f=l(h[1]);return Wg(f)}case xt.Record:{let f={};for(let[y,m]of h[1]){let d=`_${y}_`;f[d]=l(m)}let p=qg(f),g=p.tryAsTuple();return Array.isArray(g)?Gg(...g):p}case xt.Variant:{let f={};for(let[p,g]of h[1]){let y=`_${p}_`;f[y]=l(g)}return $g(f)}case xt.Func:{let[f,p,g]=h[1];return Yg(f.map(y=>l(y)),p.map(y=>l(y)),g)}case xt.Service:{let f={},p=h[1];for(let[g,y]of p){let m=l(y);if(m instanceof ii&&(m=m.getType()),!(m instanceof Cs))throw new Error("Illegal service definition: services can only contain functions");f[g]=m}return jg(f)}default:throw new Error(`Illegal op_code: ${h[0]}`)}}o.forEach((h,f)=>{if(h[0]===xt.Func){let p=u(h);c[f].fill(p)}}),o.forEach((h,f)=>{if(h[0]!==xt.Func){let p=u(h);c[f].fill(p)}}),Nf();try{Bw(e.byteLength);let h=a.map(p=>l(p)),f=n.map((p,g)=>p.decodeValue(t,h[g]));for(let p=n.length;p<h.length;p++)h[p].decodeValue(t,h[p]);if(t.byteLength>0)throw new Error("decode: Left-over bytes");return f}finally{Nf(),Fw()}}var Eg=new Ua,Mg=new Vi,Vw=new Yl,Tg=new jl,Ag=new As,Rg=new Zl,Cg=new Da,Ig=new ka,Pg=new za(32),Ng=new za(64),Og=new dr(8),Lg=new dr(16),Bg=new dr(32),Fg=new dr(64),Ug=new ki(8),Dg=new ki(16),kg=new ki(32),zg=new ki(64),Vg=new Jl;function Gg(...n){return new Kl(n)}function Hg(n){return new xo(n)}function Wg(n){return new zr(n)}function qg(n){return new Rs(n)}function $g(n){return new _o(n)}function Xg(){return new ii}function Yg(n,e,t=[]){return new Cs(n,e,t)}function jg(n){return new bo(n)}var Ql=class n{constructor(e=new Map){this.rels=e}copy(){let e=new Map;for(let[t,i]of this.rels.entries()){let r=new Map(i);e.set(t,r)}return new n(e)}known(e,t){return this.rels.get(e.name)?.get(t.name)}addNegative(e,t){this.addNames(e.name,t.name,!1)}add(e,t){this.addNames(e.name,t.name,!0)}display(){let e="";for(let[t,i]of this.rels)for(let[r,s]of i)e+=`${t} ${s?":<":"!<:"} ${r}
`;return e}addNames(e,t,i){let r=this.rels.get(e);if(r==null){let s=new Map;s.set(t,i),this.rels.set(e,s)}else r.set(t,i)}},Xl=new Ql;function Nf(){Xl=new Ql}function Gw(n,e){let t=new Set(n.annotations),i=new Set(e.annotations);if(t.size!==i.size)return!1;for(let r of t)if(!i.has(r))return!1;return!0}function Cf(n){return n instanceof zr||n instanceof As||n instanceof Vi}function Bf(n,e){let t=Xl.copy(),i=hr(t,n,e);return i?Xl.add(n,e):Xl.addNegative(n,e),i}function hr(n,e,t){if(e.name===t.name)return!0;let i=n.known(e,t);if(i!==void 0)return i;if(n.add(e,t),t instanceof Vi||e instanceof Ua||e instanceof ka&&t instanceof Da)return!0;if(e instanceof xo&&t instanceof xo)return hr(n,e._type,t._type);if(t instanceof zr)return!0;if(e instanceof Rs&&t instanceof Rs){let r=e.fieldsAsObject;for(let[s,o]of t._fields){let a=r[In(s)];if(a){if(!hr(n,a,o))return!1}else if(!Cf(o))return!1}return!0}if(e instanceof Cs&&t instanceof Cs){if(!Gw(e,t))return!1;for(let r=0;r<e.argTypes.length;r++){let s=e.argTypes[r];if(r<t.argTypes.length){if(!hr(n,t.argTypes[r],s))return!1}else if(!Cf(s))return!1}for(let r=0;r<t.retTypes.length;r++){let s=t.retTypes[r];if(r<e.retTypes.length){if(!hr(n,e.retTypes[r],s))return!1}else if(!Cf(s))return!1}return!0}if(e instanceof _o&&t instanceof _o){let r=t.alternativesAsObject;for(let[s,o]of e._fields){let a=r[In(s)];if(!a||!hr(n,o,a))return!1}return!0}if(e instanceof bo&&t instanceof bo){let r=e.fieldsAsObject();for(let[s,o]of t._fields){let a=r[s];if(!a||!hr(n,a,o))return!1}return!0}return e instanceof ii?hr(n,e.getType(),t):t instanceof ii?hr(n,e,t.getType()):!1}var Va="__expiry__",Ff=BigInt(1e3),Hw=BigInt(1e6),Ww=BigInt(60),Uf=Ww*Ff,qw=BigInt(1)*Uf;function $w(n){return n/Ff*Ff}function Xw(n){return n/Uf*Uf}var Is=class n{constructor(e){this.__expiry__=e,this._isExpiry=!0}static fromDeltaInMilliseconds(e,t=0){let i=BigInt(Date.now())+BigInt(t),r=i+BigInt(e),s=Xw(r),o;return s>=i+qw?o=s:o=$w(r),new n(o*Hw)}toBigInt(){return this.__expiry__}toHash(){return Pt(this.__expiry__)}toString(){return this.__expiry__.toString()}toJSON(){return{[Va]:this.toString()}}static fromJSON(e){let t=JSON.parse(e);if(t[Va])try{let i=BigInt(t[Va]);return new n(i)}catch(i){throw new Je(new Oa(`Not a valid BigInt: ${i}`))}throw new Je(new Oa(`The input does not contain the key ${Va}`))}static isExpiry(e){return e instanceof n||typeof e=="object"&&e!==null&&"_isExpiry"in e&&e._isExpiry===!0&&"__expiry__"in e&&typeof e.__expiry__=="bigint"}};function Yw(n){return typeof n=="object"&&n!==null&&"toCborValue"in n}function eu(n){try{let e=fg(n,t=>Ve.isPrincipal(t)?t.toUint8Array():Is.isExpiry(t)?t.toBigInt():Yw(t)?t.toCborValue():t);return e.buffer instanceof ArrayBuffer?e:e.slice()}catch(e){throw Je.fromCode(new Sl(e,n))}}function Gn(n){try{return hg(n)}catch(e){throw Je.fromCode(new wl(e,n))}}var jw=BigInt(1e6),Df=n=>Kt(new bi(n)),vo=n=>{let t=Df(n)/jw;return new Date(Number(t))};function ri(n,e,t=()=>{}){if(!Array.isArray(n))throw new TypeError(`"${e}" expected array, got type=${typeof n}`);for(let i=0;i<n.length;i++)t(n[i],`${e}[${i}]`);return n}var ht=(n,e,t)=>Bi(n,e,t),zf=va;function Vr(n,e="object"){if(n===null||typeof n!="object"||Array.isArray(n))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof n}`);return n}function Ps(n,e){if(typeof n!="function")throw new TypeError(`"${e}" is invalid: expected function, got ${typeof n}`);return n}var Ns=ft,Qt=(...n)=>mn(...n),Os=n=>$t(n),Gi=cl,fr=n=>J0(n),nu=BigInt(0),kf=BigInt(1),Zw=n=>n?`"${n}" `:"";function si(n,e=""){if(typeof n!="boolean")throw new TypeError(Zw(e)+"expected boolean, got type="+typeof n);return n}function Kw(n){if(typeof n=="bigint"){if(!Gr(n))throw new RangeError("positive bigint expected, got "+n)}else zf(n);return n}function Ot(n,e=""){if(typeof n!="number"){let t=e&&`"${e}" `;throw new TypeError(t+"expected number, got type="+typeof n)}if(!Number.isSafeInteger(n)){let t=e&&`"${e}" `;throw new RangeError(t+"expected safe integer, got "+n)}}function Zg(n){if(typeof n!="string")throw new TypeError("hex string expected, got "+typeof n);return n===""?nu:BigInt("0x"+n)}function Hr(n){return Zg(ft(n))}function Ls(n){return Zg(ft(Hi(Bi(n)).reverse()))}function Wr(n,e){if(va(e),e===0)throw new Error("zero output length is invalid");n=Kw(n);let t=e*2,i=n.toString(16);if(i.length>t)throw new RangeError("number is too large");return $t(i.padStart(t,"0"))}function Vf(n,e){return Wr(n,e).reverse()}function Hi(n){return Uint8Array.from(ht(n))}function iu(n){if(typeof n!="string")throw new TypeError("ascii string expected, got "+typeof n);return Uint8Array.from(n,(e,t)=>{let i=e.charCodeAt(0);if(e.length!==1||i>127)throw new RangeError(`string contains non-ASCII character "${n[t]}" with code ${i} at position ${t}`);return i})}function Gr(n){return typeof n=="bigint"&&nu<=n}function Gf(n,e,t){return Gr(n)&&Gr(e)&&Gr(t)&&e<=n&&n<t}function Bs(n,e,t,i){if(!Gf(e,t,i))throw new RangeError("expected valid "+n+": "+t+" <= n < "+i+", got "+e)}function oi(n){if(n<nu)throw new Error("expected non-negative bigint, got "+n);return n===nu?0:n.toString(2).length}function Kg(n,e){if(typeof n!="bigint")throw new TypeError('"n" expected bigint, got type='+typeof n);return Ot(e,"pos"),n>>BigInt(e)&kf}var ru=n=>(Ot(n,"n"),(kf<<BigInt(n))-kf);function Gt(n,e={},t={},i="object"){Vr(n,i),Vr(e,"fields"),Vr(t,"optFields");function r(o,a,c){let l=i==="object"?`param "${String(o)}"`:`"${i}.${String(o)}"`,u=n[o];if(!Object.hasOwn(n,o)&&(c?u!==void 0:a!=="function"))throw new TypeError(`${l} is invalid: expected own property`);if(c&&u===void 0)return;let h=typeof u;if(h!==a||u===null)throw new TypeError(`${l} is invalid: expected ${a}, got ${h}`)}let s=(o,a)=>Object.entries(o).forEach(([c,l])=>r(c,l,a));s(e,!1),s(t,!0)}var wi=()=>{throw new Error("not implemented")};var Ht=BigInt(0),wt=BigInt(1),Fs=BigInt(2),ey=BigInt(3),ou=BigInt(4),ty=BigInt(5),Jw=BigInt(7),ny=BigInt(8),Qw=BigInt(9),iy=BigInt(15),ry=BigInt(16),sy=BigInt("0x10000000000000000");function Dt(n,e){if(e<=Ht)throw new Error("mod: expected positive modulus, got "+e);let t=n%e;return t>=Ht?t:e+t}function eS(n,e,t){if(t<=wt)throw new Error("pow: expected modulus > 1, got "+t);if(typeof e!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof e);if(e<Ht)throw new Error("invalid exponent, negatives unsupported");if(e===Ht)return wt;if(e===wt)return n;let i=n%t;if(i<Ht&&(i+=t),e<sy){let a=wt;for(;e>Ht;)e&wt&&(a=a*i%t),i=i*i%t,e>>=wt;return a}let r=[];for(;e>Ht;)r.push(Number(e&iy)),e>>=ou;let s=new Array(16);s[0]=wt,s[1]=i;for(let a=2;a<16;a++)s[a]=s[a-1]*i%t;let o=s[r[r.length-1]];for(let a=r.length-2;a>=0;a--){o=o*o%t,o=o*o%t,o=o*o%t,o=o*o%t;let c=r[a];c!==0&&(o=o*s[c]%t)}return o}function Si(n,e,t){if(t<=wt)throw new Error("pow2: expected modulus > 1, got "+t);if(e<Ht)throw new Error("pow2: expected non-negative exponent, got "+e);let i=n;for(;e-- >Ht;)i*=i,i%=t;return i}function Jg(n,e){if(n===Ht)throw new Error("invert: expected non-zero number");if(e<=wt)throw new Error("invert: expected modulus > 1, got "+e);let t=Dt(n,e),i=e,r=Ht,s=wt;for(;t!==Ht;){let a=i/t,c=i-t*a,l=r-s*a;i=t,t=c,r=s,s=l}if(i!==wt)throw new Error("invert: does not exist");return Dt(r,e)}function Hf(n,e,t){let i=n;if(!i.eql(i.sqr(e),t))throw new Error("Cannot find square root")}function Wf(n,e){if((n&wt)===Ht)throw new Error(e+": expected odd modulus, got "+n)}function oy(n,e){let t=n,i=(t.ORDER+wt)/ou,r=t.pow(e,i);return Hf(t,r,e),r}function tS(n,e){let t=n,i=(t.ORDER-ty)/ny,r=t.mul(e,Fs),s=t.pow(r,i),o=t.mul(e,s),a=t.mul(t.mul(o,Fs),s),c=t.mul(o,t.sub(a,t.ONE));return Hf(t,c,e),c}function nS(n){let e=qr(n),t=ay(n),i=t(e,e.neg(e.ONE)),r=t(e,i),s=t(e,e.neg(i)),o=(n+Jw)/ry;return((a,c)=>{let l=a,u=l.pow(c,o),h=l.mul(u,i),f=l.mul(u,r),p=l.mul(u,s),g=l.eql(l.sqr(h),c),y=l.eql(l.sqr(f),c);u=l.cmov(u,h,g),h=l.cmov(p,f,y);let m=l.eql(l.sqr(h),c),d=l.cmov(u,h,m);return Hf(l,d,c),d})}function ay(n){if(n<ey)throw new Error("sqrt is not defined for small field");Wf(n,"tonelliShanks");let e=n-wt,t=0;for(;e%Fs===Ht;)e/=Fs,t++;let i=Fs,r=qr(n);for(;pr(r,i)===1;)if(i++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(t===1)return oy;let s=r.pow(i,e),o=(e+wt)/Fs;return function(c,l){let u=c;if(u.is0(l))return l;if(pr(u,l)!==1)throw new Error("Cannot find square root");let h=t,f=u.mul(u.ONE,s),p=u.pow(l,e),g=u.pow(l,o);for(;!u.eql(p,u.ONE);){if(u.is0(p))throw new Error("Cannot find square root: probably non-prime P");let y=1,m=u.sqr(p);for(;!u.eql(m,u.ONE);)if(y++,m=u.sqr(m),y===h)throw new Error("Cannot find square root");let d=wt<<BigInt(h-y-1),_=u.pow(f,d);h=y,f=u.sqr(_),p=u.mul(p,f),g=u.mul(g,_)}return g}}function iS(n){return Wf(n,"Fp.sqrt"),n%ou===ey?oy:n%ny===ty?tS:n%ry===Qw?nS(n):ay(n)}var cy=(n,e)=>(Dt(n,e)&wt)===wt,rS=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Hn(n){if(Vr(n,"field"),typeof n.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof n.ORDER);Ot(n.BYTES,"BYTES"),Ot(n.BITS,"BITS");for(let e of rS)Ps(n[e],"field."+e);if(n.BYTES<1||n.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(n.ORDER<=wt)throw new Error("invalid field: expected ORDER > 1, got "+n.ORDER);return n}function au(n,e,t){Hn(n);let i=n;if(typeof t!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof t);if(t<Ht)throw new Error("invalid exponent, negatives unsupported");if(t===Ht)return i.ONE;if(t===wt)return e;if(t<sy){let a=i.ONE,c=e;for(;t>Ht;)t&wt&&(a=i.mul(a,c)),c=i.sqr(c),t>>=wt;return a}let r=[];for(;t>Ht;)r.push(Number(t&iy)),t>>=ou;let s=new Array(16);s[0]=i.ONE,s[1]=e;for(let a=2;a<16;a++)s[a]=i.mul(s[a-1],e);let o=s[r[r.length-1]];for(let a=r.length-2;a>=0;a--){o=i.sqr(i.sqr(i.sqr(i.sqr(o))));let c=r[a];c!==0&&(o=i.mul(o,s[c]))}return o}function Ei(n,e,t=!1){Hn(n),ri(e,"nums"),si(t,"passZero");let i=n,r=new Array(e.length).fill(t?i.ZERO:void 0),s=e.reduce((a,c,l)=>i.is0(c)?a:(r[l]=a,i.mul(a,c)),i.ONE),o=i.inv(s);return e.reduceRight((a,c,l)=>i.is0(c)?a:(r[l]=i.mul(a,r[l]),i.mul(a,c)),o),r}function pr(n,e){Hn(n);let t=n;Wf(t.ORDER,"FpLegendre");let i=(t.ORDER-wt)/Fs,r=t.pow(e,i),s=t.eql(r,t.ONE),o=t.eql(r,t.ZERO),a=t.eql(r,t.neg(t.ONE));if(!s&&!o&&!a)throw new Error("invalid Legendre symbol result");return s?1:o?0:-1}function qf(n,e){return pr(n,e)!==-1}function sS(n,e){if(e!==void 0&&zf(e),n<=Ht)throw new Error("invalid n length: expected positive n, got "+n);if(e!==void 0&&e<1)throw new Error("invalid n length: expected positive bit length, got "+e);let t=oi(n);if(e!==void 0&&e<t)throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${t})`);let i=e!==void 0?e:t,r=Math.ceil(i/8);return{nBitLength:i,nByteLength:r}}var Qg=new WeakMap,su=class{ORDER;BITS;BYTES;isLE;ZERO=Ht;ONE=wt;_lengths;_mod;constructor(e,t={}){if(e<=wt)throw new Error("invalid field: expected ORDER > 1, got "+e);let i;this.isLE=!1,t!=null&&typeof t=="object"&&(typeof t.BITS=="number"&&(i=t.BITS),typeof t.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:t.sqrt,enumerable:!0}),typeof t.isLE=="boolean"&&(this.isLE=t.isLE),t.allowedLengths&&(this._lengths=Object.freeze(t.allowedLengths.slice())),typeof t.modFromBytes=="boolean"&&(this._mod=t.modFromBytes));let{nBitLength:r,nByteLength:s}=sS(e,i);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=e,this.BITS=r,this.BYTES=s,Object.freeze(this)}create(e){return Dt(e,this.ORDER)}isValid(e){if(typeof e!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof e);return Ht<=e&&e<this.ORDER}is0(e){return e===Ht}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&wt)===wt}neg(e){return Dt(-e,this.ORDER)}eql(e,t){return e===t}sqr(e){return Dt(e*e,this.ORDER)}add(e,t){return Dt(e+t,this.ORDER)}sub(e,t){return Dt(e-t,this.ORDER)}mul(e,t){return Dt(e*t,this.ORDER)}pow(e,t){return eS(e,t,this.ORDER)}div(e,t){return Dt(e*Jg(t,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,t){return e+t}subN(e,t){return e-t}mulN(e,t){return e*t}inv(e){return Jg(e,this.ORDER)}sqrt(e){let t=Qg.get(this);return t||Qg.set(this,t=iS(this.ORDER)),t(this,e)}toBytes(e){return this.isLE?Vf(e,this.BYTES):Wr(e,this.BYTES)}fromBytes(e,t=!1){ht(e);let{_lengths:i,BYTES:r,isLE:s,ORDER:o,_mod:a}=this;if(i){if(e.length<1||!i.includes(e.length)||e.length>r)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+e.length);let l=new Uint8Array(r);l.set(e,s?0:l.length-e.length),e=l}if(e.length!==r)throw new Error("Field.fromBytes: expected "+r+" bytes, got "+e.length);let c=s?Ls(e):Hr(e);if(a&&(c=Dt(c,o)),!t&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(e){return Ei(this,e,!0)}cmov(e,t,i){return si(i,"condition"),i?t:e}};function qr(n,e={}){return Object.freeze(su.prototype),new su(n,e)}function ly(n){if(typeof n!="bigint")throw new Error("field order must be bigint");if(n<=wt)throw new Error("field order must be greater than 1");let e=oi(n-wt);return Math.ceil(e/8)}function $f(n){let e=ly(n);return e+Math.ceil(e/2)}function uy(n,e,t=!1){ht(n);let i=n.length,r=ly(e),s=Math.max($f(e),16);if(i<s||i>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+i);let o=t?Ls(n):Hr(n),a=Dt(o,e-wt)+wt;return t?Vf(a,r):Wr(a,r)}var jf=BigInt(0),Ga=BigInt(1),aS=BigInt(4),Xf=16,hy=128,cS=5,dy=2**31;function $r(n){let e=n;if(typeof e!="function")throw new TypeError('"Point" expected constructor, got type='+typeof n);Ps(e.fromAffine,"Point.fromAffine"),Ps(e.fromBytes,"Point.fromBytes"),Ps(e.fromHex,"Point.fromHex"),Vr(e.BASE,"Point.BASE"),Vr(e.ZERO,"Point.ZERO"),Hn(e.Fp),Hn(e.Fn)}function cu(n,e){$r(n),my(e,n);let t=Ei(n.Fp,e.map(i=>i.Z));return e.map((i,r)=>n.fromAffine(i.toAffine(t[r])))}function lS(n,e,t=1){if(!Number.isSafeInteger(n)||n<t||n>e)throw new Error("invalid window size, expected ["+t+".."+e+"], got W="+n)}function uS(n,e){let t=n*(4*e+128);if(t>dy)throw new Error("invalid window size: table would need ~"+Math.ceil(t/2**20)+" MiB, max "+dy/2**20+" MiB")}function py(n,e){if(n!==void 0){Ps(n,"randomBytes");try{let t=n(e);if(!Gi(t)||t.length!==e)return}catch{return}return n}}function my(n,e){ri(n,"points"),n.forEach((t,i)=>{if(!(t instanceof e))throw new Error("invalid point at index "+i)})}function hS(n,e,t){if(!Array.isArray(n))throw new Error("array of scalars expected");n.forEach((i,r)=>{if(!(t===void 0?e.isValid(i):Gr(i)&&i<t))throw new Error("invalid scalar at index "+r)})}var gy=new WeakMap;function Yf(n){return gy.get(n)||1}function dS(n,e){let t=n.double(),i=[n];for(let r=1;r<e;r++)i.push(i[r-1].add(t));return i}function fS(n,e){let t=2**e,i=t/2,r=BigInt(t-1),s=[];for(;n>jf;){let o=0;n&Ga&&(o=Number(n&r),o>=i&&(o-=t),n-=BigInt(o)),s.push(o),n>>=Ga}return s}function pS(n,e,t){let i=2**e,r=i/2,s=BigInt(i-1),o=BigInt(e),a=[];for(let c=0;c<t;c++){let l=Number(n&s);n>>=o,l>r&&(l-=i,n+=Ga),a.push(l)}if(n!==jf)throw new Error("invalid wnaf");return a}function mS(n,e,t){let i=0;for(let s of t)i=Math.max(i,s.length);let r=n;for(let s=i-1;s>=0;s--){s!==i-1&&(r=r.double());for(let o=0;o<t.length;o++){let a=t[o][s];if(a){let c=e[o][Math.abs(a)-1>>1];r=r.add(a<0?c.negate():c)}}}return r}var wo=class{Point;BASE;ZERO;randomBytes;wnafPrecomputes=new WeakMap;baseCanBeBlinded;bits;constructor(e,t){$r(e),this.randomBytes=py(t,Xf),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,t,i){let r=Math.ceil(i/t)+1,s=2**(t-1),o=[],a=e;for(let c=0;c<r;c++){let l=a;for(let u=0;u<s;u++)o.push(l),l=l.add(a);a=o[o.length-1].double()}return{W:t,bits:i,windows:r,comp:o}}wnafCachedCT(e,t){let{W:i,windows:r,comp:s}=e,o=2**(i-1),a=pS(t,i,r),c=this.ZERO,l=this.BASE;for(let u=0;u<r;u++){let h=a[u],f=u*o,p=Math.abs(h)-1,g=s[f];for(let m=1;m<o;m++)g=m===p?s[f+m]:g;let y=g.negate();h===0?l=l.add(s[f]):c=c.add(h<0?y:g)}return{p:c,f:l}}getWnafPrecomputes(e,t,i,r){let s=this.wnafPrecomputes.get(t),o=s?.find(a=>a.W===e&&a.bits===i);return o||(o=this.buildWnafTable(t,e,i),typeof r=="function"&&(o={...o,comp:r(o.comp)}),s||(s=[],this.wnafPrecomputes.set(t,s)),s.push(o)),o}assertPoint(e){if(!(e instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof e)}validateMulInput(e,t){if(this.assertPoint(e),!Gf(t,Ga,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(e,t,i,r){let s=Yf(e);return s===1?this.fixedWindowCT(e,t,i):this.wnafCachedCT(this.getWnafPrecomputes(s,e,i,r),t)}mulCT(e,t,i){return this.validateMulInput(e,t),this.runCT(e,t,this.bits,i)}mulCTBlinded(e,t,i){if(this.validateMulInput(e,t),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");let r=this.Point.Fn.BITS+hy,s=this.randomBytes(Xf);if(!Gi(s)||s.length!==Xf)throw new Error("randomBytes returned invalid byte array");s[0]=s[0]&63|128;let o=t+Hr(s)*this.Point.Fn.ORDER;return this.runCT(e,o,r,i)}fixedWindowCT(e,t,i){let r=cS,s=1<<r,o=ru(r),a=new Array(s);a[0]=this.ZERO;for(let u=1;u<s;u++)a[u]=a[u-1].add(e);let c=Math.ceil(i/r),l=this.ZERO;for(let u=c-1;u>=0;u--){if(u!==c-1)for(let p=0;p<r;p++)l=l.double();let h=Number(t>>BigInt(u*r)&o),f=a[0];for(let p=1;p<s;p++)f=p===h?a[p]:f;l=l.add(f)}return{p:l,f:l}}shouldBlind(e,t){return this.randomBytes===void 0?!1:t===Ga?!0:e!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,t,i,r){return this.shouldBlind(e,i)?this.mulCTBlinded(e,t,r):this.mulCT(e,t,r)}mulUnsafe(e,t,i){if(this.assertPoint(e),!Gr(t))throw new Error("invalid scalar");let r=Yf(e);if(r===1||t>=this.Point.Fn.ORDER)return lu(this.Point,[e],[t],!0);let s=this.getWnafPrecomputes(r,e,this.bits,i);return this.wnafCachedCT(s,t).p}setWindowSize(e,t){this.assertPoint(e),lS(t,this.bits);let i=Math.ceil((this.bits+hy)/t)+1;uS(i*2**(t-1),this.Point.Fp.BYTES),gy.set(e,t),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return Yf(e)!==1}};function lu(n,e,t,i=!1){if($r(n),my(e,n),si(i,"allowOversized"),hS(t,n.Fn,i?n.Fn.ORDER**aS:void 0),e.length!==t.length)throw new Error("arrays of points and scalars must have equal length");let r=e.map(o=>dS(o,4)),s=t.map(o=>fS(o,4));return mS(n.ZERO,r,s)}function fy(n,e,t){if(e){if(e.ORDER!==n)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return Hn(e),e}else return qr(n,{isLE:t})}function uu(n,e,t={},i){if(n!=="weierstrass"&&n!=="edwards")throw new Error('expected curve type "weierstrass" or "edwards"');if(i===void 0&&(i=n==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${n} CURVE object`);Gt(t);for(let c of["p","n","h"]){let l=e[c];if(!(Gr(l)&&l!==jf))throw new Error(`CURVE.${c} must be positive bigint`)}let r=fy(e.p,t.Fp,i),s=fy(e.n,t.Fn,i),a=["Gx","Gy","a",n==="weierstrass"?"b":"d"];for(let c of a)if(!r.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:r,Fn:s}}function Zf(n,e){return function(i){let r=n(i);return{secretKey:r,publicKey:e(r)}}}var yy=BigInt(0),Wi=BigInt(1),Xr=BigInt(2),xy=BigInt(3),_y=BigInt(4),gS=Hr;function Us(n,e){if(Ot(n),Ot(e),e<0||e>4)throw new Error("invalid I2OSP length: "+e);if(n<0||n>2**(8*e)-1)throw new Error("invalid I2OSP input: "+n);let t=Array.from({length:e}).fill(0);for(let i=e-1;i>=0;i--)t[i]=n&255,n>>>=8;return new Uint8Array(t)}function yS(n,e){let t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[i]=n[i]^e[i];return t}function by(n){if(!Gi(n)&&typeof n!="string")throw new Error("DST must be Uint8Array or ascii string");let e=typeof n=="string"?iu(n):n;if(e.length===0)throw new Error("DST must be non-empty");return e}function xS(n,e,t,i){if(ht(n),Ot(t),typeof i!="function")throw new Error("expand_message_xmd: expected hash function");Ot(i.outputLen,"hash.outputLen"),Ot(i.blockLen,"hash.blockLen"),e=by(e),e.length>255&&(e=i(Qt(iu("H2C-OVERSIZE-DST-"),e)));let{outputLen:r,blockLen:s}=i,o=Math.ceil(t/r);if(t>65535||o>255)throw new Error("expand_message_xmd: invalid lenInBytes");let a=Qt(e,Us(e.length,1)),c=new Uint8Array(s),l=Us(t,2),u=new Array(o),h=i(Qt(c,n,l,Us(0,1),a));u[0]=i(Qt(h,Us(1,1),a));for(let p=1;p<o;p++){let g=[yS(h,u[p-1]),Us(p+1,1),a];u[p]=i(Qt(...g))}return Qt(...u).slice(0,t)}function _S(n,e,t,i,r){if(ht(n),Ot(t),Ot(i,"k"),i<0)throw new Error("expand_message_xof: invalid k");if(typeof r!="function")throw new Error("expand_message_xof: expected XOF function");if(typeof r.create!="function")throw new Error("expand_message_xof: expected XOF create");if(e=by(e),t<0||t>65535)throw new Error("expand_message_xof: invalid lenInBytes");if(e.length>255){let s=Math.ceil(2*i/8);e=r.create({dkLen:s}).update(iu("H2C-OVERSIZE-DST-")).update(e).digest()}if(e.length>255)throw new Error("expand_message_xof: invalid DST");return r.create({dkLen:t}).update(n).update(Us(t,2)).update(e).update(Us(e.length,1)).digest()}function Kf(n,e,t){Gt(t,{p:"bigint",m:"number",k:"number",hash:"function"});let{p:i,k:r,m:s,hash:o,expand:a,DST:c}=t;if(Ot(o.outputLen,"valid hash"),ht(n),Ot(e),Ot(s,"m"),Ot(r,"k"),i<=BigInt(1))throw new Error("hash_to_field: expected valid field characteristic");if(e<1)throw new Error("hash_to_field: expected count >= 1");if(s<1)throw new Error("hash_to_field: expected m >= 1");if(r<0)throw new Error("hash_to_field: invalid k");let l=i.toString(2).length,u=Math.ceil((l+r)/8),h=e*s*u,f;if(a==="xmd")f=xS(n,c,h,o);else if(a==="xof")f=_S(n,c,h,r,o);else if(a==="_internal_pass")f=n;else throw new Error('expand must be "xmd" or "xof"');let p=new Array(e);for(let g=0;g<e;g++){let y=new Array(s);for(let m=0;m<s;m++){let d=u*(m+g*s),_=f.subarray(d,d+u);y[m]=Dt(gS(_),i)}p[g]=y}return p}function Jf(n,e){Hn(n),ri(e,"map");let t=e.map((i,r)=>{if(ri(i,"map["+r+"]"),i.length<1)throw new Error("isogenyMap: expected non-empty coefficients");return Array.from(i).reverse()});return(i,r)=>{let[s,o,a,c]=t.map(f=>f.reduce((p,g)=>n.add(n.mul(p,i),g))),l=n.is0(o)||n.is0(c),[u,h]=Ei(n,[o,c],!0);return i=n.mul(s,u),r=n.mul(r,n.mul(a,h)),l?{x:n.ZERO,y:n.ZERO}:{x:i,y:r}}}var bS="HashToScalar-";function Qf(n,e,t){if(typeof e!="function")throw new Error("mapToCurve() must be defined");Gt(t);let i=c=>Object.freeze({...c,DST:Gi(c.DST)?Hi(c.DST):c.DST,...c.encodeDST===void 0?{}:{encodeDST:Gi(c.encodeDST)?Hi(c.encodeDST):c.encodeDST}}),r=i(t),s=c=>c&&c.DST!==void 0?{DST:c.DST}:void 0;function o(c){return n.fromAffine(e(c))}function a(c){let l=c.clearCofactor();return l.equals(n.ZERO)?n.ZERO:(l.assertValidity(),l)}return Object.freeze({get defaults(){return i(r)},Point:n,hashToCurve(c,l){let u=Object.assign({},r,s(l)),h=Kf(c,2,u),f=o(h[0]),p=o(h[1]);return a(f.add(p))},encodeToCurve(c,l){let u=r.encodeDST===void 0?{}:{DST:r.encodeDST},h=Object.assign({},r,u,s(l)),f=Kf(c,1,h),p=o(f[0]);return a(p)},mapToCurve(c){if(r.m===1){if(typeof c!="bigint")throw new Error("expected bigint (m=1)");return a(o([c]))}if(!Array.isArray(c))throw new Error("expected array of bigints");if(c.length!==r.m)throw new Error(`expected array of ${r.m} bigints`);for(let l of c)if(typeof l!="bigint")throw new Error("expected array of bigints");return a(o(c))},hashToScalar(c,l){let u=n.Fn.ORDER,h=Object.assign({},r,{DST:bS},s(l),{p:u,m:1});return Kf(c,1,h)[0][0]}})}function vS(n,e){let t=Hn(n),i=t.ORDER,r=yy;for(let y=i-Wi;y%Xr===yy;y/=Xr)r+=Wi;let s=r,o=Xr<<s-Wi-Wi,a=o*Xr,c=(i-Wi)/a,l=(c-Wi)/Xr,u=a-Wi,h=o,f=t.pow(e,c),p=t.pow(e,(c+Wi)/Xr),g=(y,m)=>{let d=f,_=t.pow(m,u),b=t.sqr(_);b=t.mul(b,m);let v=t.mul(y,b);v=t.pow(v,l),v=t.mul(v,_),_=t.mul(v,m),b=t.mul(v,y);let E=t.mul(b,_);v=t.pow(E,h);let T=t.eql(v,t.ONE);_=t.mul(b,p),v=t.mul(E,d),b=t.cmov(_,b,T),E=t.cmov(v,E,T);for(let x=s;x>Wi;x--){let w=x-Xr;w=Xr<<w-Wi;let I=t.pow(E,w),R=t.eql(I,t.ONE);_=t.mul(b,d),d=t.mul(d,d),I=t.mul(E,d),b=t.cmov(_,b,R),E=t.cmov(I,E,R)}return{isValid:!t.is0(m)&&(T||t.is0(y)),value:b}};if(t.ORDER%_y===xy){let y=(t.ORDER-xy)/_y,m=t.sqrt(t.neg(e));g=(d,_)=>{let b=t.sqr(_),v=t.mul(d,_);b=t.mul(b,v);let E=t.pow(b,y);E=t.mul(E,v);let T=t.mul(E,m),x=t.mul(t.sqr(E),_),w=t.eql(x,d),I=t.cmov(T,E,w);return{isValid:!t.is0(_)&&w,value:I}}}return g}function ep(n,e){let t=Hn(n);Gt(e,{},{},"opts");let{A:i,B:r,Z:s}=e;if(!t.isValidNot0(i)||!t.isValidNot0(r)||!t.isValid(s))throw new Error("mapToCurveSimpleSWU: invalid opts");if(t.eql(s,t.neg(t.ONE))||qf(t,s))throw new Error("mapToCurveSimpleSWU: invalid opts");let o=t.mul(r,t.inv(t.mul(s,i))),a=t.add(t.add(t.mul(t.sqr(o),o),t.mul(i,o)),r);if(!qf(t,a))throw new Error("mapToCurveSimpleSWU: invalid opts");let c=vS(t,s);if(!t.isOdd)throw new Error("Field does not have .isOdd()");return l=>{let u,h,f,p,g,y,m,d;u=t.sqr(l),u=t.mul(u,s),h=t.sqr(u),h=t.add(h,u),f=t.add(h,t.ONE),f=t.mul(f,r),p=t.cmov(s,t.neg(h),!t.eql(h,t.ZERO)),p=t.mul(p,i),h=t.sqr(f),y=t.sqr(p),g=t.mul(y,i),h=t.add(h,g),h=t.mul(h,f),y=t.mul(y,p),g=t.mul(y,r),h=t.add(h,g),m=t.mul(u,f);let{isValid:_,value:b}=c(h,y);d=t.mul(u,l),d=t.mul(d,b),m=t.cmov(m,f,_),d=t.cmov(d,b,_);let v=t.isOdd(l)===t.isOdd(d);d=t.cmov(t.neg(d),d,v);let E=Ei(t,[p],!0)[0];return m=t.mul(m,E),{x:m,y:d}}}var vy=(n,e)=>(n+(n>=0?e:-e)/SS)/e;function wS(n,e,t){Bs("scalar",n,So,t);let[[i,r],[s,o]]=e,a=vy(o*n,t),c=vy(-r*n,t),l=n-a*i-c*s,u=-a*r-c*o,h=l<So,f=u<So;h&&(l=-l),f&&(u=-u);let p=ru(Math.ceil(oi(t)/2))+Ha;if(l<So||l>=p||u<So||u>=p)throw new Error("splitScalar (endomorphism): failed for k");return{k1neg:h,k1:l,k2neg:f,k2:u}}var So=BigInt(0),Ha=BigInt(1),SS=BigInt(2),tp=BigInt(3),ES=BigInt(4);function np(n,e={}){let t=uu("weierstrass",n,e),i=t.Fp,r=t.Fn,s=t.CURVE,{h:o,n:a}=s;Gt(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",randomBytes:"function"});let{endo:c,allowInfinityPoint:l,clearCofactor:u,isTorsionFree:h,fromBytes:f,toBytes:p}=e,g=e.randomBytes===void 0?fr:e.randomBytes;if(c&&(!i.is0(s.a)||typeof c.beta!="bigint"||!Array.isArray(c.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');let y=c?{beta:c.beta,basises:c.basises.map(q=>[...q])}:void 0,m=TS(i,r);function d(){if(!i.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function _(q,B,J){if(B.is0()){if(!l)throw new Error("bad point: ZERO");return Uint8Array.of(0)}let{x:se,y:V}=B.toAffine(),D=i.toBytes(se);if(si(J,"isCompressed"),J){d();let X=!i.isOdd(V);return Qt(MS(X),D)}else return Qt(Uint8Array.of(4),D,i.toBytes(V))}function b(q){ht(q,void 0,"Point");let{publicKey:B,publicKeyUncompressed:J}=m,se=q.length,V=q[0],D=q.subarray(1);if(l&&se===1&&V===0)return{x:i.ZERO,y:i.ZERO};if(se===B&&(V===2||V===3)){let X=i.fromBytes(D);if(!i.isValid(X))throw new Error("bad point: is not on curve, wrong x");let te=w(X),ie;try{ie=i.sqrt(te)}catch(Ee){let Le=Ee instanceof Error?": "+Ee.message:"";throw new Error("bad point: is not on curve, sqrt error"+Le)}d();let ce=i.isOdd(ie);return(V&1)===1!==ce&&(ie=i.neg(ie)),{x:X,y:ie}}else if(se===J&&V===4){let X=i.BYTES,te=i.fromBytes(D.subarray(0,X)),ie=i.fromBytes(D.subarray(X,X*2));if(!I(te,ie))throw new Error("bad point: is not on curve");return{x:te,y:ie}}else throw new Error(`bad point: got length ${se}, expected compressed=${B} or uncompressed=${J}`)}let v=p===void 0?_:p,E=f===void 0?b:f,T=i.mul(s.b,tp),x=i.is0(s.a)?q=>i.ZERO:q=>i.mul(s.a,q);function w(q){let B=i.sqr(q),J=i.mul(B,q);return i.add(i.add(J,i.mul(q,s.a)),s.b)}function I(q,B){let J=i.sqr(B),se=w(q);return i.eql(J,se)}if(!I(s.Gx,s.Gy))throw new Error("bad curve params: generator point");let R=i.mul(i.pow(s.a,tp),ES),O=i.mul(i.sqr(s.b),BigInt(27));if(i.is0(i.add(R,O)))throw new Error("bad curve params: a or b");function P(q,B,J=!1){if(!i.isValid(B)||J&&i.is0(B))throw new Error(`bad point coordinate ${q}`);return typeof B=="object"&&B!==null?i.create(B):B}function U(q){if(!(q instanceof N))throw new Error("Weierstrass Point expected")}function A(q){if(!y||!y.basises)throw new Error("no endo");return wS(q,y.basises,r.ORDER)}function z(q,B,J,se){if(!r.isValid(se))throw new RangeError("invalid scalar: out of range");if(y){let{k1neg:V,k1:D,k2neg:X,k2:te}=A(se),ie=new N(i.mul(J.X,y.beta),J.Y,J.Z);q.push(V?J.negate():J,X?ie.negate():ie),B.push(D,te)}else q.push(J),B.push(se)}let $=new WeakSet;class N{static BASE=new N(s.Gx,s.Gy,i.ONE);static ZERO=new N(i.ZERO,i.ONE,i.ZERO);static Fp=i;static Fn=r;X;Y;Z;constructor(B,J,se){this.X=P("x",B),this.Y=P("y",J,!0),this.Z=P("z",se),Object.freeze(this)}static CURVE(){return s}static fromAffine(B){let{x:J,y:se}=B||{};if(!B||!i.isValid(J)||!i.isValid(se))throw new Error("invalid affine point");if(B instanceof N)throw new Error("projective point not allowed");return i.is0(J)&&i.is0(se)?N.ZERO:new N(J,se,i.ONE)}static fromBytes(B){let J=N.fromAffine(E(ht(B,void 0,"point")));return J.assertValidity(),J}static fromHex(B){return N.fromBytes(Os(B))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(B=6,J=!0){return H.setWindowSize(this,B),J||this.multiply(tp),this}assertValidity(){let B=this;if(B.is0()){if(l&&i.is0(B.X)&&i.eql(B.Y,i.ONE)&&i.is0(B.Z))return;throw new Error("bad point: ZERO")}if($.has(B))return;let{x:J,y:se}=B.toAffine();if(!i.isValid(J)||!i.isValid(se))throw new Error("bad point: x or y not field elements");if(!I(J,se))throw new Error("bad point: equation left != right");if(!B.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");$.add(B)}hasEvenY(){let{y:B}=this.toAffine();if(!i.isOdd)throw new Error("Field doesn't support isOdd");return!i.isOdd(B)}equals(B){U(B);let{X:J,Y:se,Z:V}=this,{X:D,Y:X,Z:te}=B,ie=i.eql(i.mul(J,te),i.mul(D,V)),ce=i.eql(i.mul(se,te),i.mul(X,V));return ie&&ce}negate(){return new N(this.X,i.neg(this.Y),this.Z)}double(){let{X:B,Y:J,Z:se}=this,V=i.ZERO,D=i.ZERO,X=i.ZERO,te=i.mul(B,B),ie=i.mul(J,J),ce=i.mul(se,se),Ae=i.mul(B,J);return Ae=i.add(Ae,Ae),X=i.mul(B,se),X=i.add(X,X),V=x(X),D=i.mul(T,ce),D=i.add(V,D),V=i.sub(ie,D),D=i.add(ie,D),D=i.mul(V,D),V=i.mul(Ae,V),X=i.mul(T,X),ce=x(ce),Ae=i.sub(te,ce),Ae=x(Ae),Ae=i.add(Ae,X),X=i.add(te,te),te=i.add(X,te),te=i.add(te,ce),te=i.mul(te,Ae),D=i.add(D,te),ce=i.mul(J,se),ce=i.add(ce,ce),te=i.mul(ce,Ae),V=i.sub(V,te),X=i.mul(ce,ie),X=i.add(X,X),X=i.add(X,X),new N(V,D,X)}add(B){U(B);let{X:J,Y:se,Z:V}=this,{X:D,Y:X,Z:te}=B,ie=i.ZERO,ce=i.ZERO,Ae=i.ZERO,Ee=i.mul(J,D),Le=i.mul(se,X),Y=i.mul(V,te),L=i.add(J,se),Z=i.add(D,X);L=i.mul(L,Z),Z=i.add(Ee,Le),L=i.sub(L,Z),Z=i.add(J,V);let re=i.add(D,te);return Z=i.mul(Z,re),re=i.add(Ee,Y),Z=i.sub(Z,re),re=i.add(se,V),ie=i.add(X,te),re=i.mul(re,ie),ie=i.add(Le,Y),re=i.sub(re,ie),Ae=x(Z),ie=i.mul(T,Y),Ae=i.add(ie,Ae),ie=i.sub(Le,Ae),Ae=i.add(Le,Ae),ce=i.mul(ie,Ae),Le=i.add(Ee,Ee),Le=i.add(Le,Ee),Y=x(Y),Z=i.mul(T,Z),Le=i.add(Le,Y),Y=i.sub(Ee,Y),Y=x(Y),Z=i.add(Z,Y),Ee=i.mul(Le,Z),ce=i.add(ce,Ee),Ee=i.mul(re,Z),ie=i.mul(L,ie),ie=i.sub(ie,Ee),Ee=i.mul(L,Le),Ae=i.mul(re,Ae),Ae=i.add(Ae,Ee),new N(ie,ce,Ae)}subtract(B){return U(B),this.add(B.negate())}is0(){return this.equals(N.ZERO)}multiply(B){if(!r.isValidNot0(B))throw new RangeError("invalid scalar: out of range");let{p:J,f:se}=H.mulSecret(this,B,o,j);return j([J,se])[0]}multiplyUnsafe(B){let J=this,se=B;if(!r.isValid(se))throw new RangeError("invalid scalar: out of range");if(se===So||J.is0())return N.ZERO;if(se===Ha)return J;if(H.hasWindowSize(this))return H.mulUnsafe(J,se,j);let V=[],D=[];return z(V,D,J,se),lu(N,V,D)}mulAddUnsafe(B,J,se){U(J);let V=[],D=[];return z(V,D,this,B),z(V,D,J,se),lu(N,V,D)}toAffine(B){let J=this,se=B;if(se!=null&&!i.isValid(se))throw new RangeError('"invertedZ" expected valid field element');let{X:V,Y:D,Z:X}=J;if(i.eql(X,i.ONE))return{x:V,y:D};let te=J.is0();se==null&&(se=te?i.ONE:i.inv(X));let ie=i.mul(V,se),ce=i.mul(D,se),Ae=i.mul(X,se);if(te)return{x:i.ZERO,y:i.ZERO};if(!i.eql(Ae,i.ONE))throw new Error("invZ was invalid");return{x:ie,y:ce}}isTorsionFree(){return o===Ha?!0:h?h(N,this):H.mulUnsafe(this,a).is0()}clearCofactor(){return o===Ha?this:u?u(N,this):this.multiplyUnsafe(o)}isSmallOrder(){return o===Ha?this.is0():this.clearCofactor().is0()}toBytes(B=!0){return si(B,"isCompressed"),this.assertValidity(),v(N,this,B)}toHex(B=!0){return Ns(this.toBytes(B))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}let j=q=>cu(N,q),H=new wo(N,g);return H.bits>=6&&N.BASE.precompute(6),Object.freeze(N.prototype),Object.freeze(N),N}function MS(n){return Uint8Array.of(n?2:3)}function TS(n,e){return{secretKey:e.BYTES,publicKey:1+n.BYTES,publicKeyUncompressed:1+2*n.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}var AS=BigInt(0),hu=BigInt(1),wy=BigInt(2),Eo=BigInt(3);function RS(n){let e=[];for(;n>hu;n>>=hu)(n&hu)===AS?e.unshift(0):(n&Eo)===Eo?(e.unshift(-1),n+=hu):e.unshift(1);return e}function ip(n){if(!Array.isArray(n)||n.length===0)throw new Error("expected non-empty array")}function CS(n,e,t,i){if(Gt(n,{Fp:"object",Fr:"object",Fp2:"object",Fp12:"object"},{Fp6:"object"},"fields"),typeof e!="function")throw new TypeError('"G1_Point" expected point constructor, got type='+typeof e);if(typeof t!="function")throw new TypeError('"G2_Point" expected point constructor, got type='+typeof t);Gt(i,{ateLoopSize:"bigint",xNegative:"boolean",twistType:"string"},{randomBytes:"function",postPrecompute:"function"},"params");let{Fp:r,Fr:s,Fp2:o,Fp12:a}=n,{twistType:c,ateLoopSize:l,xNegative:u,postPrecompute:h}=i,f=(N,j)=>({c0:N,c1:j}),p=({c0:N,c1:j})=>Object.freeze({c0:N,c1:j}),g=(N,j)=>f(r.add(N.c0,j.c0),r.add(N.c1,j.c1)),y=(N,j)=>f(r.sub(N.c0,j.c0),r.sub(N.c1,j.c1)),m=(N,j)=>{let H=r.mul(N.c0,j.c0),q=r.mul(N.c1,j.c1);return f(r.sub(H,q),r.sub(r.mul(r.add(N.c0,N.c1),r.add(j.c0,j.c1)),r.add(H,q)))},d=(N,j)=>f(r.mul(N.c0,j),r.mul(N.c1,j)),_=N=>o.mulByNonresidue(N),b=({c0:N,c1:j},H,q,B,J,se)=>{let V=d(q,J),D=d(B,se),{c0:X,c1:te,c2:ie}=N,{c0:ce,c1:Ae,c2:Ee}=j,Le=m(X,H),Y=m(te,V),L=g(_(y(m(g(te,ie),V),Y)),Le),Z=y(y(m(g(H,V),g(X,te)),Le),Y),re=g(y(m(g(X,ie),H),Le),Y),me=_(m(Ee,D)),de=m(ce,D),We=m(Ae,D),Ie=g(X,ce),ze=g(te,Ae),Ye=g(ie,Ee),et=g(V,D),k=m(Ie,H),yt=m(ze,et),tt=g(_(y(m(g(ze,Ye),et),yt)),k),bt=y(y(m(g(H,et),g(Ie,ze)),k),yt),xe=g(y(m(g(Ie,Ye),H),k),yt);return Object.freeze({c0:Object.freeze({c0:p(g(_(We),L)),c1:p(g(me,Z)),c2:p(g(de,re))}),c1:Object.freeze({c0:p(y(y(tt,L),me)),c1:p(y(y(bt,Z),de)),c2:p(y(y(xe,re),We))})})},v=({c0:N,c1:j},H,q,B,J,se)=>{let V=d(H,se),D=d(q,J),{c0:X,c1:te,c2:ie}=N,{c0:ce,c1:Ae,c2:Ee}=j,Le=m(X,V),Y=m(te,V),L=m(ie,V),Z=m(ce,D),re=m(Ae,B),me=g(_(y(m(g(Ae,Ee),B),re)),Z),de=y(y(m(g(D,B),g(ce,Ae)),Z),re),We=g(y(m(g(ce,Ee),D),Z),re),Ie=g(X,ce),ze=g(te,Ae),Ye=g(ie,Ee),et=g(V,D),k=m(Ie,et),yt=m(ze,B),tt=g(_(y(m(g(ze,Ye),B),yt)),k),bt=y(y(m(g(et,B),g(Ie,ze)),k),yt),xe=g(y(m(g(Ie,Ye),et),k),yt);return Object.freeze({c0:Object.freeze({c0:p(g(_(We),Le)),c1:p(g(me,Y)),c2:p(g(de,L))}),c1:Object.freeze({c0:p(y(y(tt,Le),me)),c1:p(y(y(bt,Y),de)),c2:p(y(y(xe,L),We))})})},E;if(c==="multiplicative")E=(N,j,H,q,B,J)=>b(q,N,j,H,B,J);else if(c==="divisive")E=(N,j,H,q,B,J)=>v(q,H,j,N,B,J);else throw new Error("bls: unknown twist type");let T=o.div(o.ONE,o.mul(o.ONE,wy));function x(N,j,H,q){let B=o.sqr(H),J=o.sqr(q),se=o.mulByB(o.mul(J,Eo)),V=o.mul(se,Eo),D=o.sub(o.sub(o.sqr(o.add(H,q)),J),B),X=o.sub(se,B),te=o.mul(o.sqr(j),Eo),ie=o.neg(D);return N.push([X,te,ie]),j=o.mul(o.mul(o.mul(o.sub(B,V),j),H),T),H=o.sub(o.sqr(o.mul(o.add(B,V),T)),o.mul(o.sqr(se),Eo)),q=o.mul(B,D),{Rx:j,Ry:H,Rz:q}}function w(N,j,H,q,B,J){let se=o.sub(H,o.mul(J,q)),V=o.sub(j,o.mul(B,q)),D=o.sub(o.mul(se,B),o.mul(V,J)),X=o.neg(se),te=V;N.push([D,X,te]);let ie=o.sqr(V),ce=o.mul(ie,V),Ae=o.mul(ie,j),Ee=o.add(o.sub(ce,o.mul(Ae,wy)),o.mul(o.sqr(se),q));return j=o.mul(V,Ee),H=o.sub(o.mul(o.sub(Ae,Ee),se),o.mul(ce,H)),q=o.mul(q,ce),{Rx:j,Ry:H,Rz:q}}let I=RS(l),R=N=>{if(!(N instanceof t))throw new TypeError('"point" expected G2 point, got type='+typeof N);let j=N,{x:H,y:q}=j.toAffine(),B=H,J=q,se=o.neg(q),V=B,D=J,X=o.ONE,te=[];for(let ie of I){let ce=[];({Rx:V,Ry:D,Rz:X}=x(ce,V,D,X)),ie&&({Rx:V,Ry:D,Rz:X}=w(ce,V,D,X,B,ie===-1?se:J)),te.push(ce)}if(h){let ie=te[te.length-1];h(V,D,X,B,J,w.bind(null,ie))}return te};function O(N,j=!1){ri(N,"pairs",(q,B)=>{if(ri(q,B),q.length!==3)throw new TypeError(`"${B}" expected precompute tuple`);ri(q[0],B+"[0]")});let H=a.ONE;if(N.length){let q=N[0][0].length;for(let B=0;B<q;B++){B!==0&&(H=a.sqr(H));for(let[J,se,V]of N)for(let[D,X,te]of J[B])H=E(D,X,te,H,se,V)}}return u&&(H=a.conjugate(H)),j?a.finalExponentiate(H):H}function P(N,j=!0){ri(N,"pairs");let H=[];for(let q=0;q<N.length;q++){let B=N[q];Gt(B,{g1:"object",g2:"object"},{},"pairs["+q+"]");let{g1:J,g2:se}=B;if(!(J instanceof e))throw new TypeError('"pairs['+q+'].g1" expected G1 point, got type='+typeof J);if(!(se instanceof t))throw new TypeError('"pairs['+q+'].g2" expected G2 point, got type='+typeof se);if(J.is0()||se.is0())throw new Error("pairing is not available for ZERO point");J.assertValidity(),se.assertValidity();let V=J.toAffine();H.push([R(se),V.x,V.y])}return O(H,j)}function U(N,j,H=!0){if(!(N instanceof e))throw new TypeError('"Q" expected G1 point, got type='+typeof N);if(!(j instanceof t))throw new TypeError('"P" expected G2 point, got type='+typeof j);return P([{g1:N,g2:j}],H)}let A={seed:$f(s.ORDER)},z=i.randomBytes===void 0?fr:i.randomBytes,$=N=>(N=N===void 0?z(A.seed):N,ht(N,A.seed,"seed"),uy(N,s.ORDER));return Object.freeze(A),{lengths:A,Fr:s,Fp12:a,millerLoopBatch:O,pairing:U,pairingBatch:P,calcPairingPrecomputes:R,randomSecretKey:$}}function Sy(n,e,t,i,r,s){let{Fr:o,Fp12:a,pairingBatch:c,randomSecretKey:l,lengths:u}=n;s||(s={fromBytes:wi,fromHex:wi,toBytes:wi,toHex:wi});let h=Object.freeze({...s});function f(m){return m instanceof e?m:e.fromBytes(m)}function p(m){return m instanceof t?m:h.fromBytes(m)}function g(m){if(!(m instanceof t))throw new Error(`expected valid message hashed to ${i?"G1":"G2"} curve`);return m}let y=i?(m,d)=>({g1:d,g2:m}):(m,d)=>({g1:m,g2:d});return Object.freeze({lengths:Object.freeze({...u,secretKey:o.BYTES}),keygen(m){let d=l(m),_=this.getPublicKey(d);return{secretKey:d,publicKey:_}},getPublicKey(m){let d;try{d=e.Fn.fromBytes(m)}catch(_){throw new Error("invalid private key: "+typeof m,{cause:_})}return e.BASE.multiply(d)},sign(m,d,_){if(_!=null)throw new Error("sign() expects 2 arguments");let b=e.Fn.fromBytes(d);return g(m).assertValidity(),m.multiply(b)},verify(m,d,_,b){if(b!=null)throw new Error("verify() expects 3 arguments");m=p(m),_=f(_);let v=_.negate(),E=e.BASE,T=g(d),x=m;try{let w=c([y(v,T),y(E,x)]);return a.eql(w,a.ONE)}catch{return!1}},verifyBatch(m,d){ip(d);let _=p(m),b=d.map(w=>g(w.message)),v=d.map(w=>f(w.publicKey)),E=new Map;for(let w=0;w<v.length;w++){let I=v[w],R=b[w],O=E.get(R);O===void 0&&(O=[],E.set(R,O)),O.push(I)}let T=[],x=e.BASE;try{for(let[w,I]of E){let R=I.reduce((O,P)=>O.add(P));T.push(y(R,w))}return T.push(y(x.negate(),_)),a.eql(c(T),a.ONE)}catch{return!1}},aggregatePublicKeys(m){ip(m),m=m.map(_=>f(_));let d=m.reduce((_,b)=>_.add(b),e.ZERO);return d.assertValidity(),d},aggregateSignatures(m){ip(m),m=m.map(_=>p(_));let d=m.reduce((_,b)=>_.add(b),t.ZERO);return d.assertValidity(),d},hash(m,d){return ht(m),r(m,d===void 0?void 0:{DST:d})},Signature:Object.freeze({...h})})}function IS(n,e,t,i){let{Fp:r,Fr:s,Fp2:o,Fp6:a,Fp12:c}=n,l={Point:e},u={Point:t},h=CS(n,e,t,i),{millerLoopBatch:f,pairing:p,pairingBatch:g,calcPairingPrecomputes:y,randomSecretKey:m,lengths:d}=h;return l.Point.BASE.precompute(4),Object.freeze(l),Object.freeze(u),Object.freeze({lengths:Object.freeze(d),millerLoopBatch:f,pairing:p,pairingBatch:g,G1:l,G2:u,fields:Object.freeze({Fr:s,Fp:r,Fp2:o,Fp6:a,Fp12:c}),params:Object.freeze({ateLoopSize:i.ateLoopSize,xNegative:i.xNegative,twistType:i.twistType,postPrecompute:i.postPrecompute}),utils:Object.freeze({randomSecretKey:m,calcPairingPrecomputes:y})})}function PS(n,e,t,i,r){let s=IS(n,e,t,i);Gt(r,{hasherOpts:"object",hasherOptsG1:"object",hasherOptsG2:"object"},{mapToG1:"function",mapToG2:"function"},"hasherParams");let o=Qf(e,r.mapToG1===void 0?wi:r.mapToG1,{...r.hasherOpts,...r.hasherOptsG1}),a=Qf(t,r.mapToG2===void 0?wi:r.mapToG2,{...r.hasherOpts,...r.hasherOptsG2});return Object.freeze({...s,G1:o,G2:a})}function Ey(n,e,t,i,r,s){let o=PS(n,e,t,i,r),a={...o,Fr:o.fields.Fr,Fp12:o.fields.Fp12,calcPairingPrecomputes:o.utils.calcPairingPrecomputes,randomSecretKey:o.utils.randomSecretKey},c=Sy(a,e,t,!1,o.G2.hashToCurve,s?.LongSignature),l=Sy(a,t,e,!0,o.G1.hashToCurve,s?.ShortSignature);return Object.freeze({...o,longSignatures:c,shortSignatures:l})}var rp=BigInt(0),Yr=BigInt(1),Pn=BigInt(2),My=BigInt(3),NS=BigInt(6),OS=BigInt(12),Ds=n=>!!n&&typeof n=="object";function Ay(n,e,t,i,r=1,s){Ot(r,"num"),Ot(i,"degree");let o=s===void 0?i:s;Ot(o,"divisor");let a=n;if(typeof t!="bigint"||t<=Yr)throw new Error("calcFrobeniusCoefficients: expected valid modulus, got "+t);if(i<=0)throw new Error("calcFrobeniusCoefficients: expected positive degree, got "+i);if(r<=0)throw new Error("calcFrobeniusCoefficients: expected positive row count, got "+r);if(o<=0)throw new Error("calcFrobeniusCoefficients: expected positive divisor, got "+o);let c=BigInt(o),l=t**BigInt(i),u=[];for(let h=0;h<r;h++){let f=BigInt(h+1),p=[];for(let g=0,y=Yr;g<i;g++){let m=f*y-f;if(m%c)throw new Error("calcFrobeniusCoefficients: inexact tower exponent");let d=m/c%l;p.push(a.pow(e,d)),y*=t}u.push(p)}return u}function Ry(n,e,t){if(Hn(n),Hn(e),Gt(e,{Fp:"object",frobeniusMap:"function",fromBigTuple:"function",mulByB:"function",mulByNonresidue:"function",reim:"function",Fp4Square:"function",NONRESIDUE:"object"},{}),!Ds(t)||Array.isArray(t))throw new TypeError('"base" expected Fp2 element, got type='+typeof t);if(!e.isValid(t))throw new RangeError('"base" expected valid Fp2 element');let i=e.pow(t,(n.ORDER-Yr)/My),r=e.pow(t,(n.ORDER-Yr)/Pn);function s(f,p){let g=e.mul(e.frobeniusMap(f,1),i),y=e.mul(e.frobeniusMap(p,1),r);return[g,y]}let o=e.pow(t,(n.ORDER**Pn-Yr)/My),a=e.pow(t,(n.ORDER**Pn-Yr)/Pn);if(!e.eql(a,e.neg(e.ONE)))throw new Error("psiFrobenius: PSI2_Y!==-1");function c(f,p){return[e.mul(f,o),e.neg(p)]}let l=f=>(p,g)=>{if(typeof p!="function")throw new TypeError('"c" expected point constructor, got type='+typeof p);if($r(p),!(g instanceof p))throw new TypeError('"P" expected Point instance, got type='+typeof g);let y=g.toAffine(),m=f(y.x,y.y);return p.fromAffine({x:m[0],y:m[1]})},u=l(s),h=l(c);return{psi:s,psi2:c,G2psi:u,G2psi2:h,PSI_X:i,PSI_Y:r,PSI2_X:o,PSI2_Y:a}}var sp=class{ORDER;BITS;BYTES;isLE;ZERO;ONE;Fp;NONRESIDUE;mulByB;Fp_NONRESIDUE;Fp_div2;constructor(e,t={}){let{NONRESIDUE:i=BigInt(-1),FP2_NONRESIDUE:r,Fp2mulByB:s}=t,o=e.ORDER,a=o*o;this.Fp=e,this.ORDER=a,this.BITS=oi(a),this.BYTES=Math.ceil(oi(a)/8),this.isLE=e.isLE,this.ZERO=this.create({c0:e.ZERO,c1:e.ZERO}),this.ONE=this.create({c0:e.ONE,c1:e.ZERO}),this.Fp_NONRESIDUE=e.create(i),this.Fp_div2=e.div(e.ONE,Pn),this.NONRESIDUE=this.create({c0:r[0],c1:r[1]}),this.mulByB=c=>{let{c0:l,c1:u}=s(c);return Object.freeze({c0:l,c1:u})},Object.freeze(this)}fromBigTuple(e){if(!Array.isArray(e)||e.length!==2)throw new Error("invalid Fp2.fromBigTuple");let[t,i]=e;if(typeof t!="bigint"||typeof i!="bigint")throw new Error("invalid Fp2.fromBigTuple");return this.create({c0:t,c1:i})}create(e){let{Fp:t}=this,i=t.create(e.c0),r=t.create(e.c1);return Object.freeze({c0:i,c1:r})}isValid(e){if(!Ds(e))throw new TypeError("invalid field element: expected object, got "+typeof e);let{c0:t,c1:i}=e,{Fp:r}=this;return r.isValid(t)&&r.isValid(i)}is0(e){if(!Ds(e))return!1;let{c0:t,c1:i}=e,{Fp:r}=this;return r.is0(t)&&r.is0(i)}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}eql({c0:e,c1:t},{c0:i,c1:r}){let{Fp:s}=this;return s.eql(e,i)&&s.eql(t,r)}neg({c0:e,c1:t}){let{Fp:i}=this;return Object.freeze({c0:i.neg(e),c1:i.neg(t)})}pow(e,t){return au(this,e,t)}invertBatch(e){return Ei(this,e,!0)}add(e,t){let{Fp:i}=this,{c0:r,c1:s}=e,{c0:o,c1:a}=t;return Object.freeze({c0:i.add(r,o),c1:i.add(s,a)})}sub({c0:e,c1:t},{c0:i,c1:r}){let{Fp:s}=this;return Object.freeze({c0:s.sub(e,i),c1:s.sub(t,r)})}mul({c0:e,c1:t},i){let{Fp:r}=this;if(typeof i=="bigint")return Object.freeze({c0:r.mul(e,i),c1:r.mul(t,i)});let{c0:s,c1:o}=i,a=r.mul(e,s),c=r.mul(t,o),l=r.sub(a,c),u=r.sub(r.mul(r.add(e,t),r.add(s,o)),r.add(a,c));return Object.freeze({c0:l,c1:u})}sqr({c0:e,c1:t}){let{Fp:i}=this,r=i.add(e,t),s=i.sub(e,t),o=i.add(e,e);return Object.freeze({c0:i.mul(r,s),c1:i.mul(o,t)})}addN(e,t){return this.add(e,t)}subN(e,t){return this.sub(e,t)}mulN(e,t){return this.mul(e,t)}sqrN(e){return this.sqr(e)}div(e,t){let{Fp:i}=this;return this.mul(e,typeof t=="bigint"?i.inv(i.create(t)):this.inv(t))}inv({c0:e,c1:t}){let{Fp:i}=this,r=i.inv(i.create(e*e+t*t));return Object.freeze({c0:i.mul(r,i.create(e)),c1:i.mul(r,i.create(-t))})}sqrt(e){let{Fp:t}=this,i=this,{c0:r,c1:s}=e;if(t.is0(s))return pr(t,r)===1?i.create({c0:t.sqrt(r),c1:t.ZERO}):i.create({c0:t.ZERO,c1:t.sqrt(t.div(r,this.Fp_NONRESIDUE))});let o=t.sqrt(t.sub(t.sqr(r),t.mul(t.sqr(s),this.Fp_NONRESIDUE))),a=t.mul(t.add(o,r),this.Fp_div2);pr(t,a)===-1&&(a=t.sub(a,o));let l=t.sqrt(a),u=i.create({c0:l,c1:t.div(t.mul(s,this.Fp_div2),l)});if(!i.eql(i.sqr(u),e))throw new Error("Cannot find square root");let h=u,f=i.neg(h),{re:p,im:g}=i.reim(h),{re:y,im:m}=i.reim(f);return g>m||g===m&&p>y?h:f}isOdd(e){let{re:t,im:i}=this.reim(e),r=t%Pn,s=t===rp,o=i%Pn;return BigInt(r||s&&o)==Yr}fromBytes(e){let{Fp:t}=this;if(ht(e),e.length!==this.BYTES)throw new Error("fromBytes invalid length="+e.length);return this.create({c0:t.fromBytes(e.subarray(0,t.BYTES)),c1:t.fromBytes(e.subarray(t.BYTES))})}toBytes({c0:e,c1:t}){return Qt(this.Fp.toBytes(e),this.Fp.toBytes(t))}cmov({c0:e,c1:t},{c0:i,c1:r},s){let{Fp:o}=this;return this.create({c0:o.cmov(e,i,s),c1:o.cmov(t,r,s)})}reim({c0:e,c1:t}){return{re:e,im:t}}Fp4Square(e,t){let i=this,r=i.sqr(e),s=i.sqr(t);return{first:i.add(i.mulByNonresidue(s),r),second:i.sub(i.sub(i.sqr(i.add(e,t)),r),s)}}mulByNonresidue({c0:e,c1:t}){let{Fp:i,NONRESIDUE:r}=this;return r.c0===i.ONE&&r.c1===i.ONE?Object.freeze({c0:i.sub(e,t),c1:i.add(e,t)}):r.c1===i.ONE?Object.freeze({c0:i.sub(i.mul(e,r.c0),t),c1:i.add(e,i.mul(t,r.c0))}):this.mul({c0:e,c1:t},r)}frobeniusMap(e,t){let{c0:i,c1:r}=e,{Fp:s}=this;return Object.freeze({c0:i,c1:t%2===0?r:s.neg(r)})}},op=class{ORDER;BITS;BYTES;isLE;ZERO;ONE;Fp2;constructor(e){this.Fp2=e,this.ORDER=e.Fp.ORDER**NS,this.BITS=3*e.BITS,this.BYTES=3*e.BYTES,this.isLE=e.isLE,this.ZERO=this.create({c0:e.ZERO,c1:e.ZERO,c2:e.ZERO}),this.ONE=this.create({c0:e.ONE,c1:e.ZERO,c2:e.ZERO}),Object.freeze(this)}get FROBENIUS_COEFFICIENTS_1(){let e=du.get(this);if(e)return e[0];let{Fp2:t}=this,{Fp:i}=t,r=Ay(t,t.NONRESIDUE,i.ORDER,6,2,3),s=[Object.freeze(r[0]),Object.freeze(r[1])];return du.set(this,s),s[0]}get FROBENIUS_COEFFICIENTS_2(){let e=du.get(this);return e?e[1]:(this.FROBENIUS_COEFFICIENTS_1,du.get(this)[1])}add({c0:e,c1:t,c2:i},{c0:r,c1:s,c2:o}){let{Fp2:a}=this;return Object.freeze({c0:a.add(e,r),c1:a.add(t,s),c2:a.add(i,o)})}sub({c0:e,c1:t,c2:i},{c0:r,c1:s,c2:o}){let{Fp2:a}=this;return Object.freeze({c0:a.sub(e,r),c1:a.sub(t,s),c2:a.sub(i,o)})}mul({c0:e,c1:t,c2:i},r){let{Fp2:s}=this;if(typeof r=="bigint")return Object.freeze({c0:s.mul(e,r),c1:s.mul(t,r),c2:s.mul(i,r)});let{c0:o,c1:a,c2:c}=r,l=s.mul(e,o),u=s.mul(t,a),h=s.mul(i,c);return Object.freeze({c0:s.add(l,s.mulByNonresidue(s.sub(s.mul(s.add(t,i),s.add(a,c)),s.add(u,h)))),c1:s.add(s.sub(s.mul(s.add(e,t),s.add(o,a)),s.add(l,u)),s.mulByNonresidue(h)),c2:s.sub(s.add(u,s.mul(s.add(e,i),s.add(o,c))),s.add(l,h))})}sqr({c0:e,c1:t,c2:i}){let{Fp2:r}=this,s=r.sqr(e),o=r.mul(r.mul(e,t),Pn),a=r.mul(r.mul(t,i),Pn),c=r.sqr(i);return Object.freeze({c0:r.add(r.mulByNonresidue(a),s),c1:r.add(r.mulByNonresidue(c),o),c2:r.sub(r.sub(r.add(r.add(o,r.sqr(r.add(r.sub(e,t),i))),a),s),c)})}addN(e,t){return this.add(e,t)}subN(e,t){return this.sub(e,t)}mulN(e,t){return this.mul(e,t)}sqrN(e){return this.sqr(e)}create(e){let{Fp2:t}=this,i=t.create(e.c0),r=t.create(e.c1),s=t.create(e.c2);return Object.freeze({c0:i,c1:r,c2:s})}isValid(e){if(!Ds(e))throw new TypeError("invalid field element: expected object, got "+typeof e);let{c0:t,c1:i,c2:r}=e,{Fp2:s}=this;return s.isValid(t)&&s.isValid(i)&&s.isValid(r)}is0(e){if(!Ds(e))return!1;let{c0:t,c1:i,c2:r}=e,{Fp2:s}=this;return s.is0(t)&&s.is0(i)&&s.is0(r)}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}neg({c0:e,c1:t,c2:i}){let{Fp2:r}=this;return Object.freeze({c0:r.neg(e),c1:r.neg(t),c2:r.neg(i)})}eql({c0:e,c1:t,c2:i},{c0:r,c1:s,c2:o}){let{Fp2:a}=this;return a.eql(e,r)&&a.eql(t,s)&&a.eql(i,o)}sqrt(e){return wi()}div(e,t){let{Fp2:i}=this,{Fp:r}=i;return this.mul(e,typeof t=="bigint"?r.inv(r.create(t)):this.inv(t))}pow(e,t){return au(this,e,t)}invertBatch(e){return Ei(this,e,!0)}inv({c0:e,c1:t,c2:i}){let{Fp2:r}=this,s=r.sub(r.sqr(e),r.mulByNonresidue(r.mul(i,t))),o=r.sub(r.mulByNonresidue(r.sqr(i)),r.mul(e,t)),a=r.sub(r.sqr(t),r.mul(e,i)),c=r.inv(r.add(r.mulByNonresidue(r.add(r.mul(i,o),r.mul(t,a))),r.mul(e,s)));return Object.freeze({c0:r.mul(c,s),c1:r.mul(c,o),c2:r.mul(c,a)})}fromBytes(e){let{Fp2:t}=this;if(ht(e),e.length!==this.BYTES)throw new Error("fromBytes invalid length="+e.length);let i=t.BYTES;return this.create({c0:t.fromBytes(e.subarray(0,i)),c1:t.fromBytes(e.subarray(i,i*2)),c2:t.fromBytes(e.subarray(2*i))})}toBytes({c0:e,c1:t,c2:i}){let{Fp2:r}=this;return Qt(r.toBytes(e),r.toBytes(t),r.toBytes(i))}cmov({c0:e,c1:t,c2:i},{c0:r,c1:s,c2:o},a){let{Fp2:c}=this;return this.create({c0:c.cmov(e,r,a),c1:c.cmov(t,s,a),c2:c.cmov(i,o,a)})}fromBigSix(e){let{Fp2:t}=this;if(!Array.isArray(e)||e.length!==6)throw new Error("invalid Fp6.fromBigSix");for(let r=0;r<6;r++)if(typeof e[r]!="bigint")throw new Error("invalid Fp6.fromBigSix");let i=e;return this.create({c0:t.fromBigTuple(i.slice(0,2)),c1:t.fromBigTuple(i.slice(2,4)),c2:t.fromBigTuple(i.slice(4,6))})}frobeniusMap(e,t){let{c0:i,c1:r,c2:s}=e;if(t%6===0)return Object.freeze({c0:i,c1:r,c2:s});let{Fp2:o}=this;return Object.freeze({c0:o.frobeniusMap(i,t),c1:o.mul(o.frobeniusMap(r,t),this.FROBENIUS_COEFFICIENTS_1[t%6]),c2:o.mul(o.frobeniusMap(s,t),this.FROBENIUS_COEFFICIENTS_2[t%6])})}mulByFp2({c0:e,c1:t,c2:i},r){let{Fp2:s}=this;return Object.freeze({c0:s.mul(e,r),c1:s.mul(t,r),c2:s.mul(i,r)})}mulByNonresidue({c0:e,c1:t,c2:i}){let{Fp2:r}=this;return Object.freeze({c0:r.mulByNonresidue(i),c1:e,c2:t})}mul1({c0:e,c1:t,c2:i},r){let{Fp2:s}=this;return Object.freeze({c0:s.mulByNonresidue(s.mul(i,r)),c1:s.mul(e,r),c2:s.mul(t,r)})}mul01({c0:e,c1:t,c2:i},r,s){let{Fp2:o}=this,a=o.mul(e,r),c=o.mul(t,s);return Object.freeze({c0:o.add(o.mulByNonresidue(o.sub(o.mul(o.add(t,i),s),c)),a),c1:o.sub(o.sub(o.mul(o.add(r,s),o.add(e,t)),a),c),c2:o.add(o.sub(o.mul(o.add(e,i),r),a),c)})}},du=new WeakMap,ap=class{ORDER;BITS;BYTES;isLE;ZERO;ONE;Fp6;X_LEN;finalExponentiate;constructor(e,t){let{X_LEN:i,Fp12finalExponentiate:r}=t,{Fp2:s}=e,{Fp:o}=s;this.Fp6=e,this.ORDER=o.ORDER**OS,this.BITS=2*e.BITS,this.BYTES=2*e.BYTES,this.isLE=e.isLE,this.ZERO=this.create({c0:e.ZERO,c1:e.ZERO}),this.ONE=this.create({c0:e.ONE,c1:e.ZERO}),this.X_LEN=i,this.finalExponentiate=a=>{let c=({c0:h,c1:f})=>Object.freeze({c0:h,c1:f}),l=({c0:h,c1:f,c2:p})=>Object.freeze({c0:c(h),c1:c(f),c2:c(p)}),u=r(a);return Object.freeze({c0:l(u.c0),c1:l(u.c1)})},Object.freeze(this)}get FROBENIUS_COEFFICIENTS(){let e=Ty.get(this);if(e)return e;let{Fp2:t}=this.Fp6,{Fp:i}=t,r=Object.freeze(Ay(t,t.NONRESIDUE,i.ORDER,12,1,6)[0]);return Ty.set(this,r),r}create(e){let{Fp6:t}=this,i=t.create(e.c0),r=t.create(e.c1);return Object.freeze({c0:i,c1:r})}isValid(e){if(!Ds(e))throw new TypeError("invalid field element: expected object, got "+typeof e);let{c0:t,c1:i}=e,{Fp6:r}=this;return r.isValid(t)&&r.isValid(i)}is0(e){if(!Ds(e))return!1;let{c0:t,c1:i}=e,{Fp6:r}=this;return r.is0(t)&&r.is0(i)}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}neg({c0:e,c1:t}){let{Fp6:i}=this;return Object.freeze({c0:i.neg(e),c1:i.neg(t)})}eql({c0:e,c1:t},{c0:i,c1:r}){let{Fp6:s}=this;return s.eql(e,i)&&s.eql(t,r)}sqrt(e){return wi()}inv({c0:e,c1:t}){let{Fp6:i}=this,r=i.inv(i.sub(i.sqr(e),i.mulByNonresidue(i.sqr(t))));return Object.freeze({c0:i.mul(e,r),c1:i.neg(i.mul(t,r))})}div(e,t){let{Fp6:i}=this,{Fp2:r}=i,{Fp:s}=r;return this.mul(e,typeof t=="bigint"?s.inv(s.create(t)):this.inv(t))}pow(e,t){return au(this,e,t)}invertBatch(e){return Ei(this,e,!0)}add({c0:e,c1:t},{c0:i,c1:r}){let{Fp6:s}=this;return Object.freeze({c0:s.add(e,i),c1:s.add(t,r)})}sub({c0:e,c1:t},{c0:i,c1:r}){let{Fp6:s}=this;return Object.freeze({c0:s.sub(e,i),c1:s.sub(t,r)})}mul({c0:e,c1:t},i){let{Fp6:r}=this;if(typeof i=="bigint")return Object.freeze({c0:r.mul(e,i),c1:r.mul(t,i)});let{c0:s,c1:o}=i,a=r.mul(e,s),c=r.mul(t,o);return Object.freeze({c0:r.add(a,r.mulByNonresidue(c)),c1:r.sub(r.mul(r.add(e,t),r.add(s,o)),r.add(a,c))})}sqr({c0:e,c1:t}){let{Fp6:i}=this,r=i.mul(e,t);return Object.freeze({c0:i.sub(i.sub(i.mul(i.add(i.mulByNonresidue(t),e),i.add(e,t)),r),i.mulByNonresidue(r)),c1:i.add(r,r)})}addN(e,t){return this.add(e,t)}subN(e,t){return this.sub(e,t)}mulN(e,t){return this.mul(e,t)}sqrN(e){return this.sqr(e)}fromBytes(e){let{Fp6:t}=this;if(ht(e),e.length!==this.BYTES)throw new Error("fromBytes invalid length="+e.length);return this.create({c0:t.fromBytes(e.subarray(0,t.BYTES)),c1:t.fromBytes(e.subarray(t.BYTES))})}toBytes({c0:e,c1:t}){let{Fp6:i}=this;return Qt(i.toBytes(e),i.toBytes(t))}cmov({c0:e,c1:t},{c0:i,c1:r},s){let{Fp6:o}=this;return this.create({c0:o.cmov(e,i,s),c1:o.cmov(t,r,s)})}fromBigTwelve(e){let{Fp6:t}=this;if(!Array.isArray(e)||e.length!==12)throw new Error("invalid Fp12.fromBigTwelve");for(let r=0;r<12;r++)if(typeof e[r]!="bigint")throw new Error("invalid Fp12.fromBigTwelve");let i=e;return this.create({c0:t.fromBigSix(i.slice(0,6)),c1:t.fromBigSix(i.slice(6,12))})}frobeniusMap(e,t){let i=t%12;if(i===0)return Object.freeze({c0:e.c0,c1:e.c1});if(i===6)return this.conjugate(e);let{Fp6:r}=this,{Fp2:s}=r,{c0:o,c1:a,c2:c}=r.frobeniusMap(e.c1,t),l=this.FROBENIUS_COEFFICIENTS[i];return Object.freeze({c0:r.frobeniusMap(e.c0,t),c1:Object.freeze({c0:s.mul(o,l),c1:s.mul(a,l),c2:s.mul(c,l)})})}mulByFp2({c0:e,c1:t},i){let{Fp6:r}=this;return Object.freeze({c0:r.mulByFp2(e,i),c1:r.mulByFp2(t,i)})}conjugate({c0:e,c1:t}){return Object.freeze({c0:e,c1:this.Fp6.neg(t)})}_cyclotomicSquare({c0:e,c1:t}){let{Fp6:i}=this,{Fp2:r}=i,{c0:s,c1:o,c2:a}=e,{c0:c,c1:l,c2:u}=t,{first:h,second:f}=r.Fp4Square(s,l),{first:p,second:g}=r.Fp4Square(c,a),{first:y,second:m}=r.Fp4Square(o,u),d=r.mulByNonresidue(m);return Object.freeze({c0:Object.freeze({c0:r.add(r.mul(r.sub(h,s),Pn),h),c1:r.add(r.mul(r.sub(p,o),Pn),p),c2:r.add(r.mul(r.sub(y,a),Pn),y)}),c1:Object.freeze({c0:r.add(r.mul(r.add(d,c),Pn),d),c1:r.add(r.mul(r.add(f,l),Pn),f),c2:r.add(r.mul(r.add(g,u),Pn),g)})})}_cyclotomicExp(e,t){if(Bs("cyclotomic exponent",t,rp,Yr<<BigInt(this.X_LEN)),t===rp)return this.ONE;let i=e;for(let r=oi(t)-2;r>=0;r--)i=this._cyclotomicSquare(i),Kg(t,r)&&(i=this.mul(i,e));return i}},Ty=new WeakMap;function Cy(n){if(Gt(n,{ORDER:"bigint",X_LEN:"number",FP2_NONRESIDUE:"object",Fp2mulByB:"function",Fp12finalExponentiate:"function"},{NONRESIDUE:"bigint"}),Ot(n.X_LEN,"X_LEN"),n.X_LEN<1)throw new Error("invalid X_LEN");let e=n.FP2_NONRESIDUE;if(!Array.isArray(e)||e.length!==2)throw new Error("invalid FP2_NONRESIDUE");if(typeof e[0]!="bigint"||typeof e[1]!="bigint")throw new Error("invalid FP2_NONRESIDUE");let t=qr(n.ORDER),i=new sp(t,n),r=new op(i),s=new ap(r,n);return{Fp:t,Fp2:i,Fp6:r,Fp12:s}}var fp=BigInt(0),Iy=BigInt(1),fu=BigInt(2),Mo=BigInt(3),To=BigInt(4),ks=BigInt("0xd201000000010000"),LS=oi(ks),Wa={p:BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),n:BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"),h:BigInt("0x396c8c005555e1568c00aaab0000aaab"),a:fp,b:To,Gx:BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),Gy:BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1")},pp=qr(Wa.n,{modFromBytes:!0});function BS(n,e,{g2:t,g3:i,g4:r,g5:s}){return{c0:{c0:n,c1:r,c2:i},c1:{c0:t,c1:e,c2:s}}}function FS({c0:n,c1:e}){return{g2:e.c0,g3:n.c2,g4:n.c1,g5:e.c2}}function US({g2:n,g3:e,g4:t,g5:i}){let{first:r,second:s}=De.Fp4Square(t,i),{first:o,second:a}=De.Fp4Square(n,e),c=De.add(n,n),l=De.add(e,e),u=De.add(t,t),h=De.add(i,i);return{g2:De.add(De.mul(De.mulByNonresidue(s),Mo),c),g3:De.sub(De.mul(r,Mo),l),g4:De.sub(De.mul(o,Mo),u),g5:De.add(De.mul(a,Mo),h)}}function DS({g2:n,g3:e,g4:t,g5:i}){return De.is0(n)?{num:De.mul(De.mul(t,i),fu),den:e}:{num:De.add(De.sub(De.mul(De.sqr(t),Mo),De.mul(e,fu)),De.mulByNonresidue(De.sqr(i))),den:De.mul(n,To)}}function kS(n,{g2:e,g3:t,g4:i,g5:r}){let s=De.mul(t,i),o=De.add(De.sub(De.mul(De.sub(De.sqr(n),s),fu),s),De.mul(e,r));return De.add(De.mulByNonresidue(o),De.ONE)}function zS(n,e){let t=[],i=FS(n);for(let c of e){for(let l=0;l<c;l++)i=US(i);t.push(i)}let r=t.map(({g2:c,g3:l})=>De.is0(c)&&De.is0(l)),s=t.map(DS),o=De.invertBatch(s.map(({den:c})=>c)),a=t.map((c,l)=>{if(r[l])return mt.ONE;let u=De.mul(s[l].num,o[l]);return BS(kS(u,c),u,c)});return{result:mt.mul(mt.mul(a[0],a[1]),a[2]),last:a[2]}}function VS(n){let{result:e,last:t}=zS(n,[16,32,9]),i=e,r=t;for(let s=0;s<3;s++)r=mt._cyclotomicSquare(r);i=mt.mul(i,r);for(let s=0;s<2;s++)r=mt._cyclotomicSquare(r);return i=mt.mul(i,r),r=mt._cyclotomicSquare(r),mt.mul(i,r)}var{Fp:Rt,Fp2:De,Fp6:GS,Fp12:mt}=Cy({ORDER:Wa.p,X_LEN:LS,FP2_NONRESIDUE:[Iy,Iy],Fp2mulByB:({c0:n,c1:e})=>{let t=Rt.mul(n,To),i=Rt.mul(e,To);return{c0:Rt.sub(t,i),c1:Rt.add(t,i)}},Fp12finalExponentiate:n=>{let e=g=>mt.conjugate(VS(g)),t=mt.div(mt.frobeniusMap(n,6),n),i=mt.mul(mt.frobeniusMap(t,2),t),r=e(i),s=mt.mul(mt.conjugate(mt._cyclotomicSquare(i)),r),o=e(s),a=e(o),c=mt.mul(e(a),mt._cyclotomicSquare(r)),l=e(c),u=mt.frobeniusMap(mt.mul(r,a),2),h=mt.frobeniusMap(mt.mul(o,i),3),f=mt.frobeniusMap(mt.mul(c,mt.conjugate(i)),1),p=mt.mul(mt.mul(l,mt.conjugate(s)),i);return mt.mul(mt.mul(mt.mul(u,h),f),p)}}),Py,Vy=()=>Py||(Py=Ry(Rt,De,De.div(De.ONE,De.NONRESIDUE))),hp=(n,e)=>{let t=Vy().G2psi;return hp=t,t(n,e)},Gy=(n,e)=>{let t=Vy().G2psi2;return Gy=t,t(n,e)},cp=Object.freeze({DST:"BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",encodeDST:"BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",p:Rt.ORDER,m:2,k:128,expand:"xmd",hash:Cn}),Hy={p:De.ORDER,n:Wa.n,h:BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),a:De.ZERO,b:De.fromBigTuple([To,To]),Gx:De.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"),BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]),Gy:De.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"),BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")])},Ny=(n,e)=>{for(let t of n)if(t!==fp)return!!(t*fu/e);return!1},Oy={encode({c0:n,c1:e}){let{BYTES:t}=Rt;return Qt(Wr(e,t),Wr(n,t))},decode(n){let{BYTES:e}=Rt;return De.create({c0:dp(n.subarray(e)),c1:dp(n.subarray(0,e))})}},Ly=Rt;function dp(n){return Rt.fromBytes(n)}var Wy=(n,e,t,i,r,s)=>{let o=e,a=i,c=r,l=o.BYTES;return u=>({encode(h,f=!0){if(!f&&!u)throw new Error("invalid signature: expected compressed encoding");let p=h.is0(),{x:g,y}=h.toAffine(),m=f?a(g):Qt(a(g),a(y)),d;return f&&!p&&(d=Ny(s(y),Ly.ORDER)),WS(m,{compressed:f,infinity:p,sort:d})},decode(h){let f=u?ht(h,void 0,"point"):ht(h,l,"signature"),{compressed:p,infinity:g,sort:y,value:m}=HS(f);if(!u&&!p)throw new Error("invalid signature: expected compressed encoding");let d=p?l:2*l;if(m.length!==d)throw new Error(`invalid ${n} point: expected ${d} bytes`);if(g){for(let v of m)if(v)throw new Error(`invalid ${n} point: non-canonical zero`);return{x:o.ZERO,y:o.ZERO}}let _=c(p?m:m.subarray(0,l)),b;if(p){if(b=o.sqrt(o.add(o.pow(_,Mo),t)),!b)throw new Error(`invalid ${n} point: compressed`);Ny(s(b),Ly.ORDER)!==y&&(b=o.neg(b))}else b=c(m.subarray(l));if(!p&&o.is0(_)&&o.is0(b))throw new Error(`invalid ${n} point: uncompressed`);return{x:_,y:b}}})};function qy({compressed:n,infinity:e,sort:t}){if(!n&&!e&&t||!n&&e&&t||n&&e&&t)throw new Error("invalid encoding flag")}function HS(n){n=Hi(n);let e=n[0]&224,t=!!(e>>7&1),i=!!(e>>6&1),r=!!(e>>5&1);return qy({compressed:t,infinity:i,sort:r}),n[0]&=31,{compressed:t,infinity:i,sort:r,value:n}}function WS(n,e){if(n[0]&224)throw new Error("setMask: non-empty mask");return qy({compressed:!!e.compressed,infinity:!!e.infinity,sort:!!e.sort}),e.compressed&&(n[0]|=128),e.infinity&&(n[0]|=64),e.sort&&(n[0]|=32),n}var By=Wy("G1",Rt,Rt.create(Wa.b),n=>Wr(n,Rt.BYTES),dp,n=>[n]),pu={point:By(!0),sig:By(!1)},lp=n=>(n.assertValidity(),pu.sig.encode(n));function Fy(n){let t=gu.G1.Point.fromAffine(pu.sig.decode(n));return t.assertValidity(),t}var Uy=Wy("G2",De,Hy.b,Oy.encode,Oy.decode,n=>[n.c1,n.c0]),mu={point:Uy(!0),sig:Uy(!1)},up=n=>(n.assertValidity(),mu.sig.encode(n));function Dy(n){let t=gu.G2.Point.fromAffine(mu.sig.decode(n));return t.assertValidity(),t}var qS={ShortSignature:{fromBytes(n){return Fy(ht(n))},fromHex(n){return Fy(Os(n))},toBytes(n){return lp(n)},toRawBytes(n){return lp(n)},toHex(n){return Ns(lp(n))}},LongSignature:{fromBytes(n){return Dy(ht(n))},fromHex(n){return Dy(Os(n))},toBytes(n){return up(n)},toRawBytes(n){return up(n)},toHex(n){return Ns(up(n))}}},$S={Fp:Rt,Fp2:De,Fp6:GS,Fp12:mt,Fr:pp},XS=np(Wa,{allowInfinityPoint:!0,Fn:pp,fromBytes:pu.point.decode,toBytes:(n,e,t)=>pu.point.encode(e,t),isTorsionFree:(n,e)=>{let t=BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"),i=new n(Rt.mul(e.X,t),e.Y,e.Z);return e.multiplyUnsafe(ks).negate().multiplyUnsafe(ks).equals(i)},clearCofactor:(n,e)=>e.multiplyUnsafe(ks).add(e)}),YS=np(Hy,{Fp:De,allowInfinityPoint:!0,Fn:pp,fromBytes:mu.point.decode,toBytes:(n,e,t)=>mu.point.encode(e,t),isTorsionFree:(n,e)=>e.multiplyUnsafe(ks).negate().equals(hp(n,e)),clearCofactor:(n,e)=>{let t=ks,i=e.multiplyUnsafe(t).negate(),r=hp(n,e),s=e.double();return s=Gy(n,s),s=s.subtract(r),r=i.add(r),r=r.multiplyUnsafe(t).negate(),s=s.add(r),s=s.subtract(i),s.subtract(e)}}),jS={mapToG1:t1,mapToG2:n1,hasherOpts:cp,hasherOptsG1:{...cp,m:1,DST:"BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_",encodeDST:"BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"},hasherOptsG2:{...cp}},ZS={ateLoopSize:ks,xNegative:!0,twistType:"multiplicative",randomBytes:fr},gu=Ey($S,XS,YS,ZS,jS,qS),KS=Jf(De,[[["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6","0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"],["0x0","0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"],["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e","0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"],["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1","0x0"]],[["0x0","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"],["0xc","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"],["0x1","0x0"]],[["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706","0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"],["0x0","0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"],["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c","0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"],["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10","0x0"]],[["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"],["0x0","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"],["0x12","0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"],["0x1","0x0"]]].map(n=>n.map(e=>De.fromBigTuple(e.map(BigInt))))),JS=Jf(Rt,[["0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7","0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb","0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0","0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861","0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9","0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983","0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84","0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e","0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317","0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e","0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b","0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"],["0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c","0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff","0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19","0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8","0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e","0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5","0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a","0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e","0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641","0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a","0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"],["0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33","0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696","0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6","0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb","0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb","0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0","0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2","0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29","0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587","0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30","0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132","0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e","0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8","0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133","0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b","0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"],["0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1","0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d","0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2","0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416","0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d","0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac","0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c","0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9","0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a","0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55","0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8","0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092","0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc","0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7","0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f","0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"]].map(n=>n.map(e=>BigInt(e)))),ky,zy,QS=()=>ky||(ky=ep(Rt,{A:Rt.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),B:Rt.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),Z:Rt.create(BigInt(11))})),e1=()=>zy||(zy=ep(De,{A:De.create({c0:Rt.create(fp),c1:Rt.create(BigInt(240))}),B:De.create({c0:Rt.create(BigInt(1012)),c1:Rt.create(BigInt(1012))}),Z:De.create({c0:Rt.create(BigInt(-2)),c1:Rt.create(BigInt(-1))})}));function t1(n){let{x:e,y:t}=QS()(Rt.create(n[0]));return JS(e,t)}function n1(n){let{x:e,y:t}=e1()(De.fromBigTuple(n));return KS(e,t)}function $y(n,e,t){let i=typeof n=="string"?$t(n):n,r=typeof e=="string"?$t(e):e,s=typeof t=="string"?$t(t):t,o=gu.shortSignatures;return o.verify(r,o.hash(s),i)}function Ao(n){if(!n)throw new Error("Input cannot be null or undefined");return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):Array.isArray(n)?new Uint8Array(n):"buffer"in n?Ao(n.buffer):new Uint8Array(n)}function zs(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}var Xy=new TextEncoder().encode("\ric-state-root"),Yy=new TextEncoder().encode(`
ic-request`),jy=new TextEncoder().encode("\vic-response"),GI=new TextEncoder().encode("ic-request-auth-delegation");var Zy=60*1e3,r1=60,s1=24,o1=s1*r1,a1=5,c1=5,l1=30*o1,Wt;(function(n){n[n.Empty=0]="Empty",n[n.Fork=1]="Fork",n[n.Labeled=2]="Labeled",n[n.Leaf=3]="Leaf",n[n.Pruned=4]="Pruned"})(Wt||(Wt={}));function u1(n,e){for(let t=0;t<n.length;t++)if(n[t]>e[t])return!0;return!1}var Xa=class n{#e=!1;#t=void 0;static async create(e){let t=n.createUnverified(e);return await t.verify(),t}static createUnverified(e){return new n(e.certificate,e.rootKey,e.principal,e.blsVerify??$y,e.maxAgeInMinutes,e.disableTimeVerification,e.agent)}constructor(e,t,i,r,s=a1,o=!1,a){this._rootKey=t,this._principal=i,this._blsVerify=r,this._maxAgeInMinutes=s,this.#e=o,this.cert=Gn(e),a&&"getTimeDiffMsecs"in a&&"hasSyncedTime"in a&&"syncTime"in a&&(this.#t=a)}lookup_path(e){return Zr(e,this.cert.tree)}lookup_subtree(e){return Ya(e,this.cert.tree)}async verify(){let e=await xu(this.cert.tree),t=await this._checkDelegationAndGetKey(this.cert.delegation),i=this.cert.signature,r=d1(t),s=mn(Xy,e),o=Yn(this.lookup_path(["time"]));if(!o)throw Mt.fromCode(new yi("Certificate does not contain a time"));if(!this.#e){let a=this.#t?.getTimeDiffMsecs()??0,c=this._maxAgeInMinutes*Zy,l=new Date,u=l.getTime()+a,h=u-c,f=u+c1*Zy,p=vo(o),g=p.getTime()<h,y=p.getTime()>f;if((g||y)&&this.#t&&!this.#t.hasSyncedTime())return await this._syncTime(),await this.verify();if(g)throw kn.fromCode(new lr(this._maxAgeInMinutes,p,l,a,"past"));if(y)throw this.#t?.hasSyncedTime()?nn.fromCode(new zn("System time has been synced with the IC network, but certificate is still too far in the future.")):kn.fromCode(new lr(5,p,l,a,"future"))}try{if(!await this._blsVerify(r,i,s))throw kn.fromCode(new yi("Invalid signature"))}catch(a){throw kn.fromCode(new yi("Signature verification failed",a))}}async _checkDelegationAndGetKey(e){if(!e)return this._rootKey;let t=n.createUnverified({certificate:e.certificate,rootKey:this._rootKey,principal:this._principal,blsVerify:this._blsVerify,disableTimeVerification:this.#e,maxAgeInMinutes:l1,agent:this.#t});if(t.cert.delegation)throw Mt.fromCode(new gl);await t.verify();let i;if(Jy(this._principal)){let s=this._principal.canisterId;if(i=Ve.fromUint8Array(e.subnet_id),!mp({canisterId:s,subnetId:i,tree:t.cert.tree}))throw kn.fromCode(new Ms(s,i))}else if(Ky(this._principal))i=this._principal.subnetId;else throw Di;let r=Yn(t.lookup_path(["subnet",i.toUint8Array(),"public_key"]));if(!r)throw Ky(this._principal)?kn.fromCode(new yl(i)):kn.fromCode(new _l(`Could not find subnet key for subnet ID ${i.toText()}`));return r}async _syncTime(){this.#t&&(Jy(this._principal)?await this.#t.syncTime({canisterId:this._principal.canisterId}):await this.#t.syncTime({subnetId:this._principal.subnetId}))}};function Ky(n){return"subnetId"in n}function Jy(n){return"canisterId"in n}var qa=$t("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"),h1=96;function d1(n){let e=qa.byteLength+h1;if(n.byteLength!==e)throw Mt.fromCode(new po(e,n.byteLength));let t=n.slice(0,qa.byteLength);if(!zs(t,qa))throw Mt.fromCode(new bl(qa,t));return n.slice(qa.byteLength)}function Yn(n){if(n.status===Nn.Found&&n.value instanceof Uint8Array)return n.value}async function xu(n){switch(n[0]){case Wt.Empty:return Cn(yu("ic-hashtree-empty"));case Wt.Pruned:return n[1];case Wt.Leaf:return Cn(mn(yu("ic-hashtree-leaf"),n[1]));case Wt.Labeled:return Cn(mn(yu("ic-hashtree-labeled"),n[1],await xu(n[2])));case Wt.Fork:return Cn(mn(yu("ic-hashtree-fork"),await xu(n[1]),await xu(n[2])));default:throw Di}}function yu(n){let e=new Uint8Array([n.length]),t=new TextEncoder().encode(n);return mn(e,t)}function Qy(n){return typeof n[0]=="string"?pn(n[0]):n[0]}var Nn;(function(n){n.Unknown="Unknown",n.Absent="Absent",n.Found="Found",n.Error="Error"})(Nn||(Nn={}));var jr;(function(n){n.Absent="Absent",n.Unknown="Unknown",n.Found="Found"})(jr||(jr={}));var kt;(function(n){n.Absent="Absent",n.Unknown="Unknown",n.Found="Found",n.Less="Less",n.Greater="Greater"})(kt||(kt={}));function Zr(n,e){if(n.length===0)switch(e[0]){case Wt.Empty:return{status:Nn.Absent};case Wt.Leaf:{if(!e[1])throw nn.fromCode(new Dr("Invalid tree structure for leaf"));if(e[1]instanceof Uint8Array)return{status:Nn.Found,value:e[1].slice(e[1].byteOffset,e[1].byteLength+e[1].byteOffset)};throw Di}case Wt.Pruned:return{status:Nn.Unknown};case Wt.Labeled:case Wt.Fork:return{status:Nn.Error};default:throw Di}let t=Qy(n),i=$a(t,e);switch(i.status){case kt.Found:return Zr(n.slice(1),i.value);case kt.Absent:case kt.Greater:case kt.Less:return{status:Nn.Absent};case kt.Unknown:return{status:Nn.Unknown};default:throw Di}}function Ya(n,e){if(n.length===0)return{status:jr.Found,value:e};let t=Qy(n),i=$a(t,e);switch(i.status){case kt.Found:return Ya(n.slice(1),i.value);case kt.Unknown:return{status:jr.Unknown};case kt.Absent:case kt.Greater:case kt.Less:return{status:jr.Absent};default:throw Di}}function bu(n){switch(n[0]){case Wt.Empty:return[];case Wt.Fork:return bu(n[1]).concat(bu(n[2]));default:return[n]}}function $a(n,e){switch(e[0]){case Wt.Labeled:return u1(n,e[1])?{status:kt.Greater}:zs(n,e[1])?{status:kt.Found,value:e[2]}:{status:kt.Less};case Wt.Fork:{let t=$a(n,e[1]);switch(t.status){case kt.Greater:{let i=$a(n,e[2]);return i.status===kt.Less?{status:kt.Absent}:i}case kt.Unknown:{let i=$a(n,e[2]);return i.status===kt.Less?{status:kt.Unknown}:i}default:return t}}case Wt.Pruned:return{status:kt.Unknown};default:return{status:kt.Absent}}}function _u(n,e){switch(e[0]){case Wt.Empty|Wt.Pruned:return[];case Wt.Leaf:return[n];case Wt.Fork:return _u(n,e[1]).concat(_u(n,e[2]));case Wt.Labeled:{let t=e[1],i=e[2],r=[...n,t];return _u(r,i)}default:throw Di}}function mp(n){let e=f1(n),t=gp(e),{canisterId:i}=n;return t.some(s=>s[0].ltEq(i)&&s[1].gtEq(i))}function f1(n){let{subnetId:e,tree:t,canisterId:i}=n,r=Ya(["canister_ranges",e.toUint8Array()],t);if(r.status!==jr.Found)return p1(e,t);let s=r.value,o=m1(s);if(o.length===0)throw Mt.fromCode(new Ms(i,e));o.sort(go);let a=g1(o,i),c=o[a];return y1(c,s)}function p1(n,e){let t=Zr(["subnet",n.toUint8Array(),"canister_ranges"],e);if(t.status!==Nn.Found)throw Mt.fromCode(new xi(`Could not find canister ranges for subnet ${n.toText()}`,t.status));return t.value}function gp(n){return Gn(n).map(i=>[Ve.fromUint8Array(i[0]),Ve.fromUint8Array(i[1])])}function m1(n){let e=[];for(let t of _u([],n)){let i=t[0];if(!i)throw Mt.fromCode(new yi("Path is invalid"));e.push(i)}return e}function g1(n,e){let t=e.toUint8Array(),i=0,r=n.length-1;for(;i<r;){let s=Math.floor((i+r)/2);go(n[s],t)<=0?r=s:i=s+1}return i}function y1(n,e){let t=Zr([n],e);if(t.status!==Nn.Found)throw Mt.fromCode(new xi(`Could not find canister range for shard ${n.toString()}`,t.status));return t.value}function yp(n,e){return n.delegation?Ve.fromUint8Array(n.delegation.subnet_id):Ve.selfAuthenticating(e)}var ex=Ve.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe"),On=class{constructor(e,t){this.decode=t,this.key=Symbol();let i=Array.isArray(e)?e:[e];this.path=i.map(r=>typeof r=="string"?pn(r):r)}};var qi={time:new On(["time"],vo),canisterControllers:n=>new On(["canister",n.toUint8Array(),"controllers"],x1),canisterModuleHash:n=>new On(["canister",n.toUint8Array(),"module_hash"],e=>e),canisterCandid:n=>qi.canisterMetadataString(n,"candid:service"),canisterMetadataString:(n,e)=>new On(["canister",n.toUint8Array(),"metadata",e],t=>new TextDecoder().decode(t)),subnetCanisterRanges:n=>new On(["subnet",n.toUint8Array(),"canister_ranges"],gp),subnetPublicKey:n=>new On(["subnet",n.toUint8Array(),"public_key"],e=>e)},vu=class{#e;constructor(e=new Map){this.#e=e}get(e){return this.#e.get(e.key)??null}};function tx(n){return Array.isArray(n)?n:n.path}function wu(n,e){switch(e){case"raw":return n;case"leb128":return Df(n);case"cbor":return Gn(n);case"hex":return ft(n);case"utf-8":return new TextDecoder().decode(n)}}function x1(n){return Gn(n).map(t=>Ve.fromUint8Array(t))}function Ro(n,e){let t=Ya(["subnet",e.toUint8Array(),"node"],n.tree);if(t.status!==jr.Found)throw Mt.fromCode(new xi("Node not found",t.status));if(t.value instanceof Uint8Array)throw nn.fromCode(new Dr("Invalid node tree"));let i=bu(t.value),r=new Map;return i.forEach(s=>{let o=Ve.from(s[1]).toText(),a=Zr(["public_key"],s[2]);if(a.status!==Nn.Found)throw Mt.fromCode(new xi("Public key not found",a.status));let c=a.value;if(c.byteLength!==44)throw Mt.fromCode(new po(44,c.byteLength));r.set(o,c)}),r}var nx;(function(n){n[n.SysFatal=1]="SysFatal",n[n.SysTransient=2]="SysTransient",n[n.DestinationInvalid=3]="DestinationInvalid",n[n.CanisterReject=4]="CanisterReject",n[n.CanisterError=5]="CanisterError"})(nx||(nx={}));var Kr;(function(n){n.Replied="replied",n.Rejected="rejected"})(Kr||(Kr={}));function ix(n){return n!=null&&"reject_code"in n}function rx(n){return n!=null&&"certificate"in n}function xp(n){if(typeof n=="string")return sx(n);if(typeof n=="number")return Cn(Pt(n));if(n instanceof Uint8Array||ArrayBuffer.isView(n))return Cn(Ao(n));if(Array.isArray(n)){let e=n.map(xp);return Cn(mn(...e))}if(n&&typeof n=="object"&&n._isPrincipal)return Cn(n.toUint8Array());if(typeof n=="object"&&n!==null&&typeof n.toHash=="function")return xp(n.toHash());if(typeof n=="object")return ja(n);if(typeof n=="bigint")return Cn(Pt(n));throw Je.fromCode(new Cl(n))}var sx=n=>{let e=new TextEncoder().encode(n);return Cn(e)};function Co(n){return ja(n)}function ja(n){let i=Object.entries(n).filter(([,o])=>o!==void 0).map(([o,a])=>{let c=sx(o),l=xp(a);return[c,l]}).sort(([o],[a])=>go(o,a)),r=mn(...i.map(o=>mn(...o)));return Cn(r)}var Su=class{getPrincipal(){return this._principal||(this._principal=Ve.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()))),this._principal}async transformRequest(e){let{body:t,...i}=e,r=Co(t);return{...i,body:{content:t,sender_pubkey:this.getPublicKey().toDer(),sender_sig:await this.sign(mn(Yy,r))}}}},Za=class{getPrincipal(){return Ve.anonymous()}async transformRequest(e){return{...e,body:{content:e.body}}}};var Ka=()=>{if(typeof window<"u"&&window.crypto&&window.crypto.getRandomValues){let n=new Uint32Array(1);return window.crypto.getRandomValues(n),n[0]}if(typeof crypto<"u"&&crypto.getRandomValues){let n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]}return typeof crypto<"u"&&crypto.randomInt?crypto.randomInt(0,4294967295):Math.floor(Math.random()*4294967295)};var mr;(function(n){n.Query="read",n.ReadState="read_state",n.Call="call"})(mr||(mr={}));var Eu;(function(n){n.Call="call"})(Eu||(Eu={}));var Vs;(function(n){n.Query="query",n.ReadState="read_state"})(Vs||(Vs={}));var jn;(function(n){n.Received="received",n.Processing="processing",n.Replied="replied",n.Rejected="rejected",n.Unknown="unknown",n.Done="done"})(jn||(jn={}));function Ja(){let n=new ArrayBuffer(16),e=new DataView(n),t=Ka(),i=Ka(),r=Ka(),s=Ka();return e.setUint32(0,t),e.setUint32(4,i),e.setUint32(8,r),e.setUint32(12,s),Object.assign(new Uint8Array(n),{__nonce__:void 0})}function _p(n=Ja){return async e=>{let t=e.request.headers;e.request.headers=t,e.endpoint===mr.Call&&(e.body.nonce=n())}}function bp(n){let e=[];return n.forEach((t,i)=>{e.push([i,t])}),e}var _1=(n,e)=>{switch(n){case"time":return qi.time;case"controllers":return qi.canisterControllers(e);case"module_hash":return new On(qi.canisterModuleHash(e).path,ft);case"candid":return qi.canisterCandid(e)}},b1=(n,e)=>{let t=i=>wu(i,n.decodeStrategy);return typeof n.path=="string"||n.path instanceof Uint8Array?new On(["canister",e.toUint8Array(),"metadata",n.path],t):new On(n.path,t)},ox=async n=>{let{agent:e,paths:t,disableCertificateTimeVerification:i=!1}=n,r=Ve.from(n.canisterId),s=[...new Set(t??[])],o=new Map,a=l=>typeof l=="string"?l:l.key,c=s.map(async l=>{try{if(e.rootKey===null)throw $n.fromCode(new Xn);let u=e.rootKey;if(l==="subnet"){let p=await e.readState({canisterId:r},{paths:[[pn("subnet")]],disableTimeVerification:i});o.set("subnet",v1(p.certificate,r,u));return}let h=typeof l=="string"?_1(l,r):b1(l,r),{values:f}=await e.readState({canisterId:r},{paths:[h],disableTimeVerification:i});o.set(a(l),f.get(h))}catch(u){if(u instanceof qn&&(u.hasCode(yi)||u.hasCode(lr)||u.hasCode(Xn)))throw u;o.set(a(l),null)}});return await Promise.all(c),o},v1=(n,e,t)=>{if(!e._isPrincipal)throw Je.fromCode(new zn("Invalid canisterId"));let i=Gn(n),{delegation:r}=i,s;r&&r.subnet_id?s=Ve.fromUint8Array(new Uint8Array(r.subnet_id)):!r&&typeof t<"u"?s=Ve.selfAuthenticating(new Uint8Array(t)):s=ex;let o=Ro(i,s);return{subnetId:s.toText(),nodeKeys:o}};var w1=(n,e)=>{switch(n){case"time":return qi.time;case"publicKey":return qi.subnetPublicKey(e);case"canisterRanges":return qi.subnetCanisterRanges(e)}},S1=(n,e)=>{let t=i=>wu(i,n.decodeStrategy);return typeof n.path=="string"||n.path instanceof Uint8Array?new On(["subnet",e.toUint8Array(),n.path],t):new On(n.path,t)};async function ax(n){let{agent:e,paths:t,disableCertificateTimeVerification:i=!1}=n,r=Ve.from(n.subnetId),s=[...new Set(t??[])],o=new Map,a=l=>typeof l=="string"?l:l.key,c=s.map(async l=>{try{if(l==="nodeKeys"){let{verifiedCertificate:f}=await e.readState({subnetId:r},{paths:[[pn("subnet"),r.toUint8Array(),pn("node")]],disableTimeVerification:i});o.set("nodeKeys",Ro(f.cert,r));return}let u=typeof l=="string"?w1(l,r):S1(l,r),{values:h}=await e.readState({subnetId:r},{paths:[u],disableTimeVerification:i});o.set(a(l),h.get(u))}catch(u){if(u instanceof qn&&(u.hasCode(yi)||u.hasCode(lr)||u.hasCode(Xn)))throw u;o.set(a(l),null)}});return await Promise.all(c),o}function Mu(n,e,t){let i=new Uint8Array(Yn(n.lookup_path([...e,"reject_code"])))[0],r=new TextDecoder().decode(Yn(n.lookup_path([...e,"reject_message"]))),s=Yn(n.lookup_path([...e,"error_code"])),o=s?new TextDecoder().decode(s):void 0;return new Ml(t,i,r,o)}var Tu=BigInt(0),Au=BigInt(1),Ru=BigInt(2),E1=BigInt(4),cx=BigInt(8);function M1(n,e,t,i){let r=n.sqr(t),s=n.sqr(i),o=n.add(n.mul(e.a,r),s),a=n.add(n.ONE,n.mul(e.d,n.mul(r,s)));return n.eql(o,a)}function lx(n,e={}){Gt(e,{},{},"extraOpts");let t=e,i=uu("edwards",n,t,t.FpFnLE),{Fp:r,Fn:s}=i,o=i.CURVE,{h:a}=o;if(pr(r,o.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(pr(r,o.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");Gt(t,{},{uvRatio:"function",randomBytes:"function"});let c=t.randomBytes===void 0?fr:t.randomBytes,l=Ru<<BigInt(r.BYTES*8)-Au;function u(_){if(!r.isOdd)throw new Error("Field does not have .isOdd()");return r.isOdd(_)}let h=t.uvRatio===void 0?(_,b)=>{try{return{isValid:!0,value:r.sqrt(r.div(_,b))}}catch{return{isValid:!1,value:Tu}}}:t.uvRatio;if(!M1(r,o,o.Gx,o.Gy))throw new Error("bad curve params: generator point");let f=r.eql(o.a,r.neg(r.ONE))?_=>r.neg(_):r.eql(o.a,r.ONE)?_=>_:_=>r.mul(o.a,_);function p(_,b,v=!1){let E=v?Au:Tu;return Bs("coordinate "+_,b,E,l),b}function g(_){if(!(_ instanceof y))throw new Error("EdwardsPoint expected")}class y{static BASE=new y(o.Gx,o.Gy,r.ONE,r.mul(o.Gx,o.Gy));static ZERO=new y(r.ZERO,r.ONE,r.ONE,r.ZERO);static Fp=r;static Fn=s;X;Y;Z;T;constructor(b,v,E,T){this.X=p("x",b),this.Y=p("y",v),this.Z=p("z",E,!0),this.T=p("t",T),Object.freeze(this)}static CURVE(){return o}static fromAffine(b){if(b instanceof y)throw new Error("extended point not allowed");let{x:v,y:E}=b||{};return p("x",v),p("y",E),new y(v,E,r.ONE,r.mul(v,E))}static fromBytes(b,v=!1){let E=r.BYTES,{a:T,d:x}=o;b=Hi(ht(b,E,"point")),si(v,"zip215");let w=Hi(b),I=b[E-1];w[E-1]=I&-129;let R=Ls(w),O=v?l:r.ORDER;Bs("point.y",R,Tu,O);let P=r.sqr(R),U=r.sub(P,r.ONE),A=r.sub(r.mulN(x,P),T),{isValid:z,value:$}=h(U,A);if(!z)throw new Error("bad point: invalid y coordinate");let N=u($),j=(I&128)!==0;if(!v&&r.is0($)&&j)throw new Error("bad point: x=0 and x_0=1");return j!==N&&($=r.neg($)),y.fromAffine({x:$,y:R})}static fromHex(b,v=!1){return y.fromBytes(Os(b),v)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(b=6,v=!0){return d.setWindowSize(this,b),v||this.multiply(Ru),this}assertValidity(){let b=this,{a:v,d:E}=o;if(b.is0())throw new Error("bad point: ZERO");let{X:T,Y:x,Z:w,T:I}=b,R=r.sqr(T),O=r.sqr(x),P=r.sqr(w),U=r.sqr(P),A=r.mul(R,v),z=r.mul(r.add(A,O),P),$=r.add(U,r.mul(E,r.mul(R,O)));if(!r.eql(z,$))throw new Error("bad point: equation left != right (1)");let N=r.mul(T,x),j=r.mul(w,I);if(!r.eql(N,j))throw new Error("bad point: equation left != right (2)")}equals(b){g(b);let{X:v,Y:E,Z:T}=this,{X:x,Y:w,Z:I}=b,R=r.mul(v,I),O=r.mul(x,T),P=r.mul(E,I),U=r.mul(w,T);return r.eql(R,O)&&r.eql(P,U)}is0(){return this.equals(y.ZERO)}negate(){return new y(r.neg(this.X),this.Y,this.Z,r.neg(this.T))}double(){let{X:b,Y:v,Z:E}=this,T=r.sqr(b),x=r.sqr(v),w=r.mul(r.sqr(E),Ru),I=f(T),R=r.addN(b,v),O=r.sub(r.subN(r.sqr(R),T),x),P=r.addN(I,x),U=r.subN(P,w),A=r.subN(I,x),z=r.mul(O,U),$=r.mul(P,A),N=r.mul(O,A),j=r.mul(U,P);return new y(z,$,j,N)}add(b){g(b);let{d:v}=o,{X:E,Y:T,Z:x,T:w}=this,{X:I,Y:R,Z:O,T:P}=b,U=r.mul(E,I),A=r.mul(T,R),z=r.mul(r.mulN(w,v),P),$=r.mul(x,O),N=r.sub(r.subN(r.mulN(r.addN(E,T),r.addN(I,R)),U),A),j=r.subN($,z),H=r.addN($,z),q=r.sub(A,f(U)),B=r.mul(N,j),J=r.mul(H,q),se=r.mul(N,q),V=r.mul(j,H);return new y(B,J,V,se)}subtract(b){return g(b),this.add(b.negate())}multiply(b){if(!s.isValidNot0(b))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");let{p:v,f:E}=d.mulSecret(this,b,a,m);return m([v,E])[0]}multiplyUnsafe(b){if(!s.isValid(b))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return b===Tu?y.ZERO:this.is0()||b===Au?this:d.mulUnsafe(this,b,m)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return d.mulUnsafe(this,o.n).is0()}toAffine(b){let v=this,E=b;if(E!=null&&typeof E!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof E);let{X:T,Y:x,Z:w}=v,I=v.is0();E==null&&(E=I?r.create(cx):r.inv(w));let R=r.mul(T,E),O=r.mul(x,E),P=r.mul(w,E);if(I)return{x:r.ZERO,y:r.ONE};if(!r.eql(P,r.ONE))throw new Error("invZ was invalid");return{x:R,y:O}}clearCofactor(){return a===Au?this:a===Ru?this.double():a===E1?this.double().double():a===cx?this.double().double().double():this.multiplyUnsafe(a)}toBytes(){let{x:b,y:v}=this.toAffine(),E=r.toBytes(v);return E[E.length-1]|=u(b)?128:0,E}toHex(){return Ns(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}}let m=_=>cu(y,_),d=new wo(y,c);return d.bits>=6&&y.BASE.precompute(6),Object.freeze(y.prototype),Object.freeze(y),y}function ux(n,e,t={}){if($r(n),typeof e!="function")throw new Error('"hash" function param is required');let i=e,r=t;Gt(r,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});let{prehash:s}=r,{BASE:o,Fp:a,Fn:c}=n,l=i.outputLen,u=2*a.BYTES;if(l!==void 0&&(Ot(l,"hash.outputLen"),l!==u))throw new Error(`hash.outputLen must be ${u}, got ${l}`);let h=r.randomBytes===void 0?fr:r.randomBytes,f=r.toMontgomery,p=r.toMontgomerySecret,g=r.adjustScalarBytes===void 0?A=>A:r.adjustScalarBytes,y=r.domain===void 0?(A,z,$)=>{if(si($,"phflag"),z.length||$)throw new Error("Contexts/pre-hash are not supported");return A}:r.domain;function m(A){return c.create(Ls(A))}function d(A){let z=I.secretKey;ht(A,I.secretKey,"secretKey");let $=ht(i(A),2*z,"hashedSecretKey"),N=g($.slice(0,z)),j=$.slice(z,2*z),H=m(N);return{head:N,prefix:j,scalar:H}}function _(A){let{head:z,prefix:$,scalar:N}=d(A),j=o.multiply(N),H=j.toBytes();return{head:z,prefix:$,scalar:N,point:j,pointBytes:H}}function b(A){return _(A).pointBytes}function v(A=Uint8Array.of(),...z){let $=Qt(...z);return m(i(y($,ht(A,void 0,"context"),!!s)))}function E(A,z,$={}){Gt($,{},{},"options"),A=Hi(ht(A,void 0,"message")),s&&(A=s(A));let{prefix:N,scalar:j,pointBytes:H}=_(z),q=v($.context,N,A),B=o.multiply(q).toBytes(),J=v($.context,B,H,A),se=c.create(q+J*j);if(!c.isValid(se))throw new Error("sign failed: invalid s");let V=Qt(B,c.toBytes(se));return ht(V,I.signature,"result")}let T={zip215:r.zip215};function x(A,z,$,N=T){Gt(N);let{context:j}=N,H=N.zip215===void 0?!!T.zip215:N.zip215,q=I.signature;A=ht(A,q,"signature"),z=ht(z,void 0,"message"),$=ht($,I.publicKey,"publicKey"),H!==void 0&&si(H,"zip215"),s&&(z=s(z));let B=q/2,J=A.subarray(0,B),se=Ls(A.subarray(B,q)),V,D,X;try{V=n.fromBytes($,H),D=n.fromBytes(J,H),X=o.multiplyUnsafe(se)}catch{return!1}if(!H&&V.isSmallOrder())return!1;let te=v(j,J,$,z);return D.add(V.multiplyUnsafe(te)).subtract(X).clearCofactor().is0()}let w=a.BYTES,I={secretKey:w,publicKey:w,signature:2*w,seed:w};function R(A){return A=A===void 0?h(I.seed):A,ht(A,I.seed,"seed")}function O(A){return Gi(A)&&A.length===I.secretKey}function P(A,z){try{return!!n.fromBytes(A,z===void 0?T.zip215:z)}catch{return!1}}let U={getExtendedPublicKey:_,randomSecretKey:R,isValidSecretKey:O,isValidPublicKey:P,toMontgomery(A){if(f===void 0)throw new Error("Montgomery conversion is not supported for this curve");return f(n.fromBytes(A))},toMontgomerySecret(A){if(p===void 0)throw new Error("Montgomery conversion is not supported for this curve");return p(A)}};return Object.freeze(I),Object.freeze(U),Object.freeze({keygen:Zf(R,b),getPublicKey:b,sign:E,verify:x,utils:U,Point:n,lengths:I})}var vp=BigInt(1),hx=BigInt(2);var T1=BigInt(5),A1=BigInt(8),wp=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),R1={p:wp,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:A1,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function C1(n){let e=BigInt(10),t=BigInt(20),i=BigInt(40),r=BigInt(80),s=wp,a=n*n%s*n%s,c=Si(a,hx,s)*a%s,l=Si(c,vp,s)*n%s,u=Si(l,T1,s)*l%s,h=Si(u,e,s)*u%s,f=Si(h,t,s)*h%s,p=Si(f,i,s)*f%s,g=Si(p,r,s)*p%s,y=Si(g,r,s)*p%s,m=Si(y,e,s)*u%s;return{pow_p_5_8:Si(m,hx,s)*n%s,b2:a}}function px(n){return n[0]&=248,n[31]&=127,n[31]|=64,n}var dx=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function I1(n,e){let t=wp,i=Dt(e*e*e,t),r=Dt(i*i*e,t),s=C1(n*r).pow_p_5_8,o=Dt(n*i*s,t),a=Dt(e*o*o,t),c=o,l=Dt(o*dx,t),u=a===n,h=a===Dt(-n,t),f=a===Dt(-n*dx,t);return u&&(o=c),(h||f)&&(o=l),cy(o,t)&&(o=Dt(-o,t)),{isValid:u||h,value:o}}var Sp=lx(R1,{uvRatio:I1}),fx=Sp.Fp;function P1(n){let{y:e}=n;return fx.toBytes(fx.div(vp+e,vp-e))}function N1(n){let e=Sp.Fp.BYTES;return Bi(n,e),px(vf(n.subarray(0,e))).subarray(0,e)}function O1(n){return ux(Sp,vf,Object.assign({adjustScalarBytes:px,toMontgomery:P1,toMontgomerySecret:N1,zip215:!0},n))}var Jr=O1({});function Cu(n){if(!Number.isFinite(n)||n<=0)throw new Error(`expirationTime must be a positive finite number, got ${n}`)}var Iu=class{#e;#t;#n=null;constructor(e){if(typeof globalThis.indexedDB>"u")throw new Error("IndexedDBExpirableStore requires IndexedDB, which is not available in this environment");Cu(e.expirationTime),this.#e=e.dbName,this.#t=e.storeName,this.expirationTime=e.expirationTime}#r(){return this.#n||(this.#n=this.#o().catch(e=>{throw this.#n=null,e})),this.#n}async#o(){let e=await this.#a();if(e.objectStoreNames.contains(this.#t))return e;let t=e.version+1;return e.close(),this.#a(t)}#a(e){let t=this.#t;return new Promise((i,r)=>{let s=globalThis.indexedDB.open(this.#e,e);s.onupgradeneeded=()=>{let o=s.result;o.objectStoreNames.contains(t)||o.createObjectStore(t,{keyPath:"key"})},s.onsuccess=()=>{let o=s.result;o.onversionchange=()=>{o.close(),this.#n=null},i(o)},s.onerror=()=>r(s.error)})}async get(e){let t=await this.#r();return new Promise((i,r)=>{let a=t.transaction(this.#t,"readonly").objectStore(this.#t).get(e);a.onsuccess=()=>{let c=a.result;if(!c){i(void 0);return}if(Date.now()-c.timestamp>this.expirationTime){this.delete(e).then(()=>i(void 0),()=>i(void 0));return}i(c.value)},a.onerror=()=>r(a.error)})}async set(e,t){await this.#l();let i=await this.#r();return new Promise((r,s)=>{let o=i.transaction(this.#t,"readwrite"),a=o.objectStore(this.#t),c={key:e,value:t,timestamp:Date.now()};a.put(c),o.oncomplete=()=>r(),o.onerror=()=>s(o.error)})}async delete(e){let t=await this.#r();return new Promise((i,r)=>{let s=t.transaction(this.#t,"readwrite");s.objectStore(this.#t).delete(e),s.oncomplete=()=>i(),s.onerror=()=>r(s.error)})}async#l(){let e=await this.#r(),t=Date.now();return new Promise((i,r)=>{let s=e.transaction(this.#t,"readwrite"),a=s.objectStore(this.#t).openCursor();a.onsuccess=()=>{let c=a.result;if(!c)return;let l=c.value;t-l.timestamp>this.expirationTime&&c.delete(),c.continue()},s.oncomplete=()=>i(),s.onerror=()=>r(s.error)})}};var Pu=class{#e;constructor(e){Cu(e.expirationTime),this.expirationTime=e.expirationTime,this.#e=new Map}get(e){let t=this.#e.get(e);return t?Date.now()-t.timestamp>this.expirationTime?(this.#e.delete(e),Promise.resolve(void 0)):Promise.resolve(t.value):Promise.resolve(void 0)}set(e,t){return this.#t(),this.#e.set(e,{value:t,timestamp:Date.now()}),Promise.resolve()}delete(e){return this.#e.delete(e),Promise.resolve()}#t(){let e=Date.now();for(let[t,i]of this.#e)e-i.timestamp>this.expirationTime&&this.#e.delete(t)}};function mx(n){return typeof globalThis.indexedDB<"u"?new Iu(n):new Pu({expirationTime:n.expirationTime})}var gx=n=>{if(n<=127)return 1;if(n<=255)return 2;if(n<=65535)return 3;if(n<=16777215)return 4;throw Je.fromCode(new Ra("Length too long (> 4 bytes)"))},yx=(n,e,t)=>{if(t<=127)return n[e]=t,1;if(t<=255)return n[e]=129,n[e+1]=t,2;if(t<=65535)return n[e]=130,n[e+1]=t>>8,n[e+2]=t,3;if(t<=16777215)return n[e]=131,n[e+1]=t>>16,n[e+2]=t>>8,n[e+3]=t,4;throw Je.fromCode(new Ra("Length too long (> 4 bytes)"))},Ep=(n,e)=>{if(n[e]<128)return 1;if(n[e]===128)throw Je.fromCode(new _i("Invalid length 0"));if(n[e]===129)return 2;if(n[e]===130)return 3;if(n[e]===131)return 4;throw Je.fromCode(new _i("Length too long (> 4 bytes)"))},L1=(n,e)=>{let t=Ep(n,e);if(t===1)return n[e];if(t===2)return n[e+1];if(t===3)return(n[e+1]<<8)+n[e+2];if(t===4)return(n[e+1]<<16)+(n[e+2]<<8)+n[e+3];throw Je.fromCode(new _i("Length too long (> 4 bytes)"))},rN=Uint8Array.from([48,12,6,10,43,6,1,4,1,131,184,67,1,1]),Io=Uint8Array.from([48,5,6,3,43,101,112]),sN=Uint8Array.from([48,16,6,7,42,134,72,206,61,2,1,6,5,43,129,4,0,10]),oN=Uint8Array.from([48,29,6,13,43,6,1,4,1,130,220,124,5,3,1,2,1,6,12,43,6,1,4,1,130,220,124,5,3,2,1]);function Nu(n,e){let t=2+gx(n.byteLength+1),i=e.byteLength+t+n.byteLength,r=0,s=new Uint8Array(1+gx(i)+i);return s[r++]=48,r+=yx(s,r,i),s.set(e,r),r+=e.byteLength,s[r++]=3,r+=yx(s,r,n.byteLength+1),s[r++]=0,s.set(new Uint8Array(n),r),s}var Ou=(n,e)=>{let t=0,i=(a,c)=>{if(r[t++]!==a)throw Je.fromCode(new _i(`Expected ${c} at offset ${t}`))},r=new Uint8Array(n);if(i(48,"sequence"),t+=Ep(r,t),!zs(r.slice(t,t+e.byteLength),e))throw Je.fromCode(new _i("Not the expected OID."));t+=e.byteLength,i(3,"bit string");let s=L1(r,t)-1;t+=Ep(r,t),i(0,"0 padding");let o=r.slice(t);if(s!==o.length)throw Je.fromCode(new vl(s,o.length));return o};var Lu=class n{static from(e){return this.fromDer(e.toDer())}static fromRaw(e){return new n(e)}static fromDer(e){return new n(this.derDecode(e))}static{this.RAW_KEY_LENGTH=32}static derEncode(e){return Nu(e,Io)}static derDecode(e){let t=Ou(e,Io);if(t.length!==this.RAW_KEY_LENGTH)throw Je.fromCode(new _i("An Ed25519 public key must be exactly 32 bytes long"));return t}#e;get rawKey(){return this.#e}#t;get derKey(){return this.#t}constructor(e){if(e.byteLength!==n.RAW_KEY_LENGTH)throw Je.fromCode(new _i("An Ed25519 public key must be exactly 32 bytes long"));this.#e=e.slice(),this.#t=n.derEncode(this.#e)}toDer(){return this.derKey}toRaw(){return this.rawKey}};var Mp=class{constructor(){this.observers=[]}subscribe(e){this.observers.push(e)}unsubscribe(e){this.observers=this.observers.filter(t=>t!==e)}notify(e,...t){this.observers.forEach(i=>i(e,...t))}},Bu=class extends Mp{constructor(){super()}print(e,...t){this.notify({message:e,level:"info"},...t)}warn(e,...t){this.notify({message:e,level:"warn"},...t)}error(e,t,...i){this.notify({message:e,level:"error",error:t},...i)}};var Fu=class n{#e;#t;#n;#r;#o;#a;#l;#s;#i=0;static{this.default={initialInterval:500,randomizationFactor:.5,multiplier:1.5,maxInterval:6e4,maxElapsedTime:9e5,maxIterations:10,date:Date}}constructor(e=n.default){let{initialInterval:t=500,randomizationFactor:i=.5,multiplier:r=1.5,maxInterval:s=6e4,maxElapsedTime:o=9e5,maxIterations:a=10,date:c=Date}=e;this.#e=t,this.#t=i,this.#n=r,this.#r=s,this.#s=c,this.#o=c.now(),this.#a=o,this.#l=a}get ellapsedTimeInMsec(){return this.#s.now()-this.#o}get currentInterval(){return this.#e}get count(){return this.#i}get randomValueFromInterval(){let e=this.#t*this.#e,t=this.#e-e,i=this.#e+e;return Math.random()*(i-t)+t}incrementCurrentInterval(){return this.#e=Math.min(this.#e*this.#n,this.#r),this.#i++,this.#e}next(){return this.ellapsedTimeInMsec>=this.#a||this.#i>=this.#l?null:(this.incrementCurrentInterval(),this.randomValueFromInterval)}};var B1=300*1e3;function xx(){return z1(U1(F1(),1e3),k1(1e3,1.2),D1(B1))}function F1(){let n=!0;return async()=>n?(n=!1,!0):!1}function U1(n,e){return async(t,i,r)=>{if(await n(t,i,r))return new Promise(s=>setTimeout(s,e))}}function D1(n){let e=Date.now()+n;return async(t,i,r)=>{if(Date.now()>e)throw Mt.fromCode(new Ts(`Request timed out after ${n} msec`,i,r))}}function k1(n,e){let t=n;return()=>new Promise(i=>setTimeout(()=>{t*=e,i()},t))}function z1(...n){return async(e,t,i)=>{for(let r of n)await r(e,t,i)}}function Qr(n){return"canisterId"in n?{canisterId:Ve.from(n.canisterId)}:{subnetId:Ve.from(n.subnetId)}}function Uu(n){return"canisterId"in n?`canister:${n.canisterId.toText()}`:`subnet:${n.subnetId.toText()}`}var bx={preSignReadStateRequest:!1};function vx(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Tp(n,e){return n!==null&&typeof n=="object"&&vx(n,e)}function G1(n,e){return vx(n,e)&&typeof n[e]=="function"}function _x(n){return Tp(n,"body")&&Tp(n.body,"content")&&n.body.content.request_type===Vs.ReadState&&Tp(n.body.content,"ingress_expiry")&&typeof n.body.content.ingress_expiry=="object"&&n.body.content.ingress_expiry!==null&&G1(n.body.content.ingress_expiry,"toHash")}async function Du(n,e,t,i={}){(typeof e=="string"||e instanceof Ve)&&(e={canisterId:Ve.from(e)});let r=Qr(e),s=[pn("request_status"),t],o,a;i.preSignReadStateRequest??!1?(a=await H1({paths:[s],agent:n,pollingOptions:i}),o=await n.readState(r,{paths:[s],blsVerify:i.blsVerify},void 0,a)):o=await n.readState(r,{paths:[s],blsVerify:i.blsVerify});let l=o.verifiedCertificate,u=Yn(l.lookup_path([...s,pn("status")])),h;switch(typeof u>"u"?h=jn.Unknown:h=new TextDecoder().decode(u),h){case jn.Replied:return{reply:Yn(l.lookup_path([...s,"reply"])),certificate:l,rawCertificate:o.certificate};case jn.Received:case jn.Unknown:case jn.Processing:{let f=i.strategy??xx();return await f(r,t,h),Du(n,r,t,{...i,strategy:f,request:a})}case jn.Rejected:throw gi.fromCode(Mu(l,s,t));case jn.Done:throw nn.fromCode(new Rl(t))}throw Di}async function H1(n){let{paths:e,agent:t,pollingOptions:i}=n;if(i.request&&_x(i.request))return i.request;let r=await t.createReadStateRequest?.({paths:e},void 0);if(!_x(r))throw Je.fromCode(new Ul(r));return r}var Cp=60*1e3,wx=1e6,W1=0,q1="308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae";var $1="ic0.app",X1=".ic0.app",Y1="icp0.io",j1=".icp0.io",Z1="icp-api.io",K1=".icp-api.io",Ap=200,Sx=202,J1=404;function Q1(n){let e;if(n!==void 0)!n.match(/^[a-z]+:/)&&typeof window<"u"?e=new URL(`${window.location.protocol}//${n}`):e=new URL(n);else{let t=["ic0.app","icp0.io","127.0.0.1","localhost"],i=[".github.dev",".gitpod.io"],r=typeof window<"u"?window.location:void 0,s=r?.hostname,o;s&&typeof s=="string"&&(i.some(a=>s.endsWith(a))?o=s:o=t.find(a=>s.endsWith(a))),r&&o?e=new URL(`${r.protocol}//${o}${r.port?`:${r.port}`:""}`):e=new URL("https://icp-api.io")}return e.toString()}var Gs=class n{#e;#t;#n;#r;#o;#a;#l;#s;#i;#x;#_;#c;#h;#d;#u;#b;get#A(){return this.#u*Cp}#m;#g;#v;#y;constructor(e={}){if(this.#e=null,this.#t=!1,this.#n=W1,this.#r=null,this.#o=!1,this.#a=null,this.#l=!1,this._isAgent=!0,this.config={},this.log=new Bu,this.#m=[],this.#g=[],this.#v=new Map,this.#y=!0,this.#S=(r,s)=>{if(this.#y===!1)return r;let{status:o,signatures:a=[],requestId:c}=r,l=s.size;if(a.length>l)throw Mt.fromCode(new Nl(a.length,l));for(let u of a){let{timestamp:h,identity:f}=u,p=Ve.fromUint8Array(f).toText(),g;if(o===Kr.Replied){let{reply:b}=r;g=ja({status:o,reply:b,timestamp:BigInt(h),request_id:c})}else if(o===Kr.Rejected){let{reject_code:b,reject_message:v,error_code:E}=r;g=ja({status:o,reject_code:b,reject_message:v,error_code:E,timestamp:BigInt(h),request_id:c})}else throw nn.fromCode(new zn(`Unknown status: ${o}`));let y=mn(jy,g),m=s.get(p);if(!m)throw Mt.fromCode(new Ll);let d=Lu.fromDer(m).rawKey;if(!Jr.verify(u.signature,y,d))throw kn.fromCode(new Bl(p))}return r},this.config=e,e.fetch)this.#i=e.fetch;else{let r=globalThis.fetch;if(typeof r!="function")throw Je.fromCode(new Il);this.#i=r.bind(globalThis)}this.#x=e.fetchOptions,this.#_=e.callOptions,this.#t=e.shouldFetchRootKey??!1,this.#l=e.shouldSyncTime??!1,e.rootKey?this.rootKey=e.rootKey:this.#t?this.rootKey=null:this.rootKey=$t(q1);let t=Q1(e.host);this.host=new URL(t),this.host.pathname.endsWith("/")||(this.host.pathname+="/"),this.host.hostname.endsWith(X1)?this.host.hostname=$1:this.host.hostname.endsWith(j1)?this.host.hostname=Y1:this.host.hostname.endsWith(K1)&&(this.host.hostname=Z1),e.verifyQuerySignatures!==void 0&&(this.#y=e.verifyQuerySignatures),this.#b=e.subnetNodeKeyExpirableStore??mx({dbName:`icp-sdk-${this.host.host}`,storeName:"subnetNodeKeys",expirationTime:5*Cp}),this.#h=e.retryTimes??3;let i=()=>new Fu({maxIterations:this.#h});if(this.#d=e.backoffStrategy||i,e.credentials){let{name:r,password:s}=e.credentials;this.#c=`${r}${s?`:${s}`:""}`}if(this.#s=Promise.resolve(e.identity||new Za),e.ingressExpiryInMinutes&&e.ingressExpiryInMinutes>5)throw Je.fromCode(new Ui("The maximum ingress expiry time is 5 minutes.",e.ingressExpiryInMinutes));if(e.ingressExpiryInMinutes&&e.ingressExpiryInMinutes<=0)throw Je.fromCode(new Ui("Ingress expiry time must be greater than 0.",e.ingressExpiryInMinutes));this.#u=e.ingressExpiryInMinutes||5,this.addTransform("update",_p(Ja)),e.useQueryNonces&&this.addTransform("query",_p(Ja)),e.logToConsole&&this.log.subscribe(r=>{r.level==="error"?console.error(r.message):r.level==="warn"?console.warn(r.message):console.log(r.message)})}static createSync(e={}){return new this({...e})}static async create(e={}){let t=n.createSync(e);return await t.#p(),t}static async from(e){try{return"config"in e?await n.create(e.config):await n.create({fetch:e._fetch,fetchOptions:e._fetchOptions,callOptions:e._callOptions,host:e._host.toString(),identity:e._identity??void 0})}catch{throw Je.fromCode(new Pl)}}isLocal(){let e=this.host.hostname;return e==="127.0.0.1"||e.endsWith("127.0.0.1")}addTransform(e,t,i=t.priority||0){if(e==="update"){let r=this.#g.findIndex(s=>(s.priority||0)<i);this.#g.splice(r>=0?r:this.#g.length,0,Object.assign(t,{priority:i}))}else if(e==="query"){let r=this.#m.findIndex(s=>(s.priority||0)<i);this.#m.splice(r>=0?r:this.#m.length,0,Object.assign(t,{priority:i}))}}async getPrincipal(){if(!this.#s)throw $n.fromCode(new Ur);return(await this.#s).getPrincipal()}async call(e,t,i){let r=t.callSync??!0,s=await(i??this.#s);if(!s)throw $n.fromCode(new Ur);let o=Ve.from(e),a=t.effectiveTarget?Qr(t.effectiveTarget):t.effectiveCanisterId?{canisterId:Ve.from(t.effectiveCanisterId)}:{canisterId:o};await this.#p(a);let c=s.getPrincipal(),l=Rp(this.#u,this.#n),u={request_type:Eu.Call,canister_id:o,method_name:t.methodName,arg:t.arg,sender:c,ingress_expiry:l},h=await this._transform({request:{body:null,method:"POST",headers:{"Content-Type":"application/cbor",...this.#c?{Authorization:`Basic ${btoa(this.#c)}`}:{}}},endpoint:mr.Call,body:u}),f;t?.nonce?f=p(t.nonce):h.body.nonce?f=p(h.body.nonce):f=void 0,u.nonce=f;function p(_){return Object.assign(_,{__nonce__:void 0})}h=await s.transformRequest(h);let g=Co(h.body.content??u),y=eu(h.body),m=this.#d(),d=Ex();try{let _,b;if("canisterId"in a){let w=()=>{let R=new URL(`api/v4/canister/${a.canisterId.toText()}/call`,this.host);return this.log.print(`fetching "${R.pathname}" with request:`,h),this.#i(R,{...this.#_,...h.request,body:y})},I=()=>{let R=new URL(`api/v2/canister/${a.canisterId.toText()}/call`,this.host);return this.log.print(`fetching "${R.pathname}" with request:`,h),this.#i(R,{...this.#_,...h.request,body:y})};_=r?w:I,b=r?I:void 0}else{if(!r)throw Je.fromCode(new Hl);_=()=>{let w=new URL(`api/v4/subnet/${a.subnetId.toText()}/call`,this.host);return this.log.print(`fetching "${w.pathname}" with request:`,h),this.#i(w,{...this.#_,...h.request,body:y})}}let v;try{v=await this.#f({requestFn:_,backoff:m,tries:0})}catch(w){if(!b||!(w instanceof qn)||!w.hasCode(Ia))throw w;this.log.warn("v4 api not supported. Fall back to v2"),v=await this.#f({requestFn:b,backoff:this.#d(),tries:0})}let{responseBodyBytes:E,...T}=v,x=E.byteLength>0?Gn(E):null;return{requestId:g,response:{...T,body:x},requestDetails:u}}catch(_){let b;if(_ instanceof qn){if(_.hasCode(Ui)&&!this.#o&&(await this.syncTime(a),this.#N(h.body.content.ingress_expiry,d)))return this.call(o,t,i);_.code.requestContext={requestId:g,senderPubKey:h.body.sender_pubkey,senderSignature:h.body.sender_sig,ingressExpiry:h.body.content.ingress_expiry},b=_}else b=nn.fromCode(new zn(_));throw this.log.error(`Error while making call: ${b.message}`,b),b}}async update(e,t,i={}){let r=Ve.from(e),s=t.effectiveTarget?Qr(t.effectiveTarget):t.effectiveCanisterId?{canisterId:Ve.from(t.effectiveCanisterId)}:{canisterId:r},{requestId:o,response:a,requestDetails:c}=await this.call(e,t),{body:l,...u}=a;if(rx(l))return this.#R(l,a,o,r,s,t.methodName,u,c,i,t.onPollingStarted);if(ix(l)&&this.#C(l,o,r,s,t.methodName,u),a.status===Sx)return t.onPollingStarted?.(),{...await Du(this,s,o,i),requestDetails:c,callResponse:a};let h=new zn(`Unexpected response from call: status ${a.status} with unrecognized body`);throw h.callContext={canisterId:r,effectiveTarget:s,methodName:t.methodName,httpDetails:u},nn.fromCode(h)}async#R(e,t,i,r,s,o,a,c,l,u){if(this.rootKey==null)throw $n.fromCode(new Xn);let h=e.certificate,f=await Xa.create({certificate:h,rootKey:this.rootKey,principal:s,blsVerify:l.blsVerify,agent:this}),p=[pn("request_status"),i],g=Yn(f.lookup_path([...p,pn("status")])),y=g?new TextDecoder().decode(g):void 0;switch(y){case jn.Replied:return{reply:Yn(f.lookup_path([...p,"reply"])),certificate:f,rawCertificate:h,requestDetails:c,callResponse:t};case jn.Rejected:{let m=Mu(f,p,i);throw m.callContext={canisterId:r,effectiveTarget:s,methodName:o,httpDetails:a},gi.fromCode(m)}case void 0:return this.log.warn(`v4 sync response certificate does not contain request ID ${ft(i)} status. Falling back to polling.`),u?.(),{...await Du(this,s,i,l),requestDetails:c,callResponse:t};default:{let m=new Fl(y,i,t,h);throw m.callContext={canisterId:r,effectiveTarget:s,methodName:o,httpDetails:a},nn.fromCode(m)}}}#C(e,t,i,r,s,o){let{reject_code:a,reject_message:c,error_code:l}=e,u=new Al(t,a,c,l);throw u.callContext={canisterId:i,methodName:s,httpDetails:o,effectiveTarget:r},gi.fromCode(u)}async#w(e){let{target:t,transformedRequest:i,body:r,requestId:s,backoff:o,tries:a}=e,c=a===0?0:o.next(),l="canisterId"in t?new URL(`api/v3/canister/${t.canisterId.toString()}/query`,this.host):new URL(`api/v3/subnet/${t.subnetId.toString()}/query`,this.host);if(this.log.print(`fetching "${l.pathname}" with tries:`,{tries:a,backoff:o,delay:c}),c===null)throw nn.fromCode(new Ts(`Backoff strategy exhausted after ${a} attempts.`,s));c>0&&await new Promise(d=>setTimeout(d,c));let u;try{this.log.print(`fetching "${l.pathname}" with request:`,i),u=await this.#i(l,{...this.#x,...i.request,body:r})}catch(d){if(a<this.#h)return this.log.warn(`Caught exception while attempting to make query:
  ${d}
  Retrying query.`),await this.#w({...e,tries:a+1});throw Aa.fromCode(new Pa(d))}let h=bp(u.headers);if(u.status!==Ap){let d=await u.text();if(Mx(d))throw Je.fromCode(new Ui(d,this.#u));if(a<this.#h)return await this.#w({...e,tries:a+1});throw Mt.fromCode(new Ca(u.status,u.statusText,h,d))}let p={...Gn(Ao(await u.arrayBuffer())),httpDetails:{ok:u.ok,status:u.status,statusText:u.statusText,headers:h},requestId:s};if(!this.#y)return p;let g=p.signatures?.[0]?.timestamp;if(!g)throw Mt.fromCode(new Ol("Timestamp not found in query response. This suggests a malformed or malicious response."));let y=Number(BigInt(g)/BigInt(wx));if(Date.now()+this.#n-y>this.#A){if(a<this.#h)return this.log.warn("Timestamp is older than the max ingress expiry. Retrying query.",{requestId:s,signatureTimestampMs:y}),await this.syncTime(t),await this.#w({...e,tries:a+1});throw kn.fromCode(new El(this.#u,s,a))}return p}async#f(e){let{requestFn:t,backoff:i,tries:r}=e,s=r===0?0:i.next();if(s===null)throw Mt.fromCode(new Ts(`Retry strategy exhausted after ${r} attempts.`));s>0&&await new Promise(u=>setTimeout(u,s));let o,a=new Uint8Array;try{o=await t(),o.status===Ap&&(a=Ao(await o.clone().arrayBuffer()))}catch(u){if(r<this.#h)return this.log.warn(`Caught exception while attempting to make request:
  ${u}
  Retrying request.`),await this.#f({requestFn:t,backoff:i,tries:r+1});throw Aa.fromCode(new Pa(u))}let c=bp(o.headers);if(o.status===Ap||o.status===Sx)return{ok:o.ok,status:o.status,statusText:o.statusText,responseBodyBytes:a,headers:c};let l=await o.text();if(o.status===J1&&o.url.includes("api/v4/canister"))throw Mt.fromCode(new Ia);if(Mx(l))throw Je.fromCode(new Ui(l,this.#u));if(r<this.#h)return await this.#f({requestFn:t,backoff:i,tries:r+1});throw Mt.fromCode(new Ca(o.status,o.statusText,c,l))}async query(e,t,i){let r=this.#d(),s=Ve.from(e),o=t.effectiveTarget?Qr(t.effectiveTarget):t.effectiveCanisterId?{canisterId:Ve.from(t.effectiveCanisterId)}:{canisterId:s},a=Uu(o);await this.#p(o),"canisterId"in o?this.log.print(`ecid ${o.canisterId.toString()}`):this.log.print(`esid ${o.subnetId.toString()}`),this.log.print(`canisterId ${e.toString()}`);let c,l=await(i??this.#s);if(!l)throw $n.fromCode(new Ur);let u=l.getPrincipal(),h=Rp(this.#u,this.#n),f={request_type:Vs.Query,canister_id:s,method_name:t.methodName,arg:t.arg,sender:u,ingress_expiry:h};c=await this._transform({request:{method:"POST",headers:{"Content-Type":"application/cbor",...this.#c?{Authorization:`Basic ${btoa(this.#c)}`}:{}}},endpoint:mr.Query,body:f}),c=await l.transformRequest(c);let p=Co(c.body.content??f),g=eu(c.body),y={canister:s.toText(),target:o,transformedRequest:c,body:g,requestId:p,backoff:r,tries:0},m=async()=>{let d=await this.#w(y);return{requestDetails:f,...d}};try{if(!this.#y)return await m();let[d,_]=await Promise.all([m(),this.fetchSubnetKeys(o)]);try{return this.#S(d,_)}catch{this.log.warn("Query response verification failed. Retrying with fresh subnet keys."),await this.#b.delete(a);let b=await this.fetchSubnetKeys(o);return this.#S(d,b)}}catch(d){let _;if(d instanceof qn){if(d.hasCode(Ui)&&!this.#o)return await this.syncTime(o),this.query(e,t,i);d.code.requestContext={requestId:p,senderPubKey:c.body.sender_pubkey,senderSignature:c.body.sender_sig,ingressExpiry:c.body.content.ingress_expiry},_=d}else _=nn.fromCode(new zn(d));throw this.log.error(`Error while making query: ${_.message}`,_),_}}#S;async createReadStateRequest(e,t){await this.#p();let i=await(t??this.#s);if(!i)throw $n.fromCode(new Ur);let r=i.getPrincipal(),s=await this._transform({request:{method:"POST",headers:{"Content-Type":"application/cbor",...this.#c?{Authorization:`Basic ${btoa(this.#c)}`}:{}}},endpoint:mr.ReadState,body:{request_type:Vs.ReadState,paths:e.paths,sender:r,ingress_expiry:Rp(this.#u,this.#n)}});return i.transformRequest(s)}#I(e){for(let t of e.paths){let[i,r]=t,s=new TextEncoder().encode("request_status");if(zs(i,s))return r}}async readState(e,t,i,r){(typeof e=="string"||e instanceof Ve)&&(e={canisterId:Ve.from(e)}),await this.#E();let s=Qr(e);t.disableTimeVerification||await this.#T(s);let o=[],a=[];for(let m of t.paths){let d=tx(m);o.push(d),Array.isArray(m)||a.push({path:m,encoded:d})}let c={...t,paths:o},l,u;if(r)l=r;else{u=this.#I(c);let m=await this.#s;if(!m)throw $n.fromCode(new Ur);l=await this.createReadStateRequest(c,m)}let h="canisterId"in s?new URL(`api/v3/canister/${s.canisterId.toString()}/read_state`,this.host):new URL(`api/v3/subnet/${s.subnetId.toString()}/read_state`,this.host);if(this.rootKey===null)throw $n.fromCode(new Xn(this.#t));let f=this.rootKey,{certificate:p}=await this.#M(h,s,l,u),g=await Xa.create({certificate:p,rootKey:f,principal:s,blsVerify:t.blsVerify,maxAgeInMinutes:t.maxAgeInMinutes,disableTimeVerification:t.disableTimeVerification,agent:this}),y=new Map;for(let{path:m,encoded:d}of a){let _=Yn(g.lookup_path(d));y.set(m.key,_===void 0?null:m.decode(_))}return{certificate:p,verifiedCertificate:g,values:new vu(y)}}readSubnetState(e,t){return this.readState({subnetId:Ve.from(e)},t)}async#M(e,t,i,r){let s=this.#d();try{let{responseBodyBytes:o}=await this.#f({requestFn:()=>this.#i(e,{...this.#x,...i.request,body:eu(i.body)}),backoff:s,tries:0});return Gn(o)}catch(o){let a;if(o instanceof qn){if(o.hasCode(Ui)&&!this.#o)return await this.syncTime(t),await this.#M(e,t,i,r);o.code.requestContext={requestId:r??Co(i),senderPubKey:i.body.sender_pubkey,senderSignature:i.body.sender_sig,ingressExpiry:i.body.content.ingress_expiry},a=o}else a=nn.fromCode(new zn(o));throw this.log.error(`Error while making read state: ${a.message}`,a),a}}parseTimeFromResponse(e){let t;if(e.certificate){let i=Gn(e.certificate);if(i&&"tree"in i)t=i.tree;else throw Mt.fromCode(new Dr("Could not decode time from response"));let r=Zr(["time"],t);if(r.status!==Nn.Found)throw Mt.fromCode(new xi("Time was not found in the response or was not in its expected format.",r.status));if(!(r.value instanceof Uint8Array)&&!ArrayBuffer.isView(r))throw Mt.fromCode(new xl("Time was not in its expected format."));let s=vo(r.value);return this.log.print("Time from response:",s),this.log.print("Time from response in milliseconds:",s.getTime()),s.getTime()}return this.log.warn("No certificate found in response"),0}async syncTime(e){e&&(typeof e=="string"||e instanceof Ve)&&(e={canisterId:Ve.from(e)}),this.#a=this.#a??(async()=>{await this.#E();let t=Date.now();try{e||this.log.print("Syncing time with the IC. No target provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");let i=e??{canisterId:Ve.from("ryjl3-tyaaa-aaaaa-aaaba-cai")},r=n.createSync({identity:new Za,host:this.host.toString(),fetch:this.#i,retryTimes:0,rootKey:this.rootKey??void 0,shouldSyncTime:!1}),s=await Promise.all(Array(3).fill(null).map(async()=>{let a=("canisterId"in i?await ox({canisterId:i.canisterId,agent:r,paths:["time"],disableCertificateTimeVerification:!0}):await ax({subnetId:i.subnetId,agent:r,paths:["time"],disableCertificateTimeVerification:!0})).get("time");if(a instanceof Date)return a.getTime()},[]));this.#P(t,Ex(),s)}catch(i){let r=i instanceof qn?i:nn.fromCode(new zn(i));throw this.log.error("Caught exception while attempting to sync time",r),r}})(),await this.#a.finally(()=>{this.#a=null})}syncTimeWithSubnet(e){return this.syncTime({subnetId:e})}#P(e,t,i){let r=i.reduce((s,o)=>typeof o=="number"&&o>s?o:s,0);r>0&&(this.#n=r-e,this.#r={replicaTimeMs:r,receivedAt:t},this.#o=!0,this.log.notify({message:`Syncing time: offset of ${this.#n}`,level:"info"}))}#N(e,t){if(this.#r===null)return!1;let{replicaTimeMs:i,receivedAt:r}=this.#r,s=Math.max(r.wallMs-t.wallMs,r.monotonicMs-t.monotonicMs),o=BigInt(Math.floor(i-s))*BigInt(wx);return e.toBigInt()<o}async status(){let e=this.#c?{Authorization:`Basic ${btoa(this.#c)}`}:{},t=new URL("api/v2/status",this.host);this.log.print(`fetching "${t.pathname}"`);let i=this.#d(),{responseBodyBytes:r}=await this.#f({backoff:i,requestFn:()=>this.#i(t,{headers:e,...this.#x}),tries:0});return Gn(r)}async fetchRootKey(){return this.#e=this.#e??(async()=>{let e=await this.status();return this.rootKey=e.root_key,this.rootKey})(),await this.#e.finally(()=>{this.#e=null})}async#p(e){await Promise.all([this.#E(),this.#T(e)])}async#E(){if(!this.rootKey)if(this.rootKey===null&&this.host.toString()!=="https://icp-api.io"&&this.#t)await this.fetchRootKey();else throw $n.fromCode(new Xn(this.#t))}async#T(e){this.#l&&!this.hasSyncedTime()&&await this.syncTime(e)}invalidateIdentity(){this.#s=null}replaceIdentity(e){this.#s=Promise.resolve(e)}async fetchSubnetKeys(e){(typeof e=="string"||e instanceof Ve)&&(e={canisterId:Ve.from(e)});let t=Qr(e),i=Uu(t),r=await this.#b.get(i);if(r)return r;let s=this.#v.get(i);if(s)return s;let o=this.#O(t).finally(()=>{this.#v.delete(i)});return this.#v.set(i,o),o}async#O(e){await this.#p(e);let t=this.rootKey,{verifiedCertificate:i}=await this.readState(e,{paths:[[pn("subnet")]]}),r=Uu(e);if("canisterId"in e&&!i.cert.delegation){let a=Ve.selfAuthenticating(t);if(!mp({canisterId:e.canisterId,subnetId:a,tree:i.cert.tree}))throw kn.fromCode(new Ms(e.canisterId,a))}let s=yp(i.cert,t),o=Ro(i.cert,s);return await this.#b.set(r,o),o}async getSubnetIdFromCanister(e){let t=Ve.from(e);await this.#p({canisterId:t});let{verifiedCertificate:i}=await this.readState({canisterId:t},{paths:[[pn("time")]]});return yp(i.cert,this.rootKey)}_transform(e){let t=Promise.resolve(e);if(e.endpoint===mr.Call)for(let i of this.#g)t=t.then(r=>i(r).then(s=>s||r));else for(let i of this.#m)t=t.then(r=>i(r).then(s=>s||r));return t}getTimeDiffMsecs(){return this.#n}hasSyncedTime(){return this.#o}};function Rp(n,e){let t=n*Cp;return Is.fromDeltaInMilliseconds(t,e)}function Ex(){let n=Date.now(),e=typeof performance<"u"&&typeof performance.now=="function"?performance.now():n;return{wallMs:n,monotonicMs:e}}function Mx(n){return n.includes("Invalid request expiry: ")}var Zn=Symbol.for("ic-agent-metadata"),ku=class n{static agentOf(e){return e[Zn].config.agent}static interfaceOf(e){return e[Zn].service}static canisterIdOf(e){return Ve.from(e[Zn].config.canisterId)}static createActorClass(e,t){let i=e({IDL:vi});class r extends n{constructor(o){if(!o.canisterId)throw Je.fromCode(new Na(o.canisterId));let a=typeof o.canisterId=="string"?Ve.fromText(o.canisterId):o.canisterId;super({config:{...Ip,...o,canisterId:a},service:i});for(let[c,l]of i._fields)t?.httpDetails&&l.annotations.push(Pp),t?.certificate&&l.annotations.push(Tx),this[c]=eE(this,c,l,o.blsVerify)}}return r}static createActor(e,t){if(!t.canisterId)throw Je.fromCode(new Na(t.canisterId));return new(this.createActorClass(e))(t)}static createActorWithHttpDetails(e,t){return new(this.createActorClass(e,{httpDetails:!0}))(t)}static createActorWithExtendedDetails(e,t,i={httpDetails:!0,certificate:!0}){return new(this.createActorClass(e,i))(t)}constructor(e){this[Zn]=Object.freeze(e)}};function Po(n,e){let t=vi.decode(n,e);switch(t.length){case 0:return;case 1:return t[0];default:return t}}var Ip={pollingOptions:bx,queryStrategy:"query"},Pp="http-details",Tx="certificate";function eE(n,e,t,i){let r,s=t.annotations.includes("query")||t.annotations.includes("composite_query"),o=n[Zn].config.queryStrategy;s&&o==="query"?r=async(c,...l)=>{c={...c,...n[Zn].config.queryTransform?.(e,l,{...n[Zn].config,...c})};let u=c.agent||n[Zn].config.agent||new Gs,h=vi.encode(t.argTypes,l),{canisterId:f,effectiveTarget:p,effectiveCanisterId:g}={...Ip,...n[Zn].config,...c},y=Ve.from(f),m=p??(g?{canisterId:g}:{canisterId:Ve.from(f)}),d=await u.query(y,{methodName:e,arg:h,effectiveTarget:m}),_={...d.httpDetails,requestDetails:d.requestDetails};switch(d.status){case Kr.Rejected:{let b=new Tl(d.requestId,d.reject_code,d.reject_message,d.error_code,d.signatures);throw b.callContext={canisterId:y,effectiveTarget:m,methodName:e,httpDetails:_},gi.fromCode(b)}case Kr.Replied:return t.annotations.includes(Pp)?{httpDetails:_,result:Po(t.retTypes,d.reply.arg)}:Po(t.retTypes,d.reply.arg)}}:r=async(c,...l)=>{c={...c,...n[Zn].config.callTransform?.(e,l,{...n[Zn].config,...c})};let u=c.agent||n[Zn].config.agent||Gs.createSync(),{canisterId:h,effectiveTarget:f,effectiveCanisterId:p,pollingOptions:g}={...Ip,...n[Zn].config,...c},y=f??(p?{canisterId:p}:{canisterId:Ve.from(h)}),m=Ve.from(h),d=vi.encode(t.argTypes,l),_,b,v,E;try{({reply:_,certificate:b,callResponse:v,requestDetails:E}=await u.update(m,{methodName:e,arg:d,effectiveTarget:y,nonce:c.nonce},{...g,blsVerify:i}))}catch(I){if(I instanceof gi){let R=Object.create(Object.getPrototypeOf(I.code),Object.getOwnPropertyDescriptors(I.code));throw R.callContext={...I.code.callContext,canisterId:m,methodName:e},gi.fromCode(R)}throw I}let T=t.annotations.includes(Pp),x=t.annotations.includes(Tx),w={...v,requestDetails:E};return T&&x?{httpDetails:w,certificate:b,result:Po(t.retTypes,_)}:x?{certificate:b,result:Po(t.retTypes,_)}:T?{httpDetails:w,result:Po(t.retTypes,_)}:Po(t.retTypes,_)};let a=(...c)=>r({},...c);return a.withOptions=c=>(...l)=>r(c,...l),a}var tE="ic_env",Rx="&",Cx="=",nE="ic_root_key",iE="IC_ROOT_KEY",Ax=133;function rE(n={}){let{cookieName:e=tE}=n,t=oE(e);if(t.length===0)throw Je.fromCode(new kl(e));let i=t.map(sE).filter(a=>a!==void 0);if(i.length===0)throw Je.fromCode(new Vl(e));let r=aE(i);if(r.length>1)throw Je.fromCode(new Gl(e,r));let s=r[0];if(!s)throw Je.fromCode(new zl(e));let o=lE(s);if(!o.IC_ROOT_KEY)throw Je.fromCode(new Xn);return o}function Ix(n={}){try{return rE(n)}catch{return}}function sE(n){try{return decodeURIComponent(n)}catch{return}}function oE(n){let e=`${n}=`;return globalThis.document.cookie.split(";").map(t=>t.trim()).filter(t=>t.startsWith(e)).map(t=>t.slice(e.length).trim())}function aE(n){let e=new Map;for(let t of n){let i=cE(t);e.has(i)||e.set(i,t)}return Array.from(e.values())}function cE(n){let e=new Map(Px(n));return Array.from(e,([t,i])=>`${t}${Cx}${i}`).sort().join(Rx)}function Px(n){return n.split(Rx).map(e=>{let t=e.indexOf(Cx);return[e.slice(0,t),e.substring(t+1)]})}function lE(n){let e=Px(n).map(([t,i])=>{if(t===nE){let r=$t(i);if(r.length!==Ax)throw Je.fromCode(new Dl(r,Ax));return[iE,r]}return[t,i]});return Object.fromEntries(e)}function Np({IDL:n,Action:e,View:t,Options:i}){let r=n.Variant({p1:n.Null,p2:n.Null}),s=n.Variant({simultaneous:n.Null,turnBased:n.Null}),o=n.Variant({p1Wins:n.Null,p2Wins:n.Null,draw:n.Null}),a=n.Variant({finished:o,aborted:r,claimed:r}),c=n.Variant({seatTaken:n.Null,notSeated:n.Null,alreadySubmitted:n.Null,notYourTurn:n.Null,illegalMove:n.Text,wrongPhase:n.Text,reserved:n.Record({secondsLeft:n.Nat}),notIdle:n.Record({secondsLeft:n.Nat}),notOverdue:n.Record({secondsLeft:n.Nat}),stale:n.Null,noSuchTable:n.Null,badCode:n.Null,unauthorized:n.Null,tooManyTables:n.Record({max:n.Nat}),badOptions:n.Text}),l=n.Variant({open:n.Null,code:n.Text}),u=n.Variant({lobby:n.Record({p1Open:n.Bool,p2Open:n.Bool,resetAvailable:n.Bool}),busy:n.Record({secondsUntilTakeover:n.Nat}),stagingYou:n.Record({seat:r,reservedForPartner:n.Bool,gen:n.Nat,visibility:l}),awaitingRematch:n.Record({openSeat:r,gen:n.Nat}),inGame:n.Record({seat:r,game:t,step:n.Nat,mode:s,toMove:n.Opt(r),youSubmitted:n.Bool,oppSubmitted:n.Bool,gen:n.Nat,secondsUntilIdleReset:n.Nat,idleTimeoutSecs:n.Nat,claimWinAvailable:n.Bool,secondsUntilClaimable:n.Nat,claimTimeoutSecs:n.Nat}),debrief:n.Record({seat:r,end:a,steps:n.Nat,finalGame:t,gen:n.Nat}),endedByOther:n.Null}),h=n.Nat,f=n.Record({id:h,p1Open:n.Bool,p2Open:n.Bool,p1Session:n.Opt(n.Text),p2Session:n.Opt(n.Text),protected:n.Bool,waitingSecs:n.Nat,options:i}),p=n.Variant({browsing:n.Record({tables:n.Vec(f)}),atTable:n.Record({id:h,view:u})}),g=n.Record({player:n.Text,score:n.Int,updatedAt:n.Int}),y=n.Record({complexity:n.Text,elo:n.Opt(n.Int)}),m=n.Record({principal:n.Principal,name:n.Text,complexities:n.Vec(y)}),d=n.Variant({createTable:n.Record({seat:r,visibility:l,options:i}),joinTable:n.Record({id:h,seat:r,code:n.Opt(n.Text)}),submit:n.Record({gen:n.Nat,step:n.Nat,move:e}),rematch:n.Null,leave:n.Record({gen:n.Nat}),reset:n.Record({gen:n.Nat}),claimWin:n.Record({gen:n.Nat}),ackEnded:n.Null,status:n.Null}),_=n.Record({rev:n.Nat,view:u}),b=n.Variant({view:_,err:c}),v=n.Variant({unchanged:n.Null,changed:_,gone:n.Null}),E=n.Variant({unchanged:n.Null,changed:n.Record({rev:n.Nat,tables:n.Vec(f),yours:n.Vec(h)})}),T=n.Variant({ok:n.Record({tableId:h,rev:n.Nat}),err:c}),x=n.Variant({ok:n.Null,err:c});return{Seat:r,Mode:s,Verdict:o,End:a,Err:c,View:u,TableId:h,Visibility:l,TableSummary:f,Status:p,LeaderboardEntry:g,BotInfo:m,TransportRequest:d,TransportReply:b,Ack:T,TableResult:v,LobbyResult:E,KeepAliveResult:x}}function Nx(n){return({IDL:e})=>{let{Action:t,View:i,Options:r}=n({IDL:e}),s=Np({IDL:e,Action:t,View:i,Options:r});return e.Service({get_leaderboard:e.Func([],[e.Vec(s.LeaderboardEntry)],["query"]),register_bot:e.Func([e.Text,e.Vec(e.Text)],[],[]),unregister_bot:e.Func([],[],[]),list_bots:e.Func([],[e.Vec(s.BotInfo)],["query"]),duel_create_table:e.Func([s.Seat,s.Visibility,r],[s.Ack],[]),duel_join_table:e.Func([s.TableId,s.Seat,e.Opt(e.Text)],[s.Ack],[]),duel_rematch:e.Func([s.TableId],[s.Ack],[]),duel_leave:e.Func([s.TableId,e.Nat],[s.Ack],[]),duel_reset:e.Func([s.TableId,e.Nat],[s.Ack],[]),duel_claim_win:e.Func([s.TableId,e.Nat],[s.Ack],[]),duel_ack_ended:e.Func([s.TableId],[s.Ack],[]),duel_keep_alive:e.Func([],[s.KeepAliveResult],[]),duel_submit:e.Func([s.TableId,e.Nat,e.Nat,t],[s.TransportReply],[]),duel_lobby:e.Func([e.Nat],[s.LobbyResult],["query"]),duel_table:e.Func([s.TableId,e.Nat],[s.TableResult],["query"])})}}function jt(n){return Object.keys(n)[0]}function $i(n){return Object.values(n)[0]}function Lp(n,e){if(n===e)return!0;if(typeof n!="object"||typeof e!="object"||n===null||e===null)return!1;let t=Object.keys(n),i=Object.keys(e);return t.length!==i.length?!1:t.every(r=>Object.hasOwn(e,r)&&Lp(n[r],e[r]))}function Vu(n){let e=jt(n),t=$i(n);switch(e){case"seatTaken":return"That seat is already taken.";case"notSeated":return"You are not seated in this game.";case"alreadySubmitted":return"You have already moved this round.";case"notYourTurn":return"It's not your turn.";case"illegalMove":return t;case"wrongPhase":return t;case"reserved":return`That seat is held for a rematch \u2014 ${t.secondsLeft}s left.`;case"notIdle":return`The board is in use \u2014 ${t.secondsLeft}s until it can be taken over.`;case"notOverdue":return`Your opponent hasn't gone quiet long enough yet \u2014 ${t.secondsLeft}s left before you can claim the win.`;case"noSuchTable":return"That table doesn't exist any more.";case"badCode":return"Wrong (or missing) access code for that table.";case"unauthorized":return"An anonymous identity can't play \u2014 reload the page.";case"tooManyTables":return`You are already at ${t.max} tables \u2014 leave one first.`;case"badOptions":return t;default:return e}}function es(n){return n==null||jt(n)!=="atTable"?null:$i(n)}function Gu(n){if(n==null)return null;let e=es(n);return e===null?"browsing":jt(e.view)}function gr(n,e){let t=es(n);return t===null||jt(t.view)!==e?null:$i(t.view)}var uE=new Set(["stagingYou","inGame","debrief"]);function Bp(n){let e=Gu(n);return e!==null&&uE.has(e)}function zu(n){let e=es(n);if(!e)return 0n;let t=jt(e.view);return t==="stagingYou"||t==="inGame"||t==="debrief"||t==="awaitingRematch"?$i(e.view).gen:0n}function hE(n){let e=gr(n,"inGame");return e?e.step:0n}function Hu(n){return n==="p1"?"p2":"p1"}function Wu(n){return n.youSubmitted?n.oppSubmitted?null:"waiting":n.oppSubmitted?"atRisk":null}function Fx(n){let e=new URLSearchParams(n.replace(/^#/,"")),t=e.get("t");if(t!==null)return/^\d+$/.test(t)?{kind:"join",tableId:BigInt(t),code:e.get("c")||null}:null;if(!e.has("new")&&!e.has("o")&&!e.has("b"))return null;let i=e.get("b")??"",r=i.indexOf(":");return{kind:"new",option:e.get("o")||null,seat:e.get("s")==="p2"?"p2":"p1",bot:r>0&&r<i.length-1?{principal:i.slice(0,r),complexity:i.slice(r+1)}:null}}function Ux(n){let e=encodeURIComponent;return n.kind==="join"?`#t=${n.tableId}${n.code===null?"":`&c=${e(n.code)}`}`:["#new",n.option===null?"":`&o=${e(n.option)}`,n.seat==="p1"?"":`&s=${n.seat}`,n.bot===null?"":`&b=${e(`${n.bot.principal}:${n.bot.complexity}`)}`].join("")}function Dx(n){let e=es(n),t=gr(n,"stagingYou");return e===null||t===null||t.reservedForPartner||!("code"in t.visibility)?null:{kind:"join",tableId:e.id,code:t.visibility.code}}var kx=30,Ox="abcdefghijkmnpqrstuvwxyz23456789";function zx(){let n=globalThis.crypto.getRandomValues(new Uint8Array(8));return Array.from(n,e=>Ox[e%Ox.length]).join("")}function Vx(n,e){let t=n.optionChoices?.()??[];return e===null?t.length===0?{}:t[0].options:t.find(i=>i.key===e)?.options}function Op(n){return"noSuchTable"in n?"This invite has expired.":"badCode"in n?"This invite link is not valid.":"seatTaken"in n||"notIdle"in n||"reserved"in n?"Someone else already took that seat.":Vu(n)}var dE="Leave your table before a link opens a new one.";function fE(n){let e=n.getState().status;return e!==null?Promise.resolve(e):new Promise(t=>{let i=n.subscribe(({status:r})=>{r!==null&&(i(),t(r))})})}async function Gx(n,e,t={}){let i=await fE(n);if(e.kind==="join"&&es(i)?.id===e.tableId)return;if(Gu(i)==="inGame"){n.showError("Finish your game before you follow a link.");return}if(e.kind==="new"&&Bp(i)){n.showError(dE);return}if(e.kind==="join"){let s="browsing"in i?i.browsing.tables.find(a=>a.id===e.tableId):void 0,o=s?.p1Open&&!s.p2Open?"p1":"p2";for(let a of[o,Hu(o)]){let c=await n.joinTable(e.tableId,a,e.code);if(c.ok){n.clearError(),Gu(c.view)==="stagingYou"&&(await n.leave(),n.showError(Op({noSuchTable:null})));return}if(c.reason!=="rejected")return;if(!("seatTaken"in c.err)){n.showError(Op(c.err));return}}n.showError(Op({seatTaken:null}));return}let r=t.options?t.options(e.option):{};if(r===void 0){n.showError("This link asks for rules this game does not offer.");return}e.bot===null?await n.createTable(e.seat,{open:null},r):await t.challenge?.(e.bot,e.seat,r)}function Hx(n,e,t){if(!t||e===null||!("submit"in e.req))return n;let i=es(n),r=gr(n,"inGame");if(i===null||r===null||r.youSubmitted)return n;let{gen:s,step:o,move:a}=e.req.submit;if(r.gen!==s||r.step!==o)return n;let c=t(r.game,jt(r.seat),a);if(c===null)return n;let l="turnBased"in r.mode,u={...r,game:c,step:l?r.step+1n:r.step,toMove:l?[]:r.toMove,youSubmitted:!0,oppSubmitted:l?!1:r.oppSubmitted,claimWinAvailable:!1,secondsUntilClaimable:r.claimTimeoutSecs};return{atTable:{id:i.id,view:{inGame:u}}}}function pE(n){try{return JSON.stringify(n,(e,t)=>typeof t=="bigint"?t.toString():t)}catch{return"?"}}function mE(n){return"createTable"in n?`create:${jt(n.createTable.seat)}`:"joinTable"in n?`jointable:${n.joinTable.id}:${jt(n.joinTable.seat)}`:"submit"in n?`act:${pE(n.submit.move)}`:"rematch"in n?"rematch":"leave"in n?"leave":"reset"in n?"reset":"claimWin"in n?"claim-win":"ackEnded"in n?"ack":""}function Lx(n,e){return n!==null&&("createTable"in n||"joinTable"in n)&&"wrongPhase"in e}function Bx(n,e){return n!==null&&("submit"in n||"leave"in n||"reset"in n||"claimWin"in n)&&"stale"in e}var gE="Connection closed.",yE="Your game ended while you were away.";function Wx({transport:n,session:e,errorTtlMs:t=5e3}){if(!n)throw new Error("createDuelClient(): `transport` is required");if(!e)throw new Error("createDuelClient(): `session` is required");let i=e.sid,r={connection:"connecting",status:null,statusAt:0,pending:null,error:null,authPending:!1,identityLocked:!1},s=new Set,o=P=>P!==null&&(P.key.startsWith("create:")||P.key.startsWith("jointable"));function a(P){let U={...r,...P};U.identityLocked=U.connection==="closed"||U.authPending||o(U.pending)||Bp(U.status);let A=!1;for(let $ of Object.keys(U))if(U[$]!==r[$]){A=!0;break}if(!A)return;let z=r;r=U;for(let $ of[...s])$(r,z)}let c;function l(){c!==void 0&&(clearTimeout(c),c=void 0)}function u(P){r.connection!=="closed"&&(l(),a({error:P}),t>0&&(c=setTimeout(()=>{c=void 0,a({error:null})},t),c.unref?.()))}function h(){r.connection!=="closed"&&(l(),a({error:null}))}function f(){r.connection!=="closed"&&(l(),a({connection:"closed",error:gE,pending:null}),m(null))}let p=typeof n.request=="function",g=null,y=null;function m(P){let U=y;y=null,U&&U(P??{ok:!1,reason:"closed"})}let d=!1;function _(P){d&&(d=!1,Gu(P)==="browsing"&&u(yE))}function b(P){if(Lp(P,r.status)){_(P);return}a({status:P,statusAt:Date.now()}),_(P)}function v(P){g=P;try{return n.send({req:{sid:i,req:P}}),!0}catch(U){return u(`Send failed: ${U.message??U}`),!1}}function E(){r.pending===null&&v({status:null})}function T(P,U){return"err"in U?Lx(P,U.err)||Bx(P,U.err)?{ok:!1,reason:"stale"}:{ok:!1,reason:"rejected",err:U.err,message:Vu(U.err)}:{ok:!0,view:U.view}}function x(P,U){let A=T(P,U),z=r.pending!==null&&r.pending.req===P,$=z?{pending:null}:{};return A.ok&&!Lp(A.view,r.status)&&Object.assign($,{status:A.view,statusAt:Date.now()}),a($),A.ok?(_(A.view),A):(A.reason==="stale"?z&&E():A.reason==="rejected"&&z&&(u(A.message),E()),A)}function w(P){if(r.connection==="closed")return Promise.resolve({ok:!1,reason:"closed"});if(r.pending!==null)return Promise.resolve({ok:!1,reason:"inFlight"});if(g=P,a({pending:{key:mE(P),req:P}}),p){let U=A=>{let z=`Call failed: ${A?.message??A}`;return r.pending!==null&&r.pending.req===P&&(a({pending:null}),u(z),E()),{ok:!1,reason:"failed",message:z}};try{return n.request(i,P).then(A=>x(P,A),U)}catch(A){return Promise.resolve(U(A))}}return new Promise(U=>{y=U,v(P)||(y=null,a({pending:null}),U({ok:!1,reason:"failed",message:r.error??"Send failed"}))})}let I=P=>({[P]:null});async function R(P,U){if(U&&!r.authPending){a({authPending:!0});try{await U()}catch(A){a({authPending:!1}),u(`${P} failed: ${A?.message??A}`)}}}let O=!1;if(n.onopen=()=>{let P=O;O=!0,a({connection:"open"}),P&&E()},n.onconnecting=()=>{r.connection!=="closed"&&(d=Bp(r.status),a({connection:O?"reconnecting":"connecting"}))},n.onmessage=P=>{let U=P.data,A="err"in U&&(Lx(g,U.err)||Bx(g,U.err));if(y!==null){m(x(g,U));return}if(A){r.pending!==null&&r.pending.req===g&&a({pending:null}),E();return}"err"in U?u(Vu(U.err)):b(U.view)},n.onerror=P=>u(`Connection error: ${P?.error?.message??P}`),n.onclose=()=>f(),E(),typeof n.queryStatus=="function")try{n.queryStatus(i).then(P=>{r.status===null&&r.connection!=="closed"&&b(P)},P=>console.debug("[duel-client] status query failed:",P?.message??P))}catch(P){console.debug("[duel-client] status query failed:",P?.message??P)}return{sid:i,session:e,getState:()=>r,subscribe(P){return s.add(P),()=>{s.delete(P)}},createTable:(P,U={open:null},A={})=>w({createTable:{seat:I(P),visibility:U,options:A}}),joinTable:(P,U,A)=>w({joinTable:{id:P,seat:I(U),code:A?[A]:[]}}),submit:P=>w({submit:{gen:zu(r.status),step:hE(r.status),move:P}}),rematch:()=>w({rematch:null}),leave:()=>w({leave:{gen:zu(r.status)}}),reset:()=>w({reset:{gen:zu(r.status)}}),claimWin:()=>w({claimWin:{gen:zu(r.status)}}),ackEnded:()=>w({ackEnded:null}),refresh:E,showError:u,clearError:h,login:()=>R("Log in",e.login),logout:()=>R("Log out",e.logout),regenerateSid:()=>R("New sid",e.regenerate),dispose(){l(),s.clear(),n.onopen&&(n.onopen=null),n.onmessage&&(n.onmessage=null),n.onerror&&(n.onerror=null),n.onclose&&(n.onclose=null),n.onconnecting&&(n.onconnecting=null)}}}function Ln(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function xE(n,e){let t=(i,r)=>`
    <button class="seat" data-join-table="${i}" ${r?"":"disabled"}>
      <span class="seat-label">${Ln(e.seatLabel(i))}</span>
      <span class="muted">${r?"seat open":"taken"}</span>
    </button>`;return`
    <h2>Choose your seat</h2>
    <div class="seats">
      ${t("p1",n.p1Open)}
      ${t("p2",n.p2Open)}
    </div>
    ${n.resetAvailable?'<p><button data-reset class="ghost">Clear the abandoned board</button></p>':""}`}function Fp(n){return`waiting ${n}s`}var qx=16;function _E(n){return n.length<=qx?{text:n,truncated:!1}:{text:`${n.slice(0,qx)}\u2026`,truncated:!0}}function bE(n,e){let t=(s,o,a)=>{let c=(()=>{if(o||a.length===0)return"";let l=a[0],{text:u,truncated:h}=_E(l);return`<span class="seat-occupant"${h?` title="${Ln(l)}"`:""}>${Ln(u)}</span>`})();return`
    <button class="seat" data-join-table-id="${n.id}" data-join-table="${s}"${n.protected?" data-protected":""} ${o?"":"disabled"}>
      <span class="seat-label">${Ln(e.seatLabel(s))}</span>
      ${c}
    </button>`},i=e.formatOptions?e.formatOptions(n.options):"",r=i?` <span class="variant-badge">${Ln(i)}</span>`:"";return`
    <div class="table-row">
      <span class="table-id">Table #${n.id}${n.protected?' <span class="protected-badge" title="Requires an access code">\u{1F512} Protected</span>':""}${r}</span>
      <span class="muted" data-wait-base="${n.waitingSecs}">${Fp(n.waitingSecs)}</span>
      <div class="table-row-seats">
        ${t("p1",n.p1Open,n.p1Session)}
        ${t("p2",n.p2Open,n.p2Session)}
      </div>
    </div>`}function vE(n,e){let t=s=>`
    <button class="seat" data-create-table="${s}">${Ln(e.seatLabel(s))}</button>`,i=e.optionChoices?.()??[];return`
    <h2>Duel lobby</h2>

    <section class="create-table">
      <h3>Start a new table</h3>
      ${i.length===0?"":`
      <div class="option-group">
        <span class="option-group-label">Rules</span>
        ${i.map((s,o)=>`
        <label><input type="radio" name="table-variant" value="${Ln(s.key)}"${o===0?" checked":""} /> ${Ln(s.label)}</label>`).join("")}
      </div>`}
      <div class="option-group">
        <span class="option-group-label">Visibility</span>
        <label><input type="radio" name="table-visibility" value="open" checked /> Open \u2014 anyone can join</label>
        <label><input type="radio" name="table-visibility" value="code" /> Invite a friend \u2014 a private table you share by link</label>
      </div>
      <div class="seats">
        ${t("p1")}
        ${t("p2")}
      </div>
    </section>

    <section class="open-tables">
      <h3>Tables</h3>
      ${n.tables.length===0?'<p class="muted">No tables right now \u2014 start one above.</p>':n.tables.map(s=>bE(s,e)).join("")}
    </section>`}function wE(n){return`
    <h2>Board in use</h2>
    <p>Another game is under way.</p>
    <p class="countdown">${n.secondsUntilTakeover}s until it can be taken over</p>`}function SE(n,e){let t=jt(n.seat),i="code"in n.visibility?n.visibility.code:null;return`
    <h2>Waiting for an opponent</h2>
    <p>You hold <strong class="seat-label">${Ln(e.seatLabel(t))}</strong>.</p>
    ${n.reservedForPartner?`<p class="muted">The other seat is held for your last opponent for
             a while \u2014 after that anyone may take it.</p>`:i!==null?`<p>Send a friend this table's link. It waits ${kx}
               minutes for them, even while you switch to another app.</p>
             <p><button data-share-invite class="primary">Share invite link</button></p>
             <p class="muted">Or give them this table's number above and the code
               <code class="table-code">${Ln(i)}</code>. Nobody else can join.</p>`:'<p class="muted">Anyone in the lobby can take the other seat.</p>'}
    <p><button data-leave class="ghost">Leave</button></p>`}function EE(n,e){let t=jt(n.openSeat);return`
    <h2>Rematch offered</h2>
    <p>
      Your last opponent wants another game and has held
      <strong class="seat-label">${Ln(e.seatLabel(t))}</strong> for you.
    </p>
    <p>
      <button data-rematch class="primary">Accept rematch</button>
      <button data-leave class="ghost">Decline</button>
    </p>
    <p class="muted">Decline (or ignore it) and the seat opens to anyone.</p>`}var Up="duel-idle-warning";function Dp(n){let e=n/2n;return e<30n?e:30n}function kp(n){return`Still thinking? This game will be interrupted ${n<=0n?"any moment now":`in ${n}s`} if nobody moves.`}var zp="duel-claim-warning",Vp="duel-claim-button";function Gp(n){let e=n/2n;return e<15n?e:15n}function Hp(n){return`Your opponent hasn't moved. You'll be able to claim the win ${n<=0n?"now":`in ${n}s`} if they still haven't.`}function Wp(n){return`You haven't moved yet. Your opponent can claim the win ${n<=0n?"now":`in ${n}s`} if you don't.`}function ME(n){return"turnBased"in n.mode?n.oppSubmitted?"\u25C9 Your turn":"\u25CB Opponent's turn":n.oppSubmitted?"\u25C9 Opponent has locked in":"\u25CB Opponent is deciding"}function TE(n,e){let t=jt(n.seat),i=Hu(t),r="turnBased"in n.mode,s=n.youSubmitted||n.secondsUntilIdleReset>Dp(n.idleTimeoutSecs),o=Wu(n);return`
    <div class="turnbar">
      <span>${r?"Move":"Round"} <strong>${n.step+1n}</strong></span>
      <span class="${n.oppSubmitted?"locked":"muted"}">${ME(n)}</span>
    </div>
    <div class="board">${e.renderBoard(n.game,t,i,!n.youSubmitted)}</div>
    ${n.youSubmitted?`<p class="waiting">${r?"Waiting for your opponent's turn\u2026":"Move locked in \u2014 waiting for your opponent\u2026"}</p>`:`<div class="actions">${e.renderActions(n.game,t)}</div>`}
    <p class="countdown" id="${Up}"${s?" hidden":""}>${kp(n.secondsUntilIdleReset)}</p>
    ${o===null?"":(()=>{let a=o==="waiting"?Hp(n.secondsUntilClaimable):Wp(n.secondsUntilClaimable),c=o==="waiting"&&n.claimWinAvailable||n.secondsUntilClaimable>Gp(n.claimTimeoutSecs),l=o==="waiting"?`
           <p><button id="${Vp}" data-claim-win class="primary"${n.claimWinAvailable?"":" hidden"}>Claim the win</button></p>`:"";return`<p class="countdown" id="${zp}"${c?" hidden":""}>${a}</p>${l}`})()}
    <p><button data-leave data-confirm="Forfeit this game? Your opponent will win." class="ghost">Forfeit</button></p>`}function qp(n,e){let t=jt(n);if(t==="finished"){let i=jt($i(n));return i==="draw"?{title:"It's a draw",outcome:"draw"}:i===`${e}Wins`?{title:"You win",outcome:"win"}:{title:"You lose",outcome:"lose"}}return t==="claimed"?jt($i(n))===e?{title:"You win \u2014 your opponent didn't move in time",outcome:"win"}:{title:"You lose \u2014 you didn't move in time",outcome:"lose"}:{title:jt($i(n))===e?"You walked away":"Your opponent walked away",outcome:"draw"}}function AE(n,e){let t=jt(n.seat),i=Hu(t),{title:r,outcome:s}=qp(n.end,t);return`
    <h2 class="verdict ${s}">${r}</h2>
    <p class="muted">Game lasted ${n.steps} round${n.steps===1n?"":"s"}.</p>
    <div class="board">${e.renderBoard(n.finalGame,t,i)}</div>
    <p>
      <button data-rematch class="primary">Rematch</button>
      <button data-leave class="ghost">Return to lobby</button>
    </p>`}function RE(){return`
    <h2>Your game was ended</h2>
    <p>The board sat idle too long and was reclaimed. Your game is gone.</p>
    <p><button data-ack class="primary">Return to lobby</button></p>`}function CE(){return'<p class="duel-connecting">Connecting\u2026</p>'}function IE(n){return`<div class="table-badge">Table #${n}</div>`}var PE={connecting:CE,browsing:vE,tableBadge:IE,lobby:xE,busy:wE,stagingYou:SE,awaitingRematch:EE,inGame:TE,debrief:AE,endedByOther:RE};function qu(n){return{...PE,...n}}function NE(n,e,t){let i=qu(t),r=jt(n),s=$i(n);switch(r){case"lobby":return i.lobby(s,e);case"busy":return i.busy(s,e);case"stagingYou":return i.stagingYou(s,e);case"awaitingRematch":return i.awaitingRematch(s,e);case"inGame":return i.inGame(s,e);case"debrief":return i.debrief(s,e);case"endedByOther":return i.endedByOther(e);default:return`<p class="error">Unknown view: ${Ln(r)}</p>`}}function $x(n,e,t){let i=qu(t),r=jt(n),s=$i(n);switch(r){case"browsing":return i.browsing(s,e);case"atTable":{let{id:o,view:a}=s;return`${i.tableBadge(o)}${NE(a,e,i)}`}default:return`<p class="error">Unknown status: ${Ln(r)}</p>`}}var Xi=n=>document.getElementById(n);function Xx(n){let e,t;function i(){e!==void 0&&(clearInterval(e),e=void 0),t=void 0}function r(){if(!t||typeof document>"u")return;let o=document.getElementById(n);if(!o)return;let a=BigInt(Math.max(0,Math.floor((Date.now()-t.atMs)/1e3))),c=t.secs>a?t.secs-a:0n;o.hidden=t.hidden(c),o.textContent=t.text(c)}function s(o){if(o===null){i();return}t={secs:o.secs,atMs:Date.now(),hidden:o.hidden,text:o.text},e===void 0&&(e=setInterval(r,1e3),e.unref?.()),r()}return{sync:s}}function OE(n){let e,t;function i(){e!==void 0&&(clearInterval(e),e=void 0),t=void 0}function r(){if(!t||typeof document>"u")return;let o=document.getElementById(n);if(!o)return;let a=BigInt(Math.max(0,Math.floor((Date.now()-t.atMs)/1e3))),c=t.secs>a?t.secs-a:0n;o.hidden=c>0n}function s(o){if(o===null){i();return}t={secs:o.secs,atMs:Date.now()},e===void 0&&(e=setInterval(r,1e3),e.unref?.()),r()}return{sync:s}}function LE(n){let e,t=[];function i(){for(let s of t){let o=BigInt(Math.max(0,Math.floor((Date.now()-s.atMs)/1e3)));s.el.textContent=Fp(s.baseSecs+o)}}function r(){if(t=[...n.querySelectorAll("[data-wait-base]")].map(s=>({el:s,baseSecs:BigInt(s.dataset.waitBase??"0"),atMs:Date.now()})),t.length===0){e!==void 0&&(clearInterval(e),e=void 0);return}i(),e===void 0&&(e=setInterval(i,1e3),e.unref?.())}return{sync:r}}function BE(){let n=document.createElement("div");n.className="duel-confirm-overlay",n.hidden=!0,n.innerHTML=`
    <div class="duel-confirm-box">
      <p class="duel-confirm-msg"></p>
      <div class="duel-confirm-actions">
        <button type="button" class="ghost" data-confirm-no>Cancel</button>
        <button type="button" class="primary" data-confirm-yes>Confirm</button>
      </div>
    </div>`,document.body.appendChild(n);let e=n.querySelector(".duel-confirm-msg"),t=null;return n.addEventListener("click",i=>{let r=i.target,s="confirmYes"in r.dataset;if(!s&&r!==n&&!("confirmNo"in r.dataset))return;let o=t;t=null,n.hidden=!0,o&&o(s)}),(i,r)=>{e.textContent=i,t=r,n.hidden=!1}}function FE(){let n=document.createElement("div");n.className="duel-code-overlay",n.hidden=!0,n.innerHTML=`
    <div class="duel-code-box">
      <p class="duel-code-msg">This table is protected \u2014 enter its access code to join.</p>
      <input type="text" class="duel-code-input" placeholder="access code" />
      <div class="duel-code-actions">
        <button type="button" class="ghost" data-code-cancel>Cancel</button>
        <button type="button" class="primary" data-code-join>Join</button>
      </div>
    </div>`,document.body.appendChild(n);let e=n.querySelector(".duel-code-input"),t=null;return n.addEventListener("click",i=>{let r=i.target,s="codeJoin"in r.dataset;if(!s&&r!==n&&!("codeCancel"in r.dataset))return;let o=t;t=null,n.hidden=!0,o&&o(s?e.value:null)}),i=>{e.value="",t=i,n.hidden=!1,e.focus?.()}}function UE(n=()=>!0){let e=Fx(globalThis.location?.hash??"");return e===null||!n(e)?null:(history.replaceState(history.state,"",location.pathname+location.search),e)}function DE(n,e){let t=()=>{let i=UE(n);i!==null&&e(i)};t(),globalThis.addEventListener?.("hashchange",t)}function kE(n){return location.origin+location.pathname+location.search+Ux(n)}async function zE(n){let e=globalThis.navigator;if(globalThis.matchMedia?.("(pointer: coarse)").matches===!0&&typeof e?.share=="function")try{return await e.share({url:n}),"shared"}catch(i){if(i?.name==="AbortError")return"cancelled"}try{return await e.clipboard.writeText(n),"copied"}catch{return"failed"}}async function VE(n,e,t){let i=await zE(e);if(i==="failed"&&t)return t.showError(`Copy this link: ${e}`);if(i!=="copied"&&i!=="failed")return;let r=n.textContent;n.textContent=i==="copied"?"Link copied":"Could not share",setTimeout(()=>{n.textContent=r},2e3).unref?.()}function Yx(n){return n.dataset.createTable?`create:${n.dataset.createTable}`:n.dataset.joinTable&&n.dataset.joinTableId?`jointable:${n.dataset.joinTableId}:${n.dataset.joinTable}`:n.dataset.act?`act:${n.dataset.act}`:"rematch"in n.dataset?"rematch":"leave"in n.dataset?"leave":"reset"in n.dataset?"reset":"claimWin"in n.dataset?"claim-win":"ack"in n.dataset?"ack":""}function jx({plugin:n,transport:e,session:t,screens:i,confirm:r,promptCode:s,errorTtlMs:o,sidElId:a="sid",newSidBtnId:c="new-sid",screenElId:l="screen",errorElId:u="error",authBtnId:h="duel-auth-btn"}){if(!n)throw new Error("start(): `plugin` is required");if(!e)throw new Error("start(): `transport` is required");if(!t)throw new Error("start(): `session` is required");let f=Xi(l);if(!f)throw new Error(`start(): no element with id "${l}"`);sessionStorage.setItem("sid",t.sid);let p=Xi(a);p&&(p.textContent=t.sid);let g=Wx({transport:e,session:t,errorTtlMs:o}),y=qu(i),m=r?(D,X)=>{r(D).then(X)}:BE(),d=s?D=>{s().then(D)}:FE(),_=Xi(c);_&&(!t.regenerate||t.isLoggedIn?(_.disabled=!0,_.hidden=!0):_.addEventListener("click",()=>{_.disabled||g.regenerateSid()}));let b=Xi(h),v=!!(b&&t.login&&t.logout);b&&v&&(b.textContent=t.isLoggedIn?"Log out":"Log in with Internet Identity",b.disabled=!1,b.addEventListener("click",()=>{b.disabled||(t.isLoggedIn?g.logout():g.login())}));let E=D=>{let X=D.identityLocked;_&&(_.disabled=X),b&&v&&(b.disabled=X)},T=Xi(u),x=D=>{if(T){if(D.connection==="closed"){T.innerHTML='Connection closed. <button type="button" class="ghost" id="duel-reload">Reload to reconnect</button>',T.hidden=!1,Xi("duel-reload")?.addEventListener("click",()=>location.reload());return}if(D.error===null&&D.connection==="reconnecting"){T.textContent="Reconnecting\u2026",T.hidden=!1;return}if(D.error===null){T.hidden=!0;return}T.textContent=D.error,T.hidden=!1}},w=D=>{let X=D.pending?.key??null,te=D.connection==="closed";for(let ie of f.querySelectorAll("button")){let ce=ie;ce.dataset.naturalDisabled===void 0&&(ce.dataset.naturalDisabled=ce.disabled?"1":"0"),te?(ce.disabled=!0,ce.classList.remove("duel-loading")):X!==null?(ce.disabled=!0,ce.classList.toggle("duel-loading",Yx(ce)===X)):(ce.disabled=ce.dataset.naturalDisabled==="1",ce.classList.remove("duel-loading"))}},I=null,R=D=>{I=D,D.dataset.naturalDisabled===void 0&&(D.dataset.naturalDisabled=D.disabled?"1":"0"),D.disabled=!0,D.classList.add("duel-loading")},O=()=>{I?.isConnected&&(I.disabled=I.dataset.naturalDisabled==="1",I.classList.remove("duel-loading")),I=null};f.addEventListener("change",D=>{let X=D.target;if(X instanceof HTMLInputElement&&X.name==="table-visibility"){let te=Xi("create-code");te&&(te.hidden=X.value!=="code")}});let P=()=>f.querySelector('input[name="table-visibility"][value="code"]')?.checked?{code:(Xi("create-code")?.value.trim()??"")||zx()}:{open:null},U=()=>{let D=n.optionChoices?.()??[];if(D.length===0)return{};let X=f.querySelector('input[name="table-variant"]:checked')?.value;return(D.find(te=>te.key===X)??D[0]).options};f.addEventListener("click",D=>{let te=D.target.closest("button");if(!te||te.disabled)return;if("shareInvite"in te.dataset){let ce=Dx(g.getState().status);ce!==null&&VE(te,kE(ce),g);return}if(g.getState().pending!==null)return;let ie=(ce=null)=>{let Ae=null;te.dataset.createTable?Ae=g.createTable(te.dataset.createTable,P(),U()):te.dataset.joinTable&&te.dataset.joinTableId?Ae=g.joinTable(BigInt(te.dataset.joinTableId),te.dataset.joinTable,ce):te.dataset.act?Ae=g.submit(JSON.parse(te.dataset.act)):"rematch"in te.dataset?Ae=g.rematch():"leave"in te.dataset?Ae=g.leave():"reset"in te.dataset?Ae=g.reset():"claimWin"in te.dataset?Ae=g.claimWin():"ack"in te.dataset&&(Ae=g.ackEnded()),Ae!==null&&g.getState().pending?.key===Yx(te)&&R(te)};te.dataset.confirm?m(te.dataset.confirm,ce=>{ce&&ie()}):"protected"in te.dataset?d(ce=>{ce!==null&&ie(ce)}):ie()});let A=Xx(Up),z=Xx(zp),$=OE(Vp),N=LE(f);function j(D){let X=gr(D,"inGame");if(!X||X.youSubmitted){A.sync(null);return}A.sync({secs:X.secondsUntilIdleReset,hidden:te=>te>Dp(X.idleTimeoutSecs),text:kp})}function H(D){let X=gr(D,"inGame"),te=X?Wu(X):null;if(!X||te===null){z.sync(null),$.sync(null);return}let ie=Gp(X.claimTimeoutSecs);z.sync({secs:X.secondsUntilClaimable,hidden:ce=>te==="waiting"&&ce<=0n||ce>ie,text:te==="waiting"?Hp:Wp}),te==="waiting"?$.sync({secs:X.secondsUntilClaimable}):$.sync(null)}let q=()=>{let D=f.querySelector('input[name="table-visibility"]:checked');return D?{visibility:D.value,code:Xi("create-code")?.value??"",variant:f.querySelector('input[name="table-variant"]:checked')?.value??null}:null},B=D=>{let X=f.querySelector('input[name="table-visibility"][value="open"]'),te=f.querySelector('input[name="table-visibility"][value="code"]');if(!X&&!te)return;X&&(X.checked=D.visibility==="open"),te&&(te.checked=D.visibility==="code");let ie=Xi("create-code");if(ie&&(ie.value=D.code,ie.hidden=D.visibility!=="code"),D.variant!==null)for(let ce of f.querySelectorAll('input[name="table-variant"]'))ce.checked=ce.value===D.variant},J=D=>{let X=q();f.innerHTML=$x(D,n,y),X&&B(X),j(D),H(D),N.sync()};f.innerHTML=y.connecting(),DE(D=>D.kind==="join"||D.bot===null,D=>{Gx(g,D,{options:X=>Vx(n,X)})});let se=null,V=n.applyLocal?.bind(n);return g.subscribe((D,X)=>{if(D.status!==X.status||D.pending!==X.pending){let te=Hx(D.status,D.pending,V);te!==se&&te!==null&&J(te),se=te}D.pending!==X.pending&&(document.body.classList.toggle("working",D.pending!==null),D.pending===null&&O()),(D.status!==X.status||D.pending!==X.pending||D.connection!==X.connection)&&w(D),D.identityLocked!==X.identityLocked&&E(D),(D.error!==X.error||D.connection!==X.connection)&&x(D)}),g}var GE=500,HE=2e4,WE=3e3,qE=3,Zx=[500,1500],$E=[0,100,250,500,1e3,0],XE=5e3,Kx=n=>new Promise(e=>setTimeout(e,n)),Jx=n=>"status"in n,Qx=n=>"lobby"in n||"busy"in n,e_=n=>n.reduce((e,t)=>t>e?t:e),YE={notSeated:null},$p=class extends EventTarget{_actor;_types;_intervalMs;_keepAliveMs;_pollTimeoutMs;_sid;_epoch;_focus;_rev;_shown;_last;_linked;_closed;_chain;_inFlight;_statusQueued;_lastKeepAlive;_pollTimer;_ticking;_openPolls;_lastPoll;_erroredSinceSuccess;_consecutiveFailures;_unlisten;onopen;onconnecting;onmessage;onerror;onclose;constructor({actor:e,gameIdlTypes:t,intervalMs:i=GE,keepAliveMs:r=HE,pollTimeoutMs:s=WE}){if(super(),!e)throw new Error("DuelTransport: `actor` is required");if(!t)throw new Error("DuelTransport: `gameIdlTypes` is required");this._actor=e;let{Action:o,View:a,Options:c}=t({IDL:vi});this._types=Np({IDL:vi,Action:o,View:a,Options:c}),this._intervalMs=i,this._keepAliveMs=r,this._pollTimeoutMs=s,this._sid=null,this._epoch=0,this._focus=null,this._rev=0n,this._shown=void 0,this._last=null,this._linked=!1,this._closed=!1,this._chain=Promise.resolve(),this._inFlight=0,this._statusQueued=!1,this._lastKeepAlive=0,this._pollTimer=null,this._ticking=!1,this._openPolls=0,this._lastPoll=null,this._erroredSinceSuccess=!1,this._consecutiveFailures=0,this._unlisten=[],this.onopen=null,this.onconnecting=null,this.onmessage=null,this.onerror=null,this.onclose=null,this._schedule(0),this._listen(globalThis,"pageshow",()=>this._resume()),this._listen(globalThis,"online",()=>this._resume()),typeof document<"u"&&this._listen(document,"visibilitychange",()=>{document.visibilityState!=="hidden"&&this._resume()})}_listen(e,t,i){!e||typeof e.addEventListener!="function"||(e.addEventListener(t,i),this._unlisten.push(()=>e.removeEventListener(t,i)))}_resume(){this._closed||this._schedule(0)}_lose(){this._epoch++,this._linked&&(this._linked=!1,this.onconnecting&&this.onconnecting(),this.dispatchEvent(new Event("connecting")))}_schedule(e){this._closed||(this._pollTimer!=null&&clearTimeout(this._pollTimer),this._pollTimer=setTimeout(()=>this._tick(),e))}_show(e,t,i){this._shown===e&&t<=this._rev&&this._last!==null||(this._shown=e,this._rev=t,this._last={view:i},this._deliver(this._last))}_follow(e){this._focus!==e&&(this._focus=e,this._rev=0n)}async _pollOnce(e){for(let t=0;t<3;t++){if(this._closed||e!==this._sid)return;let i=this._focus;if(i===null){let s=await this._actor.duel_lobby(this._rev);if(this._markAlive(),this._focus!==null||"unchanged"in s)return;let{rev:o,tables:a,yours:c}=s.changed;if(c.length>0){this._follow(e_(c));continue}this._show(null,o,{browsing:{tables:a}});return}let r=await this._actor.duel_table(i,this._rev);if(this._markAlive(),this._focus!==i||"unchanged"in r)return;if("gone"in r||Qx(r.changed.view)){this._follow(null);continue}this._show(i,r.changed.rev,{atTable:{id:i,view:r.changed.view}});return}}_poll(e){if(this._lastPoll===null||this._openPolls<qE){this._openPolls++;let r=this._pollOnce(e).finally(()=>{this._openPolls--});r.catch(()=>{}),this._lastPoll=r}let t,i=new Promise((r,s)=>{t=setTimeout(()=>s(new Error("DuelTransport: poll timed out")),this._pollTimeoutMs)});return Promise.race([this._lastPoll,i]).finally(()=>clearTimeout(t))}_waiting(){let e=this._last;if(e===null||!("view"in e))return!1;let t=e.view;return t.atTable!==void 0&&"stagingYou"in t.atTable.view}async _tick(){if(this._closed||this._ticking)return;this._ticking=!0;let e=this._intervalMs,t=this._sid;if(t!==null){let i=this._inFlight===0;if(!this._linked)i&&this._sendStatus(t),e=Math.min(XE,this._intervalMs*2**Math.min(4,this._consecutiveFailures));else{this._waiting()&&Date.now()-this._lastKeepAlive>=this._keepAliveMs&&(this._lastKeepAlive=Date.now(),this._actor.duel_keep_alive().catch(r=>this._reportError(r)));try{await this._poll(t)}catch(r){this._reportError(r),this._consecutiveFailures>=2&&this._lose()}}}this._ticking=!1,this._schedule(e)}_validate(e){vi.encode([this._types.TransportRequest],[e])}_dispatch(e,t){let i=this._actor;if("createTable"in e){let{seat:r,visibility:s,options:o}=e.createTable;return i.duel_create_table(r,s,o)}if("joinTable"in e){let{id:r,seat:s,code:o}=e.joinTable;return i.duel_join_table(r,s,o)}if(t===null)return Promise.resolve({err:YE});if("submit"in e){let{gen:r,step:s,move:o}=e.submit;return i.duel_submit(t,r,s,o)}return"rematch"in e?i.duel_rematch(t):"leave"in e?i.duel_leave(t,e.leave.gen):"reset"in e?i.duel_reset(t,e.reset.gen):"claimWin"in e?i.duel_claim_win(t,e.claimWin.gen):i.duel_ack_ended(t)}async _await(e,t,i){this._follow(t);for(let r of $E){if(this._closed)throw new Error("DuelTransport: closed");let s=this._shown===t&&this._rev>=i,o=this._focus!==t&&this._shown!==t&&this._shown!==void 0;if((s||o)&&this._last!==null)return this._last;r>0&&await Kx(r),await this._poll(e)}throw new Error("DuelTransport: no view at the acked revision")}async _resync(e){if(this._follow(null),this._rev=0n,this._shown=this._shown===null?void 0:this._shown,await this._poll(e),this._last===null)throw new Error("DuelTransport: no status");return this._last}async _call(e,t){let i=this._epoch;if(Jx(t))try{let s=await this._resync(e);return i===this._epoch&&this._markLinked(),{payload:s,resent:!1}}catch(s){throw this._reportError(s),this._lose(),s}let r=this._focus;for(let s=0;;s++){if(this._closed)throw new Error("DuelTransport: closed");let o;try{o=await this._dispatch(t,r)}catch(c){if(this._reportError(c),s>=Zx.length)throw this._lose(),c;await Kx(Zx[s]);continue}if(this._markAlive(),"err"in o)return{payload:{err:o.err},resent:s>0};let a;if("ok"in o)try{a=await this._await(e,o.ok.tableId,o.ok.rev)}catch(c){throw this._reportError(c),this._lose(),c}else{let c=r;this._follow(c),this._show(c,o.view.rev,{atTable:{id:c,view:o.view.view}}),a=this._last}return i===this._epoch&&this._markLinked(),{payload:a,resent:s>0}}}async _exchange(e,t){let{payload:i,resent:r}=await this._call(e,t);return r&&"err"in i&&("alreadySubmitted"in i.err||"stale"in i.err)&&({payload:i}=await this._call(e,{status:null})),"err"in i&&this._deliver(i),i}_enqueue(e,t){this._validate(t),this._sid=e,this._inFlight++;let i=this._chain.then(()=>this._exchange(e,t));return this._chain=i.then(()=>{},()=>{}),this._chain.then(()=>{this._inFlight--}),i}_sendStatus(e){this._statusQueued||(this._statusQueued=!0,this._enqueue(e,{status:null}).then(()=>{this._statusQueued=!1},()=>{this._statusQueued=!1}))}_markLinked(){this._linked||(this._linked=!0,this.onopen&&this.onopen(),this.dispatchEvent(new Event("open")))}send(e){if(this._closed)return;let t=e?.req;if(!t)return;let{sid:i,req:r}=t;if(Jx(r)){this._sid=i,this._sendStatus(i);return}try{this._enqueue(i,r).catch(()=>{})}catch(s){this._reportError(s)}}request(e,t){if(this._closed)return Promise.reject(new Error("DuelTransport: closed"));try{return this._enqueue(e,t)}catch(i){return Promise.reject(i)}}async queryStatus(e){let t=await this._actor.duel_lobby(0n);if(!("changed"in t))throw new Error("DuelTransport: no lobby");let{tables:i,yours:r}=t.changed;if(r.length>0){let s=e_(r),o=await this._actor.duel_table(s,0n);if("changed"in o&&!Qx(o.changed.view))return{atTable:{id:s,view:o.changed.view}}}return{browsing:{tables:i}}}get closed(){return this._closed}close(){if(!this._closed){this._closed=!0,this._pollTimer!=null&&clearTimeout(this._pollTimer);for(let e of this._unlisten)e();this._unlisten=[],this.onclose&&this.onclose(),this.dispatchEvent(new Event("close"))}}_deliver(e){this._closed||(this.onmessage&&this.onmessage({data:e}),this.dispatchEvent(new MessageEvent("message",{data:e})))}_markAlive(){this._erroredSinceSuccess=!1,this._consecutiveFailures=0}_reportError(e){console.debug("[duel-transport] error:",e&&e.message?e.message:e),this._consecutiveFailures++,!(this._consecutiveFailures<2)&&(this._erroredSinceSuccess||(this._erroredSinceSuccess=!0,this.onerror&&this.onerror({error:e}),this.dispatchEvent(new Event("error"))))}};function t_(n){return new $p(n)}function n_(n){return n!==null&&typeof n=="object"}var Qa=class n{static from(e){if(typeof e=="string"){let t=$t(e);return this.fromRaw(t)}if(n_(e)){let t=e;if(n_(t)&&Object.hasOwnProperty.call(t,"__derEncodedPublicKey__"))return this.fromDer(t);if(ArrayBuffer.isView(t)){let i=t;return this.fromRaw(mo(i.buffer))}if(t instanceof ArrayBuffer)return this.fromRaw(mo(t));if("rawKey"in t&&t.rawKey instanceof Uint8Array)return this.fromRaw(t.rawKey);if("derKey"in t)return this.fromDer(t.derKey);if("toDer"in t)return this.fromDer(t.toDer())}throw new Error("Cannot construct Ed25519PublicKey from the provided key.")}static fromRaw(e){return new n(e)}static fromDer(e){return new n(this.derDecode(e))}static{this.RAW_KEY_LENGTH=32}static derEncode(e){let t=Nu(e,Io);return t.__derEncodedPublicKey__=void 0,t}static derDecode(e){let t=Ou(e,Io);if(t.length!==this.RAW_KEY_LENGTH)throw new Error("An Ed25519 public key must be exactly 32bytes long");return t}#e;get rawKey(){return this.#e}#t;get derKey(){return this.#t}constructor(e){if(e.byteLength!==n.RAW_KEY_LENGTH)throw new Error("An Ed25519 public key must be exactly 32bytes long");this.#e=e.slice(),this.#t=n.derEncode(this.#e)}toDer(){return this.derKey}toRaw(){return this.rawKey}},ec=class n extends Su{static generate(e){if(e&&e.length!==32)throw new Error("Ed25519 Seed needs to be 32 bytes long.");e?e=e.slice():e=Jr.utils.randomSecretKey(),xg(e,new Uint8Array(new Array(32).fill(0)))&&console.warn("Seed is all zeros. This is not a secure seed. Please provide a seed with sufficient entropy if this is a production environment.");let t=new Uint8Array(32);for(let r=0;r<32;r++)t[r]=e[r];let i=Jr.getPublicKey(t);return n.fromKeyPair(i,t)}static fromParsedJson(e){let[t,i]=e;return new n(Qa.fromDer($t(t)),$t(i))}static fromJSON(e){let t=JSON.parse(e);if(Array.isArray(t)){if(typeof t[0]=="string"&&typeof t[1]=="string")return this.fromParsedJson([t[0],t[1]]);throw new Error("Deserialization error: JSON must have at least 2 items.")}throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(e)}`)}static fromKeyPair(e,t){return new n(Qa.fromRaw(e),t)}static fromSecretKey(e){let t=Jr.getPublicKey(e);return n.fromKeyPair(t,e)}#e;#t;constructor(e,t){super(),this.#e=Qa.from(e),this.#t=t.slice()}toJSON(){return[ft(this.#e.toDer()),ft(this.#t)]}getKeyPair(){return{secretKey:this.#t,publicKey:this.#e}}getPublicKey(){return this.#e}async sign(e){let t=Jr.sign(e,this.#t.slice(0,32));return Object.defineProperty(t,"__signature__",{enumerable:!1,value:void 0}),t}static verify(e,t,i){let[r,s,o]=[e,t,i].map(a=>(typeof a=="string"&&(a=$t(a)),mo(a)));return Jr.verify(r,s,o)}};var jE="an:";function ZE(n,e){return n+e}var s_="anon-identity";function i_(n){try{return globalThis[n]??null}catch{return null}}function r_(n){try{let e=n?.getItem(s_);return e?ec.fromParsedJson(JSON.parse(e)):null}catch{return null}}function KE(n,e){try{return n===null?!1:(n.setItem(s_,JSON.stringify(e.toJSON())),!0)}catch{return!1}}function JE(){let n=r_(i_("sessionStorage"));if(n)return n;let e=i_("localStorage"),t=r_(e);if(t)return t;let i=ec.generate();return KE(e,i),i}function o_(){let n=JE(),e=n.getPrincipal();return{identity:n,principal:e,sid:ZE(jE,e.toText())}}function a_(){let{protocol:n,hostname:e,port:t}=window.location;if(e.endsWith("localhost"))return`${n}//localhost${t?":"+t:""}`;if(e.endsWith(".icp0.io")||e.endsWith(".ic0.app")){let i=e.indexOf(".");return`${n}//${e.slice(i+1)}${t?":"+t:""}`}return e.endsWith(".icp.net")?`${n}//${e}${t?":"+t:""}`:"https://icp-api.io"}var rn=["carrier","battleship","cruiser","submarine","destroyer"],ai={carrier:5,battleship:4,cruiser:3,submarine:3,destroyer:2},Xu={carrier:"Carrier",battleship:"Battleship",cruiser:"Cruiser",submarine:"Submarine",destroyer:"Destroyer"},$u=n=>Object.keys(n)[0],c_=n=>({kind:$u(n.kind),x:Number(n.x),y:Number(n.y),horizontal:n.horizontal}),No=n=>({kind:{[n.kind]:null},x:BigInt(n.x),y:BigInt(n.y),horizontal:n.horizontal});function tc(n){let e=i=>({placed:i.placed,ships:i.ships.map(c_),shots:i.shots.map(r=>({x:Number(r.x),y:Number(r.y),hit:r.hit})),sunk:Number(i.sunk)}),t=n.last.length?{by:$u(n.last[0].by),x:Number(n.last[0].x),y:Number(n.last[0].y),hit:n.last[0].hit,sunk:n.last[0].sunk.length?c_(n.last[0].sunk[0]):null}:null;return{phase:$u(n.phase),toMove:$u(n.toMove),you:e(n.you),opp:e(n.opp),last:t}}function Mi(n){let e=[];for(let t=0;t<ai[n.kind];t++)e.push(n.horizontal?{x:n.x+t,y:n.y}:{x:n.x,y:n.y+t});return e}function QE(n){let e=ai[n.kind];return n.x>=0&&n.y>=0&&n.x<10&&n.y<10&&(n.horizontal?n.x+e<=10:n.y+e<=10)}var l_=(n,e)=>n.x===e.x&&n.y===e.y,ci=(n,e)=>n.some(t=>l_(e,t));function Oo(n,e){if(!QE(n))return!1;let t=e.flatMap(Mi);return Mi(n).every(i=>!ci(t,i))}function Xp(n){if(n.length!==rn.length)return"Place all five ships.";for(let e of rn)if(n.filter(t=>t.kind===e).length!==1)return"One ship of each kind.";for(let e=0;e<n.length;e++)if(!Oo(n[e],n.filter((t,i)=>i!==e)))return"A ship is off the grid or overlapping.";return null}var u_=(n,e)=>n.find(t=>ci(Mi(t),e));function Hs(n=[],e=Math.random){for(let t=0;t<200;t++){let i=[...n],r=!0;for(let s of rn){if(i.some(a=>a.kind===s))continue;let o=!1;for(let a=0;a<200&&!o;a++){let c=e()<.5,l=ai[s],u=Math.floor(e()*(c?10-l+1:10)),h=Math.floor(e()*(c?10:10-l+1)),f={kind:s,x:u,y:h,horizontal:c};Oo(f,i)&&(i.push(f),o=!0)}if(!o){r=!1;break}}if(r)return rn.map(s=>i.find(o=>o.kind===s))}throw new Error("randomFleet: could not place the fleet")}var Yu=(n,e)=>`${"ABCDEFGHIJ"[n]}${e+1}`;var eM={p1:"Admiral One",p2:"Admiral Two"},nc={idlTypes({IDL:n}){let e=n.Variant({p1:n.Null,p2:n.Null}),t=n.Variant({carrier:n.Null,battleship:n.Null,cruiser:n.Null,submarine:n.Null,destroyer:n.Null}),i=n.Record({kind:t,x:n.Nat,y:n.Nat,horizontal:n.Bool}),r=n.Record({x:n.Nat,y:n.Nat,hit:n.Bool}),s=n.Record({placed:n.Bool,ships:n.Vec(i),shots:n.Vec(r),sunk:n.Nat}),o=n.Record({by:e,x:n.Nat,y:n.Nat,hit:n.Bool,sunk:n.Opt(i)}),a=n.Variant({place:n.Vec(i),fire:n.Record({x:n.Nat,y:n.Nat})}),c=n.Record({phase:n.Variant({placing:n.Null,battle:n.Null}),toMove:e,you:s,opp:s,last:n.Opt(o)}),l=n.Record({});return{Action:a,View:c,Options:l}},seatLabel(n){return eM[n]},renderBoard(n,e){let t=tc(n),i=t.opp.shots,r=i.filter(o=>o.hit).length,s=i.length?Math.round(100*r/i.length):0;return`<div class="tally" data-seat="${Ln(e)}">
      <span>Your fleet <b>${rn.length-t.you.sunk}/${rn.length}</b></span>
      <span>Enemy fleet <b>${rn.length-t.opp.sunk}/${rn.length}</b></span>
      <span>Shots <b>${i.length}</b> \xB7 hits <b>${r}</b> \xB7 ${s}%</span>
    </div>`},renderActions(){return""},applyLocal(n,e,t){return"place"in t&&e==="p1"&&"placing"in n.phase?{...n,toMove:{p2:null},you:{...n.you,placed:!0,ships:t.place}}:null},legalMoves(n,e){let t=tc(n);if(t.toMove!==e)return{enabled:[],disabled:[]};if(t.phase==="placing"){let s=Hs().map(o=>({...o,x:0,y:0,horizontal:!0}));return{enabled:[{place:Hs().map(No)},{place:Hs().map(No)}],disabled:[{place:s.map(No)}]}}let i=[];for(let s=0;s<10;s++)for(let o=0;o<10;o++)ci(t.opp.shots,{x:o,y:s})||i.push({fire:{x:BigInt(o),y:BigInt(s)}});let r=[{fire:{x:BigInt(10),y:0n}}];return t.opp.shots.length&&r.push({fire:{x:BigInt(t.opp.shots[0].x),y:BigInt(t.opp.shots[0].y)}}),{enabled:i,disabled:r}}};var W_=0,Om=1,q_=2;var Vc=1,$_=2,ca=3,fs=0,xn=1,er=2,eo=0,ps=1,to=2,Lm=3,Bm=4,X_=5;var no=100,Y_=101,j_=102,Z_=103,K_=104,J_=200,Q_=201,eb=202,tb=203,Fm=204,Um=205,nb=206,ib=207,rb=208,sb=209,ob=210,ab=211,cb=212,lb=213,ub=214,vh=0,wh=1,Sh=2,Yo=3,Eh=4,Mh=5,Th=6,Ah=7,Dm=0,hb=1,db=2,tr=0,km=1,zm=2,Vm=3,Gc=4,Gm=5,Hm=6,Wm=7;var qm=300,io=301,la=302,rd=303,sd=304,Rh=1e3,ji=1001,Ch=1002,hn=1003,fb=1004;var Hc=1005;var Fn=1006,od=1007;var Rr=1008;var Wn=1009,$m=1010,Xm=1011,ua=1012,ad=1013,Ci=1014,Ii=1015,Pi=1016,cd=1017,ld=1018,ro=1020,Ym=35902,jm=35899,Zm=1021,Km=1022,Ni=1023,Sr=1026,Cr=1027,Jm=1028,ud=1029,ms=1030,hd=1031;var dd=1033,Wc=33776,qc=33777,$c=33778,Xc=33779,fd=35840,pd=35841,md=35842,gd=35843,yd=36196,xd=37492,_d=37496,bd=37488,vd=37489,Yc=37490,wd=37491,Sd=37808,Ed=37809,Md=37810,Td=37811,Ad=37812,Rd=37813,Cd=37814,Id=37815,Pd=37816,Nd=37817,Od=37818,Ld=37819,Bd=37820,Fd=37821,Ud=36492,Dd=36494,kd=36495,zd=36283,Vd=36284,jc=36285,Gd=36286;var hc=2300,Ih=2301,_h=2302,_m=2303,bm=2400,vm=2401,wm=2402;var pb=3200;var Hd=0,mb=1,Ir="",gn="srgb",dc="srgb-linear",fc="linear",St="srgb";var bh=7680;var gb=519,yb=512,xb=513,_b=514,Qm=515,bb=516,vb=517,e0=518,t0=519,wb=35044,ha=35048;var n0="300 es",ui=2e3,jo=2001;function tM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sb(){let n=pc("canvas");return n.style.display="block",n}var h_={},Zo=null;function i0(...n){let e="THREE."+n.shift();Zo?Zo("log",e,...n):console.log(e,...n)}function Eb(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=Eb(n);let e="THREE."+n.shift();if(Zo)Zo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Eb(n);let e="THREE."+n.shift();if(Zo)Zo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cc(...n){let e=n.join(" ");e in h_||(h_[e]=!0,$e(...n))}function Mb(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Tb={[vh]:vh,[Sh]:Th,[Eh]:Eh,[Yo]:Mh,[wh]:wh,[Th]:Sh,[Ah]:Ah,[Mh]:Yo},Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yp=Math.PI/180,Ph=180/Math.PI;function da(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function iM(n,e){return(n%e+e)%e}function jp(n,e,t){return(1-t)*n+t*e}function Ab(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r0(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rM(n,e){if(e.constructor===Float32Array)return n;let t=r0(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function sM(n,e){if(e.constructor===Float32Array)return n;let t=r0(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ji=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(h!==y||c!==f||l!==p||u!==g){let m=c*f+l*p+u*g+h*y;m<0&&(f=-f,p=-p,g=-g,y=-y,m=-m);let d=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);d=Math.sin(d*_)/b,a=Math.sin(a*_)/b,c=c*d+f*a,l=l*d+p*a,u=u*d+g*a,h=h*d+y*a}else{c=c*d+f*a,l=l*d+p*a,u=u*d+g*a,h=h*d+y*a;let _=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=_,l*=_,u*=_,h*=_}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){let p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(d_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(d_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zp.copy(this).projectOnVector(e),this.sub(Zp)}reflect(e){return this.sub(Zp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zp=new W,d_=new Ji,Ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],_=r[1],b=r[4],v=r[7],E=r[2],T=r[5],x=r[8];return s[0]=o*y+a*_+c*E,s[3]=o*m+a*b+c*T,s[6]=o*d+a*v+c*x,s[1]=l*y+u*_+h*E,s[4]=l*m+u*b+h*T,s[7]=l*d+u*v+h*x,s[2]=f*y+p*_+g*E,s[5]=f*m+p*b+g*T,s[8]=f*d+p*v+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return cc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kp.makeScale(e,t)),this}rotate(e){return cc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kp.makeRotation(-e)),this}translate(e,t){return cc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kp=new Ze,f_=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){let n={enabled:!0,workingColorSpace:dc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=Xo(r.r),r.g=Xo(r.g),r.b=Xo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[dc]:{primaries:e,whitePoint:i,transfer:fc,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:f_,fromXYZ:p_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}var ut=oM();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Lo,Nh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Lo===void 0&&(Lo=pc("canvas")),Lo.width=e.width,Lo.height=e.height;let r=Lo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Lo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},aM=0,Ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jp(r[o].image)):s.push(Jp(r[o]))}else s=Jp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Jp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var cM=0,Qp=new W,Un=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ji,r=ji,s=Fn,o=Rr,a=Ni,c=Wn,l=n.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=da(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qp).x}get height(){return this.source.getSize(Qp).y}get depth(){return this.source.getSize(Qp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=qm;Un.DEFAULT_ANISOTROPY=1;var Bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(p+1)/2,E=(d+1)/2,T=(u+f)/4,x=(h+y)/4,w=(g+m)/4;return b>v&&b>E?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=x/i):v>E?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=w/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=x/s,r=w/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-y)/_,this.z=(f-u)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oh=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Un({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Oh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mc=class extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lh=class extends Un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ct=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,c,l,u,h,f,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,f,p,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,h,f,p,g,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Bo.setFromMatrixColumn(e,0).length(),s=1/Bo.setFromMatrixColumn(e,1).length(),o=1/Bo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,y=l*h;t[0]=f-y*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,y=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+y,t[1]=c*h,t[5]=y*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+y,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,uM)}lookAt(e,t,i){let r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ts.crossVectors(i,Kn),ts.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ts.crossVectors(i,Kn)),ts.normalize(),ju.crossVectors(Kn,ts),r[0]=ts.x,r[4]=ju.x,r[8]=Kn.x,r[1]=ts.y,r[5]=ju.y,r[9]=Kn.y,r[2]=ts.z,r[6]=ju.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],_=i[3],b=i[7],v=i[11],E=i[15],T=r[0],x=r[4],w=r[8],I=r[12],R=r[1],O=r[5],P=r[9],U=r[13],A=r[2],z=r[6],$=r[10],N=r[14],j=r[3],H=r[7],q=r[11],B=r[15];return s[0]=o*T+a*R+c*A+l*j,s[4]=o*x+a*O+c*z+l*H,s[8]=o*w+a*P+c*$+l*q,s[12]=o*I+a*U+c*N+l*B,s[1]=u*T+h*R+f*A+p*j,s[5]=u*x+h*O+f*z+p*H,s[9]=u*w+h*P+f*$+p*q,s[13]=u*I+h*U+f*N+p*B,s[2]=g*T+y*R+m*A+d*j,s[6]=g*x+y*O+m*z+d*H,s[10]=g*w+y*P+m*$+d*q,s[14]=g*I+y*U+m*N+d*B,s[3]=_*T+b*R+v*A+E*j,s[7]=_*x+b*O+v*z+E*H,s[11]=_*w+b*P+v*$+E*q,s[15]=_*I+b*U+v*N+E*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15],_=c*p-l*f,b=a*p-l*h,v=a*f-c*h,E=o*p-l*u,T=o*f-c*u,x=o*h-a*u;return t*(y*_-m*b+d*v)-i*(g*_-m*E+d*T)+r*(g*b-y*E+d*x)-s*(g*v-y*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(s*u-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],_=t*a-i*o,b=t*c-r*o,v=t*l-s*o,E=i*c-r*a,T=i*l-s*a,x=r*l-s*c,w=u*y-h*g,I=u*m-f*g,R=u*d-p*g,O=h*m-f*y,P=h*d-p*y,U=f*d-p*m,A=_*U-b*P+v*O+E*R-T*I+x*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/A;return e[0]=(a*U-c*P+l*O)*z,e[1]=(r*P-i*U-s*O)*z,e[2]=(y*x-m*T+d*E)*z,e[3]=(f*T-h*x-p*E)*z,e[4]=(c*R-o*U-l*I)*z,e[5]=(t*U-r*R+s*I)*z,e[6]=(m*v-g*x-d*b)*z,e[7]=(u*x-f*v+p*b)*z,e[8]=(o*P-a*R+l*w)*z,e[9]=(i*R-t*P-s*w)*z,e[10]=(g*T-y*v+d*_)*z,e[11]=(h*v-u*T-p*_)*z,e[12]=(a*I-o*O-c*w)*z,e[13]=(t*O-i*I+r*w)*z,e[14]=(y*b-g*E-m*_)*z,e[15]=(u*E-h*b+f*_)*z,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,g=s*h,y=o*u,m=o*h,d=a*h,_=c*l,b=c*u,v=c*h,E=i.x,T=i.y,x=i.z;return r[0]=(1-(y+d))*E,r[1]=(p+v)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(f+d))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+b)*x,r[9]=(m-_)*x,r[10]=(1-(f+y))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Bo.set(r[0],r[1],r[2]).length(),a=Bo.set(r[4],r[5],r[6]).length(),c=Bo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ti.copy(this);let l=1/o,u=1/a,h=1/c;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,t.setFromRotationMatrix(Ti),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=ui,c=!1){let l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r),g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===ui)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===jo)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r),g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===ui)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===jo)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Bo=new W,Ti=new Ct,lM=new W(0,0,0),uM=new W(1,1,1),ts=new W,ju=new W,Kn=new W,m_=new Ct,g_=new Ji,Er=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Er.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hM=0,y_=new W,Fo=new Ji,yr=new Ct,Zu=new W,ic=new W,dM=new W,fM=new Ji,x_=new W(1,0,0),__=new W(0,1,0),b_=new W(0,0,1),v_={type:"added"},pM={type:"removed"},Uo={type:"childadded",child:null},em={type:"childremoved",child:null},yn=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new W,t=new Er,i=new Ji,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fo.setFromAxisAngle(e,t),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(e,t){return Fo.setFromAxisAngle(e,t),this.quaternion.premultiply(Fo),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zu.copy(e):Zu.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(ic,Zu,this.up):yr.lookAt(Zu,ic,this.up),this.quaternion.setFromRotationMatrix(yr),r&&(yr.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(yr),this.quaternion.premultiply(Fo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pM),em.child=e,this.dispatchEvent(em),em.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new W(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mM={type:"move"},Qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function tm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=iM(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=tm(o,s,e+1/3),this.g=tm(o,s,e),this.b=tm(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let i=Rb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return ut.workingToColorSpace(En.copy(this),e),Math.round(at(En.r*255,0,255))*65536+Math.round(at(En.g*255,0,255))*256+Math.round(at(En.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(En.copy(this),t);let i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=gn){ut.workingToColorSpace(En.copy(this),e);let t=En.r,i=En.g,r=En.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ku);let i=jp(ns.h,Ku.h,t),r=jp(ns.s,Ku.s,t),s=jp(ns.l,Ku.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new st;st.NAMES=Rb;var gc=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ai=new W,xr=new W,nm=new W,_r=new W,Do=new W,ko=new W,w_=new W,im=new W,rm=new W,sm=new W,om=new Bt,am=new Bt,cm=new Bt,os=class n{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ai.subVectors(e,t),r.cross(Ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ai.subVectors(r,t),xr.subVectors(i,t),nm.subVectors(e,t);let o=Ai.dot(Ai),a=Ai.dot(xr),c=Ai.dot(nm),l=xr.dot(xr),u=xr.dot(nm),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,_r)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_r.x),c.addScaledVector(o,_r.y),c.addScaledVector(a,_r.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return om.setScalar(0),am.setScalar(0),cm.setScalar(0),om.fromBufferAttribute(e,t),am.fromBufferAttribute(e,i),cm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(om,s.x),o.addScaledVector(am,s.y),o.addScaledVector(cm,s.z),o}static isFrontFacing(e,t,i,r){return Ai.subVectors(i,t),xr.subVectors(e,t),Ai.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Ai.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Do.subVectors(r,i),ko.subVectors(s,i),im.subVectors(e,i);let c=Do.dot(im),l=ko.dot(im);if(c<=0&&l<=0)return t.copy(i);rm.subVectors(e,r);let u=Do.dot(rm),h=ko.dot(rm);if(u>=0&&h<=u)return t.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(i).addScaledVector(Do,o);sm.subVectors(e,s);let p=Do.dot(sm),g=ko.dot(sm);if(g>=0&&p<=g)return t.copy(s);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ko,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return w_.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(w_,a);let d=1/(m+y+f);return o=y*d,a=f*d,t.copy(i).addScaledVector(Do,o).addScaledVector(ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},as=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ju.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ju.copy(i.boundingBox)),Ju.applyMatrix4(e.matrixWorld),this.union(Ju)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rc),Qu.subVectors(this.max,rc),zo.subVectors(e.a,rc),Vo.subVectors(e.b,rc),Go.subVectors(e.c,rc),is.subVectors(Vo,zo),rs.subVectors(Go,Vo),Ws.subVectors(zo,Go);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Ws.z,Ws.y,is.z,0,-is.x,rs.z,0,-rs.x,Ws.z,0,-Ws.x,-is.y,is.x,0,-rs.y,rs.x,0,-Ws.y,Ws.x,0];return!lm(t,zo,Vo,Go,Qu)||(t=[1,0,0,0,1,0,0,0,1],!lm(t,zo,Vo,Go,Qu))?!1:(eh.crossVectors(is,rs),t=[eh.x,eh.y,eh.z],lm(t,zo,Vo,Go,Qu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},br=[new W,new W,new W,new W,new W,new W,new W,new W],Ri=new W,Ju=new as,zo=new W,Vo=new W,Go=new W,is=new W,rs=new W,Ws=new W,rc=new W,Qu=new W,eh=new W,qs=new W;function lm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qs.fromArray(n,s);let a=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),c=e.dot(qs),l=t.dot(qs),u=i.dot(qs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var en=new W,th=new ge,gM=0,Bn=class extends Ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wb,this.updateRanges=[],this.gpuType=Ii,this.version=0,this._normalizationScale=e!==void 0?r0(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)th.fromBufferAttribute(this,t),th.applyMatrix3(e),this.setXY(t,th.x,th.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rM(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sM(e,this.array)}};var yc=class extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xc=class extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _t=class extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}},yM=new as,sc=new W,um=new W,Ys=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sc.subVectors(e,this.center);let t=sc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(um.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sc.copy(e.center).add(um)),this.expandByPoint(sc.copy(e.center).sub(um))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xM=0,li=new Ct,hm=new yn,Ho=new W,Jn=new as,oc=new as,un=new W,dn=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tM(e)?xc:yc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return hm.lookAt(e),hm.updateMatrix(),this.applyMatrix4(hm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];oc.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Jn.min,oc.min),Jn.expandByPoint(un),un.addVectors(Jn.max,oc.max),Jn.expandByPoint(un)):(Jn.expandByPoint(oc.min),Jn.expandByPoint(oc.max))}Jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)un.fromBufferAttribute(a,l),c&&(Ho.fromBufferAttribute(e,l),un.add(Ho)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(i.count);for(let I=0;I<i.count;I++)a[I]=new W,c[I]=new W;let u=new W,h=new W,f=new W,p=new ge,g=new ge,y=new ge,m=new W,d=new W;function _(I,R,O){l[I]=l[R]=l[O]=1,u.fromBufferAttribute(i,I),h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,O),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,R),y.fromBufferAttribute(s,O),h.sub(u),f.sub(u),g.sub(p),y.sub(p);let P=1/(g.x*y.y-y.x*g.y);isFinite(P)&&(m.copy(h).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(P),d.copy(f).multiplyScalar(g.x).addScaledVector(h,-y.x).multiplyScalar(P),a[I].add(m),a[R].add(m),a[O].add(m),c[I].add(d),c[R].add(d),c[O].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,R=b.length;I<R;++I){let O=b[I],P=O.start,U=O.count;for(let A=P,z=P+U;A<z;A+=3)_(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let v=new W,E=new W,T=new W,x=new W;function w(I){T.fromBufferAttribute(r,I),x.copy(T);let R=a[I];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),E.crossVectors(x,R);let P=E.dot(c[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,R=i.count;I<R;++I)l[I]&&w(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Bn(f,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dm=new W,_M=new W,bM=new Ze,Qn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=dm.subVectors(i,t).cross(_M.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(dm),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bM.getNormalMatrix(e),r=this.coplanarPoint(dm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vM=0,Mr=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=da(),this.name="",this.type="Material",this.blending=ps,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fm,this.blendDst=Um,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bh,this.stencilZFail=bh,this.stencilZPass=bh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var vr=new W,fm=new W,nh=new W,ih=new W,ea=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fm.copy(e).add(t).multiplyScalar(.5),nh.copy(t).sub(e).normalize(),ih.copy(this.origin).sub(fm);let s=e.distanceTo(t)*.5,o=-this.direction.dot(nh),a=ih.dot(this.direction),c=-ih.dot(nh),l=ih.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fm).addScaledVector(nh,f),p}intersectSphere(e,t){if(e.radius<0)return null;vr.subVectors(e.center,this.origin);let i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,p=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,d=i.x-o.x,_=i.y-o.y,b=i.z-o.z,v=Math.abs(c),E=Math.abs(l),T=Math.abs(u),x,w,I,R,O,P,U,A,z,$,N,j;if(v>=E&&v>=T?(I=c,P=h,z=g,j=d,c>=0?(x=l,w=u,R=f,O=p,U=y,A=m,$=_,N=b):(x=u,w=l,R=p,O=f,U=m,A=y,$=b,N=_)):E>=T?(I=l,P=f,z=y,j=_,l>=0?(x=u,w=c,R=p,O=h,U=m,A=g,$=b,N=d):(x=c,w=u,R=h,O=p,U=g,A=m,$=d,N=b)):(I=u,P=p,z=m,j=b,u>=0?(x=c,w=l,R=h,O=f,U=g,A=y,$=d,N=_):(x=l,w=c,R=f,O=h,U=y,A=g,$=_,N=d)),I===0)return null;let H=x/I,q=w/I,B=1/I,J=R-H*P,se=O-q*P,V=U-H*z,D=A-q*z,X=$-H*j,te=N-q*j,ie=X*D-te*V,ce=J*te-se*X,Ae=V*se-D*J;if(r){if(ie<0||ce<0||Ae<0)return null}else if((ie<0||ce<0||Ae<0)&&(ie>0||ce>0||Ae>0))return null;let Ee=ie+ce+Ae;if(Ee===0)return null;let Le=B*(ie*P+ce*z+Ae*j);return(Ee>0?Le<0:Le>0)?null:this.at(Le/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},S_=new Ct,$s=new ea,rh=new Ys,E_=new W,sh=new W,oh=new W,ah=new W,pm=new W,ch=new W,M_=new W,lh=new W,Tt=class extends yn{constructor(e=new dn,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ch.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(pm.fromBufferAttribute(h,e),o?ch.addScaledVector(pm,u):ch.addScaledVector(pm.sub(t),u))}t.add(ch)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rh.copy(i.boundingSphere),rh.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(rh.containsPoint($s.origin)===!1&&($s.intersectSphere(rh,E_)===null||$s.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(S_.copy(s).invert(),$s.copy(e.ray).applyMatrix4(S_),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=b;v<E;v+=3){let T=a.getX(v),x=a.getX(v+1),w=a.getX(v+2);r=uh(this,d,e,i,l,u,h,T,x,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let _=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=uh(this,o,e,i,l,u,h,_,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=b;v<E;v+=3){let T=v,x=v+1,w=v+2;r=uh(this,d,e,i,l,u,h,T,x,w),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let _=m,b=m+1,v=m+2;r=uh(this,o,e,i,l,u,h,_,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function wM(n,e,t,i,r,s,o,a){let c;if(e.side===xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===fs,a),c===null)return null;lh.copy(a),lh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(lh);return l<t.near||l>t.far?null:{distance:l,point:lh.clone(),object:n}}function uh(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,sh),n.getVertexPosition(c,oh),n.getVertexPosition(l,ah);let u=wM(n,e,t,i,sh,oh,ah,M_);if(u){let h=new W;os.getBarycoord(M_,sh,oh,ah,h),r&&(u.uv=os.getInterpolatedAttribute(r,a,c,l,h,new ge)),s&&(u.uv1=os.getInterpolatedAttribute(s,a,c,l,h,new ge)),o&&(u.normal=os.getInterpolatedAttribute(o,a,c,l,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new W,materialIndex:0};os.getNormal(sh,oh,ah,f.normal),u.face=f,u.barycoord=h}return u}var Bh=class extends Un{constructor(e=null,t=1,i=1,r,s,o,a,c,l=hn,u=hn,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xs=new Ys,SM=new ge(.5,.5),hh=new W,cs=class{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],y=s[9],m=s[10],d=s[11],_=s[12],b=s[13],v=s[14],E=s[15];if(r[0].setComponents(l-o,p-u,d-g,E-_).normalize(),r[1].setComponents(l+o,p+u,d+g,E+_).normalize(),r[2].setComponents(l+a,p+h,d+y,E+b).normalize(),r[3].setComponents(l-a,p-h,d-y,E-b).normalize(),i)r[4].setComponents(c,f,m,v).normalize(),r[5].setComponents(l-c,p-f,d-m,E-v).normalize();else if(r[4].setComponents(l-c,p-f,d-m,E-v).normalize(),t===ui)r[5].setComponents(l+c,p+f,d+m,E+v).normalize();else if(t===jo)r[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=SM.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(hh.x=r.normal.x>0?e.max.x:e.min.x,hh.y=r.normal.y>0?e.max.y:e.min.y,hh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},T_=new Ct,Fh=class n{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];T_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new cs),i[r].setFromProjectionMatrix(T_,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new cs),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Uh=class extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},A_=new Ct,Sm=new ea,dh=new Ys,fh=new W,_c=class extends yn{constructor(e=new dn,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dh.copy(i.boundingSphere),dh.applyMatrix4(r),dh.radius+=s,e.ray.intersectsSphere(dh)===!1)return;A_.copy(r).invert(),Sm.copy(e.ray).applyMatrix4(A_);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,y=p;g<y;g++){let m=l.getX(g);fh.fromBufferAttribute(h,m),R_(fh,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,y=p;g<y;g++)fh.fromBufferAttribute(h,g),R_(fh,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function R_(n,e,t,i,r,s,o){let a=Sm.distanceSqToPoint(n);if(a<t){let c=new W;Sm.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bc=class extends Un{constructor(e=[],t=io,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},js=class extends Un{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tr=class extends Un{constructor(e,t,i=Ci,r,s,o,a=hn,c=hn,l,u=Sr,h=1){if(u!==Sr&&u!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vc=class extends Tr{constructor(e,t=Ci,i=io,r,s,o=hn,a=hn,c,l=Sr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wc=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class n extends dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function g(y,m,d,_,b,v,E,T,x,w,I){let R=v/x,O=E/w,P=v/2,U=E/2,A=T/2,z=x+1,$=w+1,N=0,j=0,H=new W;for(let q=0;q<$;q++){let B=q*O-U;for(let J=0;J<z;J++){let se=J*R-P;H[y]=se*_,H[m]=B*b,H[d]=A,l.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[d]=T>0?1:-1,u.push(H.x,H.y,H.z),h.push(J/x),h.push(1-q/w),N+=1}}for(let q=0;q<w;q++)for(let B=0;B<x;B++){let J=f+B+z*q,se=f+B+z*(q+1),V=f+(B+1)+z*(q+1),D=f+(B+1)+z*q;c.push(J,se,D),c.push(se,V,D),j+=6}a.addGroup(p,j,I),p+=j,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ta=class n extends dn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=i*2+s,y=r+1,m=new W,d=new W;for(let _=0;_<=g;_++){let b=0,v=0,E=0,T=0;if(_<=i){let I=_/i,R=I*Math.PI/2;v=-u-e*Math.cos(R),E=e*Math.sin(R),T=-e*Math.cos(R),b=I*h}else if(_<=i+s){let I=(_-i)/s;v=-u+I*t,E=e,T=0,b=h+I*f}else{let I=(_-i-s)/i,R=I*Math.PI/2;v=u+e*Math.sin(R),E=e*Math.cos(R),T=e*Math.sin(R),b=h+f+I*h}let x=Math.max(0,Math.min(1,b/p)),w=0;_===0?w=.5/r:_===g&&(w=-.5/r);for(let I=0;I<=r;I++){let R=I/r,O=R*Math.PI*2,P=Math.sin(O),U=Math.cos(O);d.x=-E*U,d.y=v,d.z=E*P,a.push(d.x,d.y,d.z),m.set(-E*U,T,E*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+w,x)}if(_>0){let I=(_-1)*y;for(let R=0;R<r;R++){let O=I+R,P=I+R+1,U=_*y+R,A=_*y+R+1;o.push(O,P,U),o.push(P,A,U)}}}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},na=class n extends dn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new W,u=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=i+h/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Sc=class n extends dn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],p=[],g=0,y=[],m=i/2,d=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function _(){let v=new W,E=new W,T=0,x=(t-e)/i;for(let w=0;w<=s;w++){let I=[],R=w/s,O=R*(t-e)+e;for(let P=0;P<=r;P++){let U=P/r,A=U*c+a,z=Math.sin(A),$=Math.cos(A);E.x=O*z,E.y=-R*i+m,E.z=O*$,h.push(E.x,E.y,E.z),v.set(z,x,$).normalize(),f.push(v.x,v.y,v.z),p.push(U,1-R),I.push(g++)}y.push(I)}for(let w=0;w<r;w++)for(let I=0;I<s;I++){let R=y[I][w],O=y[I+1][w],P=y[I+1][w+1],U=y[I][w+1];(e>0||I!==0)&&(u.push(R,O,U),T+=3),(t>0||I!==s-1)&&(u.push(O,P,U),T+=3)}l.addGroup(d,T,0),d+=T}function b(v){let E=g,T=new ge,x=new W,w=0,I=v===!0?e:t,R=v===!0?1:-1;for(let P=1;P<=r;P++)h.push(0,m*R,0),f.push(0,R,0),p.push(.5,.5),g++;let O=g;for(let P=0;P<=r;P++){let A=P/r*c+a,z=Math.cos(A),$=Math.sin(A);x.x=I*$,x.y=m*R,x.z=I*z,h.push(x.x,x.y,x.z),f.push(0,R,0),T.x=z*.5+.5,T.y=$*.5*R+.5,p.push(T.x,T.y),g++}for(let P=0;P<r;P++){let U=E+P,A=O+P;v===!0?u.push(A,A+1,U):u.push(A+1,A,U),w+=3}l.addGroup(d,w,v===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);let u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ge:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,r=[],s=[],o=[],a=new W,c=new Ct;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new W)}s[0]=new W,o[0]=new W;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ia=class extends ti{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dh=class extends ia{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function s0(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var C_=new W,I_=new W,mm=new s0,gm=new s0,ym=new s0,kh=class extends ti{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(I_.subVectors(r[0],r[1]).add(r[0]),l=I_);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(C_.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=C_),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),mm.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,y,m),gm.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,y,m),ym.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(mm.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),gm.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),ym.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(mm.calc(c),gm.calc(c),ym.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function P_(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function EM(n,e){let t=1-n;return t*t*e}function MM(n,e){return 2*(1-n)*n*e}function TM(n,e){return n*n*e}function lc(n,e,t,i){return EM(n,e)+MM(n,t)+TM(n,i)}function AM(n,e){let t=1-n;return t*t*t*e}function RM(n,e){let t=1-n;return 3*t*t*n*e}function CM(n,e){return 3*(1-n)*n*n*e}function IM(n,e){return n*n*n*e}function uc(n,e,t,i,r){return AM(n,e)+RM(n,t)+CM(n,i)+IM(n,r)}var Ec=class extends ti{constructor(e=new ge,t=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uc(e,r.x,s.x,o.x,a.x),uc(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zh=class extends ti{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(uc(e,r.x,s.x,o.x,a.x),uc(e,r.y,s.y,o.y,a.y),uc(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends ti{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vh=class extends ti{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends ti{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(lc(e,r.x,s.x,o.x),lc(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gh=class extends ti{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(lc(e,r.x,s.x,o.x),lc(e,r.y,s.y,o.y),lc(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(P_(a,c.x,l.x,u.x,h.x),P_(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Em=Object.freeze({__proto__:null,ArcCurve:Dh,CatmullRomCurve3:kh,CubicBezierCurve:Ec,CubicBezierCurve3:zh,EllipseCurve:ia,LineCurve:Mc,LineCurve3:Vh,QuadraticBezierCurve:Tc,QuadraticBezierCurve3:Gh,SplineCurve:Ac}),Hh=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Em[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Em[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Zs=class extends Hh{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Mc(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Tc(this.currentPoint.clone(),new ge(e,t),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new Ec(this.currentPoint.clone(),new ge(e,t),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ac(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new ia(e,t,i,r,s,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends Zs{constructor(e){super(e),this.uuid=da(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Zs().fromJSON(r))}return this}};function PM(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Cb(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=FM(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let u=a,h=c;for(let f=t;f<r;f+=t){let p=n[f],g=n[f+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Rc(s,o,t,a,c,l,0),o}function Cb(n,e,t,i,r){let s;if(r===XM(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=N_(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=N_(o/i|0,n[o],n[o+1],s);return s&&ra(s,s.next)&&(Ic(s),s=s.next),s}function Ks(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ra(t,t.next)||zt(t.prev,t,t.next)===0)){if(Ic(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rc(n,e,t,i,r,s,o){if(!n)return;!o&&s&&VM(n,i,r,s);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(s?OM(n,i,r,s):NM(n)){e.push(c.i,n.i,l.i),Ic(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=LM(Ks(n),e),Rc(n,e,t,i,r,s,2)):o===2&&BM(n,e,t,i,r,s):Rc(Ks(n),e,t,i,r,s,1);break}}}function NM(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),h=Math.min(a,c,l),f=Math.max(r,s,o),p=Math.max(a,c,l),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&ac(r,a,s,c,o,l,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function OM(n,e,t,i){let r=n.prev,s=n,o=n.next;if(zt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,c,l),g=Math.min(u,h,f),y=Math.max(a,c,l),m=Math.max(u,h,f),d=Mm(p,g,e,t,i),_=Mm(y,m,e,t,i),b=n.prevZ,v=n.nextZ;for(;b&&b.z>=d&&v&&v.z<=_;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&ac(a,u,c,h,l,f,b.x,b.y)&&zt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ac(a,u,c,h,l,f,v.x,v.y)&&zt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=y&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&ac(a,u,c,h,l,f,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ac(a,u,c,h,l,f,v.x,v.y)&&zt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function LM(n,e){let t=n;do{let i=t.prev,r=t.next.next;!ra(i,r)&&Pb(i,t,t.next,r)&&Cc(i,r)&&Cc(r,i)&&(e.push(i.i,t.i,r.i),Ic(t),Ic(t.next),t=n=r),t=t.next}while(t!==n);return Ks(t)}function BM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&WM(o,a)){let c=Nb(o,a);o=Ks(o,o.next),c=Ks(c,c.next),Rc(o,e,t,i,r,s,0),Rc(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function FM(n,e,t,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Cb(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(HM(l))}r.sort(UM);for(let s=0;s<r.length;s++)t=DM(r[s],t);return t}function UM(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function DM(n,e){let t=kM(n,e);if(!t)return e;let i=Nb(t,n);return Ks(i,i.next),Ks(t,t.next)}function kM(n,e){let t=e,i=n.x,r=n.y,s=-1/0,o;if(ra(n,t))return t;do{if(ra(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Ib(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);Cc(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&zM(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function zM(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function VM(n,e,t,i){let r=n;do r.z===0&&(r.z=Mm(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,GM(r)}function GM(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Mm(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function HM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ib(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ac(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Ib(n,e,t,i,r,s,o,a)}function WM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qM(n,e)&&(Cc(n,e)&&Cc(e,n)&&$M(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||ra(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ra(n,e){return n.x===e.x&&n.y===e.y}function Pb(n,e,t,i){let r=mh(zt(n,e,t)),s=mh(zt(n,e,i)),o=mh(zt(t,i,n)),a=mh(zt(t,i,e));return!!(r!==s&&o!==a||r===0&&ph(n,t,e)||s===0&&ph(n,i,e)||o===0&&ph(t,n,i)||a===0&&ph(t,e,i))}function ph(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function mh(n){return n>0?1:n<0?-1:0}function qM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pb(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cc(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function $M(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nb(n,e){let t=Tm(n.i,n.x,n.y),i=Tm(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function N_(n,e,t,i){let r=Tm(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ic(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tm(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function XM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Am=class{static triangulate(e,t,i=2){return PM(e,t,i)}},Zi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];O_(e),L_(i,e);let o=e.length;t.forEach(O_);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,L_(i,t[c]);let a=Am.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function O_(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function L_(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Pc=class n extends dn{constructor(e=new Ar([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new _t(r,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:YM,b,v=!1,E,T,x,w;if(d){b=d.getSpacedPoints(u),v=!0,f=!1;let L=d.isCatmullRomCurve3?d.closed:!1;E=d.computeFrenetFrames(u,L),T=new W,x=new W,w=new W}f||(m=0,p=0,g=0,y=0);let I=a.extractPoints(l),R=I.shape,O=I.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let L=0,Z=O.length;L<Z;L++){let re=O[L];Zi.isClockWise(re)&&(O[L]=re.reverse())}}function U(L){let re=10000000000000001e-36,me=L[0];for(let de=1;de<=L.length;de++){let We=de%L.length,Ie=L[We],ze=Ie.x-me.x,Ye=Ie.y-me.y,et=ze*ze+Ye*Ye,k=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(me.x),Math.abs(me.y)),yt=re*k*k;if(et<=yt){L.splice(We,1),de--;continue}me=Ie}}U(R),O.forEach(U);let A=O.length,z=R;for(let L=0;L<A;L++){let Z=O[L];R=R.concat(Z)}function $(L,Z,re){return Z||Xe("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(Z,re)}let N=R.length;function j(L,Z,re){let me,de,We,Ie=L.x-Z.x,ze=L.y-Z.y,Ye=re.x-L.x,et=re.y-L.y,k=Ie*Ie+ze*ze,yt=Ie*et-ze*Ye;if(Math.abs(yt)>Number.EPSILON){let tt=Math.sqrt(k),bt=Math.sqrt(Ye*Ye+et*et),xe=Z.x-ze/tt,Vt=Z.y+Ie/tt,He=re.x-et/bt,je=re.y+Ye/bt,C=((He-xe)*et-(je-Vt)*Ye)/(Ie*et-ze*Ye);me=xe+Ie*C-L.x,de=Vt+ze*C-L.y;let S=me*me+de*de;if(S<=2)return new ge(me,de);We=Math.sqrt(S/2)}else{let tt=!1;Ie>Number.EPSILON?Ye>Number.EPSILON&&(tt=!0):Ie<-Number.EPSILON?Ye<-Number.EPSILON&&(tt=!0):Math.sign(ze)===Math.sign(et)&&(tt=!0),tt?(me=-ze,de=Ie,We=Math.sqrt(k)):(me=Ie,de=ze,We=Math.sqrt(k/2))}return new ge(me/We,de/We)}let H=[];for(let L=0,Z=z.length,re=Z-1,me=L+1;L<Z;L++,re++,me++)re===Z&&(re=0),me===Z&&(me=0),H[L]=j(z[L],z[re],z[me]);let q=[],B,J=H.concat();for(let L=0,Z=A;L<Z;L++){let re=O[L];B=[];for(let me=0,de=re.length,We=de-1,Ie=me+1;me<de;me++,We++,Ie++)We===de&&(We=0),Ie===de&&(Ie=0),B[me]=j(re[me],re[We],re[Ie]);q.push(B),J=J.concat(B)}let se;if(m===0)se=Zi.triangulateShape(z,O);else{let L=[],Z=[];for(let re=0;re<m;re++){let me=re/m,de=p*Math.cos(me*Math.PI/2),We=g*Math.sin(me*Math.PI/2)+y;for(let Ie=0,ze=z.length;Ie<ze;Ie++){let Ye=$(z[Ie],H[Ie],We);ce(Ye.x,Ye.y,-de),me===0&&L.push(Ye)}for(let Ie=0,ze=A;Ie<ze;Ie++){let Ye=O[Ie];B=q[Ie];let et=[];for(let k=0,yt=Ye.length;k<yt;k++){let tt=$(Ye[k],B[k],We);ce(tt.x,tt.y,-de),me===0&&et.push(tt)}me===0&&Z.push(et)}}se=Zi.triangulateShape(L,Z)}let V=se.length,D=g+y;for(let L=0;L<N;L++){let Z=f?$(R[L],J[L],D):R[L];v?(x.copy(E.normals[0]).multiplyScalar(Z.x),T.copy(E.binormals[0]).multiplyScalar(Z.y),w.copy(b[0]).add(x).add(T),ce(w.x,w.y,w.z)):ce(Z.x,Z.y,0)}for(let L=1;L<=u;L++)for(let Z=0;Z<N;Z++){let re=f?$(R[Z],J[Z],D):R[Z];v?(x.copy(E.normals[L]).multiplyScalar(re.x),T.copy(E.binormals[L]).multiplyScalar(re.y),w.copy(b[L]).add(x).add(T),ce(w.x,w.y,w.z)):ce(re.x,re.y,h/u*L)}for(let L=m-1;L>=0;L--){let Z=L/m,re=p*Math.cos(Z*Math.PI/2),me=g*Math.sin(Z*Math.PI/2)+y;for(let de=0,We=z.length;de<We;de++){let Ie=$(z[de],H[de],me);ce(Ie.x,Ie.y,h+re)}for(let de=0,We=O.length;de<We;de++){let Ie=O[de];B=q[de];for(let ze=0,Ye=Ie.length;ze<Ye;ze++){let et=$(Ie[ze],B[ze],me);v?ce(et.x,et.y+b[u-1].y,b[u-1].x+re):ce(et.x,et.y,h+re)}}}X(),te();function X(){let L=r.length/3;if(f){let Z=0,re=N*Z;for(let me=0;me<V;me++){let de=se[me];Ae(de[2]+re,de[1]+re,de[0]+re)}Z=u+m*2,re=N*Z;for(let me=0;me<V;me++){let de=se[me];Ae(de[0]+re,de[1]+re,de[2]+re)}}else{for(let Z=0;Z<V;Z++){let re=se[Z];Ae(re[2],re[1],re[0])}for(let Z=0;Z<V;Z++){let re=se[Z];Ae(re[0]+N*u,re[1]+N*u,re[2]+N*u)}}i.addGroup(L,r.length/3-L,0)}function te(){let L=r.length/3,Z=0;ie(z,Z),Z+=z.length;for(let re=0,me=O.length;re<me;re++){let de=O[re];ie(de,Z),Z+=de.length}i.addGroup(L,r.length/3-L,1)}function ie(L,Z){let re=L.length;for(;--re>=0;){let me=re,de=re-1;de<0&&(de=L.length-1);for(let We=0,Ie=u+m*2;We<Ie;We++){let ze=N*We,Ye=N*(We+1),et=Z+me+ze,k=Z+de+ze,yt=Z+de+Ye,tt=Z+me+Ye;Ee(et,k,yt,tt)}}}function ce(L,Z,re){c.push(L),c.push(Z),c.push(re)}function Ae(L,Z,re){Le(L),Le(Z),Le(re);let me=r.length/3,de=_.generateTopUV(i,r,me-3,me-2,me-1);Y(de[0]),Y(de[1]),Y(de[2])}function Ee(L,Z,re,me){Le(L),Le(Z),Le(me),Le(Z),Le(re),Le(me);let de=r.length/3,We=_.generateSideWallUV(i,r,de-6,de-3,de-2,de-1);Y(We[0]),Y(We[1]),Y(We[3]),Y(We[1]),Y(We[2]),Y(We[3])}function Le(L){r.push(c[L*3+0]),r.push(c[L*3+1]),r.push(c[L*3+2])}function Y(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Em[r.type]().fromJSON(r)),new n(i,e.options)}},YM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,c),new ge(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ge(o,1-c),new ge(l,1-h),new ge(f,1-g),new ge(y,1-d)]:[new ge(a,1-c),new ge(u,1-h),new ge(p,1-g),new ge(m,1-d)]}};function jM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ls=class n extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let _=d*f-o;for(let b=0;b<l;b++){let v=b*h-s;g.push(v,-_,0),y.push(0,0,1),m.push(b/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<a;_++){let b=_+l*d,v=_+l*(d+1),E=_+1+l*(d+1),T=_+1+l*d;p.push(b,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Js=class n extends dn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],u=[],h=e,f=(t-e)/r,p=new W,g=new ge;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){let d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let y=0;y<r;y++){let m=y*(i+1);for(let d=0;d<i;d++){let _=d+m,b=_,v=_+i+1,E=_+i+2,T=_+1;a.push(b,v,T),a.push(v,E,T)}}this.setIndex(a),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nc=class n extends dn{constructor(e=new Ar([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(s,3)),this.setAttribute("uv",new _t(o,2));function l(u){let h=r.length/3,f=u.extractPoints(t),p=f.shape,g=f.holes;Zi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let _=g[m];Zi.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=Zi.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let _=g[m];p=p.concat(_)}for(let m=0,d=p.length;m<d;m++){let _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,d=y.length;m<d;m++){let _=y[m],b=_[0]+h,v=_[1]+h,E=_[2]+h;i.push(b,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ZM(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];i.push(o)}return new n(i,e.curveSegments)}};function ZM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Qs=class n extends dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new W,f=new W,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){let _=[],b=d/i,v=o+b*a,E=e*Math.cos(v),T=Math.sqrt(e*e-E*E),x=0;d===0&&o===0?x=.5/t:d===i&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let I=w/t,R=r+I*s;h.x=-T*Math.cos(R),h.y=E,h.z=T*Math.sin(R),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(I+x,1-b),_.push(l++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<t;_++){let b=u[d][_+1],v=u[d][_],E=u[d+1][_],T=u[d+1][_+1];(d!==0||o>0)&&p.push(b,v,T),(d!==i-1||c<Math.PI)&&p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function so(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(B_(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(B_(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function An(n){let e={};for(let t=0;t<n.length;t++){let i=so(n[t]);for(let r in i)e[r]=i[r]}return e}function B_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function KM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function o0(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Wd={clone:so,merge:An},JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wh=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oc=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qh=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$h=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xh=class extends us{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bm,endingEnd:bm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vm:s=e,a=2*t-i;break;case wm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vm:o=e,c=2*i-t;break;case wm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,_=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let E=0;E!==a;++E)s[E]=d*o[u+E]+_*o[l+E]+b*o[c+E]+v*o[h+E];return s}},Yh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},jh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zh=class extends us{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-t)/(r-t),y=1-g;for(let m=0;m!==a;++m)s[m]=o[l+m]*y+o[c+m]*g;return s}let f=a*2,p=e-1;for(let g=0;g!==a;++g){let y=o[l+g],m=o[c+g],d=p*f+g*2,_=h[d],b=h[d+1],v=e*f+g*2,E=u[v],T=u[v+1],x=tT(i,t,_,E,r);s[g]=Ob(x,y,b,T,m)}return s}};function Ob(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function eT(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function tT(n,e,t,i,r){let s=(n-e)/(r-e);for(let o=0;o<8;o++){let a=Ob(s,e,t,i,r)-n;if(Math.abs(a)<1e-10)break;let c=eT(s,e,t,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var ni=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),gh(e.settings)&&(i.settings={inTangents:Wo(e.settings.inTangents,Array),outTangents:Wo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case hc:t=this.InterpolantFactoryMethodDiscrete;break;case Ih:t=this.InterpolantFactoryMethodLinear;break;case _h:t=this.InterpolantFactoryMethodSmooth;break;case _m:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hc;case this.InterpolantFactoryMethodLinear:return Ih;case this.InterpolantFactoryMethodSmooth:return _h;case this.InterpolantFactoryMethodBezier:return _m}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;gh(this.settings)&&(F_(this.settings.inTangents,e),F_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;gh(this.settings)&&(U_(this.settings.inTangents,e),U_(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Xe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&nM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===_h,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,gh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function F_(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function U_(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Ih;var hs=class extends ni{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=hc;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kh=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};Kh.prototype.ValueTypeName="color";var Jh=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};Jh.prototype.ValueTypeName="number";var Qh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Ji.slerpFlat(s,0,o,l-a,o,l,c);return s}},Lc=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}};Lc.prototype.ValueTypeName="quaternion";Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends ni{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=hc;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ed=class extends ni{constructor(e,t,i,r){super(e,t,i,r)}};ed.prototype.ValueTypeName="vector";var td=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lb=new td,nd=class{constructor(e){this.manager=e!==void 0?e:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};nd.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bc=class extends sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xm=new Ct,D_=new W,k_=new W,Fc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;D_.setFromMatrixPosition(e.matrixWorld),t.position.copy(D_),k_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){xm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xm,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===jo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(xm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yh=new W,xh=new Ji,Yi=new W,Uc=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yh,xh,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yh,xh,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(yh,xh,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yh,xh,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new W,z_=new ge,V_=new ge,Mn=class extends Uc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(Yp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,z_,V_),t.subVectors(V_,z_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rm=class extends Fc{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}},Dc=class extends sa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kc=class extends Uc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cm=class extends Fc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Cm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qo=-90,$o=1,aa=class extends yn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(qo,$o,e,t);r.layers=this.layers,this.add(r);let s=new Mn(qo,$o,e,t);s.layers=this.layers,this.add(s);let o=new Mn(qo,$o,e,t);o.layers=this.layers,this.add(o);let a=new Mn(qo,$o,e,t);a.layers=this.layers,this.add(a);let c=new Mn(qo,$o,e,t);c.layers=this.layers,this.add(c);let l=new Mn(qo,$o,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},id=class extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var a0="\\[\\]\\.:\\/",nT=new RegExp("["+a0+"]","g"),c0="[^"+a0+"]",iT="[^"+a0.replace("\\.","")+"]",rT=/((?:WC+[\/:])*)/.source.replace("WC",c0),sT=/(WCOD+)?/.source.replace("WCOD",iT),oT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",c0),aT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",c0),cT=new RegExp("^"+rT+sT+oT+aT+"$"),lT=["material","materials","bones","map"],Im=class{constructor(e,t,i){let r=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nT,"")}static parseTrackName(e){let t=cT.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);lT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Im;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CO=new Float32Array(1);var G_=new Ct,zc=class{constructor(e,t,i=0,r=1/0){this.ray=new ea(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return G_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G_),this}intersectObject(e,t=!0,i=[]){return Pm(e,this,i,t),i.sort(H_),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Pm(e[r],this,i,t);return i.sort(H_),i}};function H_(n,e){return n.distance-e.distance}function Pm(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Pm(s[o],e,t,!0)}}var Nm=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};function l0(n,e,t,i){let r=uT(i);switch(t){case Zm:return n*e;case Jm:return n*e/r.components*r.byteLength;case ud:return n*e/r.components*r.byteLength;case ms:return n*e*2/r.components*r.byteLength;case hd:return n*e*2/r.components*r.byteLength;case Km:return n*e*3/r.components*r.byteLength;case Ni:return n*e*4/r.components*r.byteLength;case dd:return n*e*4/r.components*r.byteLength;case Wc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(n,16)*Math.max(e,8)/4;case fd:case md:return Math.max(n,8)*Math.max(e,8)/2;case yd:case xd:case bd:case vd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _d:case Yc:case wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ud:case Dd:case kd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case zd:case Vd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jc:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uT(n){switch(n){case Wn:case $m:return{byteLength:1,components:1};case ua:case Xm:case Pi:return{byteLength:2,components:1};case cd:case ld:return{byteLength:2,components:4};case Ci:case ad:case Ii:return{byteLength:4,components:1};case Ym:case jm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function nv(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dT(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pT=`#ifdef USE_ALPHAHASH
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
#endif`,mT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_T=`#ifdef USE_AOMAP
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
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ST=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TT=`#ifdef USE_IRIDESCENCE
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
#endif`,AT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,UT=`vec3 transformedNormal = objectNormal;
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
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",HT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
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
}`,eA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iA=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,rA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,uA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hA=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pA=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wA=`#if defined( USE_POINTS_UV )
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
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TA=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`#ifdef USE_MORPHTARGETS
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
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
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
#endif`,FA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ZA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,KA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,JA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,e2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t2=`#ifdef USE_SKINNING
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
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,u2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,h2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`#include <common>
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
}`,_2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b2=`#define DISTANCE
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
}`,v2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`uniform float scale;
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
}`,M2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,A2=`uniform vec3 diffuse;
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
}`,R2=`#define LAMBERT
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
}`,C2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,I2=`#define MATCAP
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
}`,P2=`#define MATCAP
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
}`,N2=`#define NORMAL
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
}`,O2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L2=`#define PHONG
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
}`,B2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,F2=`#define STANDARD
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
}`,U2=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,D2=`#define TOON
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
}`,k2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,z2=`uniform float size;
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
}`,V2=`uniform vec3 diffuse;
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
}`,G2=`#include <common>
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
}`,H2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,W2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,q2=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:fT,alphahash_pars_fragment:pT,alphamap_fragment:mT,alphamap_pars_fragment:gT,alphatest_fragment:yT,alphatest_pars_fragment:xT,aomap_fragment:_T,aomap_pars_fragment:bT,batching_pars_vertex:vT,batching_vertex:wT,begin_vertex:ST,beginnormal_vertex:ET,bsdfs:MT,iridescence_fragment:TT,bumpmap_pars_fragment:AT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:CT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:PT,color_fragment:NT,color_pars_fragment:OT,color_pars_vertex:LT,color_vertex:BT,common:FT,defaultnormal_vertex:UT,displacementmap_pars_vertex:DT,displacementmap_vertex:kT,emissivemap_fragment:zT,emissivemap_pars_fragment:VT,colorspace_fragment:GT,colorspace_pars_fragment:HT,envmap_fragment:WT,envmap_common_pars_fragment:qT,envmap_pars_fragment:$T,envmap_pars_vertex:XT,envmap_physical_pars_fragment:rA,envmap_vertex:YT,fog_vertex:jT,fog_pars_vertex:ZT,fog_fragment:KT,fog_pars_fragment:JT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:eA,lights_lambert_fragment:tA,lights_lambert_pars_fragment:nA,lights_pars_begin:iA,lights_toon_fragment:sA,lights_toon_pars_fragment:oA,lights_phong_fragment:aA,lights_phong_pars_fragment:cA,lights_physical_fragment:lA,lights_physical_pars_fragment:uA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:fA,lightprobes_pars_fragment:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:yA,logdepthbuf_vertex:xA,map_fragment:_A,map_pars_fragment:bA,map_particle_fragment:vA,map_particle_pars_fragment:wA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:EA,morphinstance_vertex:MA,morphcolor_vertex:TA,morphnormal_vertex:AA,morphtarget_pars_vertex:RA,morphtarget_vertex:CA,normal_fragment_begin:IA,normal_fragment_maps:PA,normal_pars_fragment:NA,normal_pars_vertex:OA,normal_vertex:LA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:FA,clearcoat_normal_fragment_maps:UA,clearcoat_pars_fragment:DA,iridescence_pars_fragment:kA,opaque_fragment:zA,packing:VA,premultiplied_alpha_fragment:GA,project_vertex:HA,dithering_fragment:WA,dithering_pars_fragment:qA,roughnessmap_fragment:$A,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:jA,shadowmap_vertex:ZA,shadowmask_pars_fragment:KA,skinbase_vertex:JA,skinning_pars_vertex:QA,skinning_vertex:e2,skinnormal_vertex:t2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:r2,tonemapping_pars_fragment:s2,transmission_fragment:o2,transmission_pars_fragment:a2,uv_pars_fragment:c2,uv_pars_vertex:l2,uv_vertex:u2,worldpos_vertex:h2,background_vert:d2,background_frag:f2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:y2,depth_vert:x2,depth_frag:_2,distance_vert:b2,distance_frag:v2,equirect_vert:w2,equirect_frag:S2,linedashed_vert:E2,linedashed_frag:M2,meshbasic_vert:T2,meshbasic_frag:A2,meshlambert_vert:R2,meshlambert_frag:C2,meshmatcap_vert:I2,meshmatcap_frag:P2,meshnormal_vert:N2,meshnormal_frag:O2,meshphong_vert:L2,meshphong_frag:B2,meshphysical_vert:F2,meshphysical_frag:U2,meshtoon_vert:D2,meshtoon_frag:k2,points_vert:z2,points_frag:V2,shadow_vert:G2,shadow_frag:H2,sprite_vert:W2,sprite_frag:q2},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ir={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ir.physical={uniforms:An([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var qd={r:0,b:0,g:0},$2=new Ct,iv=new Ze;iv.set(-1,0,0,0,1,0,0,0,1);function X2(n,e,t,i,r,s){let o=new st(0),a=r===!0?0:1,c,l,u=null,h=0,f=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let v=_.backgroundBlurriness>0;b=e.get(b,v)}return b}function g(_){let b=!1,v=p(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,b){let v=p(b);v&&v.isCubeTexture?(l===void 0&&(l=new Tt(new Qi(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:so(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($2.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(iv),l.material.toneMapped=ut.getTransfer(v.colorSpace)!==St,(u!==v||h!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Tt(new ls(2,2),new Tn({name:"BackgroundMaterial",uniforms:so(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,b){_.getRGB(qd,o0(n)),t.buffers.color.setClear(qd.r,qd.g,qd.b,b,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:y,dispose:d}}function Y2(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(O,P,U,A,z){let $=!1,N=h(O,A,U,P);s!==N&&(s=N,l(s.object)),$=p(O,A,U,z),$&&g(O,A,U,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(O,P,U,A),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function h(O,P,U,A){let z=A.wireframe===!0,$=i[P.id];$===void 0&&($={},i[P.id]=$);let N=O.isInstancedMesh===!0?O.id:0,j=$[N];j===void 0&&(j={},$[N]=j);let H=j[U.id];H===void 0&&(H={},j[U.id]=H);let q=H[z];return q===void 0&&(q=f(c()),H[z]=q),q}function f(O){let P=[],U=[],A=[];for(let z=0;z<t;z++)P[z]=0,U[z]=0,A[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:A,object:O,attributes:{},index:null}}function p(O,P,U,A){let z=s.attributes,$=P.attributes,N=0,j=U.getAttributes();for(let H in j)if(j[H].location>=0){let B=z[H],J=$[H];if(J===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(J=O.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;N++}return s.attributesNum!==N||s.index!==A}function g(O,P,U,A){let z={},$=P.attributes,N=0,j=U.getAttributes();for(let H in j)if(j[H].location>=0){let B=$[H];B===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(B=O.instanceColor));let J={};J.attribute=B,B&&B.data&&(J.data=B.data),z[H]=J,N++}s.attributes=z,s.attributesNum=N,s.index=A}function y(){let O=s.newAttributes;for(let P=0,U=O.length;P<U;P++)O[P]=0}function m(O){d(O,0)}function d(O,P){let U=s.newAttributes,A=s.enabledAttributes,z=s.attributeDivisors;U[O]=1,A[O]===0&&(n.enableVertexAttribArray(O),A[O]=1),z[O]!==P&&(n.vertexAttribDivisor(O,P),z[O]=P)}function _(){let O=s.newAttributes,P=s.enabledAttributes;for(let U=0,A=P.length;U<A;U++)P[U]!==O[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function b(O,P,U,A,z,$,N){N===!0?n.vertexAttribIPointer(O,P,U,z,$):n.vertexAttribPointer(O,P,U,A,z,$)}function v(O,P,U,A){y();let z=A.attributes,$=U.getAttributes(),N=P.defaultAttributeValues;for(let j in $){let H=$[j];if(H.location>=0){let q=z[j];if(q===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),q!==void 0){let B=q.normalized,J=q.itemSize,se=e.get(q);if(se===void 0)continue;let V=se.buffer,D=se.type,X=se.bytesPerElement,te=D===n.INT||D===n.UNSIGNED_INT||q.gpuType===ad;if(q.isInterleavedBufferAttribute){let ie=q.data,ce=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,Ae=q.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let Ee=0;Ee<H.locationSize;Ee++)d(H.location+Ee,ie.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,V);for(let Ee=0;Ee<H.locationSize;Ee++)b(H.location+Ee,J/H.locationSize,D,B,ce*X,(Ae+J/H.locationSize*Ee)*X,te)}else{if(q.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)d(H.location+ie,q.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ie=0;ie<H.locationSize;ie++)m(H.location+ie);n.bindBuffer(n.ARRAY_BUFFER,V);for(let ie=0;ie<H.locationSize;ie++)b(H.location+ie,J/H.locationSize,D,B,J*X,J/H.locationSize*ie*X,te)}}else if(N!==void 0){let B=N[j];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(H.location,B);break;case 3:n.vertexAttrib3fv(H.location,B);break;case 4:n.vertexAttrib4fv(H.location,B);break;default:n.vertexAttrib1fv(H.location,B)}}}}_()}function E(){I();for(let O in i){let P=i[O];for(let U in P){let A=P[U];for(let z in A){let $=A[z];for(let N in $)u($[N].object),delete $[N];delete A[z]}}delete i[O]}}function T(O){if(i[O.id]===void 0)return;let P=i[O.id];for(let U in P){let A=P[U];for(let z in A){let $=A[z];for(let N in $)u($[N].object),delete $[N];delete A[z]}}delete i[O.id]}function x(O){for(let P in i){let U=i[P];for(let A in U){let z=U[A];if(z[O.id]===void 0)continue;let $=z[O.id];for(let N in $)u($[N].object),delete $[N];delete z[O.id]}}}function w(O){for(let P in i){let U=i[P],A=O.isInstancedMesh===!0?O.id:0,z=U[A];if(z!==void 0){for(let $ in z){let N=z[$];for(let j in N)u(N[j].object),delete N[j];delete z[$]}delete U[A],Object.keys(U).length===0&&delete i[P]}}}function I(){R(),o=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function j2(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let p=0;p<u;p++)f+=l[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Z2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Ni&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let w=x===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Wn&&x!==Ii&&!w&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&($e("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,maxSamples:E,samples:T}}function K2(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Qn,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let _=s?0:i,b=_*4,v=d.clippingState||null;c.value=v,v=u(g,f,b,p);for(let E=0;E!==b;++E)v[E]=t[E];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let d=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,v=p;b!==y;++b,v+=4)o.copy(h[b]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Jc=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qi(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:eo});s.uniforms.tEquirect.value=t;let o=new Tt(r,s),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Fn),new aa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Bb=256,J2=3,Q2=20,rv=256,sv=16,eR=3,tR=new W,nR=new st,Xd=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new aa(1,10,null),this._boxMesh=new Tt(new Qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=tR}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=c.autoClear,f=c.autoClearColor,p=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(nR));let m=new aa(i,r,u);return m.position.copy(a),m.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=p,c.autoClearStencil=g,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Db(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ub(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bb,Ab(e))}_fromTexture(e,t){e.mapping===io||e.mapping===la?this._setSize(e.image.length===0?Bb:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Fb(e,!1,!1),i=Math.log2(e)-J2;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Fb(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===io||e.mapping===la?(this._cubemapMaterial===null&&(this._cubemapMaterial=Db()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ub()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iR(),this._integrationMaterial=rR());let t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/sv);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-eR)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(rv*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sR());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Fb(n,e,t){return new Jc(n,{minFilter:Rr,generateMipmaps:e,type:Pi,colorSpace:dc,depthBuffer:t})}function Qc(n,e,t){return new Tn({name:n,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:xn,blending:eo,depthTest:!1,depthWrite:!1})}function iR(){return Qc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rv}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rR(){return Qc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sR(){return Qc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q2}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ub(){return Qc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Db(){return Qc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function oR(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===rd||p===sd)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Jc(g.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,g=p===rd||p===sd,y=p===io||p===la;if(g||y){let m=t.get(f),d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Xd(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return g&&_&&_.height>0||y&&_&&c(_)?(i===null&&(i=new Xd(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===rd?f.mapping=io:p===sd&&(f.mapping=la),f}function c(f){let p=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function l(f){let p=f.target;p.removeEventListener("dispose",l);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function aR(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&cc("WebGLRenderer: "+i+" extension not supported."),r}}}function cR(n,e,t,i){let r={},s=new WeakMap,o=new FinalizationRegistry(g=>delete r[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete r[g.id],o.unregister(g);let y=s.get(g);y&&(e.remove(y),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",a),r[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function u(g){let y=g.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function h(g){let y=g.index,m=g.attributes.position,d=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?xc:yc,v=new b(Math.ceil(_/3)*6,1),E=v.array;if(y!==null){let x=y.array;d=y.version;for(let w=0,I=0;w<_;w+=3){let R=x[w+0],O=x[w+1],P=x[w+2];E[I++]=R,E[I++]=O,E[I++]=O,E[I++]=P,E[I++]=P,E[I++]=R}}else{d=m.version;for(let x=0,w=0;x<_;x+=3){let I=x+0,R=x+1,O=x+2;E[w++]=I,E[w++]=R,E[w++]=R,E[w++]=O,E[w++]=O,E[w++]=I}}v.version=d;let T=s.get(g);T&&e.remove(T),s.set(g,v)}function f(g){let y=s.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&h(g)}else h(g);return s.get(g)}function p(){for(let g in r){let y=r[g].deref();y!==void 0&&c(y)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function lR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,h*o,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function uR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hR(n,e,t){let i=new WeakMap,r=new Bt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let I=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let v=a.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),x=new mc(T,v,E,h);x.type=Ii,x.needsUpdate=!0;let w=b*4;for(let R=0;R<h;R++){let O=m[R],P=d[R],U=_[R],A=v*E*4*R;for(let z=0;z<O.count;z++){let $=z*w;p===!0&&(r.fromBufferAttribute(O,z),T[A+$+0]=r.x,T[A+$+1]=r.y,T[A+$+2]=r.z,T[A+$+3]=0),g===!0&&(r.fromBufferAttribute(P,z),T[A+$+4]=r.x,T[A+$+5]=r.y,T[A+$+6]=r.z,T[A+$+7]=0),y===!0&&(r.fromBufferAttribute(U,z),T[A+$+8]=r.x,T[A+$+9]=r.y,T[A+$+10]=r.z,T[A+$+11]=U.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new ge(v,E)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function dR(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var fR={[km]:"LINEAR_TONE_MAPPING",[zm]:"REINHARD_TONE_MAPPING",[Vm]:"CINEON_TONE_MAPPING",[Gc]:"ACES_FILMIC_TONE_MAPPING",[Hm]:"AGX_TONE_MAPPING",[Wm]:"NEUTRAL_TONE_MAPPING",[Gm]:"CUSTOM_TONE_MAPPING"};function pR(n,e,t,i,r,s){let o=new ei(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new dn;u.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _t([0,2,0,0,2,0],2));let h=new Wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Tt(u,h),p=new kc(-1,1,1,-1,0,1),g=null,y=null,m=!1,d,_=null,b=[],v=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),c!==null&&c.setSize(E,T);for(let x=0;x<b.length;x++){let w=b[x];w.setSize&&w.setSize(E,T)}},this.setEffects=function(E){b=E,v=b.length>0&&b[0].isRenderPass===!0;let T=o.width,x=o.height;b.length>0&&a===null&&(a=new ei(T,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),c=new ei(T,x,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&b.some(I=>I.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&l===null&&(l=new Tr(T,x),s===!0&&(l.format=Cr,l.type=ro)),o.dispose(),o.depthTexture=w?l:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let I=0;I<b.length;I++){let R=b[I];R.setSize&&R.setSize(T,x),w&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(E,T){if(m||E.toneMapping===tr&&b.length===0)return!1;if(_=T,T!==null){let x=T.width,w=T.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return v===!1&&E.setRenderTarget(o),d=E.toneMapping,E.toneMapping=tr,!0},this.hasRenderPass=function(){return v},this.end=function(E,T){E.toneMapping=d,m=!0;let x=o,w=a;for(let I=0;I<b.length;I++){let R=b[I];R.enabled!==!1&&(R.render(E,w,x,T),R.needsSwap!==!1&&(x=w,w=w===a?c:a))}if(g!==E.outputColorSpace||y!==E.toneMapping){g=E.outputColorSpace,y=E.toneMapping,h.defines={},ut.getTransfer(g)===St&&(h.defines.SRGB_TRANSFER="");let I=fR[y];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(f,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}var ov=new Un,av=new Tr(1,1),cv=new vc(1),lv=new mc,uv=new Lh,hv=new bc,kb=[],zb=[],Vb=new Float32Array(16),Gb=new Float32Array(9),Hb=new Float32Array(4);function pa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=kb[r];if(s===void 0&&(s=new Float32Array(r),kb[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jd(n,e){let t=zb[e];t===void 0&&(t=new Int32Array(e),zb[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function yR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function xR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function _R(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Hb.set(i),n.uniformMatrix2fv(this.addr,!1,Hb),an(t,i)}}function bR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Gb.set(i),n.uniformMatrix3fv(this.addr,!1,Gb),an(t,i)}}function vR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Vb.set(i),n.uniformMatrix4fv(this.addr,!1,Vb),an(t,i)}}function wR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function ER(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function MR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function TR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function RR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function CR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function Zd(n){return n.version===0&&(n.compareFunction=t0,n.needsUpdate=!0),n}function IR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Zd(av):s=ov,t.setTexture2D(e||s,r)}function PR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||uv,r)}function NR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Zd(cv):s=hv,t.setTextureCube(e||s,r)}function OR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lv,r)}function LR(n){switch(n){case 5126:return mR;case 35664:return gR;case 35665:return yR;case 35666:return xR;case 35674:return _R;case 35675:return bR;case 35676:return vR;case 5124:case 35670:return wR;case 35667:case 35671:return SR;case 35668:case 35672:return ER;case 35669:case 35673:return MR;case 5125:return TR;case 36294:return AR;case 36295:return RR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return OR}}function BR(n,e){n.uniform1fv(this.addr,e)}function FR(n,e){let t=pa(e,this.size,2);n.uniform2fv(this.addr,t)}function UR(n,e){let t=pa(e,this.size,3);n.uniform3fv(this.addr,t)}function DR(n,e){let t=pa(e,this.size,4);n.uniform4fv(this.addr,t)}function kR(n,e){let t=pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zR(n,e){let t=pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VR(n,e){let t=pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GR(n,e){n.uniform1iv(this.addr,e)}function HR(n,e){n.uniform2iv(this.addr,e)}function WR(n,e){n.uniform3iv(this.addr,e)}function qR(n,e){n.uniform4iv(this.addr,e)}function $R(n,e){n.uniform1uiv(this.addr,e)}function XR(n,e){n.uniform2uiv(this.addr,e)}function YR(n,e){n.uniform3uiv(this.addr,e)}function jR(n,e){n.uniform4uiv(this.addr,e)}function ZR(n,e,t){let i=this.cache,r=e.length,s=jd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Zd(av):o=ov;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function KR(n,e,t){let i=this.cache,r=e.length,s=jd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uv,s[o])}function JR(n,e,t){let i=this.cache,r=e.length,s=jd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Zd(cv):o=hv;for(let a=0;a!==r;++a)t.setTextureCube(e[a]||o,s[a])}function QR(n,e,t){let i=this.cache,r=e.length,s=jd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lv,s[o])}function eC(n){switch(n){case 5126:return BR;case 35664:return FR;case 35665:return UR;case 35666:return DR;case 35674:return kR;case 35675:return zR;case 35676:return VR;case 5124:case 35670:return GR;case 35667:case 35671:return HR;case 35668:case 35672:return WR;case 35669:case 35673:return qR;case 5125:return $R;case 36294:return XR;case 36295:return YR;case 36296:return jR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return QR}}var d0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LR(t.type)}},f0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eC(t.type)}},p0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},u0=/(\w+)(\])?(\[|\.)?/g;function Wb(n,e){n.seq.push(e),n.map[e.id]=e}function tC(n,e,t){let i=n.name,r=i.length;for(u0.lastIndex=0;;){let s=u0.exec(i),o=u0.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Wb(t,l===void 0?new d0(a,n,e):new f0(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new p0(a),Wb(t,h)),t=h}}}var fa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);tC(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function qb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var nC=37297,iC=0;function rC(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var $b=new Ze;function sC(n){ut._getMatrix($b,ut.workingColorSpace,n);let e=`mat3( ${$b.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case fc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+rC(n.getShaderSource(e),a)}else return s}function oC(n,e){let t=sC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var aC={[km]:"Linear",[zm]:"Reinhard",[Vm]:"Cineon",[Gc]:"ACESFilmic",[Hm]:"AgX",[Wm]:"Neutral",[Gm]:"Custom"};function cC(n,e){let t=aC[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $d=new W;function lC(){ut.getLuminanceCoefficients($d);let n=$d.x.toFixed(4),e=$d.y.toFixed(4),t=$d.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kc).join(`
`)}function hC(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dC(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Kc(n){return n!==""}function Yb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jb(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fC=/^[ \t]*#include +<([\w\d./]+)>/gm;function m0(n){return n.replace(fC,pC)}function pC(n,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return m0(t)}var mC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zb(n){return n.replace(mC,gC)}function gC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kb(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var yC={[Vc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function xC(n){return yC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _C={[la]:"ENVMAP_MODE_REFRACTION"};function bC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_C[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vC={[Dm]:"ENVMAP_BLENDING_MULTIPLY",[hb]:"ENVMAP_BLENDING_MIX",[db]:"ENVMAP_BLENDING_ADD"};function wC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vC[n.combine]||"ENVMAP_BLENDING_NONE"}function SC(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=xC(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=bC(t),h=wC(t),f=uC(t),p=hC(s),g=r.createProgram(),y,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kc).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Kc).join(`
`),m.length>0&&(m+=`
`)):(y=[Kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kc).join(`
`),m=[Kb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ot.tonemapping_pars_fragment:"",t.toneMapping!==tr?cC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,oC("linearToOutputTexel",t.outputColorSpace),lC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kc).join(`
`)),o=m0(o),o=Yb(o,t),o=jb(o,t),a=m0(a),a=Yb(a,t),a=jb(a,t),o=Zb(o),a=Zb(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=d+y+o,b=d+m+a,v=qb(r,r.VERTEX_SHADER,_),E=qb(r,r.FRAGMENT_SHADER,b);r.attachShader(g,v),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(n.debug.checkShaderErrors){let O=r.getProgramInfoLog(g)||"",P=r.getShaderInfoLog(v)||"",U=r.getShaderInfoLog(E)||"",A=O.trim(),z=P.trim(),$=U.trim(),N=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,v,E);else{let H=Xb(r,v,"vertex"),q=Xb(r,E,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+A+`
`+H+`
`+q)}else A!==""?$e("WebGLProgram: Program Info Log:",A):(z===""||$==="")&&(j=!1);j&&(R.diagnostics={runnable:N,programLog:A,vertexShader:{log:z,prefix:y},fragmentShader:{log:$,prefix:m}})}r.deleteShader(v),r.deleteShader(E),x=new fa(r,g),w=dC(r,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,nC)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iC++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=E,this}var EC=0,g0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new y0(e),t.set(e,i)),i}},y0=class{constructor(e){this.id=EC++,this.code=e,this.usedTimes=0}};function MC(n){return n===ms||n===Yc||n===jc}function TC(n,e,t,i,r,s){let o=new Jo,a=new g0,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,w,I,R,O,P){let U=R.fog,A=O.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,N=e.get(x.envMap||z,$),j=f[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let q=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,B=q!==void 0?q.length:0,J=0;A.morphAttributes.position!==void 0&&(J=1),A.morphAttributes.normal!==void 0&&(J=2),A.morphAttributes.color!==void 0&&(J=3);let se,V,D,X;if(j){let Re=ir[j];se=Re.vertexShader,V=Re.fragmentShader}else{se=x.vertexShader,V=x.fragmentShader;let Re=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,Re,Et),D=Re.id,X=Et.id}let te=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ce=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,Ee=!!x.map,Le=!!x.matcap,Y=!!N,L=Y&&N.isPMREMTexture===!0,Z=!!x.aoMap,re=!!x.lightMap,me=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,We=!!x.displacementMap,Ie=!!x.emissiveMap,ze=!!x.metalnessMap,Ye=!!x.roughnessMap,et=x.anisotropy>0,k=x.clearcoat>0,yt=x.diffuseRoughness>0,tt=x.dispersion>0,bt=x.retroreflectivity>0,xe=x.iridescence>0,Vt=x.sheen>0,He=x.transmission>0,je=et&&!!x.anisotropyMap,C=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,Q=k&&!!x.clearcoatRoughnessMap,fe=yt&&!!x.diffuseRoughnessMap,he=xe&&!!x.iridescenceMap,_e=xe&&!!x.iridescenceThicknessMap,Me=Vt&&!!x.sheenColorMap,ae=Vt&&!!x.sheenRoughnessMap,le=!!x.specularMap,ve=!!x.specularColorMap,F=!!x.specularIntensityMap,ue=He&&!!x.transmissionMap,oe=He&&!!x.thicknessMap,we=!!x.gradientMap,ye=!!x.alphaMap,be=x.alphaTest>0,ke=!!x.alphaHash,rt=!!x.extensions,pe=tr;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pe=n.toneMapping);let Ge=L?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,it={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:se,fragmentShader:V,defines:x.defines,customVertexShaderID:D,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:ce,instancingColor:ce&&O.instanceColor!==null,instancingMorph:ce&&O.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ee,matcap:Le,envMap:Y,envMapMode:Y&&N.mapping,envMapPMREM:L,envMapMaxLod:L?Ge.length-1:null,envMapSize:L?Ge[0].width:null,aoMap:Z,lightMap:re,bumpMap:me,normalMap:de,displacementMap:We,emissiveMap:Ie,normalMapObjectSpace:de&&x.normalMapType===mb,normalMapTangentSpace:de&&x.normalMapType===Hd,packedNormalMap:de&&x.normalMapType===Hd&&MC(x.normalMap.format),metalnessMap:ze,roughnessMap:Ye,anisotropy:et,anisotropyMap:je,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:Q,diffuseRoughness:yt,diffuseRoughnessMap:fe,dispersion:tt,retroreflection:bt,iridescence:xe,iridescenceMap:he,iridescenceThicknessMap:_e,sheen:Vt,sheenColorMap:Me,sheenRoughnessMap:ae,specularMap:le,specularColorMap:ve,specularIntensityMap:F,transmission:He,transmissionMap:ue,thicknessMap:oe,gradientMap:we,opaque:x.transparent===!1&&x.blending===ps&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:be,alphaHash:ke,combine:x.combine,mapUv:Ee&&p(x.map.channel),aoMapUv:Z&&p(x.aoMap.channel),lightMapUv:re&&p(x.lightMap.channel),bumpMapUv:me&&p(x.bumpMap.channel),normalMapUv:de&&p(x.normalMap.channel),displacementMapUv:We&&p(x.displacementMap.channel),emissiveMapUv:Ie&&p(x.emissiveMap.channel),metalnessMapUv:ze&&p(x.metalnessMap.channel),roughnessMapUv:Ye&&p(x.roughnessMap.channel),anisotropyMapUv:je&&p(x.anisotropyMap.channel),clearcoatMapUv:C&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:he&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ae&&p(x.sheenRoughnessMap.channel),specularMapUv:le&&p(x.specularMap.channel),specularColorMapUv:ve&&p(x.specularColorMap.channel),specularIntensityMapUv:F&&p(x.specularIntensityMap.channel),transmissionMapUv:ue&&p(x.transmissionMap.channel),thicknessMapUv:oe&&p(x.thicknessMap.channel),alphaMapUv:ye&&p(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(de||et),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!A.attributes.uv&&(Ee||ye),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.filter(Re=>Re.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ee&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:Ie&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===er,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function y(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)w.push(I),w.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(w,x),d(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function d(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let w=f[x.type],I;if(w){let R=ir[w];I=Wd.clone(R.uniforms)}else I=x.uniforms;return I}function b(x,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new SC(n,w,x,r),l.push(I),u.set(w,I)),I}function v(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:T}}function AC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function RC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Jb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qb(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,y,m,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=o(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function c(f,p,g,y,m,d,_){_.reversedDepth===!0&&(m=-m);let b=a(f,p,g,y,m,d);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(f,p,g,y,m,d){let _=a(f,p,g,y,m,d);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):t.unshift(_)}function u(f,p){t.length>1&&t.sort(f||RC),i.length>1&&i.sort(p||Jb),r.length>1&&r.sort(p||Jb)}function h(){for(let f=e,p=n.length;f<p;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function CC(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Qb,n.set(i,[o])):r>=s.length?(o=new Qb,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new st};break;case"SpotLight":t={position:new W,direction:new W,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function PC(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var NC=0;function OC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LC(n){let e=new IC,t=PC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);let r=new W,s=new Ct,o=new Ct;function a(l){let u=0,h=0,f=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,_=0,b=0,v=0,E=0,T=0,x=0,w=0,I=0,R=0;l.sort(OC);for(let P=0,U=l.length;P<U;P++){let A=l[P],z=A.color,$=A.intensity,N=A.distance,j=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ms?j=A.shadow.map.texture:j=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=z.r*$,h+=z.g*$,f+=z.b*$;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],$);R++}else if(A.isSunLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=j;let J=q.getViewportCount();for(let se=0;se<J;se++)i.sunShadowMatrix[y+se]=q.getMatrix(se),i.sunShadowCascade[y+se]=q._cascadeData[se];y+=J,g++}i.sun[p]=H,p++}else if(A.isDirectionalLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let q=A.shadow,B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=A.shadow.matrix,E++}i.directional[m]=H,m++}else if(A.isSpotLight){let H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(z).multiplyScalar($),H.distance=N,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[_]=H;let q=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,q.updateMatrices(A),A.castShadow&&I++),i.spotLightMatrix[_]=q.matrix,A.castShadow){let B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=j,x++}_++}else if(A.isRectAreaLight){let H=e.get(A);H.color.copy(z).multiplyScalar($),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[b]=H,b++}else if(A.isPointLight){let H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){let q=A.shadow,B=t.get(A);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,i.pointShadow[d]=B,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=A.shadow.matrix,T++}i.point[d]=H,d++}else if(A.isHemisphereLight){let H=e.get(A);H.skyColor.copy(A.color).multiplyScalar($),H.groundColor.copy(A.groundColor).multiplyScalar($),i.hemi[v]=H,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let O=i.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==d||O.spotLength!==_||O.rectAreaLength!==b||O.hemiLength!==v||O.numSunShadows!==g||O.numDirectionalShadows!==E||O.numPointShadows!==T||O.numSpotShadows!==x||O.numSpotMaps!==w||O.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=d,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,O.sunLength=p,O.directionalLength=m,O.pointLength=d,O.spotLength=_,O.rectAreaLength=b,O.hemiLength=v,O.numSunShadows=g,O.numDirectionalShadows=E,O.numPointShadows=T,O.numSpotShadows=x,O.numSpotMaps=w,O.numLightProbes=R,i.version=NC++)}function c(l,u){let h=0,f=0,p=0,g=0,y=0,m=0,d=u.matrixWorldInverse;for(let _=0,b=l.length;_<b;_++){let v=l[_];if(v.isSunLight){let E=i.sun[h];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),h++}else if(v.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),f++}else if(v.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let E=i.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),o.identity(),s.copy(v.matrixWorld),s.premultiply(d),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:i}}function ev(n){let e=new LC(n),t=[],i=[],r=[];function s(h){u.camera=h,t.length=0,i.length=0,r.length=0}function o(h){h.isLightProbeGrid?r.push(h):t.push(h)}function a(h){i.push(h)}function c(){e.setup(t),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function BC(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ev(n),e.set(r,[a])):s>=o.length?(a=new ev(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var FC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DC=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],kC=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],tv=new Ct,Zc=new W,h0=new W;function zC(n,e,t){let i=new cs,r=new ge,s=new ge,o=new Bt,a=new qh,c=new $h,l={},u=t.maxTextureSize,h={[fs]:xn,[xn]:fs,[er]:er},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:FC,fragmentShader:UC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new dn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let d=this.type;this.render=function(T,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===$_&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vc);let I=n.getRenderTarget(),R=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),P=n.state;P.setBlending(eo),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=d!==this.type;U&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(z=>z.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,z=T.length;A<z;A++){let $=T[A],N=$.shadow;if(N===void 0){$e("WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let j=N.getFrameExtents();r.multiply(j),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,N.mapSize.y=s.y));let H=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=H,N.map===null||U===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ca){if($.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new ei(r.x,r.y,{format:ms,type:Pi,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),N.map.texture.name=$.name+".shadowMap",N.map.depthTexture=new Tr(r.x,r.y,Ii),N.map.depthTexture.name=$.name+".shadowMapDepth",N.map.depthTexture.format=Sr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=hn,N.map.depthTexture.magFilter=hn}else $.isPointLight?(N.map=new Jc(r.x),N.map.depthTexture=new vc(r.x,Ci)):(N.map=new ei(r.x,r.y),N.map.depthTexture=new Tr(r.x,r.y,Ci)),N.map.depthTexture.name=$.name+".shadowMap",N.map.depthTexture.format=Sr,this.type===Vc?(N.map.depthTexture.compareFunction=H?e0:Qm,N.map.depthTexture.minFilter=Fn,N.map.depthTexture.magFilter=Fn):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=hn,N.map.depthTexture.magFilter=hn);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==r.x||N.map.height!==r.y)&&N.map.setSize(r.x,r.y);let q=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();$.isPointLight!==!0&&N.updateMatrices($,w);let B=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:w.layers;for(let J=0;J<q;J++){let se=N.getCamera(J);if($.isPointLight){let V=N.camera,D=N.matrix,X=$.distance||V.far;X!==V.far&&(V.far=X,V.updateProjectionMatrix()),Zc.setFromMatrixPosition($.matrixWorld),V.position.copy(Zc),h0.copy(V.position),h0.add(DC[J]),V.up.copy(kC[J]),V.lookAt(h0),V.updateMatrixWorld(),D.makeTranslation(-Zc.x,-Zc.y,-Zc.z),tv.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),N._frustum.setFromProjectionMatrix(tv,V.coordinateSystem,V.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,J),n.clear();else{J===0&&(n.setRenderTarget(N.map),n.clear());let V=N.getViewport(J);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),P.viewport(o)}i=N.getFrustum(J),v(x,w,se,$,B,this.type)}N.isPointLightShadow!==!0&&this.type===ca&&_(N,w),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(I,R,O)};function _(T,x){let w=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new ei(r.x,r.y,{format:ms,type:Pi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,w,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,w,p,y,null)}function b(T,x,w,I){let R=null,O=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)R=O;else if(R=w.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let P=R.uuid,U=x.uuid,A=l[P];A===void 0&&(A={},l[P]=A);let z=A[U];z===void 0&&(z=R.clone(),A[U]=z,x.addEventListener("dispose",E)),R=z}if(R.visible=x.visible,R.wireframe=x.wireframe,I===ca?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:h[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,w.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=n.properties.get(R);P.light=w}return R}function v(T,x,w,I,R,O){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===ca)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let A=e.update(T),z=T.material;if(Array.isArray(z)){let $=A.groups;for(let N=0,j=$.length;N<j;N++){let H=$[N],q=z[H.materialIndex];if(q&&q.visible){let B=b(T,q,I,O);T.onBeforeShadow(n,T,x,w,A,B,H),n.renderBufferDirect(w,null,A,B,T,H),T.onAfterShadow(n,T,x,w,A,B,H)}}}else if(z.visible){let $=b(T,z,I,O);T.onBeforeShadow(n,T,x,w,A,$,null),n.renderBufferDirect(w,null,A,$,T,null),T.onAfterShadow(n,T,x,w,A,$,null)}}let U=T.children;for(let A=0,z=U.length;A<z;A++)v(U[A],x,w,I,R,O)}function E(T){T.target.removeEventListener("dispose",E);for(let w in l){let I=l[w],R=T.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function VC(n,e){function t(){let F=!1,ue=new Bt,oe=null,we=new Bt(0,0,0,0);return{setMask:function(ye){oe!==ye&&!F&&(n.colorMask(ye,ye,ye,ye),oe=ye)},setLocked:function(ye){F=ye},setClear:function(ye,be,ke,rt,pe){pe===!0&&(ye*=rt,be*=rt,ke*=rt),ue.set(ye,be,ke,rt),we.equals(ue)===!1&&(n.clearColor(ye,be,ke,rt),we.copy(ue))},reset:function(){F=!1,oe=null,we.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,oe=null,we=null,ye=null;return{setReversed:function(be){if(ue!==be){let ke=e.get("EXT_clip_control");be?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ue=be;let rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return ue},setTest:function(be){be?ie(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(be){oe!==be&&!F&&(n.depthMask(be),oe=be)},setFunc:function(be){if(ue&&(be=Tb[be]),we!==be){switch(be){case vh:n.depthFunc(n.NEVER);break;case wh:n.depthFunc(n.ALWAYS);break;case Sh:n.depthFunc(n.LESS);break;case Yo:n.depthFunc(n.LEQUAL);break;case Eh:n.depthFunc(n.EQUAL);break;case Mh:n.depthFunc(n.GEQUAL);break;case Th:n.depthFunc(n.GREATER);break;case Ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=be}},setLocked:function(be){F=be},setClear:function(be){ye!==be&&(ye=be,ue&&(be=1-be),n.clearDepth(be))},reset:function(){F=!1,oe=null,we=null,ye=null,ue=!1}}}function r(){let F=!1,ue=null,oe=null,we=null,ye=null,be=null,ke=null,rt=null,pe=null;return{setTest:function(Ge){F||(Ge?ie(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!F&&(n.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,it,Re){(oe!==Ge||we!==it||ye!==Re)&&(n.stencilFunc(Ge,it,Re),oe=Ge,we=it,ye=Re)},setOp:function(Ge,it,Re){(be!==Ge||ke!==it||rt!==Re)&&(n.stencilOp(Ge,it,Re),be=Ge,ke=it,rt=Re)},setLocked:function(Ge){F=Ge},setClear:function(Ge){pe!==Ge&&(n.clearStencil(Ge),pe=Ge)},reset:function(){F=!1,ue=null,oe=null,we=null,ye=null,be=null,ke=null,rt=null,pe=null}}}let s=new t,o=new i,a=new r,c={},l=new WeakMap,u={},h={},f={},p=new WeakMap,g=[],y=null,m=!1,d=null,_=null,b=null,v=null,E=null,T=null,x=null,w=new st(0,0,0),I=0,R=!1,O=null,P=null,U=null,A=null,z=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=j>=2);let q=null,B={},J=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),V=new Bt().fromArray(J),D=new Bt().fromArray(se);function X(F,ue,oe,we){let ye=new Uint8Array(4),be=n.createTexture();n.bindTexture(F,be),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<oe;ke++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ue+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return be}let te={};te[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(Yo),me(!1),de(Om),ie(n.CULL_FACE),Z(eo);function ie(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ae(F,ue){return f[F]!==ue?(n.bindFramebuffer(F,ue),f[F]=ue,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ee(F,ue){let oe=g,we=!1;if(F){oe=p.get(ue),oe===void 0&&(oe=[],p.set(ue,oe));let ye=F.textures;if(oe.length!==ye.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let be=0,ke=ye.length;be<ke;be++)oe[be]=n.COLOR_ATTACHMENT0+be;oe.length=ye.length,we=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,we=!0);we&&n.drawBuffers(oe)}function Le(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let Y={[no]:n.FUNC_ADD,[Y_]:n.FUNC_SUBTRACT,[j_]:n.FUNC_REVERSE_SUBTRACT};Y[Z_]=n.MIN,Y[K_]=n.MAX;let L={[J_]:n.ZERO,[Q_]:n.ONE,[eb]:n.SRC_COLOR,[Fm]:n.SRC_ALPHA,[ob]:n.SRC_ALPHA_SATURATE,[rb]:n.DST_COLOR,[nb]:n.DST_ALPHA,[tb]:n.ONE_MINUS_SRC_COLOR,[Um]:n.ONE_MINUS_SRC_ALPHA,[sb]:n.ONE_MINUS_DST_COLOR,[ib]:n.ONE_MINUS_DST_ALPHA,[ab]:n.CONSTANT_COLOR,[cb]:n.ONE_MINUS_CONSTANT_COLOR,[lb]:n.CONSTANT_ALPHA,[ub]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(F,ue,oe,we,ye,be,ke,rt,pe,Ge){if(F===eo){m===!0&&(ce(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),F!==X_){if(F!==d||Ge!==R){if((_!==no||E!==no)&&(n.blendEquation(n.FUNC_ADD),_=no,E=no),Ge)switch(F){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case to:n.blendFunc(n.ONE,n.ONE);break;case Lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",F);break}else switch(F){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case to:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lm:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bm:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",F);break}b=null,v=null,T=null,x=null,w.set(0,0,0),I=0,d=F,R=Ge}return}ye=ye||ue,be=be||oe,ke=ke||we,(ue!==_||ye!==E)&&(n.blendEquationSeparate(Y[ue],Y[ye]),_=ue,E=ye),(oe!==b||we!==v||be!==T||ke!==x)&&(n.blendFuncSeparate(L[oe],L[we],L[be],L[ke]),b=oe,v=we,T=be,x=ke),(rt.equals(w)===!1||pe!==I)&&(n.blendColor(rt.r,rt.g,rt.b,pe),w.copy(rt),I=pe),d=F,R=!1}function re(F,ue){F.side===er?ce(n.CULL_FACE):ie(n.CULL_FACE);let oe=F.side===xn;ue&&(oe=!oe),me(oe),F.blending===ps&&F.transparent===!1?Z(eo):Z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let we=F.stencilWrite;a.setTest(we),we&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(F){O!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),O=F)}function de(F){F!==W_?(ie(n.CULL_FACE),F!==P&&(F===Om?n.cullFace(n.BACK):F===q_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),P=F}function We(F){F!==U&&(N&&n.lineWidth(F),U=F)}function Ie(F,ue,oe){F?(ie(n.POLYGON_OFFSET_FILL),(A!==ue||z!==oe)&&(A=ue,z=oe,o.getReversed()&&(ue=-ue,oe=-oe),n.polygonOffset(ue,oe))):ce(n.POLYGON_OFFSET_FILL)}function ze(F){F?ie(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Ye(F){F===void 0&&(F=n.TEXTURE0+$-1),q!==F&&(n.activeTexture(F),q=F)}function et(F,ue,oe){oe===void 0&&(q===null?oe=n.TEXTURE0+$-1:oe=q);let we=B[oe];we===void 0&&(we={type:void 0,texture:void 0},B[oe]=we),(we.type!==F||we.texture!==ue)&&(q!==oe&&(n.activeTexture(oe),q=oe),n.bindTexture(F,ue||te[F]),we.type=F,we.texture=ue)}function k(){let F=B[q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function yt(){try{n.compressedTexImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function tt(){try{n.compressedTexImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function bt(){try{n.texSubImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function xe(){try{n.texSubImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function Vt(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function je(){try{n.texStorage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function C(){try{n.texStorage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function S(){try{n.texImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function fe(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function he(F,ue){h[F]!==ue&&(n.pixelStorei(F,ue),h[F]=ue)}function _e(F){V.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),V.copy(F))}function Me(F){D.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),D.copy(F))}function ae(F,ue){let oe=l.get(ue);oe===void 0&&(oe=new WeakMap,l.set(ue,oe));let we=oe.get(F);we===void 0&&(we=n.getUniformBlockIndex(ue,F.name),n.uniformBlockBinding(ue,we,we),oe.set(F,we))}function le(F,ue,oe){let ye=l.get(ue).get(F);c[ye]!==oe&&(n.bindBufferBase(n.UNIFORM_BUFFER,ye,oe),c[ye]=oe)}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},q=null,B={},f={},c={},p=new WeakMap,g=[],y=null,m=!1,d=null,_=null,b=null,v=null,E=null,T=null,x=null,w=new st(0,0,0),I=0,R=!1,O=null,P=null,U=null,A=null,z=null,V.set(0,0,n.canvas.width,n.canvas.height),D.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:ce,bindFramebuffer:Ae,drawBuffers:Ee,useProgram:Le,setBlending:Z,setMaterial:re,setFlipSided:me,setCullFace:de,setLineWidth:We,setPolygonOffset:Ie,setScissorTest:ze,activeTexture:Ye,bindTexture:et,unbindTexture:k,compressedTexImage2D:yt,compressedTexImage3D:tt,texImage2D:S,texImage3D:Q,pixelStorei:he,getParameter:fe,updateUBOMapping:ae,uniformBlockBinding:le,texStorage2D:je,texStorage3D:C,texSubImage2D:bt,texSubImage3D:xe,compressedTexSubImage2D:Vt,compressedTexSubImage3D:He,scissor:_e,viewport:Me,reset:ve}}function GC(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap,h=new Set,f,p=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,S){return m?new OffscreenCanvas(C,S):pc("canvas")}function _(C,S,Q){let fe=1,he=je(C);if((he.width>Q||he.height>Q)&&(fe=Q/Math.max(he.width,he.height)),fe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let _e=Math.floor(fe*he.width),Me=Math.floor(fe*he.height);f===void 0&&(f=d(_e,Me));let ae=S?d(_e,Me):f;return ae.width=_e,ae.height=Me,ae.getContext("2d").drawImage(C,0,0,_e,Me),$e("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+_e+"x"+Me+")."),ae}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(C,S,Q,fe,he,_e=!1){if(C!==null){if(n[C]!==void 0)return n[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=S;if(S===n.RED&&(Q===n.FLOAT&&(ae=n.R32F),Q===n.HALF_FLOAT&&(ae=n.R16F),Q===n.UNSIGNED_BYTE&&(ae=n.R8),Q===n.UNSIGNED_SHORT&&Me&&(ae=Me.R16_EXT),Q===n.SHORT&&Me&&(ae=Me.R16_SNORM_EXT)),S===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ae=n.R8UI),Q===n.UNSIGNED_SHORT&&(ae=n.R16UI),Q===n.UNSIGNED_INT&&(ae=n.R32UI),Q===n.BYTE&&(ae=n.R8I),Q===n.SHORT&&(ae=n.R16I),Q===n.INT&&(ae=n.R32I)),S===n.RG&&(Q===n.FLOAT&&(ae=n.RG32F),Q===n.HALF_FLOAT&&(ae=n.RG16F),Q===n.UNSIGNED_BYTE&&(ae=n.RG8),Q===n.UNSIGNED_SHORT&&Me&&(ae=Me.RG16_EXT),Q===n.SHORT&&Me&&(ae=Me.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ae=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ae=n.RG16UI),Q===n.UNSIGNED_INT&&(ae=n.RG32UI),Q===n.BYTE&&(ae=n.RG8I),Q===n.SHORT&&(ae=n.RG16I),Q===n.INT&&(ae=n.RG32I)),S===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),Q===n.UNSIGNED_INT&&(ae=n.RGB32UI),Q===n.BYTE&&(ae=n.RGB8I),Q===n.SHORT&&(ae=n.RGB16I),Q===n.INT&&(ae=n.RGB32I)),S===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ae=n.RGBA32UI),Q===n.BYTE&&(ae=n.RGBA8I),Q===n.SHORT&&(ae=n.RGBA16I),Q===n.INT&&(ae=n.RGBA32I)),S===n.RGB&&(Q===n.UNSIGNED_SHORT&&Me&&(ae=Me.RGB16_EXT),Q===n.SHORT&&Me&&(ae=Me.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),S===n.RGBA){let le=_e?fc:ut.getTransfer(he);Q===n.FLOAT&&(ae=n.RGBA32F),Q===n.HALF_FLOAT&&(ae=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ae=le===St?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Me&&(ae=Me.RGBA16_EXT),Q===n.SHORT&&Me&&(ae=Me.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(C,S){let Q;return C?S===null||S===Ci||S===ro?Q=n.DEPTH24_STENCIL8:S===Ii?Q=n.DEPTH32F_STENCIL8:S===ua&&(Q=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===ro?Q=n.DEPTH_COMPONENT24:S===Ii?Q=n.DEPTH_COMPONENT32F:S===ua&&(Q=n.DEPTH_COMPONENT16),Q}function w(C,S){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){let S=new WeakRef(C);i.get(C).__ref=S,g.add(S),y.register(C,S,S)}function R(C){let S=i.get(C).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function O(C){U(C.target)}function P(C){A(C.target)}function U(C){C.removeEventListener("dispose",O),R(C),$(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function A(C){C.removeEventListener("dispose",P),R(C),j(C)}function z(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?A(S):U(S))}g.clear(),h.clear()}function $(C){let S=i.get(C);if(S.__webglInit===void 0)return;let Q=C.source,fe=p.get(Q);if(fe){let he=fe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&N(C),Object.keys(fe).length===0&&p.delete(Q)}i.remove(C)}function N(C){let S=i.get(C);n.deleteTexture(S.__webglTexture);let Q=C.source,fe=p.get(Q);delete fe[S.__cacheKey],o.memory.textures--}function j(C){let S=i.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Q=C.depthTexture;if(Q&&Q.renderTarget===C&&U(Q),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(S.__webglFramebuffer[he]))for(let _e=0;_e<S.__webglFramebuffer[he].length;_e++)n.deleteFramebuffer(S.__webglFramebuffer[he][_e]);else n.deleteFramebuffer(S.__webglFramebuffer[he]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[he])}else{if(Array.isArray(S.__webglFramebuffer))for(let he=0;he<S.__webglFramebuffer.length;he++)n.deleteFramebuffer(S.__webglFramebuffer[he]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let he=0;he<S.__webglColorRenderbuffer.length;he++)S.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[he]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let fe=C.textures;for(let he=0,_e=fe.length;he<_e;he++){let Me=i.get(fe[he]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(fe[he])}i.remove(C)}let H=0;function q(){H=0}function B(){return H}function J(C){H=C}function se(){let C=H;return C>=r.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,C}function V(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function D(C,S){let Q=i.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Q.__version!==C.version){let fe=C.image;if(fe===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{re(Q,C,S);return}}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+S)}function X(C,S){let Q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){re(Q,C,S);return}else C.isExternalTexture&&(Q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+S)}function te(C,S){let Q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){re(Q,C,S);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+S)}function ie(C,S){let Q=i.get(C);if(C.version>0&&Q.__version!==C.version){me(Q,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+S)}let ce={[Rh]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},Ae={[hn]:n.NEAREST,[fb]:n.NEAREST_MIPMAP_NEAREST,[Hc]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[od]:n.LINEAR_MIPMAP_NEAREST,[Rr]:n.LINEAR_MIPMAP_LINEAR},Ee={[yb]:n.NEVER,[t0]:n.ALWAYS,[xb]:n.LESS,[Qm]:n.LEQUAL,[_b]:n.EQUAL,[e0]:n.GEQUAL,[bb]:n.GREATER,[vb]:n.NOTEQUAL};function Le(C,S){if(S.type===Ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===od||S.magFilter===Hc||S.magFilter===Rr||S.minFilter===Fn||S.minFilter===od||S.minFilter===Hc||S.minFilter===Rr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ce[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ce[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ce[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ae[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Hc&&S.minFilter!==Rr||S.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Y(C,S){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",O),I(S));let fe=S.source,he=p.get(fe);he===void 0&&(he={},p.set(fe,he));let _e=V(S);if(_e!==C.__cacheKey){he[_e]===void 0&&(he[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),he[_e].usedTimes++;let Me=he[C.__cacheKey];Me!==void 0&&(he[C.__cacheKey].usedTimes--,Me.usedTimes===0&&N(S)),C.__cacheKey=_e,C.__webglTexture=he[_e].texture}return Q}function L(C,S,Q){return Math.floor(Math.floor(C/Q)/S)}function Z(C,S,Q,fe){let _e=C.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,Q,fe,S.data);else{_e.sort((F,ue)=>F.start-ue.start);let Me=0;for(let F=1;F<_e.length;F++){let ue=_e[Me],oe=_e[F],we=ue.start+ue.count,ye=L(oe.start,S.width,4),be=L(ue.start,S.width,4);oe.start<=we+1&&ye===be&&L(oe.start+oe.count-1,S.width,4)===ye?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++Me,_e[Me]=oe)}_e.length=Me+1;let ae=t.getParameter(n.UNPACK_ROW_LENGTH),le=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let F=0,ue=_e.length;F<ue;F++){let oe=_e[F],we=Math.floor(oe.start/4),ye=Math.ceil(oe.count/4),be=we%S.width,ke=Math.floor(we/S.width),rt=ye,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,be),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,be,ke,rt,pe,Q,fe,S.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function re(C,S,Q){let fe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=n.TEXTURE_3D);let he=Y(C,S),_e=S.source;t.bindTexture(fe,C.__webglTexture,n.TEXTURE0+Q);let Me=i.get(_e);if(_e.version!==Me.__version||he===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let pe=ut.getPrimaries(ut.workingColorSpace),Ge=S.colorSpace===Ir?null:ut.getPrimaries(S.colorSpace),it=S.colorSpace===Ir||pe===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let le=_(S.image,!1,r.maxTextureSize);le=He(S,le);let ve=s.convert(S.format,S.colorSpace),F=s.convert(S.type),ue=T(S.internalFormat,ve,F,S.normalized,S.colorSpace,S.isVideoTexture);Le(fe,S);let oe,we=S.mipmaps,ye=S.isVideoTexture!==!0,be=Me.__version===void 0||he===!0,ke=_e.dataReady,rt=w(S,le);if(S.isDepthTexture)ue=x(S.format===Cr,S.type),be&&(ye?t.texStorage2D(n.TEXTURE_2D,1,ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,ue,le.width,le.height,0,ve,F,null));else if(S.isDataTexture)if(we.length>0){ye&&be&&t.texStorage2D(n.TEXTURE_2D,rt,ue,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)oe=we[pe],ye?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,oe.width,oe.height,ve,F,oe.data):t.texImage2D(n.TEXTURE_2D,pe,ue,oe.width,oe.height,0,ve,F,oe.data);S.generateMipmaps=!1}else ye?(be&&t.texStorage2D(n.TEXTURE_2D,rt,ue,le.width,le.height),ke&&Z(S,le,ve,F)):t.texImage2D(n.TEXTURE_2D,0,ue,le.width,le.height,0,ve,F,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ye&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ue,we[0].width,we[0].height,le.depth);for(let pe=0,Ge=we.length;pe<Ge;pe++)if(oe=we[pe],S.format!==Ni)if(ve!==null)if(ye){if(ke)if(S.layerUpdates.size>0){let it=l0(oe.width,oe.height,S.format,S.type);for(let Re of S.layerUpdates){let Et=oe.data.subarray(Re*it/oe.data.BYTES_PER_ELEMENT,(Re+1)*it/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Re,oe.width,oe.height,1,ve,Et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,oe.width,oe.height,le.depth,ve,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,ue,oe.width,oe.height,le.depth,0,oe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,oe.width,oe.height,le.depth,ve,F,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,ue,oe.width,oe.height,le.depth,0,ve,F,oe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ye&&be&&t.texStorage2D(n.TEXTURE_2D,rt,ue,we[0].width,we[0].height);for(let pe=0,Ge=we.length;pe<Ge;pe++)oe=we[pe],S.format!==Ni?ve!==null?ye?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,oe.width,oe.height,ve,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,ue,oe.width,oe.height,0,oe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,oe.width,oe.height,ve,F,oe.data):t.texImage2D(n.TEXTURE_2D,pe,ue,oe.width,oe.height,0,ve,F,oe.data)}else if(S.isDataArrayTexture)if(ye){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ue,le.width,le.height,le.depth),ke)if(S.layerUpdates.size>0){let pe=l0(le.width,le.height,S.format,S.type);for(let Ge of S.layerUpdates){let it=le.data.subarray(Ge*pe/le.data.BYTES_PER_ELEMENT,(Ge+1)*pe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,le.width,le.height,1,ve,F,it)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,F,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,le.width,le.height,le.depth,0,ve,F,le.data);else if(S.isData3DTexture)ye?(be&&t.texStorage3D(n.TEXTURE_3D,rt,ue,le.width,le.height,le.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,F,le.data)):t.texImage3D(n.TEXTURE_3D,0,ue,le.width,le.height,le.depth,0,ve,F,le.data);else if(S.isFramebufferTexture){if(be)if(ye)t.texStorage2D(n.TEXTURE_2D,rt,ue,le.width,le.height);else{let pe=le.width,Ge=le.height;for(let it=0;it<rt;it++)t.texImage2D(n.TEXTURE_2D,it,ue,pe,Ge,0,ve,F,null),pe>>=1,Ge>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),le.parentNode!==pe){pe.appendChild(le),h.add(S),pe.onpaint=Ge=>{let it=Ge.changedElements;for(let Re of h)it.includes(Re.image)&&(Re.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,le);else{let it=n.RGBA,Re=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,it,Re,Et,le)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(ye&&be){let pe=je(we[0]);t.texStorage2D(n.TEXTURE_2D,rt,ue,pe.width,pe.height)}for(let pe=0,Ge=we.length;pe<Ge;pe++)oe=we[pe],ye?ke&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve,F,oe):t.texImage2D(n.TEXTURE_2D,pe,ue,ve,F,oe);S.generateMipmaps=!1}else if(ye){if(be){let pe=je(le);t.texStorage2D(n.TEXTURE_2D,rt,ue,pe.width,pe.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,F,le)}else t.texImage2D(n.TEXTURE_2D,0,ue,ve,F,le);b(S)&&S.mipmapsAutoUpdate===!0&&v(fe),Me.__version=_e.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function me(C,S,Q){if(S.image.length!==6)return;let fe=Y(C,S),he=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Q);let _e=i.get(he);if(he.version!==_e.__version||fe===!0){t.activeTexture(n.TEXTURE0+Q);let Me=ut.getPrimaries(ut.workingColorSpace),ae=S.colorSpace===Ir?null:ut.getPrimaries(S.colorSpace),le=S.colorSpace===Ir||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,F=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let Re=0;Re<6;Re++)!ve&&!F?ue[Re]=_(S.image[Re],!0,r.maxCubemapSize):ue[Re]=F?S.image[Re].image:S.image[Re],ue[Re]=He(S,ue[Re]);let oe=ue[0],we=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),be=T(S.internalFormat,we,ye,S.normalized,S.colorSpace),ke=S.isVideoTexture!==!0,rt=_e.__version===void 0||fe===!0,pe=he.dataReady,Ge=w(S,oe);Le(n.TEXTURE_CUBE_MAP,S);let it;if(S.isDepthTexture){if(be=x(S.format===Cr,S.type),rt)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,be,oe.width,oe.height);else for(let Re=0;Re<6;Re++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,oe.width,oe.height,0,we,ye,null)}else if(ve){ke&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,be,oe.width,oe.height);for(let Re=0;Re<6;Re++){it=ue[Re].mipmaps;for(let Et=0;Et<it.length;Et++){let cn=it[Et];S.format!==Ni?we!==null?ke?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,cn.width,cn.height,we,cn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,be,cn.width,cn.height,0,cn.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,0,0,cn.width,cn.height,we,ye,cn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et,be,cn.width,cn.height,0,we,ye,cn.data)}}}else{if(it=S.mipmaps,ke&&rt){it.length>0&&Ge++;let Re=je(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,be,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(F){ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ue[Re].width,ue[Re].height,we,ye,ue[Re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,ue[Re].width,ue[Re].height,0,we,ye,ue[Re].data);for(let Et=0;Et<it.length;Et++){let Nr=it[Et].image[Re].image;ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,Nr.width,Nr.height,we,ye,Nr.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,be,Nr.width,Nr.height,0,we,ye,Nr.data)}}else{ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,we,ye,ue[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,we,ye,ue[Re]);for(let Et=0;Et<it.length;Et++){let cn=it[Et];ke?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,0,0,we,ye,cn.image[Re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Et+1,be,we,ye,cn.image[Re])}}}b(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),_e.__version=he.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function de(C,S,Q,fe,he,_e){let Me=s.convert(Q.format,Q.colorSpace),ae=s.convert(Q.type),le=T(Q.internalFormat,Me,ae,Q.normalized,Q.colorSpace),ve=i.get(S),F=i.get(Q);if(F.__renderTarget=S,!ve.__hasExternalTextures){let ue=Math.max(1,S.width>>_e),oe=Math.max(1,S.height>>_e);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,_e,le,ue,oe,S.depth,0,Me,ae,null):t.texImage2D(he,_e,le,ue,oe,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,F.__webglTexture,0,bt(S)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,F.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,S,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){let fe=S.depthTexture,he=fe&&fe.isDepthTexture?fe.type:null,_e=x(S.stencilBuffer,he),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(S),_e,S.width,S.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(S),_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,C)}else{let fe=S.textures;for(let he=0;he<fe.length;he++){let _e=fe[he],Me=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),le=T(_e.internalFormat,Me,ae,_e.normalized,_e.colorSpace);xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(S),le,S.width,S.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(S),le,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,le,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(C,S,Q){let fe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=i.get(S.depthTexture);he.__renderTarget=S;let _e=fe?S.depthTexture.image[0]:S.depthTexture.image;(!he.__webglTexture||_e.width!==S.width||_e.height!==S.height)&&(_e.width=S.width,_e.height=S.height,S.depthTexture.needsUpdate=!0),fe?ie(S.depthTexture,0):D(S.depthTexture,0);let Me=he.__webglTexture,ae=bt(S),le=fe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,ve=S.depthTexture.format===Cr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Sr)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,le,Me,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,ve,le,Me,0);else if(S.depthTexture.format===Cr)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,le,Me,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,ve,le,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(C){let S=i.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let fe=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){let he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",he)};fe.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=fe}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(Q)for(let fe=0;fe<6;fe++)Ie(S.__webglFramebuffer[fe],C,fe);else C.texture.mipmaps.length>0?Ie(S.__webglFramebuffer[0],C,0):Ie(S.__webglFramebuffer,C,0);else if(Q){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=n.createRenderbuffer(),We(S.__webglDepthbuffer[fe],C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[fe];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,_e)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),We(S.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(C,S,Q){let fe=i.get(C);S!==void 0&&de(fe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&ze(C)}function et(C){let S=C.texture,Q=i.get(C),fe=i.get(S);C.addEventListener("dispose",P),I(C);let he=C.textures,_e=C.isWebGLCubeRenderTarget===!0,Me=he.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=S.version,o.memory.textures++),_e){Q.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0){Q.__webglFramebuffer[ae]=[];for(let le=0;le<S.mipmaps.length;le++)Q.__webglFramebuffer[ae][le]=n.createFramebuffer()}else Q.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)Q.__webglFramebuffer[ae]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,le=he.length;ae<le;ae++){let ve=i.get(he[ae]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&xe(C)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ae=0;ae<he.length;ae++){let le=he[ae];Q.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ae]);let ve=s.convert(le.format,le.colorSpace),F=s.convert(le.type),ue=T(le.internalFormat,ve,F,le.normalized,le.colorSpace,C.isXRRenderTarget===!0),oe=bt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),We(Q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Le(n.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)de(Q.__webglFramebuffer[ae][le],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else de(Q.__webglFramebuffer[ae],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);b(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ae=0,le=he.length;ae<le;ae++){let ve=he[ae],F=i.get(ve),ue=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,F.__webglTexture),Le(ue,ve),de(Q.__webglFramebuffer,C,ve,n.COLOR_ATTACHMENT0+ae,ue,0),b(ve)&&v(ue)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,fe.__webglTexture),Le(ae,S),S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)de(Q.__webglFramebuffer[le],C,S,n.COLOR_ATTACHMENT0,ae,le);else de(Q.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ae,0);b(S)?v(ae):S.mipmaps.length>0&&n.texParameteri(ae,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ze(C)}function k(C){let S=C.textures;for(let Q=0,fe=S.length;Q<fe;Q++){let he=S[Q];if(b(he)&&he.mipmapsAutoUpdate===!0){let _e=E(C),Me=i.get(he).__webglTexture;t.bindTexture(_e,Me),v(_e),t.unbindTexture()}}}let yt=[];function tt(C){if(C.samples>0){if(xe(C)===!1){let S=C.textures,Q=C.width,fe=C.height,he=n.COLOR_BUFFER_BIT,_e=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),ae=S.length>1;if(ae)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let F=i.get(S[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,F,0)}n.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,he,n.NEAREST),c===!0&&(yt.length=0,yt.push(n.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&yt.push(_e),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let F=i.get(S[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,F,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function bt(C){return Math.min(r.maxSamples,C.samples)}function xe(C){let S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(C){let S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function He(C,S){let Q=C.colorSpace,fe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Q!==dc&&Q!==Ir&&(ut.getTransfer(Q)===St?(fe!==Ni||he!==Wn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",Q)),S}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=se,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=J,this.setTexture2D=D,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=Ye,this.setupRenderTarget=et,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe,this.dispose=z}function HC(n,e){function t(i,r=Ir){let s,o=ut.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===cd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ym)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$m)return n.BYTE;if(i===Xm)return n.SHORT;if(i===ua)return n.UNSIGNED_SHORT;if(i===ad)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Ii)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Zm)return n.ALPHA;if(i===Km)return n.RGB;if(i===Ni)return n.RGBA;if(i===Sr)return n.DEPTH_COMPONENT;if(i===Cr)return n.DEPTH_STENCIL;if(i===Jm)return n.RED;if(i===ud)return n.RED_INTEGER;if(i===ms)return n.RG;if(i===hd)return n.RG_INTEGER;if(i===dd)return n.RGBA_INTEGER;if(i===Wc||i===qc||i===$c||i===Xc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===xd||i===_d||i===bd||i===vd||i===Yc||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===xd)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bd)return s.COMPRESSED_R11_EAC;if(i===vd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Yc)return s.COMPRESSED_RG11_EAC;if(i===wd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sd||i===Ed||i===Md||i===Td||i===Ad||i===Rd||i===Cd||i===Id||i===Pd||i===Nd||i===Od||i===Ld||i===Bd||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Md)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ad)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ud||i===Dd||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ud)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zd||i===Vd||i===jc||i===Gd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var WC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qC=`
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

}`,x0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new wc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Tn({vertexShader:WC,fragmentShader:qC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_0=class extends Ki{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new x0,d={},_=t.getContextAttributes(),b=null,v=null,E=[],T=[],x=new ge,w=null,I=null,R=new Mn;R.viewport=new Bt;let O=new Mn;O.viewport=new Bt;let P=[R,O],U=new id,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let D=E[V];return D===void 0&&(D=new Qo,E[V]=D),D.getTargetRaySpace()},this.getControllerGrip=function(V){let D=E[V];return D===void 0&&(D=new Qo,E[V]=D),D.getGripSpace()},this.getHand=function(V){let D=E[V];return D===void 0&&(D=new Qo,E[V]=D),D.getHandSpace()};function $(V){let D=T.indexOf(V.inputSource);if(D===-1)return;let X=E[D];X!==void 0&&(X.update(V.inputSource,V.frame,l||o),X.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",j);for(let V=0;V<E.length;V++){let D=T[V];D!==null&&(T[V]=null,E[V].disconnect(D))}A=null,z=null,m.reset();for(let V in d)delete d[V];if(e.setRenderTarget(b),p=null,f=null,h=null,r=null,v=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),I!==null){let V=I.camera;V.fov=I.fov,V.zoom=I.zoom,V.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",N),r.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,te=null,ie=null;_.depth&&(ie=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=_.stencil?Cr:Sr,te=_.stencil?ro:Ci);let ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ei(f.textureWidth,f.textureHeight,{format:Ni,type:Wn,depthTexture:new Tr(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let X={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ei(p.framebufferWidth,p.framebufferHeight,{format:Ni,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(V){for(let D=0;D<V.removed.length;D++){let X=V.removed[D],te=T.indexOf(X);te>=0&&(T[te]=null,E[te].disconnect(X))}for(let D=0;D<V.added.length;D++){let X=V.added[D],te=T.indexOf(X);if(te===-1){for(let ce=0;ce<E.length;ce++)if(ce>=T.length){T.push(X),te=ce;break}else if(T[ce]===null){T[ce]=X,te=ce;break}if(te===-1)break}let ie=E[te];ie&&ie.connect(X)}}function H(V,D){D===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(D.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let D=V.near,X=V.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&(X=m.depthFar)),U.near=O.near=R.near=D,U.far=O.far=R.far=X,(A!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),A=U.near,z=U.far),U.layers.mask=V.layers.mask|6,R.layers.mask=U.layers.mask&-5,O.layers.mask=U.layers.mask&-3;let te=V.parent,ie=U.cameras;H(U,te);for(let ce=0;ce<ie.length;ce++)H(ie[ce],te);U.projectionMatrix.copy(R.projectionMatrix),U.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&V.isPerspectiveCamera&&(I={camera:V,fov:V.fov,zoom:V.zoom}),q(V,U,te)};function q(V,D,X){X===null?V.matrix.copy(D.matrixWorld):(V.matrix.copy(X.matrixWorld),V.matrix.invert(),V.matrix.multiply(D.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(D.projectionMatrix),V.projectionMatrixInverse.copy(D.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ph*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(V){return d[V]};let B=null;function J(V,D){if(u=D.getViewerPose(l||o),g=D,u!==null){let X=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let te=!1;X.length!==U.cameras.length&&(U.cameras.length=0,te=!0);for(let Ee=0;Ee<X.length;Ee++){let Le=X[Ee],Y=null;if(p!==null)Y=p.getViewport(Le);else{let Z=h.getViewSubImage(f,Le);Y=Z.viewport,Ee===0&&(e.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(v))}let L=P[Ee];L===void 0&&(L=new Mn,L.layers.enable(Ee),L.viewport=new Bt,P[Ee]=L),L.matrix.fromArray(Le.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Le.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Y.x,Y.y,Y.width,Y.height),Ee===0&&(U.matrix.copy(L.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),te===!0&&U.cameras.push(L)}let ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let Ee=h.getDepthInformation(X[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,r.renderState)}if(ie&&ie.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ee=0;Ee<X.length;Ee++){let Le=X[Ee].camera;if(Le){let Y=d[Le];Y||(Y=new wc,d[Le]=Y);let L=h.getCameraImage(Le);Y.sourceTexture=L}}}}for(let X=0;X<E.length;X++){let te=T[X],ie=E[X];te!==null&&ie!==void 0&&ie.update(te,D,l||o)}B&&B(V,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}let se=new nv;se.setAnimationLoop(J),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}},$C=new Ct,dv=new Ze;dv.set(-1,0,0,0,1,0,0,0,1);function XC(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,o0(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,b,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,_,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d),b=_.envMap,v=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4($C.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dv),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YC(n,e,t,i){let r={},s={};function o(_,b){let v=b.program;i.uniformBlockBinding(_,v,r[_.id])}function a(_,b){let v=r[_.id];v===void 0&&(g(_),v=c(_),r[_.id]=v,_.addEventListener("dispose",m));let E=b.program;i.updateUBOMapping(_,E);let T=e.render.frame;s[_.id]!==T&&(l(_),s[_.id]=T)}function c(_){let b=n.createBuffer(),v=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,E),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function l(_){let b=r[_.id],v=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,x=v.length;T<x;T++){let w=v[T];if(Array.isArray(w))for(let I=0,R=w.length;I<R;I++)u(w[I],T,I,E);else u(w,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,v,E){if(f(_,b,v,E)===!0){let T=_.__offset,x=_.value;if(Array.isArray(x)){let w=0;for(let I=0;I<x.length;I++){let R=x[I],O=y(R,!0);h(R,_.__data,w),w+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function h(_,b,v){typeof _=="number"||typeof _=="boolean"?b[v]=_:_.isMatrix3?(b[v]=_.elements[0],b[v+1]=_.elements[1],b[v+2]=_.elements[2],b[v+3]=0,b[v+4]=_.elements[3],b[v+5]=_.elements[4],b[v+6]=_.elements[5],b[v+7]=0,b[v+8]=_.elements[6],b[v+9]=_.elements[7],b[v+10]=_.elements[8],b[v+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-v),v):_.toArray(b,v)}function f(_,b,v,E){let T=_.value,x=b+"_"+v;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let w=E[x],I=!1;for(let R=0;R<T.length;R++)p(T[R],w,R)===!0&&(I=!0);return I}return p(T,E,x)}function p(_,b,v){if(b[v]===void 0)return typeof _=="number"||typeof _=="boolean"?b[v]=_:ArrayBuffer.isView(_)?b[v]=_.slice():b[v]=_.clone(),!0;{let E=b[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return b[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function g(_){let b=_.uniforms,v=0,E=16;for(let x=0,w=b.length;x<w;x++){let I=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,O=I.length;R<O;R++){let P=I[R],U=Array.isArray(P.value)?P.value:[P.value],A=Array.isArray(b[x])||Array.isArray(P.value),z=v;for(let N=0,j=U.length;N<j;N++){let H=U[N],q=y(H,A),B=v%E,J=B%q.boundary,se=B+J;v+=J,se!==0&&E-se<q.storage&&(v+=E-se),N===0&&(z=v),v+=q.storage}let $=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new $((v-z)/Float32Array.BYTES_PER_ELEMENT),P.__offset=z}}let T=v%E;return T>0&&(v+=E-T),_.__size=v,_.__cache={},this}function y(_,b){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(let _ in r)n.deleteBuffer(r[_]);r={},s={}}return{bind:o,update:a,dispose:d}}var jC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;function ZC(){return nr===null&&(nr=new Bh(jC,16,16,ms,Pi),nr.name="DFG_LUT",nr.minFilter=Fn,nr.magFilter=Fn,nr.wrapS=ji,nr.wrapT=ji,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var Yd=class{constructor(e={}){let{canvas:t=Sb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=p,m=new Set([dd,hd,ud]),d=new Set([Wn,Ci,ua,ro,cd,ld]),_=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],w=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,O=!1,P=null,U=null,A=null,z=null;this._outputColorSpace=gn;let $=0,N=0,j=null,H=-1,q=null,B=new Bt,J=new Bt,se=null,V=new st(0),D=0,X=t.width,te=t.height,ie=1,ce=null,Ae=null,Ee=new Bt(0,0,X,te),Le=new Bt(0,0,X,te),Y=!1,L=new cs,Z=new Fh,re=!1,me=!1,de=new Ct,We=new W,Ie=new Bt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function et(){return j===null?ie:1}let k=i;function yt(M,G){return t.getContext(M,G)}let tt,bt,xe,Vt,He,je,C,S,Q,fe,he,_e,Me,ae,le,ve,F,ue,oe,we,ye,be,ke;try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Re,!1),k===null){let G="webgl2";if(k=yt(G,M),k===null)throw yt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(M){throw t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Xe("WebGLRenderer: "+M.message),M}function rt(){tt=new aR(k),tt.init(),ye=new HC(k,tt),bt=new Z2(k,tt,e,ye),xe=new VC(k,tt),bt.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),U=k.createFramebuffer(),A=k.createFramebuffer(),z=k.createFramebuffer(),Vt=new uR(k),He=new AC,je=new GC(k,tt,xe,He,bt,ye,Vt),C=new oR(R),S=new dT(k),be=new Y2(k,S),Q=new cR(k,S,Vt,be),fe=new dR(k,Q,S,be,Vt),ue=new hR(k,bt,je),le=new K2(He),he=new TC(R,C,tt,bt,be,le),_e=new XC(R,He),Me=new CC,ae=new BC(tt),F=new X2(R,C,xe,fe,g,c),ve=new zC(R,fe,bt),ke=new YC(k,Vt,bt,xe),oe=new j2(k,tt,Vt),we=new lR(k,tt,Vt),Vt.programs=he.programs,R.capabilities=bt,R.extensions=tt,R.properties=He,R.renderLists=Me,R.shadowMap=ve,R.state=xe,R.info=Vt}y!==Wn&&(I=new pR(y,t.width,t.height,a,r,s));let pe=new _0(R,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(X,te,!1))},this.getSize=function(M){return M.set(X,te)},this.setSize=function(M,G,ne=!0){if(pe.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,te=G,t.width=Math.floor(M*ie),t.height=Math.floor(G*ie),ne===!0&&(t.style.width=M+"px",t.style.height=G+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(X*ie,te*ie).floor()},this.setDrawingBufferSize=function(M,G,ne){X=M,te=G,ie=ne,t.width=Math.floor(M*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(y===Wn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(B)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,G,ne,K){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,G,ne,K),xe.viewport(B.copy(Ee).multiplyScalar(et()).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,G,ne,K){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,G,ne,K),xe.scissor(J.copy(Le).multiplyScalar(et()).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){xe.setScissorTest(Y=M)},this.setOpaqueSort=function(M){ce=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,ne=!0){let K=0;if(M){let ee=!1;if(j!==null){let Te=j.texture.format;ee=m.has(Te)}if(ee){let Te=j.texture.type,Oe=d.has(Te),Se=F.getClearColor(),Pe=F.getClearAlpha(),Ue=Se.r,Ke=Se.g,ct=Se.b;Oe?(_[0]=Ue,_[1]=Ke,_[2]=ct,_[3]=Pe,k.clearBufferuiv(k.COLOR,0,_)):(b[0]=Ue,b[1]=Ke,b[2]=ct,b[3]=Pe,k.clearBufferiv(k.COLOR,0,b))}else K|=k.COLOR_BUFFER_BIT}G&&(K|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),F.dispose(),Me.dispose(),ae.dispose(),je.dispose(),He.dispose(),C.dispose(),fe.dispose(),Q.dispose(),be.dispose(),ke.dispose(),he.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",T0),pe.removeEventListener("sessionend",A0),_s.stop()};function Ge(M){M.preventDefault(),i0("WebGLRenderer: Context Lost."),O=!0}function it(){i0("WebGLRenderer: Context Restored."),O=!1;let M=Vt.autoReset,G=ve.enabled,ne=ve.autoUpdate,K=ve.needsUpdate,ee=ve.type;rt(),Vt.autoReset=M,ve.enabled=G,ve.autoUpdate=ne,ve.needsUpdate=K,ve.type=ee}function Re(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){let G=M.target;G.removeEventListener("dispose",Et),cn(G)}function cn(M){Nr(M),He.remove(M)}function Nr(M){let G=He.get(M).programs;G!==void 0&&(G.forEach(function(ne){he.releaseProgram(ne)}),M.isShaderMaterial&&he.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,ne,K,ee,Te){G===null&&(G=ze);let Oe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Se=Vv(M,G,ne,K,ee);xe.setMaterial(K,Oe);let Pe=ne.index,Ue=1;if(K.wireframe===!0){if(Pe=Q.getWireframeAttribute(ne),Pe===void 0)return;Ue=2}let Ke=ne.drawRange,ct=ne.attributes.position,Be=Ke.start*Ue,lt=(Ke.start+Ke.count)*Ue;Te!==null&&(Be=Math.max(Be,Te.start*Ue),lt=Math.min(lt,(Te.start+Te.count)*Ue)),Pe!==null?(Be=Math.max(Be,0),lt=Math.min(lt,Pe.count)):ct!=null&&(Be=Math.max(Be,0),lt=Math.min(lt,ct.count));let Zt=lt-Be;if(Zt<0||Zt===1/0)return;be.setup(ee,K,Se,ne,Pe);let It,At=oe;if(Pe!==null&&(It=S.get(Pe),At=we,At.setIndex(It)),ee.isMesh)K.wireframe===!0?(xe.setLineWidth(K.wireframeLinewidth*et()),At.setMode(k.LINES)):At.setMode(k.TRIANGLES);else if(ee.isLine){let _n=K.linewidth;_n===void 0&&(_n=1),xe.setLineWidth(_n*et()),ee.isLineSegments?At.setMode(k.LINES):ee.isLineLoop?At.setMode(k.LINE_LOOP):At.setMode(k.LINE_STRIP)}else ee.isPoints?At.setMode(k.POINTS):ee.isSprite&&At.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))At.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let _n=ee._multiDrawStarts,Fe=ee._multiDrawCounts,Rn=ee._multiDrawCount,vt=Pe?S.get(Pe).bytesPerElement:1,bs=He.get(K).currentProgram.getUniforms();for(let bn=0;bn<Rn;bn++)bs.setValue(k,"_gl_DrawID",bn),At.render(_n[bn]/vt,Fe[bn])}else if(ee.isInstancedMesh)At.renderInstances(Be,Zt,ee.count);else if(ne.isInstancedBufferGeometry){let _n=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Fe=Math.min(ne.instanceCount,_n);At.renderInstances(Be,Zt,Fe)}else At.render(Be,Zt)};function M0(M,G,ne,K){P!==null&&M.isNodeMaterial&&P.setObject(K,M),re===!0&&le.setState(M,ne,!1),M.transparent===!0&&M.side===er&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,xa(M,G,K),M.side=fs,M.needsUpdate=!0,xa(M,G,K),M.side=er):xa(M,G,K)}this.compile=function(M,G,ne=null){ne===null&&(ne=M),P!==null&&P.renderStart(M,G,ne),T=ae.get(ne),T.init(G),w.push(T),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),M!==ne&&M.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights(),P!==null&&P.updateLights(T.state.lightsArray),me=this.localClippingEnabled,re=le.init(this.clippingPlanes,me),re===!0&&le.setGlobalState(this.clippingPlanes,G),P!==null&&ve.render(T.state.shadowsArray,ne,G);let K=new Set;return M.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Te=ee.material;if(Te)if(Array.isArray(Te))for(let Oe=0;Oe<Te.length;Oe++){let Se=Te[Oe];M0(Se,ne,G,ee),K.add(Se)}else M0(Te,ne,G,ee),K.add(Te)}),T=w.pop(),P!==null&&P.renderEnd(),K},this.compileAsync=function(M,G,ne=null){let K=this.compile(M,G,ne);return new Promise(ee=>{function Te(){if(K.forEach(function(Oe){let Pe=He.get(Oe).currentProgram;(Pe===void 0||Pe.isReady())&&K.delete(Oe)}),K.size===0){ee(M);return}setTimeout(Te,10)}tt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let hf=null;function kv(M){hf&&hf(M)}function T0(){_s.stop()}function A0(){_s.start()}let _s=new nv;_s.setAnimationLoop(kv),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(M){hf=M,pe.setAnimationLoop(M),M===null?_s.stop():_s.start()},pe.addEventListener("sessionstart",T0),pe.addEventListener("sessionend",A0),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;P!==null&&P.renderStart(M,G);let ne=pe.enabled===!0&&pe.isPresenting===!0,K=I!==null&&(j===null||ne)&&I.begin(R,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,G,j),T=ae.get(M,w.length),T.init(G),T.state.textureUnits=je.getTextureUnits(),w.push(T),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Z.setFromArrayCamera(G):L.setFromProjectionMatrix(de,ui,G.reversedDepth),me=this.localClippingEnabled,re=le.init(this.clippingPlanes,me),E=Me.get(M,x.length),E.init(),x.push(E),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Oe=R.xr.getDepthSensingMesh();Oe!==null&&df(Oe,G,-1/0,R.sortObjects)}df(M,G,0,R.sortObjects),E.finish(),P!==null&&P.updateLights(T.state.lightsArray),R.sortObjects===!0&&E.sort(ce,Ae),Ye=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Ye&&F.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),re===!0&&le.beginShadows();let ee=T.state.shadowsArray;if(ve.render(ee,M,G),re===!0&&le.endShadows(),(K&&I.hasRenderPass())===!1){let Oe=E.opaque,Se=E.transmissive;if(T.setupLights(),G.isArrayCamera){let Pe=G.cameras;if(Se.length>0)for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){let ct=Pe[Ue];C0(Oe,Se,M,ct)}Ye&&F.render(M);for(let Ue=0,Ke=Pe.length;Ue<Ke;Ue++){let ct=Pe[Ue];R0(E,M,ct,ct.viewport)}}else Se.length>0&&C0(Oe,Se,M,G),Ye&&F.render(M),R0(E,M,G)}j!==null&&N===0&&(je.updateMultisampleRenderTarget(j),je.updateRenderTargetMipmap(j)),K&&I.end(R),M.isScene===!0&&M.onAfterRender(R,M,G),be.resetDefaultState(),H=-1,q=null,w.pop(),w.length>0?(T=w[w.length-1],je.setTextureUnits(T.state.textureUnits),re===!0&&le.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,P!==null&&P.renderEnd()};function df(M,G,ne,K){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)ne=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Oe=G.isArrayCamera?Z:L;if(!M.frustumCulled||M.intersectsFrustum(Oe)){K&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);let Se=fe.update(M),Pe=M.material;Pe.visible&&E.push(M,Se,Pe,ne,Ie.z,null,G)}}else if(M.isMesh||M.isLine||M.isPoints){let Oe=G.isArrayCamera?Z:L;if(!M.frustumCulled||M.intersectsFrustum(Oe)){let Se=fe.update(M),Pe=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){let Ue=Se.groups;for(let Ke=0,ct=Ue.length;Ke<ct;Ke++){let Be=Ue[Ke],lt=Pe[Be.materialIndex];lt&&lt.visible&&E.push(M,Se,lt,ne,Ie.z,Be,G)}}else Pe.visible&&E.push(M,Se,Pe,ne,Ie.z,null,G)}}}let Te=M.children;for(let Oe=0,Se=Te.length;Oe<Se;Oe++)df(Te[Oe],G,ne,K)}function R0(M,G,ne,K){let{opaque:ee,transmissive:Te,transparent:Oe}=M;T.setupLightsView(ne),re===!0&&le.setGlobalState(R.clippingPlanes,ne),K&&xe.viewport(B.copy(K)),ee.length>0&&rl(ee,G,ne),Te.length>0&&rl(Te,G,ne),Oe.length>0&&rl(Oe,G,ne),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function C0(M,G,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Be=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new ei(1,1,{generateMipmaps:!0,type:Be?Pi:Wn,minFilter:Rr,samples:Math.max(4,bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Te=T.state.transmissionRenderTarget[K.id],Oe=K.viewport||B;Te.setSize(Oe.z*R.transmissionResolutionScale,Oe.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Pe=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(V),D=R.getClearAlpha(),D<1&&R.setClearColor(16777215,.5),R.clear(),Ye&&F.render(ne);let Ke=R.toneMapping;R.toneMapping=tr;let ct=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),re===!0&&le.setGlobalState(R.clippingPlanes,K),rl(M,ne,K),je.updateMultisampleRenderTarget(Te),je.updateRenderTargetMipmap(Te),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let lt=0,Zt=G.length;lt<Zt;lt++){let It=G[lt],{object:At,geometry:_n,material:Fe,group:Rn}=It;if(Fe.side===er&&At.layers.test(K.layers)){let vt=Fe.side;Fe.side=xn,Fe.needsUpdate=!0,I0(At,ne,K,_n,Fe,Rn),Fe.side=vt,Fe.needsUpdate=!0,Be=!0}}Be===!0&&(je.updateMultisampleRenderTarget(Te),je.updateRenderTargetMipmap(Te))}R.setRenderTarget(Se,Pe,Ue),R.setClearColor(V,D),ct!==void 0&&(K.viewport=ct),R.toneMapping=Ke}function rl(M,G,ne){let K=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Te=M.length;ee<Te;ee++){let Oe=M[ee],{object:Se,geometry:Pe,group:Ue}=Oe,Ke=Oe.material;Ke.allowOverride===!0&&K!==null&&(Ke=K),Se.layers.test(ne.layers)&&I0(Se,G,ne,Pe,Ke,Ue)}}function I0(M,G,ne,K,ee,Te){P!==null&&ee.isNodeMaterial&&P.setObject(M,ee),M.onBeforeRender(R,G,ne,K,ee,Te),M.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),ee.onBeforeRender(R,G,ne,K,M,Te),ee.transparent===!0&&ee.side===er&&ee.forceSinglePass===!1?(ee.side=xn,ee.needsUpdate=!0,R.renderBufferDirect(ne,G,K,ee,M,Te),ee.side=fs,ee.needsUpdate=!0,R.renderBufferDirect(ne,G,K,ee,M,Te),ee.side=er):R.renderBufferDirect(ne,G,K,ee,M,Te),M.onAfterRender(R,G,ne,K,ee,Te)}function P0(M){let G=0;for(let ne of M)ne.texture!==null&&G++;return G}function xa(M,G,ne){G.isScene!==!0&&(G=ze);let K=He.get(M),ee=T.state.lights,Te=T.state.shadowsArray,Oe=ee.state.version,Se=he.getParameters(M,ee.state,Te,G,ne,T.state.lightProbeGridArray),Pe=he.getProgramCacheKey(Se),Ue=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let Ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=C.get(M.envMap||K.environment,Ke),K.envMapRotation=K.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Et),Ue=new Map,K.programs=Ue,K.programVariants=new Map);let ct=Ue.get(Pe);if(ct!==void 0){if(K.currentProgram===ct&&K.lightsStateVersion===Oe)return O0(M,Se),ct}else Se.uniforms=he.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,ne,Se),M.onBeforeCompile(Se,R),ct=he.acquireProgram(Se,Pe),Ue.set(Pe,ct),K.uniforms=Se.uniforms;let Be=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=le.uniform),O0(M,Se),K.needsLights=Hv(M),K.lightsStateVersion=Oe,K.needsLights&&(Be.ambientLightColor.value=ee.state.ambient,Be.lightProbe.value=ee.state.probe,Be.sunLights.value=ee.state.sun,Be.sunLightShadows.value=ee.state.sunShadow,Be.directionalLights.value=ee.state.directional,Be.directionalLightShadows.value=ee.state.directionalShadow,Be.spotLights.value=ee.state.spot,Be.spotLightShadows.value=ee.state.spotShadow,Be.rectAreaLights.value=ee.state.rectArea,Be.ltc_1.value=ee.state.rectAreaLTC1,Be.ltc_2.value=ee.state.rectAreaLTC2,Be.pointLights.value=ee.state.point,Be.pointLightShadows.value=ee.state.pointShadow,Be.hemisphereLights.value=ee.state.hemi,Be.sunShadowMatrix.value=ee.state.sunShadowMatrix,Be.sunShadowCascade.value=ee.state.sunShadowCascade,Be.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Be.spotLightMatrix.value=ee.state.spotLightMatrix,Be.spotLightMap.value=ee.state.spotLightMap,Be.pointShadowMatrix.value=ee.state.pointShadowMatrix),K.numLightProbeGrids=P0(T.state.lightProbeGridArray),K.currentProgram=ct,K.uniformsList=null,ct}function zv(M,G,ne,K,ee){let Te=He.get(M),Oe=Te.currentProgram.id+","+K+","+ee,Se=Te.programVariants.get(Oe);return Se===void 0?(Se=xa(M,G,ne),Te.programVariants.set(Oe,Se)):(Te.currentProgram=Se,Te.uniformsList=null,Te.outputColorSpace=K,Te.toneMapping=ee),Se}function N0(M){if(M.uniformsList===null){let G=M.currentProgram.getUniforms();M.uniformsList=fa.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function O0(M,G){let ne=He.get(M);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function Vv(M,G,ne,K,ee){G.isScene!==!0&&(G=ze),je.resetTextureUnits();let Te=G.fog,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Se=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ut.workingColorSpace,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ue=C.get(K.envMap||Oe,Pe),Ke=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ct=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!ne.morphAttributes.position,lt=!!ne.morphAttributes.normal,Zt=!!ne.morphAttributes.color,It=tr;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=R.toneMapping);let At=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,_n=At!==void 0?At.length:0,Fe=He.get(K),Rn=T.state.lights;if(re===!0&&(me===!0||M!==q)){let Ut=M===q&&K.id===H;le.setState(K,M,Ut)}let vt=!1,bs=!1;K.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Rn.state.version||ee.isBatchedMesh&&Fe.batching===!1||!ee.isBatchedMesh&&Fe.batching===!0||ee.isBatchedMesh&&Fe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Fe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Fe.instancing===!1||!ee.isInstancedMesh&&Fe.instancing===!0||ee.isSkinnedMesh&&Fe.skinning===!1||!ee.isSkinnedMesh&&Fe.skinning===!0||ee.isInstancedMesh&&Fe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Fe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Fe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Fe.instancingMorph===!1&&ee.morphTexture!==null||Fe.envMap!==Ue||K.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==Ke||Fe.vertexTangents!==ct||Fe.morphTargets!==Be||Fe.morphNormals!==lt||Fe.morphColors!==Zt||Fe.morphTargetsCount!==_n||Fe.numLightProbeGrids!==P0(T.state.lightProbeGridArray)?vt=!0:(Fe.outputColorSpace!==Se||Fe.toneMapping!==It)&&(bs=!0):(vt=!0,Fe.__version=K.version);let bn=Fe.currentProgram;(vt===!0||bs===!0)&&(bn=bs===!0?zv(K,G,ee,Se,It):xa(K,G,ee),P&&K.isNodeMaterial&&P.onUpdateProgram(K,bn,Fe));let sl=!1,Or=!1,vs=!1,dt=bn.getUniforms(),fn=Fe.uniforms;if(xe.useProgram(bn.program)&&(sl=!0,Or=!0,vs=!0),K.id!==H&&(H=K.id,Or=!0),sl||q!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",M.projectionMatrix),dt.setValue(k,"viewMatrix",M.matrixWorldInverse);let ln=dt.map.cameraPosition;ln!==void 0&&ln.setValue(k,We.setFromMatrixPosition(M.matrixWorld)),bt.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&dt.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Or=!0,vs=!0)}if(Fe.needsLights&&(Rn.state.sunShadowMap.length>0&&dt.setValue(k,"sunShadowMap",Rn.state.sunShadowMap,je),Rn.state.directionalShadowMap.length>0&&dt.setValue(k,"directionalShadowMap",Rn.state.directionalShadowMap,je),Rn.state.spotShadowMap.length>0&&dt.setValue(k,"spotShadowMap",Rn.state.spotShadowMap,je),Rn.state.pointShadowMap.length>0&&dt.setValue(k,"pointShadowMap",Rn.state.pointShadowMap,je)),ee.isSkinnedMesh){dt.setOptional(k,ee,"bindMatrix"),dt.setOptional(k,ee,"bindMatrixInverse");let Ut=ee.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),dt.setValue(k,"boneTexture",Ut.boneTexture,je))}ee.isBatchedMesh&&(dt.setOptional(k,ee,"batchingTexture"),dt.setValue(k,"batchingTexture",ee._matricesTexture,je),dt.setOptional(k,ee,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",ee._indirectTexture,je),dt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",ee._colorsTexture,je));let hi=ne.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&ue.update(ee,ne,bn),(Or||Fe.receiveShadow!==ee.receiveShadow)&&(Fe.receiveShadow=ee.receiveShadow,dt.setValue(k,"receiveShadow",ee.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(fn.envMapIntensity.value=G.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=ZC()),Or){if(dt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Fe.needsLights&&Gv(fn,vs),Te&&K.fog===!0&&_e.refreshFogUniforms(fn,Te),_e.refreshMaterialUniforms(fn,K,ie,te,T.state.transmissionRenderTarget[M.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Ut=v,ln=0;for(let rr of T.state.lightProbeGridArray)rr.texture!==null&&(Ut.textures[ln]=rr.texture,Ut.min[ln]=rr.boundingBox.min,Ut.max[ln]=rr.boundingBox.max,Ut.resolution[ln]=rr.resolution,ln++);for(let rr in Ut)Ut[rr].length=ln;fn.probesSH.value=Ut.textures,fn.probesMin.value=Ut.min,fn.probesMax.value=Ut.max,fn.probesResolution.value=Ut.resolution}fa.upload(k,N0(Fe),fn,je)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fa.upload(k,N0(Fe),fn,je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&dt.setValue(k,"center",ee.center),dt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),dt.setValue(k,"normalMatrix",ee.normalMatrix),dt.setValue(k,"modelMatrix",ee.matrixWorld),K.uniformsGroups!==void 0){let Ut=K.uniformsGroups;for(let ln=0,rr=Ut.length;ln<rr;ln++){let B0=Ut[ln];ke.update(B0,bn),ke.bind(B0,bn)}}return bn}function Gv(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.sunLights.needsUpdate=G,M.sunLightShadows.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Hv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,G,ne){let K=He.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),He.get(M.texture).__webglTexture=G,He.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){let ne=He.get(M);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(M,G=0,ne=0){j=M,$=G,N=ne;let K=null,ee=!1,Te=!1;if(M){let Se=He.get(M);if(Se.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(k.FRAMEBUFFER,Se.__webglFramebuffer),B.copy(M.viewport),J.copy(M.scissor),se=M.scissorTest,xe.viewport(B),xe.scissor(J),xe.setScissorTest(se),H=-1;return}else if(Se.__webglFramebuffer===void 0)je.setupRenderTarget(M);else if(Se.__hasExternalTextures)je.rebindTextures(M,He.get(M.texture).__webglTexture,He.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ke=M.depthTexture;if(Se.__boundDepthTexture!==Ke){if(Ke!==null&&He.has(Ke)&&(M.width!==Ke.image.width||M.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(M)}}let Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let Ue=He.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[G])?K=Ue[G][ne]:K=Ue[G],ee=!0):M.samples>0&&je.useMultisampledRTT(M)===!1?K=He.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?K=Ue[ne]:K=Ue,B.copy(M.viewport),J.copy(M.scissor),se=M.scissorTest}else B.copy(Ee).multiplyScalar(ie).floor(),J.copy(Le).multiplyScalar(ie).floor(),se=Y;if(ne!==0&&(K=U),xe.bindFramebuffer(k.FRAMEBUFFER,K)&&xe.drawBuffers(M,K),xe.viewport(B),xe.scissor(J),xe.setScissorTest(se),ee){let Se=He.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Se.__webglTexture,ne)}else if(Te){let Se=G;for(let Pe=0;Pe<M.textures.length;Pe++){let Ue=He.get(M.textures[Pe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,ne,Se)}}else if(M!==null&&ne!==0){let Se=He.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Se.__webglTexture,ne)}H=-1};function L0(M){let G=He.get(M);return(G.__readFormat!==M.format||G.__readType!==M.type)&&(G.__readFormat=M.format,G.__readType=M.type,G.__formatReadable=bt.textureFormatReadable(M.format),G.__typeReadable=bt.textureTypeReadable(M.type)),G}this.readRenderTargetPixels=function(M,G,ne,K,ee,Te,Oe,Se=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=He.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){xe.bindFramebuffer(k.FRAMEBUFFER,Pe);try{let Ue=M.textures[Se],Ke=Ue.format,ct=Ue.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Se);let Be=L0(Ue);if(Be.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-K&&ne>=0&&ne<=M.height-ee&&k.readPixels(G,ne,K,ee,ye.convert(Ke),ye.convert(ct),Te)}finally{let Ue=j!==null?He.get(j).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,G,ne,K,ee,Te,Oe,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=He.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Pe=Pe[Oe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(G>=0&&G<=M.width-K&&ne>=0&&ne<=M.height-ee){xe.bindFramebuffer(k.FRAMEBUFFER,Pe);let Ue=M.textures[Se],Ke=Ue.format,ct=Ue.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Se);let Be=L0(Ue);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(G,ne,K,ee,ye.convert(Ke),ye.convert(ct),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Zt=j!==null?He.get(j).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Zt);let It=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Mb(k,It,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,lt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(lt),k.deleteSync(It),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,ne=0){let K=Math.pow(2,-ne),ee=Math.floor(M.image.width*K),Te=Math.floor(M.image.height*K),Oe=G!==null?G.x:0,Se=G!==null?G.y:0;je.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,Oe,Se,ee,Te),xe.unbindTexture()},this.copyTextureToTexture=function(M,G,ne=null,K=null,ee=0,Te=0){let Oe,Se,Pe,Ue,Ke,ct,Be,lt,Zt,It=M.isCompressedTexture?M.mipmaps[Te]:M.image;if(ne!==null)Oe=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,Pe=ne.isBox3?ne.max.z-ne.min.z:1,Ue=ne.min.x,Ke=ne.min.y,ct=ne.isBox3?ne.min.z:0;else{let dt=Math.pow(2,-ee);Oe=Math.floor(It.width*dt),Se=Math.floor(It.height*dt),M.isDataArrayTexture?Pe=It.depth:M.isData3DTexture?Pe=Math.floor(It.depth*dt):Pe=1,Ue=0,Ke=0,ct=0}K!==null?(Be=K.x,lt=K.y,Zt=K.z):(Be=0,lt=0,Zt=0);let At=ye.convert(G.format),_n=ye.convert(G.type),Fe;G.isData3DTexture?(je.setTexture3D(G,0),Fe=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(je.setTexture2DArray(G,0),Fe=k.TEXTURE_2D_ARRAY):(je.setTexture2D(G,0),Fe=k.TEXTURE_2D),xe.activeTexture(k.TEXTURE0),xe.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),xe.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),xe.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);let Rn=xe.getParameter(k.UNPACK_ROW_LENGTH),vt=xe.getParameter(k.UNPACK_IMAGE_HEIGHT),bs=xe.getParameter(k.UNPACK_SKIP_PIXELS),bn=xe.getParameter(k.UNPACK_SKIP_ROWS),sl=xe.getParameter(k.UNPACK_SKIP_IMAGES);xe.pixelStorei(k.UNPACK_ROW_LENGTH,It.width),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,It.height),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,Ue),xe.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,ct);let Or=M.isDataArrayTexture||M.isData3DTexture,vs=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){let dt=He.get(M),fn=He.get(G),hi=He.get(dt.__renderTarget),Ut=He.get(fn.__renderTarget);xe.bindFramebuffer(k.READ_FRAMEBUFFER,hi.__webglFramebuffer),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let ln=0;ln<Pe;ln++)Or&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(M).__webglTexture,ee,ct+ln),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(G).__webglTexture,Te,Zt+ln)),k.blitFramebuffer(Ue,Ke,Ue+Oe,Ke+Se,Be,lt,Be+Oe,lt+Se,k.DEPTH_BUFFER_BIT,k.NEAREST);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||M.isRenderTargetTexture||He.has(M)){let dt=He.get(M),fn=He.get(G);xe.bindFramebuffer(k.READ_FRAMEBUFFER,A),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let hi=0;hi<Pe;hi++)Or?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dt.__webglTexture,ee,ct+hi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dt.__webglTexture,ee),vs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,Te,Zt+hi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,Te),ee!==0?k.blitFramebuffer(Ue,Ke,Ue+Oe,Ke+Se,Be,lt,Be+Oe,lt+Se,k.COLOR_BUFFER_BIT,k.NEAREST):vs?k.copyTexSubImage3D(Fe,Te,Be,lt,Zt+hi,Ue,Ke,Oe,Se):k.copyTexSubImage2D(Fe,Te,Be,lt,Ue,Ke,Oe,Se);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else vs?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(Fe,Te,Be,lt,Zt,Oe,Se,Pe,At,_n,It.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,Te,Be,lt,Zt,Oe,Se,Pe,At,It.data):k.texSubImage3D(Fe,Te,Be,lt,Zt,Oe,Se,Pe,At,_n,It):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,Be,lt,Oe,Se,At,_n,It.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,Be,lt,It.width,It.height,At,It.data):k.texSubImage2D(k.TEXTURE_2D,Te,Be,lt,Oe,Se,At,_n,It);xe.pixelStorei(k.UNPACK_ROW_LENGTH,Rn),xe.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),xe.pixelStorei(k.UNPACK_SKIP_PIXELS,bs),xe.pixelStorei(k.UNPACK_SKIP_ROWS,bn),xe.pixelStorei(k.UNPACK_SKIP_IMAGES,sl),Te===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&k.generateMipmap(Fe),xe.unbindTexture()},this.initRenderTarget=function(M){He.get(M).__webglFramebuffer===void 0&&je.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?je.setTextureCube(M,0):M.isData3DTexture?je.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?je.setTexture2DArray(M,0):je.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){$=0,N=0,j=null,xe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var xv="ic-battleship-muted",fv=[[38,45,50,53,57],[34,41,46,50,53],[31,38,43,46,50],[33,40,45,49,52]],pv=[62,65,69,67,65,62,64,57,60,62,65,69,72,69,67,65],tl=n=>440*Math.pow(2,(n-69)/12),Ne=null,gs=null,Pr=null,ys=null,el=null,nl=!1,mv=!1,xs=0,gv=0,Jd=0,ma=0,yv=0,b0=0,Qd=0,KC=null,tf=null;try{nl=localStorage.getItem(xv)==="1"}catch{}function JC(n){let e=Ne.createBuffer(1,Math.floor(Ne.sampleRate*n),Ne.sampleRate),t=e.getChannelData(0),i=0,r=0,s=0;for(let o=0;o<t.length;o++){let a=Math.random()*2-1;i=.99765*i+a*.099046,r=.963*r+a*.2965164,s=.57*s+a*1.0526913,t[o]=(i+r+s+a*.1848)*.2}return e}function QC(n,e){let t=Math.floor(Ne.sampleRate*n),i=Ne.createBuffer(2,t,Ne.sampleRate);for(let r=0;r<2;r++){let s=i.getChannelData(r);for(let o=0;o<t;o++)s[o]=(Math.random()*2-1)*Math.pow(1-o/t,e)}return i}function e3(){if(Ne)return;let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ne=new n,gs=Ne.createGain(),gs.gain.value=nl?0:.9;let e=Ne.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4,gs.connect(e).connect(Ne.destination),el=Ne.createConvolver(),el.buffer=QC(4.2,2.6);let t=Ne.createGain();t.gain.value=.55,el.connect(t).connect(gs),Pr=Ne.createGain(),Pr.gain.value=.55,Pr.connect(gs),Pr.connect(el),ys=Ne.createGain(),ys.gain.value=.9,ys.connect(gs);let i=Ne.createGain();i.gain.value=.35,ys.connect(i).connect(el),tf=JC(4),t3(),Jd=Ne.currentTime+.2,ma=Ne.currentTime+2,Qd=Ne.currentTime+7,KC=setInterval(r3,250)}function t3(){let n=Ne.createBufferSource();n.buffer=tf,n.loop=!0;let e=Ne.createBiquadFilter();e.type="lowpass",e.frequency.value=420;let t=Ne.createGain();t.gain.value=.35;let i=Ne.createOscillator();i.frequency.value=.11;let r=Ne.createGain();r.gain.value=220,i.connect(r).connect(e.frequency);let s=Ne.createOscillator();s.frequency.value=.07;let o=Ne.createGain();o.gain.value=.15,s.connect(o).connect(t.gain),n.connect(e).connect(t).connect(Pr),n.start(),i.start(),s.start()}function n3(n,e,t){let i=Ne.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(380+700*xs,e),i.frequency.linearRampToValueAtTime(900+1400*xs,e+t*.5),i.frequency.linearRampToValueAtTime(380+700*xs,e+t),i.Q.value=.7;let r=Ne.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.09,e+t*.35),r.gain.linearRampToValueAtTime(1e-4,e+t+2.5),i.connect(r).connect(Pr);for(let s of n)for(let o of[-7,7]){let a=Ne.createOscillator();a.type=s<45?"sawtooth":"triangle",a.frequency.value=tl(s),a.detune.value=o,a.connect(i),a.start(e),a.stop(e+t+2.7)}}function ef(n,e){let t=Ne.createOscillator();t.type="sine",t.frequency.setValueAtTime(110,n),t.frequency.exponentialRampToValueAtTime(42,n+.35);let i=Ne.createGain();i.gain.setValueAtTime(e,n),i.gain.exponentialRampToValueAtTime(.001,n+1.1),t.connect(i).connect(Pr),t.start(n),t.stop(n+1.2);let r=Ne.createBufferSource();r.buffer=tf;let s=Ne.createBiquadFilter();s.type="lowpass",s.frequency.value=500;let o=Ne.createGain();o.gain.setValueAtTime(e*.7,n),o.gain.exponentialRampToValueAtTime(.001,n+.25),r.connect(s).connect(o).connect(Pr),r.start(n,Math.random()*2),r.stop(n+.3)}function i3(n,e,t){let i=Ne.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(500,e),i.frequency.linearRampToValueAtTime(1500,e+t*.4),i.frequency.linearRampToValueAtTime(500,e+t);let r=Ne.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.1,e+.9),r.gain.linearRampToValueAtTime(1e-4,e+t),i.connect(r).connect(Pr);for(let s of[-5,5]){let o=Ne.createOscillator();o.type="sawtooth",o.frequency.value=tl(n),o.detune.value=s,o.connect(i),o.start(e),o.stop(e+t+.1)}}function r3(){if(!Ne||Ne.state!=="running")return;let n=Ne.currentTime;for(;Jd<n+1.5;)n3(fv[gv%fv.length],Jd,8),gv++,Jd+=8;for(;ma<n+1.5;){let e=yv%4;e===0?ef(ma,.5+.3*xs):e===2&&xs>.3?ef(ma,.25+.2*xs):e===3&&xs>.7&&ef(ma,.14),yv++,ma+=2}for(;Qd<n+1.5;)i3(pv[b0%pv.length],Qd,6),b0++,Qd+=8*(b0%2?1:2)}function oo({t:n,dur:e,f0:t,f1:i,type:r="lowpass",gain:s,q:o=.7}){let a=Ne.createBufferSource();a.buffer=tf;let c=Ne.createBiquadFilter();c.type=r,c.Q.value=o,c.frequency.setValueAtTime(t,n),c.frequency.exponentialRampToValueAtTime(Math.max(i,20),n+e);let l=Ne.createGain();l.gain.setValueAtTime(s,n),l.gain.exponentialRampToValueAtTime(.001,n+e),a.connect(c).connect(l).connect(ys),a.start(n,Math.random()*2),a.stop(n+e+.05)}function Oi({t:n,dur:e,f0:t,f1:i,type:r="sine",gain:s}){let o=Ne.createOscillator();o.type=r,o.frequency.setValueAtTime(t,n),o.frequency.exponentialRampToValueAtTime(Math.max(i,20),n+e);let a=Ne.createGain();a.gain.setValueAtTime(s,n),a.gain.exponentialRampToValueAtTime(.001,n+e),o.connect(a).connect(ys),o.start(n),o.stop(n+e+.05)}var s3={cannon(){let n=Ne.currentTime;Oi({t:n,dur:.7,f0:130,f1:35,gain:.9}),oo({t:n,dur:.9,f0:2400,f1:80,gain:.8})},whistle(n=1){let e=Ne.currentTime;Oi({t:e,dur:n,f0:2200,f1:650,type:"triangle",gain:.05})},splash(){let n=Ne.currentTime;oo({t:n,dur:.9,f0:3e3,f1:500,type:"bandpass",gain:.7,q:.5}),Oi({t:n,dur:.35,f0:220,f1:70,gain:.35})},explosion(){let n=Ne.currentTime;oo({t:n,dur:1.6,f0:3200,f1:60,gain:1}),Oi({t:n,dur:1.2,f0:90,f1:28,gain:1}),oo({t:n+.12,dur:.9,f0:1200,f1:100,type:"bandpass",gain:.4,q:.4})},sink(){let n=Ne.currentTime;Oi({t:n,dur:3.4,f0:220,f1:32,type:"sawtooth",gain:.22}),oo({t:n,dur:3.2,f0:1600,f1:80,gain:.5});for(let e=0;e<9;e++)Oi({t:n+.3+e*.28,dur:.12,f0:500+Math.random()*700,f1:160,gain:.08})},thunder(){let n=Ne.currentTime;oo({t:n,dur:3.6,f0:380,f1:40,gain:.55}),Oi({t:n,dur:2.8,f0:60,f1:26,gain:.35})},place(){let n=Ne.currentTime;Oi({t:n,dur:.18,f0:260,f1:90,type:"triangle",gain:.5}),oo({t:n,dur:.1,f0:4e3,f1:800,gain:.25})},tick(){Oi({t:Ne.currentTime,dur:.08,f0:880,f1:660,type:"square",gain:.05})},lock(){let n=Ne.currentTime;Oi({t:n,dur:.12,f0:740,f1:740,type:"square",gain:.06}),Oi({t:n+.12,dur:.18,f0:1100,f1:1100,type:"square",gain:.06})},victory(){let n=Ne.currentTime;[50,57,62,66,69,74].forEach((e,t)=>{let i=Ne.createOscillator();i.type="sawtooth",i.frequency.value=tl(e);let r=Ne.createBiquadFilter();r.type="lowpass",r.frequency.value=1800;let s=Ne.createGain();s.gain.setValueAtTime(1e-4,n+t*.18),s.gain.linearRampToValueAtTime(.12,n+t*.18+.4),s.gain.exponentialRampToValueAtTime(.001,n+6),i.connect(r).connect(s).connect(ys),i.start(n+t*.18),i.stop(n+6.2)})},defeat(){let n=Ne.currentTime;[50,53,57].forEach((e,t)=>{let i=Ne.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(tl(e),n),i.frequency.exponentialRampToValueAtTime(tl(e-5),n+5);let r=Ne.createBiquadFilter();r.type="lowpass",r.frequency.value=500;let s=Ne.createGain();s.gain.setValueAtTime(1e-4,n+t*.3),s.gain.linearRampToValueAtTime(.14,n+t*.3+.6),s.gain.exponentialRampToValueAtTime(.001,n+6),i.connect(r).connect(s).connect(ys),i.start(n+t*.3),i.stop(n+6.2)}),ef(n,.7)}},qt={start(){try{e3(),Ne&&Ne.state==="suspended"&&Ne.resume(),mv=!0}catch(n){console.warn("audio unavailable",n)}},setIntensity(n){xs=n},play(n,...e){if(!(!mv||!Ne||Ne.state!=="running"||nl))try{s3[n]?.(...e)}catch(t){console.warn("sfx failed",n,t)}},get muted(){return nl},setMuted(n){nl=n;try{localStorage.setItem(xv,n?"1":"0")}catch{}gs&&gs.gain.setTargetAtTime(n?0:.9,Ne.currentTime,.1)}};if(typeof window<"u"){let n=()=>qt.start();window.addEventListener("pointerdown",n,{passive:!0}),window.addEventListener("keydown",n)}function _v(n){let i=document.createElement("canvas");i.width=i.height=256;let r=i.getContext("2d");if(n==="smoke"){let o=c=>Math.sin(c*91.7)*43758.5453%1;for(let c=0;c<9;c++){let l=128+(o(c+1)-.3)*26*2,u=256/2+(o(c+11)-.3)*26*2,h=(20+Math.abs(o(c+21))*14)*2,f=r.createRadialGradient(l,u,0,l,u,h);f.addColorStop(0,"rgba(255,255,255,0.55)"),f.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=f,r.fillRect(0,0,256,256)}r.globalCompositeOperation="destination-in";let a=r.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);a.addColorStop(0,"rgba(0,0,0,1)"),a.addColorStop(.7,"rgba(0,0,0,1)"),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,256,256),r.globalCompositeOperation="source-over"}else{let o=r.createRadialGradient(128,128,0,128,128,128);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.35,"rgba(255,255,255,0.55)"),o.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=o,r.fillRect(0,0,256,256)}let s=new js(i);return s.colorSpace=gn,s}var nf=class{constructor(e,{additive:t,texture:i}){this.cap=e,this.n=0;let r=o=>new Float32Array(e*o);this.pos=r(3),this.vel=r(3),this.age=r(1),this.life=r(1),this.s0=r(1),this.s1=r(1),this.c0=r(3),this.c1=r(3),this.a0=r(1),this.a1=r(1),this.drag=r(1),this.grav=r(1),this.rot=r(1),this.rotV=r(1),this.oPos=new Float32Array(e*3),this.oCol=new Float32Array(e*4),this.oSize=new Float32Array(e),this.oRot=new Float32Array(e);let s=new dn;s.setAttribute("position",new Bn(this.oPos,3).setUsage(ha)),s.setAttribute("aColor",new Bn(this.oCol,4).setUsage(ha)),s.setAttribute("aSize",new Bn(this.oSize,1).setUsage(ha)),s.setAttribute("aRot",new Bn(this.oRot,1).setUsage(ha)),s.setDrawRange(0,0),this.material=new Tn({transparent:!0,depthWrite:!1,blending:t?to:ps,uniforms:{uTex:{value:i},uScale:{value:600}},vertexShader:`
        attribute vec4 aColor; attribute float aSize; attribute float aRot;
        varying vec4 vColor; varying float vRot;
        uniform float uScale;
        void main(){
          vColor = aColor; vRot = aRot;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.1);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uTex;
        varying vec4 vColor; varying float vRot;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float cs = cos(vRot), sn = sin(vRot);
          vec2 q = vec2(cs * p.x - sn * p.y, sn * p.x + cs * p.y) + 0.5;
          vec4 t = texture2D(uTex, q);
          gl_FragColor = vec4(vColor.rgb, vColor.a * t.a);
        }`}),this.points=new _c(s,this.material),this.points.frustumCulled=!1,this.points.renderOrder=t?6:5}emit(e){if(this.n>=this.cap)return;let t=this.n++,i=e.pos,r=e.vel??[0,0,0];this.pos.set([i[0],i[1],i[2]],t*3),this.vel.set([r[0],r[1],r[2]],t*3),this.age[t]=0,this.life[t]=e.life,this.s0[t]=e.size0,this.s1[t]=e.size1??e.size0,this.c0.set(e.c0,t*3),this.c1.set(e.c1??e.c0,t*3),this.a0[t]=e.a0??1,this.a1[t]=e.a1??0,this.drag[t]=e.drag??0,this.grav[t]=e.grav??0,this.rot[t]=e.rot??Math.random()*6.28,this.rotV[t]=e.rotV??0}update(e){let t=0;for(;t<this.n;){if(this.age[t]+=e,this.age[t]>=this.life[t]){let s=--this.n;if(t!==s){this.pos.copyWithin(t*3,s*3,s*3+3),this.vel.copyWithin(t*3,s*3,s*3+3),this.c0.copyWithin(t*3,s*3,s*3+3),this.c1.copyWithin(t*3,s*3,s*3+3);for(let o of[this.age,this.life,this.s0,this.s1,this.a0,this.a1,this.drag,this.grav,this.rot,this.rotV])o[t]=o[s]}continue}let r=Math.exp(-this.drag[t]*e);this.vel[t*3]*=r,this.vel[t*3+1]=this.vel[t*3+1]*r-this.grav[t]*e,this.vel[t*3+2]*=r,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e,this.rot[t]+=this.rotV[t]*e,t++}for(let r=0;r<this.n;r++){let s=this.age[r]/this.life[r];this.oPos[r*3]=this.pos[r*3],this.oPos[r*3+1]=this.pos[r*3+1],this.oPos[r*3+2]=this.pos[r*3+2],this.oCol[r*4]=this.c0[r*3]+(this.c1[r*3]-this.c0[r*3])*s,this.oCol[r*4+1]=this.c0[r*3+1]+(this.c1[r*3+1]-this.c0[r*3+1])*s,this.oCol[r*4+2]=this.c0[r*3+2]+(this.c1[r*3+2]-this.c0[r*3+2])*s;let o=Math.min(1,s*10);this.oCol[r*4+3]=(this.a0[r]+(this.a1[r]-this.a0[r])*s)*o,this.oSize[r]=this.s0[r]+(this.s1[r]-this.s0[r])*s,this.oRot[r]=this.rot[r]}let i=this.points.geometry;i.setDrawRange(0,this.n),i.attributes.position.needsUpdate=!0,i.attributes.aColor.needsUpdate=!0,i.attributes.aSize.needsUpdate=!0,i.attributes.aRot.needsUpdate=!0}},nt=(n,e)=>n+Math.random()*(e-n),rf=class{constructor(e){this.add=new nf(7e3,{additive:!0,texture:_v("soft")}),this.smoke=new nf(7e3,{additive:!1,texture:_v("smoke")}),e.add(this.smoke.points,this.add.points),this.fires=new Set,this.rings=[],this.ringGeo=new Js(.82,1,48).rotateX(-Math.PI/2),this.scene=e,this.shake=0,this.flash=0,this.lights=[0,1].map(()=>{let t=new Dc(16747066,0,14,1.6);return e.add(t),{light:t,t:99,peak:0}})}setScale(e,t){let i=e/(2*Math.tan(t*Math.PI/360));this.add.material.uniforms.uScale.value=i,this.smoke.material.uniforms.uScale.value=i}ring(e,{color:t=16777215,size:i=1.6,dur:r=1.3,opacity:s=.7}={}){let o=new Tt(this.ringGeo,new Dn({color:t,transparent:!0,opacity:s,depthWrite:!1}));o.position.set(e[0],e[1],e[2]),o.scale.setScalar(.1),o.renderOrder=3,this.scene.add(o),this.rings.push({m:o,t:0,dur:r,size:i,opacity:s})}lightFlash(e,t=9){let i=this.lights.reduce((r,s)=>r.t>s.t?r:s);i.light.position.set(e[0],e[1]+1.2,e[2]),i.t=0,i.peak=t}splash(e){let[t,i,r]=e;this.ring([t,i+.02,r],{size:1.7,dur:1.5}),this.ring([t,i+.02,r],{size:.9,dur:.9,opacity:.9});for(let s=0;s<46;s++){let o=Math.random()*6.283,a=nt(.2,1.1);this.smoke.emit({pos:[t+Math.cos(o)*.08,i,r+Math.sin(o)*.08],vel:[Math.cos(o)*a,nt(2,4.6),Math.sin(o)*a],life:nt(.9,1.6),size0:nt(.22,.4),size1:nt(.5,.9),c0:[.95,.98,1],c1:[.7,.8,.9],a0:.8,a1:0,drag:.6,grav:6.5})}for(let s=0;s<16;s++)this.add.emit({pos:[t,i+.1,r],vel:[nt(-1,1),nt(2,5),nt(-1,1)],life:nt(.5,.9),size0:.07,size1:.03,c0:[.9,.95,1],a0:.8,a1:0,grav:9})}explosion(e,t=1){let[i,r,s]=e;this.shake=Math.max(this.shake,.5*t),this.lightFlash(e,10*t),this.ring([i,.05,s],{color:16760960,size:2.4*t,dur:.9,opacity:.8}),this.add.emit({pos:[i,r+.2,s],life:.35,size0:3.4*t,size1:5.2*t,c0:[1,.9,.7],c1:[1,.5,.2],a0:1,a1:0});for(let o=0;o<40*t;o++){let a=Math.random()*6.283,c=nt(.2,1.6)*t;this.add.emit({pos:[i,r+.15,s],vel:[Math.cos(a)*c,nt(.8,3.2),Math.sin(a)*c],life:nt(.5,1.2),size0:nt(.5,1)*t,size1:nt(1,1.9)*t,c0:[1,.78,.35],c1:[.75,.12,.02],a0:.95,a1:0,drag:1.6})}for(let o=0;o<36*t;o++){let a=Math.random()*6.283,c=nt(1.5,6);this.add.emit({pos:[i,r+.2,s],vel:[Math.cos(a)*c,nt(2,7),Math.sin(a)*c],life:nt(.6,1.5),size0:nt(.06,.12),size1:.02,c0:[1,.85,.45],c1:[1,.3,.05],a0:1,a1:0,grav:9})}for(let o=0;o<26*t;o++){let a=Math.random()*6.283,c=nt(.2,1.2);this.smoke.emit({pos:[i,r+.2,s],vel:[Math.cos(a)*c,nt(.8,2.4),Math.sin(a)*c],life:nt(2.5,4.5),size0:nt(.8,1.3)*t,size1:nt(2.6,4)*t,c0:[.08,.075,.07],c1:[.2,.19,.18],a0:.8,a1:0,drag:.5,rotV:nt(-.6,.6)})}}addFire(e,{intense:t=1,burnFor:i=40}={}){let r={pos:e,age:0,acc:0,accS:0,intense:t,burnFor:i};return this.fires.add(r),r}removeFire(e){this.fires.delete(e)}clear(){for(let e of this.fires)e.dead=!0;this.fires.clear(),this.add.n=0,this.smoke.n=0;for(let e of this.rings)this.scene.remove(e.m);this.rings.length=0}update(e,t){for(let i of this.fires){i.age+=e;let r=i.age<i.burnFor?1-i.age/i.burnFor*.7:.18;i.acc+=e*26*i.intense*r,i.accS+=e*7*i.intense*(i.age<i.burnFor?1:.7);let[s,o,a]=i.pos;for(;i.acc>=1;)i.acc-=1,this.add.emit({pos:[s+nt(-.12,.12),o+nt(0,.06),a+nt(-.12,.12)],vel:[nt(-.12,.12),nt(.6,1.4),nt(-.12,.12)],life:nt(.45,.95),size0:nt(.34,.52)*(.6+.4*r),size1:nt(.08,.2),c0:[1,.62,.18],c1:[.9,.12,.02],a0:.9,a1:0,drag:.6});for(;i.accS>=1;)i.accS-=1,this.smoke.emit({pos:[s+nt(-.1,.1),o+.35,a+nt(-.1,.1)],vel:[nt(.1,.45),nt(.7,1.3),nt(-.2,.2)],life:nt(3.2,5.2),size0:nt(.4,.6),size1:nt(1.8,2.8),c0:[.05,.05,.05],c1:[.22,.21,.21],a0:.62,a1:0,drag:.25,rotV:nt(-.4,.4)})}for(let i=this.rings.length-1;i>=0;i--){let r=this.rings[i];r.t+=e;let s=r.t/r.dur;if(s>=1){this.scene.remove(r.m),r.m.material.dispose(),this.rings.splice(i,1);continue}r.m.scale.setScalar(.1+r.size*(1-Math.pow(1-s,2.2))),r.m.material.opacity=r.opacity*(1-s)}for(let i of this.lights)i.t+=e,i.light.intensity=Math.max(0,i.peak*Math.exp(-i.t*5.5));this.shake=Math.max(0,this.shake-e*1.4),this.add.update(e),this.smoke.update(e)}};var o3={own:{hull:6979994,belt:8010288,deck:9278102,super:11845320,dark:2764854,accent:13935180},enemy:{hull:8806492,belt:3811880,deck:9076348,super:11902875,dark:2761250,accent:13059898}},v0=new Map;function gt(n,e=.62,t=.35){let i=`${n}:${e}:${t}`;return v0.has(i)||v0.set(i,new Oc({color:n,roughness:e,metalness:t})),v0.get(i)}var Ft=(n,e,t,i,r,s,o)=>{let a=new Tt(new Qi(n,e,t),o);return a.position.set(i,r,s),a},ya=(n,e,t,i,r,s,o,a=12)=>{let c=new Tt(new Sc(n,e,t,a),o);return c.position.set(i,r,s),c};function bv(n,e,t,i=.28,r=.06){let s=e/2,o=new Ar,a=-n/2,c=n/2,l=c-n*i;o.moveTo(a+r,-s),o.lineTo(l,-s),o.quadraticCurveTo(c-n*.06,-s*.85,c,0),o.quadraticCurveTo(c-n*.06,s*.85,l,s),o.lineTo(a+r,s),o.quadraticCurveTo(a,s,a,s-r),o.lineTo(a,-s+r),o.quadraticCurveTo(a,-s,a+r,-s);let u=new Pc(o,{depth:t,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:10});return u.rotateX(-Math.PI/2),u}function ga(n,e,t,i,r,s=2,o=1){let a=new Lt;a.position.set(n,e,t),a.add(ya(.15*i,.17*i,.08*i,0,.04*i,0,gt(r.super,.5,.5),14)),a.add(Ft(.26*i,.09*i,.24*i,.02*o*i,.11*i,0,gt(r.hull,.5,.5)));let c=s===3?[-.075,0,.075]:s===2?[-.05,.05]:[0];for(let l of c){let u=ya(.016*i,.02*i,.42*i,.3*o*i,.115*i,l*i,gt(r.dark,.4,.7),8);u.rotation.z=Math.PI/2,a.add(u)}return a}function sf(n,e,t,i,r,s){let o=new Lt,a=ya(i*.85,i,r,n,e+r/2,t,gt(s.dark,.7,.2),12);return a.scale.z=1.2,o.add(a),o.add(ya(i*.9,i*.9,r*.14,n,e+r*.78,t,gt(s.accent,.5,.3),12)),o}function of(n,e,t,i,r){let s=new Lt;return s.add(ya(.012,.018,i,n,e+i/2,t,gt(r.dark,.5,.6),6)),s.add(Ft(.015,.015,.24,n,e+i*.7,t,gt(r.dark))),s.add(Ft(.1,.012,.04,n-.02,e+i,t,gt(r.super))),s}function af(n,e="own"){let t=o3[e],i=ai[n],r=new Lt,s=new Lt;if(r.add(s),r.userData.body=s,n==="submarine"){let h=new Tt(new ta(.19,i-.62,6,16).rotateZ(Math.PI/2),gt(t.hull,.45,.5));h.scale.set(1,.9,1),h.position.y=-.04,s.add(h),s.add(Ft(i*.1,.02,.1,-.1,.15,0,gt(t.dark)));let f=Ft(.46,.26,.17,.05,.14,0,gt(t.super,.5,.5));return f.geometry=new ta(.085,.3,4,10).rotateZ(Math.PI/2),s.add(f),s.add(ya(.012,.012,.3,.12,.38,0,gt(t.dark),6)),s.add(Ft(.07,.025,.03,.15,.52,0,gt(t.dark))),s.add(Ft(.2,.02,.36,-i/2+.28,.02,0,gt(t.dark))),r}let a={carrier:.84,battleship:.7,cruiser:.6,destroyer:.46}[n],c=new Tt(bv(i*.985,a*.97,.2,n==="carrier"?.14:.28).translate(0,-.22,0),gt(t.belt,.8,.2)),l=new Tt(bv(i,a,.24,n==="carrier"?.14:.28).translate(0,-.02,0),gt(t.hull,.6,.4));s.add(c,l);let u=.22;if(n==="carrier"){let h=Ft(i*.97,.05,a*1.12,.02,u+.06,0,gt(t.deck,.8,.15));s.add(h),s.add(Ft(i*.84,.054,.026,0,u+.063,0,gt(15262408,.9,0))),s.add(Ft(i*.8,.054,.012,0,u+.063,.2,gt(15262408,.9,0))),s.add(Ft(.5,.42,.2,.55,u+.3,a*.5,gt(t.super,.55,.4))),s.add(Ft(.28,.22,.17,.55,u+.62,a*.5,gt(t.super,.55,.4))),s.add(of(.62,u+.7,a*.5,.5,t));for(let[f,p,g]of[[-1.3,-.12,.2],[-.95,.2,-.3],[-.55,-.24,.1],[-1.65,.18,0]]){let y=new Lt;y.add(Ft(.18,.025,.035,0,0,0,gt(t.dark))),y.add(Ft(.04,.012,.2,.01,0,0,gt(t.dark))),y.position.set(f,u+.105,p),y.rotation.y=g,s.add(y)}}else n==="battleship"?(s.add(Ft(i*.8,.05,a*.86,0,u+.02,0,gt(t.deck,.8,.15))),s.add(ga(1.25,u+.05,0,1.15,t,3)),s.add(ga(.66,u+.13,0,1.15,t,3)),s.add(ga(-1.2,u+.05,0,1.15,t,3,-1)),s.add(Ft(.42,.22,.34,-.12,u+.16,0,gt(t.super,.55,.4))),s.add(Ft(.3,.2,.26,-.12,u+.37,0,gt(t.super,.55,.4))),s.add(Ft(.2,.16,.2,-.12,u+.55,0,gt(t.super,.55,.4))),s.add(of(-.12,u+.6,0,.55,t)),s.add(sf(-.55,u+.05,0,.1,.38,t)),s.add(sf(-.82,u+.05,0,.1,.34,t))):n==="cruiser"?(s.add(Ft(i*.78,.05,a*.84,0,u+.02,0,gt(t.deck,.8,.15))),s.add(ga(.78,u+.05,0,.95,t,2)),s.add(ga(-.72,u+.05,0,.95,t,2,-1)),s.add(Ft(.34,.2,.28,.12,u+.15,0,gt(t.super,.55,.4))),s.add(Ft(.22,.16,.2,.12,u+.33,0,gt(t.super,.55,.4))),s.add(of(.12,u+.4,0,.45,t)),s.add(sf(-.18,u+.05,0,.09,.34,t))):(s.add(Ft(i*.8,.045,a*.84,0,u+.02,0,gt(t.deck,.8,.15))),s.add(ga(.5,u+.05,0,.7,t,1)),s.add(Ft(.26,.16,.2,.08,u+.13,0,gt(t.super,.55,.4))),s.add(of(.08,u+.2,0,.36,t)),s.add(sf(-.22,u+.05,0,.065,.24,t)),s.add(Ft(.2,.05,.12,-.55,u+.07,0,gt(t.dark))));return r}var vv={ok:new Dn({color:5898140,transparent:!0,opacity:.45,depthWrite:!1}),bad:new Dn({color:16730682,transparent:!0,opacity:.45,depthWrite:!1})};function wv(n,e){let t=af(n,"own");return t.traverse(i=>{i.isMesh&&(i.material=vv[e?"ok":"bad"])}),t}function Sv(n,e){n.traverse(t=>{t.isMesh&&(t.material=vv[e?"ok":"bad"])})}var ao=9,cf=new W(-.55,.16,-.82).normalize(),Mv=[{dx:1,dz:.3,a:.1,k:.55,s:.9},{dx:-.4,dz:1,a:.07,k:.9,s:1.1},{dx:.7,dz:-.7,a:.04,k:1.7,s:1.6},{dx:-.9,dz:-.3,a:.025,k:3.1,s:2}].map(n=>{let e=Math.hypot(n.dx,n.dz);return{...n,dx:n.dx/e,dz:n.dz/e}}),a3=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function c3(n,e){let t=Math.min(Math.max(Math.abs(n+ao),Math.abs(e)),Math.max(Math.abs(n-ao),Math.abs(e)));return .35+.65*a3(6.5,10,t)}function w0(n,e,t){let i=0;for(let r of Mv)i+=r.a*Math.sin(r.k*(r.dx*n+r.dz*e)+r.s*t);return i*c3(n,e)}var il=n=>n.toFixed(5),l3=Mv.map(n=>`h += ${il(n.a)} * sin(${il(n.k)} * (${il(n.dx)} * p.x + ${il(n.dz)} * p.y) + ${il(n.s)} * t);`).join(`
  `),Tv=`
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), f.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return s;
}
uniform vec3 uSunDir;
// Dusk sky without clouds: also what the sea reflects.
vec3 skyBase(vec3 d){
  float e = clamp(d.y, -0.2, 1.0);
  float sunAmt = max(dot(d, uSunDir), 0.0);
  vec3 zenith = vec3(0.012, 0.03, 0.07);
  vec3 mid = vec3(0.12, 0.13, 0.2);
  vec3 horizon = vec3(0.42, 0.19, 0.12);
  vec3 col = mix(horizon, mid, smoothstep(0.0, 0.22, e));
  col = mix(col, zenith, smoothstep(0.15, 0.85, e));
  col += vec3(1.0, 0.42, 0.14) * pow(sunAmt, 6.0) * 0.55;
  col += vec3(1.0, 0.7, 0.4) * pow(sunAmt, 60.0) * 0.9;
  return col;
}
`;function Av(){let n=new Tn({side:xn,depthWrite:!1,uniforms:{uTime:{value:0},uSunDir:{value:cf},uFlash:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        vec4 p = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * p;
      }`,fragmentShader:`
      varying vec3 vDir;
      uniform float uTime;
      uniform float uFlash;
      ${Tv}
      void main(){
        vec3 d = normalize(vDir);
        vec3 col = skyBase(d);
        float sunAmt = max(dot(d, uSunDir), 0.0);
        col += vec3(1.0, 0.85, 0.6) * smoothstep(0.9993, 0.9999, sunAmt) * 4.0;
        // layered storm clouds on a projected plane
        if (d.y > 0.0){
          vec2 uv = d.xz / (d.y + 0.18) * 0.7 + vec2(uTime * 0.012, uTime * 0.006);
          float c = fbm(uv * 1.3);
          float c2 = fbm(uv * 2.8 + 4.0);
          float cover = smoothstep(0.38, 0.78, c * 0.75 + c2 * 0.35);
          float lit = pow(sunAmt, 3.0);
          vec3 cloud = mix(vec3(0.05, 0.06, 0.1), vec3(0.28, 0.2, 0.2), c2);
          cloud += vec3(1.0, 0.45, 0.15) * lit * (1.0 - c * 0.6) * 1.1;
          cloud += vec3(0.45, 0.55, 1.0) * uFlash * (0.15 + c * 0.35);
          col = mix(col, cloud, cover * smoothstep(0.0, 0.18, d.y) * 0.9);
        }
        col += vec3(0.4, 0.5, 1.0) * uFlash * 0.06;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new Tt(new Qs(400,32,16),n);return e.renderOrder=-10,e.frustumCulled=!1,e}function Rv(){let n={uTime:{value:0},uSunDir:{value:cf},uBoards:{value:[new ge(-ao,0),new ge(ao,0)]},uFlat:{value:0},uFlash:{value:0}},e=`
    uniform float uTime;
    uniform float uFlat;
    uniform vec2 uBoards[2];
    varying vec3 vWorld;
    varying vec3 vN;
    varying float vH;
    float calm(vec2 p){
      float d = min(max(abs(p.x - uBoards[0].x), abs(p.y - uBoards[0].y)),
                    max(abs(p.x - uBoards[1].x), abs(p.y - uBoards[1].y)));
      return 0.35 + 0.65 * smoothstep(6.5, 10.0, d);
    }
    float height(vec2 p, float t){
      float h = 0.0;
      ${l3}
      float edge = 1.0 - smoothstep(30.0, 42.0, length(p));
      return h * calm(p) * edge * (1.0 - uFlat);
    }
    void main(){
      vec4 w = modelMatrix * vec4(position, 1.0);
      vec2 p = w.xz;
      float t = uTime;
      float h0 = height(p, t);
      float e = 0.12;
      float hx = height(p + vec2(e, 0.0), t);
      float hz = height(p + vec2(0.0, e), t);
      w.y += h0;
      vWorld = w.xyz;
      vH = h0;
      vN = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
      gl_Position = projectionMatrix * viewMatrix * w;
    }`,t=`
    uniform float uTime;
    uniform float uFlash;
    varying vec3 vWorld;
    varying vec3 vN;
    varying float vH;
    ${Tv}
    void main(){
      vec3 V = normalize(cameraPosition - vWorld);
      // fine ripples: two scrolling noise octaves bend the normal
      vec2 q = vWorld.xz;
      float n1 = fbm(q * 1.7 + vec2(uTime * 0.25, uTime * 0.18));
      float n2 = fbm(q * 3.9 - vec2(uTime * 0.31, uTime * 0.12));
      vec3 N = normalize(vN + vec3(n1 - 0.5, 0.0, n2 - 0.5) * 0.16);
      float ndv = clamp(dot(normalize(vN), V), 0.0, 1.0);
      float fres = 0.02 + 0.55 * pow(1.0 - ndv, 4.0);
      vec3 R = reflect(-V, N);
      R.y = max(R.y, 0.02);
      vec3 refl = skyBase(R);
      vec3 deep = vec3(0.003, 0.018, 0.03);
      vec3 shallow = vec3(0.012, 0.085, 0.11);
      vec3 body = mix(deep, shallow, smoothstep(-0.12, 0.2, vH) * 0.8 + n1 * 0.2);
      vec3 col = mix(body, refl, clamp(fres, 0.0, 1.0));
      vec3 H = normalize(uSunDir + V);
      col += vec3(1.0, 0.55, 0.25) * pow(max(dot(N, H), 0.0), 400.0) * 3.0;
      float foam = smoothstep(0.14, 0.2, vH + (n2 - 0.5) * 0.08);
      col = mix(col, vec3(0.5, 0.56, 0.62), foam * 0.16);
      col += vec3(0.3, 0.4, 0.8) * uFlash * 0.05;
      // distance fog towards the horizon colour
      float dist = length(cameraPosition - vWorld);
      vec3 fogCol = skyBase(normalize(vec3(V.x * -1.0, 0.0, V.z * -1.0)));
      float fog = 1.0 - exp(-pow(dist * 0.011, 1.9));
      col = mix(col, fogCol, clamp(fog, 0.0, 1.0));
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,i=new Tn({uniforms:n,vertexShader:e,fragmentShader:t}),r=i.clone();r.uniforms=Wd.clone(n),r.uniforms.uSunDir=n.uSunDir,r.uniforms.uFlat.value=1;let s=new Lt,o=new Tt(new ls(90,90,360,360).rotateX(-Math.PI/2),i);o.frustumCulled=!1;let a=new Ar;a.moveTo(-600,-600),a.lineTo(600,-600),a.lineTo(600,600),a.lineTo(-600,600),a.closePath();let c=new Zs;c.moveTo(-45,-45),c.lineTo(-45,45),c.lineTo(45,45),c.lineTo(45,-45),c.closePath(),a.holes.push(c);let l=new Tt(new Nc(a).rotateX(-Math.PI/2),r);return l.frustumCulled=!1,s.add(l,o),s.userData.tick=(u,h)=>{i.uniforms.uTime.value=u,r.uniforms.uTime.value=u,i.uniforms.uFlash.value=h,r.uniforms.uFlash.value=h},s}function u3(){let n=document.createElement("canvas");n.width=n.height=1024;let e=n.getContext("2d");e.clearRect(0,0,1024,1024),e.fillStyle="#e9d9a8",e.font="bold 44px 'Trebuchet MS', Verdana, sans-serif",e.textAlign="center",e.textBaseline="middle";let t=1024/12;for(let r=0;r<10;r++)e.fillText("ABCDEFGHIJ"[r],(r+1.5)*t,t*.5),e.fillText("ABCDEFGHIJ"[r],(r+1.5)*t,t*11.5),e.fillText(String(r+1),t*.5,(r+1.5)*t),e.fillText(String(r+1),t*11.5,(r+1.5)*t);let i=new js(n);return i.colorSpace=gn,i.anisotropy=4,i}var Ev=null;function Cv(n){Ev??=u3();let e=new Tn({transparent:!0,depthWrite:!1,uniforms:{uTex:{value:Ev},uTime:{value:0},uColor:{value:new st(n?5818623:16738890)},uActive:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uActive;
      void main(){
        vec2 g = vUv * 12.0 - 1.0;            // 0..10 across the 10x10 field
        vec2 gc = g - 5.0;
        bool inside = g.x > 0.0 && g.y > 0.0 && g.x < 10.0 && g.y < 10.0;
        vec2 fw = fwidth(g);
        vec2 d = abs(fract(g - 0.5) - 0.5) / max(fw, vec2(1e-4));
        float line = 1.0 - min(min(d.x, d.y), 1.0);
        vec2 b = min(g, 10.0 - g) / max(fw, vec2(1e-4));
        float border = 1.0 - clamp(min(b.x, b.y) - 1.0, 0.0, 1.0);
        float ang = atan(gc.y, gc.x);
        float sweep = pow(max(0.0, cos(ang - uTime * 0.9)), 24.0) * smoothstep(8.0, 1.0, length(gc));
        float a = 0.0;
        vec3 col = uColor;
        if (inside){
          a = 0.07 + line * 0.34 + border * 0.5 + sweep * 0.22 * uActive;
          col = mix(col, vec3(1.0), border * 0.3);
        }
        vec4 lab = texture2D(uTex, vUv);
        col = mix(col, lab.rgb, lab.a);
        a = max(a, lab.a * 0.85);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }`}),t=new Tt(new ls(12,12).rotateX(-Math.PI/2),e);return t.renderOrder=2,t}var Iv=1.15,h3=3.2,S0=42,d3=n=>n*n*(3-2*n),Pv=(n,e,t)=>Math.min(t,Math.max(e,n));function Nv(n){let e=ai[n.kind];return n.horizontal?{cx:n.x+e/2,cy:n.y+.5,yaw:0}:{cx:n.x+.5,cy:n.y+e/2,yaw:-Math.PI/2}}var f3=(n,e)=>n.kind===e.kind&&n.x===e.x&&n.y===e.y&&n.horizontal===e.horizontal,lf=class{constructor(e,t,i,r){this.name=e,this.own=i,this.center=new W(t,0,0),this.group=new Lt,this.group.position.copy(this.center),this.grid=Cv(i),this.grid.position.y=.2,this.group.add(this.grid),this.shipsGroup=new Lt,this.group.add(this.shipsGroup),this.decals=new Lt,this.group.add(this.decals),r.add(this.group),this.ships=new Map,this.marks=[]}cellPos(e,t,i=0){return[this.center.x+e+.5-10/2,i,this.center.z+t+.5-10/2]}markAt(e,t){return this.marks.find(i=>i.x===e&&i.y===t)}},uf=class{constructor(e){this.t=0,this.ok=!1;try{this.renderer=new Yd({antialias:!0,powerPreference:"high-performance"})}catch(a){console.error("WebGL unavailable",a);return}this.ok=!0;let t=this.renderer;t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),t.toneMapping=Gc,t.toneMappingExposure=1.05;let i=t.domElement;i.id="battlefield",i.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:0;display:block;touch-action:none",e.prepend(i),this.scene=new gc,this.camera=new Mn(S0,1,.1,1500),this.camera.position.set(0,6,30),this.sky=Av(),this.sea=Rv(),this.scene.add(this.sky,this.sea),this.scene.add(new Bc(10466006,2307130,1.5));let r=new oa(12045810,1.5);r.position.set(14,26,34),this.scene.add(r);let s=new oa(16754790,2.6);s.position.copy(cf).multiplyScalar(60),this.scene.add(s),this.fx=new rf(this.scene),this.boards={own:new lf("own",-ao,!0,this.scene),enemy:new lf("enemy",ao,!1,this.scene)},this.boards.enemy.grid.material.uniforms.uActive.value=1,this.reticle=this.makeReticle(),this.reticle.visible=!1,this.scene.add(this.reticle),this.reticleState=null,this.ghost=null,this.menuFleet=new Lt,this.menuShips=[{kind:"carrier",r:24,a:1.1,v:.02},{kind:"battleship",r:17,a:3.4,v:-.026},{kind:"destroyer",r:11,a:5.2,v:.034}].map(a=>{let c=af(a.kind,"own");return this.menuFleet.add(c),{...a,s:c}}),this.scene.add(this.menuFleet),this.mode="menu",this.focusName="overview",this.placing=!1,this.camPos=new W(0,6,30),this.camLook=new W(0,3,0),this.parallax=new ge,this.parallaxT=new ge,this.queue=[],this.cur=null,this.timers=[],this.shell=null,this.gameKey=null,this.synced=!1,this.shown={own:0,enemy:0},this.cumShots={own:[],enemy:[]},this.pendingReveal=null,this.busy=!1,this.flash=0,this.nextLightning=6,this.onImpact=null,this.onSunk=null,this.onBusy=null,this.raycaster=new zc,this.plane=new Qn(new W(0,1,0),-.2),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),window.addEventListener("pointermove",a=>{this.parallaxT.set(a.clientX/window.innerWidth*2-1,a.clientY/window.innerHeight*2-1)}),this.resize(),this.last=performance.now();let o=a=>{requestAnimationFrame(o);let c=Math.min(.05,(a-this.last)/1e3);this.last=a,this.update(c),this.renderer.render(this.scene,this.camera)};requestAnimationFrame(o)}makeReticle(){let e=new Lt,t=new Dn({color:16734780,transparent:!0,opacity:.95,depthWrite:!1});this.reticleMat=t;let i=(s,o,a,c)=>{let l=new Tt(new Qi(s,.03,o),t);l.position.set(a,0,c),e.add(l)},r=.46;return i(.96,.05,0,r),i(.96,.05,0,-r),i(.05,.96,r,0),i(.05,.96,-r,0),i(.3,.035,.17,0),i(.3,.035,-.17,0),i(.035,.3,0,.17),i(.035,.3,0,-.17),e.renderOrder=4,e}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fx.setScale(t*this.renderer.getPixelRatio(),S0)}setMode(e){this.mode=e}focus(e){this.focusName=e}setPlacing(e){this.placing=e}isBusy(){return this.busy}reset(){this.queue.length=0,this.cur=null,this.timers.length=0,this.clearShell(),this.fx.clear();for(let e of Object.values(this.boards)){for(let t of e.ships.values())e.shipsGroup.remove(t.root);e.ships.clear();for(let t of e.marks)e.decals.remove(t.mesh);e.marks.length=0}this.removeGhost(),this.reticle.visible=!1,this.synced=!1,this.gameKey=null,this.shown={own:0,enemy:0},this.cumShots={own:[],enemy:[]},this.pendingReveal=null,this.setBusy(!1)}setBusy(e){e!==this.busy&&(this.busy=e,this.onBusy?.(e))}setOwnFleet(e,{quiet:t=!1}={}){let i=this.boards.own;for(let[r,s]of[...i.ships]){let o=e.find(a=>a.kind===r);(!o||!f3(o,s.data))&&(i.shipsGroup.remove(s.root),i.ships.delete(r))}for(let r of e)i.ships.has(r.kind)||this.addShip(i,r,{drop:!t,wreck:!1})}addShip(e,t,{drop:i=!1,wreck:r=!1}){let s=af(t.kind,e.own?"own":"enemy"),o=Nv(t);s.position.set(o.cx-10/2,0,o.cy-10/2),s.rotation.y=o.yaw,e.shipsGroup.add(s);let a={kind:t.kind,data:t,root:s,body:s.userData.body,pose:o,sink:r?1:0,sinking:!1,drop:i?1:0,phase:Math.random()*6.28,rollSign:Math.random()<.5?-1:1,fires:[]};return e.ships.set(t.kind,a),i&&qt.play("place"),r&&this.wreckFire(e,a),a}wreckFire(e,t){let i=Mi(t.data);for(let r of i.filter((s,o)=>o%2===0)){let s=e.cellPos(r.x,r.y,.28);t.fires.push(this.fx.addFire(s,{intense:.7,burnFor:5}))}}setGhost(e,t){if(!e)return this.removeGhost();let i=`${e.kind}:${e.horizontal}`;if(!this.ghost||this.ghost.key!==i){this.removeGhost();let s=wv(e.kind,t);this.boards.own.shipsGroup.add(s),this.ghost={key:i,root:s,valid:t}}this.ghost.valid!==t&&(Sv(this.ghost.root,t),this.ghost.valid=t);let r=Nv(e);this.ghost.root.position.set(r.cx-10/2,.2,r.cy-10/2),this.ghost.root.rotation.y=r.yaw}removeGhost(){this.ghost&&this.boards.own.shipsGroup.remove(this.ghost.root),this.ghost=null}setReticle(e,t,i,r="ok"){if(e==null){this.reticle.visible=!1,this.reticleState=null;return}let o=this.boards[e].cellPos(t,i,.27);this.reticle.position.set(o[0],o[1],o[2]),this.reticle.visible=!0,this.reticleState=r,this.reticleMat.color.set({ok:16734780,bad:9080724,lock:16765770,place:5888255}[r])}pick(e,t){if(!this.ok)return null;let i=this.renderer.domElement.getBoundingClientRect(),r=new ge((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let s=new W;if(!this.raycaster.ray.intersectPlane(this.plane,s))return null;for(let o of Object.values(this.boards)){let a=s.x-o.center.x+10/2,c=s.z-o.center.z+10/2;if(a>=0&&c>=0&&a<10&&c<10)return{board:o.name,x:Math.floor(a),y:Math.floor(c)}}return null}setGame(e,t,{over:i=!1}={}){if(!this.ok)return;t!==this.gameKey&&(this.reset(),this.gameKey=t),e.you.ships.length&&this.setOwnFleet(e.you.ships,{quiet:!this.synced});let r=!this.synced;this.synced=!0;let s=this.boards.own,o=this.boards.enemy,a=e.opp.ships,c=(u,h,f,p)=>u.find(g=>{let y=Mi(g);return ci(y,p)&&y.every(m=>ci(h.slice(0,f+1),m))})??null,l=[];for(let u=this.shown.enemy;u<e.opp.shots.length;u++){let h=e.opp.shots[u];l.push({board:"enemy",x:h.x,y:h.y,hit:h.hit,sunk:h.hit?c(a,e.opp.shots,u,h):null})}for(let u=this.shown.own;u<e.you.shots.length;u++){let h=e.you.shots[u];l.push({board:"own",x:h.x,y:h.y,hit:h.hit,sunk:h.hit?c(e.you.ships,e.you.shots,u,h):null})}if(this.shown.enemy=e.opp.shots.length,this.shown.own=e.you.shots.length,r)for(let u of l){let h=this.boards[u.board];this.addMark(h,u,{instant:!0}),u.sunk&&this.sinkNow(h,u.sunk)}else this.queue.push(...l);i&&(this.pendingReveal=a),this.tryReveal()}tryReveal(){if(!this.pendingReveal||this.queue.length||this.cur)return;let e=this.boards.enemy;for(let t of this.pendingReveal){if(e.ships.has(t.kind))continue;let i=Mi(t).every(r=>e.markAt(r.x,r.y)?.hit);this.addShip(e,t,{drop:!i,wreck:i})}this.pendingReveal=null}sinkNow(e,t){let i=e.ships.get(t.kind);i?(i.sink=1,i.sinking=!1,this.wreckFire(e,i)):i=this.addShip(e,t,{wreck:!0})}addMark(e,t,{instant:i=!1}={}){if(e.markAt(t.x,t.y))return;let r=new Lt,s=e.cellPos(t.x,t.y,0).map((a,c)=>a-[e.center.x,0,e.center.z][c]);r.position.set(s[0],.23,s[2]);let o={x:t.x,y:t.y,hit:t.hit,mesh:r,fire:null,born:this.t};if(t.hit){let a=new Tt(new na(.34,24).rotateX(-Math.PI/2),new Dn({color:16726554,transparent:!0,opacity:.55,blending:to,depthWrite:!1}));r.add(a);let c=e.cellPos(t.x,t.y,.3);o.fire=this.fx.addFire(c,{intense:e.own?1:.9,burnFor:i?8:40})}else{let a=new Tt(new Js(.2,.28,28).rotateX(-Math.PI/2),new Dn({color:15398655,transparent:!0,opacity:.8,depthWrite:!1})),c=new Tt(new na(.11,16).rotateX(-Math.PI/2),new Dn({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));r.add(a,c),o.ring=a}e.decals.add(r),e.marks.push(o)}clearShell(){this.shell&&this.scene.remove(this.shell.mesh),this.shell=null}startEvent(e){let t=this.boards[e.board],i=new W(...t.cellPos(e.x,e.y,.3)),r=e.board==="enemy"?new W(-16,8,24):new W(18,10,-22),s=i.clone().add(r),o=new Lt,a=new Tt(new Qs(.1,12,8),new Dn({color:16769184}));a.scale.set(1,1,1.9),o.add(a),this.scene.add(o),this.shell={mesh:o,origin:s,target:i,arc:9+Math.random()*3},this.cur={ev:e,t:0,stage:"flight",end:Iv},this.focus(e.board),this.setBusy(!0),qt.play("cannon"),setTimeout(()=>qt.play("whistle",Iv*.9),120);let c=s.toArray();this.fx.add.emit({pos:c,life:.3,size0:2.2,size1:3.4,c0:[1,.9,.6],c1:[1,.4,.1],a0:1,a1:0})}impact(e){let t=this.boards[e.board],i=t.cellPos(e.x,e.y,e.hit?.3:.12);if(this.addMark(t,e),e.hit?(this.fx.explosion(i,e.sunk?1.4:1),qt.play("explosion")):(this.fx.splash(i),qt.play("splash")),this.onImpact?.(e),e.sunk){let r=t.ships.get(e.sunk.kind);r||(r=this.addShip(t,e.sunk,{drop:!1})),r.sinking=!0;for(let[s,o]of Mi(e.sunk).entries())this.timers.push({at:this.t+.25+s*.28,run:()=>{this.fx.explosion(t.cellPos(o.x,o.y,.35),.8),s%2===0&&qt.play("explosion")}});this.timers.push({at:this.t+.6,run:()=>qt.play("sink")}),this.cur.stage="sink",this.cur.t=0,this.cur.end=h3,this.cur.rec=r,this.cur.board=t,this.onSunk?.(e)}else this.cur.stage="linger",this.cur.t=0,this.cur.end=e.hit?1.1:.7}tickQueue(e){if(!this.cur){if(!this.queue.length){this.tryReveal(),!this.queue.length&&!this.cur&&this.setBusy(!1);return}this.startEvent(this.queue.shift())}let t=1+.6*Math.min(this.queue.length,3),i=this.cur;if(i.t+=e*t,i.stage==="flight"){let r=Pv(i.t/i.end,0,1),s=this.shell;s.mesh.position.lerpVectors(s.origin,s.target,r),s.mesh.position.y+=s.arc*4*r*(1-r)*(1-r*.2),s.mesh.lookAt(s.target);let o=s.mesh.position;this.fx.add.emit({pos:[o.x,o.y,o.z],life:.35,size0:.35,size1:.1,c0:[1,.7,.3],c1:[1,.2,.05],a0:.8,a1:0}),this.fx.smoke.emit({pos:[o.x,o.y,o.z],vel:[0,.2,0],life:1.1,size0:.25,size1:.8,c0:[.5,.5,.52],c1:[.3,.3,.32],a0:.35,a1:0,rotV:.5}),r>=1&&(this.clearShell(),this.impact(i.ev))}else if(i.stage==="sink"){i.rec.sink=d3(Pv(i.t/i.end,0,1));let r=i.board.cellPos(i.rec.data.x,i.rec.data.y,.1),s=Mi(i.rec.data),o=s[Math.floor(Math.random()*s.length)],a=i.board.cellPos(o.x,o.y,.15);Math.random()<.7&&this.fx.smoke.emit({pos:a,vel:[0,1.4,0],life:1.2,size0:.12,size1:.3,c0:[.8,.9,1],a0:.5,a1:0,grav:-.5}),i.t>=i.end&&(i.rec.sinking=!1,i.rec.sink=1,this.wreckFire(i.board,i.rec),this.cur=null)}else i.t>=i.end&&(this.cur=null)}update(e){this.t+=e;let t=this.t;this.sea.userData.tick(t,this.flash),this.sky.material.uniforms.uTime.value=t,this.sky.material.uniforms.uFlash.value=this.flash,this.nextLightning-=e,this.nextLightning<0&&(this.nextLightning=14+Math.random()*18,this.flash=1,setTimeout(()=>this.flash=.8,140),setTimeout(()=>qt.play("thunder"),700+Math.random()*1200)),this.flash=Math.max(0,this.flash-e*3.2);for(let i=this.timers.length-1;i>=0;i--)this.timers[i].at<=t&&this.timers.splice(i,1)[0].run();this.tickQueue(e),this.fx.update(e,t);for(let i of Object.values(this.boards)){i.group.visible=this.mode!=="menu",i.grid.material.uniforms.uTime.value=t;for(let r of i.ships.values())this.poseShip(i,r,t,e);for(let r of i.marks){if(r.ring){let s=1+.18*Math.sin(t*2+r.x*1.7+r.y);r.ring.scale.set(s,1,s)}r.hit&&r.mesh.children[0]&&(r.mesh.children[0].material.opacity=.3+.25*Math.sin(t*7+r.x*3+r.y))}}if(this.reticle.visible){let i=this.reticleState==="lock"?1+.12*Math.sin(t*14):1+.05*Math.sin(t*6);this.reticle.scale.set(i,1,i),this.reticle.rotation.y=this.reticleState==="lock"?t*1.5:0}this.updateMenuFleet(t),this.updateCamera(e,t)}poseShip(e,t,i,r){let s=e.center.x+t.pose.cx-10/2,o=e.center.z+t.pose.cy-10/2,a=w0(s,o,i),c=t.sink;t.drop>0&&(t.drop=Math.max(0,t.drop-r*3.2));let l=t.body,u=Math.sin(i*1.1+t.phase);l.position.y=a*.9+t.drop*1.6-.27*c,l.rotation.x=.035*u+t.rollSign*.5*c,l.rotation.z=.03*Math.sin(i*.9+t.phase*2)-.1*c}updateMenuFleet(e){let t=this.mode==="menu";if(this.menuFleet.visible=t,!!t)for(let i of this.menuShips){let r=i.a+e*i.v;i.s.position.set(Math.cos(r)*i.r,w0(Math.cos(r)*i.r,Math.sin(r)*i.r,e)*.9,Math.sin(r)*i.r-10),i.s.rotation.y=-r+(i.v>0?-Math.PI/2:Math.PI/2),i.s.userData.body.rotation.x=.03*Math.sin(e+i.a)}}updateCamera(e,t){let i=this.camera.aspect,r=Math.tan(S0*Math.PI/360),s=(u,h)=>Math.max(1,u/(2*r*i*h)),o,a;if(this.mode==="menu"){let u=t*.045;o=new W(Math.sin(u)*22,4.2+Math.sin(t*.13)*.6,30+Math.cos(u)*6),a=new W(Math.sin(u*.7)*6,2.4,-8)}else if(this.focusName==="overview"){let u=s(36,28);o=new W(0,21,24).multiplyScalar(u),a=new W(0,0,1)}else{let u=this.boards[this.focusName],h=s(this.placing?17:15,16.3),f=this.placing?new W(0,15,7.5):new W(0,11.5,12.5);o=u.center.clone().add(f.multiplyScalar(h)),a=u.center.clone().add(new W(0,0,this.placing?2.6:.4))}let c=1-Math.exp(-e*1.9);this.camPos.lerp(o,c),this.camLook.lerp(a,c*1.2),this.parallax.lerp(this.parallaxT,1-Math.exp(-e*2));let l=this.fx.shake;this.camera.position.set(this.camPos.x+this.parallax.x*.9+(Math.random()-.5)*l*.5,this.camPos.y-this.parallax.y*.5+(Math.random()-.5)*l*.5,this.camPos.z+(Math.random()-.5)*l*.5),this.camera.lookAt(this.camLook),this.sky.position.copy(this.camera.position)}cellToScreen(e,t,i){let r=this.boards[e],s=new W(...r.cellPos(t,i,.2)).project(this.camera);return{x:(s.x+1)/2*window.innerWidth,y:(1-s.y)/2*window.innerHeight}}};var Ov=45,p3=`
  <div class="hud-banner"><div class="b-title"></div><div class="b-sub"></div></div>
  <div class="hud-fleets">
    <section class="fleet own"><h4>Your fleet</h4><ul></ul></section>
    <section class="fleet enemy"><h4>Enemy fleet</h4><ul></ul></section>
  </div>
  <div class="hud-tools">
    <button data-focus="own" title="Your waters">\u2693 Yours</button>
    <button data-focus="enemy" title="Enemy waters">\u{1F3AF} Enemy</button>
    <button data-focus="overview" title="Both fields">\u{1F30A} Both</button>
    <button id="mute-btn" title="Sound"></button>
  </div>
  <div class="hud-tray">
    <div class="tray-head"><span class="tray-title">Deploy your fleet</span><span class="tray-timer"></span></div>
    <div class="timerbar"><i></i></div>
    <div class="cards"></div>
    <div class="tray-buttons">
      <button data-tray="rotate" title="Rotate (R / right-click)">\u27F3 Rotate</button>
      <button data-tray="random" title="Random fleet">\u{1F3B2} Random</button>
      <button data-tray="clear" title="Clear">\u2715 Clear</button>
      <button data-tray="ready" class="primary">READY</button>
    </div>
  </div>
  <div class="hud-fire"><button class="primary">\u{1F3AF} FIRE <span></span></button></div>
  <div class="hud-log"></div>
  <div class="hud-toast"></div>
`;function Lv({client:n,plugin:e,scene:t}){let i=document.createElement("div");i.id="hud",i.hidden=!0,i.innerHTML=p3,document.body.appendChild(i);let r=Y=>i.querySelector(Y),s=r(".b-title"),o=r(".b-sub"),a=r(".fleet.own ul"),c=r(".fleet.enemy ul"),l=r(".hud-tray"),u=r(".cards"),h=r(".tray-timer"),f=r(".timerbar i"),p=r(".hud-log"),g=r(".hud-toast"),y=r(".hud-fire"),m=r("#mute-btn"),d={key:null,latest:null,draft:[],selected:rn[0],horizontal:!0,ready:!1,submitting:!1,deadline:0,auto:!1,pendingShot:null,aim:null,manual:null,lastTick:-1,ended:null,sunkShown:{own:new Set,enemy:new Set}},_=()=>window.matchMedia?.("(pointer: coarse)").matches,b=0;function v(Y,L=""){g.className=`hud-toast show ${L}`,g.textContent=Y,clearTimeout(b),b=setTimeout(()=>g.className="hud-toast",2200)}function E(Y,L=""){let Z=document.createElement("div");for(Z.className=L,Z.textContent=Y,p.prepend(Z);p.children.length>5;)p.lastChild.remove()}function T(Y,L="",Z=""){s.textContent=Y,o.textContent=L,s.parentElement.className=`hud-banner ${Z}`}let x=()=>d.latest&&d.latest.g.toMove===d.latest.seat,w=()=>d.latest&&d.latest.g.phase==="placing"&&!d.latest.g.you.placed&&!d.ready,I=()=>d.latest&&d.latest.g.phase==="battle"&&x()&&!t.isBusy()&&!d.pendingShot&&!d.latest.over;function R(){let Y=d.latest?.g;return Y?`${Y.toMove}:${Y.you.shots.length}:${Y.opp.shots.length}:${Y.phase}`:""}function O(){let Y=d.latest;if(Y){if(Y.over)return t.focus("overview");if(d.manual&&d.manual.sig===R())return t.focus(d.manual.name);if(d.manual=null,Y.g.phase==="placing")return t.focus("own");t.focus(Y.g.toMove===Y.seat?"enemy":"own")}}function P(Y){let L=(Z,re)=>new Set(Z.filter(me=>Mi(me).every(de=>ci(re,de))).map(me=>me.kind));return{own:L(Y.you.ships,Y.you.shots),enemy:L(Y.opp.ships,Y.opp.shots)}}function U(){if(!d.latest)return;let L=d.sunkShown,Z=(re,me,de)=>`<li class="${me?"sunk":""}"><span class="pips">${"\u25A0".repeat(ai[re])}</span> ${de&&!me?"???":Xu[re]}${me?" \u2716":""}</li>`;a.innerHTML=rn.map(re=>Z(re,L.own.has(re),!1)).join(""),c.innerHTML=rn.map(re=>Z(re,L.enemy.has(re),!0)).join("")}function A(Y=!1){let L=d.latest;if(!L||!Y&&t.isBusy())return;let Z=P(L.g);d.sunkShown=Z,U()}function z(){u.innerHTML=rn.map(L=>{let Z=d.draft.some(me=>me.kind===L);return`<button class="card ${`${Z?"placed":""} ${d.selected===L?"selected":""}`}" data-kind="${L}"><b>${Xu[L]}</b><span class="pips">${"\u25A0".repeat(ai[L])}</span>${Z?"<i>\u2713</i>":""}</button>`}).join("");let Y=r('[data-tray="ready"]');Y.disabled=d.draft.length!==rn.length,Y.textContent=d.ready?"LOCKED IN":"READY"}function $(){return rn.find(Y=>!d.draft.some(L=>L.kind===Y))??null}function N(Y,L,Z,re){let me=ai[Y],de=Math.floor(me/2);return L?{kind:Y,horizontal:L,x:Math.min(Math.max(Z-de,0),10-me),y:re}:{kind:Y,horizontal:L,x:Z,y:Math.min(Math.max(re-de,0),10-me)}}function j(Y){if(!w()||!d.selected||!Y||Y.board!=="own"){t.setGhost(null);return}let L=N(d.selected,d.horizontal,Y.x,Y.y),Z=d.draft.filter(re=>re.kind!==L.kind);t.setGhost(L,Oo(L,Z)),d.ghostShip=L}function H(Y){if(!w()||Y.board!=="own")return;let L=u_(d.draft,Y);if(L&&(!d.selected||!q(Y))){d.draft=d.draft.filter(re=>re.kind!==L.kind),d.selected=L.kind,d.horizontal=L.horizontal,t.setOwnFleet(d.draft),z(),j(Y);return}if(!d.selected)return;let Z=N(d.selected,d.horizontal,Y.x,Y.y);if(!Oo(Z,d.draft.filter(re=>re.kind!==Z.kind))){v("Ships may not overlap","bad");return}d.draft=[...d.draft.filter(re=>re.kind!==Z.kind),Z],d.selected=$(),t.setOwnFleet(d.draft),t.setGhost(null),z()}let q=Y=>{let L=N(d.selected,d.horizontal,Y.x,Y.y);return Oo(L,d.draft.filter(Z=>Z.kind!==L.kind))};function B(Y){d.draft=Y,d.selected=$(),t.setOwnFleet(d.draft),t.setGhost(null),z()}function J(Y=!1){d.draft.length!==rn.length||Xp(d.draft)||(d.ready=!0,d.auto=Y,t.setGhost(null),qt.play("lock"),z(),Ae(),se())}async function se(){let Y=d.latest;if(!d.ready||d.submitting||!Y||Y.g.phase!=="placing"||Y.g.you.placed||Y.g.toMove!==Y.seat)return;d.submitting=!0;let L=await n.submit({place:d.draft.map(No)});d.submitting=!1,!L.ok&&L.reason!=="stale"&&L.reason!=="inFlight"&&(d.ready=!1,z())}function V(){let Y=d.latest,L=!!Y&&Y.g.phase==="placing"&&!Y.g.you.placed&&!Y.over;if(!L||d.ready){h.textContent=d.ready&&L?"Waiting for your turn to deploy\u2026":"",f.style.width=d.ready&&L?"0%":"100%";return}let Z=Math.max(0,(d.deadline-Date.now())/1e3);h.textContent=`${Math.ceil(Z)}s`,f.style.width=`${100*Z/Ov}%`,l.classList.toggle("urgent",Z<=10),Z<=10&&Math.ceil(Z)!==d.lastTick&&(d.lastTick=Math.ceil(Z),qt.play("tick")),Z<=0&&(v("Out of time \u2014 your fleet was deployed at random","bad"),B(Hs(d.draft)),J(!0))}setInterval(V,250);let D=t.ok?t.renderer.domElement:null;function X(Y){let L=t.pick(Y.clientX,Y.clientY);if(w()){j(L);return}if(I()&&L?.board==="enemy"){let Z=ci(d.latest.g.opp.shots,L);t.setReticle("enemy",L.x,L.y,Z?"bad":"ok"),D.style.cursor=Z?"not-allowed":"crosshair"}else!d.pendingShot&&!d.aim&&(t.setReticle(null),D.style.cursor="default")}D?.addEventListener("pointermove",X),D?.addEventListener("pointerleave",()=>{w()&&t.setGhost(null),!d.pendingShot&&!d.aim&&t.setReticle(null)}),D?.addEventListener("contextmenu",Y=>{Y.preventDefault(),w()&&ie(Y)}),D?.addEventListener("pointerup",Y=>{if(Y.button!==0)return;let L=t.pick(Y.clientX,Y.clientY);if(L){if(w()){H(L),j(L);return}I()&&L.board==="enemy"&&!ci(d.latest.g.opp.shots,L)&&(Y.pointerType==="touch"||_()?(d.aim={x:L.x,y:L.y},t.setReticle("enemy",L.x,L.y,"ok"),y.classList.add("show"),y.querySelector("span").textContent=Yu(L.x,L.y)):te(L))}});async function te(Y){if(!I())return;d.pendingShot={x:Y.x,y:Y.y},d.aim=null,y.classList.remove("show"),t.setReticle("enemy",Y.x,Y.y,"lock"),qt.play("lock"),T("FIRING\u2026",Yu(Y.x,Y.y),"fire");let L=await n.submit({fire:{x:BigInt(Y.x),y:BigInt(Y.y)}});L.ok||(d.pendingShot=null,t.setReticle(null),L.reason==="rejected"&&v(L.message??"Rejected","bad"),Ee())}y.querySelector("button").addEventListener("click",()=>d.aim&&te(d.aim));function ie(Y){Y?.preventDefault?.(),d.horizontal=!d.horizontal,qt.play("tick"),d.hoverCell&&j(d.hoverCell)}window.addEventListener("keydown",Y=>{w()&&((Y.key==="r"||Y.key==="R")&&ie(),Y.key==="Enter"&&d.draft.length===rn.length&&J())}),D?.addEventListener("pointermove",Y=>d.hoverCell=t.pick(Y.clientX,Y.clientY)),i.addEventListener("click",Y=>{let L=Y.target.closest("button");if(L)if(qt.start(),L.dataset.focus)d.manual={name:L.dataset.focus,sig:R()},t.focus(L.dataset.focus);else if(L.dataset.kind&&w()){let Z=L.dataset.kind;d.draft.some(re=>re.kind===Z)&&(d.draft=d.draft.filter(re=>re.kind!==Z),t.setOwnFleet(d.draft)),d.selected=Z,z()}else L.dataset.tray==="rotate"?ie():L.dataset.tray==="random"&&w()?B(Hs()):L.dataset.tray==="clear"&&w()?B([]):L.dataset.tray==="ready"&&w()?J():L.id==="mute-btn"&&(qt.setMuted(!qt.muted),ce())});function ce(){m.textContent=qt.muted?"\u{1F507}":"\u{1F50A}"}ce(),t.onImpact=Y=>{let L=Y.board==="enemy",Z=Yu(Y.x,Y.y);if(Y.hit){let re=Y.sunk?` \u2014 ${L?"enemy":"your"} ${Xu[Y.sunk.kind]} sunk!`:"";v(Y.sunk?L?"ENEMY SHIP SUNK!":"YOUR SHIP IS SUNK!":L?"DIRECT HIT!":"WE'VE BEEN HIT!",L?"good":"bad"),E(`${L?"You hit":"Enemy hit"} ${Z}${re}`,L?"good":"bad")}else v(L?"Splash \u2014 miss":"Enemy missed",""),E(`${L?"You missed":"Enemy missed"} ${Z}`);d.pendingShot&&L&&Y.x===d.pendingShot.x&&Y.y===d.pendingShot.y&&(d.pendingShot=null,t.setReticle(null))},t.onBusy=Y=>{Y||(A(!0),O(),Ee())};let Ae=()=>document.body.classList.toggle("deploying",!!w());function Ee(){let Y=d.latest;if(!Y)return;let{g:L,seat:Z}=Y;if(!Y.over){if(L.phase==="placing"){L.you.placed?T("FLEET DEPLOYED",L.opp.placed?"Battle stations\u2026":"Waiting for the enemy admiral to deploy","wait"):d.ready?T("FLEET LOCKED IN",L.toMove===Z?"Sending orders\u2026":"Waiting for the enemy admiral to deploy first","wait"):T("DEPLOY YOUR FLEET",_()?"Tap a ship, then a cell \xB7 Rotate with the button":"Pick a ship, click a cell \xB7 R or right-click rotates","deploy");return}if(!t.isBusy())if(L.toMove===Z){let re=L.last&&L.last.by===Z&&L.last.hit;T(d.pendingShot?"FIRING\u2026":re?"DIRECT HIT \u2014 FIRE AGAIN!":"YOUR FIRE","Choose a target on the enemy field","fire")}else T("ENEMY TAKING AIM","Brace for impact\u2026","enemy")}}function Le(Y){let L=Y.status,Z=gr(L,"inGame"),re=gr(L,"debrief"),me=es(L);if(document.body.dataset.screen=Z?"game":re?"debrief":"menu",i.hidden=!(Z||re),!t.ok)return;if(!Z&&!re){t.setMode("menu"),t.reset(),d.key=null,d.latest=null,d.ended=null,qt.setIntensity(0),l.classList.remove("show"),y.classList.remove("show"),Ae();return}t.setMode("play");let de=Z??re,We=jt(de.seat),Ie=`${me.id}:${de.gen}`,ze=tc(Z?Z.game:re.finalGame),Ye=!!re;if(Ie!==d.key&&(d.key=Ie,d.draft=[],d.selected=rn[0],d.horizontal=!0,d.ready=!1,d.submitting=!1,d.pendingShot=null,d.aim=null,d.manual=null,d.ended=null,d.deadline=Date.now()+Ov*1e3,d.sunkShown={own:new Set,enemy:new Set},p.innerHTML="",t.reset(),t.setReticle(null)),d.latest={g:ze,seat:We,key:Ie,over:Ye},d.pendingShot&&ci(ze.opp.shots,d.pendingShot)&&!t.isBusy()&&t.cur,t.setPlacing(ze.phase==="placing"&&!ze.you.placed&&!Ye),qt.setIntensity(ze.phase==="battle"?1:.35),ze.phase==="placing"&&!ze.you.placed&&!Ye?(t.setGame(ze,Ie),t.setOwnFleet(d.draft,{quiet:!0}),l.classList.add("show"),z()):(l.classList.remove("show"),t.setGame(ze,Ie,{over:Ye}),ze.phase==="placing"&&(d.ready=!0)),y.classList.toggle("show",!!d.aim&&I()),Ye&&d.ended!==Ie){d.ended=Ie;let{title:et,outcome:k}=qp(re.end,We),yt=k==="win";T(yt?"VICTORY":k==="lose"?"DEFEAT":"STAND DOWN",et,yt?"victory":k==="lose"?"defeat":"wait"),setTimeout(()=>qt.play(yt?"victory":k==="lose"?"defeat":"tick"),t.isBusy()?3500:300)}O(),Ee(),A(!t.isBusy()),Ae(),se()}return n.subscribe(Y=>Le(Y)),Le(n.getState()),d}var Bv=Ix(),Fv=Bv?.["PUBLIC_CANISTER_ID:backend"];if(!Fv)throw document.body.innerHTML="<p style='color:#ff7b72;padding:2rem'>Could not find <code>PUBLIC_CANISTER_ID:backend</code> in the <code>ic_env</code> cookie. Serve this page from its frontend canister, with that canister environment variable set to the backend's id.</p>",new Error("missing canister id");var m3=a_(),Uv=o_(),g3=await Gs.create({host:m3,identity:Uv.identity,rootKey:Bv.IC_ROOT_KEY}),y3=Nx(nc.idlTypes),x3=ku.createActor(y3,{agent:g3,canisterId:Fv}),_3=t_({actor:x3,gameIdlTypes:nc.idlTypes}),E0=new uf(document.body);if(!E0.ok){let n=document.getElementById("error");n.hidden=!1,n.textContent="This game needs WebGL, which your browser or device has turned off."}var Dv=jx({plugin:nc,transport:_3,session:Uv}),b3=Lv({client:Dv,plugin:nc,scene:E0});window.__battleship={scene:E0,client:Dv,ui:b3};
/*! Bundled license information:

@noble/curves/utils.js:
@noble/curves/abstract/modular.js:
@noble/curves/abstract/curve.js:
@noble/curves/abstract/weierstrass.js:
@noble/curves/abstract/bls.js:
@noble/curves/abstract/tower.js:
@noble/curves/bls12-381.js:
@noble/curves/abstract/edwards.js:
@noble/curves/ed25519.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
