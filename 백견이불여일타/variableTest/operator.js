// 1. String concatenation

console.log(`my` + ` cat`);
console.log('1' + 2);
console.log(`string literals : 


........ 1 + 2 = ${1 + 2}`);

console.log("ellis's book");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log( 4 / 2 ); //divide
console.log(4 * 4);  //multiply
console.log( 9 % 4); // remainder
console.log( 5 ** 2); //exponentiation 승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log( 10 < 6 ); // less than
console.log( 10 <= 6 ); // less than or equal
console.log( 10 > 6 ); // greater than
console.log( 10 >= 6 ); // greater than or equal

// 6. Logical Operators : || (or), && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);
function check() {
   for (let i = 0; i < 10; i++) {
      //wasting time
      console.log(`으악`);
   }
   return true;
}