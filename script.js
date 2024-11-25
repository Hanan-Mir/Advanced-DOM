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
// document.documentElement.style.setProperty('--color-primary','orangered'); 
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
//-------------------------------------Event Propogation and Bubbling---------------------
//random number generator for rgb
let randomRGBNum=(min,max)=>{
  return `${Math.trunc(Math.random()*(max-min+1)+min)}`
}
let randomRGB=()=>{
 return `rgb(${randomRGBNum(0,255)},${randomRGBNum(0,255)},${randomRGBNum(0,255)})`
}
console.log(randomRGB());

//-----------------------------IMPLEMENTING EVENT PROPOGATION IN PROJECT------------------
// document.querySelectorAll('.nav__link').forEach((el)=>{
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     let id=el.getAttribute('href');
//     console.log(id);
//     document.querySelector(`${id}`).scrollIntoView({behavior:'smooth'});
//   })
// })
document.querySelector('.nav__links').addEventListener('click',function(e){
e.preventDefault();
//console.log(e.currentTarget);
if(e.target.classList.contains('nav__link')){
  //console.log(e.currentTarget);
  let id=e.target.getAttribute('href');
 document.querySelector(`${id}`).scrollIntoView({behavior:'smooth'});

}

})
//-----------------------------TRAVERSING THROUGH DOM----------------------
// let headingh1=document.querySelector('h1');
// let navLinks=document.querySelector('.nav__links');

// //going down in the tree
// console.log(headingh1.childNodes);
// console.log(headingh1.children);
// headingh1.firstElementChild.style.color='black';
// headingh1.lastElementChild.style.color='orangered';
// //going up in the tree
// console.log(headingh1.parentNode);
// console.log(headingh1.parentElement);
// console.log(navLinks.closest('.nav'));
// //all the childs of an element
// console.log(headingh1.parentElement.children);
// [...headingh1.parentElement.children].forEach((el)=>{
//   if(el!=='h1') el.style.backgroundColor='red'; 
// })
//---------------------------TABBED SECTION------------------------------
let tabContainer=document.querySelector('.operations__tab-container');
let tabBtns=document.querySelectorAll('.operations__tab');
let tabContent=document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click',function(e){
let clicked=e.target.closest('.operations__tab');
console.log(clicked);
if(!clicked) return;
tabBtns.forEach((btn)=>{
btn.classList.remove('operations__tab--active')
});
clicked.classList.add('operations__tab--active');
// tabContent.forEach((tab)=>{
//   tab.classList.add('hidden')
// tab.classList.a
tabContent.forEach((tab)=>tab.classList.remove('operations__content--active'));
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
//-------------------------------------------HOVER FEATURE------------------------------
//Handler function for hover feature
let hover=function(e){
  if(e.target.classList.contains('nav__link')){
    let link=e.target;
    let siblings=e.target.closest('.nav').querySelectorAll('.nav__link');
    let logo=link.closest('.nav').querySelector('img');
    siblings.forEach((sib)=>
    {if(sib!==link){
    sib.style.opacity=this;
    logo.style.opacity=this;
    }});
    }
}
let navLinks=document.querySelectorAll('.nav__links');
let nav=document.querySelector('.nav');
// nav.addEventListener('mouseover',hover.bind(0.5));
// nav.addEventListener('mouseout',hover.bind(1));
// //--------------------SCROLL FEATURE----------------------------------------------
// let initcords=section1.getBoundingClientRect();
// window.addEventListener('scroll',function(){
// if(window.scrollY>initcords.top){
//   nav.classList.add('sticky');
// }else{
//   nav.classList.remove('sticky');
// }
// })
//-------------------INTERSECTION OBSERVER API--------------------------------------
let obserFun=function(entries,observer){
entries.forEach((entry)=>{console.log(entry);
if(entry.isIntersecting){
console.log('Intersected');
}})
}
let obserObj={
  root:null,
  threshold:0.1
}
let observer=new IntersectionObserver(obserFun,obserObj);

observer.observe(section1);
//-------------------------------------
const header=document.querySelector('.header');
let sticky=function(entries){
  //console.log(entries);
  const [entry]=entries;
if(!entry.isIntersecting){
  nav.classList.add('sticky');
}else{
  nav.classList.remove('sticky');
}
}
let headerObserver=new IntersectionObserver(sticky,{
  root:null,
  threshold:0,
  rootMargin:'-90px'
})
headerObserver.observe(header);
//---------------------------------------REVEALING SCROLL-----------------------
let allSections=document.querySelectorAll('.section');

let scrollObs=function(entries){
let [entry]=entries;
console.log(entry);
entry.target.classList.remove('section--hidden');
scrollObserver.unobserve(entry.target);
console.log('unobserved');
}
let scrollObserver=new IntersectionObserver(scrollObs,{
  root:null,
  threshold:0.15
})
allSections.forEach((sect)=>{
  // sect.classList.add('section--hidden');
  scrollObserver.observe(sect);
})
//----------------------------------Lazy Loading images----------------------------
let allImages=document.querySelectorAll('img[data-src]');
let lazyLoadFun=function(entries){
  let [entry]=entries;
allImages.forEach((img)=>{
  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  })
})


}
let lazyLoadingObs=new IntersectionObserver(lazyLoadFun,{
  root:null,
  threshold:0
})
allImages.forEach((img)=>lazyLoadingObs.observe(img));
//--------------------------------------SLIDER PART--------------------------------------------------------
let slider=document.querySelector('.slider');
let allSlides=document.querySelectorAll('.slide');
// slider.style.transform=`scale(0.2)`;
// slider.style.transform=`translateX(-100px)`;
// slider.style.overflow='visible';
allSlides.forEach((s,index)=>{
s.style.transform=`translateX(${index*100}%)`;
})
let currentSlide=0;
let maxslides=allSlides.length;
let leftBtn=document.querySelector('.slider__btn--left');
let rightBtn=document.querySelector('.slider__btn--right');
let sliderClick=function(cSlide){
  allSlides.forEach((slide,index)=>{
    slide.style.transform=`translateX(${(index-cSlide)*100}%)`;
  })
}
sliderClick(0);
let nextSlide=function(){
  
  if(currentSlide===maxslides-1){
    currentSlide=0;
  }
  else{
    currentSlide++;
  }
  sliderClick(currentSlide);
  activateDots(currentSlide);
}
let previousSlide=function(){
  ;
  if(currentSlide===0){
    currentSlide=maxslides-1;
    
  }else{
    currentSlide--;
  }
  sliderClick(currentSlide);
  activateDots(currentSlide);
}
rightBtn.addEventListener('click',nextSlide);
leftBtn.addEventListener('click',previousSlide);
//slide through keyboard
document.addEventListener('keydown',function(e){
  e.code==='ArrowRight'&& nextSlide();
  e.code==='ArrowLeft'&& nextSlide();
})
let dotContainer=document.querySelector('.dots');
let createDots=function(){
allSlides.forEach((_,index)=>{
  dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${index}"></button>`)
})
}
createDots();
let activateDots=function(slide){
document.querySelectorAll('.dots__dot').forEach((dot)=>dot.classList.remove('dots__dot--active'));
document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
activateDots(0);

dotContainer.addEventListener('click',function(e){
if(e.target.classList.contains('dots__dot')){
 let goToSlide=e.target.dataset.slide;
  sliderClick(goToSlide);
  activateDots(goToSlide);
}
})
//-----------------------------------------UNLOAD EVENT-----------------------------------
// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   e.returnValue='';
// })








































