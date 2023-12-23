/*
Luiz Otávio Miranda  tem 30 anos, peso 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
Luiz Otávio naceu em 1980
*/ 
const nome='Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;  // peso / (altura * altura)
let anoNacimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM ); 
//console.log(imc)

//anoNacimento = 2023 - idade;
anoNacimento = 2019 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNacimento}.` );