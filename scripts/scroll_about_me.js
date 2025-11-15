document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.querySelector(".text-aboutme");
    const profilePhoto = document.querySelector(".profile-photo");
    const buttons = document.querySelector(".buttons-aboutme");

    const elements = [aboutText, profilePhoto, buttons];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => {
        if (el) observer.observe(el);
    });
});
