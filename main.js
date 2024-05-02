/********************* toogle icon navbar   *********************** */

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}

/********************* scroll section active link*********************** */


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
             navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/********************* Sticky navbar*********************** */

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 10000);

/********************* remove toogle icon and navbar*********************** */

menuIcon.classList.remove('fa-xmark');
navBar.classList.remove('active');
};

/********************* Scroll reveal*********************** */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .protfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-content h1, -about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/********************* Typed js*********************** */
const typed = new Typed('.mutiple',{
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true,
})

