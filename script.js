'use strict';

const body = document.querySelector('body');
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const fixNav = function () {
  if (window.scrollY >= topOfNav) {
    body.style.paddingTop = nav.offsetHeight + 'px';
    body.classList.add('fixed-nav');
  } else {
    body.style.paddingTop = 0;
    body.classList.remove('fixed-nav');
  }
};

window.addEventListener('scroll', fixNav);
