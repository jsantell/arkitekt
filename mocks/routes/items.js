var _ = require('underscore');
var items = require('../data/items.json');

// No error handling at all, should add

module.exports = {
  index: function (req, res) {
    res.send(items);
  },
  get: function (req, res) {
    res.send(get(req.params.id));
  },
  post: function (req, res) {
    items.push(req.body.item);
    res.send({ success: true });
  },
  put: function (req, res) {
    var item = get(req.body.item.id);
    Object.keys(req.body.item).forEach(function (prop) {
      item[prop] = req.body.item[prop];
    });
    res.send({ success: true });
  },
  delete: function (req, res) {
    var index = items.indexOf(get(req.params.id));
    items.splice(index, 1);
    res.send({ success: true });
  }
};

function get (id) {
  return _.find(items, function (item) {
    return item.id === id;
  });
}
