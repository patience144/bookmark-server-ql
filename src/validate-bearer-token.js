const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization')
  

  console.log(`Authorization, ${authToken}`);
  console.log(`API Token, ${API_TOKEN}`);

  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    logger.error(`Unauthorized request to path: ${req.path}`)
    return res.status(401).json({ error: 'Unauthorized request' })
  }

  next()
}

module.exports = validateBearerToken