const chai = require('chai')

const { cadastrarUsuario } = require('../../utils')

const rotaUsuarios = '/usuarios'

describe('GET /usuarios', () => {
  describe('Query string', () => {
    it('Retornar usuário com sucesso ao buscar usuário com as chaves \'nome\', \'email\', \'password\', \'administrador\' e \'_id\'', async () => {
      const { nome, email, password, administrador, _id } = await cadastrarUsuario()

      const { body } = await request.get(rotaUsuarios).query({ _id }).expect(200)

      chai.assert.deepEqual(body, {
        quantidade: 1,
        usuarios: [
          {
            nome,
            email,
            password,
            administrador,
            _id
          }
        ]
      })
    })

    it('Deve retornar nenhum usuário ao passar chave \'_id\' com valor inexistente', async () => {
      const { body } = await request.get(rotaUsuarios).query({ _id: 'a' }).expect(200)
      chai.assert.deepEqual(body, { quantidade: 0, usuarios: [] })
    })

    it('Deve retornar mensagem de erro \'testando não é permitido\' ao passar chave inexistente', async () => {
      const { body } = await request.get(rotaUsuarios).query({ testando: 'a' }).expect(400)

      chai.assert.deepEqual(body, {
        testando: 'testando não é permitido'
      })
    })
  })
})
