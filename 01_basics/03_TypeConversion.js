let score ="33"

console.log(typeof score)
// sometimes we are not sure whether user has entered
// a number or a string , so check first
let valueinNumber = Number(score);  //type converion
// to number datatype
console.log(typeof valueinNumber)

let id="33abc"
let valueinId = Number(id)
// id will be converted to number , but value 
// is NaN - not a number
console.log(typeof valueinId)
console.log(valueinId)

// "33"-33
// "33abc" - NaN
// null -0
// undefined -  NaN
// true-1 , false -0

// For Boolean() 
// 1-true
// 0-false
// ""-false
// "Ananya"-true