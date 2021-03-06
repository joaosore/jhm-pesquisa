import "bootstrap";

import { init_menu } from "./js/menu";
import { init_carousel } from "./js/carousel";
import { init_video } from "./js/video";
import { init_accordion } from "./js/accordion";

import { init_animation } from "./js/animation";

function init() {
  init_menu();
  init_carousel();
  init_video();
  init_animation();
  init_accordion();
}
init();

window.addEventListener("load", function () { });
