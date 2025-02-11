const arr = [1,2,3,4,5]
for (const num of arr) {     //for of loop  
// value of object(not js object , but anything jisoe loop lgaana hai)
     
    console.log(num); 
}

const greetings ="Hello JS"
for (const greet of greetings) {
    if(greet =='e'){   //greet refers to the value ingreetings , not the index in greetings
        continue
    }
    console.log(`value is ${greet}`);
    
}

//map
const map = new Map()   //no duplicates + it maintains the order in which keys are inserted
map.set('IN',"India") //key:value
map.set('Fr',"France")

for (const [key,value] of map) {
    console.log(key) 
}
//objects are not iterable using these loops