const myobj ={}//empty object
const x={
    fullname:{
        userfullname:{
              firstname:"ananya",
              lastname:"trinach"
        }
    }
}
console.log(x.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {4:"a", 5:"b"}
const obj3={...obj1 ,...obj2}
console.log(obj3)
//database se jab value aayegi to wo 
// array of objects hogi
// arrayname[1].key   second object ki key

console.log(Object.keys(x)) //x object ki saari keys array ki form me display ho jayegi
console.log(Object.values(x))


//object destructuring 
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh" 
}
const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor :inst} = course  //aise new names bhi de skte hai destructuring krte waqt
console.log(inst)

// JSON - javascript object notation
// it is data interchange format that is easy to read and Write

// JSON format
// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["JavaScript", "Python", "Node.js"]
//   }
//   here ,  key is  also enclsoed in ""

//API is set of rules that allows software 
// applications to communicate with each other

// How JSON API Works:
// The client makes an HTTP request to an endpoint (URL).
// The server responds with data in JSON format.