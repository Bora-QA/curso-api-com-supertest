const chai = require('chai')
const faker = require('faker')

const rotaUsuarios = '/usuarios'

describe(`Validar verbo POST na rota ${rotaUsuarios}`, () => {
  it('Cadastro com sucesso', async () => {
    const { body } = await request.post(rotaUsuarios).send({
      nome: faker.name.firstName() + ' ' + faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: `${faker.random.boolean()}`
    }).expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })

  it('Bad request - Campos de preenchimento obrigatório', async () => {
    const { body } = await request.post(rotaUsuarios).send({ inexistente: '1' }).expect(400)

    chai.assert.deepEqual(body, {
      nome: 'nome é obrigatório',
      email: 'email é obrigatório',
      password: 'password é obrigatório',
      administrador: 'administrador é obrigatório',
      inexistente: 'inexistente não é permitido'
    })
  })
})
