export const generateNotes = (notes) => {
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";
    notes.forEach((note) => {
        let checkboxes = "";
        note.checkboxes.forEach((checkbox) => {
            checkboxes += `<h4 class="checkbox"><input id="${checkbox}" type="checkbox"><label for="${checkbox}">${checkbox}</label></h4>`;
        });

        notesDiv.innerHTML += `<div class="note">
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

export const addNewNote = () => {
    const newNote = document.getElementById("new-note");

    newNote.innerHTML = `<h2>New Note</h2>
            <input class="new-title" placeholder="Title"/>
            <textarea class="new-description" placeholder="Description"></textarea>
            <input class="new-checkbox" placeholder="Checklist Item"/>
            <label for="projects">Add To:</label>
            <select name="" id="projects">
                <option value="test">test</option>
            </select>`;
}