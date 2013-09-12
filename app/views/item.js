var View = require('./view');
var ModalView = require('./modal');
var config = require('../config');
var vagueDate = require('../lib/vagueDate');

module.exports = View.extend({
  name: 'item',

  events: {
  },

  initialize: function (options) {
    this.item = options.item;
  },

  getRenderData: function () {
    var data = this.item.toJSON();
    return data;
  }

});
