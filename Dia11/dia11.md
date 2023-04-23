#### Exercícios: Nível 1

- O que é um evento?
R:Ações que podem ser reconhecidas por um software.

- Qual é a diferença entre um evento de elemento HTML e um evento React?
R: não pode retornar false para evitar o comportamento padrão no React

- Escreva pelo menos 8 eventos de teclado?
R: onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit

- Escreva pelo menos 4 eventos de mouse?
R:onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick

- Quais são os eventos de mouse e teclado mais comuns?
R: onClick e onCopy

- Escreva um evento específico para o elemento de Input?
R:onInput

- Escreva um evento específico para o elemento de formulário?
R: onSubmit

- Qual é a diferença entre onInput e onChange ?
R: Em versões mais antigas poderiam demonstrar diferenças, o onInput não funcionava consistentemente entre os navegadores e era confuso para as pessoas que acessavam a Web de outras plataformas, pois esperavam que o evento "change" fogo em cada mudança, mas recentemente o comportamento padrão do evento 'onChange'. O 'onChange' que vemos no react tem o comportamento padrão do evento 'onInput'. Portanto não há diferença em ambos.

- Onde colocamos o evento onSubmit ?
R: na tag form