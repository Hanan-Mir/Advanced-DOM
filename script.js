'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
//------------------------------------using foreach() loop for above function
btnsOpenModal.forEach(function(btn){
btn.addEventListener('click',openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//creating the popup message for our project
const headerView=document.querySelector('.header');
let cookieMessage=document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML='We use cookies for better experience and analytics<button class=btn id=cookie>OK!</button>';
console.log(cookieMessage);
//headerView.prepend(cookieMessage);
 headerView.append(cookieMessage);
// headerView.after(cookieMessage);
// headerView.before(cookieMessage);
//close the cookie information
document.querySelector('#cookie').addEventListener('click',function(){
  cookieMessage.remove();
})
cookieMessage.style.backgroundColor='#37383d';
cookieMessage.style.width='104%';
cookieMessage.style.height='50px';
//reading properties of html element
console.log(cookieMessage.getBoundingClientRect());
console.log(cookieMessage.getBoundingClientRect().width);
console.log(cookieMessage.getBoundingClientRect().height);
//setting properties of whole root 
document.documentElement.style.setProperty('--color-primary','orangered'); 
let logo=document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.className);
console.log(logo.id);
logo.setAttribute('designer','Hanan');
console.log(logo.getAttribute('designer'));
console.log(logo.dataset.versionNumber);
//-------------------------SCROLL FEATURE FOR OUR WEBSITE---------------------
let btnScroll=document.querySelector('.btn--scroll-to');
let section1=document.querySelector('#section--1');


btnScroll.addEventListener('click',function(e){
  let section1Cords=section1.getBoundingClientRect();
  console.log(section1Cords);
  console.log(e.target.getBoundingClientRect());
  //console.log('scroll clicked');
  console.log('current scroll',window.pageXOffset,window.pageYOffset);
  console.log(document.documentElement.clientHeight);
//window.scrollTo(section1Cords.left+window.pageXOffset,section1Cords.top+pageYOffset);
// window.scrollTo({
//   left:section1Cords.left+window.pageXOffset,
//   top:section1Cords.top+pageYOffset,
//   behavior:'smooth'
  
// })
section1.scrollIntoView({behavior:'smooth'});
})
//---------------------Event Handling and listners-----------------------
let heading=document.querySelector('h1');
let mouseHover=function(){
  alert('Entered heading section');
}
// heading.onmouseenter=function(e){
//   alert('Defined on element');
// };
heading.addEventListener('mouseenter',mouseHover)
setTimeout(()=>heading.removeEventListener('mouseenter',mouseHover
),5000);