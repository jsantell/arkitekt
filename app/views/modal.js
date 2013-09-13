var Backbone = require('backbone');
var defer = require('when').defer;
var View = require('./view');

module.exports = View.extend({
  name: 'modal',

  events: {
    'click .modal-backdrop': 'handleClose',
    'click .close': 'handleClose',
    'click .modal-footer': 'handleAction'
  },

  initialize: function (options) {
    this.title = options.title;
    this.content = options.content;
    this.actions = options.actions;
    Backbone.$('body').append(this.render().el);
    this.deferred = defer();
  },

  init: function () {
    // Fire this on the next tick so we get the animated
    // fade
    setTimeout(function () {
      this.$('.modal-backdrop').addClass('in');
      this.$('.modal').addClass('in');
    }, 10);
    return this.deferred.promise;
  },

  handleAction: function (e) {
    e.preventDefault();
    var $action = Backbone.$(e.target);
    this.deferred.resolve($action.data('action'));
    this.destroy();
  },

  // Default case when clicking the backdrop, or the
  // 'x' close buttons

  handleClose: function () {
    this.deferred.resolve('close');
    this.destroy();
  },

  getRenderData: function () {
    return {
      title: this.title,
      content: this.content,
      actions: this.actions
    };
  }

});
