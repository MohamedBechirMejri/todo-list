import { addNewNote } from "./DOMStuff";
import { NoteMaker } from "./NoteMaker";
import { projects } from "./projects";

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

    let checkboxes = [];
    checkList.forEach((checkbox) => checkboxes.push(checkbox.value));

    projects.addToProject(
      project.value,
      NoteMaker(
        title.value,
        description ? description.value : "",
        checkboxes,
        "date"
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
// export const listenToScheduleButton = () => {};
// export const listenToCheckboxButton = () => {};
