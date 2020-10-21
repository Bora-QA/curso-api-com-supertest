const chai = require('chai')
const supertest = require('supertest')

const request = supertest('https://api.serverest.dev')

const rotaUsuarios = '/usuarios'

describe('Validar verbo GET na rota ' + rotaUsuarios, () => {
  it('Query string - Busca por todos as chaves', async () => {

    const usuario = {
      nome: "bora qa",
      email: "testador@boraqa.com",
      password: "1234",
      administrador: "true"
    }

    const { body: bodyUsuario } = await request.post(rotaUsuarios).send(usuario).expect(201)

    const { body } = await request.get(rotaUsuarios).query({ _id: bodyUsuario._id }).expect(200)

    chai.assert.deepEqual(body, {
      quantidade: 1,
      usuarios: [
        {
          nome: usuario.nome,
          email: usuario.email,
          password: usuario.password,
          administrador: usuario.administrador,
          _id: bodyUsuario._id
        }
      ]
    })
  })

  it('Query string - Nenhum usuário encontrado', async () => {
    const { body } = await request.get(rotaUsuarios).query({ _id: 'a' }).expect(200)
    chai.assert.deepEqual(body, { quantidade: 0, usuarios: [] })
  })

  it('Query string - Chave inexistente', async () => {
    const { body } = await request.get(rotaUsuarios).query({ inexistente: 'a' }).expect(400)

    chai.assert.deepEqual(body, {
      inexistente: 'inexistente não é permitido'
    })
  })
})
