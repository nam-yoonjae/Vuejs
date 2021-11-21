const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('@babel/polyfill');

module.exports = {
    // 진입점
    entry : {
        app : [
            '@babel/polyfill',
            path.join( __dirname, 'main.js'),
        ]
    },
    // 결과물에 대한 설정
    output : {
        filename : '[name].js',
        path : path.join( __dirname, 'dist'),
    },
    module : {
        rules : [
            {
                // .vue 로 끝나는 파일은 vue-loader로 
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // .js 로 끝나는 파일은 babel-loader로 
                // 대신 node_modules 디렉토리는 해석할 대상에서 전부 제외한다! 이거 꼭 해줘야됨
                test: /\.js$/,
                exclude : /node_modules/,
                loader: 'babel-loader'
            },
            {
                // .css 로 끝나는 파일은 
                // vue-style-loader 와 css-loader 를 사용하겠다 (use) , 위에랑 좀 다름
                // 하지만 위에도 use 라고 해줘도 되긴 함(webpack 버전별로)
                // 순서대로 꼭 !! array 로 잘 써줘야한다.
                test: /\.css$/,
                use : [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
 
    },
    // plugin 을 npm install 했고
    // 맨위에서 그걸 불러오고 선언했고 그거를 여기서 불러서 사용한다.
    // 생성자로 플러그인을 부르고 필요한 옵션들을 작성한다.
    plugins : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template : path.join( __dirname , 'index.html')
        }),
        // from 의 모든 것을 복사해서 to 로 넣어주게 된다.
        // to 에 아무것도 안쓰면 output 으로 떨굼 ( favicon 떨구기위해 추가함 )
        new CopyPlugin({
            patterns : [
                {
                    from : 'assets/',
                    to : '',
                }
            ]
        }),
        new CleanWebpackPlugin()
    ],
}