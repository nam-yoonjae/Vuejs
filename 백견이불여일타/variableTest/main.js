console.log(test);
// let num = 10;
// console.log( num );
// num = 20;
// console.log( num );


// const name = 'yoonjae';
// console.log( name );
// name = "yonjae";
// console.log( name );

// 관례적인 변수 선언 방법

// 1. 변수이름은 카멜케이스로 작성한다.
let userName = 'yjcoding'; // (o)
let user_name = 'yjcoding'; // (x)

// 2. 변수 이름은 _, $, 문자로만 시작한다.
//let 12day = '월요일'; // (x) 숫자로 시작
// let @day12 = '월요일'; // (x) _, $ 이외의 특수문자로 시작
var test = 'yyyyy';
let day12 = '월요일'; // (o)
let _day12 = '월요일'; // (o)
let $day12 = '월요일'; // (o)

// 3. 상수나 축약어는 대문자와 스네이크케이스 방식으로 작성한다.
const HTML = 'Hyper Text Markup Language';
const MAX_LEVEL = '99';

// 4. 예약어는 사용할 수 없다. var, let, const, typeof 등
//const var = 10; // 에러
