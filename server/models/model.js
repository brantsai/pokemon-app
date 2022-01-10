const axios = require('axios');
const config = require('../../client/src/config/config');

module.exports = {
  getCards: (req) => axios.get(
    `https://api.pokemontcg.io/v2/cards?q=name:${req.query.q}`,
    {
      headers: { Authorization: config.API_KEY },
    },
  )
}