//Literal de uma String são as aspas '' ""  `` .
//Array literal é feito com [].
//Um numero literal, é um numero jogado direto na variavel
//função literal é uma Function.
//Mas todos esses tem construtores.
//Objeto literal é feito pelas chaves.
//---------------------------------------------------------------------------------
// const pessoa = { //->{}<- são o corpo do obj.
  // nome: 'Luiz', //-> chave do Obj >'nome:'.
  // sobrenome: 'Otávio'};//-> chave do Obj >'nome:'.
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
//----------------------------------------------------------------------------------

//Anotação de colchetes ->[]<-
// const pessoa = { 
//   nome: 'Luiz', 
//   sobrenome: 'Otávio'};
// console.log(pessoa ['nome']);
// console.log(pessoa ['sobrenome']);

// const pessoa1 = {
//   nome: 'Lucas',
//   sobrenome: 'Machado'
// };
// const chave = 'nome';// acessando a chave dinâmicamente
// console.log(pessoa1[chave]);//Anoção de colchete
//-----------------------------------------------------------------------------------
// Construtor ->new Array();  ou ->new Array [] <-
// const pessoa2 = new Object();
// pessoa2.nome = 'Maria';
// pessoa2.sobrenome = 'Paz';
//-------------------------------------------------------------------------------------
// const pessoa3= { //->Literal
//   nome:'Maria',
//   sobrenome:'Paz'
// };
// console.log(pessoa2,pessoa3);
//-------------------------------------------------------------------------------------
// const pessoa4 = new Object();
// pessoa4.nome = 'Maria';
// pessoa4.sobrenome = 'Paz';

// delete pessoa4.nome;
// console.log(pessoa4)
//-------------------------------------------------------------------------------------
// const pessoa5 = new Object();
// pessoa5.nome ='Paulo'
// pessoa5.sobrenome = 'Almeida'
// pessoa5.idade = 44;
// pessoa5.falarNome = function(){
//   return (`${this.nome} está falando seu nome.`)
// };
// pessoa5.getDataNacimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };
// console.log(pessoa5.getDataNacimento());
//--------------------------------------------------------------------------------------
// const pessoa5 = new Object();
// pessoa5.nome ='Paulo'
// pessoa5.sobrenome = 'Almeida'
// pessoa5.idade = 44;
// pessoa5.falarNome = function(){
//   return (`${this.nome} está falando seu nome.`)
// };
// pessoa5.getDataNacimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };
//-------------------------------------------------------------------------------------
// for (let chave in pessoa5) { //Servi pra ver as chaves.
//   console.log(chave);
// }
// -------------------------------------------------------------------------------------
// for (let chave in pessoa5) {
//   console.log(pessoa5[chave]);//servi pra ver o valor da chave atual.
// }
//--------------------------------------------------------------------------------------

//Tipos de função para criar novos obj; Ex: cliente da minha loja.
//Criar um moldi que cria estes obj pra mim:'Factoy function/Constructor functions/ Classes'

// function criaPessoa(nome, sobrenome) {//Esse padrão de projeto, e 'Factory functions.
//   return{
//     nome,
//     sobrenome,
//     nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }
// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1. nomeCompleto());

function Pessoa(nome, sobrenome) {//Esse padrão de projeto, e Constructor functions
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);//Aqui estou impedindo de ser alterado todos objetos.
}
// {} <- this -> this
const p1 = new Pessoa('Luiz','Miranda');
Object.freeze(p1);//Aqui estou impedindo de ser alterado.
p1.nome = 'outra coisa';//Aqui estou alterando. 
const p2 = new Pessoa('Maria','Eduarda');
console.log(p1);
console.log(p2);
