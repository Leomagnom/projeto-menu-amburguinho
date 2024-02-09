//escopo Global esta fora da variavel.
//Closures é a abillidade que a funcao te de asseçar o seu escopr lexiço
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());