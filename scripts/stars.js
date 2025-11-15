const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.id = 'starsCanvas';
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-1';
canvas.style.width = '100%';
canvas.style.height = '100%';

const ctx = canvas.getContext('2d');

let starsArray = [];
const numStars = 250;

// Ajusta o canvas ao tamanho da tela
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Cria estrelas
for (let i = 0; i < numStars; i++) {
    starsArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 1.5 + 0.5, // Aumentei a velocidade
        opacity: Math.random(),
        deltaOpacity: Math.random() * 0.02
    });
}

// Animação
function animateStars() {
    // Fundo totalmente preto
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let star of starsArray) {
        // Brilho das estrelas (twinkle)
        star.opacity += star.deltaOpacity;
        if (star.opacity > 1 || star.opacity < 0) star.deltaOpacity = -star.deltaOpacity;

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move as estrelas para baixo
        star.y += star.speed;

        // Se sair da tela, volta para o topo
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(animateStars);
}

animateStars();
