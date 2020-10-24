# 📖 (Curso) Automação de API com SuperTest

#### Um curso do [Bora QA](http://boraqa.org) para a comunidade de testes ❤️
___

## O que irei aprender?

1. Automatizar os verbos HTTP _GET, POST, PUT_ e _DELETE_ em Javascript com SuperTest.
1. Gerar report HTML com o resultado.
1. Validar schema json.
1. Utilizar dados aleatórios.
1. Executar o mesmo teste em ambientes diferentes.
1. Manter um código bem estruturado seguindo o guia de estilo do Javascript.

## O que preciso saber antes de iniciar?

- Básico de Javascript e NPM.
- Teste manual em API Rest
  - Saber o que é API
  - Saber fazer uma request (pelo Postman, SoapUI ou outra ferramenta com interface)
  - Utilizar os verbos HTTP _get, post, put_ e _delete_
  - Saber o que é JSON
  - Conhecer as partes de uma request, como _body_ e _header_
  - Status code (_200, 404, 500_, etc)

### Material de apoio para adquirir os pré-requisitos

#### Javascript e NPM
- [Vídeo | Javascript Essencial - Conceitos iniciais](https://youtu.be/ipHuSfOYhwA?list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx)
- [Vídeo | Javascript Essencial - Variáveis e tipos de dados](https://youtu.be/ZW02MWzZXPE?list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx)
- [Vídeo | Javascript Essencial - Funções](https://youtu.be/TWmlIbvTjRo?list=PLInBAd9OZCzxl38aAYdyoMHVg0xCgxrRx)
- [Texto | O guia completo do package.json do Node.js](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js/)
- [Texto (inglês) | Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)

#### Teste em API Rest
- [Texto | Automatizando testes de sua API com Postman](https://medium.com/assertqualityassurance/automatizando-sua-api-com-postman-64a72185e1e6)
- [Vídeo | API // Dicionário do programador](https://www.youtube.com/watch?v=vGuqKIRWosk)
- [Vídeo | O QUE É UMA API? (Na prática, não na teoria)](https://www.youtube.com/watch?v=3LHSyha0xN0)
- [Playlist | Testes de API Rest](https://www.youtube.com/watch?v=VA7uEDtMdBM&list=PLf8x7B3nFTl1hYsgnXaZnXa4V5DHDd4fa)

## O que preciso ter na máquina?

- [Visual Studio Code](https://code.visualstudio.com/) ou outra IDE de sua preferência.
- [Node](https://nodejs.org/en/download/)
  - Para verificar se a instalação foi feita com sucesso, execute `npm -v` e `node -v` no terminal. Se ambos os comandos retornarem número de versão, então está tudo certo.

## Grade

Libs:
1. mocha (runner, estrutura)
1. mochawesome (report)
1. chai (assert)
1. supertest (request)
1. faker
1. joi (schema json)
1. cross-env (var)
1. standard (lint)

---

Aulas:

1. Introdução
    - Qual o objetivo desse curso
    - curso para todos os níveis, desde que cumpram com os pré-requisitos de básico de JS e saiba testar webAPI REST manualmente

1. Iniciando o projeto e organizando a estrutura dos testes
    - npm init - iniciar projeto
        - npm install mocha
    - configurar .mocharc.js
    - inserir execução dos testes no script 'npm t'
    - explicar `describe` e `it`

1. Fazendo GET
    - npm install supertest
    - explicar serverest
    - primeiro teste 
        - get em usuarios
    - GET com query string
    - usar chai para validar o retorno
        - npm install chai

1. Fazendo POST
    - fazer POST usuarios
    - cenarios: cadastro com sucesso E bad request
    - refatorar GET /usuarios para cadastrar usuario no inicio

1. DESAFIO 1
    - Em POST de /usuarios, criar automação que valide que o e-mail já está sendo utilizado.

1. Usando dados aleatórios
    - faker - usar dados aleatórios em POST e GET usuarios
        - npm install faker

1. Fazendo um pouco mais de POST enviando header
    - POST login e enviar auth no header de POST produtos

1. Organizando o código antes de aprendermos mais
    - estruturar os testes dentro de test/{usuarios, produtos}
    - criar o global.js para centralizar o supertest

1. Configurando report HTML
    - report HTML - instalar mochawesome
    - lembrar para inserir report/ no .gitignore

1. Fazendo DELETE
    - DELETE usuarios

1. Reaproveitando código
    - criar index com POST usuarios
    - refatorar DELETE /usuarios - colocar p criar usuario antes de cada teste
    - refatorar GET /usuarios - colocar p criar usuario antes de cada teste

1. DESAFIO 2
    - Reescrever POST de /produtos, reaproveitando /login e POST /usuarios em `index`

1. Fazendo PUT
    - atualizar dados - PUT produtos
        - ordem das requests > post login, post produtos, put produto
    - inserir /cadastro e /login no beforeEach

1. DESAFIO 3
    - Reescrever o PUT de /produtos para que fique enxuto, levando alguns códigos para `index`

1. Testando schema json com Joi
    - criando teste de contrato - install joi

1. Executar os testes em ambientes diferentes
    - install cross-env 
    - criar diretório config
    - ajustar global.js

1. Padronizar o código
    - install standard

1. Sobrescrever configuração do Mocha no terminal

1. Encerramento do curso

## Material complementar

- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [ServeRest](https://github.com/PauloGoncalvesBH/ServeRest)
- [Exemplo de automação com SuperTest](https://github.com/PauloGoncalvesBH/sample-supertest)
- **Mocha**
    - [Site](https://mochajs.org/)
    - [NPM](https://www.npmjs.com/package/mocha)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)
- **Chai**
    - [Site](https://www.chaijs.com/)
    - [NPM](https://www.npmjs.com/package/chai)
- [SuperTest](https://www.npmjs.com/package/supertest)
- **Faker**
    - [Site](http://marak.github.io/faker.js/)
    - [NPM](https://www.npmjs.com/package/faker)
- **Joi**
    - [Site](https://joi.dev/api/)
    - [NPM](https://www.npmjs.com/package/joi)
- [Cross-env](https://www.npmjs.com/package/cross-env)
- [Standard](https://www.npmjs.com/package/standard)

---

[Licença](https://github.com/Bora-QA/Sobre/blob/master/LICENSE)
