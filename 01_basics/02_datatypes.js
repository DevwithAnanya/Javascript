"use strict"; //treat all JS code as newer version 

// alert(3+3) we are using node , not browser
// broswer me JS ka engine hota hai inbuilt 
// to wahan chl jayega , node me alg way hai


console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"  // string type
let age = 18             //number type
let isLoggedIn = false     //boolean
let state;               //  undefined
let bignumber=1334445555555555n; //bigint
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value , absence of any object value
/*It is manually assigned to a variable when we want to 
 indicate that it has no value.
It is not the same as undefined 
(which means a variable is declared but not assigned).*/ 
// undefined => 
// symbol =>  used to create unique keys for objects


// object

console.log(typeof undefined); // undefined   , typeof operator returns the type of the value
console.log(typeof null); // object`  
/* it is a bug since first implemetation of js , not fixed as
 it will break lot of js code
In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value.
 The type tag for objects was 0 Consequently, null had 0 as type tag, hence the typeof return value "object".
*/

