# LOOK: Ruler edition (editorial, Zara-inspired)

Static site (HTML/CSS/vanilla JS). No build step.

## Pages
index.html (landing) · shop.html (listing) · pdp.html?id=1 (product) · cart.html (bag) · login.html

Landing: film banner, 2x2 category tiles, newsletter, footer.
Listing: shop.html?cat=Blouses | Shirts | Bottoms | Outerwear, plus ?style=Jeans, ?sort=rate, ?deal=20, ?q=text
"+" on a card opens the size list on the card. Product page: ADD reveals sizes, picking one adds to bag.
Login demo OTP code: 1234.

## Deploy (Vercel)
1. Create a new GitHub repo and upload these files at the repo root.
2. Vercel > Add New Project > import the repo > Framework preset "Other", no build command, output directory blank.
3. Deploy. Use a separate repo/project from the kids version.

## Editing
- Hero film: FILM list at the top of theme.js (still or "video" mp4 path per scene, title, link, duration)
- Menu items: TREE in theme.js. Categories: CATS in common.js
- Products and prices: PRODUCTS in common.js, colour/image map in COLORS; product images are assets/p1.jpg ...
- Tiles on the landing page: CT list in home.js (assets/c-*.jpg, d3.jpg are placeholder crops)
- Colours/tokens: top of ruler.css
Product names, prices and ratings are placeholders.
