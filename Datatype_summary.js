/* based on how the data is stored in memory 
and how is it accessed , datatypes are classified
as primitive and non primitive
->1  primitive types use call by value- whenever data is
copied , the memory refernce is not sent but 
a copy of original data is sent and any change is 
made in copy itself , not in actual data

example:
String , Number,Boolean,null,undefined,Symbol
,BigInt



// JS is dynamicallly types language
// we dont need to define the datatypes

const score=100
const average=100.3
let email;

const id=Symbol('123')
const anotherid=Symbol('123') //defines unique keys
console.log(id==anotherid)  //even value is same ,
// return value is not same 


2.Reference type-> (non primitive)

example- arrays,objects,Functions
*/
const heros=["ironman","superman","batman"];
// this is an array
let myobj={
name:"hitesh",
age:30    
} //this is an object (key value pair)

const myfunc=function(){
console.log("hello world");
}
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myfunc);

// type of array is object
// type of object is object
// type of function is function (object function )