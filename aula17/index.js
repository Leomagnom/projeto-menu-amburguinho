//function soma(x = 1, y = 1) { // -> Isso é uma declaração Clássica de Funciton
//    const resultado = x + y;
//    return resultado;
//}

//const resultado = soma(4, 2);
//console.log(resultado);

//const raiz = function (n) {  //-> Modo de criar raiz quadrada
//return n ** 0.5; // -> cimbolo de raiz quadrada
//};
const raiz = n => n ** 0.5; //-> funciona do mesmo geito da (function), e quando tenho só um paramemtro, posso eliminar -> '(n),'deixando só -> 'n' 

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
