let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// sticky navbar
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });



  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 40);


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


// swiper slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };


ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img img, .memory-container, .myfeeling-box, .favcategories-wrapper',  {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img',  {origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',  {origin: 'right' });
ScrollReveal().reveal('.firstmeetup, .secondmeetup, .journey, .private',  {origin: 'top' });
ScrollReveal().reveal('.firstmeetup p, .secondmeetup p, .journey p, .private p',  {origin: 'left'});
ScrollReveal().reveal('.firstmeetup h2 , .secondmeetup h2, .journey h2, .private h2',  {origin: 'right'});