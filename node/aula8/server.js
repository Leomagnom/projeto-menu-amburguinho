const express = require('express');
const app = express();

// /profiles/12345? -> parametros de url
// campanha=googleads & -> curry strings, utilisando express
// nome_campanha=seila

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Olá mundo da progamação, estou chegando</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
console.log(req.params);
res.send(req.params);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});


app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
} );