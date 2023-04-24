const menu = document.querySelector(".menu");
const menuBTn = document.querySelector(".header-icon");
const icon = document.querySelector(".header-icon i");

menuBTn.addEventListener("click", function () {
  if (icon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    icon.classList = "fa fa-times";
  } else {
    menu.style.left = "-256px";
    icon.classList = "fa fa-bars";
  }
});
