// falsy value 
// false , 0 , -0 , 0n ,"",null , undefined , NaN

// truthy values 
// "0" , 'false' , " "(space in string) , [] ,{} , function(){}(empty fxn)

// checking for Array
// if(myarr.length === 0){
//     execute this
// }

// checking for object 
// const myobj={}

// if((Object.keys(myobj).length === 0)){   //object.keys(--) gives the keys in form of array
//     execute this
// }
//Nullish coalescing operator 
//val1 =5 ?? 10   provide a default value when dealing with null or undefined.
//  It returns the right-hand operand if the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.
//val2 = null ??14    val2 will have 14

val3 = undefined ?? 3 
console.log(val3)

// terniary operator
// condition ? true:false
