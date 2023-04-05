// Exercício: Nível 2

// 2 Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

// 3 No carrinho de compras a seguir, adicione, remova, edite itens

 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

 // adicione 'Carne' no início do seu carrinho de compras, caso ainda não tenha sido adicionado
shoppingCart.unshift('Meat');

// adicione Sugar no final do seu carrinho de compras, caso ainda não tenha sido adicionado
shoppingCart.push('sugar')

// remova 'mel' se você é alérgico a mel

// modificar Chá para 'Chá Verde'
shoppingCart[2] = 'green tea';

// 4 Na matriz de países, verifique se 'Ethiopia' existe na matriz, se existir, imprima 'ETHIOPIA'. Se não existir, adicione à lista de países.
import countries from "./country";
let index = countries.indexOf('Ethiopia');

if(index != -1){
  console.log('ETHIOPIA');
}else{
  countries.push('Ethiopia');
};

// 5 Na matriz webTechs, verifique se Sass existe na matriz e, se existir, imprima 'Sass é um pré-processo CSS'. Se não existir, adicione Sass ao array e imprima o array.
import webTechs from "./web_techs";
let indexWebTechs = webTechs.indexOf('Sass');

if(indexWebTechs != -1){
  console.log('Sass é um pré-processo CSS');
}else{
  countries.push('Sass');
  console.log(webTechs);
};

// 6 Concatene as duas variáveis ​​a seguir e armazene-as em uma variável fullStack.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [frontEnd, backEnd]

console.log(fullStack)
