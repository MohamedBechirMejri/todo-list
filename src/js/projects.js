export const projects = {
    Default: [],
};

Object.defineProperty(Object.prototype, "addToProject", {
    value: (project, objToAdd) => {
        if (!projects[project]) {
            projects[project] = [];
        }
        projects[project].push(objToAdd);
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, "returnProject", {
    value: (project) => {
        return projects[project];
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, "removeFromProject", {
    value: (project, titleOfObjToRemove) => {
        projects[project] = projects[project].filter((obj) => {
            return titleOfObjToRemove !== obj.title;
        });
    },
    enumerable: false,
});

Object.defineProperty(Object.prototype, "removeProject", {
    value: (project) => {
        delete projects[project];
    },
    enumerable: false,
});