const chai = require('chai')
const faker = require('faker')

const { cadastrarProduto, cadastrarUsuario, login } = require('../../utils')

const rotaProdutos = '/produtos'

describe(rotaProdutos + ' PUT', () => {
  beforeEach(async () => {
    const { email, password } = await cadastrarUsuario({ administrador: 'true' })
    const { authorization } = await login(email, password)
    this.authorization = authorization
  })

  it('Registro alterado', async () => {
    const produto = await cadastrarProduto({ authorization: this.authorization })

    const { body } = await request
      .put(`${rotaProdutos}/${produto._id}`)
      .send({
        nome: faker.commerce.productName() + faker.random.number(),
        preco: produto.preco,
        descricao: produto.descricao,
        quantidade: produto.quantidade
      })
      .set('authorization', this.authorization)
      .expect(200)

    chai.assert.deepEqual(body, { message: 'Registro alterado com sucesso' })
  })

  it('Cadastro com sucesso', async () => {
    const { body } = await request.put(rotaProdutos + '/a').send({
      nome: faker.commerce.productName() + faker.random.number(),
      preco: faker.random.number(),
      descricao: faker.random.words(),
      quantidade: faker.random.number()
    }).set('authorization', this.authorization)
      .expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})