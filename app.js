'use srtict';

const menubtn = document.querySelector('.button');

const crossbtn = document.querySelector('.cross-btn');
const navHide = document.querySelector('.nav-hide');

function showNavbar() {
  navHide.classList.remove('hide');
  crossbtn.classList.remove('hide');
  document.querySelector('.button').style.zIndex = 2;
}
function hideNavbar() {
  navHide.classList.add('hide');
  crossbtn.classList.add('hide');
}

menubtn.addEventListener('click', showNavbar);
crossbtn.addEventListener('click', hideNavbar);
