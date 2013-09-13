var Backbone = require('backbone');
var View = require('./view');

module.exports = View.extend({
  name: 'items',
  events: {
    'click button': 'editItem'
  },

  initialize: function (options) {
    this.items = options.items;
    this.router = options.router;
  },

  getRenderData: function () {
    return { items: this.items.toJSON() };
  },

  editItem: function (e) {
    var id = Backbone.$(e.target).closest('tr').data('id');
    this.router.navigate('#items/' + id, {trigger: true});
  }

});
