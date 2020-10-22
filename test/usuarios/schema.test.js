const joi = require('joi')

const { cadastrarUsuario } = require('../../utils')

const rotaUsuarios = '/usuarios'

describe(rotaUsuarios + ' CONTRATO', () => {
  it('GET', async () => {
    await cadastrarUsuario()
    const { body } = await request.get(rotaUsuarios).expect(200)
    joi.assert(body, get)
  })

  it('POST', async () => {
    const { body } = await request
      .post(rotaUsuarios)
      .send()
      .expect(400)

    joi.assert(body, post)
  })
  

  it('PUT', async () => {
    const { body } = await request
      .put(`${rotaUsuarios}/123123123`)
      .send({})
      .expect(400)

    joi.assert(body, put)
  })
})

const get = joi.object().keys({
  quantidade: joi.number().required(),
  usuarios: joi.array().items(
    joi.object({
      nome: joi.string().required(),
      email: joi.string().required(),
      password: joi.string().required(),
      administrador: joi.string().required(),
      _id: joi.string().regex(/^[a-zA-Z0-9]/).required()
    })
  )
})

const post = joi.object().keys({
  nome: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  administrador: joi.string().required()
})

const put = post