const user ={
     username :"ananya",
     price :"999",
     welcomeMsz:function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)  //this points to current context i.e current object here
     }
}//this keyword refers to the current object i.e current object ke keys ko access krne ke liye hum use krte hai this 
user.welcomeMsz()
console.log(this)   //now we are in node environment , so there is no global context
// so this here refers to empty object
//but in browser we have window object as  global context
// so this in browser refers to the window object 

function chai(){
   const username="ananya"
   console.log(this) //inside a function , this refers to global object  
   console.log(this.username) //undefined as it only works in objects 
}
chai()

//arrow functions 
const fun= () => {
   const username="ananya"
   console.log(this)  //in arrow fxns , this refers to the empty object 
}
fun()

const addtwo= (num1,num2) => {
   return num1+num2   //explicit return using {} and return keyword
}
console.log(addtwo(2,4))

const add2 = (num1 , num2)=> (num1+num2)  //implicit return , no return keyword , widely used in react
console.log(add2(3,4))

