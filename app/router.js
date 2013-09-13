var Backbone = require('backbone');
var defer = require('when').defer;
var Items = require('./collections/items');
var ItemsView = require('./views/items');
var ItemView = require('./views/item');
var ContentView = require('./views/content');

var Router = Backbone.Router.extend({

  routes: {
    '': 'homeRoute',
    'items': 'itemsRoute',
    'items/:item': 'itemRoute',
    'about': 'aboutRoute'
  },

  initialize: function () {
  },

  homeRoute: function () {
    this.setView(new ContentView ({
      template: 'home'
    }));
  },

  aboutRoute: function () {
    this.setView(new ContentView ({
      template: 'about'
    }));
  },

  itemsRoute: function () {
    var router = this;
    getItems(router).then(function (items) {
      router.setView(new ItemsView({
        items: items,
        router: router
      }));
    });
  },

  itemRoute: function (id) {
    var router = this;
    getItems(router).then(function (items) {
      router.setView(new ItemView({
        item: items.find(function (i) { return i.id === +id; }),
        router: router
      }));
    });
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

module.exports = Router;

function getItems (router) {
  var deferred = defer();
  if (!router.items) {
    router.items = new Items();
    router.items.fetch({
      success: deferred.resolve,
      error: deferred.reject
    });
  } else 
    deferred.resolve(router.items);

  return deferred.promise;
}

