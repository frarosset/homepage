import info from "../customData/info.json";
import "../css-modules/myWork.css";

export default function initMyWorkList(listUl) {
  info.projects.forEach((project) => {
    const projectItem = document.createElement("li");

    // temporary code
    projectItem.textContent = project.name;

    listUl.append(projectItem);
  });
}
