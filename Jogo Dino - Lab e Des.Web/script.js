// variáveis que controlam os eventos do personagem e do quadrado
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

// cria função para controlar o pulo do personagem
function pular() {
    if(personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 500)
}

// adiciona um ouvinte de evento para detectar a tecla espaço pressionada *
document.addEventListener('keydown', function(event) {
    if(event.code === 'Space') {
        pular()
    }
})

// cria função de colisão do obstáculo
var testarColisao = setInterval(function() {
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= -50) {
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Fim de Jogo')
    }
}, 10)


