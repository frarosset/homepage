import info from "../customData/info.json";
import portraitImg from "../customData/portrait.png";

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
  const socialList = document.querySelector("header .about-me__social-list");
  socialList.textContent = "Social list: todo";
}
