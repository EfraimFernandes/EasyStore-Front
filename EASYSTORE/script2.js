// Função para abrir e fechar a sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    // Alterna a classe 'collapsed' para expandir ou colapsar
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed-content');
}

// Modal de produtos
function openModal() {
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Modal de Ações (editar, excluir)
const openModalBtn = document.getElementById("openModalBtn");
const modal1 = document.getElementById("modal1");

openModalBtn.addEventListener("click", function() {
    modal1.style.display = (modal1.style.display === "block") ? "none" : "block";
});
