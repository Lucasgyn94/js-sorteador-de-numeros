const checkValorMinimoMenorQueValorMaximo = (minNumero, maxNumero) => {
    if (minNumero >= maxNumero) {
        alert('O valor mínimo deve ser menor do que o valor máximo')
        exit();
    }    
}

const checkQuantidadeMenorQueValorDoIntervalo = (quantidade, intervalo) => {
    if (quantidade > intervalo) {
        alert(`Quantidade não deve ser maior do que o intervalo entre número máximo e mínimo. \nIntervalo: ${intervalo}`);
        exit();
    }
}

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
    let numeroSorteado = -1;

    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = gerarNumeroAleatorio(minNumero, maxNumero);
        while (listaDeNumerosAleatorios.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(minNumero, maxNumero);
        }
        listaDeNumerosAleatorios.push(numeroSorteado);
    }

    console.log(listaDeNumerosAleatorios);
    return listaDeNumerosAleatorios;
}

const gerarNumeroAleatorio = (minNumero, maxNumero) => {
    minNumero = Math.ceil(minNumero);
    maxNumero = Math.floor(maxNumero);
    return Math.floor(Math.random() * (maxNumero - minNumero + 1)) + minNumero;
}

/* FUNÇÕES PRINCIPAIS: Sortear e Reiniciar */
const sortear = () => {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let minNumero = parseInt(document.getElementById("de").value);
    let maxNumero = parseInt(document.getElementById("ate").value);
    let resultado = document.getElementById("resultado");
    let intervalo = (maxNumero - minNumero + 1);


    checkValorMinimoMenorQueValorMaximo(minNumero, maxNumero);
    checkQuantidadeMenorQueValorDoIntervalo(quantidade,  intervalo);
    
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

