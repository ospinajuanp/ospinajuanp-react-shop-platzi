const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), //(el path de salida carpeta dist-distribution)
        filename: 'main.js', //(nombre del archivo resultante)
        publicPath:'/',
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'], //(aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
        alias:{
            '@icons':path.resolve(__dirname,'src/assets/icons/'),
            '@logos':path.resolve(__dirname,'src/assets/logos/'),
            '@components':path.resolve(__dirname,'src/components/'),
            '@containers':path.resolve(__dirname,'src/containers/'),
            '@pages':path.resolve(__dirname,'src/pages/'),
            '@routes':path.resolve(__dirname,'src/routes/'),
            '@styles':path.resolve(__dirname,'src/styles/')
        }
    },
    module :{
        rules: [
            {
                test: /\.(js|jsx)$/, //(Test declara que extensión de archivos aplicara el loader)
                exclude:/node_modules/, //(Exclude permite omitir archivos o carpetas especificas)
                use:{loader:'babel-loader',} //(Use es un arreglo u objeto donde dices que loader aplicaras)
            },
            {
                test:/\.html$/,
                use:[{loader:'html-loader'}]
            },
            {
                test:/\.(scss|css)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type:'asset'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
    ],
    devServer: { // configuración para el server
        static: path.join(__dirname, 'dist'), // ruta de nuestro dist
        historyApiFallback: true,
        compress: true, // si deseamos comprimir
        port: 3006, // el puerto que deseamos utilizar
        open: true, // para abrir nuestro navegar automáticamente 
    }
}