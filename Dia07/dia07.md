#### Exercícios: Nível 1

- Como você escreve uma função JavaScript pura?
R: Escrevendo funções que não muda qualquer estado na aplicação, sem efeitos colaterais.
Por exemplo:
    ```
    function sum(x, y){
        return x+y;
    } 
    sum(1,1) 
    ``` 
se passar os mesmos argumentos terá os mesmos resultados.

- O que é herança e como você cria um filho de uma classe pai?
R:herança é quando uma classe herda, ou obtem, atributos e métodos de uma classe pai. Para criar a classe filho se utiliza a palavra extends, para declarar que ela herda de outra classe.
Por exemplo:
    ```
    class [nome_classe_filho] extends [nome_classe_pai] {
        ...
    }
    ```

- O que é o componente React baseado em classe?
R: são componentes criados por uma classe que estende de um Componente padrão do React.

- Qual é a diferença entre o componente React funcional e o componente React baseado em classe?
R:Até a versão 16.8.0 do React componente React baseado em classe eram os unicos a ter estado e ciclo de vida.
Porém em versões mais atuais é possível usar estado e ciclo de vida em componentes funcionais utilizando os hooks, que podem ser considerado o código mais legivel.

- Quando precisamos usar componentes baseados em classe em vez de componentes funcionais?
R:podemos separar por class Components para lógicas e Functional para exibições, principalmente em versões mais antigas de React.

- Quais são os casos de uso do componente baseado em classe?
R: quando não existiam os hooks as classes eram usadas quando necessitava trocar estado ou ciclo de vida, já hoje em dia fica a critério do desenvolvedor usar componentes baseados em classes ou funcionais.

- Que tipo de componente você usa com mais frequência? Componente funcional ou baseado em classe?
R: funcional

- O que é o ciclo de vida do React? (ainda não coberto) ?
R: Os componentes seguem a lógica de ser criados (montados do DOM), se desenvolvem (updates), e morrem (desmontados do DOM), e em cada fase desse ciclo temos alguns métodos disponíveis.

- O que é estado em React? (ainda não coberto)
R: É um objeto que guarda as informações que podem mudar ao longo do ciclo de vida, esse objeto permite que o componente acompanhe as mudanças de informação a cada renderização.