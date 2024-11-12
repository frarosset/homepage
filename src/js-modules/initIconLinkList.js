import initIconLink from "./initIconLink.js";

export default function initIconLinkList(
  iconLinkDataArray,
  listUl = document.createElement("ul")
) {
  listUl.classList.add("icon-link-list");

  // iconLinkDataArray: array of [iconName, link] items
  iconLinkDataArray.forEach(([icon, link]) => {
    const item = document.createElement("li");
    item.classList.add("icon-link-list__item");

    item.append(initIconLink(icon, link));
    listUl.append(item);
  });
}
