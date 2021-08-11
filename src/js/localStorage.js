import localforage from "localforage";
import { generateProjectsList } from "./DOMStuff";
import {
    projects
} from "./projects";

export const checkLocalStorage = () => {
    localforage.getItem("projects") ?
        loadFromLocalStorage() :
        saveToLocalStorage();
};

export const loadFromLocalStorage = () => {
    localforage.getItem("projects").then((val) => {
        Object.keys(val).forEach((project) => {
            projects[project] = project;
        });
        generateProjectsList(projects);
    });
};

export const saveToLocalStorage = () => {
    localforage.setItem("projects", projects);
};