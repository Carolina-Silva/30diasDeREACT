// Exercícios: Nível 1
// 1 Declare uma função fullName e ela usa firstName, lastName como parâmetro e retorna seu nome completo.
function fullName() {
  let firstName = 'Carol'
  let lastName = 'Silva'
  let space = ' '
  let fullName = firstName + space + lastName
  console.log(fullName)
}
fullName();

// 2 Declare uma função addNumbers e leva dois dois parâmetros e retorna soma.
function addNumbers(a, b){
  return a + b;
}
addNumbers(2, 5);

// 3 A área de um círculo é calculada da seguinte forma: area = π xrxr . Escreva uma função que calcula _areaOfCircle
function areaOfCircle(raio){
  return Math.PI * Math.pow(raio, 2);
}

areaOfCircle(5);

// 4 A temperatura em oC pode ser convertida em oF usando esta fórmula: oF = (oC x 9/5) + 32 . Escreva uma função que converta oC em oF convertCelciusToFahrenheit .
function CtoF(celcius){
  return (celcius * 9/5) + 32;
}

CtoF(32);


// 5 O índice de massa corporal (IMC) é calculado da seguinte forma: IMC = peso em Kg / (altura x altura) em m2 . Escreva uma função que calcule bmi . O IMC é usado para definir amplamente diferentes grupos de peso em adultos de 20 anos ou mais. Verifique se uma pessoa está abaixo do peso, normal, acima do peso ou obesa com base nas informações fornecidas abaixo.

// Os mesmos grupos se aplicam a homens e mulheres.
// Abaixo do peso : o IMC é inferior a 18,5
// Peso normal : o IMC é de 18,5 a 24,9
// Excesso de peso : o IMC é de 25 a 29,9
// Obeso : IMC é 30 ou mais

function calculaIMC(peso, altura){
  let imc = peso/ (altura * altura);

  if(imc < 18.5){
    console.log('Abaixo do peso');
  }else if(imc >= 18.5 || imc <= 24.9 ){
    console.log('Peso normal');
  }else if(imc >= 25 || imc <= 29.9 ){
    console.log('Excesso de peso');
  }else if(imc >= 30){
    console.log('Obeso');
  }else{
    console.log("Erro ao calcular");
  }
}

calculaIMC(54, 150);

// 6 Escreva uma função chamada checkSeason , ela recebe um parâmetro de mês e retorna a estação: outono, inverno, primavera ou verão.