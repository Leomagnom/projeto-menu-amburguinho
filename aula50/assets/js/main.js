// argumentos que sustenta todos os argumentos enviados
// function funcao(a, b, c) {
// let total = 0;
// for (let argumento of arguments) {
//     total += argumento;
// }
// console.log(total, a, b, c);
// }
// funcao( 1, 2, 3, 4, 5, 6, 7 );

// function funcao(a, b, c, d, e, f)-> parametros. 
//{ console.log(a, b, c, d, e, f);}
// funcao(1, 2, 3, 4, 5, 6, 7); -> argumentos enviiados para os parametros. 

// function funcao(a, b = 2, c = 4) { //-> metodo novo
//     // b =b || 0; -> metodo antigo
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20); // -> esse não é um metodo recomendado

// function funcao({nome, sobrenome, idade}) //->fazendo desestruturação
//  {console.log(nome, sobrenome, idade);}

// funcao({ nome: 'Leonardo', sobrenome: 'Magno', idade: 43 });//modo de fazer 1

// function funcao({nome, sobrenome, idade}) 
//  {console.log(nome, sobrenome, idade);}

//  let obj = { nome: 'Leonardo', sobrenome: 'Magno', idade: 43 };// modo de fazer 2
//  funcao(obj);

//  function funcao([valor1, valor2, valor3])//-> desestruturacao de array 
//  {console.log(valor1, valor2, valor3);}

//  funcao(['Leonardo','Magno', 43]);

//  function conta(operador, acumulador, numeros) {
//     console.log(operador, acumulador, numeros);
//  }conta('+', 0, [20, 30, 40, 50]);

function conta(operador, acumulador, ...numeros){//-> os (...) são chamados Hash operator
 for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
 }
 console.log(acumulador);
}
conta('-', 200, 20, 30, 40, 50);
