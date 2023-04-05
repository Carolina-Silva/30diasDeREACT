// Exercício: Nível 1

// 1 Declare uma matriz vazia ;
const matriz = [];
console.log(matriz)

// 2 Declare uma matriz com mais de 5 números de elementos
const numeros = [1,2,3,4,5,6,7];
console.log(numeros);

// 3 Encontre o comprimento da sua matriz
console.log(numeros.length);

// 4 Obtenha o primeiro item, o item do meio e o último item da matriz
console.log('primeiro item: ', numeros[0]);
console.log('item intermediária: ', numeros[3]);
console.log('último item: ', numeros[length-1]);

// 5 Declare uma matriz chamada mixedDataTypes , coloque diferentes tipos de dados na matriz e encontre o comprimento da matriz. O tamanho da matriz deve ser maior que 5
const mixedDataTypes = [
  "joão",
  "11122233344",
  20,
  "DSM",
  true,
  {dependentes: ['Maria', 'Lucas']},
];
console.log(mixedDataTypes);

// 6 Declare um nome de variável de matriz itCompanies e atribua valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon
const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon];

// 7 Imprima a matriz usando console.log()
console.log(itCompanies);

// 8 Imprima o número de empresas no array
console.log(itCompanies.length);

// 9 Imprima a primeira empresa, a empresa intermediária e a última empresa
console.log('primeira empresa: ', itCompanies[0]);
console.log('empresa intermediária: ', itCompanies[3]);
console.log('última empresa: ', itCompanies[length-1]);

// 10 Imprima cada empresa
let i = 0;
while (i <= itCompanies.length){
  console.log(itCompanies[i]);
  i++;
}

// 11 Altere o nome de cada empresa para maiúsculas, um por um, e imprima-os
let j = 0;
while (j <= itCompanies.length){
  console.log(itCompanies[j].toUpperCase());
  j++;
}

// 12 Imprima a matriz como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
console.log(itCompanies + " são grandes empresas de TI.")

// 13 Verifique se uma determinada empresa existe no array itCompanies. Se existir retorne a empresa caso contrário retorne a empresa não foi encontrada
let indexIBM = itCompanies.indexOf('IBM');
if (indexIBM != -1 ){
  console.log('Essa empresa esta no Array :) ');
}else{
  console.log('Essa empresa nã esta no Array :( ');
}

// 14 Filtre as empresas que possuem mais de um 'o' sem o método de filtro

// 15 Classifique a matriz usando o método sort()
itCompanies.sort();
console.log(itCompanies);


// 16 Inverta a matriz usando o método reverse()
itCompanies.reverse();
console.log(itCompanies);

// 17 Corte as 3 primeiras empresas da matriz
console.log(itCompanies.slice(0,3));

// 18 Corte as últimas 3 empresas da matriz
console.log(itCompanies.slice(3,5))/////////////
01234
// 19 Corte a empresa ou empresas intermediárias de TI da matriz
console.log(itCompanies.slice(2,4))


// 20 Remova a primeira empresa de TI da matriz
console.log(itCompanies.shift(0,1));

// 21 Remova a empresa ou empresas intermediárias de TI da matriz
console.log(itCompanies.shift(2));

// 22 Remova a última empresa de TI da matriz
console.log(itCompanies.pop());

// 23 Remova todas as empresas de TI
console.log(itCompanies.splice());