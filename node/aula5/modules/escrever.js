const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag:'w', enconding: 'utf8'});
};

// fs.writeFile(caminhoArquivo,'Frase 1', {flag: 'w', encondig: 'utf8'});

// fs.writeFile(caminhoArquivo, json, {flag:'a'});