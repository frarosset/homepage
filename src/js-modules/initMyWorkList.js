import info from "../customData/info.json";
import initProjectDiv from "./initProjectDiv.js";
import "../css-modules/myWork.css";

export default function initMyWorkList(listUl) {
  info.projects.forEach((project) => {
    const projectItem = document.createElement("li");

    projectItem.append(initProjectDiv(project));

    listUl.append(projectItem);
  });
}
