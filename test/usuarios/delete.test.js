const chai = require('chai')

const { cadastrarUsuario } = require('../../utils')

const rotaUsuarios = '/usuarios'

describe(rotaUsuarios + ' DELETE', () => {
  it('Registro excluído com sucesso', async () => {
    const { _id: idUsuarioCadastrado } = await cadastrarUsuario()

    const { body: bodyDel } = await request.del(`${rotaUsuarios}/${idUsuarioCadastrado}`).expect(200)
    const { body: bodyGet } = await request.get(rotaUsuarios).query({ _id: idUsuarioCadastrado })

    chai.assert.deepEqual(bodyDel, { message: 'Registro excluído com sucesso' })
    chai.assert.deepEqual(bodyGet, { quantidade: 0, usuarios: [] })
  })
})
