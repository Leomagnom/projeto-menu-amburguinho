// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => nome+ ' ' + sobrenome;


// // module.exports.nome = nome; //Primeira forma de exportar "original"
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome; // Segunda forma de exportar "é um link"
// exports.sobrenome = sobrenome;
// exports. falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';// Terceira forma

// console.log(exports);

class Pessoa {
    constructor(nome) {
       this.nome = nome;
    }
}
const nome = 'Leonardo'
const sobrenome = 'Magno';


module.exports = {
 nome, sobrenome,  
};
// exports.outraCoisa = 'Outra coisa';
