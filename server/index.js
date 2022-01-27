const path = require('path');
const cors = require('cors');
const express = require('express');
const controller = require('./controllers/controller');

const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '..', '/client/dist/');

// ------Middleware------
app.use(express.static(staticPath));
app.use(express.json());
app.use(cors());

// ------Routes------
// SEARCH CARDS
app.get('/api/cards', controller.getCards);
app.get('/api/cards/set', controller.getSetCards);
app.get('/api/sets', controller.getAllSets);

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});