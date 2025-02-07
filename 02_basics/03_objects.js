//object literals : way to define the object 
const JsUser={
    name:"hitesh",   //key:value
    //key is a string by default
    age:18,
    location:"pune",
    isLoggedIn:false,
    LastLoginDays:["Thursday","friday"]

}
console.log(JsUser.age) //accessing objects
console.log(JsUser["age"]) //another way

// Declaring a symbol 
const mySym = Symbol("key1")
//now use this as a key for object 
const myobj={
    name :"Ananya",
    [mySym]:"mykey1"
}
console.log(myobj[mySym]) //no double quotes as this is a symbol

JsUser.age=21  //modifying object 
Object.freeze(JsUser)  //freezing object so nobody can modify

myobj.myfunc = function(){
    console.log("hello JS")
}
console.log(myobj.myfunc())
