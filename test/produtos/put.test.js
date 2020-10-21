const chai = require('chai')
const faker = require('faker')

const rotaProdutos = '/produtos'

describe(rotaProdutos + ' PUT', () => {
  let authorization
  beforeEach(async () => {
    const { body: bodyLogin } = await request.post('/login').send({
      email: 'fulano@qa.com',
      password: 'teste'
    }).expect(200)
    authorization = bodyLogin.authorization
  })

  it('Registro alterado', async () => {
    const produto = {
      nome: faker.commerce.productName() + faker.random.number(),
      preco: faker.random.number(),
      descricao: faker.random.words(),
      quantidade: faker.random.number()
    }

    const { body: bodyProduto } = await request
      .post(rotaProdutos)
      .send(produto)
      .set('authorization', authorization)
      .expect(201)

    produto.nome = 'Taeste alteração'  + faker.random.number()

    const { body: bodyPut } = await request
      .put(`${rotaProdutos}/${bodyProduto._id}`)
      .send(produto)
      .set('authorization', authorization)
      .expect(200)

    chai.assert.deepEqual(bodyPut, { message: 'Registro alterado com sucesso' })
  })

  it('Cadastro com sucesso', async () => {
    const { body } = await request.put(rotaProdutos + '/a').send({
      nome: faker.commerce.productName() + faker.random.number(),
      preco: faker.random.number(),
      descricao: faker.random.words(),
      quantidade: faker.random.number()
    }).set('authorization', authorization)
      .expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})
