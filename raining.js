// Create raindrops
const totalDrops = 200;
for (let i = 0; i < totalDrops; i++) {
  const drop = document.createElement("div");
  drop.classList.add("rain");
  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(drop);
}

// Create stars
const starField = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  starField.appendChild(star);
}

// Create fireflies
for (let i = 0; i < 15; i++) {
  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  firefly.style.left = `${Math.random() * 100}vw`;
  firefly.style.bottom = `${Math.random() * 40}vh`;
  firefly.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.body.appendChild(firefly);
}
