// Старый скрипт для тумблеров меню
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

// НОВЫЙ СКАРИПТ: Логика для ползунка сравнения
const slider = document.getElementById('compare-slider');
const foregroundImage = document.querySelector('.image-foreground');
const sliderButton = document.getElementById('slider-btn');

slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    
    // Меняем ширину верхнего (HD) слоя в процентах
    foregroundImage.style.width = `${sliderValue}%`;
    
    // Двигаем красивую линию с кнопкой вслед за ползунком
    sliderButton.style.left = `${sliderValue}%`;
});
