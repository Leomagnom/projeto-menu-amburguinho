 //Retorne a soma do dobro de todos os pares
 //-> Filtrar pares 
 //-> Dobrar os valores
 //-> Reduzir (somar tudo)
 const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 const numerosPares = numeros
 .filter(valor => valor % 2 === 0) //Primeros resultados os pares:[50,  80,  2, 8,  22]
 .map(valor => valor * 2)        //Dobro do valor dos pares:      [100, 160, 4, 16, 44]
 .reduce((ac, valor) => ac + valor); // Reduzil tudo: 324

 console.log(numerosPares)



 // Reduzil tudo: 324