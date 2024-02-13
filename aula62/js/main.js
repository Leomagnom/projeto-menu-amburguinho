// Valor por referência
//                    0         1        2      
// const nomes=['Eduardo' ,'Maria', 'Carlos'];// array literal
// nomes[2]= 'joao';
// delete nomes[2];
// console.log(nomes);

//----------------------------------------------------------------
// Esse metodo funciona para: String, Objetos, Funções, Números. mais e pouco utilizado. 
//  const nomes = new Array('Eduardo', 'Maria', 'Carlos');
//  nomes[2] = 'manoel';
//  delete nomes[2];
//  console.log(nomes);

//----------------------------------------------------------------
// Valor por referência
// const nomes=['Eduardo', 'Maria', 'Carlos']; //-> fizer aqui refleti abaixo
// const novo = nomes;//->oque fizer aqui refleti acima
// novo.pop();
// console.log(nomes);

//--------------------------------------------------------------
// const nomes=['Eduardo', 'Maria', 'Carlos']; //-> copia aqui
// const novo = [...nomes];//-> colei aqui
// novo.pop();
// console.log(nomes);
// // console.log(novo);

//--------------------------------------------------------------
// const nomes = ['Eduardo', 'maria', 'Carlos'];
// console.log(nomes.length);//-> isso é um metodo, não atributo; por isso não usa parentes.

//--------------------------------------------------------------
// const nomes = ['Eduardo', 'maria', 'Carlos'];//->remolve do array mostra ao lado
// const removido = nomes.pop();
// console.log(nomes, removido);

//---------------------------------------------------------------
// const nomes = ['Eduardo', 'maria', 'Carlos'];
// const removido = nomes.shift();//-> remove do começo
// console.log(nomes,removido);

//---------------------------------------------------------------
// const nomes = ['Eduardo', 'maria', 'Carlos'];
// nomes.push('manoel');//-> estou adicionado coisar no array.
// nomes.push('Roberto');//->posso adicionar quandos quizer.
// console.log(nomes);

//----------------------------------------------------------------
// const nomes = ['Eduardo', 'Maria', 'Carlos'];
// nomes.unshift('Claudia');//-> adicionei nomes no começo do Array.
// nomes.unshift('Antonio');//-> esse metodo pode traser problema de performace para o programa.
// console.log(nomes);
//----------------------------------------------------------------
// Valor por referência
//               0           1       2        3        4
//  const nomes=['Eduardo', 'Maria', 'Calor','Claudia','Janete'];
//  const novo = nomes.splice(0, 3); //->isso é fatiar
//  console.log(novo);
//-----------------------------------------------------------------
//  const nomes=['Eduardo', 'Maria', 'Calor','Claudia','Janete'];
//  const novo = nomes.slice(1, -3); //->isso remover itens do Array,
//  //de trás pra fente e da frente pra trás
//  console.log(novo);
//-----------------------------------------------------------------
// Converter uma String para Array
// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');//-> foi convertido
// console.log(nomes);

// const nome2 = 'Luiz, Otávio, Miranda';
// const nomes2 = nome.split(',')//-> foi convertido com virgula
// console.log(nomes2);

//------------------------------------------------------------------
//Transformando Array para String
const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);