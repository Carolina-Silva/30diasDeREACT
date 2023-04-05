// Exercícios: Nível 2
// 1 Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let pontuacao = prompt('Digite sua pontuação: ');

  if(pontuacao >= 90 || pontuacao <= 100){
    let nota = 'A';
    console.log('Sua nota é: ' + nota);
  }else if(pontuacao >= 70 || pontuacao <= 89){
    let nota = 'B';
    console.log('Sua nota é: ' + nota);
  }else if(pontuacao >= 60 || pontuacao <= 69){
    let nota = 'C';
    console.log('Sua nota é: ' + nota);
  }else if(pontuacao >= 50 || pontuacao <= 59){
    let nota = 'D';
    console.log('Sua nota é: ' + nota);
  }else if(pontuacao >= 0 || pontuacao <= 49){
    let nota = 'F';
    console.log('Sua nota é: ' + nota);
  }else{
    console.log('Pontuação invalida!');
  }
console.log(nota);

// 2 Verifique se a estação é outono, inverno, primavera ou verão. Se a entrada do usuário for:
// Setembro, outubro ou novembro, a estação é o outono.
// Dezembro, janeiro ou fevereiro, a estação é o inverno.
// Março, abril ou maio, a estação é a primavera
// Junho, julho ou agosto, a temporada é verão
let mesInput = prompt('Qual mês? ');
let mes = mesInput.toLowerCase();

switch (mes) {
  case 'setembro':
    console.log('a estação é o outono')
    break
  case 'outubro':
    console.log('a estação é o outono')
    break
  case 'novembro':
    console.log('a estação é o outono')
    break
  case 'dezembro':
    console.log('a estação é o inverno')
    break
  case 'janeiro':
    console.log('a estação é o inverno')
    break
  case 'fevereiro':
    console.log('a estação é o inverno')
    break
  case 'março':
    console.log('a estação é a primavera')
    break
  case 'abril':
    console.log('a estação é a primavera')
    break
  case 'maio':
    console.log('a estação é a primavera')
    break  
  case 'junho':
    console.log('a estação é a verão')
    break
  case 'julho':
    console.log('a estação é a verão')
    break
  case 'agosto':
    console.log('a estação é a verão')
      break   
  default:
    console.log('mês invalido')
}


// 3 Verifique se um dia é dia de fim de semana ou dia útil. Seu script terá day como entrada.

let diaInput = prompt('Qual dia? ');
let dia = mesInput.toLowerCase();

switch (dia) {
  case 'segunda':
    console.log('dia útil')
    break
  case 'terça':
    console.log('dia útil')
    break
  case 'quarta':
    console.log('dia útil')
    break
  case 'quinta':
    console.log('dia útil')
    break
  case 'sexta':
    console.log('dia útil')
    break
  case 'sábado':
    console.log('fim de semana')
    break
  case 'domingo':
    console.log('fim de semana')
    break   
  default:
    console.log('dia invalido')
}
