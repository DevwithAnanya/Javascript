const mydate = new Date()
console.log(mydate)

console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())

const mytime = Date.now()   //returns the timestamp in milliseconds from jan 1 ,1970
console.log(mytime)

const mynewdate = new Date(2025 ,4 ,20)   //month starts fron index 0
console.log(mynewdate)

const anotherdate= new Date("11-02-2024")
console.log(anotherdate)

console.log(mynewdate.getTime())   //meri date ka timestamp 1 jan ,1970 se lekar
console.log(mynewdate.getDay())   //0 is for sunday

console.log(mynewdate.toLocaleString('default',
    {weekday:"long"}))