// ?Animation
AOS.init();

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// ?Swiper
var swiper = new swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
