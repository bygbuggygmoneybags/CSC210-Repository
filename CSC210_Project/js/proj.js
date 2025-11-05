document.querySelectorAll(".proj_title").forEach(projTitle => {
    projTitle.addEventListener("click", () => {
        const desc = projTitle.nextElementSibling;
        desc.classList.toggle("show");
    });
});