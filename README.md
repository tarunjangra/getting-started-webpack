1. It helps to figure out the dependency graph of your javascript file.
2. It helps to load require assets.
3. Split application in to different files.
4. WebPack helps to deals with transformations.
  1. For SASS or LESS, we can build css prior to production.
  2. We can transcompile React, ES6, ES2015 in vanilla javascript.
5. It can compress javascript, css, images like png etc to make them more
optimized to be loaded on internet.
6. The tool we use to transcompile the JSX or ES6 in to ES5 is called babel.
7. You can configure webpack with babel-loader to transcompile your sources code.
8. In babel6 and more, we need to use presets to tell babel what to transcompile.
9. ECMAScript spec, How javascript should be written and implemented.
10. if size of the image is more that 20000 byte, "url-loader?limit=20000" it will
load the file directly as normal images in webpage.
11. webpack allow you to add inline images in your css file to reduce total
number of http requests of your image. This is really an amazing concept to
put your image binary content right in the css through webpack.
12. By inlining css and images, we can make our code faster.



```javascript
npm install webpack

//babel loader
babel-loader babel-core

// what babble will transcompile
babel-preset-es2015
babel-preset-react

//for react implementation
react react-dom

//for scss file loading
sass-loader node-sass

//for plain css stylesheet loaders.
style-loader css-loader

//for images loading
url-loader file-loader
```
