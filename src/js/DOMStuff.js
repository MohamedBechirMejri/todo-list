export const generateNotes = (notes) => {
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";
    notes.forEach((note) => {
        let checkboxes = "";
        note.checkboxes.forEach((checkbox) => {
            checkboxes += `<h4 class="checkbox"><input id="${checkbox}" type="checkbox"><label for="${checkbox}">${checkbox}</label></h4>`;
        });

        notesDiv.innerHTML += `<div class="note" style="background-color: ${note.color}">
                        <h3 class="note-title">${note.title}</h3>
                        <p class="description">${note.description}</p>
                        <p class="date">${note.date}</p>
                        ${checkboxes}
                    </div>`;
    });
};

export const generateProjectsList = (projects) => {
    const navList = document.getElementById("nav-list");
    navList.innerHTML = "";
    Object.keys(projects).forEach((project) => {
        navList.innerHTML += `<li class="nav-item"><a href="#" class="nav-link">${project}</a></li>`;
    });
};