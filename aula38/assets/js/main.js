const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBodoy = estilosBody.backgroundColor;
console.log(backgroundColorBodoy);
// aqui abaixo, usei For of para mudar a cor do projeto
for(let p of ps){//-> Usei essa função para mudar a cor style do projeto 
    p.style.backgroundColor = backgroundColorBodoy;
    p.style.color = '#ffffff';

}