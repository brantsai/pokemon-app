const model = require('../models/model');

module.exports = {
  getCards: (req, res) => {
    model.getCards(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log('controller ERROR', error);
      });
  }
}