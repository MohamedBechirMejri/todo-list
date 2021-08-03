export const projects = {
    addToProject: (project, objToAdd) => {
        if (!projects[project]) {
            projects[project] = [];
        }
        projects[project].push(objToAdd);
    },
    returnProject: (project) => {
        return projects[project];
    },
};