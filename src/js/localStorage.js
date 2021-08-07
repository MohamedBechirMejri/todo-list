import {
    projects
} from "./projects";

export const checkLocalStorage = () => {
    localStorage.getItem("projects") ?
        loadFromLocalStorage() :
        saveToLocalStorage();
};

export const loadFromLocalStorage = () => {
    let loadedProjects = JSON.parse(localStorage.getItem("projects"));
    Object.keys(loadedProjects).forEach((project) => {
        projects[project] = project;
    });
};

export const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
};