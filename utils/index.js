const faker = require('faker')

async function cadastrarUsuario ({
  nome = faker.name.firstName() + ' ' + faker.name.lastName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  administrador = `${faker.random.boolean()}`
} = {}) {
  const { body } = await request.post('/usuarios').send({
    nome,
    email,
    password,
    administrador
  }).expect(201)
  return {
    nome,
    email,
    password,
    administrador,
    _id: body._id
  }
}

async function login (email, password) {
  const { body } = await request.post('/login').send({
    email,
    password
  }).expect(200)
  return body
}

async function cadastrarProduto ({
  authorization,
  nome = faker.commerce.productName() + faker.random.number(),
  preco = faker.random.number(),
  descricao = faker.random.words(),
  quantidade = faker.random.number()
}) {
  const { body } = await request
  .post('/produtos')
  .send({
    nome,
    preco,
    descricao,
    quantidade
  })
  .set('authorization', authorization)
  .expect(201)
  return {
    _id: body._id,
    nome,
    preco,
    descricao,
    quantidade
  }
}

module.exports = {
  cadastrarProduto,
  cadastrarUsuario,
  login
}
