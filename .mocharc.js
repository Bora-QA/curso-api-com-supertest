module.exports = {
  spec: ["test/**/*.test.js"],
  require: 'utils/global.js',
  reporter: 'mochawesome',
  reporterOptions: 'json=false,reportDir=report,reportFilename=automacao-api'
}
