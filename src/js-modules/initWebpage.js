import initHeader from "./initHeader.js";
import initMain from "./initMain.js";
import initFooter from "./initFooter.js";
import initCreditFooter from "../js-utilities/creditFooter.js";

export default function initWebpage() {
  initHeader();
  initMain();
  initFooter();
  initCreditFooter();
}
