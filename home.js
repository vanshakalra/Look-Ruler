/* Look – landing v3.2: film banner (theme.js) → 2×2 category tiles → newsletter → footer */
renderHeader({page:"home"});
const CT=[["Blouses","assets/c-dresses.jpg","shop.html?cat=Blouses","50% 30%"],["Shirts","assets/d3.jpg","shop.html?cat=Shirts","50% 30%"],["Bottoms","assets/c-bottoms.jpg","shop.html?cat=Bottoms","50% 50%"],["Outerwear","assets/c-sweat.jpg","shop.html?cat=Outerwear","50% 30%"]];
const soc=[["Instagram","#"],["Pinterest","#"],["YouTube","#"],["Spotify","#"]];
document.getElementById("main").innerHTML=`
<section class="ct" aria-label="Shop by category">${CT.map(([l,i,h,p],k)=>`<a class="ct-t" href="${h}" aria-label="Shop ${l}"><span class="ct-im" style="background-image:url('${i}');background-position:${p}"></span><span class="ct-sh"></span><span class="ct-c"><small>0${k+1}</small><b>${l}</b><em>Shop now</em></span></a>`).join("")}</section>
<section class="nl" aria-labelledby="nlh"><div class="nl-in"><div><small class="nl-k">Newsletter</small><h2 id="nlh">Join our newsletter</h2></div>
 <div class="nl-r"><p>Be first to see new collections, private sales and stories from the studio. One considered email a week, never more. Members receive ₹200 off their first order.</p>
 <form class="nl-f" novalidate><label class="sr" for="nle">Email address</label><input id="nle" type="email" placeholder="Your email address" autocomplete="email" required><button type="submit">Subscribe</button></form>
 <label class="nl-c"><input type="checkbox" required> <span>I have read and accept the Privacy Policy and agree to receive news from Look.</span></label>
 <p class="nl-m" role="status" aria-live="polite"></p></div></div></section>
<footer class="zf"><div class="zf-in">
 <div class="zf-c"><h3>Shop</h3><a href="shop.html?cat=Blouses">Blouses</a><a href="shop.html?cat=Shirts">Shirts</a><a href="shop.html?cat=Bottoms">Bottoms</a><a href="shop.html?cat=Outerwear">Outerwear</a><a href="shop.html?deal=20">Sale</a></div>
 <div class="zf-c"><h3>Help</h3><a href="#">Track order</a><a href="#">Returns &amp; exchange</a><a href="#">Shipping</a><a href="#">Payment</a><a href="#">Contact us</a></div>
 <div class="zf-c"><h3>Company</h3><a href="#">About Look</a><a href="#">Careers</a><a href="#">Sustainability</a></div>
 <div class="zf-c"><h3>Follow us</h3>${soc.map(([n,h])=>`<a href="${h}">${n}</a>`).join("")}</div></div>
 <div class="zf-b"><span class="flogo"></span><span>© 2026 Look · Demo store, prices and products are samples</span><span class="zf-l"><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Cookies</a></span></div></footer>`;
const fl=document.querySelector(".flogo");if(typeof RULER_LOGO!=="undefined")fl.innerHTML=RULER_LOGO;else addEventListener("load",()=>{fl.innerHTML=RULER_LOGO});
document.querySelector(".nl-f").addEventListener("submit",e=>{e.preventDefault();const f=e.target,m=document.querySelector(".nl-m"),ok=/^\S+@\S+\.\S+$/.test(f.nle.value.trim()),c=document.querySelector(".nl-c input").checked;
 if(!ok){m.textContent="Please enter a valid email address.";m.className="nl-m err";f.nle.focus();return}
 if(!c){m.textContent="Please accept the Privacy Policy to subscribe.";m.className="nl-m err";return}
 m.textContent="Thank you. You're on the list.";m.className="nl-m ok";f.reset();document.querySelector(".nl-c input").checked=false});
