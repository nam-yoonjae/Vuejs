// main.js 가 가장 중요한 파일
// 한방에 다 연결하고 있다

// package.json 에서 설치한 vue 정보 가져오기
import Vue from 'vue';

import ResponseCheck from './ResponseCheck.vue';

// 그러면 내가 설치한 vue 를 통해서 Vue() 할 수 있고 
// root 돔에 mount 하겠다는 이야기인듯
// 즉 여기서 뷰 인스턴스를 생성함
new Vue(ResponseCheck).$mount('#root');