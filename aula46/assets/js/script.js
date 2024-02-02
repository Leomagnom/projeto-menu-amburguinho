function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-BR', {
     hour12:false
   });
}

// function funcaoDoInterval(){
//    console.log(mostraHora());
// }  // abreviação e meloria no codígo abaixo.

// setInterval(funcaoDoInterval, 1000);

// function mostraHora2() {
//    let data =new Date();

//    return data.toLocaleTimeString('pt-BR', {
//       hour12: false
//    });
// }

// setInterval(function() {
//    console.log(mostraHora()); // outro exeplo a baixo.
// } , 1000);

const timer = setInterval(function() {
   console.log(mostraHora());
}, 1000);

setTimeout(function(){ //essa func para foi usada pra para a acima.
   clearInterval(timer);
}, 3000); // <- dais miles segundos.

setTimeout(function(){
   console.log('Olá mundo!')
}, 5000);