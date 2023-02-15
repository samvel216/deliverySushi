const menuBtn = document.querySelector('.menuBtn');
const menuMobileContainer = document.querySelector('.menuMobileContainer');

menuBtn.addEventListener('click', function () {
  menuMobileContainer.classList.add('show');
  setTimeout(function () {
    menuMobileContainer.classList.remove('show');
  }, 1000);
});