const chai = require('chai')

const rotaUsuarios = '/usuarios'

describe('Validar verbo GET na rota ' + rotaUsuarios, () => {
  it('Query string - Busca por todos as chaves', async () => {
    const { body } = await request.get(rotaUsuarios).query({ _id: '0uxuPY0cbmQhpEz1' }).expect(200)

    chai.assert.deepEqual(body, {
      quantidade: 1,
      usuarios: [
        {
          nome: 'Fulano da Silva',
          email: 'fulano@qa.com',
          password: 'teste',
          administrador: 'true',
          _id: '0uxuPY0cbmQhpEz1'
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
