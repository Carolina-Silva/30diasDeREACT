// Exercícios: O que é React?---------------------------------------
// O que é React?
// R: Uma biblioteca JS feita para construir interfaces reutilizaveis.

// O que é uma biblioteca?
// R: Uma coleção de códigos que podem ser utilizados no desenvolvimento 

// O que é um single page application?
// R: aplicações que todaa as funcionalidades se concentram em uma unica página;

// O que é um componente?
// R: uma função js que recebe propriedades e retorna jsx.

// Qual é a versão mais recente do React?
// R: 18


// O que é DOM?
// R:  (Document Object Model)
// HTML convertido em obj js, API que represnta e interage com HTML; (árvore) uma representação estrutural do documento web como nós e objetos, neste caso, um documento HTML.

// O que é o React Virtual DOM?
// R: a forma como o React interage com a DOM comum;

// O que um aplicativo da web ou um site (composed of) tem?

// Exercícios: Por que React? ----------------------------------
// Por que você escolheu usar react?
// R: está em alta no mercado, é possivel migrar código para react native, componentes reutilizaveis.

// Que medidas você usa para conhecer a popularidade?
// R: Repositórios GitHUb

// O que é mais popular, React ou Vue?
// R: REact

// Exercícios: JSX -----------------------------------------------
// O que é um elemento HTML?
// R: as tags HTML

// Como escrever um elemento HTML de fechamento automático?
// R: AS tags que não tem Fechamento com <img>


// O que é um atributo HTML? Escreva alguns deles
// R: são como que configurações de uma tag 
// SRC CLASS ID etc

// O que é JSX?
// R: uma junção de HTML e JS

// O que é Babel?
// R: um transpilador js

// O que é um transpilador?
// R: um conversor de códigos
//typescript -> js


// Exercícios: Elementos JSX ------------------------------------------------

// O que é um elemento JSX?
// um elemento jsx é uma junção de uma função js com tags html


// Escreva seu nome em um elemento JSX e armazene-o em uma variável de nome
const nome = <p>Carolina</p>

// Escreva um elemento JSX que exiba seu nome completo, país, e-mail, número de telefone. Use h1 para o nome e p para o restante das informações e armazene-as em uma variável de usuário
const nome2 = (
    <div>
      <h1>Carolina Nascimento silva</h1>
      <p>Brasil, carol@carol.com,  (00) 00000-0000</p>
    </div>
);

// Escreva um elemento JSX de rodapé
const footer = (
    <footer>
      <h2>Logo</h2>
      <h3>Site link</h3>
    </footer>
  )