# 📖 (Curso) Automação de API com SuperTest

#### Um curso do [Bora QA](http://boraqa.org) para a comunidade de testes ❤️
___

## O que irei aprender?

1. Automatizar os verbos HTTP _GET, POST, PUT_ e _DELETE_ em Javascript com SuperTest.
1. Gerar report HTML com o resultado.
1. Realizar teste de contrato.
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

<strike>1. Introdução
    - Objetivo do curso
1. Config
    - Supertest > Requests
        - O que é e para que serve
        - Instalando
    - Mocha > Estrutura
        - O que é e para que serve
        - Instalando
    - Chai > Asserção
        - O que é e para que serve
        - Instalando
    - Faker > dados aleatórios
        - O que é e para que serve
        - Instalando
    - Joi > Schema
        - O que é e para que serve
        - Instalando
1. Automatizando os principais verbos
    - GET
        - GET sem parâmetro > valid. body da resposta e status code
        - GET com parâmetros > valid. body da resposta e status code
    - POST
        - Passando o corpo no post > fazer cadastro
    - PUT
        - Alterando nosso cadastro
    - PATCH
        - Alterando nosso cadastro
    - DELETE
        - Excluindo o cadastro
1. Um pouco mais
    - Setando header
    - Entendendo describe e it > Mocha
    - Autenticando e passando token no header
    - Dicas > arquivo de config com baseUrl</strike>

**grade parcial:**

- npm init - iniciar projeto
- npm install mocha, chai (assert) e supertest - oq é cada?
- primeiro teste - get em usuarios e validar retorno
- GET com query string
- POST em usuarios
- install faker - usar dados aleatórios
- fazer POST usuarios, POST login e enviar auth no header de POST produtos
- report HTML - instalar mochawesome
- criar .mocharc e passar configuração do package.json p ele
- estruturar os testes dentro de test/{usuarios, produtos}
- criar o global.js para centralizar o supertest
- atualizar dados - PUT produtos
- melhorar o teste de PUT - POST usuarios (adm false), POST login, PUT produtos
- reaproveitar código - criar index com POST usuarios e POST login
- DELETE usuarios
- criando teste de contrato - install @hapi/joi
- executando o teste em ambientes diferentes
    - install cross-env 
    - criar diretório config
    - ajustar global.js
- padronizando o código - install standard

mais:
- sobrescrever o .mocharc no terminal

## Material complementar

- [Repositório sample-supertest](https://github.com/PauloGoncalvesBH/sample-supertest)
- inserir destruct js
- eslint
- chai
- mochajs

---

[Licença MIT](https://github.com/Bora-QA/Sobre/blob/master/LICENSE)
