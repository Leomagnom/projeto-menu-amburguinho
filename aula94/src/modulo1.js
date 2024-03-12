// export const nome = 'Luiz';
// export const sobrenome = 'Miranda';
// export const idade = 30;

// export default function soma(x, y) { // so export uma coisa como patrão.
//     return x + y;
// } 

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }
 const nome = 'Luiz';
 const sobrenome = 'Miranda';
 const idade = 30;
  
 function soma(x, y) {
    return x + y;
 }
 export default (x, y) => x * y;

 export {nome, sobrenome, idade, soma };