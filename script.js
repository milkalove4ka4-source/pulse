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

const slider = document.getElementById('compare-slider');
const foregroundImage = document.querySelector('.image-foreground');
const sliderButton = document.getElementById('slider-btn');

if(slider && foregroundImage && sliderButton) {
    slider.addEventListener('input', (e) => {
        const sliderValue = e.target.value;
        foregroundImage.style.width = `${sliderValue}%`;
        sliderButton.style.left = `${sliderValue}%`;
    });
}
