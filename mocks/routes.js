var items = require('./routes/items');

module.exports = function (app) {

  app.get('/', function (req, res) {});

  app.get('/items', items.index);
  app.get('/items/:id', items.get);
  app.post('/items', items.create);
  app.put('/items/:id', items.update);
  app.get('/items/:id', items.delete);

};
