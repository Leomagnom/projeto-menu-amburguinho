// Escreva uma funçaõ que recebe 2 números e retorne o maior deles
function max(x, y) {
    if (x> y) {
        return x;
    }else { // melhoria no código aplicadas no exeplo abaixo
        return y; 
    }
}
console.log(max(1, 2));

function max(x, y) {
    if (x> y) {
 // não precisa do  (else) no código///////////////                
    } 
        return y; 
    }
console.log(max(1, 2));
////////////////////////////////////////////////////////////
function max(x, y) {
    if (x> y) 
    return x; return y;  // melhoria no código     
}
console.log(max(1, 2));
////////////////////////////////////////////////////////////
function max(x, y) {
  return x > y ? x : y; // melhoria no código
}
console.log(max(1 , 2));
////////////////////////////////////////////////////////////
const max2 = (x, y) => { // melhoria no código
    return x > y ? x : y; };
 console.log(max2(1, 2));
////////////////////////////////////////////////////////////
 const max3 = (x, y) => x > y ? x : y ; // melhoria no código
 console.log(max3(1,2)); 