import "./css/style.css";

/**
 *First I'll make the js logic then create a ui that works with it. That's cleaner and easier.
 *
 ** Algorithm
 *create a factory function that takes as arguments (title, description, [checkboxes], color, project and {date}) and returns an object with these arguments
 *create a default array that stores the list of objects.
 *create different arrays for different projects and store each object in the corresponding array by checking obj.project
 *create a DOM manipulating function that adds project arrays to a sidebar
 *create a function that generates notes from an array based on the selected project
 *save arrays in localStorage
 *on page load see if there are any arrays stored in localStorage and generate them
 */
