const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje é dia de jogar um fut, quer jogar de manhã ou de tarde?",
        alternativas: [
            {
                texto: "manhã!",
                afirmacao: "Foi jogar de manhã."
            },
            {
                texto: "tarde!",
                afirmacao: "Foi jogar à tarde."
            }
        ]
    },
    {
        enunciado: "Qual meião você prefere? Meião alto ou meião baixo?",
        alternativas: [
            {
                texto: "Alto",
                afirmacao: "Você foi de meião alto."
            },
            {
                texto: "Baixo",
                afirmacao: "Você foi de meião baixo."
            }
        ]
    },
    {
        enunciado: "Deseja algum acessório?",
        alternativas: [
            {
                texto: "Claro!",
                afirmacao: "Foi de manguito."
            },
            {
                texto: "Não!",
                afirmacao: "Foi sem nenhum acessório."
            }
        ]
    },
    {
        enunciado: "Agora posso tirar uma midia?",
        alternativas: [
            {
                texto: "simm!",
                afirmacao: "tirar várias fotos."
            },
            {
                texto: "não",
                afirmacao: "foi embora sem tirar nenhuma foto."
            }
        ]    
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpar alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Concatenar a afirmação selecionada na história final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No fut:"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}


mostraPergunta();
