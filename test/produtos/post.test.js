const chai = require('chai')
const faker = require('faker')

const { cadastrarUsuario, login } = require('../../utils')

const rotaProdutos = '/produtos'

describe(rotaProdutos + ' POST', () => {
  it('Cadastro com sucesso', async () => {
    const { email, password } = await cadastrarUsuario({ administrador: 'true' })
    const { authorization } = await login(email, password)

    const { body } = await request.post(rotaProdutos).send({
      nome: faker.commerce.productName() + faker.random.number(),
      preco: faker.random.number(),
      descricao: faker.random.words(),
      quantidade: faker.random.number()
    }).set('authorization', authorization).expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})
