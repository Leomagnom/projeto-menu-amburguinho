// const mod1 = require('./mod1'); //exemplo 1
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome; // exemplo 2
// console.log(falaNome());

// const mod1 = require('./mod1');//exemplo 3
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// const{ nome, sobrenome, falaNome} = require('./mod1');// exemplo 4 "destructor"
// console.log(falaNome());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');
const p1 = new Pessoa('jão');
console.log(mod1);
console.log(p1);
