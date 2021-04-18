// path 라는 모듈을 통해 파일 경로 설정할 때 이용
const path = require('path');
// vue-loader 플러그인
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 위에서 플러그인 소스 받을 때 import 가 아니라 require 라고 해서 받는데
// 웹팩은 node 환경이기 때문에 require
// vue 는 스크립트라서 import 라고 일단 알고 있으면 된다.

// 웹팩 동작 순서
// 1. webpack 은 처음에 entry 를 본다
// entry 의 directoryname 이랑 파일명을 본다.
// main.js 를 발견하고 거기를 딱 켠다. 그리고 거기에 import 할 것을 또 읽는다.
// 근데 웹팩은 자바스크립트만 합쳐주는데 numberbaseball.vue 는 자바스크립트가 아니다.

// 2. 그래서 나오는게 rules,
// entry 로부터 쭉 읽다가 희한한게 나오면 module 에서 rulse 에 따라 처리한다.
// rules 에서 자바스크립트 아닌 *vue 파일도 처리할 수 있도록 vue-loader를 등록해준다.
// (설치도 필요함)
// 이제 *.vue 파일을 보면 이제 얘는 웹팩이 처리하는게 아니라 vue-loader 가 처리한다.
// vue파일을 만났을 때는 vue-loader 가 template 을 처리한다.
// 3. plugin
// 후처리하는 느낌? output 나오기 직전 plugin이 한번 더 가공해준다는 느낌
// 4. output : 최종결과물



// npm install 명령어 내릴 때 특정 버전 언급하려면 @ 이용
// ex ) npm install vue@2.7.1


module.exports = {
    // webpack설정을 한다.
    // 크게 4개로 생각하면 된다.
    // enrty, module, plugins, output
    
    mode : 'development',
    devtool : 'eval', 
    // eval : 개발용(webpack이 빌드하는 속도가 빠름)
    // 배포할때는 'hidden-source-map' 

    resolve : {
        // 확장자 같은 걸 처리해줄 수 있다.
        // extensions 에 넣어주면 import 같은 구문에서 확장자 생략할 수 있다.
        extensions : ['.js', '.vue'],
    },
    entry : {
        // 가장 중요한 js 파일을 등록
        // app 이라는 이름은 변경해도 된다.
        // 여기서 스크립트들을 쓰면 => app 으로 합쳐진다.
        app : path.join(__dirname, 'main.js'),
    },
    module : {
        // 여기가 핵심
        
        rules : [{
            // 처리할 방식을 선언
            // 자바스크립트가 아닌 녀석도 합쳐줄 수 있게 정규표현식을 써서
            // 파일명이 .vue 끝나는 파일을 전부 읽어줄 수 있도록 한다.($는 정규표현식에서 끝을 의미)
            test : /\.vue$/,
            
            // 뭘 이용할 것인가 선언
            // vue-loader 라는 건 없음 (다른 사람이 만들어놓은 것임)
            // 그래서 또 다운 받아야함 ( npm i vue-loader -D)
            // loader 또는 use 라고 해도 된다.
            // user : 'vue-loader',
            loader : 'vue-loader',
        }]

    },
    plugins : [
        // vue-loader 를 실행시키기 위해 플러그인 설치했고 그 다음 추가함
        new VueLoaderPlugin(),
    ],
    output : {
        // 웹팩을 빌드한 결과를 세팅해주는 부분
        // 대괄호로 선언해줘도 됨
        // 여기서 선언한 [name] 은 entry 에서 설정한 app 이름임
        filename : '[name].js',

        // dist 폴더명은 변경가능하다.
        // 여기엔 절대경로를 적어줘야함. node 에서 절대경로 도와주는 모듈이 있다. (여기 최상단에 선언함)
        // join 이라는 메소드를 이용해서 현재 경로에 접근가능하다.
        // join(언더스코어 2개 + dirname, 그 다음 파라미터로 폴더명)
        // => 현재 경로안에 있는 dist 폴더를 가리키게 된다.
        path : path.join(__dirname, 'dist'),

        // 이렇게 하면 dist 폴더에 파일명.js 가 빌드된다.
    },
};