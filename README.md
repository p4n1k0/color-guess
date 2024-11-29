# Boas vindas ao repositório do projeto de adivinhação de Cor!

Aqui você vai encontrar os detalhes de como foi estruturar o desenvolvimento do projeto a partir desse repositório.

# Sumário

- [Habilidades](#habilidades)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Cypress](#cypress)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicione no seu site um título com o nome do seu jogo](#1---adicione-no-seu-site-um-título-com-o-nome-do-seu-jogo)
    - [2 - Adicione um texto com o código RGB a ser adivinhado](#2---adicione-um-texto-com-o-código-rgb-a-ser-adivinhado)
    - [3 - Adicione a página opções de cores para serem adivinhadas](#3---adicione-a-página-opções-de-cores-para-serem-adivinhadas)
    - [4 - Adicione cores nas bolas elas devem ser geradas dinamicamente](#4---adicione-cores-nas-bolas-elas-devem-ser-geradas-dinâmicamente)
    - [5 - Clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto](#5---clicar-em-um-circulo-colorido-deve-ser-mostrado-um-texto-indicando-se-está-correto)
    - [6 - Crie um botão para iniciar/reiniciar o jogo](#6---crie-um-botão-para-iniciarreiniciar-o-jogo)

    `Requisitos bônus:`
    - [7 - Crie um placar que incremente 3 pontos para cada acerto no jogo](#7---crie-um-placar-que-incremente-3-pontos-para-cada-acerto-no-jogo)

---

# Habilidades

- Manipular o DOM.

- Manipular o Javascript.

- Manipular o CSS.

---

## O que foi desenvolvido

- Uma aplicação utilizando JavaScript, HTML5 e CSS3.

- Nesta aplicação deve ser possível jogar um jogo de adivinhação de cores e sua pontuação deverá atualizar de acordo com os acertos.

---

## Desenvolvimento

- Uma aplicação de um jogo de adivinhação de cores.
- https://color-guess.bohr.io/

---

### Antes de começar a desenvolver:

1. Clone o repositório
  * `git clone git@github.com:p4n1k0/color-guess.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd color-guess`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
      
---

### Como desenvolver

## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

  ```bash
npm run lint
npm run lint:styles
```

Quando é executando o comando `npm run lint:styles`, ele irá avaliar se os seguintes arquivos com a extensão `CSS` está com o padrão correto.

Quando é executando o comando `npm run lint`, ele irá avaliar se os seguintes arquivos com a extensão `JS` e `JSX` está com o padrão correto.

⚠ **NESTE PROJETO O STYLELINT e ESLINT NÃO SERÁ AVALIADO. VOCÊ PODE RODAR O TESTE LOCALMENTE E FAZER AS CORREÇÕES SE DESEJAR!** ⚠

---

## Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

---

# Requisitos do projeto


## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

## Requisitos Obrigatórios:

Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da **forma que desejar** desde que todos os requisitos sejam cumpridos. Use sua imaginação! 🧠

---

## Requisitos do projeto

### 1 - Adicione no seu site um título com o nome do seu jogo

**O que será verificado:**

- Será verificado se o **id** do título é `title`.

### 2 - Adicione um texto com o código RGB a ser adivinhado

**O que será verificado:**

- Será verificado se o seu id deve ser rgb-color;

- Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.

### 3 - Adicione à página opções de cores para serem adivinhadas

**O que será verificado:**

- Será verificado que deve conter 6 círculos como opção de cor de adivinhação;

- Será verificado que a class de todos os círculos deve ser ball.

### 4 - Adicione cores nas bolas, elas devem ser geradas dinamicamente

**O que será verificado:**

- Será verificado que ao carregar a página, as cores de cada um dos 6 círculos coloridos devem ser geradas via JavaScript.

### 5 - Clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

**O que será verificado:**

- Será verificado que o **id** do elemento deve ser `answer`;

- Será verificado que quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;

- Será verificado se o círculo colorido for o **correto**, deve ser exibido o texto "Acertou!";

- Será verificado se o círculo colorido for o **incorreto**, deve ser exibido o texto "Errou! Tente novamente!".

### 6 - Crie um botão para iniciar/reiniciar o jogo

**O que será verificado:**

- Será verificado que o botão deve ter o id reset-game;

- Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;

- Será verificado que ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

## BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

**O que será verificado:**

- Será verificado que o elemento deve ter o **id** `score`;

- Será verificado que o valor inicial dele deve ser 0;

- Será verificado que a cada acerto, é incrementado 3 pontos ao placar;

- Será verificado que ao clicar no botão reiniciar, o placar NÃO deve ser resetado.

---
