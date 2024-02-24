class ControleRemoto { // a class é o molde que cria novos obj,e o obj criado tem seus proprios dados.
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    //Método estático
    static trocaPilha() {//metodos estaticos não tem acesso aos dados da instância
      console.log('OK, vou trocar.');      
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();