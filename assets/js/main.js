/* show menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__links");

hamburger.addEventListener("click", menu);

function menu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
}

