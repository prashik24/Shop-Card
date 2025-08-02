const carouselSlides = document.querySelector(".slides");
let isTransitioning = false;

function slideNext() {
  if (!isTransitioning) {
    isTransitioning = true;
    const firstSlide = carouselSlides.firstElementChild;
    const slideWidth = firstSlide.offsetWidth;
    carouselSlides.style.transition = "transform 0.5s ease";
    carouselSlides.style.transform = `translateX(-${slideWidth}px)`;

    setTimeout(() => {
      carouselSlides.style.transition = "none";
      carouselSlides.style.transform = "translateX(0)";
      carouselSlides.appendChild(firstSlide);
      isTransitioning = false;
    }, 500);
  }
}

// Change slide every 1 second
setInterval(slideNext, 1000);
