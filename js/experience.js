let modal = document.querySelector("#modal");
let modalContent = document.querySelector("#modal-content");

function enableModal(el) {
    modalContent.src = el.getAttribute("src").replace(".jpg", ".pdf");
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}