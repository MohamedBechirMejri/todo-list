import {
    addNewNote
} from "./DOMStuff";
import {
    NoteMaker
} from "./NoteMaker";

export const listenToNewNoteButton = () => {
    const newNoteButton = document.getElementById("add-note");
    newNoteButton.addEventListener("click", addNewNote);

};

export const listenToSaveButton = (newNote) => {
  const saveButton = document.getElementById("save-button");
  saveButton.addEventListener("click", () => {
    console.log(
      NoteMaker(
        "title",
        "description",
        ["checkbox 1", "checkbox 2", "checkbox 3", "checkbox 4"],
        "project",
        "date"
      )
    );
      newNote.innerHTML = ''
  });
};