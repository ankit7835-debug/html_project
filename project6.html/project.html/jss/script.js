document.addEventListener("DOMContentLoaded", () => {
    // Add a simple animation on page load
    const header = document.querySelector("header");
    const mainImage = document.querySelector("main img");
    const buttons = document.querySelectorAll("a");

    // Fade-in header
    header.style.opacity = 0;
    header.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 100);

    // Slide-in image
    mainImage.style.opacity = 0;
    mainImage.style.transform = "translateY(50px)";
    mainImage.style.transition = "all 1s ease";
    setTimeout(() => {
        mainImage.style.opacity = 1;
        mainImage.style.transform = "translateY(0)";
    }, 500);

    // Pulse effect on buttons
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 0 15px #ffbc00";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });
    });
});
