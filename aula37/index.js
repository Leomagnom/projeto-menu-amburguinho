const nomes = ['Luiz', 'Otávio', 'Henrique'];
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis,  array ou strings)


// for (let i = 0; i < nomes.length; i++){//-> primeiro que eu vi (clássico).
//   console.log(nomes[i]);  
// }

for (let i in nomes){ //-> segundo que eu vi.
  console.log(nomes[i]);
 }
for (let valor of nomes) { //-> terceiro que eu vi.
    console.log(valor);
}

nomes.forEach(function(valor, indece, array){ //-> quarto que vi.
    console.log(valor, indece, array );
});