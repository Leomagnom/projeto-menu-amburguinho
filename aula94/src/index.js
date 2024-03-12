// import {nome as nome2, sobrenome, idade, soma, Pessoa as OutraCoisa} from './modulo1';

// const p1 = new OutraCoisa('Luiz', 'Otávio');
// console.log(p1);

// import * as MeuModulo from './modulo1'; //->(*) import tudo.
// console.log(MeuModulo);

// console.log(qualquerNome(5, 5));

import multiplica,{nome, sobrenome,idade, soma} from './modulo1'
console.log(multiplica(5, 40));
console.log(nome, sobrenome, idade, soma(4, 4));