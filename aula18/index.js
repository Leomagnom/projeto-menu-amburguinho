/*function criarPessoa (nome, sobrenome, idade) {
    return{ nome,sobrenome,idade};
}
const pessoa1 = criarPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criarPessoa('fernando', 'Silva', 15);
const pessoa3 = criarPessoa('Carlos', 'Augusto', 35);
const pessoa4 = criarPessoa('Marcelo', 'Tavares', 45);
const pessoa5 = criarPessoa('Bruno ', 'D,Lucas', 55);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);
*/


/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:25,

    fala () {
        console.log('Olá mundo!');
    }
};
pessoa1.fala();
*/


const pessoa1 = {
    nome:'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();











