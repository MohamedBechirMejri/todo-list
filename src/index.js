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
 * save notes to projects
 * ability to remove default project
 * TODO: add ids to notes
 */
