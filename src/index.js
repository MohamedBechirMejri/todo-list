import "./css/style.css";

import { NoteMaker } from "./js/NoteMaker";

console.log(NoteMaker('title', 'description', 'checkboxes', 'color', 'project', 'date'));
/**

 *create a default array that stores the list of objects.
 *create different arrays for different projects and store each object in the corresponding array by checking obj.project
 *create a DOM manipulating function that adds project arrays to a sidebar
 *create a function that generates notes from an array based on the selected project
 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 */
