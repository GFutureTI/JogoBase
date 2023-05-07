/* Remove os atributos padrao de margem e posicionamento da body */
*{
    margin: 0;
    padding: 0;
}

/* Cria a formatação da div "game" setada no HTML */
#game{
    width: 500px;
    height: 200px;
    border: 1px solid black;
}

/* Estiliza o personagem */
#personagem{
    width: 20px;
    height: 50px;
    background-color: red;
    /* Ajusta o posicionamento do personagem no plano cartesiano */
    position: relative;
    top: -50px;
}


.animar{
    animation: personagem 500ms infinite;
}

@keyframes personagem{
    0% {top: -50px;}
    30% {top: -100px;}
    70% {top: -100px;}
    100% {top: -50px;}
}

/* cria o obstaculo para o personagem pular*/
#quadrado{
    width: 20px;
    height: 20px;
    background-color: blue;
    position: relative;
    top: -70px;
    left: 481px;
    animation: quadrado 2s infinite linear;
}

@keyframes quadrado{
    0% {left: 481px;} /* anima a posiçaõ inicial do obstaculo*/
    100% {left: -20px;} /*anima a posiçaõ final do obstaculo */
}
