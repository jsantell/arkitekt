var Backbone = require('backbone');
var defer = require('when').defer;
var config = require('../config');
var loader = require('../lib/loader');

module.exports = Backbone.Model.extend({
  save: function () {
    var _save = Backbone.Model.prototype.save;
    var deferred = defer();

    loader.show();
    _save.apply(this, arguments).then(function (data, status, xhr) {

      setTimeout(function () {
        loader.hide();
        deferred.resolve(data);
      }, config.mockDelay || 0);
    });

    return deferred.promise;
  }
});
