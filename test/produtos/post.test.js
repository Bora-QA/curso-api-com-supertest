const chai = require('chai')
const faker = require('faker')

const rotaProdutos = '/produtos'

describe(rotaProdutos + ' POST', () => {
  it('Cadastro com sucesso', async () => {
    const { body: bodyLogin } = await request.post('/login').send({
      email: 'fulano@qa.com',
      password: 'teste'
    }).expect(200)

    const { body } = await request.post(rotaProdutos).send({
      nome: faker.commerce.productName() + faker.random.number(),
      preco: faker.random.number(),
      descricao: faker.random.words(),
      quantidade: faker.random.number()
    }).set('authorization', bodyLogin.authorization).expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})