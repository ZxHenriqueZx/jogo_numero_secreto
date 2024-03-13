let listaDeSorteados = [];
let limiteNumero = 25;
let numeroSecreto = numeroAleatorio(); 
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Portuguese Male', {rate: 1.0});
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 0 e ${limiteNumero}`);        
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('h1', 'Acertou!!'); 
        exibirTexto('p', `Parabéns você acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTexto('h1', 'Errou!!');
        if (numeroSecreto < chute ) {
            exibirTexto('p', `Você errou, o numero secreto é menor que ${chute}`);
        } else {
            exibirTexto('p', `Você errou, o numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }

    limparTela();
}   

function numeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * limiteNumero + 1);
    let tamanhoLista = listaDeSorteados.length;

    if (tamanhoLista == limiteNumero) {
        listaDeSorteados = [];
    }

    if (listaDeSorteados.includes(numeroSorteado)) {
        return numeroAleatorio();
    } else {
        listaDeSorteados.push(numeroSorteado);
        console.log(listaDeSorteados);
        return numeroSorteado;
    } 
}

function limparTela() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparTela();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensagemInicial();
}

mensagemInicial()

