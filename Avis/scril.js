let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  let slideWidth = slides[0].clientWidth; // Obtention de la largeur d'un slide
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  document.getElementById('slider').style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
}

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

// Appel initial pour afficher le premier slide
document.addEventListener("DOMContentLoaded", showSlides);
