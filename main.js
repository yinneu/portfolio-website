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


//Handle scolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link
  if (link == null){
    return;
  }
  scrollIntoView(link);
});


//Handle click on "contact me" button on home
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});


//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
});


//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight /2){
    arrowUp.classList.add('arrow--visible');
  } else {
    arrowUp.classList.remove('arrow--visible');
  }
});


//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});


//프로젝트 카테고리
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  } 

  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  //span선택시
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  // 일정시간이 지난후 실행
  setTimeout(() => {
    projects.forEach(project => {
      console.log(project.dataset.type);
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
  
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}