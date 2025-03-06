var nt=Object.defineProperty;var V=r=>{throw TypeError(r)};var ut=(r,s,t)=>s in r?nt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var b=(r,s,t)=>ut(r,typeof s!="symbol"?s+"":s,t),F=(r,s,t)=>s.has(r)||V("Cannot "+t);var e=(r,s,t)=>(F(r,s,"read from private field"),t?t.call(r):s.get(r)),d=(r,s,t)=>s.has(r)?V("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,t),o=(r,s,t,i)=>(F(r,s,"write to private field"),i?i.call(r,t):s.set(r,t),t),f=(r,s,t)=>(F(r,s,"access private method"),t);var X=(r,s,t,i)=>({set _(a){o(r,s,a,t)},get _(){return e(r,s,i)}});(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const v of n.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var m,c,_,u,C,G,N;class T{constructor(s){d(this,C);b(this,"charModificator","");b(this,"bulbModificator","");b(this,"onOffModificator","");b(this,"charOnOffModificator","");b(this,"activeClass","tube__char_active");b(this,"standClass","tube__stand_active");d(this,m,null);d(this,c,null);d(this,_,null);d(this,u,[]);this.idx=s,o(this,m,document.createElement("div")),e(this,m).classList.add("tube")}mount(s="#app"){const t=document.querySelector(s);f(this,C,G).call(this),t.append(e(this,m))}addSilverModificators(){this.charModificator="tube__char_silver",this.bulbModificator="tube__bulb_silver",this.onOffModificator="tube__bulb_on-off-silver",this.charOnOffModificator="tube__char_on-off-silver",this.standClass="tube__stand_active-silver",e(this,c)?e(this,c).classList.add(this.bulbModificator):this.activeClass="tube__char_active-silver";const s=this.getActiveChar();s!==void 0&&(this.removeActiveClass(),this.activeClass="tube__char_active-silver",this.setActive(s))}removeModificators(){this.charModificator="",this.bulbModificator="",this.onOffModificator="",this.charOnOffModificator="",this.standClass="tube__stand_active",e(this,c)?e(this,c).classList.remove(this.bulbModificator):this.activeClass="tube__char_active";const s=this.getActiveChar();s!==void 0&&(this.removeActiveClass(),this.activeClass="tube__char_active",this.setActive(s))}clearChars(){e(this,u).forEach(s=>{s.remove()}),o(this,u,[])}getActiveChar(){var s;return(s=e(this,u).find(t=>t.classList.contains(this.activeClass)))==null?void 0:s.textContent}setActive(s){this.removeActiveClass();const t=e(this,u).findIndex(i=>i.textContent===s);t!==-1&&e(this,u)[t].classList.add(this.activeClass)}removeActiveClass(){const s=e(this,u).findIndex(t=>t.classList.contains(this.activeClass));return s===-1?-1:(e(this,u)[s].classList.remove(this.activeClass),s)}next(){f(this,C,N).call(this,"next")}prev(){f(this,C,N).call(this,"previous")}current(){f(this,C,N).call(this,"current")}addChar(s,t=!1){const i=document.createElement("div");i.classList.add("tube__char"),this.charModificator&&i.classList.add(this.charModificator),t&&i.classList.add(this.activeClass),i.textContent=s,e(this,m).append(i),e(this,u).push(i)}addChars(s=[],t=""){for(const i of s)this.addChar(i,i===t)}removeChar(s){if(s===void 0&&e(this,u).length){e(this,u)[e(this,u).length-1].remove(),e(this,u).pop();return}const t=e(this,u).findIndex(i=>i.textContent===s);t!==-1&&(e(this,u)[t].remove(),e(this,u).splice(t,1))}remove(){e(this,m).remove()}on(){e(this,c).classList.remove("tube__bulb_off"),e(this,u).forEach(s=>{s.classList.add("tube__char_on-off"),this.charOnOffModificator&&s.classList.add(this.charOnOffModificator),s.classList.remove("tube__char_off")}),e(this,c).classList.add("tube__bulb_on-off"),this.onOffModificator&&e(this,c).classList.add(this.onOffModificator),e(this,_).classList.add(this.standClass),setTimeout(()=>{e(this,u).forEach(s=>{s.classList.remove("tube__char_on-off"),this.charOnOffModificator&&s.classList.remove(this.charOnOffModificator)}),e(this,c).classList.remove("tube__bulb_on-off"),this.onOffModificator&&e(this,c).classList.remove(this.onOffModificator)},700)}off(s=!0){e(this,c).classList.add("tube__bulb_off"),e(this,_).classList.remove(this.standClass),s===!0&&e(this,u).forEach(t=>{t.classList.add("tube__char_off")})}}m=new WeakMap,c=new WeakMap,_=new WeakMap,u=new WeakMap,C=new WeakSet,G=function(){o(this,_,document.createElement("div")),e(this,_).classList.add("tube__stand"),e(this,m).prepend(e(this,_)),o(this,c,document.createElement("div")),e(this,c).classList.add("tube__bulb"),this.bulbModificator&&e(this,c).classList.add(this.bulbModificator),e(this,c).classList.add("tube__bulb_off"),e(this,m).prepend(e(this,c))},N=function(s="next"){const t=this.removeActiveClass();if(t===-1){e(this,u)[0].classList.add(this.activeClass);return}if(s==="current")return;let i=t;s==="next"?i=t!==e(this,u).length-1?i+1:0:s==="prev"&&(i=t===0?e(this,u).length-1:i-1),e(this,u)[i].classList.add(this.activeClass)};class j{constructor(s,t="#app"){b(this,"tubes",[]);b(this,"wrapperSelector","");b(this,"isActive",!1);b(this,"button",null);this.button=s,this.wrapperSelector=t}toggle(){this.isActive?(this.stop(),this.isActive=!1):(this.start(),this.isActive=!0)}remove(){this.stop(),this.tubes.forEach(s=>{s.remove()})}stop(){this.button.classList.remove("stand__button_active"),this.tubes.forEach(s=>{s.off(),s.clearChars()})}start(){this.button.classList.add("stand__button_active"),this.createTubes(),this.tubes.forEach(s=>{s.on()})}createTubes(s=8){if(!this.tubes.length){for(let t=0;t<s;t++)this.tubes.push(new T);this.tubes.forEach(t=>{t.mount(this.wrapperSelector)})}}}var M,A,S,W,Q;class ct extends j{constructor(t,i="#app"){super(t,i);d(this,W);d(this,M,"");d(this,A,"");d(this,S,"")}stop(){this.button.classList.remove("stand__button_active"),this.tubes.forEach(t=>{t.off(),t.clearChars()}),clearInterval(e(this,S)),o(this,M,""),o(this,A,"")}start(){this.button.classList.add("stand__button_active"),this.createTubes();const t=["1","2","3","4","5","6","7","8","9","0"];this.tubes.forEach((i,a)=>{(a+1)%3?i.addChars(t):i.addChar(":",!0),i.on()}),o(this,S,setInterval(()=>{f(this,W,Q).call(this)},500))}createTubes(){this.tubes.forEach(t=>{t.remove()}),this.tubes=[];for(let t=0;t<8;t++)this.tubes.push(new T(t)),(t+1)%3||this.tubes[t].addSilverModificators(),this.tubes[t].mount(this.wrapperSelector)}}M=new WeakMap,A=new WeakMap,S=new WeakMap,W=new WeakSet,Q=function(){const t=new Date().getHours().toString().padStart(2,"0"),i=new Date().getMinutes().toString().padStart(2,"0"),a=new Date().getSeconds().toString().padStart(2,"0");t[0]!==e(this,M)[0]&&this.tubes[0].setActive(t[0]),t[1]!==e(this,M)[1]&&this.tubes[1].setActive(t[1]),i[0]!==e(this,A)[0]&&this.tubes[3].setActive(i[0]),i[1]!==e(this,A)[1]&&this.tubes[4].setActive(i[1]),this.tubes[6].setActive(a[0]),this.tubes[7].setActive(a[1]),o(this,M,t),o(this,A,i)};var E,Y,$;class p extends T{constructor(t="all",i=[]){super();d(this,Y);b(this,"chars",[]);b(this,"type","");d(this,E,null);this.type=t,this.chars=i}stopTimer(){clearInterval(e(this,E))}stopRandom(){this.stopTimer(),this.clearChars(),this.off()}startRandom(t=[1400,1500,1700,2e3]){f(this,Y,$).call(this),this.on(),o(this,E,setInterval(()=>{this.setActive(this.chars[Math.round(Math.random(0,this.chars.length-1)*(this.chars.length-1))])},t[Math.round(Math.random(0,t.length-1)*(t.length-1))]))}setActiveChar(t=""){clearInterval(e(this,E)),this.setActive(t)}}E=new WeakMap,Y=new WeakSet,$=function(){this.type==="all"?(this.chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-_=<>".split(""),this.addChars(this.chars)):this.type==="symbols"?(this.chars="!#$%&*+-_=<>".split(""),this.addChars(this.chars)):this.type==="alphabet"?(this.chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),this.addChars(this.chars)):this.type==="numbers"?(this.chars="0123456789".split(""),this.addChars(this.chars)):this.type==="custom"&&this.addChars(this.chars)};class lt extends j{constructor(s,t="#app"){super(s,t)}stop(){this.button.classList.remove("stand__button_active"),this.tubes.forEach(s=>{s.stopRandom()})}start(){this.button.classList.add("stand__button_active"),this.createTubes(),this.tubes.forEach(s=>{s.startRandom()})}createTubes(){this.tubes.length||(this.tubes.push(new p("all")),this.tubes.push(new p("symbols")),this.tubes.push(new p("alphabet")),this.tubes.push(new p("numbers")),this.tubes.push(new p("all")),this.tubes.push(new p("symbols")),this.tubes.push(new p("alphabet")),this.tubes.push(new p("numbers")),this.tubes.forEach(s=>{s.mount(this.wrapperSelector)}))}}var O;class Z extends j{constructor(t,i="#app",a=""){super(t,i);b(this,"text","");d(this,O,0);this.text=a}initEmpty(t=8){for(let i=0;i<t;i++)this.tubes.push(new T),this.tubes[i].mount(this.wrapperSelector);this.isActive=!0}start(){this.button.classList.add("stand__button_active"),this.createTubes();let t=0,i=0;for(let a=e(this,O);a<this.text.length+e(this,O);a++)this.tubes[a].on(),this.tubes[a].addChar(this.text[i]),i++,setTimeout(()=>{this.tubes[a].setActive(this.text[t]),t++},670)}createTubes(){if(!this.tubes.length){for(let t=0;t<this.text.length;t++)this.tubes.push(new T);for(let t=0;t<8-this.text.length;t++)(t+1)%2?this.tubes.push(new T):(X(this,O)._++,this.tubes.unshift(new T));this.tubes.forEach(t=>{t.mount(this.wrapperSelector)})}}}O=new WeakMap;var h,l,z,tt,st,et,it,at,ht;class dt extends j{constructor(t,i){super(t,i);d(this,l);d(this,h,300)}stop(){this.button.classList.remove("stand__button_active"),this.tubes.forEach(i=>{i.off(),i.clearChars()});let t=window.setTimeout(()=>{});for(;t--;)window.clearTimeout(t);o(this,h,500)}start(){this.button.classList.add("stand__button_active"),this.createTubes(),f(this,l,z).call(this),o(this,h,e(this,h)*8+500),f(this,l,tt).call(this),o(this,h,e(this,h)+300*8),f(this,l,st).call(this),o(this,h,e(this,h)+300*8),f(this,l,et).call(this),o(this,h,e(this,h)+300*8),f(this,l,it).call(this),o(this,h,e(this,h)+300*8),f(this,l,at).call(this),o(this,h,e(this,h)+1*8),f(this,l,ht).call(this)}createTubes(){if(!this.tubes.length){for(let t=0;t<8;t++)this.tubes.push(new p);this.tubes.forEach(t=>{t.mount(this.wrapperSelector)})}}}h=new WeakMap,l=new WeakSet,z=function(){this.tubes.forEach((t,i)=>{setTimeout(()=>{t.on(),setTimeout(()=>{t.off()})},e(this,h)*i)})},tt=function(){let t=8;for(let i=0;i<8;i++)setTimeout(()=>{t--,this.tubes[t].on(),setTimeout(()=>{this.tubes[t].off()})},e(this,h)+300*i)},st=function(){this.tubes.forEach((t,i)=>{setTimeout(()=>{t.addChars("ADEHIJKLMNOPTUVWXYZ0123789!%&*+_'=<>"),t.startRandom([300])},e(this,h)+200*i)})},et=function(){setTimeout(()=>{this.tubes[3].removeActiveClass(),this.tubes[3].addChar("♡"),this.tubes[3].addChar("✿"),this.tubes[3].addChar("⚘",!0),this.tubes[3].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[6].removeActiveClass(),this.tubes[6].addChar("♡"),this.tubes[6].addChar("✿"),this.tubes[6].addChar("⚘",!0),this.tubes[6].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[4].removeActiveClass(),this.tubes[4].addChar("♡"),this.tubes[4].addChar("✿"),this.tubes[4].addChar("⚘",!0),this.tubes[4].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[1].removeActiveClass(),this.tubes[1].addChar("♡"),this.tubes[1].addChar("✿"),this.tubes[1].addChar("⚘",!0),this.tubes[1].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[0].removeActiveClass(),this.tubes[0].addChar("♡"),this.tubes[0].addChar("✿"),this.tubes[0].addChar("⚘",!0),this.tubes[0].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[5].removeActiveClass(),this.tubes[5].addChar("♡"),this.tubes[5].addChar("✿"),this.tubes[5].addChar("⚘",!0),this.tubes[5].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[7].removeActiveClass(),this.tubes[7].addChar("♡"),this.tubes[7].addChar("✿"),this.tubes[7].addChar("⚘",!0),this.tubes[7].stopTimer()},e(this,h)),o(this,h,e(this,h)+300),setTimeout(()=>{this.tubes[2].removeActiveClass(),this.tubes[2].addChar("♡"),this.tubes[2].addChar("✿"),this.tubes[2].addChar("⚘",!0),this.tubes[2].stopTimer()},e(this,h))},it=function(){const t=["⚘","✿","♡"];for(let i=0;i<3;i++)o(this,h,e(this,h)+300),setTimeout(()=>{for(let a=0;a<8;a++)this.tubes[a].removeActiveClass(),this.tubes[a].setActive("")},e(this,h)),o(this,h,e(this,h)+500),setTimeout(()=>{for(let a=0;a<8;a++)this.tubes[a].removeActiveClass(),this.tubes[a].setActive(t[i])},e(this,h));o(this,h,e(this,h)+400),setTimeout(()=>{for(let i=0;i<8;i++)this.tubes[i].clearChars(),this.tubes[i].addChars("HAPYWOMENSD'")},e(this,h))},at=function(){const t=["HAPPY","WOMEN'S","DAY"];let i=1;for(const a of t)setTimeout(()=>{for(let n=0;n<a.length;n++)setTimeout(()=>{this.tubes[n].setActive(a[n])},300*n)},e(this,h)),o(this,h,e(this,h)+500*a.length),o(this,h,e(this,h)+(i%3?300:1e3)),setTimeout(()=>{for(let n=0;n<a.length;n++)setTimeout(()=>{this.tubes[n].removeActiveClass()},300*n)},e(this,h)),o(this,h,e(this,h)+300*8),i++},ht=function(){setTimeout(()=>{this.tubes[3].off(),this.tubes[7].off()},e(this,h)),o(this,h,e(this,h)+200),setTimeout(()=>{this.tubes[0].addChar("I",!0),this.tubes[1].addChar("♡",!0),this.tubes[2].addChar("U",!0),this.tubes[4].addChar("A",!0),this.tubes[5].addChar("L",!0),this.tubes[6].addChar("L",!0)},e(this,h))};const bt=()=>{const r=document.getElementById("title"),s={attributes:!0,childList:!1,subtree:!1};let t=null;const i=H=>{for(const k of H)t===k.target?k.target.classList.value.includes("active")?r.classList.add("title_on"):r.classList.remove("title_on"):(r.classList.add("title_on"),t=k.target)};let a="",n=null,v=null,g=null,L=null,w=null;const I="#app",rt=()=>{v==null||v.remove(),v=null,n==null||n.remove(),n=null,g==null||g.remove(),g=null,L==null||L.remove(),L=null,w==null||w.remove(),w=null},B=H=>{H!==a&&(rt(),a=H)},R=document.getElementById("button-random"),q=()=>{B("random"),n||(n=new lt(R,I)),n.toggle()};R.addEventListener("click",q);const D=document.getElementById("button-time"),K=()=>{B("timer"),v||(v=new ct(D,I)),v.toggle()};D.addEventListener("click",K);const y=document.getElementById("button-on"),U=()=>{B("on/off"),g||(g=new Z(y,I,"HELLO!")),g.toggle()};y.addEventListener("click",U);const P=document.getElementById("button-secret"),J=()=>{B("secret"),L||(L=new dt(P,I)),L.toggle()};P.addEventListener("click",J);const ot=()=>{w=new Z(y),w.initEmpty()},x=new MutationObserver(i);x.observe(R,s),x.observe(D,s),x.observe(y,s),x.observe(P,s),window.onbeforeunload=()=>{D.removeEventListener("click",K),R.removeEventListener("click",q),y.removeEventListener("click",U),P.removeEventListener("click",J),x.disconnect()},ot()};document.querySelector("main.main").innerHTML=`
<div class="wrapper">
  <div id="app" style="display: flex; justify-content: center"></div>
  <div class="stand">
    <div class="stand__shelf"></div>
    <div class="stand__buttons">
      <button id="button-on" class="stand__button stand__button-on">
        On/Off
      </button>
      <button id="button-time" class="stand__button stand__button-time">
        Time Mode
      </button>
      <button
        id="button-random"
        class="stand__button stand__button-random"
      >
        Random Mode
      </button>
      <button
        id="button-secret"
        class="stand__button stand__button-secret"
      >
        Secret Mode
      </button>
    </div>
  </div>
</div>`;document.querySelector("#title").textContent="Nixie Tubes";bt();
