var View = require('./view');

module.exports = View.extend({
  name: 'items',
  events: {
  },

  initialize: function (options) {
    this.items = options.items;
  },

  getRenderData: function () {
    return { items: this.items.toJSON() };
  }

});
