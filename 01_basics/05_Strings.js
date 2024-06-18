const name="ananya"
const repocount= 29
console.log(name+repocount);//not recommended now
//instead , use string interpolation
console.log(`My name is ${name} and my repo count is ${repocount}`)
// `` not single inverted commas

const gamename = new String('Hello')
//other way of declaring string using object
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('H'));
const newstring= gamename.substring(0,4)
console.log(newstring);

const newstring1= " ananya  "
console.log(newstring1.trim()); 
//it removes the extra spaces

const url="https://hitesh.com/hitesh%20sharma"
console.log(url.replace('%20','-'))

const ans="good-one-ananya"
const words=ans.split('-')
 //splits the string into array based on the separator
console.log(words)

