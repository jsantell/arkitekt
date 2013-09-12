# Bootstrap

## Includes

## Styling

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
