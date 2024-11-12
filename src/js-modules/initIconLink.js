import { setAnimationOnHoverLoop } from "../js-utilities/lottieUtilities.js";
import { lottieIcons } from "./importedIcons.js";

export default function initIconLink(iconName, link) {
  const iconLink = document.createElement("a");
  iconLink.classList.add("icon-link");

  iconLink.href = link;
  iconLink.target = "__self";
  setAnimationOnHoverLoop(iconLink, lottieIcons[iconName]);

  return iconLink;
}
