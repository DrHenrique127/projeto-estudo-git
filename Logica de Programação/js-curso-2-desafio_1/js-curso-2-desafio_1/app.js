let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleClick() {
    console.log('O botão foi clicado');
}

function loveClick() {
    console.log('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

function somaDoisx() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`A soma de ${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}