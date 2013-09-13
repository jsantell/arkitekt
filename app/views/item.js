var Backbone = require('backbone');
var View = require('./view');
var EditableView = require('./editable');

module.exports = View.extend({
  name: 'item',

  events: {
    'click .save-item': 'handleSaveItem'
  },

  initialize: function (options) {
    this.item = options.item;
    this.mixin(EditableView);
  },

  handleEdit: function (result) {
    this.item.set(result.property, result.value);
    
    // Enable save option
    this.$('.save-item').removeClass('disabled');
  },

  handleSaveItem: function (e) {
    e.preventDefault();
    if (Backbone.$(e.target).hasClass('disabled'))
      return;
    this.item.save().then(function (res) {
      console.log(res);
    });
  },

  getRenderData: function () {
    var data = this.item.toJSON();
    return data;
  }

});
