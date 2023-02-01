const menuBtn = document.querySelector('.menuBtn');
const heroButtonEl = document.querySelectorAll(".heroButton");
const arrowSliderLeftEl = document.querySelector(".arrowSliderLeft");
const arrowSliderRight = document.querySelector(".arrowSliderRight");
const menuMobileContainer = document.querySelector('.menuMobileContainer');
const menuCloseBtnEl = document.querySelector('.menuCloseBtn');
menuBtn.addEventListener('click', function () {
  menuMobileContainer.classList.add('show');
 
});
menuCloseBtnEl.addEventListener('click', function () {
  menuMobileContainer.classList.remove('show');
 
});

const buttons1 = document.querySelectorAll('.heroButton');
const heroModalContainer = document.querySelector(".heroModalContainer");
buttons1.forEach(button => {
  button.addEventListener('click', () => {
 
    const modalContainer = button.nextElementSibling;
  
    heroModalContainer.classList.add('show');
  });
});

let showButton = [1,2];

const buttonRightSwipe = (event) => {
  event.preventDefault();
  

}
arrowSliderRight.addEventListener("click", buttonRightSwipe);

