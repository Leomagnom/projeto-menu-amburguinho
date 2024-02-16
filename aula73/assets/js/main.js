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
//---------------------------------------------------------------------------------
//-> Este valor é apontado por ambas variaveis nesse momento.
// const produto =  {nome: 'Produto', preco: 1.8};
// const caneca = {...produto,material:'porcelana'};//->produto copiado, é adicionei mais mais informação. Para isso usei o "Spread operator".

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
//-------------------------------------------------------------------------------------
// const produto =  {nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({},produto,{material: 'porcelana'});//->Object.assign(des, any),outra forma de  criar, estou copiando tambem.

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
//------------------------------------------------------------------------------------
// const produto =  {nome: 'Produto', preco: 1.8};
// const caneca = { nome: produto.nome, preco: produto.preco};//->Se vc precisa pega so uma propiedade de um Objeto.

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
//-------------------------------------------------------------------------------------

// const produto =  {nome: 'Produto', preco: 1.8};
// Object.freeze(produto);//->(congela o objeto)
// const caneca = { nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto));//->(retorna as chaves)
//-------------------------------------------------------------------------------------

// const produto = {nome: 'Produto',preco:1.8};
// Object.defineProperty(produto,'nome',{
//     writable: false,
//     configurable:false
// })
// // console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// produto.preco = 'Outra coisa';
// delete produto.nome;
// console.log(produto);
//--------------------------------------------------------------------------------------

// const produto = {nome: 'Produto',preco:1.8};
// Object.defineProperty(produto,'nome',{
//     writable: false,//->Não altera mais a propiedade.
//     configurable:false,
//     value:'Qualquer outra coisa'
// })
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// console.log(produto)
// //->(Object.getOwnPropertyDescriptor(produto,'nome')); ->Retornas as propiedades->"writable" "configurable" "value".
//------------------------------------------------------------------------------------
// const produto = {nome: 'Produto',preco:1.8};
// console.log(Object.values(produto));//-> so valores.
// console.log(Object.entries(produto));//-> valores e cahves.
//-------------------------------------------------------------------------------------
//->Cada interação do laço vou pegar um array com dois obj.
// const produto = {nome: 'Produto',preco:1.8, material:'porcelana'};
// for (let entry of Object.entries(produto)) {
//     console.log(entry);
// }
//-----------------------------------------------------------------------------------
// const produto = {nome: 'Produto',preco:1.8, material:'porcelana'};
// for (let [chave, valor] of Object.entries(produto)) {//->Usando Destructor.
//     console.log(chave, valor);
// } 
//--------------------------------------------------------------------------------------
const produto = {nome: 'Produto',preco:1.8, material:'porcelana'};
for (let valor of Object.entries(produto)) {//->Outra forma,Usando Destructor.
    console.log(valor[0], valor[1]);
 }