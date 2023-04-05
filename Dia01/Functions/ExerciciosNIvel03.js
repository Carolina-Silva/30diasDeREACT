// Exercícios: Nível 3

// 2 Escreva uma função generateColors que pode gerar qualquer número de cores hexa.
function hex(){
    return '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
}

// 3 Chame sua função shuffleArray , ela pega um array como parâmetro e retorna um array embaralhado
function shuffleArray(arr){
    console.log(shiffle(arr));
}

// 4 Chame sua função fatorial , ela pega um número inteiro como parâmetro e retorna um fatorial do número
function fat(n){
    if (n > 1) {
        return n * fat(n - 1);
    }
    return n
}
fat(5);

