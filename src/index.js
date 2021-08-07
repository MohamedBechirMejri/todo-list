import "./css/style.css";

import { NoteMaker } from "./js/NoteMaker";
import { projects } from "./js/projects";
import { generateProjectsList, generateNotes } from "./js/DOMStuff";
import { listenToAddProjectButton, listenToNewNoteButton } from "./js/eventListeners";
import { DOMStyling } from "./js/DOMStyling";
listenToNewNoteButton()
listenToAddProjectButton()
/**
let test = NoteMaker(
  "title",
  "description",
  ["checkbox 1", "checkbox 2", "checkbox 3", "checkbox 4"],
  "project",
  "date"
);

projects.addToProject("test", test);
projects.addToProject("test", test);
projects.addToProject("test3", test);

generateProjectsList(projects);
generateNotes(projects.test);







 *add default project
 *add delete button
 *fix checkboxes disappearing when adding new checkbox
 *change date format
 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 * TODO: add ids to notes
 */
