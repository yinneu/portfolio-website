"use strict";

// Make Navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// window.onscroll = () => {
//     if(window.scrollY >= navbar.offsetTop) {
//         navbar.classList.add('sticky');

//         // navbar.style.opacity = 1 - window.scrollY / navbarHeight;
//     }else {
//         navbar.classList.remove('sticky');
//         navbar.style.backgroundColor =  rgba(0, 255, 0, 0.5);
//     }
// }

// body.addEventListener('scroll', () =>{
//     navbar.getElementsByClassName.opacity = window.scrollY;
// })
