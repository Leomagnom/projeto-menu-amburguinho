//  function recursiva(max){
//     if (max >= 10) return;
//     max++;
//     console.log(max); // _. aqui começa do 1.
//     recursiva(max);
//  }

//  recursiva(0);

 function recursiva(max){
     console.log(max); //-> aqui começa do 0.
    if (max >= 10) return;
    max++;
    recursiva(max);
 }

 recursiva(0);