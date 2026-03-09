
// LISTA DE EXERCÍCIOS – MANIPULAÇÃO DO DOM (JAVASCRIPT)

// Exercício 1

// Mostrar mensagem
// Crie um botão chamado “Clique aqui”.
// Quando o usuário clicar no botão, deve aparecer a mensagem:
// "Olá, seja bem-vindo!" em um parágrafo da página.


function mostrarMensagem(){
    let novaMensagem = "Olá, seja bem-vindo!"
    document.getElementById("mensagem").textContent = novaMensagem
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mostrar nome digitado
// Crie um campo de texto para o usuário digitar o nome e um botão “Mostrar Nome”.
// Quando clicar no botão, mostre a mensagem:
// "Olá, [nome digitado]" em um parágrafo.

// Exemplo:
// Olá, João

// Exercício 2

function mudarNome(){
    let nome = document.getElementById("nome").value
    document.getElementById("nomeMostrado").textContent = nome
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Soma de dois números
// Crie dois campos numéricos e um botão “Somar”.
// Quando clicar no botão, mostre o resultado da soma.

// Exemplo:
// Resultado: 10

// Exercício 3

function somar(){
    let n1 = Number(document.getElementById("number1").value)
    let n2 = Number(document.getElementById("number2").value)

    let somar = n1 + n2
    document.getElementById("soma").textContent = somar
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Contador de cliques
// Crie um botão “Clique aqui”.
// Cada vez que o botão for clicado, um contador deve aumentar e mostrar quantas vezes o botão foi pressionado.

// Exemplo:
// Cliques: 1
// Cliques: 2
// Cliques: 3

// Exercício 4

let contador = 0

function adicionar(){
    contador++
    console.log(contador)
    document.getElementById("contadorTotal").textContent = contador
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alterar cor do texto
// Crie um texto na página e dois botões:

// Vermelho

// Azul

// Quando clicar nos botões, a cor do texto deve mudar.

// Exercício 5

function alterarCor(){
    let texto = document.getElementById("cor").style.color
    if (texto === "yellow" || "black"){
        texto = "purple"
        console.log(texto)
    }
    else{
        texto = "yellow"
        console.log(texto)
    }
    document.getElementById("cor").style.color = texto
}















