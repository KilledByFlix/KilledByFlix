const indicators = document.getElementsByClassName("indicator");

indicators[0].classList.add("active");

const slides = document.getElementsByClassName("slide");

slides[0].classList.add("active");

let currentIndex = 0;

function toggleSlide(count) {
    let newIndex = currentIndex + count;
    if (newIndex < 0) {
    newIndex = slides.length - 1;
    }
    if (newIndex >= slides.length) {
    newIndex = 0;
    }
    goToSlide(newIndex);
}

function goToSlide(newIndex) {
    indicators[currentIndex].classList.remove("active");
    slides[currentIndex].classList.remove("active");
    indicators[newIndex].classList.add("active");
    slides[newIndex].classList.add("active");
    currentIndex = newIndex;
}