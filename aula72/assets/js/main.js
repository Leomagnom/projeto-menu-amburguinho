// defineProperty-> getter e Setters
function Produto(nome, preco, estoque) {//->dessa forma o código fica mais compaquito
  this.nome =nome;
  this.preco = preco;
 let estoquePrivado = estoque;
 Object.defineProperty(this,'estoque', {
  enumerable:true,
  configurable: true,
  get: function(){
    return estoquePrivado;
  },
   set: function(valor) {
     estoquePrivado = valor;
   }
 });
}

const p1 = new Produto('Camiseta',20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);