#### Exercícios: Nível 1

- O que é função de ordem superior?
R: Uma função que recebe uma função e retorna outra função.

- O que é Componente de Ordem Superior?
R: Como a Função, ele recebe um componente e restorna outro componente.
por exemplo:
```
const higherOrderComponent = (Component) => {
    return (props) => {
        return <Component {...props} />
    }
}
```

- Um componente de ordem superior pode nos permitir aprimorar um componente. (T ou F)
R: ```true```
