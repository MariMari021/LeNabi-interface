// function renderizarCabecalho() {
//     const headerLogin = document.getElementById("userHeader");
//     const loginButton = document.getElementById("loginButton");
//     const nomeUsuarioElement = document.getElementById("nomeUsuario");

//     // Obtenha o nome do usuário armazenado no localStorage
//     const nomeUsuario = localStorage.getItem('nomeUsuario');

//     if (headerLogin && loginButton && nomeUsuarioElement) {
//         if (nomeUsuario) {
//             console.log("Nome do usuário encontrado:", nomeUsuario);
//             // Usuário logado
//             headerLogin.style.display = "block";
//             nomeUsuarioElement.textContent = nomeUsuario;  // Corrigido para exibir o nome corretamente
//             loginButton.style.display = "none";
//         } else {
//             console.log("Nome do usuário não encontrado.");
//             // Usuário não logado
//             headerLogin.style.display = "none";
//             loginButton.style.display = "block";
//         }
//     } else {
//         console.error("Elemento não encontrado. Verifique os IDs no HTML.");
//     }
// }

// function logout() {
//     localStorage.removeItem('nomeUsuario');
//     // Limpe outros dados de usuário, se houver
// }


// document.addEventListener('DOMContentLoaded', function () {
//     renderizarCabecalho();
// });


document.addEventListener('DOMContentLoaded', function() {
    renderizarCabecalho();
});

function renderizarCabecalho() {
    const headerLogin = document.getElementById("userHeader");
    const loginButton = document.getElementById("loginButton");
    const nomeUsuarioElement = document.getElementById("nomeUsuario");

    // Obtenha o nome do usuário armazenado no localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');

    // Verifica se os elementos existem antes de manipulá-los
    if (headerLogin && loginButton && nomeUsuarioElement) {
        if (nomeUsuario) {
            // Usuário logado
            headerLogin.style.display = "block";
            nomeUsuarioElement.textContent = "Bem-vindo, " + nomeUsuario;  // Exibe o nome do usuário
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
    // Remove o nome do usuário do localStorage
    localStorage.removeItem('nomeUsuario');
    // Limpe outros dados de usuário, se houver
    window.location.href = "index.html";
}







