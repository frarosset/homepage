import initIconLinkList from "./initIconLinkList.js";
import "../css-modules/projectDiv.css";

export default function initProjectDiv(data) {
  const div = document.createElement("div");
  div.classList.add("project");

  // Image preview
  const previewImg = document.createElement("img");
  previewImg.classList.add("project__preview");
  previewImg.src = data.previewLink;
  previewImg.alt = `Screenshot of the project ${data.name}`;

  const previewImgLink = document.createElement("a");
  previewImgLink.href = data.liveLink;
  previewImgLink.append(previewImg);

  // Project info div
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("project__info");

  // Title
  const title = document.createElement("h3");
  title.classList.add("project__title");
  title.textContent = data.name;

  // Description
  const description = document.createElement("p");
  description.classList.add("project__description");
  description.textContent = data.description;

  // Links
  const links = document.createElement("ul");
  links.classList.add("project__links");
  const linksData = [
    ["github", data.repoLink],
    ["live", data.liveLink],
  ];
  initIconLinkList(linksData, links);

  infoDiv.append(title, description, links);
  div.append(previewImgLink, infoDiv);

  return div;
}
