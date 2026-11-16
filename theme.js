/* LOOK · Ruler edition – brand layer: marquee, header, hero, drawer, "The Sovereign" character, loaders, empty states */
(()=>{
const REDUCE=matchMedia("(prefers-reduced-motion:reduce)").matches;
const LOGO=`<span class="rlogo"><span class="rw">LOOK</span></span>`;
const WORD=(c="")=>`<span class="rword ${c}" aria-hidden="true">${"LOOK".split("").map((l,i)=>`<i style="--i:${i}">${l}</i>`).join("")}</span>`;
const MENU=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>`;
const q=s=>encodeURIComponent(s);
const CHEV=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
/* ---- navigation ---- */
const TREE=[["Blouses","Blouses",[]],["Shirts","Shirts",[]],["Bottoms","Bottoms",[["All bottoms",""],["Jeans","Jeans"],["Skirts","Skirts"]]],["Outerwear","Outerwear",[]]];
const href=(c,s)=>`shop.html?cat=${q(c)}${s?"&style="+q(s):""}`;
const MI=["assets/h3.jpg","assets/h1.jpg","assets/h2.jpg"];
const DRAWER=`<nav class="km" aria-label="Shop">${[...TREE.map(([l,c,subs],i)=>subs.length?`<div class="km-i"><button type="button" class="km-l" aria-expanded="false" aria-controls="kms${i}" data-img="${i%3}"><span class="n">0${i+1}</span><span class="t">${l}</span></button><div class="km-s" id="kms${i}" hidden>${subs.map(([sl,sv])=>`<a href="${href(c,sv)}">${sl}</a>`).join("")}</div></div>`:`<div class="km-i"><a class="km-l" href="${href(c,"")}" data-img="${i%3}"><span class="n">0${i+1}</span><span class="t">${l}</span></a></div>`),`<div class="km-i"><a class="km-l" href="shop.html?sort=rate" data-img="0"><span class="n">0${TREE.length+1}</span><span class="t">Bestsellers</span></a></div>`,`<div class="km-i"><a class="km-l" href="shop.html?deal=20" data-img="1"><span class="n">0${TREE.length+2}</span><span class="t">Sale</span></a></div>`].join("")}</nav><div class="km-f"><form class="km-q" action="shop.html" method="get" role="search"><input type="search" name="q" placeholder="Search" aria-label="Search the collection"><button type="submit" aria-label="Search">→</button></form><a href="cart.html">My bag</a><a href="login.html">Sign in</a></div>`;
const MQ=["Complimentary delivery on orders above ₹999","The Winter Collection is here","Every price tracked for 90 days","Cash on delivery available","Free returns within 7 days","Members receive ₹200 off the first order · code FIRST200"];
const marquee=()=>{if(document.querySelector(".mq"))return;const row=MQ.map(m=>`<span>${m}</span>`).join("");document.body.insertAdjacentHTML("afterbegin",`<div class="mq" role="region" aria-label="Offers and delivery information"><div class="mq-t"><div class="mq-r">${row}</div><div class="mq-r" aria-hidden="true">${row}</div></div></div>`)};
/* ---- hero film: full-bleed scenes. Add a "video" path to any scene to play real footage (muted, looping); "src" is the poster / still. ---- */
const FILM=[
 {src:"assets/h1.jpg",pos:"62% 50%",posm:"72% 50%",dk:1,bg:"#cdbb9c",fg:"#1c1710",kick:"Winter Collection 26",title:["Dress to","command."],cta:"Shop the collection",href:"shop.html",dur:7500},
 {src:"assets/h2.jpg",pos:"50% 40%",posm:"92% 50%",dk:1,bg:"#e2c3ac",fg:"#1c1710",kick:"The essentials",title:["Made to last","the season."],cta:"Shop shirts",href:"shop.html?cat=Shirts",dur:7500},
 {src:"assets/h3.jpg",pos:"50% 45%",posm:"30% 50%",right:1,bg:"#3d4a2e",fg:"#fff",kick:"Seasonal price drop",title:["Quietly","reduced."],cta:"Shop the drop",href:"shop.html?deal=20",dur:7500}];
const scene=(s,i)=>{const cuts=(s.cut||"").split(",").filter(Boolean).map((n,k)=>`<img class="fc fc${k}" src="assets/${n}.png" alt="">`).join("");
 const media=s.video?`<video class="fv" muted loop playsinline preload="auto" poster="${s.src}" src="${s.video}"></video>`:`<div class="fv still" style="background-image:url('${s.src}');background-position:var(--pos)"></div>`;
 return `<a class="fs${s.split?" split":""}${s.dk?" dk":""}${s.right?" right":""}" data-i="${i}" href="${s.href}" style="--bg:${s.bg};--fg:${s.fg};--pos:${s.pos||"50% 50%"};--posm:${s.posm||s.pos||"50% 50%"}" aria-label="${s.title.join(" ")}. ${s.cta}"><div class="fm">${media}<div class="fcuts" aria-hidden="true">${cuts}</div></div><div class="fshade"></div><div class="fcap"><small>${String(i+1).padStart(2,"0")} — ${String(FILM.length).padStart(2,"0")} &nbsp; ${s.kick}</small><h2>${s.title.map(l=>`<span class="ln"><span>${l}</span></span>`).join("")}</h2><span class="flink">${s.cta}</span></div></a>`};
/* ---- copy ---- */
const COPY=[[/Your bag is empty/g,"Your bag awaits your decree"],[/Nothing matches/g,"Nothing meets the standard"],[/Start shopping/g,"Explore the collection"],[/\bFamily bag\b/g,"The Council"],[/\bgroup bag\b/gi,"Council bag"]];
const walk=r=>{const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,{acceptNode:n=>/SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)?2:1});let n;while(n=w.nextNode()){let v=n.nodeValue,o=v;COPY.forEach(([a,b])=>v=v.replace(a,b));if(v!==o)n.nodeValue=v}};
/* ---- header ---- */
const setup=()=>{
 const top=document.getElementById("top");if(!top||top.dataset.k)return;top.dataset.k=1;
 document.querySelectorAll(".logo").forEach(l=>{l.innerHTML=LOGO});
 const dds=[...top.querySelectorAll(".dd")];const closeAll=()=>dds.forEach(d=>d.querySelector("button").setAttribute("aria-expanded",false));
 dds.forEach(dd=>{const db=dd.querySelector("button");db.onclick=e=>{e.stopPropagation();const on=db.getAttribute("aria-expanded")!=="true";closeAll();db.setAttribute("aria-expanded",on)};dd.addEventListener("focusout",e=>{if(!dd.contains(e.relatedTarget))db.setAttribute("aria-expanded",false)})});
 document.addEventListener("click",closeAll);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll()});
 const hl=document.createElement("div");hl.className="hl";
 hl.innerHTML=`<button type="button" id="kMenu" class="hb" aria-label="Open menu" aria-expanded="false" aria-controls="kdr"><span class="hb-i" aria-hidden="true"><i></i><i></i><i></i></span><span class="hb-t" aria-hidden="true">Menu</span></button>`;
 const s=document.getElementById("srchBtn");if(s)s.remove();top.prepend(hl);
 document.body.insertAdjacentHTML("beforeend",`<div class="kdr" id="kdr" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden="true"><div class="kdr-in"><div class="kdr-l">${DRAWER}</div><div class="kdr-r" aria-hidden="true">${MI.map((m,i)=>`<div class="kdr-im${i===0?" on":""}" style="background-image:url('${m}')"></div>`).join("")}</div></div></div>`);
 const dr=document.getElementById("kdr"),btn=document.getElementById("kMenu"),ht=btn.querySelector(".hb-t");
 const set=on=>{dr.classList.toggle("on",on);dr.setAttribute("aria-hidden",!on);btn.setAttribute("aria-expanded",on);btn.setAttribute("aria-label",on?"Close menu":"Open menu");ht.textContent=on?"Close":"Menu";document.body.classList.toggle("menu-open",on);dr.style.setProperty("--ot",Math.round(top.getBoundingClientRect().bottom)+"px");if(on){dr.querySelectorAll(".km-i,.km-f").forEach((e,i)=>e.style.setProperty("--d",(.12+i*.06)+"s"))}else dr.querySelectorAll(".km-l[aria-expanded=true]").forEach(x=>{x.setAttribute("aria-expanded",false);document.getElementById(x.getAttribute("aria-controls")).hidden=true})};
 btn.onclick=()=>set(!dr.classList.contains("on"));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dr.classList.contains("on")){set(false);btn.focus()}});
 dr.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
 const ims=[...dr.querySelectorAll(".kdr-im")],showImg=n=>ims.forEach((x,k)=>x.classList.toggle("on",k===+n));
 dr.querySelectorAll(".km-l").forEach(b=>{b.addEventListener("mouseenter",()=>showImg(b.dataset.img));b.addEventListener("focus",()=>showImg(b.dataset.img))});
 dr.querySelectorAll("button.km-l").forEach(b=>b.onclick=()=>{const p=document.getElementById(b.getAttribute("aria-controls")),on=b.getAttribute("aria-expanded")!=="true";dr.querySelectorAll("button.km-l").forEach(x=>{x.setAttribute("aria-expanded",x===b&&on);document.getElementById(x.getAttribute("aria-controls")).hidden=!(x===b&&on)});showImg(b.dataset.img)});
};
const banner=()=>{
 const rows=document.getElementById("kban-slot");if(!rows||document.querySelector(".film"))return;
 rows.insertAdjacentHTML("beforebegin",`<section class="film" aria-roledescription="carousel" aria-label="Featured film"><div class="fgrain" aria-hidden="true"></div>${FILM.map(scene).join("")}<div class="fbar" aria-label="Scenes">${FILM.map((s,i)=>`<button type="button" aria-label="Scene ${i+1}"><i></i></button>`).join("")}</div><div class="ftc" aria-hidden="true"><span>LOOK / Winter Film</span><b class="tcn">00:00</b></div><button class="fpp" type="button" aria-label="Pause film"><span></span></button></section>`);
 const f=document.querySelector(".film"),sc=[...f.querySelectorAll(".fs")],bt=[...f.querySelectorAll(".fbar button")],tc=f.querySelector(".tcn"),pp=f.querySelector(".fpp");
 let i=-1,tm,t0=0,paused=REDUCE,elapsed=0,raf;
 const fmt=ms=>{const s=Math.floor(ms/1000);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")};
 const total=FILM.reduce((a,s)=>a+s.dur,0);
 const show=n=>{n=(n+FILM.length)%FILM.length;if(n===i)return;i=n;sc.forEach((s,k)=>{const on=k===i;s.classList.toggle("on",on);const v=s.querySelector("video");if(v){on?v.play().catch(()=>{}):v.pause()}if(on){const c=s.cloneNode(false);s.style.animation="none";void s.offsetWidth;s.style.animation=""}});
  bt.forEach((b,k)=>{b.classList.toggle("done",k<i);b.classList.toggle("on",k===i);b.setAttribute("aria-current",k===i);const bar=b.firstChild;bar.style.transition="none";bar.style.transform=k<i?"scaleX(1)":"scaleX(0)"});
  f.style.setProperty("--fg",FILM[i].fg);document.body.style.setProperty("--hfg",FILM[i].fg);f.dataset.tone=/^#(1|0)/.test(FILM[i].bg)?"dark":"light";elapsed=0;t0=performance.now();
  void f.offsetWidth;const bar=bt[i].firstChild;bar.style.transition=REDUCE?"none":`transform ${FILM[i].dur}ms linear`;bar.style.transform="scaleX(1)"};
 const tick=now=>{if(!paused){const e=now-t0;elapsed=e;const base=FILM.slice(0,i).reduce((a,s)=>a+s.dur,0);tc.textContent=fmt(base+e)+" / "+fmt(total);if(e>=FILM[i].dur)show(i+1)}raf=requestAnimationFrame(tick)};
 bt.forEach((b,k)=>b.onclick=()=>show(k));
 pp.onclick=()=>{paused=!paused;f.classList.toggle("paused",paused);pp.setAttribute("aria-label",paused?"Play film":"Pause film");const bar=bt[i].firstChild;if(paused){const w=bar.getBoundingClientRect().width/bt[i].getBoundingClientRect().width;bar.style.transition="none";bar.style.transform=`scaleX(${w})`;f.dataset.rem=FILM[i].dur-elapsed}else{t0=performance.now()-elapsed;void bar.offsetWidth;bar.style.transition=`transform ${FILM[i].dur-elapsed}ms linear`;bar.style.transform="scaleX(1)"}};
 f.addEventListener("keydown",e=>{if(e.key==="ArrowRight")show(i+1);if(e.key==="ArrowLeft")show(i-1)});
 let sx=0;f.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});f.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(i+(d<0?1:-1))},{passive:true});
 document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!paused)t0=performance.now()-elapsed});
 show(0);raf=requestAnimationFrame(tick);
 /* header turns solid once the film is behind us */
 const top=document.getElementById("top"),sol=()=>top&&top.classList.toggle("solid",scrollY>f.offsetHeight-90);addEventListener("scroll",sol,{passive:true});sol();
};
/* empty states: the king stands watch */
const empties=()=>{document.querySelectorAll(".emptyc svg,.empty svg").forEach(s=>{if(s.closest("button,a,.ebox,.rk"))return;if(s.classList.contains("rk"))return;const d=document.createElement("div");d.className="ebox";d.innerHTML=WORD("big");s.replaceWith(d)})};
const cards=()=>document.querySelectorAll(".card[data-id]:not([data-pl])").forEach(c=>{c.dataset.pl=1;const n=c.querySelector(".name");if(n)n.innerHTML=`<a class="pl" href="pdp.html?id=${c.dataset.id}">${n.innerHTML}</a>`});
const run=()=>{marquee();setup();cards();banner();empties();document.querySelectorAll("input[type=search]").forEach(x=>x.placeholder="Search the collection…");walk(document.body)};
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
/* loader: the king draws himself. First visit of a session and between pages. */
let navFlag=false;try{navFlag=sessionStorage.getItem("look-nav")==="1";sessionStorage.removeItem("look-nav")}catch(e){}
try{const first=!sessionStorage.getItem("look-ruler-splash");if(first||navFlag){sessionStorage.setItem("look-ruler-splash","1");
 const sp=document.createElement("div");sp.className="ksplash";sp.setAttribute("role","status");sp.innerHTML=`${WORD("load")}<p>${first&&!navFlag?"Preparing the collection":"One moment"}</p>`;document.body.appendChild(sp);
 const t0=performance.now(),min=REDUCE?200:(first&&!navFlag?1300:650),end=()=>setTimeout(()=>{sp.classList.add("out");setTimeout(()=>sp.remove(),400)},Math.max(0,min-(performance.now()-t0)));
 document.readyState==="complete"?end():addEventListener("load",end)}}catch(e){}
addEventListener("beforeunload",()=>{try{sessionStorage.setItem("look-nav","1")}catch(e){}if(!document.querySelector(".ksplash"))window.kLoading(true,"One moment")});
addEventListener("pageshow",e=>{if(e.persisted)document.querySelectorAll(".ksplash").forEach(x=>x.remove())});
window.kLoading=(on,msg)=>{let sp=document.querySelector(".ksplash.manual");if(on&&!sp){sp=document.createElement("div");sp.className="ksplash manual";sp.setAttribute("role","status");sp.innerHTML=`${WORD("load")}<p>${msg||"One moment"}</p>`;document.body.appendChild(sp)}else if(!on&&sp){sp.classList.add("out");setTimeout(()=>sp.remove(),400)}};
window.RULER_LOGO=LOGO;
document.addEventListener("click",e=>{const c=e.target.closest(".card[data-id]");if(!c||e.target.closest("button,a,.sw,.dots,.zc-sz"))return;location.href="pdp.html?id="+c.dataset.id});
document.addEventListener("click",e=>{const b=e.target.closest("#wishBtn");if(b&&!/shop\.html$/.test(location.pathname))location.href="shop.html?wish=1"});
})();
