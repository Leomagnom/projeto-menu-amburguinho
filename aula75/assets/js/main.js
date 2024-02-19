 //new Object -> Object.prototype
// const objA= {
//     chaveA: 'A'
// // _proto_: Object.prototype
// };
// //new Object -> Object.prototype
// const objB= {
//     chaveB:'B'
//     // _proto_: objA
//     };
//     const objC = new Object();
//     objC.ChaveC = 'C'

//     Object.setPrototypeOf(objB , objA);
//     Object.setPrototypeOf(objC, objB);
//     console.log(objB.chaveA);
 
function Produto(nome, preco) {
this.nome = nome;
this.preco = preco;
}
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - ( this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
const p1 = new Produto('Camiseta', 50);
// p1.desconto(100);
// p1.aumento(100);
// console.log(p1);

//Literal-> P2 vai herda a função acima, usando o comando:
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); //Que esta aqui!!!

p2.aumento(10);

// const p3 = Object.create(Produto.prototype);// Cria o objeto, e set o prototype dele.  
//  p3.preco = 113;
//  p3.aumento(10);
//  console.log(p3);
//--------------------------------------------------------------------------------------
//Esse final é abaixo da variável, é opcional.
const p3 = Object.create(Produto.prototype, {
 preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
 },
 tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42

 },
});
p3.aumento(10);
console.log(p3);
