## 숫자야구게임
웹팩 사용하기 
___

>> ~/git/Vuejs/baseballGame 폴더에서 npm init 하고 number-baseball 이름으로 패키지를 설치하면 package.json 파일이 생김


이제부터 스크립트를 사용하지 않을 것이다.
>> npm install vue 또는 npm i vue

배포를 위한 보조 도구인 웹팩을 쓸 것이다. 
웹팩 왜 쓰는가? => 스크립트가 너무 많아져서 하나로 합치려고 사용한다.
그거를 합칠 파일이 필요하다. 그게 webpack.config.js 의 entry 이다.
개발할 떄만 필요하고 배포할 떄는 필요하지 않다. 
package.json 에 보면 devDependencies 에 webpack 이 추가된게 보일 것이다.
스크립트 태그가 많아져서 이제 웹팩으로 개발할것이다.

>> npm i webpack webpack-cli -D

D 는 옵션 (개발용으로 웹팩이랑 cli 를 쓰겠다.)

기존에 index.html 파일에 템플릿쪽 (html부분) + 스크립트 로 나누어져있다고 한다면

웹팩을 사용하게 되면 프로젝트 구조가 바뀌게 되고 이에 따라

파일의 위치와 역할을 잘 알아두어야함


>> package.json : 패키지 버전이나 이름 등 중요한 정보 관리
>> webpack.config.js : 웹팩 관련 설정, 합칠 파일, 결과물 파일, 방법 등 선언




