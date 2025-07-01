document.addEventListener("DOMContentLoaded", function () {
  const menu = this.querySelector(".menu");
  const overlay = this.querySelector(".overlay");
  const line = this.querySelectorAll(".line");
  const overlayButtons = this.querySelector(".overlay-buttons");
  const linkMenu = this.querySelectorAll(".link-menu");
  menu.addEventListener("click", function () {
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    overlayButtons.classList.toggle("active");
    line.forEach(function (l) {
      l.classList.toggle("active");
    });

    linkMenu.forEach(function (r) {
      r.classList.toggle("active");
    });
  });
});
