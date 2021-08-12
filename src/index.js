import "./css/style.css";
import { DOMStyling } from "./js/DOMStyling";
import {
  listenToAddProjectButton,
  listenToNewNoteButton,
} from "./js/eventListeners";
import { checkLocalStorage } from "./js/localStorage";

checkLocalStorage();
listenToNewNoteButton();
listenToAddProjectButton();
