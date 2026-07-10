```javascript
// Функция инициализации всех скриптов
document.addEventListener('DOMContentLoaded', () => {

    // СВЕЧЕНИЕ СТРОК: Привязываем логику ко всем чекбоксам
    const checkboxes = document.querySelectorAll('.feature-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        // Проверяем начальное состояние при загрузке страницы
        const parentItem = checkbox.closest('.feature-item');
        if (checkbox.checked && parentItem) {
            parentItem.classList.add('active-glow');
        }

        // Слушаем клики
        checkbox.addEventListener('change', function() {
            const currentParent = this.closest('.feature-item');
            if (currentParent) {
                if (this.checked) {
                    currentParent.classList.add('active-glow');
                } else {
                    currentParent.classList.remove('active-glow');
                }
            }
        });
    });

    // ПОЛЗУНОК КАЧЕСТВА: Логика движения шторки
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

    // ЖИВОЙ ПОИСК
    const searchInput = document.getElementById('menu-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            document.querySelectorAll('.features-grid .feature-item').forEach(item => {
                const featureName = item.getAttribute('data-name') || '';
                if (featureName.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // ВКЛАДКИ МЕНЮ
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ОКНО ПОДДЕРЖКИ (МОДАЛКА)
    const modal = document.getElementById('custom-menu-modal');
    const navSupportBtn = document.getElementById('nav-support-btn'); 
    const btnHelp = document.getElementById('open-modal-btn');
    const btnDiscord = document.getElementById('open-discord-btn');
    const btnClose = document.getElementById('close-modal-btn');

    const modalTitle = document.getElementById('modal-title-text');
    const modalDesc = document.getElementById('modal-desc-text');
    const modalBadge = document.getElementById('modal-username-badge');

    function openSupportModal() {
        if (modal) {
            modalTitle.textContent = "Раздел помощи";
            modalDesc.textContent = "Вы открыли меню технической поддержки Pulse. Если у вас возникли трудности с установкой мода или его запуском — мы готовы подсказать решение.";
            modalBadge.textContent = "Статус: Онлайн";
            modal.classList.add('active');
        }
    }

    if (navSupportBtn) {
        navSupportBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            openSupportModal();
        });
    }

    if (btnHelp) {
        btnHelp.addEventListener('click', openSupportModal);
    }

    if (btnDiscord) {
        btnDiscord.addEventListener('click', () => {
            if (modal) {
                const username = btnDiscord.getAttribute('data-username');
                modalTitle.textContent = "Наш Discord";
                modalDesc.textContent = "Свяжитесь с нами напрямую! Скопируйте наш официальный юзернейм ниже и отправьте запрос в друзья в приложении Discord.";
                modalBadge.textContent = `Логин: ${username}`;
                modal.classList.add('active');
            }
        });
    }

    if (btnClose) {
        btnClose.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    // ХОВЕР АНИМАЦИЯ: Смена текста для кнопок Discord
    document.querySelectorAll('.btn-discord').forEach(btn => {
        const originalText = btn.textContent;
        const username = btn.getAttribute('data-username');

        btn.addEventListener('mouseenter', () => {
            btn.textContent = username;
        });

        btn.addEventListener('mouseleave', () => {
            btn.textContent = originalText;
        });
    });
});
