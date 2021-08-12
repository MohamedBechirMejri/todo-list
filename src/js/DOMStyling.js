export const DOMStyling = (() => {
    const navToggle = document.getElementById("nav-toggle");

    navToggle.addEventListener("click", () => {
        const navListItems = document.querySelectorAll("li");
        navListItems.forEach((item) => {
            item.classList.toggle("hidden");
        });
        const nav = document.querySelector("nav");
        nav.classList.toggle("hide-nav");
    });
})();