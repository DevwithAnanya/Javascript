const id=4
const balance =new Number(100)
//it gaurantees that balance will be a number
// we specifically defined it as new object of type number 
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //kitne decimal tak ans chahiye

const a =123.75
console.log(a.toPrecision(3)); //it gives the precise value with roundoff
console.log(Number.MAX_VALUE);

// ++++++++++++++++++++++++++Maths+++++++++++++++++++/

console.log(Math);  //OBJECT
console.log(Math.abs(-1));
console.log(Math.round(4.6)); //round off to nearest int
console.log(Math.ceil(4.2));  // round off to upper int
console.log(Math.floor(4.6)); // round off to lower int
console.log(Math.min(1,2,2,3,5));



console.log(Math.random()); //value in range (0,1)
console.log((Math.random()*10)); 
console.log((Math.random()*10)+1);//(1-11)  // to avoid 0

const min=30
const max=50
console.log(Math.floor(Math.random()*(max-min+1))+min);
