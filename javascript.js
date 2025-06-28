document.addEventListener("DOMContentLoaded", function () {
  const button = this.querySelector(".menu");
  const overlay = this.querySelector(".overlay");

  button.addEventListener("click", function() {
    overlay.classList.toggle("active");

  
  });
  

  });
