import {
    addNewNote
} from "./DOMStuff";
import {
    NoteMaker
} from "./NoteMaker";
import {
    projects
} from "./projects";

export const listenToNewNoteButton = () => {
    const newNoteButton = document.getElementById("add-note");
    newNoteButton.addEventListener("click", addNewNote);
};

export const listenToSaveButton = (newNote) => {
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", () => {
        const title = document.getElementById("new-title");
        const description = document.getElementById("new-description");
        const checkList = document.querySelectorAll(".new-checkbox");
        const project = document.getElementById("projects");
        const reminder = document.getElementById("reminder");

        let checkboxes = [];
        checkList.forEach((checkbox) => checkboxes.push(checkbox.value));

        projects.addToProject(
            project.value,
            NoteMaker(
                title.value,
                description ? description.value : "",
                checkboxes,
                reminder ? reminder.value : ""
            )
        );
        newNote.innerHTML = "";
    });
};
export const listenToDescriptionButton = () => {
    const descriptionButton = document.getElementById("description-button");

    descriptionButton.addEventListener("click", () => {
        document.getElementById(
            "description-div"
        ).innerHTML = `<textarea id="new-description" placeholder="Description"></textarea>`;
    }); //TODO: toggle textarea instead of just showing it once
};
export const listenToCheckboxButton = () => {
    const checkboxButton = document.getElementById("add-check-item-button");
    checkboxButton.addEventListener("click", () => {
        document.getElementById(
            "checkboxes-div"
        ).innerHTML += `<input class="new-checkbox" placeholder="Checklist Item"/>`;
    });
};
export const listenToScheduleButton = () => {
    const scheduleButton = document.getElementById("schedule-button");

    scheduleButton.addEventListener("click", () => {
        const getCurrentDate = () => {
            return new Date().toJSON().substr(0, 16);
        };

        const dateDiv = document.getElementById("date");
        dateDiv.innerHTML = `<label for="reminder">Choose a time for your reminder:</label>
                <input type="datetime-local" id="reminder"
                name="reminder" value="${getCurrentDate()}"
                min="${getCurrentDate()}" max="2118-06-14T00:00">`;
    });
};