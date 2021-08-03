export const generateProjectsList = (projects) => {
    const navList = document.getElementById("nav-list");
    navList.innerHTML = "";
    Object.keys(projects).forEach((project) => {
        navList.innerHTML += `<li class="nav-item"><a href="#" class="nav-link">${project}</a></li>`;
    });
};