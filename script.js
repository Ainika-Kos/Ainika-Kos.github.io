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
