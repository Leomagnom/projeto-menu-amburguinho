class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
   console.log(`${this.nome} está falando.`);
  }
  
  comendo() {
    console.log(`${this.nome} está comendo.`);
  }
  
  bebendo() {
    console.log(`${this.nome} está bebendo.`);
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Eduarda');
const p3 = new Pessoa('joana', 'Darque');
const p4 = new Pessoa('Antonio', 'Fagundes');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);