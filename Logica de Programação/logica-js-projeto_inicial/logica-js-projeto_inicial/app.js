alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroScreto = parseInt(Math.random () * numeroMaximo + 1); 
console.log(numeroScreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao numeroSecreto
while (chute != numeroScreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroScreto) {
        break;  
    } else {
        if (chute > numeroScreto) {
        alert(`O número secreto é menor que ${chute}`);
        } else {
        alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }   
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroScreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroScreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroScreto} com ${tentativas} tentativa`);
// }
