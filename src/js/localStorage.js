import localforage from "localforage";
import { generateNotes, generateProjectsList } from "./DOMStuff";
import { projects } from "./projects";

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
    generateNotes(projects[Object.keys(projects)[0]]);
  });
};

export const saveToLocalStorage = () => {
  localforage.setItem("projects", projects);
};
