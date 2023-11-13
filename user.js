function renderizarCabecalho() {
    const headerLogin = document.getElementById("userHeader");
    const loginButton = document.getElementById("loginButton");
    const nomeUsuarioElement = document.getElementById("nomeUsuario");

    // Obtenha o nome do usuário armazenado no localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');

    if (headerLogin && loginButton && nomeUsuarioElement) {
        if (nomeUsuario) {
            // Usuário logado
            headerLogin.style.display = "block";
            nomeUsuarioElement.textContent = nomeUsuario;  // Corrigido para exibir o nome corretamente
            loginButton.style.display = "none";
        } else {
            // Usuário não logado
            headerLogin.style.display = "none";
            loginButton.style.display = "block";
        }
    } else {
        console.error("Elemento não encontrado. Verifique os IDs no HTML.");
    }
}

function logout() {
    localStorage.removeItem('nomeUsuario');
    // Limpe outros dados de usuário, se houver

    // Redirecione para a página de login
    window.location.href = "login.html";
}


document.addEventListener('DOMContentLoaded', function () {
    renderizarCabecalho();
});







