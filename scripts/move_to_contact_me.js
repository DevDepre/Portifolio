document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector(".button-contactme a");
    const contactSection = document.getElementById("contactme");

    if (contactBtn && contactSection) {
        contactBtn.addEventListener("click", (e) => {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
