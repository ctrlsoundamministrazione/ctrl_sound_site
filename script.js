// Effetto fumo animato (canvas)
const canvas = document.getElementById("smoke-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 50 + 20,
    d: Math.random() * 0.8 + 0.2,
  });
}

function drawSmoke() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gradiente di sfondo
  const gradient = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 1.2
  );
  gradient.addColorStop(0, "rgba(80,80,80,0.15)");
  gradient.addColorStop(1, "rgba(20,20,20,0.05)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Particelle di fumo
  ctx.fillStyle = "rgba(120,120,120,0.08)";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += Math.sin(p.d) * 0.3;
    p.y -= p.d * 0.5;

    if (p.y + p.r < 0) {
      p.y = canvas.height + p.r;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawSmoke);
}

drawSmoke();

// Gestione preloader
const introOverlay = document.getElementById("intro-overlay");

if (!sessionStorage.getItem("introPlayed")) {
  sessionStorage.setItem("introPlayed", "true");
  setTimeout(() => {
    introOverlay.style.display = "none";
  }, 5000); // scompare dopo 5 secondi
} else {
  introOverlay.style.display = "none";
}

