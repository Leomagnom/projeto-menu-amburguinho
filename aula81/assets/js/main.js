//Aqui abaixo tenho uma propriedade Privada.
const _velocidade = Symbol('velocidade');//Não deixa fazer alteração involuntária.
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {//Aqui esta configurado para acelerar de 0 a 100.
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];// Aqui esta returnando valor real

  }
  acelerar() {
    if(this[_velocidade]>= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 100) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');
for(let i = 0; i <= 200; i++) {//Pra acelerar de 0 a 100, tenho que comentar essa linha.
  c1.acelerar();
}
c1.velocidade = 80;
console.log(c1.velocidade);