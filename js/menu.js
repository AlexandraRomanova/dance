(() => {
    const menuBtn = document.querySelector(".menu-button");
    const menuContent = document.querySelector(".menu-container");
    
    menuBtn.addEventListener("click", () => {
        const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;

        menuBtn.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", !expanded);
        menuContent.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
    });
})();