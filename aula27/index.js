//?: -> operador ternário
//(condição) ? 'Valor verdadeiro': 'Valor para falso';
 const pontuacaoUsuario = 500;
const nivelUsuário = pontuacaoUsuario >= 1000 ? 'Usuário VIP ': 'Usuário nornal';
console.log(nivelUsuário);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuário, corPadrao)

 //  if (potuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
//  }else{
//     console.log('Usuário normal');
//  }