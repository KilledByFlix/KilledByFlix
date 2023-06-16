let currentSlideIndex = 0;

const slides = document.getElementsByClassName("slide");
const indicators = document.getElementsByClassName("indicator");

let timer;

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    }
    slides[n].style.opacity = 1;
    updateIndicators(n);
    currentSlideIndex = n;
}

function switchSlide(n) {
    let newIndex = currentSlideIndex + n;
    if (newIndex < 0) {
    newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
    newIndex = 0;
    }
    showSlide(newIndex);
}

function goToSlide(n) {
    showSlide(n);
}

function updateIndicators(n) {
    for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
    }
    indicators[n].classList.add("active");
}

function startTimer() {
    timer = setInterval(() => {
    switchSlide(1);
    }, 5000);
}

function stopTimer() {
    clearInterval(timer);
}

showSlide(currentSlideIndex);
startTimer();