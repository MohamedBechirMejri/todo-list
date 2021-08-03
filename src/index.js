import "./css/style.css";

import { NoteMaker } from "./js/NoteMaker";
import { projects } from "./js/projects";
import { generateProjectsList, generateNotes } from "./js/DOMStuff";
import { listenToNewNoteButton } from "./js/eventListeners";

listenToNewNoteButton()
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

 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 * TODO: add ids to notes
 */
