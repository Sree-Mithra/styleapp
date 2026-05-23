/* ═══════════════════════════════════════════════════════════
   Sway— Social Commerce App  |  script.js
   All data, rendering, interactions, cart, charts, search
═══════════════════════════════════════════════════════════ */

const PRODUCTS = [
  { id:1,  name:"Cloud Silk Slip Dress",  tag:"Luxury",     price:185, likes:"3.2k", img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80", badge:"New Drop" },
  { id:2,  name:"Pastel Cloud Puffer",    tag:"Outerwear",  price:128, likes:"1.2k", img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80", badge:"New Drop" },
  { id:3,  name:"Lilac Mood Headphones",  tag:"Tech",       price:199, likes:"2.5k", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", badge:null },
  { id:4,  name:"Minimalist Glazed Vase", tag:"Home Decor", price:45,  likes:"842",  img:"https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?w=500&q=80", badge:null },
  { id:5,  name:"Organic Silk Wrap",      tag:"Apparel",    price:89,  likes:"3.2k", img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80", badge:null },
  { id:6,  name:"Retro Pastel Sneakers",  tag:"Footwear",   price:110, likes:"956",  img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", badge:"New Drop" },
  { id:7,  name:"Cloud Knit Cardigan",    tag:"Apparel",    price:89,  likes:"1.4k", img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80", badge:"New" },
  { id:8,  name:"Velvet Dream Cushion",   tag:"Home",       price:38,  likes:"621",  img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", badge:null },
  { id:9,  name:"Botanical Linen Shirt",  tag:"Apparel",    price:72,  likes:"889",  img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", badge:null },
  { id:10, name:"Minimalist Gold Hoops",  tag:"Accessories",price:65,  likes:"1.8k", img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80", badge:null },
  { id:11, name:"Aura Ceramic Vase",      tag:"Home",       price:45,  likes:"730",  img:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&q=80", badge:null },
  { id:12, name:"Pastel Silk Slip",       tag:"Luxury",     price:120, likes:"2.1k", img:"https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&q=80", badge:"Sale" },
];

const ACCESSORIES = [
  { id:13, name:"Silk Scrunchie Set", price:45,  img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&q=80" },
  { id:14, name:"Cashmere Wrap",      price:210, img:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&q=80" },
  { id:15, name:"Satin Headband",     price:32,  img:"https://images.unsplash.com/photo-1576670159805-381a9b8f31b6?w=300&q=80" },
  { id:16, name:"Leather Mini Bag",   price:145, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80" },
];

const STORIES = [
  { name:"Maya",  img:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&q=80", seen:false },
  { name:"Priya", img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80", seen:false },
  { name:"Sofia", img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80", seen:true },
  { name:"Zoe",   img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80", seen:false },
  { name:"Leila", img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80", seen:true },
  { name:"Anya",  img:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&q=80", seen:false },
];

const INFLUENCERS = [
  { name:"Maya Chen",    handle:"@mayastyled",   followers:"128k", img:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80" },
  { name:"Priya Sharma", handle:"@priyafinds",   followers:"89k",  img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80" },
  { name:"Sofia M",      handle:"@sofiastyle",   followers:"245k", img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80" },
  { name:"Zoe K",        handle:"@zoeaesthetic", followers:"67k",  img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" },
  { name:"Leila R",      handle:"@leilavibes",   followers:"310k", img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80" },
];

const CATEGORIES = ["🔥 Trending","✨ New In","🎨 Aesthetic","🌿 Wellness","💻 Tech Life","♻️ Eco-Friendly","👗 Apparel","🏠 Home","👟 Footwear"];
const EXPLORE_CATS = ["All","Soft Girl","Minimalist","Dark Academia","Cottagecore","Y2K","Tech Wear","Quiet Luxury"];

const REELS = [
  { user:"@mayastyled", userImg:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",
    desc:"This Cloud Silk dress is giving EVERYTHING ✨ obsessed with this drop — worth every penny",
    hashtags:"#silkdress #aesthetic #ootd",
    img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85",
    likes:"24.1k", comments:"892", shares:"1.2k",
    product:{ name:"Cloud Silk Slip Dress", price:"$185", img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&q=80" } },
  { user:"@priyafinds", userImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80",
    desc:"Aesthetic room transformation with these minimalist pieces 🏺 tag me if you get them!",
    hashtags:"#homedecor #minimalist #aesthetic",
    img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=85",
    likes:"18.4k", comments:"421", shares:"876",
    product:{ name:"Glazed Vase Set", price:"$45", img:"https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?w=80&q=80" } },
  { user:"@sofiastyle", userImg:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80",
    desc:"Get ready with me in the softest cloud knit cardigan 🧶 so cozy for this season",
    hashtags:"#grwm #knit #softgirl",
    img:"https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=600&q=85",
    likes:"31.2k", comments:"1.1k", shares:"2.4k",
    product:{ name:"Cloud Knit Cardigan", price:"$89", img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=80&q=80" } },
];

const CHAT_CONTACTS = [
  { id:1, name:"Maya Chen",           preview:"omg have you seen the new silk drop? 😍",  time:"2m",  img:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",  unread:2, online:true },
  { id:2, name:"Priya Sharma",        preview:"Shared a product with you 🛍️",             time:"14m", img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80",  unread:1, online:true },
  { id:3, name:"Sofia M",             preview:"What size did you get?",                    time:"1h",  img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80",  unread:0, online:false },
  { id:4, name:"Zoe K",               preview:"The pastel puffer is so cute! 🧥",          time:"2h",  img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",  unread:0, online:true },
  { id:5, name:"✨ Aesthetic Girlies", preview:"Leila: just bought the headphones!",        time:"3h",  img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",  unread:0, online:false },
];

const INITIAL_MESSAGES = [
  { mine:false, text:"hey!! have you seen the new Cloud Silk drop? 😍", time:"12:01" },
  { mine:true,  text:"YES I've been staring at it for 20 minutes 😭 rose or mint?", time:"12:02" },
  { mine:false, text:"rose 100%! it's so dreamy. the mint might wash out", time:"12:03" },
  { mine:false, product:{ name:"Cloud Silk Slip Dress", price:"$185", img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=120&q=80" }, time:"12:03" },
  { mine:true,  text:"I'm adding to cart right now 😂 wanna jump on a quick call?", time:"12:05" },
  { mine:false, text:"YES call me! I want to check accessories too 🛍️", time:"12:05" },
];

const EXPLORE_IMGS = [
  { img:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80",    label:"Soft Girl",     sub:"234 items", h:260 },
  { img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",  label:"Editorial",     sub:"89 items",  h:340 },
  { img:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",  label:"Minimalist",    sub:"178 items", h:280 },
  { img:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",  label:"Silk Dreams",   sub:"56 items",  h:320 },
  { img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",  label:"Y2K",           sub:"312 items", h:260 },
  { img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",  label:"Cottagecore",   sub:"143 items", h:300 },
  { img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",  label:"Evening",       sub:"98 items",  h:370 },
  { img:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&q=80",     label:"Pastel",        sub:"201 items", h:240 },
  { img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",     label:"Streetwear",    sub:"167 items", h:280 },
  { img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",  label:"Tech Aesthetic", sub:"77 items", h:300 },
  { img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",  label:"Accessories",   sub:"432 items", h:260 },
  { img:"https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=400&q=80",  label:"Quiet Luxury",  sub:"119 items", h:340 },
];

const NOTIFICATIONS = [
  { ava:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80", text:"<strong>Maya Chen</strong> liked your collection — Summer Soft 🌸", time:"2m",  unread:true,  thumb:null },
  { ava:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&q=80", text:"<strong>Priya Sharma</strong> shared a product with you",              time:"14m", unread:true,  thumb:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&q=80" },
  { ava:null, text:"🔥 <strong>Price Drop!</strong> Cloud Silk Slip Dress is now $185 (was $220)",                                                               time:"1h",  unread:true,  thumb:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&q=80" },
  { ava:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80", text:"<strong>Zoe K</strong> started following you",                          time:"2h",  unread:false, thumb:null },
  { ava:null, text:"✨ <strong>New Drop!</strong> Retro Pastel Sneakers just landed — limited stock",                                                            time:"3h",  unread:false, thumb:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&q=80" },
  { ava:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&q=80", text:"<strong>Sofia M</strong> commented on your review: 'So helpful!'",      time:"5h",  unread:false, thumb:null },
  { ava:null, text:"🛍️ Your order <strong>#S-4821</strong> has been shipped! Arriving in 2-3 days.",                                                             time:"1d",  unread:false, thumb:null },
];

const COLLECTION_IMGS = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200&q=80",
];

const DETAIL_THUMBS_DATA = [
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&q=80",
  "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=200&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&q=80",
];

const REVIEWS_DATA = [
  { name:"Sophia Chen",    initial:"S", date:"May 12, 2026", stars:5, text:"Literally feels like a cloud. The silk is so high quality and the fit is perfection. I'm obsessed — already ordered a second colour!" },
  { name:"Maya Williams",  initial:"M", date:"Apr 25, 2026", stars:4, text:"Beautiful dress, just a bit long for my height but easily tailored. The mint colour is absolutely stunning in person." },
  { name:"Isabella Rossi", initial:"I", date:"Apr 20, 2026", stars:5, text:"Wore this to my best friend's wedding and got so many compliments. Worth every single penny. The quality is unmatched." },
];

const ACCORDION_DATA = [
  { title:"Details & Fabric",   content:"100% heavy-weight mulberry silk, sandwashed finish. Adjustable spaghetti straps, side pockets, invisible zip. Dry clean only. Model is 5'9\" wearing size S." },
  { title:"Shipping & Returns", content:"Free express shipping on orders over $250. Standard delivery 3-5 business days. Easy 60-day returns — just email support and we will arrange collection." },
  { title:"Size & Fit",         content:"Relaxed, fluid fit. True to size. If between sizes, size down for a more fitted look. Available XS-XL." },
];

const KPI_DATA = [
  { icon:"💰", val:"$124.8k", label:"Revenue This Month",  change:"↑ 18.3%", up:true  },
  { icon:"📦", val:"5,240",   label:"Orders This Week",    change:"↑ 11.2%", up:true  },
  { icon:"👥", val:"243k",    label:"Active Users",        change:"↑ 32.5%", up:true  },
  { icon:"🔁", val:"3.4%",    label:"Cart Abandon Rate",   change:"↓ 1.2%",  up:false },
];
const TREND_PRODUCTS = [
  { name:"Cloud Silk Dress",  sales:"2.4k", pct:95, img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=80&q=80" },
  { name:"Lilac Headphones",  sales:"1.8k", pct:72, img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&q=80" },
  { name:"Pastel Puffer",     sales:"1.2k", pct:48, img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=80&q=80" },
  { name:"Gold Hoops",        sales:"980",  pct:39, img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&q=80" },
  { name:"Ceramic Vase",      sales:"730",  pct:29, img:"https://images.unsplash.com/photo-1588625500633-a0cd518f0f60?w=80&q=80" },
];

/* ── STATE ── */
let cart      = JSON.parse(localStorage.getItem('s-cart')     || '[]');
let wishlist  = JSON.parse(localStorage.getItem('s-wishlist') || '[]');
let messages  = [...INITIAL_MESSAGES];
let callTimer = null;
let callSecs  = 0;
let charts    = {};

/* ── TOAST ── */
function showToast(msg, type = 'default') {
  const icons = { default:'🛍️', success:'✅', info:'ℹ️', warning:'⚠️' };
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = '<span class="toast-icon">' + (icons[type]||'🛍️') + '</span><span class="toast-text">' + msg + '</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>';
  c.appendChild(t);
  setTimeout(() => { t.classList.add('leaving'); setTimeout(() => t.remove(), 300); }, 3200);
}

/* ── NAVIGATION ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.page === id));
  if (id === 'analytics') initCharts();
  if (id === 'call') startCallTimer();
  else stopCallTimer();
  if (id === 'profile') { renderCartItems(); renderOrderSummary(); }
}

document.querySelector('.nav-brand').addEventListener('dblclick', () => showPage('analytics'));
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

/* ── PRODUCT CARD ── */
function makeCard(p, goDetail = true) {
  const liked = wishlist.includes(p.id);
  return '<div class="pcard" onclick="' + (goDetail ? "showPage('detail')" : '') + '">' +
    '<div class="pcard-img-wrap">' +
    '<img class="pcard-img" src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
    (p.badge ? '<span class="pcard-badge chip chip-green">' + p.badge + '</span>' : '') +
    '<button class="pcard-wishlist ' + (liked ? 'liked' : '') + '" onclick="event.stopPropagation();toggleWishlistCard(this,' + p.id + ')">' + (liked ? '♥' : '♡') + '</button>' +
    '</div>' +
    '<div class="pcard-body">' +
    '<div class="pcard-tag">' + p.tag + '</div>' +
    '<div class="pcard-name">' + p.name + '</div>' +
    '<div class="pcard-price">$' + p.price + '.00</div>' +
    '</div>' +
    '<div class="pcard-foot">' +
    '<span class="pcard-likes">❤️ ' + p.likes + ' liked</span>' +
    '<button class="add-btn" onclick="event.stopPropagation();addToCart(' + p.id + ')">+</button>' +
    '</div></div>';
}

/* ── FEED ── */
function renderFeed() {
  document.getElementById('storiesStrip').innerHTML =
    '<div class="add-story-wrap" onclick="showToast(\'📸 Opening camera...\',\'info\')">' +
    '<button class="add-story-btn">+</button><span class="story-name">Your Story</span></div>' +
    STORIES.map(s =>
      '<div class="story-item" onclick="showPage(\'reels\')">' +
      '<div class="story-ring ' + (s.seen ? 'seen' : '') + '">' +
      '<img class="story-avatar" src="' + s.img + '" alt="' + s.name + '"></div>' +
      '<span class="story-name">' + s.name + '</span></div>'
    ).join('');

  document.getElementById('categoryPills').innerHTML =
    CATEGORIES.map((c, i) => '<button class="pill ' + (i===0?'active':'') + '" onclick="setPillActive(this)">' + c + '</button>').join('');

  document.getElementById('feedGrid').innerHTML = PRODUCTS.slice(0, 6).map(p => makeCard(p)).join('');

  document.getElementById('influencerStrip').innerHTML =
    INFLUENCERS.map(f =>
      '<div class="influencer-card" onclick="showToast(\'Opening ' + f.name + ' shop...\',\'info\')">' +
      '<img class="influencer-img" src="' + f.img + '" alt="' + f.name + '" loading="lazy">' +
      '<div class="influencer-name">' + f.name + '</div>' +
      '<div class="influencer-handle">' + f.handle + '</div>' +
      '<div class="influencer-followers">' + f.followers + ' followers</div></div>'
    ).join('');

  renderFooter('feedFooter');
}

function setFeedSort(btn, sort) {
  document.querySelectorAll('.sort-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const sorted = sort === 'popular' ? [...PRODUCTS].sort((a,b) => parseFloat(b.likes)-parseFloat(a.likes)) : PRODUCTS;
  document.getElementById('feedGrid').innerHTML = sorted.slice(0,6).map(p => makeCard(p)).join('');
}

function setPillActive(el) {
  el.closest('.pills').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

/* ── SHOP ── */
function renderShop() {
  document.getElementById('filterPanel').innerHTML =
    '<div class="filter-title">⚡ Refine</div>' +
    '<div class="filter-group"><div class="filter-group-title">Categories <span>▾</span></div>' +
    ['All Collections','New Arrivals','Trending Now','Influencer Picks','Sustainability']
      .map((c,i) => '<label class="filter-option"><input type="checkbox" ' + (i===0?'checked':'') + '> ' + c + '</label>').join('') + '</div>' +
    '<div class="filter-group"><div class="filter-group-title">Price Range <span>▾</span></div>' +
    '<input type="range" class="price-slider" min="0" max="500" value="450" oninput="document.getElementById(\'priceMax\').textContent=\'$\'+this.value">' +
    '<div class="price-range-vals"><span>$0</span><span id="priceMax">$450</span></div></div>' +
    '<div class="filter-group"><div class="filter-group-title">Color Palette <span>▾</span></div>' +
    '<div class="color-swatches">' +
    ['#f5d0dc','#b5c9a8','#c4b8a0','#b8c4d4','#d4c4e8','#f5e6c8']
      .map((c,i) => '<div class="color-swatch ' + (i===0?'active':'') + '" style="background:' + c + '" onclick="this.closest(\'.color-swatches\').querySelectorAll(\'.color-swatch\').forEach(s=>s.classList.remove(\'active\'));this.classList.add(\'active\')"></div>').join('') +
    '</div></div>' +
    '<div class="editor-pick"><div class="editor-pick-label">Editor\'s Choice</div>' +
    '<div class="editor-pick-title">The Sustainable Edit</div>' +
    '<div class="editor-pick-desc">Ethically sourced, beautifully made items for a better tomorrow.</div>' +
    '<button class="btn btn-pink" style="font-size:12px;padding:8px 14px" onclick="showToast(\'Opening Sustainable Edit...\',\'info\')">Explore →</button></div>';

  document.getElementById('shopGrid').innerHTML = PRODUCTS.map(p => makeCard(p)).join('');
  renderFooter('shopFooter');
}

function sortShop(val) {
  let sorted = [...PRODUCTS];
  if (val==='price-asc')  sorted.sort((a,b) => a.price-b.price);
  if (val==='price-desc') sorted.sort((a,b) => b.price-a.price);
  if (val==='popular')    sorted.sort((a,b) => parseFloat(b.likes)-parseFloat(a.likes));
  document.getElementById('shopGrid').innerHTML = sorted.map(p => makeCard(p)).join('');
  showToast('Products sorted!','info');
}

function setShopView(view, btn) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('shopGrid');
  grid.style.gridTemplateColumns = view==='list' ? '1fr' : '';
  grid.querySelectorAll('.pcard-img').forEach(img => img.style.height = view==='list' ? '120px' : '');
}

/* ── DETAIL ── */
function renderDetail() {
  document.getElementById('detailThumbs').innerHTML =
    DETAIL_THUMBS_DATA.map((src,i) =>
      '<img class="thumb ' + (i===0?'active':'') + '" src="' + src + '" loading="lazy" onclick="switchThumb(this,\'' + src.replace('200','800') + '\')">'
    ).join('');

  document.getElementById('colorRow').innerHTML =
    [['#f4b8c8','Rose'],['#a8d4c0','Mint'],['#c8d8ec','Sky'],['#e8e4dc','Ivory']]
      .map(([color,name],i) =>
        '<div class="copt ' + (i===0?'active':'') + '" style="background:' + color + '" title="' + name + '" onclick="selectColor(this,\'' + name + '\')"></div>'
      ).join('');

  document.getElementById('sizeRow').innerHTML =
    ['XS','S','M','L','XL'].map((s,i) =>
      '<button class="sopt ' + (i===2?'active':'') + '" onclick="selectSize(this,\'' + s + '\')">' + s + '</button>'
    ).join('');

  document.getElementById('detailAccordion').innerHTML =
    ACCORDION_DATA.map((item,i) =>
      '<div class="accordion-item">' +
      '<button class="accordion-trigger ' + (i===0?'open':'') + '" onclick="toggleAccordion(this)">' + item.title + '</button>' +
      '<div class="accordion-content ' + (i===0?'open':'') + '">' + item.content + '</div>' +
      '</div>'
    ).join('');

  const ugcImgs = [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80",
    "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=300&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=300&q=80",
  ];
  document.getElementById('ugcStrip').innerHTML =
    ugcImgs.map(src => '<img class="ugc-img" src="' + src + '" loading="lazy" onclick="showToast(\'Opening post...\',\'info\')">').join('');

  document.getElementById('ratingBars').innerHTML =
    [[5,72],[4,16],[3,7],[2,3],[1,2]].map(([star,pct]) =>
      '<div class="rating-bar-row"><span>' + star + '★</span>' +
      '<div class="rating-bar-track"><div class="rating-bar-fill" style="width:' + pct + '%"></div></div>' +
      '<span>' + pct + '%</span></div>'
    ).join('');

  document.getElementById('reviewsList').innerHTML =
    REVIEWS_DATA.map(r =>
      '<div class="review-card">' +
      '<div class="reviewer"><div class="reviewer-ava">' + r.initial + '</div>' +
      '<div><div class="reviewer-name">' + r.name + '</div><div class="reviewer-date">' + r.date + '</div></div>' +
      '<div class="stars" style="margin-left:auto">' + '★'.repeat(r.stars) + '☆'.repeat(5-r.stars) + '</div></div>' +
      '<p class="review-text">' + r.text + '</p></div>'
    ).join('');

  document.getElementById('completeGrid').innerHTML =
    ACCESSORIES.map(a =>
      '<div class="pcard" onclick="showToast(\'Opening ' + a.name + '...\',\'info\')">' +
      '<img class="pcard-img" src="' + a.img + '" style="height:160px" loading="lazy">' +
      '<div class="pcard-body"><div class="pcard-name">' + a.name + '</div><div class="pcard-price">$' + a.price + '.00</div></div>' +
      '<div class="pcard-foot"><button class="add-btn" onclick="event.stopPropagation();addToCart(' + a.id + ')">+</button></div></div>'
    ).join('');
}

function switchThumb(el, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('detailMainImg').src = src;
}
function selectColor(el, name) {
  document.querySelectorAll('.copt').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('selectedColor').textContent = name;
}
function selectSize(el, size) {
  document.querySelectorAll('.sopt').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('selectedSize').textContent = size;
}
function changeQty(delta) {
  const el = document.getElementById('qtyVal');
  el.textContent = Math.max(1, parseInt(el.textContent) + delta);
}
function toggleAccordion(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}
function toggleWishlistFloat() {
  const btn = document.getElementById('wishlistFloat');
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  showToast(btn.classList.contains('liked') ? '♥ Added to wishlist!' : 'Removed from wishlist','info');
}
function toggleWishlistDetail(btn) {
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  btn.style.color = btn.classList.contains('liked') ? 'var(--pink)' : '';
  showToast(btn.classList.contains('liked') ? '♥ Added to wishlist!' : 'Removed from wishlist','info');
}
function addDetailToCart() {
  const qty   = parseInt(document.getElementById('qtyVal').textContent);
  const color = document.getElementById('selectedColor').textContent;
  const size  = document.getElementById('selectedSize').textContent;
  for (let i=0; i<qty; i++) addToCart(1);
  showToast('🛍 Added to cart! (' + color + ', ' + size + ' × ' + qty + ')','success');
}
function shareToChat() { showPage('chat'); showToast('📤 Product shared to chat!','success'); }

/* ── REELS ── */
function renderReels() {
  document.getElementById('reelsFeed').innerHTML =
    REELS.map((r,i) =>
      '<div class="reel">' +
      '<img class="reel-bg" src="' + r.img + '" loading="lazy">' +
      '<div class="reel-shade"></div>' +
      '<div class="reel-progress">' + REELS.map((_,j) => '<div class="prog-seg ' + (j<i?'done':'') + '"></div>').join('') + '</div>' +
      '<div class="reel-info">' +
      '<div class="reel-user"><img class="reel-user-img" src="' + r.userImg + '"><span class="reel-username">' + r.user + '</span>' +
      '<button class="reel-follow-btn" onclick="showToast(\'Following ' + r.user + '!\',\'success\')">Follow</button></div>' +
      '<p class="reel-desc">' + r.desc + '</p>' +
      '<div class="reel-hashtags">' + r.hashtags + '</div></div>' +
      '<div class="reel-actions">' +
      '<div class="reel-btn" onclick="showToast(\'❤️ Liked!\',\'success\')"><span class="r-icon">❤️</span><span class="r-label">' + r.likes + '</span></div>' +
      '<div class="reel-btn" onclick="showToast(\'💬 Comments\',\'info\')"><span class="r-icon">💬</span><span class="r-label">' + r.comments + '</span></div>' +
      '<div class="reel-btn" onclick="showPage(\'chat\')"><span class="r-icon">↗️</span><span class="r-label">Share</span></div>' +
      '<div class="reel-btn" onclick="showToast(\'🔖 Saved!\',\'success\')"><span class="r-icon">🔖</span><span class="r-label">Save</span></div>' +
      '</div>' +
      '<div class="reel-product" onclick="showPage(\'detail\')">' +
      '<img class="reel-product-img" src="' + r.product.img + '">' +
      '<div><div class="reel-product-name">' + r.product.name + '</div><div class="reel-product-price">' + r.product.price + '</div></div>' +
      '<button class="reel-shop-btn">Shop Now</button></div></div>'
    ).join('');

  document.getElementById('reelsSidebarList').innerHTML =
    REELS.map(r =>
      '<div class="sidebar-reel-item" onclick="showToast(\'Playing ' + r.user + ' reel...\',\'info\')">' +
      '<img class="sidebar-reel-thumb" src="' + r.img + '" loading="lazy">' +
      '<div><div class="sidebar-reel-name">' + r.user + '</div>' +
      '<div class="sidebar-reel-likes">❤️ ' + r.likes + ' · 💬 ' + r.comments + '</div></div></div>'
    ).join('');
}

/* ── CHAT ── */
function renderChat() {
  document.getElementById('chatList').innerHTML =
    CHAT_CONTACTS.map((c,i) =>
      '<div class="chat-item ' + (i===0?'active':'') + '" onclick="selectChat(this,\'' + c.name + '\',\'' + c.img + '\',' + c.online + ')">' +
      '<div class="ava-wrap"><img class="ava" src="' + c.img + '" alt="' + c.name + '">' +
      (c.online ? '<span class="online-dot"></span>' : '') + '</div>' +
      '<div class="chat-item-info"><div class="chat-item-name">' + c.name + '</div>' +
      '<div class="chat-item-prev">' + c.preview + '</div></div>' +
      '<div class="chat-item-meta"><span class="chat-item-time">' + c.time + '</span>' +
      (c.unread ? '<span class="unread-badge">' + c.unread + '</span>' : '') + '</div></div>'
    ).join('');
  renderChatHeader(CHAT_CONTACTS[0]);
  renderMessages();
}

function renderChatHeader(contact) {
  document.getElementById('chatHeader').innerHTML =
    '<div class="ava-wrap"><img class="ava" src="' + contact.img + '">' +
    (contact.online ? '<span class="online-dot"></span>' : '') + '</div>' +
    '<div class="chat-header-info"><div class="chat-header-name">' + contact.name + '</div>' +
    '<div class="chat-header-status">' + (contact.online ? '● Online now' : '● Last seen 2h ago') + '</div></div>' +
    '<div class="chat-header-actions">' +
    '<button class="chat-action-btn" onclick="showPage(\'call\')" title="Video call">📹</button>' +
    '<button class="chat-action-btn" onclick="showPage(\'call\')" title="Voice call">📞</button>' +
    '<button class="chat-action-btn" onclick="showToast(\'Opening profile...\',\'info\')" title="Profile">👤</button></div>';
}

function selectChat(el, name, img, online) {
  document.querySelectorAll('.chat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderChatHeader({ name, img, online });
  document.getElementById('chatInput').placeholder = 'Message ' + name + '...';
}

function filterChats(val) {
  document.querySelectorAll('.chat-item').forEach(item => {
    const name = item.querySelector('.chat-item-name').textContent.toLowerCase();
    item.style.display = name.includes(val.toLowerCase()) ? '' : 'none';
  });
}

function setChatTab(btn) {
  document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

function renderMessages() {
  const c = document.getElementById('chatMessages');
  c.innerHTML = messages.map(m =>
    '<div class="msg ' + (m.mine?'mine':'') + '">' +
    (!m.mine ? '<img class="ava-sm" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80">' : '') +
    '<div>' +
    (m.text ? '<div class="msg-bubble">' + m.text + '</div>' : '') +
    (m.product ?
      '<div class="product-share-card" onclick="showPage(\'detail\')">' +
      '<img class="product-share-img" src="' + m.product.img + '">' +
      '<div><div class="product-share-name">' + m.product.name + '</div>' +
      '<div class="product-share-price">' + m.product.price + '</div></div>' +
      '<button class="btn btn-pink" style="font-size:11px;padding:6px 12px;margin-left:auto">View</button></div>' : '') +
    '<div class="msg-time">' + m.time + '</div></div></div>'
  ).join('');
  c.scrollTop = c.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text  = input.value.trim();
  if (!text) return;
  const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  messages.push({ mine:true, text, time:now });
  input.value = '';
  renderMessages();
  setTimeout(() => {
    const replies = ["That's so cute! 😍","Adding to my wishlist right now!","Omg yes buy it!!","What colour are you getting? 🌸","I just ordered the same thing lol 😂"];
    messages.push({ mine:false, text:replies[Math.floor(Math.random()*replies.length)], time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}) });
    renderMessages();
  }, 1500);
}

function shareProductInChat() {
  const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  messages.push({ mine:true, product:{ name:"Cloud Silk Slip Dress", price:"$185", img:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=120&q=80" }, time:now });
  renderMessages();
  showToast('🛍️ Product shared in chat!','success');
}

/* ── CALL ── */
function renderCall() {
  document.getElementById('callProducts').innerHTML =
    PRODUCTS.slice(0,4).map(p =>
      '<div class="call-product-mini" onclick="showPage(\'detail\')">' +
      '<img src="' + p.img + '" loading="lazy">' +
      '<div><div class="call-mini-name">' + p.name + '</div><div class="call-mini-price">$' + p.price + '</div></div></div>'
    ).join('');
}

function startCallTimer() {
  callSecs = 0; stopCallTimer();
  callTimer = setInterval(() => {
    callSecs++;
    const m = String(Math.floor(callSecs/60)).padStart(2,'0');
    const s = String(callSecs%60).padStart(2,'0');
    const el = document.getElementById('callTimer');
    if (el) el.textContent = m + ':' + s + ' · Shopping Call';
  }, 1000);
}

function stopCallTimer() { if (callTimer) { clearInterval(callTimer); callTimer=null; } }

function endCall() { stopCallTimer(); showToast('📵 Call ended','info'); showPage('chat'); }

function toggleCallBtn(btn, iconA, iconB, msgA, msgB) {
  const isA = btn.textContent === iconA;
  btn.textContent = isA ? iconB : iconA;
  showToast(isA ? msgA : msgB,'info');
}

/* ── EXPLORE ── */
function renderExplore() {
  document.getElementById('explorePills').innerHTML =
    EXPLORE_CATS.map((c,i) => '<button class="pill ' + (i===0?'active':'') + '" onclick="setPillActive(this)">' + c + '</button>').join('');

  document.getElementById('exploreMasonry').innerHTML =
    EXPLORE_IMGS.map(e =>
      '<div class="explore-item" onclick="showPage(\'detail\')">' +
      '<img src="' + e.img + '" style="height:' + e.h + 'px" loading="lazy">' +
      '<div class="explore-item-layer"><div>' +
      '<div class="explore-item-label">' + e.label + '</div>' +
      '<div class="explore-item-sub">' + e.sub + '</div></div></div></div>'
    ).join('');
}

/* ── PROFILE / CART ── */
function renderProfile() {
  renderCartItems();
  renderOrderSummary();
  document.getElementById('collectionsGrid').innerHTML =
    COLLECTION_IMGS.map(src =>
      '<img class="coll-img" src="' + src + '" loading="lazy" onclick="showToast(\'Opening collection...\',\'info\')">'
    ).join('');
}

function renderCartItems() {
  const container = document.getElementById('cartItemsContainer');
  if (!cart.length) {
    container.innerHTML = '<p class="empty-cart-msg">Your bag is empty. <button class="see-all" onclick="showPage(\'shop\')">Start shopping →</button></p>';
    return;
  }
  container.innerHTML = cart.map(item => {
    const product = [...PRODUCTS,...ACCESSORIES].find(p => p.id===item.id);
    if (!product) return '';
    return '<div class="cart-item">' +
      '<img class="cart-img" src="' + product.img + '">' +
      '<div class="cart-item-info">' +
      '<div class="cart-item-name">' + product.name + '</div>' +
      '<div class="cart-item-variant">' + (item.variant||'Rose / M') + '</div>' +
      '<div class="cart-qty-ctrl">' +
      '<button class="cq-btn" onclick="changeCartQty(' + item.id + ',-1)">−</button>' +
      '<span class="cq-val">' + item.qty + '</span>' +
      '<button class="cq-btn" onclick="changeCartQty(' + item.id + ',1)">+</button>' +
      '</div></div>' +
      '<div class="cart-item-right">' +
      '<div class="cart-item-price">$' + (product.price*item.qty).toFixed(2) + '</div>' +
      '<button class="remove-btn" onclick="removeFromCart(' + item.id + ')">🗑</button>' +
      '</div></div>';
  }).join('');
}

function renderOrderSummary() {
  const subtotal = cart.reduce((sum,item) => {
    const p = [...PRODUCTS,...ACCESSORIES].find(p => p.id===item.id);
    return sum + (p ? p.price*item.qty : 0);
  }, 0);
  const shipping = subtotal>250 ? 0 : 12.99;
  const tax      = subtotal*0.08;
  const total    = subtotal+shipping+tax;
  document.getElementById('orderSummaryCard').innerHTML =
    '<h3 style="font-size:16px;font-weight:700;margin-bottom:20px">💳 Order Summary</h3>' +
    '<div class="summary-row"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
    '<div class="summary-row"><span>Shipping</span><span class="' + (shipping===0?'free-tag':'') + '">' + (shipping===0?'FREE':'$'+shipping.toFixed(2)) + '</span></div>' +
    '<div class="summary-row"><span>Tax (8%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
    '<div class="summary-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>' +
    '<button class="btn btn-pink checkout-btn" onclick="showToast(\'🔒 Proceeding to checkout...\',\'success\')">Proceed to Checkout</button>' +
    '<p class="secure-note">🔒 Secure SSL &nbsp;·&nbsp; 🚀 Fast Delivery</p>' +
    '<div class="member-benefits"><h4>S Member Benefits</h4>' +
    '<div class="benefit"><span class="benefit-icon">💚</span><div><div class="benefit-title">Free Express Shipping</div><div class="benefit-desc">On all orders over $250.</div></div></div>' +
    '<div class="benefit"><span class="benefit-icon">🔄</span><div><div class="benefit-title">60-Day Returns</div><div class="benefit-desc">Changed your mind? No worries.</div></div></div></div>' +
    '<div class="refer-banner" onclick="showToast(\'🎁 Referral code copied!\',\'success\')">' +
    '<img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80">' +
    '<div class="refer-overlay"><h4>Refer a friend — get 20% off</h4><p>Get your code →</p></div></div>';
}

function setCollTab(btn) {
  document.querySelectorAll('.coll-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* ── CART MANAGEMENT ── */
function saveCart() {
  localStorage.setItem('s-cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const total = cart.reduce((sum,i) => sum+i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.toggle('hidden', total===0);
}
function addToCart(productId, variant='Rose / M') {
  const existing = cart.find(i => i.id===productId);
  if (existing) existing.qty++;
  else cart.push({ id:productId, qty:1, variant });
  saveCart();
  showToast('🛍 Added to bag!','success');
}
function removeFromCart(productId) {
  cart = cart.filter(i => i.id!==productId);
  saveCart(); renderCartItems(); renderOrderSummary();
  showToast('Removed from bag','info');
}
function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id===productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty<=0) return removeFromCart(productId);
  saveCart(); renderCartItems(); renderOrderSummary();
}
function clearCart() {
  cart = []; saveCart(); renderCartItems(); renderOrderSummary();
  showToast('🗑 Bag cleared','info');
}

/* ── WISHLIST ── */
function toggleWishlistCard(btn, productId) {
  const idx = wishlist.indexOf(productId);
  if (idx===-1) { wishlist.push(productId); btn.textContent='♥'; btn.classList.add('liked'); showToast('♥ Added to wishlist!','success'); }
  else { wishlist.splice(idx,1); btn.textContent='♡'; btn.classList.remove('liked'); showToast('Removed from wishlist','info'); }
  localStorage.setItem('s-wishlist', JSON.stringify(wishlist));
}

/* ── SEARCH ── */
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchBigInput').focus(), 100);
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchBigInput').value = '';
  document.getElementById('searchResults').innerHTML = '<p class="search-hint">Start typing to search 128+ products...</p>';
}
function handleOverlayClick(e) {
  if (e.target===document.getElementById('searchOverlay')) closeSearch();
}
function liveSearch(query) {
  const q = query.toLowerCase().trim();
  const container = document.getElementById('searchResults');
  if (!q) { container.innerHTML = '<p class="search-hint">Start typing to search 128+ products...</p>'; return; }
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q));
  if (!results.length) { container.innerHTML = '<div class="search-no-results">😕 No results for "<strong>' + query + '</strong>"</div>'; return; }
  container.innerHTML = results.map(p =>
    '<div class="search-result-item" onclick="closeSearch();showPage(\'detail\')">' +
    '<img class="search-result-img" src="' + p.img + '" loading="lazy">' +
    '<div class="search-result-info">' +
    '<div class="search-result-tag">' + p.tag + '</div>' +
    '<div class="search-result-name">' + p.name + '</div>' +
    '<div class="search-result-price">$' + p.price + '.00</div></div>' +
    (p.badge ? '<span class="chip chip-green">' + p.badge + '</span>' : '') + '</div>'
  ).join('');
}

/* ── NOTIFICATIONS ── */
function renderNotifications() {
  document.getElementById('notifList').innerHTML =
    NOTIFICATIONS.map(n =>
      '<div class="notif-item ' + (n.unread?'unread':'') + '" onclick="this.classList.remove(\'unread\');updateNotifBadge()">' +
      (n.ava ? '<img class="notif-ava" src="' + n.ava + '">' : '<div class="notif-icon">🔔</div>') +
      '<div class="notif-text">' + n.text + '</div>' +
      '<span class="notif-time">' + n.time + '</span>' +
      (n.thumb ? '<img class="notif-thumb" src="' + n.thumb + '">' : '') + '</div>'
    ).join('');
}
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
  updateNotifBadge(); showToast('✓ All notifications read','success');
}
function setNotifTab(btn) {
  document.querySelectorAll('.notif-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}
function updateNotifBadge() {
  const count = document.querySelectorAll('.notif-item.unread').length;
  const badge = document.getElementById('notifBadge');
  badge.textContent = count;
  badge.classList.toggle('hidden', count===0);
}

/* ── ANALYTICS + CHART.JS ── */
function renderAnalytics() {
  document.getElementById('kpiGrid').innerHTML =
    KPI_DATA.map(k =>
      '<div class="kpi-card">' +
      '<div class="kpi-icon">' + k.icon + '</div>' +
      '<div class="kpi-val">' + k.val + '</div>' +
      '<div class="kpi-label">' + k.label + '</div>' +
      '<div class="kpi-change ' + (k.up?'up':'down') + '">' + k.change + ' vs last period</div></div>'
    ).join('');

  document.getElementById('trendList').innerHTML =
    TREND_PRODUCTS.map((t,i) =>
      '<div class="trend-row">' +
      '<span class="trend-rank">#' + (i+1) + '</span>' +
      '<img class="trend-img" src="' + t.img + '" loading="lazy">' +
      '<span class="trend-name">' + t.name + '</span>' +
      '<div class="trend-bar-wrap"><div class="trend-bar-fill" style="width:' + t.pct + '%"></div></div>' +
      '<span class="trend-sales">' + t.sales + '</span></div>'
    ).join('');
}

function initCharts() {
  renderAnalytics();
  Object.values(charts).forEach(c => { if (c) c.destroy(); });
  charts = {};
  const pink = '#e8457a';
  const pink2 = 'rgba(232,69,122,0.15)';

  const revCtx = document.getElementById('revenueChart');
  if (revCtx) charts.revenue = new Chart(revCtx, {
    type:'bar',
    data:{labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
      datasets:[{ label:'Revenue ($k)', data: [38, 52, 61, 47, 85, 94, 78],
        backgroundColor:[pink2,pink2,pink2,pink2,pink,pink,pink2],
        borderColor:pink, borderWidth:1.5, borderRadius:8 }] },
    options:{ responsive:true, plugins:{ legend:{ display:false } },
      scales:{ y:{ grid:{ color:'#f5f3f0' }, ticks:{ callback:v=>'$'+v+'k' } }, x:{ grid:{ display:false } } } }
  });

  const catCtx = document.getElementById('categoryChart');
  if (catCtx) charts.category = new Chart(catCtx, {
    type:'doughnut',
    data:{ labels:['Apparel','Home Decor','Accessories','Tech & Other'],
      datasets:[{ data:[40,22,16,22], backgroundColor:['#e8457a','#f5a623','#22c55e','#b8c4d4'], borderWidth:0, hoverOffset:6 }] },
    options:{ responsive:true, cutout:'68%', plugins:{ legend:{ position:'bottom', labels:{ padding:16, font:{ size:12 } } } } }
  });

  const engCtx = document.getElementById('engagementChart');
  if (engCtx) charts.engagement = new Chart(engCtx, {
    type:'line',
    data:{ labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      datasets:[
        { label:'Views', data:[4200,3800,5100,4600,6200,5800,4900], borderColor:pink, backgroundColor:pink2, fill:true, tension:0.4, borderWidth:2, pointRadius:4, pointBackgroundColor:pink },
        { label:'Likes', data:[980,870,1240,1100,1580,1420,1050], borderColor:'#f5a623', backgroundColor:'rgba(245,166,35,0.08)', fill:true, tension:0.4, borderWidth:2, pointRadius:4, pointBackgroundColor:'#f5a623' }
      ] },
    options:{ responsive:true, plugins:{ legend:{ position:'top', labels:{ font:{ size:12 } } } },
      scales:{ y:{ grid:{ color:'#f5f3f0' } }, x:{ grid:{ display:false } } } }
  });
}

function setPeriod(btn, period) {
  document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showToast('Showing ' + period + ' data...','info');
}

/* ── FOOTER ── */
function renderFooter(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML =
    '<div><div class="footer-brand">◈ S</div>' +
    '<p class="footer-desc">Blending the aesthetics of discovery with the convenience of commerce. Your trend starts here.</p>' +
    '<div class="footer-socials">' +
    '<button class="social-btn" onclick="showToast(\'Opening Instagram...\',\'info\')">📸</button>' +
    '<button class="social-btn" onclick="showToast(\'Opening Twitter...\',\'info\')">🐦</button>' +
    '<button class="social-btn" onclick="showToast(\'Opening TikTok...\',\'info\')">🎵</button></div></div>' +
    '<div class="footer-col"><h4>Shop</h4>' +
    '<a onclick="showPage(\'shop\')">New Arrivals</a><a onclick="showPage(\'shop\')">Best Sellers</a>' +
    '<a onclick="showPage(\'explore\')">Influencer Edits</a><a onclick="showToast(\'Opening Sale...\',\'info\')">Sale</a></div>' +
    '<div class="footer-col"><h4>Support</h4>' +
    '<a onclick="showToast(\'Shipping Info\',\'info\')">Shipping Info</a><a onclick="showToast(\'Returns\',\'info\')">Returns</a>' +
    '<a onclick="showToast(\'Contact Us\',\'info\')">Contact Us</a><a onclick="showToast(\'FAQ\',\'info\')">FAQ</a></div>' +
    '<div class="footer-col"><h4>Join the Club</h4>' +
    '<p style="font-size:13px;color:var(--text-muted)">Get exclusive drops and trend reports.</p>' +
    '<div class="email-row"><input class="email-input" placeholder="email@s-app.com" id="email-' + id + '">' +
    '<button class="email-submit" onclick="subscribeEmail(\'' + id + '\')">→</button></div></div>' +
    '<div class="footer-copy">© 2026 S. Designed for the modern aesthetic.</div>';
}

function subscribeEmail(id) {
  const input = document.getElementById('email-' + id);
  if (input && input.value.includes('@')) { showToast('🎉 Welcome to the club!','success'); input.value=''; }
  else showToast('Please enter a valid email','warning');
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  renderShop();
  renderDetail();
  renderReels();
  renderChat();
  renderCall();
  renderExplore();
  renderProfile();
  renderNotifications();
  updateCartBadge();
  showPage('feed');
});