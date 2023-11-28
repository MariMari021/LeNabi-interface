document.addEventListener('DOMContentLoaded', function () {
    renderizarCabecalho();
});


function renderizarCabecalho() {
    const headerLogin = document.getElementById("userHeader");
    const loginButton = document.getElementById("loginButton");
    const nomeUsuarioElement = document.getElementById("nomeUsuario");
    const popup = document.getElementById("popup");
    const conteudoPopup = document.getElementById("conteudoPopup");
    const emailUsuarioPopup = document.getElementById("emailUsuario");

    // Obtenha o nome e email do usuário armazenados no localStorage
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const emailUsuario = localStorage.getItem('emailUsuario');

    // Verifica se os elementos existem antes de manipulá-los
    if (headerLogin && loginButton && nomeUsuarioElement && popup && conteudoPopup && emailUsuarioPopup) {
        if (nomeUsuario) {
            // Usuário logado
            console.log("Usuário logado:", nomeUsuario);
            headerLogin.style.display = "block";
            nomeUsuarioElement.textContent = nomeUsuario;  // Exibe o nome do usuário
            loginButton.style.display = "none";
        } else {
            // Usuário não logado
            console.log("Usuário não logado");
            headerLogin.style.display = "none";
            loginButton.style.display = "block";
        }

        // Adiciona um evento de clique ao headerLogin
        headerLogin.addEventListener("click", function () {
            // Exibe o popup
            popup.style.display = "block";

            // Preenche o conteúdo do popup com o nome e email do usuário
            conteudoPopup.textContent = nomeUsuario;
            emailUsuarioPopup.textContent = emailUsuario; // Adiciona o email do usuário ao popup
            console.log("Email do usuário:", nomeUsuario);
            console.log("Email do usuário:", emailUsuario);
        });
    } else {
        console.error("Elemento não encontrado. Verifique os IDs no HTML.");
    }
}

// Chama a função para renderizar o cabeçalho
renderizarCabecalho();


function logout() {
    // Remove o nome do usuário do localStorage
    localStorage.removeItem('nomeUsuario');
    // Limpe outros dados de usuário, se houver
    window.location.href = "index.html";
}



let popupVisivel = false;

function mostrarOcultarPopup() {
    const popupElement = document.getElementById('popup');

    popupVisivel = !popupVisivel;
    popupElement.classList.toggle('show', popupVisivel);
}


//   // Função para adicionar um item ao carrinho
//   function addCarrinho(itemNome, itemPreco) {
//     // Verifica se o coração está pintado
//     const coracaoPintado = document.getElementById('coracao-pintado');
//     if (coracaoPintado.style.display === 'inline-block') {
//         // Adiciona apenas se o coração estiver pintado
//         const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
//         const itemExistente = carrinho.find(item => item.nome === itemNome);

//         if (itemExistente) {
//             // Se o item já estiver no carrinho, aumenta a quantidade
//             itemExistente.quantidade += 1;
//         } else {
//             // Se o item não estiver no carrinho, adiciona ao carrinho
//             carrinho.push({ nome: itemNome, preco: itemPreco, quantidade: 1 });
//         }

//         // Atualiza o localStorage e o DOM
//         localStorage.setItem('carrinho', JSON.stringify(carrinho));
//         atualizarCarrinhoDOM();
//     } else {
//         // Se o coração estiver vazio, limpa o carrinho
//         limparCarrinho();
//     }
// }

function addCarrinho(itemNome, itemPreco) {
    // Obtém o carrinho do localStorage ou cria um novo array vazio
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.nome === itemNome);

    if (itemExistente) {
        // Se o item já está no carrinho, aumenta a quantidade
        itemExistente.quantidade += 1;
    } else {
        // Se o item não está no carrinho, adiciona ao carrinho com quantidade 1
        carrinho.push({ nome: itemNome, preco: itemPreco, quantidade: 1 });
    }

    // Atualiza o localStorage com o carrinho atualizado
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Aqui você pode adicionar qualquer lógica adicional, como atualizar o DOM
    atualizarCarrinhoDOM();
}



// // Função para alternar entre coração vazio e coração pintado
// function toggleCarrinho(itemNome, itemPreco) {
//     const coracaoVazio = document.getElementById('coracao-vazio');
//     const coracaoPintado = document.getElementById('coracao-pintado');

//     // Verifica se o coração está pintado
//     const coracaoPintadoVisivel = window.getComputedStyle(coracaoPintado).getPropertyValue('display') === 'inline-block';

//     // Alterna entre coração vazio e coração pintado
//     coracaoVazio.style.display = coracaoPintadoVisivel ? 'inline-block' : 'none';
//     coracaoPintado.style.display = coracaoPintadoVisivel ? 'none' : 'inline-block';

//     // Atualiza o contador
//     const contadorCoracao = document.getElementById('contador-coracao');
//     contadorCoracao.textContent = coracaoPintadoVisivel ? parseInt(contadorCoracao.textContent) - 1 : parseInt(contadorCoracao.textContent) + 1;

//     // Adiciona ou remove o item ao carrinho com base no estado do coração
//     if (coracaoPintadoVisivel) {
//         removeCarrinho(itemNome);
//     } else {
//         addCarrinho(itemNome, itemPreco);
//     }
// }


// Função para alternar entre coração vazio e coração pintado para um produto específico
function toggleCarrinho(itemNome, itemPreco, produtoId) {
    const coracaoVazio = document.getElementById(`coracao-vazio-${produtoId}`);
    const coracaoPintado = document.getElementById(`coracao-pintado-${produtoId}`);

    // Verifica se o coração está pintado
    const coracaoPintadoVisivel = window.getComputedStyle(coracaoPintado).getPropertyValue('display') === 'inline-block';

    // Alterna entre coração vazio e coração pintado
    coracaoVazio.style.display = coracaoPintadoVisivel ? 'inline-block' : 'none';
    coracaoPintado.style.display = coracaoPintadoVisivel ? 'none' : 'inline-block';

    // Atualiza o contador
    const contadorCoracao = document.getElementById('contador-coracao');
    contadorCoracao.textContent = coracaoPintadoVisivel ? parseInt(contadorCoracao.textContent) - 1 : parseInt(contadorCoracao.textContent) + 1;

    // Adiciona ou remove o item ao carrinho com base no estado do coração
    if (coracaoPintadoVisivel) {
        removeCarrinho(itemNome);
    } else {
        addCarrinho(itemNome, itemPreco);
    }

    // Salva o estado do coração no localStorage
    localStorage.setItem(`estadoCoracao-${produtoId}`, coracaoPintadoVisivel ? 'pintado' : 'vazio');
}

// Carrega o estado do coração ao carregar a página
window.onload = function () {
    // Obtenha a identificação única do produto (por exemplo, ID do produto) para cada produto
    const produtos = document.querySelectorAll('.produtinhos');
    
    produtos.forEach(produto => {
        const produtoId = produto.getAttribute('data-produto-id');
        const estadoCoracao = localStorage.getItem(`estadoCoracao-${produtoId}`);
        
        if (estadoCoracao === 'pintado') {
            document.getElementById(`coracao-vazio-${produtoId}`).style.display = 'none';
            document.getElementById(`coracao-pintado-${produtoId}`).style.display = 'inline-block';
        }
    });
};






function toggleCoracao() {
    const coracaoVazio = document.getElementById('coracao-vazio');
    const coracaoPintado = document.getElementById('coracao-pintado');

    // Alterna entre coração vazio e coração pintado
    if (coracaoPintado.style.display === 'inline-block') {
        coracaoVazio.style.display = 'inline-block';
        coracaoPintado.style.display = 'none';
    } else {
        coracaoVazio.style.display = 'none';
        coracaoPintado.style.display = 'inline-block';
    }
}


// Função para abrir/fechar a lista de favoritos
function toggleFavoritos() {
    const carrinhoItens = document.getElementById('carrinho-itens');
    carrinhoItens.style.display = carrinhoItens.style.display === 'none' ? 'block' : 'none';
}

// Função para limpar o carrinho
function limparCarrinho() {
    localStorage.removeItem('carrinho');
    atualizarCarrinhoDOM();
    alternarContador();
    toggleCarrinho();
}

// Função para adicionar mais uma unidade do produto
function addMaisUm(itemNome) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemExistente = carrinho.find(item => item.nome === itemNome);

    if (itemExistente) {
        itemExistente.quantidade += 1;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinhoDOM();
    }
}

// // Função para remover uma unidade do produto
// function removeCarrinho(itemNome) {
//     const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
//     const itemExistente = carrinho.find(item => item.nome === itemNome);

//     if (itemExistente) {
//         itemExistente.quantidade -= 1;

//         if (itemExistente.quantidade === 0) {
//             // Remove o item do carrinho se a quantidade for zero
//             const index = carrinho.indexOf(itemExistente);
//             carrinho.splice(index, 1);
//         }

//         localStorage.setItem('carrinho', JSON.stringify(carrinho));
//         atualizarCarrinhoDOM();
//     }
// }



function alternarContador() {
    const coracaoVazio = document.getElementById('coracao-vazio');
    const coracaoPintado = document.getElementById('coracao-pintado');

    coracaoVazio.style.display = coracaoVazio.style.display === 'none' ? 'inline-block' : 'none';
    coracaoPintado.style.display = coracaoPintado.style.display === 'none' ? 'inline-block' : 'none';
}

// Função para atualizar o DOM com os itens do carrinho
// function atualizarCarrinhoDOM() {
//     const carrinhoItens = document.getElementById('carrinho-itens');
//     const itensLista = document.getElementById('itens-lista');
//     const precoTotal = document.getElementById('preco-total');
//     const contFavoritos = document.getElementById('cont-favoritos');
//     const coracaoVazio = document.getElementById('coracao-vazio');
//     const coracaoPintado = document.getElementById('coracao-pintado');

//     // Limpa a lista de itens
//     itensLista.innerHTML = '';

//     // Recupera os itens do localStorage
//     const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

//     // Atualiza a quantidade de favoritos
//     contFavoritos.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);

//     // Atualiza a lista de itens no carrinho
//     carrinho.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class="item">
//                 <span>${item.nome}</span>
//                 <button class="remove" onclick="removeCarrinho('${item.nome}')">-</button>
//                 <span class="quantity">${item.quantidade}</span>
//                 <button class="add" onclick="addMaisUm('${item.nome}')">+</button>
//                 <span class="preco-total">R$${(item.preco * item.quantidade).toFixed(2)}</span>
//             </div>
//         `;
//         itensLista.appendChild(li);
//     });

//     // Calcula o preço total
//     const total = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
//     precoTotal.textContent = `Valor Total: R$${total.toFixed(2)}`;

//     // Exibe ou oculta o carrinho dependendo se há itens no carrinho
//     carrinhoItens.style.display = carrinho.length > 0 ? 'block' : 'none';

//     // Atualiza o estado do coração
//     if (carrinho.length > 0) {
//         coracaoVazio.style.display = 'none';
//         coracaoPintado.style.display = 'inline-block';
//     } else {
//         coracaoVazio.style.display = 'inline-block';
//         coracaoPintado.style.display = 'none';
//     }
// }

// // Atualiza o DOM ao carregar a página
// window.onload = function () {
//     atualizarCarrinhoDOM();
// };


// Função para atualizar o DOM com os itens do carrinho
function atualizarCarrinhoDOM(itemId) {
    const carrinhoItens = document.getElementById('carrinho-itens');
    const itensLista = document.getElementById('itens-lista');
    const precoTotal = document.getElementById('preco-total');
    const contFavoritos = document.getElementById('cont-favoritos');

    // Limpa a lista de itens
    itensLista.innerHTML = '';

    // Recupera os itens do localStorage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Atualiza a quantidade de favoritos
    contFavoritos.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // Atualiza a lista de itens no carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="item">
                <span>${item.nome}</span>
                <button class="remove" onclick="removeCarrinho('${item.nome}', '${item.id}')">-</button>
                <span class="quantity">${item.quantidade}</span>
                <button class="add" onclick="addMaisUm('${item.nome}')">+</button>
                <span class="preco-total">R$${(item.preco * item.quantidade).toFixed(2)}</span>
            </div>
        `;
        itensLista.appendChild(li);
    });

    // Calcula o preço total
    const total = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    precoTotal.textContent = `Valor Total: R$${total.toFixed(2)}`;

    // Adiciona ou remove o item ao carrinho com base no estado do coração
    if (carrinho.length > 0) {
        const coracaoVazio = document.getElementById(`coracao-vazio-${itemId}`);
        const coracaoPintado = document.getElementById(`coracao-pintado-${itemId}`);

        if (coracaoVazio && coracaoPintado) {
            coracaoVazio.style.display = 'none';
            coracaoPintado.style.display = 'inline-block';
        }
    } else {
        // Se não houver itens no carrinho, exibe o coração vazio
        const coracaoVazio = document.getElementById(`coracao-vazio-${itemId}`);
        const coracaoPintado = document.getElementById(`coracao-pintado-${itemId}`);

        if (coracaoVazio && coracaoPintado) {
            coracaoVazio.style.display = 'inline-block';
            coracaoPintado.style.display = 'none';
        }
    }

    // Exibe ou oculta o carrinho dependendo se há itens no carrinho
    carrinhoItens.style.display = carrinho.length > 0 ? 'block' : 'none';
}

// Função para remover uma unidade do produto
function removeCarrinho(itemNome, itemId) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itemExistente = carrinho.find(item => item.nome === itemNome);

    if (itemExistente) {
        itemExistente.quantidade -= 1;

        if (itemExistente.quantidade === 0) {
            // Remove o item do carrinho se a quantidade for zero
            const index = carrinho.indexOf(itemExistente);
            carrinho.splice(index, 1);
        }

        // Atualiza o localStorage e o DOM
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Chama a função para atualizar o DOM passando o ID do produto
        atualizarCarrinhoDOM(itemId);
    }
}

// // Atualiza o DOM ao carregar a página
// window.onload = function () {
//     atualizarCarrinhoDOM();
// };
