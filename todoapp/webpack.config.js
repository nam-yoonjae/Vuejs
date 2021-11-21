const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {merge} = require('webpack-merge');
require('@babel/polyfill');

// module.exports 설정에서 함수 설정을 허용하며, 
// env 와 opts 라는 두가지 인자값을 쓸 수 있다.
// opts 에 개발용인지 제품용인지 구분할 수 있는 값이 있다.

// 개발용과 제품용 분기
module.exports = ( env, opts ) => {
    
    // 상수를 여기에 만든다.
    const config = {
        // 개발용과 제품용 둘다 해당되는, 중복 옵션들.

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
                },
                {
                    // .scss 로 끝나는 파일을 찾아서 해당 로더로 사용하겠다.
                    test : /\.scss$/,
                    use : [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
    
        },
        // plugin 을 npm install 했고
        // 맨위에서 그걸 불러오고 선언했고 그거를 여기서 불러서 사용한다.
        // 생성자로 플러그인을 부르고 필요한 옵션들을 작성한다.
        plugins : [
            new HtmlWebpackPlugin({
                template : path.join( __dirname , 'index.html')
            }),
            new VueLoaderPlugin(),
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
        ],
    }

    // 개발용
    if ( 'development ' === opts.mode ) {
        // return 을 통해 옵션을 반환한다.
        return merge( config, {
            // 추가 개발용 옵션

            // 빌드시간이 적고 디버깅이 가능하지만, 최적화가 덜 되어있고 용량이 클 수 있는 옵션
            devtool : 'eval',
            devServer : {
                open : false,
                hot : true,
            }
        })
    }
    // 제품용
    else {
        return merge( config, {
            // 추가 제품용 옵션
            
            // 빌드시간이 좀 길고 디버깅이 안되지만, 최적화가 잘되어있고 용량이 작은 옵션
            devtool : 'cheap-module-source-map',
            plugins : [
                new CleanWebpackPlugin()
            ]
        })
    }
}