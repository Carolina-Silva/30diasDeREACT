// Exercício: Nível 3
// 1 O seguinte é uma matriz de 10 alunos com idades: js

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
//- Ordene a matriz e encontre a idade mínima e máxima

//- Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois) 
//- Encontre a idade média (todos os itens divididos pelo número de itens) 

//- Encontre o intervalo das idades (max minus min) - Compare o valor de (min - average) e (max - average), use o método abs()

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