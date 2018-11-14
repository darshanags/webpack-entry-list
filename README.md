# webpack-entry-list
A tiny utility which helps generate an [Entry Point Object](https://webpack.js.org/concepts/entry-points/#object-syntax) for Webpack based on contents of a folder. This can also be used to generate an array of HTML Webpack Plugin objects based on contents of a folder.

*Note that this has only been tested with Webpack 4.*

## Installation
```shell
npm install webpack-entry-list --save-dev
```

## Usage

There are two static methods, __generateEntryList__ and __generateHTMLPluginList__, used as given below.


### generateEntryList(directoryPath[,fileExtension])

*directoryPath*: Relative path to a directory.
*fileExtension*: Extension of files to be used as entry points. Defaults to __.js__.

```js
// webpack.config.js
...
const WebpackEntryList = require('webpack-entry-list');
...
const config = [{
  ...
  entry: WebpackEntryList.generateEntryList('src/js')
  ...
}];
	
module.exports = config;
```

### generateHTMLPluginList(directoryPath[,fileExtension, HTMLWebpackPluginOptions])

*directoryPath*: Relative path to a directory.
*fileExtension*: Extension of files to be used as entry points. Defaults to __.pug__.
*HTMLWebpackPluginOptions*: HTMLWebpackPlugin [options object](https://github.com/jantimon/html-webpack-plugin#options). Defaults to __{ inject: true }__.

```js
// webpack.config.js
...
const WebpackEntryList = require('webpack-entry-list');
let HTMLWebpackPluginList = WebpackEntryList.generateHTMLPluginList('src/pug');
...
const config = [{
  ...
  plugins: [...HTMLWebpackPluginList]
  ...
}];
	
module.exports = config;
```

*Note the use of ... before the HTMLWebpackPluginList variable. This is [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).*