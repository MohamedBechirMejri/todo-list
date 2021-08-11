import localforage from "localforage";
import {
    generateProjectsList
} from "./DOMStuff";
import {
    projects
} from "./projects";

export const checkLocalStorage = () => {
    localforage.getItem("projects").then((v) => {
        v ? loadFromLocalStorage() : saveToLocalStorage();
    });
};

export const loadFromLocalStorage = () => {
    localforage.getItem("projects").then((val) => {
        Object.keys(val).forEach((project) => {
            val[project].forEach((obj) => {
                projects.addToProject(project, obj);
            });
        });
        generateProjectsList(projects);
    });
};

export const saveToLocalStorage = () => {
    localforage.setItem("projects", projects);
};