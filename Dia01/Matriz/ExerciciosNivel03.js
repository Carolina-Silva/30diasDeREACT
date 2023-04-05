// Exercício: Nível 3
// 1 O seguinte é uma matriz de 10 alunos com idades: js

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
//- Ordene a matriz e encontre a idade mínima e máxima
ages.sort();
console.log(ages);

//- Encontortre a idade mediana (um item do meio ou dois itens do meio divididos por dois) 
let mediana = ages[4] + ages[5];

//- Encontre a idade média (todos os itens divididos pelo número de itens)
let i = 0;
while (i <= ages.length ){
  var media = media + ages[i];
}
let mediatotal = media/10;
console.log(mediatotal)

// 2 Corte os primeiros dez países da matriz de países
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
console.log(countries);

console.log(countries.slice(0, 10));


// 3 Encontre o(s) país(es) do meio na matriz de países
console.log(countries[5]);

// 4 Divida a matriz de países em duas matrizes iguais se for par. Se a matriz de países não for par, mais um país para o primeiro semestre.
console.log(countries.slice(0, 5));
console.log(countries.slice(5, 10));