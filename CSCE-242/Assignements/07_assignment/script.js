// Elements
const exercise1Link = document.getElementById('exercise1Link');
const exercise2Link = document.getElementById('exercise2Link');
const colorSliderSection = document.getElementById('colorSliderSection');
const pictureChooserSection = document.getElementById('pictureChooserSection');
const colorSlider = document.getElementById('colorSlider');
const colorMessage = document.getElementById('colorMessage');
const smallButton = document.getElementById('smallButton');
const mediumButton = document.getElementById('mediumButton');
const largeButton = document.getElementById('largeButton');
const imageDisplay = document.getElementById('imageDisplay');

// Function to toggle sections
exercise1Link.addEventListener('click', () => {
    colorSliderSection.classList.remove('hidden');
    pictureChooserSection.classList.add('hidden');
});

exercise2Link.addEventListener('click', () => {
    pictureChooserSection.classList.remove('hidden');
    colorSliderSection.classList.add('hidden');
});

// Color Slider functionality
colorSlider.addEventListener('input', function() {
    const redValue = colorSlider.value;
    document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    if (redValue < 85) {
        colorMessage.textContent = "Chill";
    } else if (redValue < 170) {
        colorMessage.textContent = "Warm";
    } else {
        colorMessage.textContent = "Hot";
    }
});

// Picture Chooser functionality
const baseURL = "https://picsum.photos/";
smallButton.addEventListener('click', () => {
    showImage('200');
});

mediumButton.addEventListener('click', () => {
    showImage('400');
});

largeButton.addEventListener('click', () => {
    showImage('600');
});

function showImage(size) {
    imageDisplay.innerHTML = `<img src="${baseURL}${size}" alt="Random Image">`;
}