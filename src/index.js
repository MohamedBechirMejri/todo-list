import "./css/style.css";
import { DOMStyling } from "./js/DOMStyling";
import { projects } from "./js/projects";
import { generateProjectsList } from "./js/DOMStuff";
import {
  listenToAddProjectButton,
  listenToNewNoteButton,
} from "./js/eventListeners";
import { checkLocalStorage } from "./js/localStorage";

checkLocalStorage();
listenToNewNoteButton();
listenToAddProjectButton();

/**
 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 * TODO: add ids to notes
 */
