// defineProperty-> getter e Setters
function Produto(nome, preco, estoque) { 
  this.nome =nome;
  this.preco = preco;
 let estoquePrivado = estoque;
 Object.defineProperty(this,'estoque', {
  enumerable:true,
  configurable: true,
  get: function(){ // Quando esta usando uma function Construtora, é assim de usa Get e Set.
    return estoquePrivado;
  },
   set: function(valor) {
    if (typeof valor !== 'number') {
      throw new TypeError('Mensagem');
    }
     estoquePrivado = valor;
   }
 });
}

const p1 = new Produto('Camiseta',20, 3);
// console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);
//------------------------------------------------------------///
function CriaProduto(nome) {//->Get e Set na função factury
  return {
    get nome() {//-> obtem o valor. 
      return nome;      
    },
    set nome(valor) {//-> seta o valor.
      valor = valor.replace('coisa.','');
      nome = valor;
    }
  };
}

const p2 = CriaProduto('Camiseta');
p2.nome = 'qualquer coisa.';
console.log(p2.nome);