const W = window.innerWidth;
const H = window.innerHeight;

function setupCanvas(id) {
  const canvas = document.getElementById(id);
  canvas.width = W;
  canvas.height = H;
  return canvas.getContext('2d');
}

const starsCtx = setupCanvas('starsCanvas');
const moonCtx = setupCanvas('moonCanvas');
const cloudCtx = setupCanvas('cloudCanvas');
const grassCtx = setupCanvas('grassCanvas');

// --- Stars ---
const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  r: Math.random() * 2,
  o: Math.random()
}));

function drawStars() {
  starsCtx.fillStyle = "black";
  starsCtx.fillRect(0, 0, W, H);
  stars.forEach(s => {
    s.o += (Math.random() - 0.5) * 0.05;
    s.o = Math.max(0.2, Math.min(1, s.o));
    starsCtx.beginPath();
    starsCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    starsCtx.fillStyle = `rgba(255,255,255,${s.o})`;
    starsCtx.fill();
  });
  requestAnimationFrame(drawStars);
}

// --- Moon ---
function drawMoon() {
  let angle = 0;
  function animate() {
    moonCtx.clearRect(0, 0, W, H);
    const x = W * 0.8 + 50 * Math.sin(angle);
    const y = H * 0.2 + 20 * Math.cos(angle);
    angle += 0.001;

    const glow = moonCtx.createRadialGradient(x, y, 10, x, y, 60);
    glow.addColorStop(0, "rgba(255,255,200,0.8)");
    glow.addColorStop(1, "rgba(255,255,200,0)");

    moonCtx.fillStyle = glow;
    moonCtx.beginPath();
    moonCtx.arc(x, y, 60, 0, Math.PI * 2);
    moonCtx.fill();

    moonCtx.fillStyle = "white";
    moonCtx.beginPath();
    moonCtx.arc(x, y, 25, 0, Math.PI * 2);
    moonCtx.fill();

    requestAnimationFrame(animate);
  }
  animate();
}

// --- Clouds ---
const clouds = Array.from({ length: 5 }, () => ({
  x: Math.random() * W,
  y: 50 + Math.random() * 100,
  speed: 0.1 + Math.random() * 0.3,
  size: 100 + Math.random() * 80
}));

function drawClouds() {
  cloudCtx.clearRect(0, 0, W, H);
  cloudCtx.fillStyle = "rgba(255, 255, 255, 0.05)";
  clouds.forEach(c => {
    c.x += c.speed;
    if (c.x > W + c.size) c.x = -c.size;
    cloudCtx.beginPath();
    cloudCtx.ellipse(c.x, c.y, c.size, 40, 0, 0, Math.PI * 2);
    cloudCtx.fill();
  });
  requestAnimationFrame(drawClouds);
}

// --- Grass ---
const blades = Array.from({ length: 300 }, () => ({
  x: Math.random() * W,
  y: H,
  len: 50 + Math.random() * 100,
  phase: Math.random() * Math.PI
}));

function drawGrass() {
  grassCtx.clearRect(0, 0, W, H);
  grassCtx.strokeStyle = "green";
  grassCtx.lineWidth = 1;
  blades.forEach(b => {
    grassCtx.beginPath();
    grassCtx.moveTo(b.x, b.y);
    const sway = Math.sin(Date.now() / 500 + b.phase) * 10;
    grassCtx.quadraticCurveTo(b.x + sway, b.y - b.len / 2, b.x, b.y - b.len);
    grassCtx.stroke();
  });
  requestAnimationFrame(drawGrass);
}

// Start animations
drawStars();
drawMoon();
drawClouds();
drawGrass();
