# less-vars2js

Read [LESS](http://lesscss.org/) variables from any file and return a JSON string for [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables).


## With webpack

Example:

/package.json

```
{
  "name": "test-it",
  "theme": {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2",
    "@font-family":"monospace,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif"
  }
}
```

/webpack.config.js

```
...
const vars2js = require('less-vars2js');
const theme = path.resolve(__dirname, './package.json');

module.exports = {
  ...
  module: {
    loaders: [
      ...
      {
        test: /\.module\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
          'postcss!' +
          `less-loader?{"sourceMap":true,"modifyVars":${vars2js(theme)}}`
        ),
      }
    ]
  }
}


```
