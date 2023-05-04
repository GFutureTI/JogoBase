//variaveis que controlam os eventos do personagem e do quadrado
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

//cria funçao com uma condição de fazer controlar o pulo do personagem 
function pular(){
    if(personagem.classList != 'animar'){

        personagem.classList.add('animar')
    }


    setTimeout(function(){
        /*Depois de passados 500ms a classe será removida e só retornará a ser adicionada se o usuario clicar com o mouse na tela do jogo */

        personagem.classList.remove('animar')
    }, 500)

}

//cria a funçao de colisao do obstaculo
var testarColisao = setInterval(function(){

// declaraçao das variaveis a serem controladas na estrutura condicional IF
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )
/*Estrutura condicional que realizará a checagem periodica se o obstaculo colidiu com o quadrado realizando assim o "Game Over" que é sua condição final*/
    if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= -50){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Fim de Jogo')
    }

}, 10)