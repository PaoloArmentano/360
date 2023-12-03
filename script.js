const productContainer = document.getElementById('product-container');
const productImages = document.getElementById('product-images');

let isDragging = false;
let startPointX;
let currentImageIndex = 0;

productContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPointX = e.clientX;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const moveX = e.clientX - startPointX;
    const percentageMoved = moveX / productContainer.offsetWidth;

    currentImageIndex -= Math.round(percentageMoved);

    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    } else if (currentImageIndex >= productImages.children.length) {
        currentImageIndex = productImages.children.length - 1;
    }

    productImages.style.transform = `translateX(-${currentImageIndex * 100}%)`;

    startPointX = e.clientX;
});