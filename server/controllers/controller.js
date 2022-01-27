const model = require('../models/model');

module.exports = {
  getCards: (req, res) => {
    model.getCards(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log('controller ERROR', error);
        res.status(400).send(error);
      });
  },
  getSetCards: (req, res) => {
    model.getSetCards(req)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log('controller ERROR', error);
        res.status(400).send(error);
      });
  },
  getAllSets: (req, res) => {
    model.getAllSets()
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log('controller ERROR', error);
        res.status(400).send(error);
      });
  }
}