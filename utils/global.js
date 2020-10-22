const supertest = require('supertest')

const url = 'http://localhost:3000'

global.request = supertest(url)