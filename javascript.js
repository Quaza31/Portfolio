// Hamburger menu animation toggle
const menuBtn = document.querySelector('.menu');
if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
  });
}
