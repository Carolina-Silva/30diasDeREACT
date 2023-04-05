// Exercícios: Nível 1
// 1 Crie um objeto vazio chamado cachorro
const cachorro = {}


// 2 Imprima o objeto cachorro no console
console.log(cachorro);

// 3 Adicione propriedades de nome, pernas, cor, idade e latido para o objeto cão. A propriedade bark é um método que retorna woof woof
cachorro = {
  nome: 'zeca',
  patas: 4,
  cor: 'caramelo',
  idade: 14,
  latido: "Au AUu",
  getDogInfo: function () {
    return `${this.nome} ${this.cor}`
  }
}

// 4 Obtenha nome, pernas, cor, idade e valor do latido do objeto cachorro
console.log(cachorro.nome);
console.log(cachorro.patas);
console.log(cachorro.cor);
console.log(cachorro.idade);
console.log(cachorro.latido);

// 5 Defina novas propriedades do objeto cachorro: raça, getDogInfo
cachorro.raca = 'viralata';
console.log(cachorro.getDogInfo());
