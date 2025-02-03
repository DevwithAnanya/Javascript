//arrays
const myArr =  [0,1,2,3,4,5]
const myArr2 = [0,1,"Ananya",true] //can have mixed type elements 

console.log(myArr[0]);  //indexing
const newarr = new Array(1,2,3,4,5)  //other way of declaring array
console.log(newarr)

myArr.push(8)  //array ke end me add krna ho
console.log(myArr)

myArr.pop()   //last se remove krna ho
console.log(myArr)

myArr.unshift(9)  //array ke satrting me add krna ho
console.log(myArr)

myArr.shift() //removes the first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

const mynewarr = myArr.join();  //jjoins the elements of array to a string
console.log(mynewarr)

const testarr1 = myArr.slice(1,3)  //gives a portion of array , not including last
console.log(testarr1)

const testarr2 = myArr.splice(1,3) //it gives the portion of array including last
// but it actually removes this portion from the original array as well
console.log(testarr2)
console.log(myArr)

