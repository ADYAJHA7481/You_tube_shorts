// Generate static stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 20}s`;
  starsContainer.appendChild(star);
}

// Clock update 
const clockElem = document.getElementById("clock");
function updateClock() {
  const now = new Date();
  clockElem.textContent = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

// Generate shooting stars
const shootingStarsContainer = document.getElementById('shooting-stars');
function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');
  star.style.top = `${Math.random() * 50}%`;
  star.style.left = `${Math.random() * 50}%`;
  shootingStarsContainer.appendChild(star);
  setTimeout(() => shootingStarsContainer.removeChild(star), 3000);
}
setInterval(createShootingStar, 5000);

// Audio control
const bgMusic = document.getElementById("bgMusic");
function toggleAudio(event) {
  if (bgMusic.paused) {
    bgMusic.play();
    event.target.textContent = "Pause Music";
  } else {
    bgMusic.pause();
    event.target.textContent = "Play Music";
  }
}
