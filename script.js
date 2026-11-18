document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (track && nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: 300, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -300, behavior: "smooth" });
        });
    }
});