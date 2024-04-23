const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));//->faz o tratamento do body.

// /profiles/12345? -> parametros de url
// campanha=googleads & -> curry strings, utilisando express
// nome_campanha=seila

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"> //=> aqui manda pra
  <button>Olá mundo da progamação, estou chegando</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
  //-> /profiles/3
  //-> /profile/?chave1=valor1&chave2=valor2&chave3=valor3
  //
console.log(req.params);
console.log(req.query);
res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);//cá
});


app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
} );