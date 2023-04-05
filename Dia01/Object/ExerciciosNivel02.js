// Exercícios: Nível 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40,
    getSkills: function(){
      allSkills = this.skills.length;
      return allSkills;
    }

  }
}

// 1 Encontre a pessoa que tem muitas habilidades no objeto de usuários.
console.log(users.Alex.getSkills);
console.log(users.Asab.getSkills);
console.log(users.Brook.getSkills);
console.log(users.Daniel.getSkills);
console.log(users.John.getSkills);
console.log(users.Paul.getSkills);
console.log(users.Thomas.getSkills);



// 4 Defina seu nome no objeto de usuários sem modificar o objeto de usuários original
const copyUsers = Object.assign({}, users);
copyUsers = Carol;


// 5 Obtenha todas as chaves ou propriedades do objeto de usuários
const keys = Object.keys(copyUsers);
console.log(keys);

// 6 Obtenha todos os valores do objeto de usuários
const values = Object.values(copyUsers);
console.log(values);
