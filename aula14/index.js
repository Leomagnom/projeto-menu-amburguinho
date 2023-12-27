//As contas em javaScript seguem patrão -> IEEE 754-2008 

let num1 =0.7; //number
let num2 = 0.1; //number
//num1 = ((num1 *100) + (num2 * 100)) /100; //-> da o resultado -> 0.8
//num1 = ((num1 *100) + (num2 * 100)) /100; //-> da o resultado -> 0.9
//num1 = ((num1 *100) + (num2 * 100)) /100; //-> da o resultado -> 1.0
num1 = Number(num1.toFixed(2));//->melhor geito de fazer
console.log(num1.toFixed(2));//-> motra para o usuário: esse é o valor do seu carrinho de compras
console.log(num1);
console.log(Number.isInteger(num1));

//num1 += num2; // -> num1 = num1 + num2;
//num1 += num2; // 0.8
//num1 += num2; // 0.9
//num1 += num2; // 1.0
//num1 += num2; // 1.1
//num1 += num2; // 1.2
//num1 += num2; // 1.3
//num1 += num2; // 1.4
//num1 += num2; // 1.5
//num1 += num2; // 1.6
//num1 += num2; // 1.7
//um1 += num2; // 1.8
//num1 += num2; // 1.9
//num1 += num2; // 2.0

//num1 = parseFloat(num1.toFixed(2));//-> numero de .flutuânte,que não é preciso, mais  número ta sendo real agora
//num1 = Number(num1.toFixed(2));// -> mesmo valor do acima
//console.log(Number.isInteger(num1))//-> false ou true



//console.log(num1.toString() + num2);//-> concatenação
//num1 = num1 .toString();// -> tranformando number em String
//console.log(num1.toString(2));//-> metodo binário
//console.log(num1.toFixed(2));//-> número foi  arendondado
//console.log(Number.isInteger(num1));//->e para ver se o número é indeteiro
//console.log(Number.isNaN(temp));//-> esse número é false ou true
//let temp = num1 + '5';
//console.log(temp);