const arr1=["ram " , "sham"]
const arr2= ["mohan","sohan"]

arr1.push(arr2)   //considers arr2 as next element as a whole
console.log(arr1)

const arr4=["ram " , "sham"]
const arr5= ["mohan","sohan"]
const arr3= arr4.concat(arr5)
console.log(arr3)

//another better way is to use spread operator
const arr6 = [...arr4 , ...arr5]
console.log(arr6)

console.log(Array.isArray("ananya"))
console.log(Array.from("Ananya"))

const one=12
const two=13
console.log(Array.of(one , two ))
