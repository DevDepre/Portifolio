document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".my-projects .projects");

    projects.forEach((project, index) => {
        if (index % 2 === 0) {
            project.classList.add("left");
        } else {
            project.classList.add("right");
        }

        const icons = project.querySelectorAll(".myproject-icon");
        icons.forEach((icon) => {
            icon.style.opacity = 0;
            icon.style.transform = "translateY(30px)";
        });
    });

    const projectObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const icons = entry.target.querySelectorAll(".myproject-icon");

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    setTimeout(() => {
                        icons.forEach((icon, index) => {
                            icon.style.animation = `slideUp 0.5s ease forwards`;
                            icon.style.animationDelay = `${index * 0.15}s`;
                        });
                    }, 800);
                } else {
                    entry.target.classList.remove("visible");

                    icons.forEach((icon) => {
                        icon.style.opacity = 0;
                        icon.style.transform = "translateY(30px)";
                        icon.style.animation = "none";
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    projects.forEach((el) => projectObserver.observe(el));
});
