let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let autoPlayInterval;
let userInteractionTimeout;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const offset = -100 * index;
    carousel.style.transform = `translateX(${offset}%)`;

    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
    resetAutoPlay();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
    resetAutoPlay();
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    clearTimeout(userInteractionTimeout);

    userInteractionTimeout = setTimeout(() => {
        startAutoPlay();
    }, 10000);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}

startAutoPlay();
