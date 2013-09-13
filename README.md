# arkitekt

This is a bootstrap project for how I like to make web apps. I'll make a post sometime on why I choose which tool for each component. This is a culmination of opinions from experience and still looking to refine the Perfect Client Side Environment™.

## Includes

* **Framework**: [Backbone](https://github.com/jashkenas/backbone)
* **Modules**: [Browserify](https://github.com/substack/node-browserify)
* **Package Manager**: [npm](https://github.com/isaacs/npm)
* **Build**: make
* **Templating**: [jade](https://github.com/visionmedia/jade) to compile into [handlebars](https://github.com/wycats/handlebars.js)
* **Style Preprocessor** [stylus](https://github.com/learnboost/stylus)
* **Markup Preprocessor** [jade](https://github.com/visionmedia/jade)
* **Testing** mocha and chai, but yet to be added
* **Mocks** A tiny mock framework is included for REST calls

### Difficulties

* I would love a ES6 preprocessor for destructuring, rest arguments, `let` and `const`, and arrow functions.
* Some work arounds to keep handlebar variables intact during the jade compilation
* jQuery dependency for Backbone, also jQuery not being in npm

## Styling Caveats

Source for Bootstrap is modified to support Font Awesome's sprites, with `bootstrap.less` using

```
// No longer uses "sprites.less"
@import "../font-awesome/font-awesome.less"
```

And Font Awesome's `@FontAwesomePath` pointing to fonts in the `public/` directory

```
// In `vendor/styles/font-awesome/variables.less`
@FontAwesomePath: "font/"
```

## License

MIT


