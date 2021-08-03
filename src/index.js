import "./css/style.css";

import { NoteMaker } from "./js/NoteMaker";
import { projects } from "./js/projects";
import { generateProjectsList } from "./js/DOMStuff";

projects.addToProject("test", { test: "" });
console.log(generateProjectsList(projects));
/**

 *create a DOM manipulating function that adds project arrays to a sidebar
 *create a function that generates notes from an array based on the selected project
 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 */
