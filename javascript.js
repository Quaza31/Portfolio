document.addEventListener("DOMContentLoaded", function () {
  const menu = this.querySelector(".menu");
  const overlay = this.querySelector(".overlay");
  const line = this.querySelectorAll(".line");
  const overlayButtons = this.querySelector(".overlay-buttons");
  const linkMenu = this.querySelectorAll(".link-menu");
  const linkedin = this.querySelector(".linkedin");
  const github = this.querySelector(".github");
  const scrollArrow = this.querySelector(".scroll-arrow");
  const VD_logo = this.querySelector(".logo");

  const homeButton = this.querySelector(".home-button");
  const home = this.querySelector(".home");
  const aboutButton = this.querySelector(".about-button");
  const about = this.querySelector(".about");
  const projectsButton = this.querySelector(".projects-button");
  const projects = this.querySelector(".projects");
  const contactButton = this.querySelector(".contact-button")
  const contact = this.querySelector(".contact");

  

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
  
     if (overlay.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
     } else {
      document.body.style.overflow = '';
     }

  });

  overlayButtons.addEventListener("click", function() {
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    overlayButtons.classList.toggle("active");
    line.forEach(function (l) {
      l.classList.toggle("active");
    });

    linkMenu.forEach(function (r) {
      r.classList.toggle("active");
    });
    document.body.style.overflow = '';
  });

  homeButton.addEventListener("click", function() {
    home.scrollIntoView({behavior: "smooth"});
  });

  aboutButton.addEventListener("click", function() {
    about.scrollIntoView({behavior: "smooth"});
  });

  projectsButton.addEventListener("click", function() {
    projects.scrollIntoView({behavior: "smooth"});
  });

  contactButton.addEventListener("click", function() {
    contact.scrollIntoView({behavior: "smooth"});
  });



  linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/ognjen-ristic-0b9988347/");
  });

  github.addEventListener("click", function () {
    window.open("https://github.com/Quaza31");
  });

  window.addEventListener("scroll", function() {
    if(window.scrollY > 0) {
      scrollArrow.classList.add("scrolled")

    } else {
      scrollArrow.classList.remove("scrolled")
    }

  })

  VD_logo.addEventListener("click", function () {
    window.open("https://quaza31.itch.io/vampire-defenders");
  });

});
