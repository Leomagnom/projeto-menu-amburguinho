// Factory function (Função fábrica)
// Constructor Function (Função construtora)
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        // Getter
       get nomeCompleto() {
           return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
           valor = valor.split(' ');//->é um vetor, tranformou em um array
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
           //   console.log(valor);
        },

        fala(assunto = 'falando sobre CSS') {
        return `${this.nome} está ${assunto}.`;
        }, 
        altura: a,
        peso: p,
        //Getter
         get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };   
}

const p1 = criaPessoa ('Luiz','Otávio', 1.8, 80);
p1 .nomeCompleto ='Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

// console.log(p1.fala('falando sobre JS'));
// console.log(p1.imc);
// const p2 = criaPessoa ('Maria', 'Joaquina', 1.6, 42);
// console.log(p2.fala('falando sobre CSS'));
// console.log(p2.imc)