// Oque estou fazendo é chamado de composição, na programação.
// Tambem é chamado de 'Mixing'
const falar = {
    falar (){
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};
//Aqui abaixo estou usando:-> Splash operator.
//  const pessoaPrototype = {...falar,...comer,...beber}
//Aqui abaixo estou usando:Object.assign; da o mesmo resultado.
   const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa ('Luis', 'Otávio');
const p2 = criaPessoa ('Maria','Eduarda');
console.log(p1);
console.log(p2);