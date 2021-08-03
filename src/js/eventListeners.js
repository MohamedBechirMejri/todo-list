import {
    addNewNote
} from "./DOMStuff";

export const listenToNewNoteButton = () => {
    const newNoteButton = document.getElementById("add-note");
    newNoteButton.addEventListener("click", addNewNote);
};