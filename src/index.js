import "./css/style.css";

import { NoteMaker } from "./js/NoteMaker";
import { projects } from "./js/projects";
import { generateProjectsList, generateNotes } from "./js/DOMStuff";


/**
let test = NoteMaker(
  "title",
  "description",
  ["checkbox 1", "checkbox 2", "checkbox 3", "checkbox 4"],
  "color",
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
 */
