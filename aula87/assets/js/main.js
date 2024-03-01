function rand(min, max) {
min *= 1000;
max *= 1000;
return Math.floor(Math.random() * (max- min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') { 
            reject('CAI NO ERRO'); 
            return;
        }
        setTimeout(() => {
            resolve(msg. toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

function baixaPagina() {
  const emCache = true ;

  if(emCache) {
    return Promise.resolve('Página em cache');// cai no "then"
    // return Promise.reject('Página em cache');// cai no "catch"
  } else{
    return esperaAi('Baixei a página', 3000);
  }
}
baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Prosise 1', rand(1, 5)),//"rand" retorna aliatorio
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('promise 3', rand(1, 5)),
//     // esperaAi('Prosise 1', 3000),//retorna o menor primeiro
//     // esperaAi('Promise 2', 500),
//     // esperaAi('promise 3', 1000),
//     // esperaAi(1000, 1000),
//     // 'Outro valor'
// ];

// Promise.race(promises)//mostra a primeira que foi resolvida.
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });


// Promise.all(promises)
// .then(function(valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro);
// });