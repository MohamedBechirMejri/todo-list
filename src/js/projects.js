export const projects = {
    addToProject: (project, objToAdd) => {
        if (!projects[project]) {
            projects[project] = [];
        }
        projects[project].push(objToAdd);
        console.log(projects);
    },
    returnProject: (project) => {
        return projects[project];
    },
};