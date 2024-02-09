//  IIFE -> Immediately invoked function expression
//  (function(){ ->Essa função esta,
//     const nome = 'Luiz';
//     console.log(nome);-> protegida do escopo global.
//  })();

(function(idade, peso, altura) {//-> aqui esat os parâmetros
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(43, 80, 1.80); // -> esta os argumentos


