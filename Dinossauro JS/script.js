let personagem = document.querySelector('#personagem') //variavel com o elemento html personagem
let quadrado = document.querySelector('#quadrado') //variavel com o elemento html quadrado

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    } //animação de pulo

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500) //final da animação de pulo
}

var testarColisao = setInterval( function(){ //verificador de batida

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       ) //verifica as posições do "personagem" e do "quadrado"

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){ //verifica a batida
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!') //aleta de derrota
    }
    
}, 10)