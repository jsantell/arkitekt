var Backbone = require('backbone');
var View = require('./view');
var Modal = require('./modal');

module.exports = View.extend({
  name: 'items',
  events: {
    'click button.edit': 'editItem',
    'click button.delete': 'deleteItem'
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
  },

  deleteItem: function (e) {
    var id = Backbone.$(e.target).closest('tr').data('id');
    var item = this.items.find(function (i) {
      return i.id === +id;
    });
    var view = this;

    var modal = new Modal({
      title: 'Remove Item',
      content: 'Double checking here; you want to delete this?',
      actions: [
        { action: 'delete', type: 'danger', message: 'Delete' },
        { action: 'cancel', type: 'default', message: 'Cancel' }
      ]
    });

    modal.init().then(function (action) {
      if (action === 'delete')
        item.destroy().then(function () {
          view.render();
        });
    }).then(null,console.error);
  }

});
