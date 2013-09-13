var items = require('./routes/items');

module.exports = function (app) {

  // CORS
  app.all('*', function(req, res, next) {
    var method = req.headers['access-control-request-method'];
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', method || 'GET');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
  });

  app.get('/', function (req, res) {});

  app.get('/items', items.index);
  app.get('/items/:id', items.get);
  app.post('/items', items.create);
  app.put('/items/:id', items.update);
  app.get('/items/:id', items.delete);

};
