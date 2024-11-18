import info from "../customData/info.json";

export default function initMyWorkList(listUl) {
  info.projects.forEach((project) => {
    const projectItem = document.createElement("li");

    // temporary code
    projectItem.textContent = project.name;

    listUl.append(projectItem);
  });
}
