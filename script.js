// --- Импорт Firebase ---
import { db } from "./public/firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// --- БАЗА ДАННЫХ ТОВАРОВ ---
const productsData = [
    { id: 1, nameUz: "Mol go'shti (Lahm)", nameRu: "Говядина мякоть", weight: "1 kg", price: 110000, img: "images/beef.png", badge: "Hit", cat: "gosht", country: "O'zbekiston", expiry: "7 kun", descUz: "Eng yangi mol go'shti, Abbos bozoridan to'g'ridan-to'g'ri. Faqat yuqori sifatli!",
    descRu: "Свежайшая говядина прямо с рынка Abbos. Только высший сорт!" },
    { id: 2, nameUz: "Go'sht mahsulotlari", nameRu: "Мясное ассорти", weight: "1 kg", price: 90000, img: "images/meat.png", badge: "", cat: "gosht", country: "O'zbekiston", expiry: "5 kun", descUz: "Turli xil go'sht mahsulotlari to'plami. Barbekyu uchun ideal!",
    descRu: "Набор различных мясных продуктов. Идеально для барбекю!" },
    { id: 3, nameUz: "Qo'y go'shti", nameRu: "Баранина свежая", weight: "1 kg", price: 100000, img: "images/mutton.png", badge: "", cat: "gosht", country: "O'zbekiston", expiry: "5 kun", descUz: "Yangi qo'y go'shti, eng yaxshi sifat. Sho'rva va palov uchun!",
    descRu: "Свежая баранина высшего качества. Для шурпы и плова!" },
    { id: 4, nameUz: "Tabiiy sut (Natural)", nameRu: "Молоко натуральное", weight: "1 l", price: 11000, img: "images/naturalmilk.png", badge: "", cat: "sut", country: "O'zbekiston", expiry: "3 kun", descUz: "To'liq tabiiy sut, qo'shimchalarsiz. Har kuni yangi!",
    descRu: "Полностью натуральное молоко без добавок. Свежее каждый день!" },
    { id: 5, nameUz: "Sut 2%", nameRu: "Молоко 2%", weight: "1 l", price: 12000, img: "images/milk2.png", badge: "-10%", cat: "sut", country: "O'zbekiston", expiry: "5 kun", descUz: "Past yog'li sut, sog'lom ovqatlanish uchun eng yaxshi tanlov.",
    descRu: "Молоко с низким содержанием жира, лучший выбор для здорового питания." },
    { id: 6, nameUz: "Sut 6%", nameRu: "Молоко 6% (Густое)", weight: "1 l", price: 15000, img: "images/milk6.png", badge: "", cat: "sut", country: "O'zbekiston", expiry: "4 kun", descUz: "Boy va qaymoqli sut, pishiriqlar uchun ideal.",
    descRu: "Насыщенное сливочное молоко, идеально для выпечки." },
    { id: 7, nameUz: "Sut mahsulotlari", nameRu: "Молочные продукты / Творог", weight: "500 g", price: 22000, img: "images/milkproducts.png", badge: "Hit", cat: "sut", country: "O'zbekiston", expiry: "3 kun", descUz: "Uy usulida tayyorlangan mazali tvorog va sut mahsulotlari.",
    descRu: "Вкусный творог и молочные продукты домашнего приготовления." },
    { id: 8, nameUz: "Banan", nameRu: "Бананы спелые", weight: "1 kg", price: 18000, img: "images/banan.png", badge: "-15%", cat: "meva", country: "Ekvador", expiry: "5 kun", descUz: "Pishgan va shirin bananlar. Energetik atıştırmalık!",
    descRu: "Спелые сладкие бананы. Энергетический перекус!" },
    { id: 9, nameUz: "Mevalar to'plami", nameRu: "Фруктовое ассорти", weight: "1 kg", price: 35000, img: "images/fruits.png", badge: "", cat: "meva", country: "O'zbekiston", expiry: "4 kun", descUz: "Mavsumiy mevalardan tuzilgan rang-barang to'plam.",
    descRu: "Красочный набор сезонных фруктов." },
    { id: 10, nameUz: "Sabzavotlar to'plami", nameRu: "Свежие овощи", weight: "1 kg", price: 15000, img: "images/vegetables.png", badge: "Hit", cat: "meva", country: "O'zbekiston", expiry: "5 kun", descUz: "Eng yangi mavsumiy sabzavotlar. Salatlar uchun mukammal tanlov!",
    descRu: "Свежайшие сезонные овощи. Отличный выбор для салатов!" },
    { id: 11, nameUz: "Yangi yopilgan non", nameRu: "Хлеб свежий / Лепешка", weight: "1 dona", price: 3500, img: "images/bread.png", badge: "", cat: "non", country: "O'zbekiston", expiry: "2 kun", descUz: "Issiq va yangi non. An'anaviy o'zbek noni!",
    descRu: "Горячий свежий хлеб. Традиционная узбекская лепёшка!" },
    { id: 12, nameUz: "Shirin tort / Pirog", nameRu: "Торт десертный", weight: "1 kg", price: 75000, img: "images/cake.png", badge: "-10%", cat: "shirinlik", country: "O'zbekiston", expiry: "3 kun", descUz: "Mazali shirin tort. Bayram dasturxoni uchun eng yaxshi tanlov!",
    descRu: "Вкусный сладкий торт. Лучший выбор для праздничного стола!" },
    { id: 13, nameUz: "Gazli ichimliklar", nameRu: "Газировка / Сода", weight: "1.5 l", price: 10000, img: "images/soda.png", badge: "", cat: "ichimlik", country: "O'zbekiston", expiry: "12 oy", descUz: "Mazali gazlangan ichimlik, chanqoqni qondiradi.",
    descRu: "Вкусный газированный напиток, утоляет жажду." },
    { id: 14, nameUz: "Sharbatlar va ichimliklar", nameRu: "Напитки и соки", weight: "1 l", price: 14000, img: "images/drinks.png", badge: "Hit", cat: "ichimlik", country: "O'zbekiston", expiry: "6 oy", descUz: "Tabiiy sharbat, vitaminlarga boy. Ertalabki nonushta uchun ideal!",
    descRu: "Натуральный сок, богатый витаминами. Идеален для завтрака!" },
    { id: 15, nameUz: "Tuxum (10 dona)", nameRu: "Яйца куриные (10 шт)", weight: "10 dona", price: 16000, img: "images/egg.png", badge: "", cat: "boshqa", country: "O'zbekiston", expiry: "14 kun", descUz: "Uy parrandalarining yangi tuxumlari. Yuqori sifat kafolati.",
    descRu: "Свежие яйца домашних кур. Гарантия высокого качества." },
    { id: 16, nameUz: "Oliy navli un", nameRu: "Мука высший сорт", weight: "2 kg", price: 22000, img: "images/flour.png", badge: "", cat: "boshqa", country: "O'zbekiston", expiry: "12 oy", descUz: "Faqat eng yaxshi bug'doydan tayyorlangan un. Non yopish uchun!",
    descRu: "Мука только из лучшей пшеницы. Для выпечки!" },
    { id: 17, nameUz: "O'simlik yog'i", nameRu: "Подсолнечное масло", weight: "1 l", price: 19000, img: "images/sunflower-oil.png", badge: "Hit", cat: "boshqa", country: "O'zbekiston", expiry: "12 oy", descUz: "Yuqori sifatli o'simlik yog'i. Har kuni ishlatish uchun!",
    descRu: "Растительное масло высшего качества. Для ежедневного использования!" },
    { id: 18, nameUz: "Foydali yormalar", nameRu: "Крупы / Завтраки", weight: "800 g", price: 18000, img: "images/cereal.png", badge: "", cat: "boshqa", country: "O'zbekiston", expiry: "24 oy", descUz: "Foydali va mazali yormalar aralashmasi. Sog'lom nonushta uchun!",
    descRu: "Полезная и вкусная смесь круп. Для здорового завтрака!" },
    { id: 19, nameUz: "Konservalangan mahsulotlar", nameRu: "Консервы", weight: "400 g", price: 25000, img: "images/conserve.png", badge: "", cat: "boshqa", country: "O'zbekiston", expiry: "36 oy", descUz: "Tanlangan konserva mahsulotlari. Uzoq muddat saqlash uchun!",
    descRu: "Отборные консервированные продукты. Для длительного хранения!" },
    { id: 20, nameUz: "Gigiena va kosmetika", nameRu: "Косметика и гигиена", weight: "1 dona", price: 30000, img: "images/cosmetics.png", badge: "", cat: "boshqa", country: "O'zbekiston", expiry: "24 oy", descUz: "Sifatli gigiena vositalari va kosmetika. Har kuni foydalanish uchun!",
    descRu: "Качественные средства гигиены и косметика. Для ежедневного использования!" }
];

// --- КАТЕГОРИИ ---
const categoriesData = [
    { id: "meva", nameUz: "Mevalar", nameRu: "Фрукты", img: "images/banan.png" },
    { id: "gosht", nameUz: "Go'sht", nameRu: "Мясо", img: "images/beef.png" },
    { id: "sut", nameUz: "Sut mahsulotlari", nameRu: "Молочное", img: "images/naturalmilk.png" },
    { id: "ichimlik", nameUz: "Ichimliklar", nameRu: "Напитки", img: "images/drinks.png" },
    { id: "shirinlik", nameUz: "Shirinliklar", nameRu: "Сладости", img: "images/cake.png" },
    { id: "non", nameUz: "Non va non mahsulotlari", nameRu: "Хлеб и выпечка", img: "images/bread.png" },
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
        mobileHeroTitle: "Hafta chegirmalari", mobileHeroDiscount: "-30% gacha", mobileHeroBtn: "Ko'rish",
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
        contactTitle: "Kontaktlar", contactText: "<b>Telefon:</b> +998 (90) 123-45-67<br><b>Telegram:</b> @abbosgo_support<br><b>Manzil:</b> Toshkent sh., Qorasuv-1, Abbos bozori yoni.<br><b>Ish vaqti:</b> 08:00 — 23:00 har kuni.",
        specCountry: "Ishlab chiqarilgan mamlakat:", specExpiry: "Yaroqlilik muddati:", modalAddBtn: "Savatga qo'shish",
        checkoutTitle: "Buyurtma berish", addrTitle: "Yetkazib berish manzili",
        street: "Ko'cha", house: "Uy", entrance: "Pod'ezd", floor: "Qavat", apt: "Xonadon",
        intercom: "Domofon kodi", comment: "Kuryerga izoh", payTitle: "To'lov usuli",
        payCard: "Karta (Uzcard/Humo)", payCash: "Naqd pul", confirmOrder: "Buyurtmani tasdiqlash",
        orderSuccess: "Buyurtmangiz qabul qilindi! ✅ Tez orada kuryer siz bilan bog'lanadi.",
        orderError: "Buyurtmani yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring."
    },
    ru: {
        loc: "Карасу", catBtn: "Каталог", searchPlaceholder: "Поиск товаров...",
        promo: "Акции", about: "О нас", contact: "Контакты", login: "Войти",
        desktopHeroTitle: "Свежие продукты прямо из Abbos Market",
        desktopHeroSub: "Доставка за 20-40 минут по Карасу",
        btnOrder: "Заказать", btnViewCat: "Смотреть Каталог",
        badgeTitle: "Всегда свежее", badgeSub: "прямо с полок Abbos Market",
        trust1Title: "10-20 мин", trust1Sub: "быстрая доставка", trust2Sub: "рейтинг сервиса", trust3Sub: "довольных клиентов",
        mobileHeroTitle: "Скидки недели", mobileHeroDiscount: "-30% до", mobileHeroBtn: "Смотреть",
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
        contactTitle: "Контакты", contactText: "<b>Телефон:</b> +998 (90) 123-45-67<br><b>Telegram:</b> @abbosgo_support<br><b>Адрес:</b> г. Ташкент, Карасу-1, ориентир рынок Abbos.<br><b>Режим работы:</b> 08:00 — 23:00 ежедневно.",
        specCountry: "Страна производства:", specExpiry: "Срок годности:", modalAddBtn: "Добавить в корзину",
        checkoutTitle: "Оформление заказа", addrTitle: "Адрес доставки",
        street: "Улица", house: "Дом", entrance: "Подъезд", floor: "Этаж", apt: "Квартира",
        intercom: "Код домофона", comment: "Комментарий курьеру", payTitle: "Способ оплаты",
        payCard: "Карта (Uzcard/Humo)", payCash: "Наличные", confirmOrder: "Подтвердить заказ",
        orderSuccess: "Ваш заказ принят! ✅ Скоро курьер с вами свяжется.",
        orderError: "Ошибка при отправке заказа. Пожалуйста, попробуйте снова."
    }
};

let currentLang = 'uz';
let cart = [];
let favorites = [];
let activeCategory = "";
let activeFilter = "";
let currentModalProductId = null;

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
        
        grid.innerHTML += `
            <div class="product-card" onclick="openProductModal(${prod.id})">
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
                        <button class="btn-add" onclick="addToCart(${prod.id}); event.stopPropagation();">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// 3. Добавление в корзину
function addToCart(id) {
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;
    
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

// 5. Управление корзиной — использует класс .active (не .open)
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
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

// 11. Модальное окно товара (#product-modal)
function openProductModal(productId) {
    const prod = productsData.find(p => p.id === productId);
    if (!prod) return;
    
    currentModalProductId = productId;
    
    const name = currentLang === 'uz' ? prod.nameUz : prod.nameRu;
    const desc = currentLang === 'uz' ? (prod.descUz || "") : (prod.descRu || "");
    const countryLabel = currentLang === 'uz' ? translations.uz.specCountry : translations.ru.specCountry;
    const expiryLabel = currentLang === 'uz' ? translations.uz.specExpiry : translations.ru.specExpiry;
    
    document.getElementById('modal-prod-img').src = prod.img;
    document.getElementById('modal-prod-img').alt = name;
    document.getElementById('modal-prod-title').innerText = name;
    document.getElementById('modal-prod-price').innerText = prod.price.toLocaleString() + " so'm";
    document.getElementById('modal-prod-weight').innerText = prod.weight;
    document.getElementById('spec-country-label').innerText = countryLabel;
    document.getElementById('modal-prod-country').innerText = prod.country || "O'zbekiston";
    document.getElementById('spec-expiry-label').innerText = expiryLabel;
    document.getElementById('modal-prod-expiry').innerText = prod.expiry || "7 kun";
    document.getElementById('modal-prod-desc').innerText = desc;
    
    document.getElementById('modal-add-btn-text').innerText = currentLang === 'uz' ? translations.uz.modalAddBtn : translations.ru.modalAddBtn;
    
    document.getElementById('product-modal').classList.add('open');
    document.getElementById('product-modal-overlay').classList.add('open');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('open');
    document.getElementById('product-modal-overlay').classList.remove('open');
    currentModalProductId = null;
}

function addToCartFromModal() {
    if (currentModalProductId !== null) {
        addToCart(currentModalProductId);
        closeProductModal();
    }
}

// 12. Модальное окно оформления заказа (#checkout-modal)
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast(translations[currentLang].emptyCart);
        return;
    }
    
    // Сначала закрываем боковую корзину
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    
    const t = translations[currentLang];
    
    document.getElementById('checkout-modal-title').innerText = t.checkoutTitle;
    document.getElementById('checkout-addr-title').innerText = t.addrTitle;
    document.getElementById('lbl-street').innerText = t.street;
    document.getElementById('lbl-house').innerText = t.house;
    document.getElementById('lbl-entrance').innerText = t.entrance;
    document.getElementById('lbl-floor').innerText = t.floor;
    document.getElementById('lbl-apartment').innerText = t.apt;
    document.getElementById('lbl-intercom').innerText = t.intercom;
    document.getElementById('lbl-comment').innerText = t.comment;
    document.getElementById('checkout-pay-title').innerText = t.payTitle;
    document.getElementById('pay-card').innerText = t.payCard;
    document.getElementById('pay-cash').innerText = t.payCash;
    document.getElementById('confirm-order-text').innerText = t.confirmOrder;
    document.getElementById('checkout-total-label').innerText = t.total;
    
    updateCheckoutTotal();
    
    document.getElementById('checkout-modal').classList.add('open');
    document.getElementById('checkout-modal-overlay').classList.add('open');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.remove('open');
    document.getElementById('checkout-modal-overlay').classList.remove('open');
}

function updateCheckoutTotal() {
    let total = 0;
    cart.forEach(item => {
        const prod = productsData.find(p => p.id === item.id);
        if (prod) total += prod.price;
    });
    
    document.getElementById('checkout-final-total').innerText = total.toLocaleString() + " so'm";
    
    let profit = 0;
    if (total > 0) {
        profit = (total * 0.06) + 15000;
    }
    document.getElementById('checkout-profit').innerText = Math.round(profit).toLocaleString() + " so'm 🔥";
}

// 13. Отправка заказа в Firebase Firestore
async function submitOrder(event) {
    event.preventDefault();
    
    const btn = document.getElementById('btn-confirm-order');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>' + (currentLang === 'uz' ? 'Yuborilmoqda...' : 'Отправка...') + '</span>';
    
    try {
        const street = document.getElementById('checkout-street').value;
        const house = document.getElementById('checkout-house').value;
        const entrance = document.getElementById('checkout-entrance').value;
        const floor = document.getElementById('checkout-floor').value;
        const apartment = document.getElementById('checkout-apartment').value;
        const intercom = document.getElementById('checkout-intercom').value;
        const comment = document.getElementById('checkout-comment').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        const cartItems = cart.map(item => {
            const prod = productsData.find(p => p.id === item.id);
            return {
                id: prod.id,
                name: currentLang === 'uz' ? prod.nameUz : prod.nameRu,
                price: prod.price,
                weight: prod.weight
            };
        });
        
        let totalAmount = 0;
        cartItems.forEach(item => { totalAmount += item.price; });
        
        const orderData = {
            items: cartItems,
            totalAmount: totalAmount,
            deliveryAddress: {
                street: street,
                house: house,
                entrance: entrance || "",
                floor: floor || "",
                apartment: apartment || "",
                intercom: intercom || ""
            },
            comment: comment || "",
            paymentMethod: paymentMethod === 'card' ? 'card' : 'cash',
            status: 'new',
            createdAt: new Date().toISOString(),
            locale: currentLang
        };
        
        const docRef = await addDoc(collection(db, "orders"), orderData);
        console.log("✅ Order saved with ID:", docRef.id);
        
        cart = [];
        updateCartUI();
        closeCheckoutModal();
        
        const successMsg = translations[currentLang].orderSuccess;
        showToast(successMsg);
        
        document.getElementById('checkout-form').reset();
        
    } catch (error) {
        console.error("❌ Error submitting order:", error);
        const errorMsg = translations[currentLang].orderError;
        showToast(errorMsg + " ❌");
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>' + translations[currentLang].confirmOrder + '</span>';
    }
}

// 14. Система смены языка
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
    
    if (document.getElementById('mobile-hero-title')) document.getElementById('mobile-hero-title').innerHTML = t.mobileHeroTitle + '<br><span>' + t.mobileHeroDiscount + '</span>';
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

// ============================================================
// ПРИВЯЗКА ВСЕХ ФУНКЦИЙ К window (для inline onclick в HTML)
// ============================================================
window.renderCategories = renderCategories;
window.renderProducts = renderProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartUI = updateCartUI;
window.toggleCart = toggleCart;
window.showToast = showToast;
window.filterByCategory = filterByCategory;
window.filterByPromo = filterByPromo;
window.filterByFavorites = filterByFavorites;
window.goToHome = goToHome;
window.scrollToSection = scrollToSection;
window.toggleFav = toggleFav;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleAuth = handleAuth;
window.openInfoModal = openInfoModal;
window.closeInfoModal = closeInfoModal;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCartFromModal = addToCartFromModal;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.updateCheckoutTotal = updateCheckoutTotal;
window.submitOrder = submitOrder;
window.setLang = setLang;

// Запуск при открытии страницы
renderCategories();
renderProducts();
updateCartUI();
