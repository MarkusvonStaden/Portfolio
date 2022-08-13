let root = document.documentElement;
let dark = false;
let menu = document.querySelector("#sidebar");
let btn_hamburger = document.querySelector(".hamburger");
let navItems = document.querySelectorAll(".nav__link");

// ! Add section--hidden class in JS instead of HTML

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

// Section Reveal
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, oberserver) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden")
    oberserver.unobserve(entry.target);
}

const SectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2
});

allSections.forEach(section => {
    SectionObserver.observe(section);
    section.classList.add("section--hidden");
})