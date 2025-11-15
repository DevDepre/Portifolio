const icons = document.querySelectorAll(".social-midia-header a");

icons.forEach((icon) => {
    let offsetX = Math.random() * 1000;
    let offsetY = Math.random() * 1000;
    let speed = 0.015 + Math.random() * 0.002; // cada ícone tem velocidade diferente
    let rotation = 0;

    function animate() {
        // movimento suavizado tipo onda
        const x = Math.sin(offsetX) * 5;
        const y = Math.cos(offsetY) * 5;
        rotation = Math.sin(offsetX * 1.5) * 10;

        icon.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        offsetX += speed;
        offsetY += speed * 2.2;

        requestAnimationFrame(animate);
    }

    animate();
});
