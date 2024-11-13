// Big Bang Animation
document.addEventListener("DOMContentLoaded", () => {
    const bigBang = document.querySelector(".big-bang");
    setTimeout(() => {
        bigBang.style.opacity = "0";
        bigBang.style.transition = "opacity 2s";
        setTimeout(() => {
            bigBang.style.display = "none";
        }, 2000);
    }, 3000);
});

// Efeito de partículas (exemplo básico com um background de estrelas aleatórias)
function createStars() {
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars");
    document.body.appendChild(starContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        starContainer.appendChild(star);
    }
}

createStars();
