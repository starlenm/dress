
const products = [
   
    { name: "Элегантное платье-миди", category: "dresses", price: 3500, size: ["S","M","L"], color: "чёрный", image: "imegesмиди.jpg", images: [], desc: "Изысканное платье из натурального хлопка." },
    { id: 2, name: "Шёлковая блуза", category: "tops", price: 2100, size: ["XS","S","M","L"], color: "белый", image: "imegesблуза.jpg", images: [], desc: "Нежная блуза из 100% шёлка." },
    { id: 3, name: "Пальто Oversize", category: "outerwear", price: 4500, size: ["M","L","XL"], color: "бежевый", image: "imegesпальто.jpg", images: [], desc: "Тёплое пальто из кашемира." },
    { id: 4, name: "Классические брюки", category: "pants", price: 1990, size: ["S","M","L","XL"], color: "чёрный", image: "imegesбрюкичер.jpg", images: [], desc: "Классические чёрные брюки сшитые из качественной костюмной ткани с добавлением эластана." },
    { id: 5, name: "Кожаная юбка", category: "skirts", price: 2200, size: ["S","M"], color: "чёрный", image: "imegesминиюбка.jpg", images: [], desc: "Мини-юбка из экокожи." },
    { id: 6, name: "Джинсы-бойфренды", category: "pants", price: 2560, size: ["XS","S","M","L"], color: "синий", image: "imegesджинсыбой.jpg", images: [], desc: "Удобные джинсы свободного кроя." },
    { id: 7, name: "Трикотажное платье", category: "dresses", price: 3100, size: ["S","M","L"], color: "зелёный", image: "imegesтри.jpg", images: [], desc: "Платье выполненное из мягкого хлопкового трикотажа с добавлением эластана (95% хлопок, 5% эластан)." },
    { id: 8, name: "Бомбер женский", category: "outerwear", price: 2310, size: ["S","M","L"], color: "красный", image: "imegesбом.jpg", images: [], desc: "Тёплый бомбер на синтепоне — отличный выбор для прохладной осени и весны." },
    { id: 9, name: "Плиссированная юбка", category: "skirts", price: 1820, size: ["XS","S","M"], color: "бежевый", image: "imegesпли.jpg", images: [], desc: "Лёгкая юбка на мягкой резинке — садится идеально по фигуре и не сковывает движения." },
    { id: 10, name: "Платье-рубашка", category: "dresses", price: 2350, size: ["S","M","L"], color: "синий", image: "imegesплатье.jpg", images: [], desc: "Платье-рубашка прямого кроя из хлопковой ткани — идеальный баланс между комфортом и стилем." },
    { id: 11, name: "Вечернее платье", category: "dresses", price: 3400, size: ["XS","S","M"], color: "красный", image: "imegesвечернее.jpg", images: [], desc: "Платье из мягкого бархата с благородным ворсом." },
    { id: 12, name: "Льняной костюм", category: "suits", price: 3200, size: ["S","M","L"], color: "бежевый", image: "imegesкос.jpg", images: [], desc: "Лёгкий, льняной, летний костюм." },
    { id: 13, name: "Широкие брюки", category: "pants", price: 1600, size: ["S","M","L","XL"], color: "зелёный", image: "imegesпала.jpg", images: [], desc: "Брюки палаццо свободного кроя из лёгкой струящейся ткани." },
    { id: 14, name: "Свитер оверсайз", category: "tops", price: 1560, size: ["S","M","L"], color: "розовый", image: "imegesсвитер.jpg", images: [], desc: "Объёмный свитер свободного кроя из мягкого акрила с добавлением шерсти." },
    { id: 15, name: "Юбка-карандаш", category: "skirts", price: 1995, size: ["S","M","L"], color: "чёрный", image: "imegesкар.jpg", images: [], desc: "Классическая юбка-карандаш из плотного костюмного материала с добавлением эластана идеально садится по фигуре и не сковывает движения." },
    { id: 16, name: "Платье-свитер", category: "dresses", price: 2340, size: ["S","M","L"], color: "бежевый", image: "imegesплатьесвитер.jpg", images: [], desc: "Мягкое платье-свитер из тёплого трикотажа с добавлением шерсти согревает в холодные дни и приятно облегает фигуру." },
    { id: 17, name: "Топ с открытыми плечами", category: "tops", price: 1500, size: ["S","M","L"], color: "белый", image: "imegesтоп.jpg", images: [], desc: "Изысканный топ с открытой линией плеч из мягкого хлопка с добавлением эластана — идеальный выбор для летних свиданий и вечерних выходов." },
    { id: 18, name: "Кардиган длинный", category: "outerwear", price: 1930, size: ["S","M","L","XL"], color: "серый", image: "imegesкардиган.jpg", images: [], desc: "Длинный кардиган из мягкого буклированного трикотажа согревает и добавляет образу уюта." },
    { id: 19, name: "Шерстяная юбка", category: "skirts", price: 2225, size: ["S","M","L"], color: "бежевый", image: "imegesшер.jpg", images: [], desc: "Тёплая юбка из мягкой шерсти с добавлением эластана идеально подходит для холодного времени года." },
    { id: 20, name: "Блуза с воланами", category: "tops", price: 1800, size: ["M","L","XL"], color: ",белый", image: "imegesвол.jpg", images: [], desc: "Элегеантная блуза с волнами из хлопка" },
    { id: 21, name: "Парка женская", category: "outerwear", price: 2800, size: ["M","L","XL"], color: ",зелёный", image: "imegesпарка.jpg", images: [], desc: "Лёгкая ветровка-парка из непромокаемой ткани защитит от ветра и мелкого дождя в межсезонье." },
    
    { id: 22, name: "Мужская рубашка классическая", category: "shirts", price: 1200, size: ["M","L","XL","XXL"], color: "белый", image: "imegesруб.jpg", images: [], desc: "Классическая белая рубашка." },
    { id: 23, name: "Джинсы мужские прямые", category: "pants", price: 1600, size: ["M","L","XL","XXL"], color: "синий", image: "imegesджимуж.jpg", images: [], desc: "Стандартные джинсы." },
    { id: 24, name: "Куртка кожаная мужская", category: "outerwear", price: 3440, size: ["M","L","XL"], color: "чёрный", image: "imegesкож.jpg", images: [], desc: "Классическая косуха." },
    { id: 25, name: "Свитшот мужской", category: "t-shirts", price: 1720, size: ["S","M","L","XL","XXL"], color: "серый", image: "imegesсер.jpg", images: [], desc: "Уютный свитшот." },
    { id: 26, name: "Брюки чинос", category: "pants", price: 2000, size: ["M","L","XL"], color: "бежевый", image: "imegesчинос.jpg", images: [], desc: "Классические чинос." },
    { id: 27, name: "Пальто мужское", category: "outerwear", price: 3220, size: ["M","L","XL"], color: "синий", image: "imegesтем.jpg", images: [], desc: "Элегантное мужское пальто." },
    { id: 28, name: "Поло мужское", category: "t-shirts", price: 990, size: ["S","M","L","XL"], color: "синий", image: "imegesполо.jpg", images: [], desc: "Хлопковое поло." },
    { id: 29, name: "Костюм тройка", category: "suits", price: 5600, size: ["M","L","XL"], color: ",чёрный", image: "imegesтройка.jpg", images: [], desc: "Строгий деловой костюм." },
    { id: 30, name: "Худи мужское", category: "t-shirts", price: 2300, size: ["S","M","L","XL","XXL"], color: "чёрный", image: "imegesхуди.jpg", images: [], desc: "Повседневное худи." },
    { id: 31, name: "Шорты мужские", category: "pants", price: 1225, size: ["S","M","L","XL"], color: "серый", image: "imegesшорты.jpg", images: [], desc: "Летние шорты." },
    { id: 32, name: "Жилет утеплённый", category: "outerwear", price: 1990, size: ["M","L","XL"], color: "черный", image: "imegesжилет.jpg", images: [], desc: "Тёплый жилет." },
    { id: 33, name: "Футболка мужская", category: "tshirts", price: 1000, size: ["S","M","L","XL","XXL"], color: "белый", image: "imegesфут.jpg", images: [], desc: "Базовые футболки." },
    { id: 34, name: "Тренчкот", category: "outerwear", price: 3400, size: ["M","L","XL"], color: "бежевый", image: "imegesтренч.jpg", images: [], desc: "Классический тренчкот." },
    { id: 35, name: "Спортивные брюки", category: "pants", price: 2300, size: ["S","M","L","XL"], color: "серый", image: "imegesспор.jpg", images: [], desc: "Удобные спортивные брюки." },
    { id: 36, name: "Пижамная рубашка", category: "shirts", price: 1500, size: ["M","L","XL"], color: "синий", image: "imegesпиж.jpg", images: [], desc: "Стильная рубашка." },
    { id: 37, name: "Пуховик мужской", category: "outerwear", price: 2900, size: ["M","L","XL","XXL"], color: "синий", image: "imegesпухов.jpg", images: [], desc: "Тёплый пуховик." },
    { id: 38, name: "Водолазка", category: "t-shirts", price: 1600, size: ["S","M","L","XL"], color: "чёрный", image: "imegesвод.jpg", images: [], desc: "Классическая водолазка." },
    { id: 39, name: "Джинсы skinny", category: "pants", price: 1765, size: ["M","L","XL"], color: "синий", image: "imegesуз.jpg", images: [], desc: "Узкие джинсы." },
    { id: 40, name: "Парка мужская", category: "outerwear", price: 3400, size: ["M","L","XL"], color: "зелёныйn", image: "imegesпармуж.jpg", images: [], desc: "Утеплённая мужская парка из водоотталкивающей ткани. Для повседневной носки осенью и весной." },
    { id: 41, name: "Лонгслив", category: "t-shirts", price: 980, size: ["S","M","L","XL"], color: "серый", image: "imegesлонг.jpg", images: [], desc: "Мужской лонгслив из мягкой хлопковой ткани. Отлично сохроняет тепло." },
    { id: 42, name: "Костюм спортивный", category: "suits", price: 2700, size: ["S","M","L","XL"], color: "чёрный", image: "imegesкосспор.jpg", images: [], desc: "Универсальный спортивный костюм из мягкого трикотажа." }
   
];

// Состояния
let favorites = JSON.parse(localStorage.getItem("dc_fav")) || [];
let cart = JSON.parse(localStorage.getItem("dc_cart")) || [];
let currentCategory = "all";
let searchQuery = "";
let minPrice = 0;
let maxPrice = 50000;
let selectedSizes = [];
let selectedColors = [];

// DOM элементы
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const categorySpans = document.querySelectorAll(".categories-list span");
const resultsCountSpan = document.getElementById("resultsCount");
const favCountSpan = document.getElementById("favCount");
const cartCountSpan = document.getElementById("cartCount");
const filterPanel = document.getElementById("filterPanel");
const filterTriggerBtn = document.getElementById("filterTriggerBtn");
const closeFilterPanel = document.getElementById("closeFilterPanel");
const overlay = document.getElementById("overlay");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const sizeCheckboxes = document.querySelectorAll(".size-group input");
const colorCheckboxes = document.querySelectorAll(".color-group input");

// Функция фильтрации
function filterProducts() {
    let filtered = products.filter(p => {
        if (currentCategory !== "all" && p.category !== currentCategory) return false;
        if (p.price < minPrice || p.price > maxPrice) return false;
        if (selectedSizes.length > 0 && !p.size.some(s => selectedSizes.includes(s))) return false;
        if (selectedColors.length > 0 && !selectedColors.includes(p.color)) return false;
        if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
    });
    renderProducts(filtered);
    resultsCountSpan.innerText = filtered.length + " товаров";
}

function renderProducts(productsArray) {
    if (!productsArray.length) {
        productsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">Ничего не найдено </div>`;
        return;
    }
    productsGrid.innerHTML = productsArray.map(p => {
        const isFav = favorites.includes(p.id);
        const cartItem = cart.find(i => i.id === p.id);
        const qty = cartItem ? cartItem.qty : 0;
        const categoryName = {
            dresses: "Платья", tops: "Топы и блузы", outerwear: "Верхняя одежда", pants: "Брюки", skirts: "Юбки", shirts: "Рубашки", suits: "Костюмы", tshirts: "Футболки и кофты"
        }[p.category] || p.category;
        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-title">${p.name}</div>
                    <div class="product-category">${categoryName}</div>
                    <div class="product-price">${p.price.toLocaleString()} ₽</div>
                    <div class="card-buttons">
                        <button class="btn-card btn-fav ${isFav ? 'active' : ''}" data-id="${p.id}"><i class="fa${isFav ? 's' : 'r'} fa-heart"></i></button>
                        <button class="btn-card btn-cart" data-id="${p.id}">${qty > 0 ? `В корзине (${qty})` : 'В корзину'}</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-fav') || e.target.closest('.btn-cart')) return;
            const id = parseInt(card.dataset.id);
            openProductModal(id);
        });
    });
    attachProductButtons();
}

function attachProductButtons() {
    document.querySelectorAll('.btn-fav').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFav(parseInt(btn.dataset.id));
        });
    });
    document.querySelectorAll('.btn-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });
}

// Страница товара
let currentModal = null;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    if (currentModal) currentModal.remove();
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    const categoryName = {
        dresses: "Платья", tops: "Топы", outerwear: "Верхняя одежда", pants: "Брюки", skirts: "Юбки", shirts: "Рубашки", suits: "Костюмы", tshirts: "Футболки и кофты"
    }[product.category] || product.category;
    modal.innerHTML = `
        <button class="modal-close"><i class="fas fa-times"></i></button>
        <div class="modal-content">
            <div class="modal-gallery">
                <img src="${product.image}" alt="${product.name}">
                ${product.images && product.images[0] ? `<img src="${product.images[0]}" alt="${product.name}" style="margin-top:10px;">` : ''}
            </div>
            <div class="modal-info">
                <h2>${product.name}</h2>
                <div class="modal-price">${product.price.toLocaleString()} ₽</div><p><strong>Категория:</strong> ${categoryName}</p>
                <p><strong>Размеры:</strong> ${product.size.join(', ')}</p>
                <p><strong>Цвет:</strong> ${product.color}</p>
                <p><strong>Описание:</strong> ${product.desc}</p>
                <div class="card-buttons" style="margin-top:20px;">
                    <button class="btn-card btn-fav ${favorites.includes(product.id) ? 'active' : ''}" data-id="${product.id}"><i class="fa${favorites.includes(product.id) ? 's' : 'r'} fa-heart"></i> Избранное</button>
                    <button class="btn-card btn-cart" data-id="${product.id}">В корзину</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    currentModal = modal;
    setTimeout(() => modal.classList.add('open'), 10);
    modal.querySelector('.modal-close').onclick = () => {
        modal.classList.remove('open');
        setTimeout(() => modal.remove(), 300);
        currentModal = null;
    };
    modal.querySelectorAll('.btn-fav, .btn-cart').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            if (btn.classList.contains('btn-fav')) toggleFav(parseInt(btn.dataset.id));
            else addToCart(parseInt(btn.dataset.id));
            if (btn.classList.contains('btn-fav')) {
                const newActive = favorites.includes(product.id);
                btn.innerHTML = `<i class="fa${newActive ? 's' : 'r'} fa-heart"></i> Избранное`;
                btn.classList.toggle('active', newActive);
            }
            filterProducts();
        };
    });
}

// Избранное
function toggleFav(id) {
    if (favorites.includes(id)) favorites = favorites.filter(f => f !== id);
    else favorites.push(id);
    localStorage.setItem("dc_fav", JSON.stringify(favorites));
    updateBadges();
    filterProducts();
    renderFavPanel();
}

// Корзина
function addToCart(id) {
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ id, qty: 1 });
    localStorage.setItem("dc_cart", JSON.stringify(cart));
    updateBadges();
    filterProducts();
    renderCartPanel();
}

function changeQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
        const newQty = cart[idx].qty + delta;
        if (newQty <= 0) cart.splice(idx, 1);
        else cart[idx].qty = newQty;
    }
    localStorage.setItem("dc_cart", JSON.stringify(cart));
    updateBadges();
    renderCartPanel();
    filterProducts();
}

function renderCartPanel() {
    const cartItemsList = document.getElementById("cartItemsList");
    const cartTotalSpan = document.getElementById("cartTotal");
    const cartTotalBlock = document.getElementById("cartTotalBlock");
    if (!cart.length) {
        cartItemsList.innerHTML = `<div class="empty-message">Корзина пуста</div>`;
        cartTotalBlock.style.display = "none";
        return;
    }
    let total = 0;
    cartItemsList.innerHTML = cart.map(item => {
        const prod = products.find(p => p.id === item.id);
        total += prod.price * item.qty;
        return `
            <div class="cart-item">
                <div><b>${prod.name}</b> x ${item.qty} 
${(prod.price * item.qty).toLocaleString()} ₽</div>
                <div>
                    <button class="cart-qty-btn" data-id="${item.id}" data-delta="-1">-</button>
                    <span style="margin:0 8px;">${item.qty}</span>
                    <button class="cart-qty-btn" data-id="${item.id}" data-delta="1">+</button>
                </div>
            </div>
        `;
    }).join('');
    cartTotalSpan.innerText = total.toLocaleString();
    cartTotalBlock.style.display = "block";
    document.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.onclick = () => changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
}

function renderFavPanel() {
    const favItemsList = document.getElementById("favItemsList");
    const favProducts = products.filter(p => favorites.includes(p.id));
    if (!favProducts.length) {
        favItemsList.innerHTML = `<div class="empty-message">Нет избранных товаров </div>`;
        return;
    }
    favItemsList.innerHTML = favProducts.map(p => `
        <div class="cart-item">
            <div><b>${p.name}</b>
${p.price.toLocaleString()} ₽</div>
            <button class="remove-fav-item" data-id="${p.id}" style="background:none;border:none;color:var(--primary);cursor:pointer;"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    document.querySelectorAll('.remove-fav-item').forEach(btn => {
        btn.onclick = () => {
            favorites = favorites.filter(f => f !== parseInt(btn.dataset.id));
            localStorage.setItem("dc_fav", JSON.stringify(favorites));
            updateBadges();
            renderFavPanel();
            filterProducts();
        };
    });
}

function updateBadges() {
    favCountSpan.innerText = favorites.length;
    const totalItems = cart.reduce((acc, i) => acc + i.qty, 0);
    cartCountSpan.innerText = totalItems;
}

// Фильтры
function initFilters() {
    searchInput.addEventListener('input', () => {
        searchQuery = searchInput.value;
        filterProducts();
    });
    categorySpans.forEach(span => {
        span.addEventListener('click', () => {
            categorySpans.forEach(s => s.classList.remove('cat-active'));
            span.classList.add('cat-active');
            currentCategory = span.dataset.cat;
            filterProducts();
        });
    });
    minPriceInput.addEventListener('input', () => {
        minPrice = parseInt(minPriceInput.value) || 0;
        filterProducts();
    });
    maxPriceInput.addEventListener('input', () => {
        maxPrice = parseInt(maxPriceInput.value) || 50000;
        filterProducts();
    });
    sizeCheckboxes.forEach(cb => cb.addEventListener('change', () => {
        selectedSizes = Array.from(sizeCheckboxes).filter(ch => ch.checked).map(ch => ch.value);
        filterProducts();
    }));
    colorCheckboxes.forEach(cb => cb.addEventListener('change', () => {
        selectedColors = Array.from(colorCheckboxes).filter(ch => ch.checked).map(ch => ch.value);
        filterProducts();
    }));
    resetFiltersBtn.addEventListener('click', () => {
        minPriceInput.value = 0; maxPriceInput.value = 50000;
        sizeCheckboxes.forEach(cb => cb.checked = false);
        colorCheckboxes.forEach(cb => cb.checked = false);
        selectedSizes = []; selectedColors = [];
        minPrice = 0; maxPrice = 50000;
        searchInput.value = ""; searchQuery = "";
        currentCategory = "all";
        categorySpans.forEach(s => s.classList.remove('cat-active'));
        document.querySelector('[data-cat="all"]').classList.add('cat-active');
        filterProducts();
    });
}

// Панели
function openPanel(panel) { 
    panel.classList.add('open'); 
    overlay.classList.add('active');
}

function closePanel(panel) { 
    panel.classList.remove('open'); 
    overlay.classList.remove('active');
}

filterTriggerBtn.onclick = () => openPanel(filterPanel);
closeFilterPanel.onclick = () => closePanel(filterPanel);

document.getElementById("favoritesBtn").onclick = () => { 
    renderFavPanel(); 
    openPanel(document.getElementById("favoritesPanel"));
};

document.getElementById("cartBtn").onclick = () => { 
    renderCartPanel(); 
    openPanel(document.getElementById("cartPanel"));
};

document.getElementById("closeCartPanel").onclick = () => closePanel(document.getElementById("cartPanel"));
document.getElementById("closeFavPanel").onclick = () => closePanel(document.getElementById("favoritesPanel"));

overlay.onclick = () => {
    closePanel(filterPanel);
    closePanel(document.getElementById("cartPanel"));
    closePanel(document.getElementById("favoritesPanel"));
};

document.getElementById("checkoutBtn").onclick = () => {
    if (!cart.length) {
        alert("Корзина пуста");
        return;
    }

    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    let paymentMessage = "";
    
    if (selectedPayment && selectedPayment.value === "online") {
        paymentMessage = "Оплата онлайн — после подтверждения заказа вы перейдёте на страницу оплаты.";
    } else {
        paymentMessage = "Оплата при получении — вы сможете расплатиться наличными или картой курьеру.";
    }

    alert(`Спасибо за заказ! ${paymentMessage} Наш менеджер свяжется с вами для подтверждения.`);

    cart = [];
    localStorage.setItem("dc_cart", JSON.stringify(cart));
    updateBadges();
    renderCartPanel();
    filterProducts();
    closePanel(document.getElementById("cartPanel"));
};

// Запуск
initFilters();
renderCartPanel();
renderFavPanel();
updateBadges();
filterProducts();