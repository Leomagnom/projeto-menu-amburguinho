// Produto -> aumento, desconto
// Camiseta = cor, caneca = matetrial
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
function Camiseta(nome, preco, cor) {
Produto.call(this, nome, preco) 
this.cor = cor
 }
 Camiseta.prototype = Object.create(Produto.prototype);
 Camiseta.prototype.constructor = Camiseta;

 Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
 };

function Caneca(nome, preco, cor, material ) {
Produto.call(this, nome, preco)
    this.cor = cor
    this.material = material
 }
 Caneca.prototype = Object.create(Produto.prototype);
 Caneca.prototype.constructor = Caneca;

 const caneca = new Caneca('Caneca', 9.5, 'Azul', 'plastico');
 const produto = new Produto('Gen', 111);
 const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(produto);
console.log(camiseta);
console.log(caneca);
