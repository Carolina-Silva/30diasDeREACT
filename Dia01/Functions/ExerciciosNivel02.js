// Exercícios: Nível 2
// 1 A equação quadrática é calculada da seguinte forma: ax2 + bx + c = 0 . Escreva uma função que calcule o valor ou valores de uma equação quadrática, solveQuadEquation .

function solveQuadEquation(a, b, c){
    let delta = b*b - 4 * a * c;

    if( a == 0){
        console.log("Impossivel calcular");
    } else if (delta < 0){
        console.log("Impossivel calcular");
    }else{
        let r1 = (-b +delta**(1/2)/2*a);
        let r2 = (-b -delta**(1/2)/2*a);

        console.log(" R1= " + r1);
        console.log(" R2= " + r2);
    }


}
solveQuadEquation(0, -27, 324.0);

// 2 Declare um nome de função printArray . Ele recebe array como parâmetro e imprime valor do array.
const arr = [1,2,3];
function printArray(arr){
    console.log(arr);
}
printArray(arr);



// 4 Declare um nome de função swapValues ​​. Esta função troca o valor de x por y.
function swapValues(x, y){
    let aux = x;
    x = y;
    y = aux;

    return "X = " + x + " Y = " + y;
}
swapValues(2,1);

// 5 Declare um nome de função reverseArray . Leva array como parâmetro e retorna o inverso do array.
const arr2 = [1,2,3];
function printArray(arr2){
    console.log(arr2.reverse());
}
printArray(arr2);


// 7 Declare um nome de função addItem . Leva um parâmetro de item e retorna uma matriz após adicionar o item
function printArray(x){
    arr.push(x)
    console.log(arr);
}
printArray(4);

// 8 Declare um nome de função removeItem . Leva um parâmetro de índice e retorna uma matriz após remover um ite
function printArray(){
    arr.pop()
    console.log(arr);
}
printArray();


// 10 Escreva uma função que receba qualquer número de argumentos e retorne a soma dos argumentos
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


