// Crie uma função que receba um nome digitado no campo "Digite seu nome", gere uma saudação e mostre na página, no momento em que o botão "Clique aqui!" for acionado.

const botao = document.getElementById('boasVindas');
const inputNome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');

function saudacao() {
    let textoDaMensagem = 'Olá, ' + inputNome.value + '. Selecione sua cor favorita!';
    mensagem.innerHTML = textoDaMensagem;
}

botao.addEventListener('click', saudacao);


//Pegando o target de um elemento

function clicaNaPaleta(evento) {
  let corClicada = evento.target.className;
  let corFavorita = document.getElementById('cor-favorita');
  corFavorita.className = corClicada;

  console.log(evento.target.className);
}

let container = document.querySelector('#paleta');
container.addEventListener('click', clicaNaPaleta);