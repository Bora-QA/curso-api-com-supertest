const chai = require('chai')
const faker = require('faker')

const rotaUsuarios = '/usuarios'

describe(rotaUsuarios + ' DELETE', () => {
  it('Registro excluído com sucesso', async () => {
    const { body } = await request.post(rotaUsuarios).send({
      nome: faker.name.firstName() + ' ' + faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      administrador: `${faker.random.boolean()}`
    }).expect(201)

    const { body: bodyDel } = await request.del(`${rotaUsuarios}/${body._id}`).expect(200)
    const { body: bodyGet } = await request.get(rotaUsuarios).query({ _id: body._id })

    chai.assert.deepEqual(bodyDel, { message: 'Registro excluído com sucesso' })
    chai.assert.deepEqual(bodyGet, { quantidade: 0, usuarios: [] })
  })
})
