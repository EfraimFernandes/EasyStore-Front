function openModal() {
    document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}


const openModalBtn = document.getElementById("openModalBtn");
const modal1 = document.getElementById("modal1");

openModalBtn.addEventListener("click", function(event) {
    // Alterna a visibilidade do modal
    modal1.style.display = modal1.style.display === "none" ? "block" : "none";
});

// Fecha o modal ao clicar fora dele
document.addEventListener("click", function(event) {
    if (!modal1.contains(event.target) && event.target !== openModalBtn) {
        modal1.style.display = "none";
    }
});
