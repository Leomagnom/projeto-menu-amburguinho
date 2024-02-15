// defineProperty->  essa define uma propedade.
// defineProperties->essa define varias de uma vez.
//--------------------------------------------------------------------------------------
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true,// mostra a chave
    value: estoque, // valor
    writable: true,// pode alterar se -> true, false -> não
    configurable:true // configurable -> true p ser configuravel, -> false não 
  });
  Object.defineProperties(this,{ //-> forma uma coisa mais sensível, essa é a melhor forma
    nome:{
      enumerable: true,
      value: nome, 
      writable: true,
      configurable:true
    },
    preco:{ 
      enumerable: true,
      value: preco, 
      writable: true,
      configurable:true
    }
  });
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
for(let chave in p1) {
  console.log(chave);
}
//-------------------------------------------------------------------------------------

function Produto(nome, preco, estoque) {//->dessa forma o código fica mais compaquito
  this.nome =nome;
  this.preco = preco;

 Object.defineProperty(this,'estoque', {
   enumerable:true,
  Value: estoque,
  writable:true,
  configurable: true
 });
}

const p2 = new Produto('Camiseta',20, 3);
console.log(p1);
for(let chave in p1) {
  console.log(chave);
}