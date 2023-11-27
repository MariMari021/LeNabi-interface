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




// function alternarContador() {
//     var contadorElement = document.getElementById("contador-coracao");
//     var coracaoVazio = document.getElementById("coracao-vazio");
//     var coracaoPintado = document.getElementById("coracao-pintado");

//     if (contadorElement && coracaoVazio && coracaoPintado) {
//         var valorInicial = parseInt(contadorElement.getAttribute("data-valor-inicial")) || 0;

//         if (contadorElement.getAttribute("data-ativo") === "true") {
//             // Atualiza o estado do coração
//             localStorage.setItem('coracaoEstado', 'pintado');
//             coracaoVazio.style.display = "none";
//             coracaoPintado.style.display = "inline-block";
//         } else {
//             // Atualiza o estado do coração
//             localStorage.setItem('coracaoEstado', 'vazio');
//             coracaoVazio.style.display = "inline-block";
//             coracaoPintado.style.display = "none";
//         }

//         // Armazena o estado do coração no perfil do usuário
//         const coracaoEstadoPerfil = localStorage.getItem('coracaoEstado');
//         localStorage.setItem('coracaoEstadoPerfil', coracaoEstadoPerfil);
        
//         // Alterna o estado ativo
//         contadorElement.setAttribute("data-ativo", contadorElement.getAttribute("data-ativo") === "true" ? "false" : "true");
//     }
// }



// window.onload = function () {
//     const coracaoVazio = document.getElementById("coracao-vazio");
//     const coracaoPintado = document.getElementById("coracao-pintado");

//     coracaoVazio.addEventListener("click", function () {
//         localStorage.setItem('coracaoEstadoPerfil', 'pintado');
//         atualizarVisualizacaoCoracao();
//     });

//     coracaoPintado.addEventListener("click", function () {
//         localStorage.setItem('coracaoEstadoPerfil', 'vazio');
//         atualizarVisualizacaoCoracao();
//     });

//     // Atualiza a visualização do coração com base no estado recuperado
//     atualizarVisualizacaoCoracao();
// };

// function atualizarVisualizacaoCoracao() {
//     const coracaoEstadoPerfil = localStorage.getItem('coracaoEstadoPerfil');

//     if (coracaoEstadoPerfil === 'pintado') {
//         document.getElementById("coracao-vazio").style.display = "none";
//         document.getElementById("coracao-pintado").style.display = "inline-block";
//     } else {
//         document.getElementById("coracao-vazio").style.display = "inline-block";
//         document.getElementById("coracao-pintado").style.display = "none";
//     }
// }

// // ...

// // No trecho de código onde você está fazendo a alternação do coração no carrinho
// // Certifique-se de que o localStorage seja atualizado corretamente
// localStorage.setItem('coracaoEstadoPerfil', 'pintado'); // ou 'vazio' conforme necessário
// atualizarVisualizacaoCoracao();  // Chame esta função para refletir as mudanças na interface





// const itensCarrinho = {};



// Declaração do objeto para armazenar os itens no carrinho
const itensCarrinho = {};

function alternarContador() {
    var contadorElement = document.getElementById("contador-coracao");
    var coracaoVazio = document.getElementById("coracao-vazio");
    var coracaoPintado = document.getElementById("coracao-pintado");

    if (contadorElement && coracaoVazio && coracaoPintado) {
        var valorInicial = parseInt(contadorElement.getAttribute("data-valor-inicial")) || 0;

        // Verifica se há itens no carrinho
        if (temItensNoCarrinho()) {
            // Se houver itens, mostra o coração pintado
            localStorage.setItem('coracaoEstado', 'pintado');
            coracaoVazio.style.display = "none";
            coracaoPintado.style.display = "inline-block";
        } else {
            // Se não houver itens, mostra o coração vazio
            localStorage.setItem('coracaoEstado', 'vazio');
            coracaoVazio.style.display = "inline-block";
            coracaoPintado.style.display = "none";
        }

        // Armazena o estado do coração no perfil do usuário
        const coracaoEstadoPerfil = localStorage.getItem('coracaoEstado');
        localStorage.setItem('coracaoEstadoPerfil', coracaoEstadoPerfil);

        // Alterna o estado ativo
        contadorElement.setAttribute("data-ativo", contadorElement.getAttribute("data-ativo") === "true" ? "false" : "true");
    }
}

//deu certo sem armazenar
// window.onload = function () {
//     const coracaoVazio = document.getElementById("coracao-vazio");
//     const coracaoPintado = document.getElementById("coracao-pintado");

//     coracaoVazio.addEventListener("click", function () {
//         atualizarEstadoCoração('pintado');
//     });

//     coracaoPintado.addEventListener("click", function () {
//         atualizarEstadoCoração('vazio');
//     });

//     // Atualiza a visualização do coração com base no estado recuperado
//     atualizarVisualizacaoCoracao();
// };

// function atualizarEstadoCoração(estado) {
//     localStorage.setItem('coracaoEstadoPerfil', estado);
//     atualizarVisualizacaoCoracao();
// }

// function atualizarVisualizacaoCoracao() {
//     const coracaoEstadoPerfil = localStorage.getItem('coracaoEstadoPerfil');

//     if (coracaoEstadoPerfil === 'pintado') {
//         exibirCoraçãoPintado();
//     } else {
//         exibirCoraçãoVazio();
//     }
// }

// function exibirCoraçãoPintado() {
//     document.getElementById("coracao-vazio").style.display = "none";
//     document.getElementById("coracao-pintado").style.display = "inline-block";
// }

// function exibirCoraçãoVazio() {
//     document.getElementById("coracao-vazio").style.display = "inline-block";
//     document.getElementById("coracao-pintado").style.display = "none";
// }

// // Certifique-se de que, ao carregar a página, o coração está inicialmente vazio
// localStorage.setItem('coracaoEstadoPerfil', 'vazio');


window.onload = function () {
    const coracaoVazio = document.getElementById("coracao-vazio");
    const coracaoPintado = document.getElementById("coracao-pintado");

    coracaoVazio.addEventListener("click", function () {
        atualizarEstadoCoração('pintado');
    });

    coracaoPintado.addEventListener("click", function () {
        atualizarEstadoCoração('vazio');
    });

    // Restaura o estado do coração e os itens do carrinho ao carregar a página
    restaurarEstadoCoração();
    restaurarItensCarrinho();
};

function atualizarEstadoCoração(estado) {
    localStorage.setItem('coracaoEstadoPerfil', estado);
    atualizarVisualizacaoCoracao();
}

function restaurarEstadoCoração() {
    const coracaoEstadoPerfil = localStorage.getItem('coracaoEstadoPerfil');

    // Se o estado foi armazenado anteriormente, restaura-o
    if (coracaoEstadoPerfil) {
        atualizarVisualizacaoCoracao();
    } else {
        // Se não houver estado armazenado, define o estado inicial como "vazio"
        localStorage.setItem('coracaoEstadoPerfil', 'vazio');
        exibirCoraçãoVazio();
    }
}

function atualizarVisualizacaoCoracao() {
    const coracaoEstadoPerfil = localStorage.getItem('coracaoEstadoPerfil');

    if (coracaoEstadoPerfil === 'pintado') {
        exibirCoraçãoPintado();
    } else {
        exibirCoraçãoVazio();
    }
}

function exibirCoraçãoPintado() {
    document.getElementById("coracao-vazio").style.display = "none";
    document.getElementById("coracao-pintado").style.display = "inline-block";
}

function exibirCoraçãoVazio() {
    document.getElementById("coracao-vazio").style.display = "inline-block";
    document.getElementById("coracao-pintado").style.display = "none";
}

// Agora você deve ter um mecanismo para armazenar e restaurar os itens do carrinho,
// dependendo da implementação real do seu carrinho.
// Aqui um exemplo simples usando array no localStorage.

function adicionarItemAoCarrinho(itemNome, itemPreco) {
    const listaItens = document.getElementById("itens-lista");
    const liItem = criarLIItem(itemNome, itemPreco);

    listaItens.appendChild(liItem);
    atualizarItensCarrinho(itemNome, itemPreco);
}

function criarLIItem(itemNome, itemPreco) {
    const liItem = document.createElement("li");
    liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="remove" onclick="removeCarrinho('${itemNome}')">-</button>
            <span class="quantity">1</span>
            <button class="add" onclick="addMaisUm('${itemNome}')">+</button>
            <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>
    `;
    return liItem;
}



function restaurarItensCarrinho() {
    const usuarioAtual = localStorage.getItem('nomeUsuario');
    const carrinhoUsuario = JSON.parse(localStorage.getItem(usuarioAtual));

    if (carrinhoUsuario && carrinhoUsuario.itensCarrinho) {
        // Restaura os itens do carrinho
        itensCarrinho = carrinhoUsuario.itensCarrinho;

        // Atualiza a visualização do carrinho
        for (let item in itensCarrinho) {
            const liItem = itensCarrinho[item].liItem;
            document.getElementById("itens-lista").appendChild(liItem);
        }

        updateCarrinho();
    }
}





function addCarrinho(itemNome, itemPreco) {
    const listaItens = document.getElementById("itens-lista");

    // Obtenha o identificador único do usuário
    const usuarioAtual = localStorage.getItem('nomeUsuario');

    // Verifica se o item já está no carrinho
    if (itensCarrinho[itemNome]) {
        // Remove o item do carrinho
        listaItens.removeChild(itensCarrinho[itemNome].liItem);
        delete itensCarrinho[itemNome];
    } else {
        // Cria um novo elemento li para representar o item no carrinho
        const liItem = document.createElement("li");
        liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
            <span class="quantity">1</span>
            <button class="add" onclick="addMaisUm('${itemNome}', ${itemPreco})">+</button>
            <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>  
        `;

        // Adiciona o novo item à lista
        listaItens.appendChild(liItem);

        // Adiciona o item ao carrinho com o identificador único do usuário
        itensCarrinho[itemNome] = {
            quantity: 1,
            precoTotal: itemPreco,
            liItem: liItem
        };

        // Armazena os itens no localStorage, associados ao usuário atual
        const carrinhoUsuario = JSON.parse(localStorage.getItem(usuarioAtual)) || {};
        carrinhoUsuario.itensCarrinho = itensCarrinho;
        localStorage.setItem(usuarioAtual, JSON.stringify(carrinhoUsuario));
    }

    // Calcula o valor total
    let precoTotal = 0;
    for (let item in itensCarrinho) {
        precoTotal += itensCarrinho[item].precoTotal;
    }

    // Atualiza o valor total
    document.getElementById("preco-total").innerHTML = "Valor Total: R$" + precoTotal.toFixed(2);
    updateCarrinho();
}



// ...

// 




// codigo funcionando sem armazenar
// function addCarrinho(itemNome, itemPreco) {
//     const listaItens = document.getElementById("itens-lista");

//     // Verifica se o item já está no carrinho
//     if (itensCarrinho[itemNome]) {
//         // Remove o item do carrinho
//         listaItens.removeChild(itensCarrinho[itemNome].liItem);
//         delete itensCarrinho[itemNome];
//     } else {
//         // Cria um novo elemento li para representar o item no carrinho
//         const liItem = document.createElement("li");
//         liItem.innerHTML = `
// <div class="item">
//     <span>${itemNome}</span>
//     <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
//     <span class="quantity">1</span>
//     <button class="add" onclick="addMaisUm('${itemNome}', ${itemPreco})">+</button>
//     <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
// </div>  
// `;

//         // Adiciona o novo item à lista
//         listaItens.appendChild(liItem);

//         // Adiciona o item ao carrinho
//         itensCarrinho[itemNome] = {
//             quantity: 1,
//             precoTotal: itemPreco,
//             liItem: liItem
//         };
//     }

//     // Calcula o valor total
//     let precoTotal = 0;
//     for (let item in itensCarrinho) {
//         precoTotal += itensCarrinho[item].precoTotal;
//     }

//     // Atualiza o valor total
//     document.getElementById("preco-total").innerHTML = "Valor Total: R$" + precoTotal.toFixed(2);
//     updateCarrinho();

// }






//funciona sem armazenar
// function addMaisUm(itemNome, itemPreco) {
//     const listaItens = document.getElementById("itens-lista");

//     // Adiciona o item ao carrinho
//     if (itensCarrinho[itemNome]) {
//         itensCarrinho[itemNome].quantity++;
//         itensCarrinho[itemNome].precoTotal += itemPreco;
//         itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
//         itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
//     } else {
//         // Cria um novo elemento li para representar o item no carrinho
//         const liItem = document.createElement("li");
//         liItem.innerHTML = `
// <div class="item">
//     <span>${itemNome}</span>
//     <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
//     <span class="quantity">1</span>
//     <button class="add" onclick="addMaisUm('${itemNome}', ${itemPreco})">+</button>
//     <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
// </div>  
// `;

//         // Adiciona o novo item à lista
//         listaItens.appendChild(liItem);

//         // Adiciona o item ao carrinho
//         itensCarrinho[itemNome] = {
//             quantity: 1,
//             precoTotal: itemPreco,
//             liItem: liItem
//         };
//     }

//     // Calcula o valor total
//     let precoTotal = 0;
//     for (let item in itensCarrinho) {
//         precoTotal += itensCarrinho[item].precoTotal;
//     }

//     // Atualiza o valor total
//     document.getElementById("preco-total").innerHTML = "Valor Total: R$" + precoTotal.toFixed(2);
//     updateCarrinho();
// }



//funcionando sem armazenar
// function removeCarrinho(itemNome, itemPreco) {
//     if (itensCarrinho[itemNome]) {
//         // Verifica se a quantidade é 1 antes de remover o item
//         if (itensCarrinho[itemNome].quantity === 1) {
//             const listaItens = document.getElementById("itens-lista");
//             const liItemToRemove = itensCarrinho[itemNome].liItem;
//             listaItens.removeChild(liItemToRemove);
//             delete itensCarrinho[itemNome];

//             // Atualiza a imagem do coração para "coracao-vazio"
//             document.getElementById("coracao-vazio").style.display = "inline-block";
//             document.getElementById("coracao-pintado").style.display = "none";
//         } else {
//             // Atualiza a quantidade e o preço total
//             itensCarrinho[itemNome].quantity--;
//             itensCarrinho[itemNome].precoTotal -= itemPreco;
//             itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
//             itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
//         }

//         updateCarrinho();
//     }

//     // Calcula o valor total
//     let precoTotal = 0;
//     for (let item in itensCarrinho) {
//         precoTotal += itensCarrinho[item].precoTotal;
//     }

//     // Atualiza o valor total
//     document.getElementById("preco-total").innerHTML = "Valor Total R$" + precoTotal.toFixed(2);
// }

function addMaisUm(itemNome) {
    // Adiciona o item ao carrinho
    if (itensCarrinho[itemNome]) {
        itensCarrinho[itemNome].quantity++;
        itensCarrinho[itemNome].precoTotal += itensCarrinho[itemNome].itemPreco;
        itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
    } else {
        // Cria um novo elemento li para representar o item no carrinho
        const liItem = criarLIItem(itemNome, itensCarrinho[itemNome].itemPreco);

        // Adiciona o novo item à lista
        document.getElementById("itens-lista").appendChild(liItem);

        // Adiciona o item ao carrinho
        itensCarrinho[itemNome] = {
            quantity: 1,
            itemPreco: itensCarrinho[itemNome].itemPreco,
            liItem: liItem
        };
    }

    atualizarLocalStorage();
    updateCarrinho();
}

function atualizarLocalStorage() {
    const usuarioAtual = localStorage.getItem('nomeUsuario');
    const carrinhoUsuario = JSON.parse(localStorage.getItem(usuarioAtual)) || {};
    carrinhoUsuario.itensCarrinho = itensCarrinho;
    localStorage.setItem(usuarioAtual, JSON.stringify(carrinhoUsuario));
}


function updateCarrinho() {
    let cont = 0;
    for (let item in itensCarrinho) {
        cont += itensCarrinho[item].quantity;
    }
    document.getElementById("cont-favoritos").innerHTML = cont;
}


function removeCarrinho(itemNome) {
    if (itensCarrinho[itemNome]) {
        // Verifica se a quantidade é 1 antes de remover o item
        if (itensCarrinho[itemNome].quantity === 1) {
            const listaItens = document.getElementById("itens-lista");
            const liItemToRemove = itensCarrinho[itemNome].liItem;
            listaItens.removeChild(liItemToRemove);
            delete itensCarrinho[itemNome];
        } else {
            // Atualiza a quantidade e o preço total
            itensCarrinho[itemNome].quantity--;
            itensCarrinho[itemNome].precoTotal -= itensCarrinho[itemNome].itemPreco;
            itensCarrinho[itemNome].liItem.querySelector(".quantity").innerHTML = itensCarrinho[itemNome].quantity;
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2);
        }

        atualizarLocalStorage();
        updateCarrinho();
    }
}


//sem armazenar
// function updateCarrinho() {
//     let cont = 0;
//     for (let item in itensCarrinho) {
//         cont += itensCarrinho[item].quantity;
//     }
//     document.getElementById("cont-favoritos").innerHTML = cont;
// }


//sem armazenar
// function limparCarrinho() {
//     const itensLista = document.getElementById("itens-lista");

//     // Verifica se o carrinho está vazio
//     if (itensLista.children.length === 0) {
//         // Carrinho vazio, a função não faz nada
//         return;
//     }

//     // Limpa os itens do carrinho
//     itensLista.innerHTML = "";

//     // Atualiza o valor total
//     document.getElementById("preco-total").innerHTML = "Valor Total: R$0,00";

//     // Limpa o objeto de itens no carrinho
//     for (let itemNome in itensCarrinho) {
//         delete itensCarrinho[itemNome];
//     }

//     // Atualiza o contador de itens no carrinho
//     updateCarrinho();

//     // Chama a função para reverter os corações para o estado vazio
//     alternarContador();
//     atualizarVisualizacaoCoracao()

// }

function limparCarrinho() {
    const itensLista = document.getElementById("itens-lista");

    // Verifica se o carrinho está vazio
    if (itensLista.children.length === 0) {
        // Carrinho vazio, a função não faz nada
        return;
    }

    // Limpa os itens do carrinho
    itensLista.innerHTML = "";

    // Limpa o objeto de itens no carrinho
    for (let itemNome in itensCarrinho) {
        delete itensCarrinho[itemNome];
    }

    // Atualiza o valor total
    document.getElementById("preco-total").innerHTML = "Valor Total: R$0,00";

    // Atualiza o contador de itens no carrinho
    updateCarrinho();

    // Chama a função para reverter os corações para o estado vazio
    alternarContador();
    atualizarVisualizacaoCoracao();

    // Atualiza o localStorage com o carrinho vazio
    const usuarioAtual = localStorage.getItem('nomeUsuario');
    const carrinhoUsuario = JSON.parse(localStorage.getItem(usuarioAtual)) || {};
    carrinhoUsuario.itensCarrinho = {};
    localStorage.setItem(usuarioAtual, JSON.stringify(carrinhoUsuario));
}


function toggleFavoritos() {
    const itensCarrinhoDiv = document.getElementById("carrinho-itens");
    if (itensCarrinhoDiv.style.display === "none") {
        itensCarrinhoDiv.style.display = "block";
    } else {
        itensCarrinhoDiv.style.display = "none";
    }
}



















