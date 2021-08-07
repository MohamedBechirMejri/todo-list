import {
    listenToCheckboxButton,
    listenToDescriptionButton,
    listenToNoteDeleteButtons,
    listenToSaveButton,
    listenToScheduleButton,
} from "./eventListeners";

export const generateNotes = (notes) => {
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";
    if (!notes[0]) {
        notes.shift();
    }
    notes.forEach((note) => {
        let checkboxes = "";
        note.checkboxes.forEach((checkbox) => {
            checkboxes += `<h4 class="checkbox"><input id="${checkbox}" type="checkbox"><label for="${checkbox}">${checkbox}</label></h4>`;
        });

        notesDiv.innerHTML += `
                            <div class="note">
                                <h3 class="note-title">${note.title}</h3>
                                <p class="description">${note.description}</p>
                                <p class="date">${note.date}</p>
                                ${checkboxes}
                                <div class="manage-button">
                                <button class="delete-note-button" value="${note.title},${note.project}">X</button></div>
                            </div>`;
    });
    listenToNoteDeleteButtons()
};

export const generateProjectsList = (projects) => {
    const navList = document.getElementById("nav-list");
    navList.innerHTML = "";
    Object.keys(projects).forEach((project) => {
        navList.innerHTML += `<li class="nav-item"><a href="#" class="nav-link">${project}</a><button class="delete-project-button" value="${project}">X</button></li>`;
    });
};

export const addNewNote = (projects) => {
    const newNote = document.getElementById("new-note");

    let options = ``;
    Object.keys(projects).forEach((project) => {
        options += `<option value="${project}">${project}</option> `;
    });

    newNote.innerHTML = `<h2>New Note</h2>
            <input id="new-title" placeholder="Title"/>
            <div id="description-div"></div>
            <div id="checkboxes-div"></div>
            <label for="projects">Add To:</label>
            <select name="" id="projects">
                ${options}
            </select>
            <div id="date"></div>
            <div id="note-management">
                <button class="" id="description-button">Description</button>
                <button class="" id="schedule-button">schedule</button>
                <button class="" id="add-check-item-button">Add check item</button>
                <button class="" id="save-button">Save</button>
            </div>`;
    listenToSaveButton(newNote);
    listenToDescriptionButton();
    listenToCheckboxButton();
    listenToScheduleButton();
};