import "bootstrap";

import { init_menu } from "./js/menu";
import { init_carousel } from "./js/carousel";

function init() {
  init_menu();
  init_carousel();
}
init();

window.addEventListener("load", function() {});
