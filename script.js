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

// Подмена текста на кнопке Дискорда при наведении мыши
const discordBtn = document.querySelector('.btn-discord');
if (discordBtn) {
    const originalText = discordBtn.textContent;
    const username = discordBtn.getAttribute('data-username');

    discordBtn.addEventListener('mouseenter', () => {
        discordBtn.textContent = username;
    });

    discordBtn.addEventListener('mouseleave', () => {
        discordBtn.textContent = originalText;
    });
}
