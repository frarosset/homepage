import initMyWorkList from "./initMyWorkList.js";

export default function initMain() {
  // My work list
  const myWorkListUl = document.querySelector("main .my-work__list");
  initMyWorkList(myWorkListUl);
}
