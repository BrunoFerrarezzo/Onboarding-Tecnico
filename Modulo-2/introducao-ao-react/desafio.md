# Introdução ao React

## Introdução React

React é uma biblioteca JavaScript, eficiente e flexível para a criação de interfaces de usuário (UI), que surgiu em 2011, no Facebook.

Dizer que React é uma biblioteca significa que este não é um framework, mas simplesmente uma coleção de funcionalidades relacionadas que podem ser chamadas pelo desenvolvedor para resolver problemas específicos — a criação de interfaces de usuário reaproveitáveis, no caso do React.

Já a principal característica de um framework é a Inversão de Controle, também conhecida como Hollywood Principle. Ou seja, quem dita o que (e como) algo deve ser feito é o framework, não o desenvolvedor — é ele quem chama o seu código, e não o contrário.

O importante disso tudo é que, em geral, bibliotecas são mais flexíveis e menos complexas do que frameworks.

No caso do React, sua única e principal função é a criação de interfaces de usuário, que organiza o que será mostrado para o usuário final na tela sem se preocupar em saber sobre o resto.

## React "create-react-app"

O JSX é incrível, mas precisa ser transpilado para JavaScript regular antes de chegar ao navegador. Normalmente, usamos um transpiler como o Babel para fazer isso. Podemos executar o Babel com uma ferramenta de build como o Webpack, que ajuda a agrupar todos nossos assets (arquivos de JavaScript, CSS, imagens, etc.) para projetos na web.

Para simplificar essas configurações iniciais, podemos usar o pacote do aplicativo Create React, do Facebook, para cuidar de toda a configuração para nós! Essa ferramenta é incrivelmente útil para iniciar a criação de um aplicativo em React, uma vez que configura tudo de que precisamos com nenhuma configuração manual!

Além de configurar seu ambiente de desenvolvimento para utilizar as funcionalidades mais recentes do JavaScript, ele fornece uma experiência de desenvolvimento agradável, e otimiza o seu app para produção. Será necessário ter `Node >= 8.10 e npm >= 5.6` na sua máquina. Para criar um novo projeto, rode:

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Comandos:

- `npx create-react-app my-app`, onde `my-app` será o nome do app(folder).
- `cd my-app`, para entrarmos no diretório do novo app.
- `npm start`, inicia o servidor de desenvolvimento.
- `npm install`, instala as dependencias do `package.json`, caso necessário.
- `npx`: É um package runner que vem com npm 5.2+.

#### Docs:
- [Create a New React App](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Create React App Github](https://github.com/facebook/create-react-app)


### Hello World

Veja um exemplo básico de renderização em React:

``` js
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

O primeiro parâmtro da função `render` é o elemento que queremos renderizar. O segundo parâmetro é o elemento que receberá o elemento a ser renderizado. Simples não?

### JSX

O React usa objetos de JavaScript para criar seus elementos. Usaremos esses elementos de React para descrever como será a interface da página, e o React será responsável por gerar os nós DOM para alcançar o resultado.

Exemplo:

```const element = <h1>Hello, world!</h1>;```

Esta sintaxe estranha de tags não é uma string, nem HTML.

É chamada JSX e é uma extensão de sintaxe para JavaScript. Recomendamos usar JSX com o React para descrever como a UI deveria parecer. JSX pode lembrar uma linguagem de template, mas que vem com todo o poder do JavaScript.

JSX produz “elementos” do React.

O React adota o fato de que a lógica de renderização é inerentemente acoplada com outras lógicas de UI: como eventos são manipulados, como o state muda com o tempo e como os dados são preparados para exibição.

Ao invés de separar tecnologias artificialmente colocando markup e lógica em arquivos separados, o React separa conceitos com unidades pouco acopladas chamadas “componentes” que contém ambos.

O React não requer o uso do JSX. Porém, a maioria das pessoas acha prático como uma ajuda visual quando se está trabalhando com uma UI dentro do código em JavaScript. Ele permite ao React mostrar mensagens mais úteis de erro e aviso.

Exemplo sem JSX:

``` js
const element = React.createElement(
    'div',
    null,
    'Hello, world!'
);
```
``` js
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

 O método `.createElement()` possui a seguinte assinatura:e:

```React.createElement( /* type */, /* props */, /* content */ );```

Vamos dividir para saber o que é cada item:

- type – uma string ou um componente React. Pode ser uma string de qualquer elemento HTML existente (e.g. 'p', 'span', ou 'header'), ou você pode passar um componente React (criaremos componentes com JSX em breve).

- props – null ou um objeto. Este é um objeto de atributos HTML e dados personalizados sobre o elemento.

- content – null, uma string, um elemento de React ou um componente de React. Qualquer coisa que você passar aqui será o conteúdo do elemento a ser renderizado. Pode ser um texto simples, código JavaScript, outros elementos de React, etc.

Agora o mesmo exemplo com JSX:

``` js
class HelloWord extends Component {
    render() {
        return <div>Hello, world!</div>
    }
}
```

Mais adiante veremos mais sobre classes. Veja que fica muito mais simples com JSX, porém, ainda assim continua sendo um objeto, apenas com um sintaxe um pouco diferente. JSX NÃO É HTML! O React é o responsável pela renderização a partir de objetos.

### Render 

Suponhamos que exista um `<div>` em algum lugar do seu código HTML:

``` <div id="root"></div> ```

Nós o chamamos de nó raiz do DOM porque tudo dentro dele será gerenciado pelo React DOM.

Aplicações construídas apenas com React geralmente tem apenas um único nó raiz no DOM. Se deseja integrar o React a uma aplicação existente, você pode ter quantos nós raiz precisar.

Para renderizar um elemento React em um nó raiz, passe ambos para `ReactDOM.render()`:

``` ReactDOM.render(<h1>Hello, world</h1>, document.getElementById('root')); ```

Elementos React são imutáveis. Uma vez criados, você não pode alterar seus elementos filhos ou atributos.

Com o que aprendemos até agora, a única forma de atualizar a interface é criar um novo elemento e passá-lo para `ReactDOM.render()`.

O React DOM compara o elemento novo e seus filhos com os anteriores e somente aplica as modificações necessárias no DOM para levá-lo ao estado desejado.

#### Docs:
- [React - Getting Started](https://reactjs.org/docs/)


## Desafio

Criar um App que exiba a frase `Hello World!` em 10 formas diferentes. Além disso, exiba a data atual em cada uma das formas, para isso será necessário o [JavaScript Date Objects](https://www.w3schools.com/js/js_dates.asp).

Seja criativo, por exemplo, use letras maiúsculas, minúsculas, de trás pra frente e etc. Usem o primeiro desafio como referencia e faça as formas difrentes sem utilizar CSS ou **simplesmente escrever** Hello World de trás pra frente, utilizem Javascript!

- No terminal e execute o comando `create-react-app introducao-ao-react`, isso criará as pastas e arquivos bases do React;
- Com as pastas base criadas, reescreva o arquivo `App.js` para que tenha até 10 textos "Hello World" diferentes. Poderá ser utilizado CSS ou métodos Javascript que alterem o texto;
- Para rodar não se esqueça de usar `npm run start` para que o App continue sendo buildado sempre que atualizar os arquivos;
- Faça [commits](https://git-scm.com/docs/git-commit) para cada forma diferente de exibição do texto;
- O nome do Merge Request deve ser o seu nome completo.

Para se destacar na execução:
- Utilize `props` e apenas um componente para exibir o Hello World
- Crie uma branch `seu-nome/introducao-ao-react` no seu repositório e faça o MR de entrega a partir dela;
- **Personalize** a página com CSS;
