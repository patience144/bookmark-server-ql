require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || '4c3ff612-0c2e-4428-b8f1-3cb8784824f5',
  }