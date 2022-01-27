const axios = require('axios');
const config = require('../../client/src/config/config');

module.exports = {
  getCards: (req) => axios.get(
    `https://api.pokemontcg.io/v2/cards?q=name:${req.query.q}`,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getSetCards: (req) => axios.get(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${req.query.q}`,
    {
      headers: { Authorization: config.API_KEY },
    },
  ),
  getAllSets: () => axios.get(
    `https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate`,
    {
      headers: { Authorization: config.API_KEY },
    },
  )
}