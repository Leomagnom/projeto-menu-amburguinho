class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {// função => não permite alteração do this.
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSemha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSemha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSemha, 'Campos senha e repetir senha precisa ser iguais.')
    }
    if(senha.value.length < 6 || senha.value.length > 12){
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 cacteres.');
    } 
    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();//Aqui é pra não duplicar msg erro
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }

    }
    return valid;
  }

  validaUsuario(campo) {
    const usuario =  campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!usuario.macth(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisa conter  apenas letras e/ou  números.')
      valid = false;
    }

    return valid;
  }
  
  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }
    return true;
  }

  criaErro(campo, msg) { //Aqui criei o Erro
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();