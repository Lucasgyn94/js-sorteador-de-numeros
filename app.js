const desativarBotaoReiniciar = () => {
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if (botaoReiniciar.classList.contains("container__botao")) {
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

const ativarBotaoReiniciar = () => {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    }
}

const obterListaDeNumerosAleatorios = (quantidade, minNumero, maxNumero) => {
    let listaDeNumerosAleatorios = [];
    let numeroSorteado = 0;
    for (let i = 0; i < quantidade; i++) {
        while (listaDeNumerosAleatorios.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(minNumero, maxNumero);
        }
        listaDeNumerosAleatorios.push(numeroSorteado);
    }
    return listaDeNumerosAleatorios;
}

const gerarNumeroAleatorio = (minNumero, maxNumero) => {
    return Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;
}

/* FUNÇÕES PRINCIPAIS: Sortear e Reiniciar */
const sortear = () => {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let minNumero = parseInt(document.getElementById("de").value);
    let maxNumero = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");
    
    let numerosSorteados = obterListaDeNumerosAleatorios(quantidade, minNumero, maxNumero);
    let labelResultado = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    resultado.innerHTML = labelResultado;
    ativarBotaoReiniciar();
}

const reiniciar = () => {
    document.getElementById("quantidade").value = 0;
    document.getElementById("de").value = 0;
    document.getElementById("ate").value = 0;
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    desativarBotaoReiniciar();
}

