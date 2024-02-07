//Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
}

//First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo;');
    funcao();
};
// executaFuncao(souUmDado); Aqui posso escrever so assim!
souUmDado();

// Arrow fuction
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    // falar: function() Aqui posso escrever so assim!
     falar() {
        console.log('Estou falando...');
    }
};
 obj.falar();