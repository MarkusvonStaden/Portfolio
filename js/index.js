let root = document.documentElement;
let dark = false;
let menu = document.querySelector("#sidebar");
let btn_hamburger = document.querySelector(".hamburger");
let navItems = document.querySelectorAll(".nav__link");

function hamburger() {
    btn_hamburger.classList.toggle("change");
    menu.classList.toggle("hidden");
}

navItems.forEach(el => {
    el.addEventListener("click", hamburger);
});

root.addEventListener('keydown', event => {
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        if (!dark) {
            root.style.setProperty('--primary-text', "white");
            root.style.setProperty('--secondary-text', "black");
            root.style.setProperty('--bg-color', "rgb(32,32,32)");
            root.style.setProperty('--color-accent', "lightblue");
            dark = true;
        } else {
            root.style.setProperty('--primary-text', "black");
            root.style.setProperty('--secondary-text', "white");
            root.style.setProperty('--bg-color', "white");
            root.style.setProperty('--color-accent', "rgb(47, 72, 151)");
            dark = false;
        }
    }
});