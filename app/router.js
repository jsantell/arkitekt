var Backbone = require('backbone');
var defer = require('when').defer;
var Items = require('./collections/items');
var ItemsView = require('./views/items');
var ItemView = require('./views/item');
var ContentView = require('./views/content');

module.exports = Backbone.Router.extend({

  routes: {
    '': 'home',
    'items/': 'items',
    'items/:item': 'item',
    'about': 'about'
  },

  initialize: function () {},

  items: function () {
    var router = this;
    getItems(router).then(function (items) {
      router.setView(new ItemsView({
        items: items
      }));
    });
  },

  item: function (id) {
    var router = this;
    getItems(router).then(function (items) {
      router.setView(new ItemView({
        item: items.find(function (i) { return i.id === id; })
      }));
    });
  },

  home: function () {
    this.setView(new ContentView ({
      template: 'home'
    }));
  },

  about: function () {
    this.setView(new ContentView ({
      template: 'about'
    }));
  },
  
  clearView: function () {
    if (this.view && this.view.destroy) {
      this.view.destroy();
    }
  },

  setView: function (view) {
    this.clearView();
    $('#main').html(view.render().el);
    this.view = view;
  }

});

function getItems (router) {
  var deferred = defer();
  if (!router.items)
    router.items = new Items();
  router.items.fetch({
    success: deferred.resolve,
    error: deferred.reject
  });

  return deferred.promise;
}

