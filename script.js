
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

let texto = document.getElementById("cor").style.color
function alterarRed(){
    texto = decisaoRed(texto)
    document.getElementById("cor").style.color = texto
}

function alterarBlue(){
    texto = decisaoBlue(texto)
    document.getElementById("cor").style.color = texto
}

function decisaoRed(cor){
    if (cor !== "red"){
        cor = "red"
    } else {
        cor = "black"
    }
    return cor
}

function decisaoBlue(cor){
    if (cor !== "blue"){
        cor = "blue"
    } else {
        cor = "black"
    }
    return cor
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Multiplicação de números
// Crie dois campos numéricos e um botão “Multiplicar”.
// Mostre o resultado da multiplicação na tela.

// Exercício 6


function multiplicar(){
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)

    let soma = n1 * n2
    document.getElementById("multi").textContent = soma
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mostrar idade
// Crie um campo para o usuário digitar a idade e um botão “Ver idade”.
// Ao clicar, mostre a mensagem:

// "Sua idade é: X anos"

// Exercício 7


function mudarIdade(){
    document.getElementById("idadeMostrar").textContent = Number(document.getElementById("idade").value)
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Alterar texto
// Crie um parágrafo com o texto:
// "Texto original"

// Crie um botão “Alterar texto” que muda o conteúdo do parágrafo para:
// "Texto alterado com JavaScript".

// Exercício 8


function alterarTexto(){
    let texto = document.getElementById("texto").textContent
    texto = textoDiferente(texto)
    document.getElementById("texto").textContent = texto
}

function textoDiferente(texto){
    if (texto != "Texto alterado com JavaScript"){
        texto = "Texto alterado com JavaScript"
    } else {
        texto = "Texto original"
    }
    return texto
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mostrar ou esconder texto
// Crie um texto na tela e um botão “Mostrar/Esconder”.
// Quando clicar, o texto deve desaparecer.
// Ao clicar novamente, o texto deve aparecer novamente.

// Exercício 9

function sumirAparecer(){
    let texto = document.getElementById("aparecido")
    texto = aOUs(texto)
    document.getElementById("aparecido").style.color = texto
}

function aOUs(texto){
    if (texto.style.color !== "white"){
        texto.style.color = "white"
    } else {
        texto.style.color = "black"
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Calculadora simples
// Crie dois campos numéricos e quatro botões:

// Somar

// Subtrair

// Multiplicar

// Dividir

// Mostre o resultado da operação na tela.

// Exercício 10


function pegarValor(){
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    n1, n2 = correcao(n1, n2)
    return {n1, n2}
}

function correcao(n1, n2){
    if (isNaN(n1)){
        n1 = 0
    }
    if (isNaN(n2)){
        n2 = 0
    }
    return n1, n2
}

function mostrarResultado(valor){
    document.getElementById("resultado").textContent = valor
}

function adicao(){
    let {n1, n2} = pegarValor()
    let resultado = n1 + n2
    return mostrarResultado(resultado)
}

function subitracao(){
    let {n1, n2} = pegarValor()
    let resultado = n1 - n2
    return mostrarResultado(resultado)
}

function multiplicao(){
    let {n1, n2} = pegarValor()
    let resultado = n1 * n2
    return mostrarResultado(resultado)
}

function divisao(){
    let {n1, n2} = pegarValor()
    let resultado = n1 / n2
    return mostrarResultado(resultado)
}


