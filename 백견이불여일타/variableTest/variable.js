// 1. Use Strict ( added in ES5 )
// use this for Valina Javascript.
`use strict`;

// 2. Variable (rw : read/write)
// let ( added in ES6 )
let globalName = 'globalName';
{
   let name = 'letName';
   console.log( name );
   name = 'rename letName to letName2';
   console.log( name );
}
console.log( name ); //undefined
console.log( globalName );

// var (don't ever use this!)
// var hoisting : 어디에 선언했는지에 상관없이
// 가장 위로 끌어올리는 것을 의미.
// move delcaration from bottom to top

console.log(age);
age = 4;
console.log(age);
var age;

// var 를 이용하면 이게 가능하다.
// var 를 쓰면 안되는 또 다른 이유는 block scope 을 철저히 무시한다
{
   varNumber = 14;
   var varNumber;
}
console.log(varNumber);

// 3. Constant (r : readonly)
// 값을 선언한 이 후에는 재 선언 또는 변경이 안됨
// immutable ( 변경 불가 )
// favor immutable data type always for a few reasons
// 값을 한번 할당한 다음에는 절대 변경되지 않는 데이터 타입을 사용해라.
// 이유 3가지 
// - security : 데이터 값 보안상
// - thread safety : 스레드 안정성
// - reduce human mistakes : 개발자의 실수를 줄여줌
const daysInWeek = 7;
const maxNumber = 5;

// 즉 변수는 Mutable : let , Immutable : const

// 4. Variable Types

// primitive, single item (더 이상 작은 단위로 쪼갤 수 없는 기본 데이터 타입 )
// : number, string, boolean, null, undefined, symbol
// object ( single item 을 묶은 것, 한 박스로 ), box container,
// function ( 자바스크립트에서는 function 도 데이터 타입 중의 하나임 ), 
// first-class function

// 자바스크립트에서는 number 관련해서 다이나믹하게 데이터 타입을 
// 관리해주기 때문에 number 라고만 선언해주면 된다.
const count = 17;
const size = 17.1;
const helloworld = 'helloworld';
let object = {
   name : '홍길동',
   age : 23
}
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);
console.log(`value : ${helloworld}, type : ${typeof helloworld}`);
console.log(`value : ${object}, type : ${typeof object}`)


// number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
console.log(infinity);
const negativeInfinity = -1/0;
console.log( negativeInfinity );
const notAnumber = `not a number` /2;
console.log( notAnumber );
// 연산할때 값이 valid 인지 확인한 다음 나누는게 좋다. 알고 있기

// 새롭게 추가된 big int
// 자바스크립트의 number 는 -2**53 ~ 2*53 까지 표현되고
// 숫자 끝에 n 을 붙이면 됨 // 크롬이랑 파이어폭스에서만 지원됨
// 다른 브라우저는 숫자 끝에 이상한 문자가 있다고 에러뿜뿜
const bigInt = 123456789012345678901234567890n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// String
const char = `c`;
const brendan = `brendan`;
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);

// template literal ( 백틱 (`) 을 이용한 값 표현)
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}, type :${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any ohter value 로 간주한다!
const canRead = true;
const test = 3 < 1 ; //false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);
//null : null 이라고 진짜로 지정해주는 거. null 로 값을 할당함.
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);
//undefined  : 선언은 됐는데 값이 설정되지 않은 상태.
//let x; // 얘랑 
let x = undefined; // 똑같은 상태임!
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
// 주어지는 값이랑 다르게 다른 심볼을 생성함.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${gSymbol1.description}, type : ${typeof gSymbol1}`);
 

// 5. Dynamic Typing : 
// javascript 는 dynamically typed language
// 값을 선언할 때 어떤 타입인지 선언하지 않고 
// runtime ( 프로그램이 동작할때 ) 할당된 값에 따라서
// 값이 변경될 수 있다는 것.

// 다수의 엔지니어들이 만들때 불똥이 떨어지는 원인이 되기도 함.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text} , type : ${typeof text}`);
text = 1;
console.log(`value : ${text} , type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text} , type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text} , type : ${typeof text}`);
// 선언할 때 마다 자바스크립트가 이를 인식하고, 그에 맞춰 type 이 변경된다!

// 6. Object
const yjObject = { 
   name : 'yoonjae',
   age : 20,
}
console.log(yjObject.name);