// public/script.js
// Firebase через CDN (compat версия)

// Глобальные переменные Firebase
let db, auth;

// Инициализация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdaXL5L1EeeaqF--vLLXxv203bJLe9VMs",
  authDomain: "abbos-go.firebaseapp.com",
  projectId: "abbos-go",
  storageBucket: "abbos-go.firebasestorage.app",
  messagingSenderId: "456018191223",
  appId: "1:456018191223:web:9dedf7010c3cc7f0737772",
};

// Инициализируем Firebase
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
    auth = firebase.auth();
    console.log("✅ Firebase инициализирован");
} catch (error) {
    console.error("❌ Ошибка инициализации Firebase:", error);
}

// ===========================
// СЛОВАРЬ ПЕРЕВОДОВ
// ===========================
const translations = {
    uz: {
        page_title: "Abbos Go — Yetkazib berish xizmati",
        toast_added: "Mahsulot savatga qo'shildi! 🛒",
        toast_favorite_added: "Sevimlilarga qo'shildi! ❤️",
        toast_favorite_removed: "Sevimlilardan o'chirildi",
        toast_login_success: "Tizimga kirish muvaffaqiyatli! ✅",
        toast_register_success: "Ro'yxatdan o'tish muvaffaqiyatli! ✅",
        toast_order_success: "Buyurtma qabul qilindi! ⚡",
        toast_empty_cart: "Savat bo'sh!",
        toast_logout_success: "Chiqish muvaffaqiyatli",
        toast_auth_error: "Xatolik. Qayta urinib ko'ring",
        toast_password_short: "Parol kamida 6 belgi bo'lishi kerak",
        toast_user_exists: "Bu raqam allaqachon ro'yxatdan o'tgan",
        toast_weak_password: "Parol juda oddiy",
        location: "Qorasuv",
        catalog_btn: "Katalog",
        search_placeholder: "Mahsulotlarni qidirish...",
        nav_promo: "Aksiya",
        nav_about: "Biz haqimizda",
        nav_contacts: "Kontaktlar",
        login_btn: "Kirish",
        logout_btn: "Chiqish",
        hero_title: "Yangi mahsulotlar to'g'ridan-to'g'ri Abbos bozoridan",
        hero_subtitle: "20-40 daqiqada yetkazib berish Qorasuvda",
        btn_order: "Buyurtma",
        btn_view_catalog: "Katalogni ko'rish",
        badge_always_new: "Har doim yangi",
        badge_abbos_market: "Bevosita Abbos Market",
        mobile_hero_time: "10-20 daqiqada yetkazib berish",
        mobile_hero_fast: "tez yetkazib berish",
        trust_time: "10-20 daqiqa",
        trust_fast_delivery: "tez yetkazib berish",
        trust_rating: "xizmat ko'rsatish reytingi",
        trust_clients: "5000+",
        trust_happy: "mamnun mijozlar",
        discounts_title: "Hafta chegirmalari -30% gacha",
        view_all: "Barchasini ko'rsatish",
        cat_all: "Barchasi",
        cat_meat: "Go'sht",
        cat_vegetables: "Sabzavotlar",
        cat_fruits: "Mevalar",
        cat_drinks: "Ichimliklar",
        cat_bakery: "Nonushta",
        cat_sweets: "Shirinliklar",
        cat_cosmetics: "Kosmetika",
        cat_household: "Maishiy",
        cat_others: "Boshqa",
        recommend_title: "Tavsiya etamiz",
        favorites_title: "Saralangan mahsulotlar",
        delivery_title: "Arzon narxlar kafolati",
        delivery_subtitle: "10-20 daqiqada yetkazib berish — Tez, oson va qulay!",
        cart_title: "Sizning savatingiz",
        cart_empty: "Savat bo'sh",
        cart_total: "Jami:",
        cart_profit: " Sizning foydangiz (6% + 15k):",
        cart_checkout: "Buyurtma berish",
        modal_login: "Kirish",
        modal_register: "Ro'yxatdan o'tish",
        label_phone: "Telefon raqam",
        label_password: "Parol",
        label_name: "Ismingiz",
        placeholder_phone: "+998 __ ___ __ __",
        placeholder_password: "••••••••",
        placeholder_name: "Ismingiz",
        btn_login_submit: "Tizimga kirish",
        btn_register_submit: "Ro'yxatdan o'tish",
        nav_main: "Asosiy",
        nav_catalog: "Katalog",
        nav_favorites: "Saralangan",
        nav_cart: "Savat",
        nav_login: "Kirish",
        not_found: "Mahsulotlar topilmadi",
        favorites_empty: "Sevimli mahsulotlar yo'q. ❤️ tugmasini bosing!"
    },
    ru: {
        page_title: "Abbos Go — Служба доставки",
        toast_added: "Товар добавлен в корзину! 🛒",
        toast_favorite_added: "Добавлено в избранное! ❤️",
        toast_favorite_removed: "Удалено из избранного",
        toast_login_success: "Вход выполнен успешно! ✅",
        toast_register_success: "Регистрация успешна! ✅",
        toast_order_success: "Заказ принят! ⚡",
        toast_empty_cart: "Корзина пуста!",
        toast_logout_success: "Выход выполнен",
        toast_auth_error: "Ошибка. Попробуйте снова",
        toast_password_short: "Пароль должен быть не менее 6 символов",
        toast_user_exists: "Этот номер уже зарегистрирован",
        toast_weak_password: "Слишком простой пароль",
        location: "Карасу",
        catalog_btn: "Каталог",
        search_placeholder: "Поиск товаров...",
        nav_promo: "Акция",
        nav_about: "О нас",
        nav_contacts: "Контакты",
        login_btn: "Вход",
        logout_btn: "Выйти",
        hero_title: "Новые товары прямо с рынка Аббос",
        hero_subtitle: "Доставка за 20-40 минут в Карасу",
        btn_order: "Заказать",
        btn_view_catalog: "Смотреть каталог",
        badge_always_new: "Всегда свежее",
        badge_abbos_market: "Напрямую Abbos Market",
        mobile_hero_time: "Доставка за 10-20 минут",
        mobile_hero_fast: "быстрая доставка",
        trust_time: "10-20 минут",
        trust_fast_delivery: "быстрая доставка",
        trust_rating: "рейтинг обслуживания",
        trust_clients: "5000+",
        trust_happy: "довольных клиентов",
        discounts_title: "Скидки недели до -30%",
        view_all: "Показать все",
        cat_all: "Все",
        cat_meat: "Мясо",
        cat_vegetables: "Овощи",
        cat_fruits: "Фрукты",
        cat_drinks: "Напитки",
        cat_bakery: "Выпечка",
        cat_sweets: "Сладости",
        cat_cosmetics: "Косметика",
        cat_household: "Бытовые",
        cat_others: "Другое",
        recommend_title: "Рекомендуем",
        favorites_title: "Избранные товары",
        delivery_title: "Гарантия низких цен",
        delivery_subtitle: "Доставка за 10-20 минут — Быстро, легко и удобно!",
        cart_title: "Ваша корзина",
        cart_empty: "Корзина пуста",
        cart_total: "Итого:",
        cart_profit: "⚡ Ваша прибыль (6% + 15к):",
        cart_checkout: "Оформить заказ",
        modal_login: "Вход",
        modal_register: "Регистрация",
        label_phone: "Номер телефона",
        label_password: "Пароль",
        label_name: "Ваше имя",
        placeholder_phone: "+998 __ ___ __ __",
        placeholder_password: "••••••••",
        placeholder_name: "Ваше имя",
        btn_login_submit: "Войти",
        btn_register_submit: "Зарегистрироваться",
        nav_main: "Главная",
        nav_catalog: "Каталог",
        nav_favorites: "Избранное",
        nav_cart: "Корзина",
        nav_login: "Вход",
        not_found: "Товары не найдены",
        favorites_empty: "Нет избранных товаров. Нажмите ❤️!"
    }
};

// ===========================
// СОСТОЯНИЕ
// ===========================
let allProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentLang = localStorage.getItem('lang') || 'uz';
let currentCategory = 'all';
let showFavoritesOnly = false;
let currentUser = null;

const categoryByIndex = [
    'all', 'meat_department', 'vegetables', 'fruits', 'drinks',
    'bakery', 'sweets', 'cosmetics', 'household', 'others'
];

// ===========================
// ПЕРЕВОД ИНТЕРФЕЙСА
// ===========================
function translateInterface() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    const title = document.querySelector('[data-translate="page_title"]');
    if (title) {
        document.title = t.page_title;
    }
    
    renderProducts();
    renderCart();
}

// ===========================
// ЗАГРУЗКА ТОВАРОВ
// ===========================
async function loadProducts() {
    try {
        const querySnapshot = await db.collection("abbos").get();
        allProducts = [];
        querySnapshot.forEach((doc) => {
            allProducts.push({ id: doc.id, ...doc.data() });
        });
        console.log(`✅ Загружено товаров: ${allProducts.length}`);
        renderProducts();
    } catch (error) {
        console.error("❌ Ошибка Firebase:", error);
        const grid = document.querySelector('.products-grid');
        if (grid) grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px;color:#ef4444;">Ошибка загрузки</p>';
    }
}

// ===========================
// ОТРИСОВКА ТОВАРОВ
// ===========================
function renderProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = currentCategory === 'all'
        ? allProducts
        : allProducts.filter(p => p.catalog === currentCategory);

    if (showFavoritesOnly) {
        filtered = filtered.filter(p => favorites.includes(p.id));
    }

    const searchInput = document.querySelector('.search-box input');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (searchTerm) {
        filtered = filtered.filter(p => {
            const name = (currentLang === 'uz' ? p.nameUz : p.nameRu) || '';
            return name.toLowerCase().includes(searchTerm);
        });
    }

    const t = translations[currentLang];

    if (filtered.length === 0) {
        const msg = showFavoritesOnly ? t.favorites_empty : t.not_found;
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:#64748b;">${msg}</p>`;
        return;
    }

    filtered.forEach(product => {
        const name = currentLang === 'uz' ? (product.nameUz || '') : (product.nameRu || '');
        const price = product.price || 0;
        
        const image = product.img 
            ? `images/${product.img}` 
            : `images/${product.id}.png`;
        
        const isFav = favorites.includes(product.id);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <button class="btn-fav ${isFav ? 'active' : ''}" data-id="${product.id}">
                ${isFav ? '❤️' : '🤍'}
            </button>
            <div class="prod-img-box">
                <img src="${image}" alt="${name}" loading="lazy" onerror="this.src='images/placeholder.png'">
            </div>
            <div class="prod-title">${name}</div>
            <div class="prod-weight">ID: ${product.id}</div>
            <div class="prod-bottom">
                <div class="prod-price">${price.toLocaleString()} so'm</div>
                <button class="btn-add" data-id="${product.id}">+</button>
            </div>
        `;
        grid.appendChild(card);
    });

    attachProductListeners();
}

function attachProductListeners() {
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.currentTarget.dataset.id);
            showToast(translations[currentLang].toast_added);
        });
    });

    document.querySelectorAll('.btn-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
            toggleFavorite(e.currentTarget.dataset.id);
        });
    });
}

// ===========================
// КОРЗИНА
// ===========================
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        const image = product.img 
            ? `images/${product.img}` 
            : `images/${product.id}.png`;
        
        cart.push({
            id: product.id,
            name: currentLang === 'uz' ? product.nameUz : product.nameRu,
            image: image,
            price: product.price,
            quantity: 1
        });
    }
    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalRow = document.querySelector('.total-row');
    const profitCalc = document.querySelector('.profit-calc');
    const cartBadge = document.querySelector('.cart-badge, .bot-badge');
    const t = translations[currentLang];

    if (cartBadge) {
        const count = cart.reduce((s, i) => s + i.quantity, 0);
        cartBadge.textContent = count;
        cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p style="text-align:center;color:#64748b;padding:40px 0;">${t.cart_empty}</p>`;
        if (totalRow) totalRow.innerHTML = `<span>${t.cart_total}</span><span>0 so'm</span>`;
        if (profitCalc) profitCalc.innerHTML = `<span>${t.cart_profit}</span><span>0 so'm</span>`;
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.png'">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} so'm × ${item.quantity}</div>
            </div>
            <button class="btn-remove" data-id="${item.id}">✕</button>
        `;
        cartItems.appendChild(div);
    });

    if (totalRow) {
        totalRow.innerHTML = `
            <span>${t.cart_total}</span>
            <span style="color:var(--green-primary);font-weight:800;">${total.toLocaleString()} so'm</span>
        `;
    }

    if (profitCalc) {
        const profit = Math.round(total * 0.06) + 15000;
        profitCalc.innerHTML = `
            <span>${t.cart_profit}</span>
            <span>${profit.toLocaleString()} so'm</span>
        `;
    }

    document.querySelectorAll('.cart-item .btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeFromCart(e.currentTarget.dataset.id);
        });
    });
}

// ===========================
// ИЗБРАННОЕ
// ===========================
function toggleFavorite(productId) {
    const t = translations[currentLang];
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        showToast(t.toast_favorite_removed);
    } else {
        favorites.push(productId);
        showToast(t.toast_favorite_added);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderProducts();
}

// ===========================
// КАТЕГОРИИ
// ===========================
function setupCategories() {
    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (showFavoritesOnly) {
                showFavoritesOnly = false;
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            }
            
            catCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentCategory = card.dataset.category || categoryByIndex[index] || 'all';
            renderProducts();
        });
    });
}

// ===========================
// ЯЗЫК
// ===========================
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    const langButtons = document.querySelectorAll('.lang-item');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        }
    });
    
    translateInterface();
}

function setupLanguage() {
    const langButtons = document.querySelectorAll('.lang-item');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLang(lang);
        });
    });
}

// ===========================
// ПОИСК
// ===========================
function setupSearch() {
    const inputs = document.querySelectorAll('.search-box input, .mobile-search input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            renderProducts();
        });
    });
}

// ===========================
// TOAST
// ===========================
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===========================
// КОРЗИНА
// ===========================
function toggleCart(show) {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    
    if (show === true) {
        if (overlay) overlay.classList.add('open');
        if (drawer) drawer.classList.add('open');
    } else if (show === false) {
        if (overlay) overlay.classList.remove('open');
        if (drawer) drawer.classList.remove('open');
    } else {
        if (overlay && drawer) {
            if (drawer.classList.contains('open')) {
                overlay.classList.remove('open');
                drawer.classList.remove('open');
            } else {
                overlay.classList.add('open');
                drawer.classList.add('open');
            }
        }
    }
}

function setupCartDrawer() {
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    const openBtns = document.querySelectorAll('.cart-btn, .bot-cart-icon');
    const closeBtn = document.querySelector('.close-cart');

    openBtns.forEach(btn => btn.addEventListener('click', () => toggleCart(true)));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleCart(false));
    if (overlay) overlay.addEventListener('click', () => toggleCart(false));
}

// ===========================
// РЕГИСТРАЦИЯ И ВХОД - С МЕНЮ ПРОФИЛЯ
// ===========================
function setupAuthModal() {
    const modal = document.getElementById('auth-modal');
    const modalBox = modal?.querySelector('.modal-box');
    const openBtns = document.querySelectorAll('#open-login-modal, #mobile-login-btn');
    const closeBtn = document.getElementById('close-auth-modal');
    const tabs = document.querySelectorAll('.tab-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const openModal = () => {
        if (modal) modal.classList.add('open');
        if (modalBox) modalBox.classList.add('open');
    };
    
    const closeModal = () => {
        if (modal) modal.classList.remove('open');
        if (modalBox) modalBox.classList.remove('open');
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.tab === 'login') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
            }
        });
    });

    // ВХОД
    loginForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const phone = loginForm.querySelector('input[type="tel"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value;
        const t = translations[currentLang];

        if (!phone || !password) {
            showToast(t.toast_auth_error);
            return;
        }

        try {
            const email = phone.replace(/\s/g, '') + '@abbosgo.uz';
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            
            // Получаем данные пользователя из Firestore ВКЛЮЧАЯ ПАРОЛЬ
            const userDoc = await db.collection('users').doc(userCredential.user.uid).get();
            
            if (userDoc.exists) {
                const userData = userDoc.data();
                // Сохраняем пароль в localStorage для быстрого доступа
                localStorage.setItem('userPassword', userData.password || password);
                
                showToast(t.toast_login_success);
                showProfileMenu(userData);
            } else {
                showToast(t.toast_auth_error);
            }
        } catch (error) {
            console.error('Login error:', error);
            showToast(t.toast_auth_error);
        }
    });

    // РЕГИСТРАЦИЯ
    registerForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = registerForm.querySelector('input[type="text"]').value.trim();
        const phone = registerForm.querySelector('input[type="tel"]').value.trim();
        const password = registerForm.querySelector('input[type="password"]').value;
        const t = translations[currentLang];

        if (!name || !phone || !password) {
            showToast(t.toast_auth_error);
            return;
        }

        if (password.length < 6) {
            showToast(t.toast_password_short);
            return;
        }

        try {
            const email = phone.replace(/\s/g, '') + '@abbosgo.uz';
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            
            // Сохраняем данные ВКЛЮЧАЯ ПАРОЛЬ в Firestore
            await db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                phone: phone,
                email: email,
                password: password, // ← ПАРОЛЬ СОХРАНЯЕТСЯ
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Сохраняем пароль в localStorage
            localStorage.setItem('userPassword', password);

            showToast(t.toast_register_success);
            showProfileMenu({ name, phone, password });
        } catch (error) {
            console.error('Register error:', error);
            if (error.code === 'auth/email-already-in-use') {
                showToast(t.toast_user_exists);
            } else if (error.code === 'auth/weak-password') {
                showToast(t.toast_weak_password);
            } else {
                showToast(t.toast_auth_error);
            }
        }
    });
}

function showProfileMenu(userData) {
    const modalBox = document.querySelector('.modal-box');
    const t = translations[currentLang];
    
    // Получаем пароль из userData или из localStorage
    const userPassword = userData.password || localStorage.getItem('userPassword') || '-';
    
    modalBox.innerHTML = `
        <button class="close-modal" id="close-profile-modal">×</button>
        <div class="profile-menu">
            <div class="profile-header">
                <div class="profile-avatar">
                    <i class="fa-regular fa-user"></i>
                </div>
                <h2>${userData.name || 'Пользователь'}</h2>
            </div>
            
            <div class="profile-info">
                <div class="info-row">
                    <div class="info-label">
                        <i class="fa-regular fa-user"></i>
                        <span>${t.label_name}</span>
                    </div>
                    <div class="info-value">${userData.name || '-'}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">
                        <i class="fa-solid fa-phone"></i>
                        <span>${t.label_phone}</span>
                    </div>
                    <div class="info-value">${userData.phone || '-'}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">
                        <i class="fa-solid fa-lock"></i>
                        <span>${t.label_password}</span>
                    </div>
                    <div class="info-value" style="word-break: break-all; font-size: 14px; color: var(--green-primary); background: var(--green-light); padding: 6px 12px; border-radius: 8px;">
                        ${userPassword}
                    </div>
                </div>
            </div>
            
            <button class="btn-logout-profile" id="btn-logout">
                <i class="fa-solid fa-right-from-bracket"></i>
                ${t.logout_btn || 'Выйти'}
            </button>
        </div>
    `;
    
    // Обработчик закрытия
    document.getElementById('close-profile-modal').addEventListener('click', () => {
        const modal = document.getElementById('auth-modal');
        modal.classList.remove('open');
        modalBox.classList.remove('open');
        setTimeout(() => restoreAuthModal(), 300);
    });
    
    // Обработчик выхода
    document.getElementById('btn-logout').addEventListener('click', async () => {
        try {
            await auth.signOut();
            showToast(t.toast_logout_success);
            const modal = document.getElementById('auth-modal');
            modal.classList.remove('open');
            modalBox.classList.remove('open');
            setTimeout(() => restoreAuthModal(), 300);
            updateLoginUI(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    });
}
// Восстановление оригинального модального окна
function restoreAuthModal() {
    const modalBox = document.querySelector('.modal-box');
    modalBox.innerHTML = `
        <button class="close-modal" id="close-auth-modal">×</button>
        <div class="modal-tabs">
            <button class="tab-btn active" data-tab="login" data-translate="modal_login">Kirish</button>
            <button class="tab-btn" data-tab="register" data-translate="modal_register">Ro'yxatdan o'tish</button>
        </div>

        <!-- Форма входа -->
        <form id="login-form">
            <div class="input-group">
                <label data-translate="label_phone">Telefon raqam</label>
                <input type="tel" data-translate-placeholder="placeholder_phone" placeholder="+998 __ ___ __ __" required>
            </div>
            <div class="input-group">
                <label data-translate="label_password">Parol</label>
                <input type="password" data-translate-placeholder="placeholder_password" placeholder="" required>
            </div>
            <button type="submit" class="btn-auth-submit" data-translate="btn_login_submit">Tizimga kirish</button>
        </form>

        <!-- Форма регистрации -->
        <form id="register-form" style="display:none;">
            <div class="input-group">
                <label data-translate="label_name">Ismingiz</label>
                <input type="text" data-translate-placeholder="placeholder_name" placeholder="Ismingiz" required>
            </div>
            <div class="input-group">
                <label data-translate="label_phone">Telefon raqam</label>
                <input type="tel" data-translate-placeholder="placeholder_phone" placeholder="+998 __ ___ __ __" required>
            </div>
            <div class="input-group">
                <label data-translate="label_new_password">Parol o'ylab toping</label>
                <input type="password" data-translate-placeholder="placeholder_password" placeholder="" required>
            </div>
            <button type="submit" class="btn-auth-submit" data-translate="btn_register_submit">Ro'yxatdan o'tish</button>
        </form>
    `;
    
    // Перезапускаем обработчики
    setupAuthModal();
    translateInterface();
}

// Обновление UI после входа/выхода
function updateLoginUI(user) {
    const loginBtns = document.querySelectorAll('#open-login-modal, #mobile-login-btn');
    const t = translations[currentLang];
    
    loginBtns.forEach(btn => {
        if (user) {
            btn.innerHTML = `<i class="fa-regular fa-user"></i> ${user.name || 'User'}`;
            btn.onclick = function(e) {
                e.preventDefault();
                // При клике на имя - показываем профиль
                const modal = document.getElementById('auth-modal');
                const modalBox = modal?.querySelector('.modal-box');
                if (modal && modalBox) {
                    modal.classList.add('open');
                    modalBox.classList.add('open');
                    showProfileMenu(user);
                }
            };
        } else {
            btn.innerHTML = `<i class="fa-regular fa-user"></i> ${t.login_btn}`;
            btn.onclick = function(e) {
                e.preventDefault();
                const modal = document.getElementById('auth-modal');
                const modalBox = modal?.querySelector('.modal-box');
                if (modal && modalBox) {
                    modal.classList.add('open');
                    modalBox.classList.add('open');
                }
            };
        }
    });
}

// Проверка состояния авторизации
function setupAuthState() {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const userDoc = await db.collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    localStorage.setItem('userName', userData.name);
                    localStorage.setItem('userPhone', userData.phone);
                    updateLoginUI(userData);
                } else {
                    updateLoginUI({ name: user.email.split('@')[0] });
                }
            } catch (error) {
                console.error('Error loading user data:', error);
                updateLoginUI({ name: user.email.split('@')[0] });
            }
        } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('userPhone');
            updateLoginUI(null);
        }
    });
}
// ===========================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ===========================
function setupCheckout() {
    const btn = document.querySelector('.btn-checkout');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const t = translations[currentLang];
        if (cart.length === 0) {
            showToast(t.toast_empty_cart);
            return;
        }
        showToast(t.toast_order_success);
        cart = [];
        saveCart();
        renderCart();
        toggleCart(false);
    });
}

// ===========================
// МОБИЛЬНАЯ НАВИГАЦИЯ
// ===========================
function setupMobileNav() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            
            const text = item.querySelector('span')?.getAttribute('data-translate') || '';
            
            if (text === 'nav_favorites') {
                showFavoritesOnly = true;
                currentCategory = 'all';
                document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
                renderProducts();
                
                const productsSection = document.querySelector('.products-grid')?.closest('.section-container');
                if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (text === 'nav_main') {
                showFavoritesOnly = false;
                currentCategory = 'all';
                document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
                document.querySelector('.cat-card')?.classList.add('active');
                renderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (text === 'nav_catalog') {
                showFavoritesOnly = false;
                const categoriesSection = document.querySelector('.categories-grid')?.closest('.section-container');
                if (categoriesSection) {
                    categoriesSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (text === 'nav_cart') {
                toggleCart(true);
            }
        });
    });
}

// ===========================
// СТИЛИ ДЛЯ МЕНЮ ПОЛЬЗОВАТЕЛЯ
// ===========================
function addUserMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .user-menu {
            position: fixed;
            width: 300px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            overflow: hidden;
            z-index: 10000;
            animation: userMenuAppear 0.3s ease;
        }
        @keyframes userMenuAppear {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .user-menu-header {
            padding: 15px 20px;
            background: var(--green-primary);
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .user-menu-content {
            padding: 20px;
        }
        .user-info {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        .user-info div {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            color: var(--text-muted);
        }
        .btn-logout {
            background: #ef4444;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 10px;
            width: 100%;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }
        .btn-logout:hover {
            background: #dc2626;
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// ЗАПУСК
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    try {
        addUserMenuStyles();
        setupCategories();
        setupLanguage();
        setupSearch();
        setupCartDrawer();
        setupCheckout();
        setupAuthModal();
        setupAuthState();
        setupMobileNav();
        translateInterface();
        renderCart();
        loadProducts();
    } catch (error) {
        console.error("❌ Ошибка инициализации:", error);
    }
});
