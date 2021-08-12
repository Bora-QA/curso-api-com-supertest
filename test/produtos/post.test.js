const chai = require('chai')
const faker = require('faker')

const { cadastrarUsuario, login } = require('../../utils')

describe('POST /produtos', () => {
  it('Cadastro com sucesso', async () => {
    const { email, password } = await cadastrarUsuario({ administrador: 'true' })
    const { authorization } = await login(email, password)

    const { body } = await request.post('/produtos').send({
      nome: faker.commerce.productName() + faker.datatype.number(),
      preco: faker.datatype.number(),
      descricao: faker.random.words(),
      quantidade: faker.datatype.number()
    }).set('authorization', authorization).expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})
