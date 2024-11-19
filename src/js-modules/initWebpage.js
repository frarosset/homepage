import initHeader from "./initHeader.js";
import initMain from "./initMain.js";
import initFooter from "./initFooter.js";
import initCreditFooter from "../js-utilities/creditFooter.js";

export default function initWebpage() {
  initHeader();
  initMain();
  initFooter();
  initCreditFooter();

  // In the HTML, the visibility of the body has been initialized with "hidden".
  // Change the visibility of the page to "visible" once it is ready (the JS code above has been executed).
  // (otherwise, the static HTML content would be visible for a moment while the page is being loaded)
  document.body.style.visibility = "visible";
}
