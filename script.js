```javascript
// Переключатели меню функций
document.querySelectorAll('.feature-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const parentItem = this.closest('.feature-item');
        if (this.checked) {
            parentItem.classList.add('active-glow');
        } else {
            parentItem.classList.remove('active-glow');
        }
    });
});

// Живой поиск
const searchInput = document.getElementById('menu-search');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.feature-item').forEach(item => {
            const featureName = item.getAttribute('data-name') || '';
            if (featureName.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Вкладки меню
document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Слайдер качества
const slider = document.getElementById('compare-slider');
const foregroundImage = document.querySelector('.image-foreground');
const sliderButton = document.getElementById('slider-btn');

if (slider && foregroundImage && sliderButton) {
    slider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        foregroundImage.style.width = `${sliderValue}%`;
        sliderButton.style.left = `${sliderValue}%`;
    });
}

// --- ЛОГИКА СВЕЖЕГО ВСПЛЫВАЮЩЕГО МЕНЮ (МОДАЛКА) ---
const modal = document.getElementById('custom-menu-modal');
const btnHelp = document.getElementById('open-modal-btn');
const btnDiscord = document.getElementById('open-discord-btn');
const btnClose = document.getElementById('close-modal-btn');

const modalTitle = document.getElementById('modal-title-text');
const modalDesc = document.getElementById('modal-desc-text');
const modalBadge = document.getElementById('modal-username-badge');

// Открытие при клике на "Помощь"
if (btnHelp && modal) {
    btnHelp.addEventListener('click', () => {
        modalTitle.textContent = "Раздел помощи";
        modalDesc.textContent = "Вы открыли меню технической поддержки Pulse. Если у вас возникли трудности с установкой мода или его запуском — мы готовы подсказать решение.";
        modalBadge.textContent = "Статус: Онлайн";
        modal.classList.add('active');
    });
}

// Открытие при клике на "Discord"
if (btnDiscord && modal) {
    btnDiscord.addEventListener('click', () => {
        const username = btnDiscord.getAttribute('data-username');
        modalTitle.textContent = "Наш Discord";
        modalDesc.textContent = "Свяжитесь с нами напрямую! Скопируйте наш официальный юзернейм ниже и отправьте запрос в друзья в приложении Discord.";
        modalBadge.textContent = `Логин: ${username}`;
        modal.classList.add('active');
    });
}

// Закрытие при клике на крестик
if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// Закрытие при клике в любую пустую область экрана вокруг окошка
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}
