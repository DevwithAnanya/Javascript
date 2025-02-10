function myfunc (){     //function defination
    console.log("Ananya")
}
myfunc()  //calling a function 

function myfunc2(num1 , num2){  //parameters
    console.log(num1+num2)
}
let result = myfunc2(3,4)   //arguments
console.log(result)  // value is undefined as we are not returning anything from function 

function myfunc3(num1 , num2){
  return num1+ num2  //no statement after return is executed 
}
let result2 = myfunc3(9,4)
console.log(result2)

function loginuser(username){
    return `${username} just loggrd in`

}
console.log(loginuser("Ananya"))
console.log(loginuser())  //if no arguments , then it prints undefined

function loginuser2(username){
    if(username===undefined){    //if(!username)  is same - undefined is treated as false , so !username makes it true
        console.log("enter a user name")
        return 
    }
    return `${username} just loggrd in`

}
console.log(loginuser2("Ananya"))
console.log(loginuser2()) 


// we can also have default values for pparametrs
function loginuser3(username ="sam"){
    if(username===undefined){   
        console.log("enter a user name")
        return 
    }
    return `${username} just loggrd in`

}
console.log(loginuser3())  //default parameter will be taken as username 

function calculatecartPrice(num1){
    return num1
}
console.log(calculatecartPrice(4,5))  //ek parameter he hai defination me 
// to print bhi ek he hoga 
// what if multiple values pass krwani ho fxn se 


function calculatecartPrice(...num1){   //...rest operator
    return num1    //returns an array of arguments
}
console.log(calculatecartPrice(4,5))

function calculatecartPrice( val1 , val2 , ...num1){
    return num1
}
console.log(calculatecartPrice(4,5, 7 ,6 ))

//passing object to a fxn
const user ={
    username:"Ananya",
    price:100
}
function handleobject(anyobject){
     console.log( `username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user) //direct yahan pe bhi pass kr skte object , pehle define kiye bina


// passing arrays
const arr1=[1,2,3,4]
function myfunc2(anyarr){
    console.log(anyarr[1])
}
myfunc2(arr1)