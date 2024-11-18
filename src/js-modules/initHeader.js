import info from "../customData/info.json";
import portraitImg from "../customData/portrait.png";
import initIconLinkList from "./initIconLinkList.js";
import "../css-modules/header.css";
import "../css-modules/aboutMe.css";

export default function initHeader() {
  // Name (main heading)
  const h1 = document.querySelector("header h1");
  h1.textContent = info.name;

  // Portrait image
  const portrait = document.querySelector("header img.portrait");
  portrait.src = portraitImg;
  portrait.alt = `Portrait image placeholder for ${info.name}`;

  // About me description
  const aboutMeDescription = document.querySelector(
    "header .about-me__description"
  );
  aboutMeDescription.textContent = info.description;

  // Social list
  const socialListUl = document.querySelector("header .about-me__social-list");
  initIconLinkList(Object.entries(info.social), socialListUl);
}
