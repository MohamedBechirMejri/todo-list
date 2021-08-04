export const DOMStyling = (() => {
    const navToggle = document.getElementById("nav-toggle");

    navToggle.addEventListener("click", () => {
        const gapDiv = document.getElementById("gap");
        if (gapDiv.style.height !== 0) {
            gapDiv.style.height = 0;
        } else {
            gapDiv.style.height = "7.5em";
        }
    });
})();