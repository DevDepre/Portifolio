const btnCertificates = document.querySelector(".button-certificates");
const btnTechStack = document.querySelector(".button-techstack");

const sectionCertificates = document.querySelector(".certificates");
const sectionTechStack = document.querySelector(".techstack");

let activeSection = "techstack";
sectionCertificates.classList.remove("active");
sectionTechStack.classList.add("active");

function switchSection(target) {
    if (target === activeSection) return;

    if (target === "certificates") {
        sectionTechStack.classList.remove("slide-in-right", "active");
        sectionTechStack.classList.add("slide-out-right");

        sectionCertificates.classList.remove("slide-out-left");
        sectionCertificates.classList.add("slide-in-left", "active");

        btnCertificates.style.backgroundColor = "#ffffff";
        btnTechStack.style.backgroundColor = "#adb5bdff";
    } else {
        sectionCertificates.classList.remove("slide-in-left", "active");
        sectionCertificates.classList.add("slide-out-left");

        sectionTechStack.classList.remove("slide-out-right");
        sectionTechStack.classList.add("slide-in-right", "active");

        btnTechStack.style.backgroundColor = "#ffffff";
        btnCertificates.style.backgroundColor = "#adb5bdff";
    }

    activeSection = target;
}

btnCertificates.addEventListener("click", () => switchSection("certificates"));
btnTechStack.addEventListener("click", () => switchSection("techstack"));
