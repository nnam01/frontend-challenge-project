const carouselInner = document.getElementById('carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = carouselItems.length;


function moveToNext() {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}
setInterval(moveToNext, 2000);

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 1280;
  carouselInner.style.transform = `translateX(${offset}px)`;
}
