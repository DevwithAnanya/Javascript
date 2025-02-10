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