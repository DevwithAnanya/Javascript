//Immediately Invoked function expressions
// An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined
(function print(){
    console.log("ananya");
 })();   //( fxn defination)( fxn call);
//  ; needs to be added as this fxn does not know here to end the context 
// IIFE is used to avoid the global scope pollution
// when you declare a variable without var, let, or const, it automatically becomes a global variable, accessible from anywhere in the code.

// function hello() {
//     message = "Hello, World!"; // ❌ No `var`, `let`, or `const` (becomes global)
// }
// hello();

// console.log(message);  accessible but it shoudn't ! thats why iife

((name)=>{   //using arrow function
    console.log(`${name}`)
})("hello JS");

