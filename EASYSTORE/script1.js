// Selecionar elementos
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const addUserBtn = document.getElementById('addUserBtn');
const addUserModal = document.getElementById('addUserModal');
const closeModal = document.querySelector('.close');

// Função para alternar a sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('closed'); // Alternar classe "closed" para abrir/fechar
});

// Exibir o modal de adicionar usuário
addUserBtn.addEventListener('click', () => {
    addUserModal.style.display = 'flex';
});

// Fechar o modal
closeModal.addEventListener('click', () => {
    addUserModal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === addUserModal) {
        addUserModal.style.display = 'none';
    }
});
