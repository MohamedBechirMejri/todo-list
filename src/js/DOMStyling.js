export const DOMStyling = (() => {
  const navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", () => {
    /*    const gapDiv = document.getElementById("gap");
            gapDiv.style.height !== "0em" ?
                (gapDiv.style.height = "0em") :
                (gapDiv.style.height = "6.5em");

            const navListItems = document.querySelectorAll("li");
            navListItems.forEach((item) => {
                item.style.height !== "0em" ?
                    (item.style.height = "0em") :
                    (item.style.height = "2em");
            }); */
    const nav = document.querySelector("nav");
    nav.style.marginTop !== "5em"
      ? (nav.style.marginTop = "5em")
      : (nav.style.marginTop = "-8em");
  });
})();
