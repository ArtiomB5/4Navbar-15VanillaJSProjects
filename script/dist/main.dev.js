"use strict";

var hamburgerButton = document.getElementById('hamburger');
hamburgerButton.addEventListener('click', showMenu);
var navButtons = document.getElementById('navbar__buttons');
var hamburgerCloseIcon = document.getElementById('hamburger-innerHTML');
var buttons = document.querySelectorAll("li.navbar__button > a");
buttons.forEach(function (item) {
  item.addEventListener('click', closeMenu);
});

function showMenu(event) {
  navButtons.classList.toggle('show-menu');
  console.log(event.target.innerText);

  if (event.target.innerText === 'menu') {
    hamburgerCloseIcon.innerHTML = 'close';
  } else {
    hamburgerCloseIcon.innerHTML = 'menu';
  }
}

function closeMenu() {
  navButtons.classList.remove('show-menu');
  hamburgerCloseIcon.innerHTML = 'menu';
}