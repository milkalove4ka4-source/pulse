// Интерактивное включение/выключение функций и подсветка строчки
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

// Живой поиск по функциям
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

// Логика работы вкладок (Visuals, HUD, Utilities)
document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        // Здесь можно добавить фильтрацию по категориям, если потребуется в будущем
    });
});

// Логика слайдера сравнения качества
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
