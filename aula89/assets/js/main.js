// XMLHttpRequest //->Essa função pode fazer requisição de qualque tipo de dado: "HTML","JSON","XML","TEXTO PURO", etc..

//Esse é o modo novo com Promise
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        }); 
    });
  
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
   const objConfog = {
    method: 'GET',
    url:href
   };

   try{
       const response = await request(objConfog);
      carregaResultado(response);     
   } catch(e) {
    console.log(e);
   }
}
function carregaResultado(response) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = response;
}

//Esse abaixo modo antigo, de fazer o código
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);
//         } else {
//             obj.error(xhr.statusText);
//         }
//     });
// };

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
    
//     if (tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     console.log(href);

//     request({
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         erro(errorText) {
//             console.log(errorText);
//         }
//     });
// }
// function carregaResultado(response) {
//    const resultado = document.querySelector('.resultado');
//    resultado.innerHTML = response;
// }