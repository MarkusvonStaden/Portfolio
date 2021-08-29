let root = document.documentElement;
let modal = document.querySelector("#modal");
let modalContent = document.querySelector("#modal-content");

let title = document.querySelector("#title");
let subtitle = document.querySelector(".subtitle"); 
let description = document.querySelector("#description");
let gallery = document.querySelector("#gallery");

const urlparams = new URLSearchParams(window.location.search);

project = fetch("projects/"+urlparams.get("project")+".json")
    .then(results => results.json())
    .then(data => {
        document.title = data.title;
        title.innerText = data.title;
        subtitle.innerText = data.languages;
        description.innerText = data.description;
        data.images.forEach(img => {
            let elem = document.createElement("img");
            elem.src = img;
            elem.setAttribute("onclick", "enableModal(this)");
            gallery.appendChild(elem);
        })
    });

window.addEventListener("popstate", closeModal);

dark = false;

function enableModal(el) {
    modal.style.display = "flex";
    modalContent.src = el.getAttribute("src");
    window.history.pushState(null, null, null);
}

function closeModal() {
    modal.style.display = "none";
}

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