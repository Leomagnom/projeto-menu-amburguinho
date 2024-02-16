//Construtora-> molde (classe)
function Pesssoa(nome, sobrenome) {//-> Isso 
    this.nome = nome;                      //->aqui 
    this.sobrenome = sobrenome;                    //->e uma
    this.nomeCompleto = () =>'Original:'+ this.nome + ' ' + this.sobrenome;//->função,
}

//Pessoa.prototype === pessoa1._protp_

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}
//intâcia: objetos que vem da função.
const pessoa1 = new Pessoa('Luiz','O.');//-> pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.');//->Pessoa =Função construtora

console.log(pessoa1);
console.log(pessoa2);