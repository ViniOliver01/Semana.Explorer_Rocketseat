function randomPhase() {
    // fazendo a seleção de elementos
    elementPergunta = document.querySelector("#perg")
    elementResposta = document.querySelector("#log")
    // definindo a opacidade inicial
    elementPergunta.style.opacity = 1;
    elementResposta.style.opacity = 1;
    // banco de dados de respostas aleatorias
    let phases = ["Com certeza", "Talves", "Será?"]
    var numRandom = Math.round((Math.random() * 2))
    // selecionando a pergunta digitada
    var perguntaP = document.getElementById('nome').value
    // Imprimir na tela
    elementPergunta.innerHTML = perguntaP
    elementResposta.innerHTML = phases[numRandom]
    // sumindo o resultado após 3000 ms
    setTimeout(function(){
        elementPergunta.style.opacity = 0;
        elementResposta.style.opacity = 0;
     }, 3000)
 }
