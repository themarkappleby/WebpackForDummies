# Webpack for Dummies

[Webpack](https://webpack.github.io/) is amazing, however setting up a complex Webpack configuration can often be a pain ([ref](https://twitter.com/iamdevloper/status/702464176954875904)).

This project's goal is to get you up and running with Webpack as quickly and as painlessly as possible by implementing sensible defaults. Webpack for dummies assumes you are trying to implement Webpack on a [React](https://facebook.github.io/react/) project that uses [JSX](https://facebook.github.io/jsx/) and [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition), and that you likely want to take advantage of Webpack's fantastic [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html).

## Getting started

1. Install Webpack for Dummies via [NPM](https://www.npmjs.com/):
```
npm install webpack-for-dummies
```

2. Require Webpack for Dummies in your project:
```
var WebpackForDummies = require('webpack-for-dummies');
```

3. Create a new instance of Webpack for Dummies:
```
var webpackForDummies = new WebpackForDummies({
  configurationOptions...
});
```

4. Generate a Webpack configuration object:
```
webpackForDummies.generateConfig();
```

## Configuration Options

| Option | Required | Default | Description |
| --- | --- | --- | --- |
| input | yes | NA | The string path to the input (or entry) file |
| output | yes | NA | The string path to the output file |
| hot | no | true | Enable hot module reloading on the Webpack dev server |
| port | no | 4000 | The int port number of the Webpack dev server |
| clean | no | true | Clean (destroy and re-create) the output directory |
| target | no | NA | `'node'` will compile output for a node environment |

## Methods

`generateConfig()`: Returns a Webpack configuration option based on the configuration options Webpack for Dummies was initialized with.

`startDevServer()`: Starts a Webpack dev server based on the configuration options Wepback for Dummies was initialized with.
