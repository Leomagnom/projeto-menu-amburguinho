/*
Object.Values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
...(spread)

//já vimos
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineproperty (define uma propriedade)
*/ 

//-> este valor é apontado por ambas variaveis nesse momento.
const produto =  {nome: 'Produto', preco: 1.8};
const caneca = {...produto,material:'porcelana'};//->produto copiado, é adicionei mais mais informação. Para isso usei o "Spread operator".

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);