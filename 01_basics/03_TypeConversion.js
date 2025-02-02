let score ="33"

console.log(typeof score)
// sometimes we are not sure whether user has entered
// a number or a string , so check first
let valueinNumber = Number(score);  //type conversion
// to number datatype
console.log(typeof valueinNumber)

let id="33abc"
let valueinId = Number(id)
//The Number() function tries to convert the string "33abc" 
// into a number, but it contains non-numeric characters (abc).
//hence it returned NaN
console.log(typeof valueinId)  //type would be number
console.log(valueinId) //value is NaN

// "33"->33
// "33abc" -> NaN
// null ->0
// undefined -  NaN
// true-1 , false -0

// For Boolean() 
// 1->true
// 0->false
// ""->false
// "Ananya"->true

let str1="hello"
let str2= " Javascript"
let str3 = str1 + str2
console.log(str3);
console.log("1"+2); //pehle string hai to sbhi string 
// he treat honge
 console.log(1+"2"); //int ko string treat kiya jayega
 console.log(1+2+"2"); //string last me hai to
//  pehle int expression evaluate ho jaayega 
console.log("2"+3+3); //string pehle to sb string he
//  treat honge

// prefix /postfix increment decrement 
let x=5
console.log(x++)
console.log(++x);
