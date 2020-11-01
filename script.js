const links = document.querySelectorAll("a");

links.forEach(link => link.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop +30,
        behavior: "smooth"
    })
}


const mybutton = document.querySelector('.js-button');
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({top:0, behavior: "smooth"})
}

const navbar = document.querySelector('.js-navbar');
const ham = document.querySelector('.js-hamburger');

function toggleHamburger() {
    navbar.classList.toggle('showNav')
    ham.classList.toggle('showClose')
    console.log('clicked')
}

ham.addEventListener('click', toggleHamburger);

const nav_items = document.querySelectorAll('.js-navbar__item');

nav_items.forEach(function(nav_item) {
    nav_item.addEventListener('click', toggleHamburger)
})
