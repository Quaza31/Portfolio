document.addEventListener("DOMContentLoaded", function () {
  const menu = this.querySelector(".menu");
  const overlay = this.querySelector(".overlay");
  const line = this.querySelectorAll(".line");
  const overlayButtons = this.querySelector(".overlay-buttons");
  const linkMenu = this.querySelectorAll(".link-menu");
  const linkedin = this.querySelector(".linkedin");
  const github = this.querySelector(".github");
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

  linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/ognjen-ristic-0b9988347/");
  });

  github.addEventListener("click", function () {
    window.open("https://github.com/Quaza31");
  });
});
