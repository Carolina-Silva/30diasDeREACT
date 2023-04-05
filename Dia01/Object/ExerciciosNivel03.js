// Exercícios: Nível 3
// 1 Crie um objeto literal chamado personAccount . Possui propriedades firstName, lastName, Incomes, Expense e possui os métodos totalIncome, totalExpense, accountInfo, addIncome, addExpense e accountBalance . Receitas é um conjunto de receitas e sua descrição e despesas é um conjunto de receitas e sua descrição.
  


const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]
// 2 Imagine que você está obtendo a coleção de usuários acima de um banco de dados MongoDB. 
// a. Crie uma função chamada signUp que permite ao usuário adicionar à coleção. Se o usuário existir, informe ao usuário que ele já possui uma conta.
// b. Crie uma função chamada signIn que permite ao usuário entrar no aplicativo

// 3 A matriz de produtos possui três elementos e cada um deles possui seis propriedades. a. Crie uma função chamada rateProduct que avalia o produto b. Crie uma função chamada averageRating que calcule a classificação média de um produto

// 4 Crie uma função chamada likeProduct. Esta função ajudará a gostar do produto se não for apreciado e a remover o gosto se tiver gostado.