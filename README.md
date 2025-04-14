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
