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
 * 
 * ability to remove default project => generate default project through method not hard coding it
 *
 * TODO: add ids to notes
 */
