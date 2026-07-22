// --- БАЗА ДАННЫХ ТОВАРОВ (с актуальными ценами на мясо и исправленным Banan) ---
const productsData = [
    { id: 1, nameUz: "Mol go'shti (Lahm)", nameRu: "Говядина мякоть", weight: "1 kg", price: 110000, img: "images/beef.png", badge: "Hit", cat: "gosht" },
    { id: 2, nameUz: "Go'sht mahsulotlari", nameRu: "Мясное ассорти", weight: "1 kg", price: 90000, img: "images/meat.png", badge: "", cat: "gosht" },
    { id: 3, nameUz: "Qo'y go'shti", nameRu: "Баранина свежая", weight: "1 kg", price: 100000, img: "images/mutton.png", badge: "", cat: "gosht" },
    { id: 4, nameUz: "Tabiiy sut (Natural)", nameRu: "Молоко натуральное", weight: "1 l", price: 11000, img: "images/naturalmilk.png", badge: "", cat: "sut" },
    { id: 5, nameUz: "Sut 2%", nameRu: "Молоко 2%", weight: "1 l", price: 12000, img: "images/milk2.png", badge: "-10%", cat: "sut" },
    { id: 6, nameUz: "Sut 6%", nameRu: "Молоко 6% (Густое)", weight: "1 l", price: 15000, img: "images/milk6.png", badge: "", cat: "sut" },
    { id: 7, nameUz: "Sut mahsulotlari", nameRu: "Молочные продукты / Творог", weight: "500 g", price: 22000, img: "images/milkproducts.png", badge: "Hit", cat: "sut" },
    { id: 8, nameUz: "Banan", nameRu: "Бананы спелые", weight: "1 kg", price: 18000, img: "images/banan.png", badge: "-15%", cat: "meva" },
    { id: 9, nameUz: "Mevalar to'plami", nameRu: "Фруктовое ассорти", weight: "1 kg", price: 35000, img: "images/fruits.png", badge: "", cat: "meva" },
    { id: 10, nameUz: "Sabzavotlar to'plami", nameRu: "Свежие овощи", weight: "1 kg", price: 15000, img: "images/vegetables.png", badge: "Hit", cat: "meva" },
    { id: 11, nameUz: "Yangi yopilgan non", nameRu: "Хлеб свежий / Лепешка", weight: "1 dona", price: 3500, img: "images/bread.png", badge: "", cat: "non" },
    { id: 12, nameUz: "Shirin tort / Pirog", nameRu: "Торт десертный", weight: "1 kg", price: 75000, img: "images/cake.png", badge: "-10%", cat: "shirinlik" },
    { id: 13, nameUz: "Gazli ichimliklar", nameRu: "Газировка / Сода", weight: "1.5 l", price: 10000, img: "images/soda.png", badge: "", cat: "ichimlik" },
    { id: 14, nameUz: "Sharbatlar va ichimliklar", nameRu: "Напитки и соки", weight: "1 l", price: 14000, img: "images/drinks.png", badge: "Hit", cat: "ichimlik" },
    { id: 15, nameUz: "Tuxum (10 dona)", nameRu: "Яйца куриные (10 шт)", weight: "10 dona", price: 16000, img: "images/egg.png", badge: "", cat: "boshqa" },
    { id: 16, nameUz: "Oliy navli un", nameRu: "Мука высший сорт", weight: "2 kg", price: 22000, img: "images/flour.png", badge: "", cat: "boshqa" },
    { id: 17, nameUz: "O'simlik yog'i", nameRu: "Подсолнечное масло", weight: "1 l", price: 19000, img: "images/sunflower-oil.png", badge: "Hit", cat: "boshqa" },
    { id: 18, nameUz: "Foydali yormalar", nameRu: "Крупы / Завтраки", weight: "800 g", price: 18000, img: "images/cereal.png", badge: "", cat: "boshqa" },
    { id: 19, nameUz: "Konservalangan mahsulotlar", nameRu: "Консервы", weight: "400 g", price: 25000, img: "images/conserve.png", badge: "", cat: "boshqa" },
    { id: 20, nameUz: "Gigiena va kosmetika", nameRu: "Косметика и гигиена", weight: "1 dona", price: 30000, img: "images/cosmetics.png", badge: "", cat: "boshqa" }
];

// --- КАТЕГОРИИ ---
const categoriesData = [
    { id: "meva", nameUz: "Mevalar", nameRu: "Фрукты", img: "images/banan.png" },
    { id: "gosht", nameUz: "Go'sht", nameRu: "Мясо", img: "images/beef.png" },
    { id: "sut", nameUz: "Sut mahsulotlari", nameRu: "Молочное", img: "images/naturalmilk.png" },
    { id: "ichimlik", nameUz: "Ichimliklar", nameRu: "Напитки", img: "images/drinks.png" },
    { id: "shirinlik", nameUz: "Shirinliklar", nameRu: "Сладости", img: "images/cake.png" },
    { id: "boshqa", nameUz: "Kosmetika / Boshqa", nameRu: "Косметика / Прочее", img: "images/cosmetics.png" }
];

// Словари для перевода (UZ <-> RU)
const translations = {
    uz: {
        loc: "Qorasuv", catBtn: "Katalog", searchPlaceholder: "Mahsulotlarni qidirish...",
        promo: "Aksiya", about: "Biz haqimizda", contact: "Kontaktlar", login: "Kirish",
        desktopHeroTitle: "Yangi mahsulotlar to'g'ridan-to'g'ri Abbos bozoridan",
        desktopHeroSub: "20-40 daqiqada yetkazib berish Qorasuvda",
        btnOrder: "Buyurtma", btnViewCat: "Katalogni ko'rish",
        badgeTitle: "Har doim yangi", badgeSub: "Bevosita Abbos Market javonlaridan",
        trust1Title: "10-20 daqiqa", trust1Sub: "tez yetkazib berish", trust2Sub: "xizmat ko'rsatish reytingi", trust3Sub: "mamnun mijozlar",
        mobileHeroTitle: "Hafta chegirmalari", mobileHeroBtn: "Ko'rish",
        catsTitle: "Tavsiya etamiz", productsTitle: "Arzon narxlar kafolati", viewAll: "Barchasini ko'rish >",
        delivTitle: "10-20 daqiqada yetkazib berish", delivSub: "Tez, oson va qulay!",
        cartTitle: "Sizning savatingiz", total: "Jami:", checkout: "Buyurtma berish",
        botHome: "Asosiy", botCat: "Katalog", botFav: "Saralangan", botCart: "Savat", botLogin: "Kirish",
        toastAdd: "savatga qo'shildi! 🛒", emptyCart: "Savatingiz bo'sh 😔",
        tabLogin: "Kirish", tabRegister: "Ro'yxatdan o'tish",
        lblLoginPhone: "Telefon raqam", lblLoginPass: "Parol", btnSubmitLogin: "Tizimga kirish",
        lblRegName: "Ismingiz", lblRegPhone: "Telefon raqam", lblRegPass: "Parol o'ylab toping", btnSubmitReg: "Ro'yxatdan o'tish",
        authSuccess: "Tizimga muvaffaqiyatli kirdingiz! 🎉", favEmpty: "Saralangan mahsulotlar yo'q",
        resetCat: "Barchasini ko'rsatish", locToast: "Yetkazib berish hududi: Qorasuv (20-40 daqiqa) 🚀",
        aboutTitle: "Biz haqimizda", aboutText: "<b>Abbos Go</b> — Toshkent shahri, Qorasuv hududida eng tez va ishonchli oziq-ovqat yetkazib berish xizmati. Biz mahsulotlarni to'g'ridan-to'g'ri Abbos bozoridan tanlab, 10-20 daqiqada uyizga yetkazamiz!",
        contactTitle: "Kontaktlar", contactText: "<b>Telefon:</b> +998 (90) 123-45-67<br><b>Telegram:</b> @abbosgo_support<br><b>Manzil:</b> Toshkent sh., Qorasuv-1, Abbos bozori yoni.<br><b>Ish vaqti:</b> 08:00 — 23:00 har kuni."
    },
    ru: {
        loc: "Карасу", catBtn: "Каталог", searchPlaceholder: "Поиск товаров...",
        promo: "Акции", about: "О нас", contact: "Контакты", login: "Войти",
        desktopHeroTitle: "Свежие продукты прямо из Abbos Market",
        desktopHeroSub: "Доставка за 20-40 минут по Карасу",
        btnOrder: "Заказать", btnViewCat: "Смотреть Каталог",
        badgeTitle: "Всегда свежее", badgeSub: "прямо с полок Abbos Market",
        trust1Title: "10-20 мин", trust1Sub: "быстрая доставка", trust2Sub: "рейтинг сервиса", trust3Sub: "довольных клиентов",
        mobileHeroTitle: "Скидки недели", mobileHeroBtn: "Смотреть",
        catsTitle: "Популярные категории", productsTitle: "Популярные товары", viewAll: "Смотреть все >",
        delivTitle: "Доставка за 10-20 минут", delivSub: "Быстро и удобно!",
        cartTitle: "Ваша корзина", total: "Итого:", checkout: "Оформить заказ",
        botHome: "Главная", botCat: "Каталог", botFav: "Избранное", botCart: "Корзина", botLogin: "Войти",
        toastAdd: "добавлено в корзину! 🛒", emptyCart: "Корзина пуста 😔",
        tabLogin: "Войти", tabRegister: "Регистрация",
        lblLoginPhone: "Номер телефона", lblLoginPass: "Пароль", btnSubmitLogin: "Войти в систему",
        lblRegName: "Ваше имя", lblRegPhone: "Номер телефона", lblRegPass: "Придумайте пароль", btnSubmitReg: "Зарегистрироваться",
        authSuccess: "Вы успешно вошли в систему! 🎉", favEmpty: "Нет избранных товаров",
        resetCat: "Показать все", locToast: "Зона доставки: Карасу (20-40 минут) 🚀",
        aboutTitle: "О нас", aboutText: "<b>Abbos Go</b> — самый быстрый и надежный сервис доставки продуктов в районе Карасу, Ташкент. Мы отбираем свежайшие продукты прямо на рынке Abbos и доставим их к вашему порогу за 10-20 минут!",
        contactTitle: "Контакты", contactText: "<b>Телефон:</b> +998 (90) 123-45-67<br><b>Telegram:</b> @abbosgo_support<br><b>Адрес:</b> г. Ташкент, Карасу-1, ориентир рынок Abbos.<br><b>Режим работы:</b> 08:00 — 23:00 ежедневно."
    }
};

let currentLang = 'uz';
let cart = [];
let favorites = [];
let activeCategory = "";
let activeFilter = ""; // "promo" или "fav"

// 1. Отрисовка категорий
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    grid.innerHTML = '';
    categoriesData.forEach(cat => {
        const name = currentLang === 'uz' ? cat.nameUz : cat.nameRu;
        const isActive = activeCategory === cat.id ? 'active' : '';
        grid.innerHTML += `
            <div class="cat-card ${isActive}" onclick="filterByCategory('${cat.id}')">
                <img src="${cat.img}" alt="${name}">
                <span>${name}</span>
            </div>
        `;
    });
}

// 2. Отрисовка товаров
function renderProducts(filterText = "") {
    const grid = document.getElementById('products-grid');
    const titleEl = document.getElementById('products-title');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (activeFilter === 'promo') {
        titleEl.innerText = currentLang === 'uz' ? "Aksiya va chegirmalar 🔥" : "Акции и скидки 🔥";
    } else if (activeFilter === 'fav') {
        titleEl.innerText = currentLang === 'uz' ? "Saralangan mahsulotlar ❤️" : "Избранные товары ❤️";
    } else if (activeCategory) {
        const catObj = categoriesData.find(c => c.id === activeCategory);
        titleEl.innerText = currentLang === 'uz' ? catObj.nameUz : catObj.nameRu;
    } else {
        titleEl.innerText = translations[currentLang].productsTitle;
    }

    const filtered = productsData.filter(p => {
        const name = currentLang === 'uz' ? p.nameUz : p.nameRu;
        const matchesText = name.toLowerCase().includes(filterText.toLowerCase());
        const matchesCat = activeCategory ? p.cat === activeCategory : true;
        const matchesPromo = activeFilter === 'promo' ? p.badge !== "" : true;
        const matchesFav = activeFilter === 'fav' ? favorites.includes(p.id) : true;
        return matchesText && matchesCat && matchesPromo && matchesFav;
    });

    if (filtered.length === 0) {
        const emptyMsg = activeFilter === 'fav' ? translations[currentLang].favEmpty : (currentLang === 'uz' ? "Mahsulot topilmadi" : "Товар не найден");
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#888; padding: 30px; font-size: 16px;">${emptyMsg}</p>`;
        return;
    }

    filtered.forEach(prod => {
        const name = currentLang === 'uz' ? prod.nameUz : prod.nameRu;
        const badgeHtml = prod.badge ? `<div class="badge-discount ${prod.badge === 'Hit' ? 'badge-hit' : ''}">${prod.badge}</div>` : '';
        const isFav = favorites.includes(prod.id);
        
        // ИСПРАВЛЕНИЕ: В функцию addToCart теперь передается только чистый prod.id (без кавычек и текста)
        grid.innerHTML += `
            <div class="product-card">
                ${badgeHtml}
                <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFav(${prod.id}); event.stopPropagation();">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                <div class="prod-img-box">
                    <img src="${prod.img}" alt="${name}">
                </div>
                <div>
                    <div class="prod-title">${name}</div>
                    <div class="prod-weight">${prod.weight}</div>
                    <div class="prod-bottom">
                        <span class="prod-price">${prod.price.toLocaleString()} so'm</span>
                        <button class="btn-add" onclick="addToCart(${prod.id})">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// 3. Добавление в корзину (БЕЗОПАСНАЯ ФУНКЦИЯ ПО ID)
function addToCart(id) {
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;
    
    // Сохраняем в корзину только ID товара, чтобы название всегда соответствовало текущему языку
    cart.push({ id: prod.id });
    updateCartUI();
    
    const name = currentLang === 'uz' ? prod.nameUz : prod.nameRu;
    showToast(name + " " + translations[currentLang].toastAdd);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// 4. Обновление интерфейса корзины
function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const botCountEl = document.getElementById('bot-cart-count');
    if (countEl) countEl.innerText = cart.length;
    if (botCountEl) botCountEl.innerText = cart.length;

    const cartItemsBox = document.getElementById('cart-items');
    if (!cartItemsBox) return;
    cartItemsBox.innerHTML = '';
    
    let total = 0;

    if (cart.length === 0) {
        cartItemsBox.innerHTML = `<p style="text-align:center; color:#888; margin-top:40px;">${translations[currentLang].emptyCart}</p>`;
    } else {
        cart.forEach((item, index) => {
            const prod = productsData.find(p => p.id === item.id);
            if (!prod) return;
            
            const name = currentLang === 'uz' ? prod.nameUz : prod.nameRu;
            total += prod.price;
            
            cartItemsBox.innerHTML += `
                <div class="cart-item">
                    <img src="${prod.img}" alt="">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${name}</div>
                        <div class="cart-item-price">${prod.price.toLocaleString()} so'm</div>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        });
    }

    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.innerText = total.toLocaleString() + " so'm";
    
    let myProfit = 0;
    if (total > 0) {
        myProfit = (total * 0.06) + 15000;
    }
    const profitEl = document.getElementById('my-profit');
    if (profitEl) profitEl.innerText = Math.round(myProfit).toLocaleString() + " so'm 🔥";
}

// 5. Управление корзиной
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
}

// 6. Уведомление Toast
function showToast(text) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerHTML = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

// 7. Поиск, фильтрация по категориям и сброс
const searchInput = document.getElementById('search-input');
if (searchInput) searchInput.addEventListener('input', (e) => renderProducts(e.target.value));

const mobileSearchInput = document.getElementById('mobile-search-input');
if (mobileSearchInput) mobileSearchInput.addEventListener('input', (e) => renderProducts(e.target.value));

function filterByCategory(catId) {
    activeCategory = catId;
    activeFilter = "";
    document.getElementById('reset-cat-link').style.display = 'inline';
    updateNavActive('cat');
    renderCategories();
    renderProducts();
    scrollToSection('products-section');
}

function filterByPromo() {
    activeCategory = "";
    activeFilter = "promo";
    document.getElementById('reset-cat-link').style.display = 'inline';
    renderCategories();
    renderProducts();
    scrollToSection('products-section');
}

function filterByFavorites() {
    activeCategory = "";
    activeFilter = "fav";
    document.getElementById('reset-cat-link').style.display = 'inline';
    updateNavActive('fav');
    renderCategories();
    renderProducts();
    scrollToSection('products-section');
}

function goToHome() {
    activeCategory = "";
    activeFilter = "";
    if (searchInput) searchInput.value = "";
    if (mobileSearchInput) mobileSearchInput.value = "";
    document.getElementById('reset-cat-link').style.display = 'none';
    updateNavActive('home');
    renderCategories();
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (id === 'categories-section') updateNavActive('cat');
    }
}

function updateNavActive(type) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (type === 'home' && document.getElementById('nav-btn-home')) document.getElementById('nav-btn-home').classList.add('active');
    if (type === 'cat' && document.getElementById('nav-btn-cat')) document.getElementById('nav-btn-cat').classList.add('active');
    if (type === 'fav' && document.getElementById('nav-btn-fav')) document.getElementById('nav-btn-fav').classList.add('active');
}

// 8. Система избранного
function toggleFav(id) {
    const idx = favorites.indexOf(id);
    if (idx === -1) {
        favorites.push(id);
        showToast("❤️ Saralanganlarga qo'shildi / Добавлено в избранное");
    } else {
        favorites.splice(idx, 1);
    }
    renderProducts();
}

// 9. Модальные окна: Авторизация и Регистрация
function openAuthModal() {
    document.getElementById('auth-modal').classList.add('open');
    document.getElementById('auth-modal-overlay').classList.add('open');
}
function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('open');
    document.getElementById('auth-modal-overlay').classList.remove('open');
}
function switchAuthTab(tab) {
    const loginForm = document.getElementById('form-login');
    const regForm = document.getElementById('form-register');
    const loginTab = document.getElementById('tab-login');
    const regTab = document.getElementById('tab-register');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        regForm.style.display = 'none';
        loginTab.classList.add('active');
        regTab.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'block';
        loginTab.classList.remove('active');
        regTab.classList.add('active');
    }
}
function handleAuth(event, type) {
    event.preventDefault();
    closeAuthModal();
    let name = "Mijoz";
    if (type === 'register') {
        const inputName = document.getElementById('reg-name-input').value;
        if (inputName) name = inputName;
    }
    showToast(translations[currentLang].authSuccess);
    if (document.getElementById('login-text')) document.getElementById('login-text').innerText = name;
    if (document.getElementById('bot-login')) document.getElementById('bot-login').innerText = name;
}

// 10. Модальное окно информации (О нас / Контакты)
function openInfoModal(type) {
    const t = translations[currentLang];
    const titleEl = document.getElementById('info-modal-title');
    const contentEl = document.getElementById('info-modal-content');
    
    if (type === 'about') {
        titleEl.innerText = t.aboutTitle;
        contentEl.innerHTML = t.aboutText;
    } else {
        titleEl.innerText = t.contactTitle;
        contentEl.innerHTML = t.contactText;
    }
    document.getElementById('info-modal').classList.add('open');
    document.getElementById('info-modal-overlay').classList.add('open');
}
function closeInfoModal() {
    document.getElementById('info-modal').classList.remove('open');
    document.getElementById('info-modal-overlay').classList.remove('open');
}

// 11. Оформление заказа
function alertOrder() {
    if (cart.length === 0) return alert(currentLang === 'uz' ? "Savat bo'sh!" : "Корзина пуста!");
    const total = document.getElementById('cart-total') ? document.getElementById('cart-total').innerText : "0";
    const profit = document.getElementById('my-profit') ? document.getElementById('my-profit').innerText : "0";
    alert(`🎉 BUYURTMA QABUL QILINDI / ЗАКАЗ ОФОРМЛЕН!\n\nMijoz to'laydi / Сумма клиенту: ${total}\n⚡ Sizning sof foydangiz / Ваш чистый заработок: ${profit}`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// 12. Система смены языка
function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.querySelectorAll('.lang-item').forEach(btn => btn.classList.remove('active'));
    const langBtn = document.getElementById('lang-' + lang);
    if (langBtn) langBtn.classList.add('active');

    if (document.getElementById('loc-text')) document.getElementById('loc-text').innerText = t.loc;
    if (document.getElementById('cat-btn-text')) document.getElementById('cat-btn-text').innerText = t.catBtn;
    if (document.getElementById('search-input')) document.getElementById('search-input').placeholder = t.searchPlaceholder;
    if (document.getElementById('mobile-search-input')) document.getElementById('mobile-search-input').placeholder = t.searchPlaceholder;
    if (document.getElementById('nav-promo')) document.getElementById('nav-promo').innerText = t.promo;
    if (document.getElementById('nav-about')) document.getElementById('nav-about').innerText = t.about;
    if (document.getElementById('nav-contact')) document.getElementById('nav-contact').innerText = t.contact;
    if (document.getElementById('login-text') && (document.getElementById('login-text').innerText === "Kirish" || document.getElementById('login-text').innerText === "Войти")) {
        document.getElementById('login-text').innerText = t.login;
    }

    if (document.getElementById('desktop-hero-title')) document.getElementById('desktop-hero-title').innerText = t.desktopHeroTitle;
    if (document.getElementById('desktop-hero-sub')) document.getElementById('desktop-hero-sub').innerText = t.desktopHeroSub;
    if (document.getElementById('btn-order')) document.getElementById('btn-order').innerText = t.btnOrder;
    if (document.getElementById('btn-view-cat')) document.getElementById('btn-view-cat').innerText = t.btnViewCat;
    if (document.getElementById('badge-title')) document.getElementById('badge-title').innerText = t.badgeTitle;
    if (document.getElementById('badge-sub')) document.getElementById('badge-sub').innerText = t.badgeSub;
    if (document.getElementById('trust-1-title')) document.getElementById('trust-1-title').innerText = t.trust1Title;
    if (document.getElementById('trust-1-sub')) document.getElementById('trust-1-sub').innerText = t.trust1Sub;
    if (document.getElementById('trust-2-sub')) document.getElementById('trust-2-sub').innerText = t.trust2Sub;
    if (document.getElementById('trust-3-sub')) document.getElementById('trust-3-sub').innerText = t.trust3Sub;
    
    if (document.getElementById('mobile-hero-title')) document.getElementById('mobile-hero-title').innerHTML = t.mobileHeroTitle + '<br><span>-30% gacha</span>';
    if (document.getElementById('mobile-hero-btn')) document.getElementById('mobile-hero-btn').innerText = t.mobileHeroBtn;
    
    if (document.getElementById('cats-title')) document.getElementById('cats-title').innerText = t.catsTitle;
    if (document.getElementById('view-all-link')) document.getElementById('view-all-link').innerText = t.viewAll;
    if (document.getElementById('reset-cat-link')) document.getElementById('reset-cat-link').innerText = t.resetCat;
    if (document.getElementById('deliv-title')) document.getElementById('deliv-title').innerText = t.delivTitle;
    if (document.getElementById('deliv-sub')) document.getElementById('deliv-sub').innerText = t.delivSub;

    if (document.getElementById('cart-drawer-title')) document.getElementById('cart-drawer-title').innerText = t.cartTitle;
    if (document.getElementById('total-text')) document.getElementById('total-text').innerText = t.total;
    if (document.getElementById('btn-checkout')) document.getElementById('btn-checkout').innerText = t.checkout;
    if (document.getElementById('bot-home')) document.getElementById('bot-home').innerText = t.botHome;
    if (document.getElementById('bot-cat')) document.getElementById('bot-cat').innerText = t.botCat;
    if (document.getElementById('bot-fav')) document.getElementById('bot-fav').innerText = t.botFav;
    if (document.getElementById('bot-cart')) document.getElementById('bot-cart').innerText = t.botCart;
    if (document.getElementById('bot-login') && (document.getElementById('bot-login').innerText === "Kirish" || document.getElementById('bot-login').innerText === "Войти")) {
        document.getElementById('bot-login').innerText = t.botLogin;
    }

    if (document.getElementById('tab-login')) document.getElementById('tab-login').innerText = t.tabLogin;
    if (document.getElementById('tab-register')) document.getElementById('tab-register').innerText = t.tabRegister;
    if (document.getElementById('lbl-login-phone')) document.getElementById('lbl-login-phone').innerText = t.lblLoginPhone;
    if (document.getElementById('lbl-login-pass')) document.getElementById('lbl-login-pass').innerText = t.lblLoginPass;
    if (document.getElementById('btn-submit-login')) document.getElementById('btn-submit-login').innerText = t.btnSubmitLogin;
    if (document.getElementById('lbl-reg-name')) document.getElementById('lbl-reg-name').innerText = t.lblRegName;
    if (document.getElementById('lbl-reg-phone')) document.getElementById('lbl-reg-phone').innerText = t.lblRegPhone;
    if (document.getElementById('lbl-reg-pass')) document.getElementById('lbl-reg-pass').innerText = t.lblRegPass;
    if (document.getElementById('btn-submit-reg')) document.getElementById('btn-submit-reg').innerText = t.btnSubmitReg;

    renderCategories();
    renderProducts();
    updateCartUI();
}

// Запуск при открытии страницы
renderCategories();
renderProducts();
updateCartUI();
