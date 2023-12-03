const productImage = document.getElementById('productImage');
let currentImageIndex = 1;
const totalImages = 34; // Adjust this based on the total number of images

productImage.addEventListener('mousedown', (e) => {
  e.preventDefault();
  productImage.style.cursor = 'grabbing';

  const start = e.clientX;

  const moveHandler = (e) => {
    const difference = start - e.clientX;
    const rotatePercentage = (difference / productImage.clientWidth) * 100;

    const nextImageIndex = (currentImageIndex + Math.round(rotatePercentage / (100 / totalImages))) % totalImages;
    productImage.src = `images/kymco-${nextImageIndex + 1}.png`; // Adjust the filename pattern

    start = e.clientX;
  };

  const upHandler = () => {
    document.removeEventListener('mousemove', moveHandler);
    document.removeEventListener('mouseup', upHandler);

    productImage.style.cursor = 'grab';

    currentImageIndex = (currentImageIndex + Math.round((start - e.clientX) / (productImage.clientWidth / totalImages))) % totalImages;
  };

  document.addEventListener('mousemove', moveHandler);
  document.addEventListener('mouseup', upHandler);
});