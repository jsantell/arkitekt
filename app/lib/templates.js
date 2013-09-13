var fs = require('fs');
var Mustache = require('mustache');
var _ = require('underscore');
var templates = {};

// Can't `forEach` this with Browserify's brfs transformation due to 
// an escodegen error [or something] when variables are used in 
// fs.readFileSync path, so we inline, ewwww
templates.about = fs.readFileSync(__dirname + '/../../build/about.mustache');
templates.home = fs.readFileSync(__dirname + '/../../build/home.mustache');
templates.items = fs.readFileSync(__dirname + '/../../build/items.mustache');
templates.item = fs.readFileSync(__dirname + '/../../build/item.mustache');
templates.modal = fs.readFileSync(__dirname + '/../../build/modal.mustache');

_.each(templates, function (val, key) {
  templates[key] = Mustache.compile(val);
});
module.exports = templates;
