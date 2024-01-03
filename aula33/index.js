const pessoa = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 30,
    endereco:{
        bairro:'Nova cidade',
        rua:'Av:zezinho bonifacio',
        n:126
  }
};
  //const nome = pessoa.nome; // -> Atribuição normal.
    const  {nome,...resto}   = pessoa;  // -> Atribuição via desestruturação.
    console.log( nome, resto);

   // Assim que é usado ://-> Atribuição via desestruturação.