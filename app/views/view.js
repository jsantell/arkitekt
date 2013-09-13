var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('../lib/templates');

module.exports = Backbone.View.extend({
  render: function () {
    this.beforeRender();

    if (!this.template)
      this.template = templates[this.name];

    var data = this.getRenderData ? this.getRenderData() : {};
    this.$el.html(this.template(data));

    this.afterRender();
    return this;
  },
  destroy: function () {
    this.remove();
  },
  afterRender: function () {},
  beforeRender: function () {},

  /**
   * Takes an view or an array of views and
   * merges them into this view. For events,
   * it extends the individual events and does not clobber
   * them from the main view.
   */
  mixin: function (views) {
    var mainView = this;
    _.forEach([].concat(views), function (view) {
      var proto = view.prototype;
      for (var prop in proto) {
        if (prop === 'events')
          _.extend(mainView[prop], proto[prop]);
        else
          mainView[prop] = proto[prop];
      }
    });
  }
});
