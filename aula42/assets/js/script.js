//Escreva uma função chamada ePaisagem que 
//recebe dois argumentos, largura e altura
//de uma imagem (number).
//Retorne true se a imagem estiver no modo
// paisagem.
function ePaisagem(largura, altura) {
    return largura > altura ? true : false; // melhoria no codígo
}
console.log(ePaisagem(1080, 1920));

function ePaisagem2(largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1080, 1920));

function ePaisagem3(largura, altura) {
    return largura >= altura;
}
console.log(ePaisagem3(1920, 1920));

const ePaisagem4 = (largura, altura) => largura > altura;
console.log(ePaisagem4(1080, 1920));