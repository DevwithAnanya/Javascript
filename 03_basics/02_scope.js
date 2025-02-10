// let a=5
// if(true){  //starting of if scope(local)
//     let a=10
//     const b=12
//     var c=3
//     a=8
//     console.log(a)  //var declared in global scope is accessible inside local scope
// }  // if scope ends here

// console.log(c)  // var does not hold the block scope , so we avoid using it
// console.log(a)  //global scope

// // output?
// function one (){
//     const username="ananya"
//     function two(){
//         const website ="youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two()
// }
// one()

// ///////
// if(1){
//     const username ="hitesh"
//     if(username==="hitesh"){
//         const website=" youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }

// *********more 
// case 1
// console.log(addone(2))  //pehle call kiya is case me to chlega
// function addone(num){
//     return num+1
// }

// case2 
// myfunc(3)  //cannot access before defining as we are storing in a variable
// const myfunc = function (num){
//     return num+1
// }

