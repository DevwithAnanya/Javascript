// // Hoisting is a behavior in JavaScript where variable and function 
// // declarations are moved (or "hoisted") to the top of their scope before the code is executed

// console.log(a); // Output: undefined
// var a = 5;
// console.log(a); // Output: 5

// how js treats it
// var a;  // Declaration is hoisted to the top
// console.log(a); // undefined (not assigned yet , so default is undefined)
// a = 5;  // Assignment happens later
// console.log(a); // 5

// hoisting in let and const:
// they are hoisted , but cannot be initialized as they stay in temporal dead zone
// console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
// let x = 10;
// console.log(x); // ✅ Output: 10

// how js see it
// let x; // Exists in memory but is in the "Temporal Dead Zone" (TDZ)

// console.log(x); // ❌ Error! x is in the TDZ

// // Step 2: Initialization
// x = 10; // Now x is initialized

// console.log(x); // ✅ Prints 10

//  function declarations are fully hoisted
// hello(); // ✅ Works! Output: Hello!

// function hello() {
//     console.log("Hello!");
// }
// Function Expressions are NOT Fully Hoisted
// greet(); // ❌ TypeError: greet is not a function
// var greet = function() {
//     console.log("Hi!");
// };
