let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const labelTitle = document.getElementById('label-title');
const labelDescription = document.getElementById('label-description');
let slideInterval;


const slideContent = [
  { title: "Sustainability", description: "We’re committed to the holistic integration of sustainable practices within the built environment." },
  { title: "Innovation", description: "Construction is ready for a technology revolution." },
  { title: "Plan + Control", description: "Suffolk’s pioneering process combines methodical planning, new standards, and a team-oriented modeling approach." },
  { title: "Design Management", description: "Our in-house design and design-management team partners with clients, designers, and Suffolk’s operations teams to deliver projects in a variety of sectors." }
];

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
}
function stopSlideShow() {
  clearInterval(slideInterval);
}

function createPagination() {
  const paginationContainer = document.querySelector('.pagination');

  for (let i = 0; i < totalSlides; i++) {
    const span = document.createElement('span');
    span.addEventListener('click', () => goToSlide(i));
    paginationContainer.appendChild(span);
  }
}

function resetProgressBar() {
  const progressBarContainer = document.querySelector('.progress-bar-container');

  progressBarContainer.innerHTML = '<div class="progress-bar"></div>';

  setTimeout(() => {
    document.querySelector('.progress-bar').style.width = '100%';
  }, 10);
}

function resetTimer() {
  clearInterval(slideInterval);

  slideInterval = setInterval(nextSlide, 10000);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  
  updateSlidePosition();
  updateLabelContent();
  resetProgressBar();
  updatePagination();
}

function goToSlide(slideIndex) {
  stopSlideShow(); // Stop the current slide interval
  currentIndex = slideIndex;
  updateSlidePosition();
  updateLabelContent();
  resetProgressBar();
  updatePagination();
  startSlideShow(); // Start a new slide interval
  resetTimer();
}

function updateLabelContent() {
  const content = slideContent[currentIndex];
  const label = document.querySelector('.slide-label');
  label.style.maxHeight = '0'; // Shrink label

  setTimeout(() => {
    labelTitle.textContent = content.title;
    labelDescription.textContent = content.description;
    sliderButton.href = content.url;
    
    label.style.maxHeight = '100px'; // Expand label
    label.style.opacity = 1;
  }, 1000);
}

function updateSlidePosition() {
  const offset = currentIndex * -100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function updateLabelContent() {
  const content = slideContent[currentIndex];
  labelTitle.style.opacity = 0;
  labelDescription.style.opacity = 0;
  labelDescription.style.maxHeight = "0";

  setTimeout(() => {
    labelTitle.textContent = content.title;
    labelDescription.innerHTML = content.description;
    labelTitle.style.opacity = 1;
    labelDescription.style.opacity = 1;
    labelDescription.style.maxHeight = "100px";
  }, 1000);
}

function updatePagination() {
  const dots = document.querySelectorAll('.pagination span');
  dots.forEach((dot, index) => {
    dot.classList[index === currentIndex ? 'add' : 'remove']('active');
  });
}

createPagination();
updatePagination();
resetProgressBar();
slideInterval = setInterval(nextSlide, 10000);

