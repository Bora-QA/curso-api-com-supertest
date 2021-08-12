const dev = {
  url: 'http://localhost:3000'
}

const prod = {
  url: 'https://serverest.dev'
}

module.exports = process.env.NODE_ENV === 'dev' ? dev : prod
