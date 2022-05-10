const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  if (navToggle) {
    navMenu.classList.add('show-menu');
  }
});

navClose.addEventListener('click', () => {
  if (navClose) {
    navMenu.classList.remove('show-menu');
  }
});

// On Close nav menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//Change Backgrond Header
function scrollHeader() {
  const header = document.getElementById('header');
  //when the scroll isgreater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);
