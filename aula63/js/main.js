//valor -       - 5     - 4      - 3       - 2        - 1    
//valor +         0       1        2         3          4
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-2, 1);
// console.log(nomes, removidos);

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removidos = nomes.splice(-2, Number.MAX_VALUE);//-> começa a remover do - 2, até o final do elemento. 
// console.log(Number.MAX_VALUE);

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removidos = nomes.splice(6, 0, 'Luiz');// adicionar 
// console.log(nomes, removidos);                                          

// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');// adicionar 2 e remover 2
// console.log(nomes, removidos);                                          

// Pop
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removidos = nomes.splice(-1, 1);//->cimulando o Pop
// console.log(nomes, removidos);                                          

// //Shift
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// const removidos = nomes.splice(0, 1);//->cimulando o Shift
// console.log(nomes,removidos)

// //Push
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//  nomes.splice(nomes.length , 0, 'Luiz');//->cimulando o Push
// console.log(nomes)

//Unshift
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 nomes.splice(0, 'Luiz', 'Claudia');//->cimulando o Unshift
console.log(nomes);