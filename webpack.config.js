const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CssMinimizerPlugin=require('css-minimizer-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const{CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), //(el path de salida carpeta dist-distribution)
        filename: 'main.js', //(nombre del archivo resultante)
        publicPath:'/',
    },
    mode:'production',
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
                test:/\.s[ac]ss$/,
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
            filename:'[name].css'
        }),
        new CleanWebpackPlugin(), // agregamos este plugin para limpiar archivos
    ],
    optimization:{
        minimize : true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}