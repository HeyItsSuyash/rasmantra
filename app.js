/**
 * Ras Mantra Sweets & Bakers By Badrinath
 * Client-side SPA Application Logic
 */

// Comprehensive Menu Data matching Ras Mantra's authentic offerings in Lucknow
const menuData = [
  // Desi Ghee Mithai
  {
    id: 'kaju-katli',
    name: 'Royal Kaju Katli (Desi Ghee)',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹980 / kg',
    desc: 'Crafted with premium grade Goan cashews and authentic edible silver vark. Melt-in-mouth texture.',
    badge: 'Bestseller ⭐',
    veg: true
  },
  {
    id: 'motichoor-laddu',
    name: 'Shahi Motichoor Laddu',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹560 / kg',
    desc: 'Tiny gram flour pearls fried in 100% pure desi ghee, infused with Kashmiri saffron and cardamom.',
    badge: 'Pure Desi Ghee',
    veg: true
  },
  {
    id: 'gulab-jamun',
    name: 'Desi Ghee Gulab Jamun',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹480 / kg',
    desc: 'Soft, golden-fried khoya dumplings soaked in fragrant rose and green cardamom sugar syrup.',
    badge: 'Fresh Daily',
    veg: true
  },
  {
    id: 'besan-laddu',
    name: 'Special Besan Laddu',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹520 / kg',
    desc: 'Slow-roasted coarse gram flour in aromatic desi ghee with crunchy almonds and magaj melon seeds.',
    badge: 'Traditional Taste',
    veg: true
  },
  {
    id: 'kaju-pista-roll',
    name: 'Kaju Pista Roll',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹1,050 / kg',
    desc: 'Delicate cashew fudge cylinder stuffed with a fragrant pistachio and saffron centre.',
    badge: 'Premium Mithai',
    veg: true
  },
  {
    id: 'khoya-gujiya',
    name: 'Special Khoya Gujiya',
    category: 'sweets',
    categoryName: 'Desi Ghee Mithai',
    price: '₹620 / kg',
    desc: 'Crispy flaky crust stuffed with rich roasted mawa, chirongi, dry fruits, and aromatic spices.',
    badge: 'Festive Classic',
    veg: true
  },

  // Bengali Specials
  {
    id: 'sponge-rasgulla',
    name: 'Kolkata Sponge Rasgulla',
    category: 'bengali',
    categoryName: 'Bengali Specials',
    price: '₹360 / dozen',
    desc: 'Feather-light fresh cow milk chhena spheres gently cooked in pristine sugar syrup.',
    badge: 'Super Soft',
    veg: true
  },
  {
    id: 'kesar-rasmalai',
    name: 'Kesar Pista Rasmalai',
    category: 'bengali',
    categoryName: 'Bengali Specials',
    price: '₹70 / pc',
    desc: 'Delicate chhena patties steeped in thick saffron-cardamom rabri milk topped with slivered nuts.',
    badge: 'Customer Favorite',
    veg: true
  },
  {
    id: 'gur-sandesh',
    name: 'Shahi Kheer Kadam & Sandesh',
    category: 'bengali',
    categoryName: 'Bengali Specials',
    price: '₹640 / kg',
    desc: 'Artisanal Bengali chhena confection delicately flavored with cardamom and condensed milk.',
    badge: 'Authentic Craft',
    veg: true
  },

  // Bakery & Cakes
  {
    id: 'truffle-cake',
    name: 'Dutch Truffle Chocolate Cake',
    category: 'bakery',
    categoryName: 'Bakery & Cakes',
    price: '₹550 (0.5 kg)',
    desc: 'Silky dark chocolate ganache layered between moist cocoa sponge. Perfect for birthdays & celebrations.',
    badge: 'Eggless 100%',
    veg: true
  },
  {
    id: 'fresh-fruit-cake',
    name: 'Exotic Fresh Fruit Gateau',
    category: 'bakery',
    categoryName: 'Bakery & Cakes',
    price: '₹650 (0.5 kg)',
    desc: 'Vanilla chiffon sponge adorned with fresh seasonal kiwi, pomegranate, cherries, and whipped cream.',
    badge: 'Fresh Daily',
    veg: true
  },
  {
    id: 'pista-cookies',
    name: 'Bakery Butter Pista Cookies',
    category: 'bakery',
    categoryName: 'Bakery & Cakes',
    price: '₹280 / box',
    desc: 'Crumbly artisanal butter cookies baked with generous crushed pistachios and green cardamom.',
    badge: 'Tea Time Classic',
    veg: true
  },
  {
    id: 'red-velvet-pastry',
    name: 'Red Velvet Pastry Slice',
    category: 'bakery',
    categoryName: 'Bakery & Cakes',
    price: '₹85 / pc',
    desc: 'Velvety red cocoa sponge with smooth cream cheese frosting. Freshly prepared daily.',
    badge: 'Eggless',
    veg: true
  },

  // Savory Snacks & Chaat
  {
    id: 'paneer-tikka-sandwich',
    name: 'Grilled Paneer Tikka Sandwich',
    category: 'snacks',
    categoryName: 'Snacks & Chaat',
    price: '₹140',
    desc: 'Tandoori spiced marinated paneer, capsicum, mint chutney, and melted cheese toasted golden.',
    badge: 'Hot & Fresh',
    veg: true
  },
  {
    id: 'masala-dosa',
    name: 'Special Butter Masala Dosa',
    category: 'snacks',
    categoryName: 'Snacks & Chaat',
    price: '₹160',
    desc: 'Crispy fermented rice-lentil crepe filled with spiced potato masala, served with piping hot sambar & coconut chutney.',
    badge: 'South Indian Special',
    veg: true
  },
  {
    id: 'special-samosa-dhokla',
    name: 'Punjabi Samosa & Khaman Dhokla Platter',
    category: 'snacks',
    categoryName: 'Snacks & Chaat',
    price: '₹90',
    desc: 'Crispy spiced aloo samosa paired with fluffy steamed Gujarati khaman dhokla & sweet tamarind chutney.',
    badge: 'Evening Snacks',
    veg: true
  },
  {
    id: 'paneer-chilli-momos',
    name: 'Crispy Fried Paneer Momos',
    category: 'snacks',
    categoryName: 'Snacks & Chaat',
    price: '₹130',
    desc: 'Crispy thin dumplings stuffed with spiced cottage cheese served with fiery red schezwan dip.',
    badge: 'Indo-Chinese',
    veg: true
  },

  // Festive Hampers
  {
    id: 'royal-diwali-hamper',
    name: 'Royal Heritage Festive Hamper',
    category: 'hampers',
    categoryName: 'Festive Hampers',
    price: 'From ₹1,200',
    desc: 'Velvet gift box containing premium Kaju Katli, roasted California almonds, cashews, and artisan cookies.',
    badge: 'Festive Special',
    veg: true
  },
  {
    id: 'wedding-bhaat-hamper',
    name: 'Celebration Wedding & Bhiksha Box',
    category: 'hampers',
    categoryName: 'Festive Hampers',
    price: 'Custom Pricing',
    desc: 'Customized luxury sweet boxes for weddings, baby showers, housewarmings, and corporate gifting.',
    badge: 'Bulk Orders',
    veg: true
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLiveHours();
  renderMenuItems('all');
  initFilterTabs();
  initSearch();
  initMobileNav();
  initInquiryForm();
});

// Calculate and display live business status
function initLiveHours() {
  const statusElement = document.getElementById('liveStoreStatus');
  if (!statusElement) return;

  const now = new Date();
  const currentHour = now.getHours();
  // Operating hours: 8:00 AM (8) to 11:00 PM (23)
  const isOpen = currentHour >= 8 && currentHour < 23;

  if (isOpen) {
    statusElement.innerHTML = `
      <span class="pulse-dot"></span>
      <span><strong>Open Now:</strong> 8:00 AM – 11:00 PM (Visit Us or Order)</span>
    `;
  } else {
    statusElement.innerHTML = `
      <span class="pulse-dot" style="background-color: #ef4444; box-shadow: none;"></span>
      <span><strong>Closed Now:</strong> Opens at 8:00 AM Tomorrow</span>
    `;
  }
}

// Render Menu Cards
function renderMenuItems(category = 'all', searchQuery = '') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  let filtered = menuData;

  if (category !== 'all') {
    filtered = filtered.filter(item => item.category === category);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">No matching items found</p>
        <p>Try searching for sweets like "Kaju", "Laddu", "Cake", "Sandwich", or "Hamper".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" data-category="${item.category}">
      <div>
        <div class="menu-card-header">
          <div>
            <div class="item-badge-row">
              <span class="veg-mark" title="100% Pure Vegetarian"></span>
              <span class="category-tag">${item.categoryName}</span>
            </div>
            <h3 class="item-title">${item.name}</h3>
          </div>
          <span class="item-price">${item.price}</span>
        </div>
        <p class="item-desc">${item.desc}</p>
      </div>
      <div class="item-footer">
        <span class="item-spec">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          ${item.badge}
        </span>
        <button class="order-item-btn" onclick="openOrderModal('${encodeURIComponent(item.name)}', '${encodeURIComponent(item.price)}')">
          Order / Inquire
        </button>
      </div>
    </article>
  `).join('');
}

// Category filter tabs
function initFilterTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-cat');
      const searchVal = document.getElementById('menuSearchInput')?.value || '';
      renderMenuItems(cat, searchVal);
    });
  });
}

// Search bar filter
function initSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.tab-btn.active');
    const cat = activeTab ? activeTab.getAttribute('data-cat') : 'all';
    renderMenuItems(cat, e.target.value);
  });
}

// Mobile Hamburger Nav
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on click of link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Quick Order Modal
function openOrderModal(itemName = '', itemPrice = '') {
  const decodedName = decodeURIComponent(itemName);
  const decodedPrice = decodeURIComponent(itemPrice);

  const modal = document.getElementById('orderModal');
  const modalItemField = document.getElementById('modalItemName');

  if (modalItemField && decodedName) {
    modalItemField.value = `${decodedName} (${decodedPrice})`;
  }

  if (modal) {
    modal.classList.add('active');
  }
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Inquiry Form Submission to WhatsApp
function initInquiryForm() {
  const form = document.getElementById('quickInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inquiryName')?.value.trim() || 'Valued Customer';
    const phone = document.getElementById('inquiryPhone')?.value.trim() || '';
    const occasion = document.getElementById('inquiryOccasion')?.value || 'General Order';
    const items = document.getElementById('inquiryItems')?.value.trim() || 'Pure Desi Ghee Sweets & Bakery Items';
    const notes = document.getElementById('inquiryNotes')?.value.trim() || '';

    let text = `Hello Ras Mantra Sweets & Bakers (Badrinath)! 👋\n\n`;
    text += `I would like to place an inquiry / order:\n`;
    text += `👤 *Name:* ${name}\n`;
    text += `📞 *Phone:* ${phone}\n`;
    text += `🎉 *Occasion:* ${occasion}\n`;
    text += `🍬 *Items Required:* ${items}\n`;
    if (notes) {
      text += `📝 *Notes/Date:* ${notes}\n`;
    }
    text += `\nPlease let me know the availability and pricing. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916387310730?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  });
}

// Modal Form WhatsApp Submit
function submitModalInquiry() {
  const item = document.getElementById('modalItemName')?.value || 'Mithai / Bakery Order';
  const name = document.getElementById('modalCustomerName')?.value || 'Guest';
  const phone = document.getElementById('modalCustomerPhone')?.value || '';
  const qty = document.getElementById('modalCustomerQty')?.value || '1 kg / 1 Box';

  let text = `Namaste Ras Mantra Sweets & Bakers (By Badrinath),\n\n`;
  text += `I would like to order: *${item}*\n`;
  text += `📦 *Quantity:* ${qty}\n`;
  text += `👤 *Name:* ${name}\n`;
  if (phone) text += `📞 *Phone:* ${phone}\n`;
  text += `\nPlease confirm availability and pickup/delivery options at Ram Naresh Square, Matiyari.`;

  window.open(`https://wa.me/916387310730?text=${encodeURIComponent(text)}`, '_blank');
  closeOrderModal();
}
