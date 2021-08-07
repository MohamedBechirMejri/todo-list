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
    projects[project] = projects[project].filter(() => {
      return titleOfObjToRemove === projects[project][0];
    });
  },
  enumerable: false,
});
