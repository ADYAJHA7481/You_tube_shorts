const toggleBtn = 
document.querySelector('.toggle-btn');
const body = document.body;
const rainContainer =
 document.querySelector('.rain');
const rainbow = 
document.querySelector('.rainbow');
const container =
 document.querySelector(".bee-container");

function random(min, max) {
  return Math.random() * 
  (max - min) + min;
}

function createBee(index) {
  const bee = 
  document.createElement("div");
  bee.classList.add("bee");

  
  bee.style.top = 
  `${random(0, window.innerHeight - 20)}px`;
  bee.style.left =
  `${random(0, window.innerWidth - 20)}px`;

  const animName = `fly${index}`;
  const keyframes = `
    @keyframes ${animName} {
      0%   { transform: translate(0, 0) 
      rotate(0deg); }
      25%  { transform: translate(
      ${random(30, 100)}px, ${random(-50, 50)}px)
       rotate(15deg); }
      50%  { transform: translate(
      ${random(-100, 100)}px, 
      ${random(-50, 50)}px) 
      rotate(-10deg); }
      75%  { transform: translate
      (${random(-50, -100)}px,
       ${random(-50, 50)}px) 
       rotate(10deg); }
      100% { transform: translate(0, 0)
       rotate(0deg); }
    }
  `;

  const styleSheet = 
  document.styleSheets[0];
  styleSheet.insertRule
  (keyframes, styleSheet.cssRules.length);

  bee.style.animation = `${animName}
   ${random(8, 14)}s infinite ease-in-out`;
  container.appendChild(bee);
}

// Create 6 bees
for (let i = 0; i < 6; i++) {
  createBee(i);
}
 

// Create raindrops 
function createRaindrops() {
  for (let i = 0; i < 100; i++) {
    const drop =
     document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left =
     Math.random() * 100 + '%';
    drop.style.animationDuration = 
    (0.5 + Math.random() * 1) + 's';
    drop.style.animationDelay = 
    (Math.random() * 10) + 's';
    rainContainer.appendChild(drop);
  }
}

createRaindrops();

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('night');
  if (body.classList.contains('night')) {
    toggleBtn.textContent = 'Switch to Day';
    rainContainer.style.display = 'block';
    rainbow.style.opacity = 0;
  } else {
    toggleBtn.textContent = 'Switch to Night';
    rainContainer.style.display = 'none';
    rainbow.style.animation = 'none';
    void rainbow.offsetWidth;
    rainbow.style.animation = 
    'rainbowFade 10s ease forwards';
  }
});
