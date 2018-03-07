const path = require('path');
module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   target: 'node',
   module: {
      noParse: function (content) {
        return /express/.test(content);
      },
      rules: [
    	  {
             test: /\.js?$/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] } 
             }
         },
         {
             test: /\.jsx?$/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   },
   devServer: {
	   contentBase: './src',
	   publicPath: '/output'
	}
};