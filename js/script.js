const images = [
    '/img/86015-416.jpg',
    '/img/anBn.png',  
    '/img/einar.png',
    '/img/st.png',
    '/img/pt.png'

];

const showcaseImage = document.getElementById('shocase1');
const leftButton = document.getElementById('leftbutton');
const rightButton = document.getElementById('rightbutton');

let currentIndex = 0;

function updateImage() {
    showcaseImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', prevImage);

document.addEventListener('DOMContentLoaded', updateImage);