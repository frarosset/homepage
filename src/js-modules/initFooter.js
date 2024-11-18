import info from "../customData/info.json";
import portraitImg from "../customData/portrait.png";
import initIconLinkList from "./initIconLinkList.js";
import "../css-modules/socialList.css";
import "../css-modules/footer.css";

export default function initFooter() {
  // Address
  const address = document.querySelector("footer .contact_me__address");
  address.textContent = info.contact.address;

  // Phone
  const phone = document.querySelector("footer .contact_me__phone");
  phone.textContent = info.contact.phone;

  // Email
  const email = document.querySelector("footer .contact_me__email");
  email.textContent = info.contact.email;

  // Social list
  const socialListUl = document.querySelector(
    "footer .contact-me__social-list"
  );
  initIconLinkList(Object.entries(info.social), socialListUl);

  // Portrait image
  const portrait = document.querySelector("footer .portrait");
  portrait.src = portraitImg;
  portrait.alt = `Portrait image placeholder for ${info.name}`;
}
