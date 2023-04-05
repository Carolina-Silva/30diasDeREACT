// Exercícios: Nível 1
// 1 Obtenha a entrada do usuário usando prompt(“Digite sua idade:”). Se o usuário tiver 18 anos ou mais, dê feedback: 'Você tem idade suficiente para dirigir', mas se não tiver 18 anos, dê outro feedback informando para esperar o número de anos que ele precisa para completar 18 anos.
let idade = prompt('Sua idade é?');

if(idade >= 18){
  console.log('Você tem idade suficiente para dirigir');
}else{
  falta = 18 - idade;
  console.log('Vôce deve esperar ' + falta + ' anos para dirigir');
}

// 2 Compare os valores de myAge e yourAge usando if … else. Com base na comparação e registre o resultado no console informando quem é mais velho (eu ou você). Use prompt(“Enter your age:”) para obter a idade como entrada.
let myAge = 21;
let yourAge = prompt('Sua idade é? ');

if(yourAge > myAge){
  console.log('Você é mais velho que eu!');
  diferenca = yourAge - myAge ;
  console.log('Sou ' + diferenca + ' anos mais nova que você');
}
else if(yourAge == myAge){
  console.log('Temos a mesma idade');
}else{
  console.log('Sou mais velho que você!');
  diferenca = myAge - yourAge;
  console.log('Sou ' + diferenca + ' anos mais velha que você');

}


// 3 Se a for maior que b, retorne 'a é maior que b', caso contrário, 'a é menor que b'. Tente implementá-lo de duas maneiras
// usando if else
// operador ternário.
let a = 4
let b = 3

if(a>b){
  console.log('a é menor que b');
}else if( a = b){
  console.log('a é igual a b')
}else{
  console.log('b é maior que a');
};

a > b ? console.log('a é menor que b') : console.log('b é maior que a');


// 4 Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?
let num = 2;

if(num%2 == 0){
  console.log('é par');
}else{
  console.log('é ímpar');
};
