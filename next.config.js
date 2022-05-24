const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  env: {
    API_URL: process.env.API_URL
  }
}
