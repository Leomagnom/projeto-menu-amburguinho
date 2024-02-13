//Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDrobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDrobro);


//Para cada elemento:
//Retorne apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto (id)
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome: 'Maria',idade: 23},
    {nome:'Eduardo',idade:55},
    {nome:'Leticia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47},
];

const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);//->Retorna nome

const idade = pessoas.map(obj => ({ idade: obj.idade}));
// console.log(idade);//->Retorna a chave

const comIds = pessoas.map(function(obj,indece){
    const newObj = {...obj };
    newObj.id = (indece + 1) * 1000;
    return newObj;
});
// console.log(pessoas);
console.log(comIds);


