const chai = require('chai')
const faker = require('faker')

const { cadastrarProduto, cadastrarUsuario, login } = require('../../utils')

const rotaProdutos = '/produtos'

describe('PUT /produtos', () => {
  beforeEach(async () => {
    const { email, password } = await cadastrarUsuario({ administrador: 'true' })
    const { authorization } = await login(email, password)
    this.authorization = authorization
  })

  it('Alterar todos os dados de produto com sucesso', async () => {
    const produto = await cadastrarProduto({ authorization: this.authorization })

    const { body } = await request
      .put(`${rotaProdutos}/${produto._id}`)
      .send({
        nome: faker.commerce.productName() + faker.datatype.number(),
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
      nome: faker.commerce.productName() + faker.datatype.number(),
      preco: faker.datatype.number(),
      descricao: faker.random.words(),
      quantidade: faker.datatype.number()
    }).set('authorization', this.authorization)
      .expect(201)

    chai.assert.deepEqual(body, { message: 'Cadastro realizado com sucesso', _id: body._id })
  })
})
