let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
let pontuacao = 0 // variável para armazenar a pontuação atual

// cria função para controlar o pulo do personagem
function pular() {
    if(personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 500)
}

// adiciona um ouvinte de evento para detectar a tecla espaço pressionada
document.addEventListener('keydown', function(event) {
    if(event.code === 'Space') {
        pular()
    }
})

// adiciona um ouvinte de evento de clique no botão de reiniciar
document.querySelector('#reiniciar').addEventListener('click', function() {
    location.reload() // recarrega a página para reiniciar o jogo
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
        clearInterval(testarColisao) // interrompe a verificação de colisão
        alert('Fim de Jogo\nVocê fez ' + pontuacao + ' pontos!')
    } else {
        // se não houve colisão, incrementa a pontuação e atualiza a placa
        pontuacao++
        document.getElementById('placar').innerHTML = 'Pontuação: ' + pontuacao
    }
}, 40)
