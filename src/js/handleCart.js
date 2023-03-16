const slideoverContainer = document.getElementById("slideover-container");
const slideoverBg = document.getElementById("slideover-bg");
const slideover = document.getElementById("slideover");

function toggleSlideover() {
  slideoverContainer.classList.toggle("invisible");
  slideoverBg.classList.toggle("opacity-0");
  slideoverBg.classList.toggle("opacity-50");
  slideover.classList.toggle("translate-x-full");
}
