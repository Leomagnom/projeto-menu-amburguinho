class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

//Aqui abaixo:->'extends'é pra herda a class Pai acima.
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {//-> constructor.
        super(nome);  // -> super: é pra dar nome a nova class.
        
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Olha você alterou o método ligar.');
    }

    falaOi() {
        console.log('Oi');
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1)

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S8');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falaOi();