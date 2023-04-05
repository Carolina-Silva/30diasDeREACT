// Exercícios: Nível 3
// 1 Escreva um programa que informe o número de dias em um mês.
let mesInput = prompt('Qual mês? ');
let mes = mesInput.toLowerCase();

switch (mes) {
  case 'janeiro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'fevereiro':
    console.log('Mês de ' + mes + 'tem 28 dias')
    break
  case 'março':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'abril':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'maio':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'junho':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'julho':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'agosto':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'setembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break  
  case 'outubro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'novembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'dezembro':
    console.log('Mês de ' + mes + 'tem 31 dias')
      break   
  default:
    console.log('mês invalido')
}

  
// 2 Escreva um programa que informe o número de dias em um mês, agora considere o ano bissexto.
let anoInput = prompt('Qual ano estamos? ');
let ano = parseInt(anoInput);

if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
  let mesInput = prompt('Qual mês? ');
let mes = mesInput.toLowerCase();

switch (mes) {
  case 'janeiro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'fevereiro':
    console.log('Mês de ' + mes + 'tem 29 dias')
    break
  case 'março':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'abril':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'maio':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'junho':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'julho':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'agosto':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'setembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break  
  case 'outubro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'novembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'dezembro':
    console.log('Mês de ' + mes + 'tem 31 dias')
      break   
  default:
    console.log('mês invalido')
}
}else{
  let mesInput = prompt('Qual mês? ');
let mes = mesInput.toLowerCase();

switch (mes) {
  case 'janeiro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'fevereiro':
    console.log('Mês de ' + mes + 'tem 28 dias')
    break
  case 'março':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'abril':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'maio':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'junho':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'julho':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'agosto':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'setembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break  
  case 'outubro':
    console.log('Mês de ' + mes + 'tem 31 dias')
    break
  case 'novembro':
    console.log('Mês de ' + mes + 'tem 30 dias')
    break
  case 'dezembro':
    console.log('Mês de ' + mes + 'tem 31 dias')
      break   
  default:
    console.log('mês invalido')
}
}