export const projects = {};

Object.defineProperty(Object.prototype, "addToProject", {
    value: (project, objToAdd) => {
        if (!projects[project]) {
            projects[project] = [];
        }
        projects[project].push(objToAdd);  //TODO: objToAdd shouldn't be inside an array.
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, "returnProject", {
    value: (project) => {
        return projects[project];
    },
    enumerable: false,
});