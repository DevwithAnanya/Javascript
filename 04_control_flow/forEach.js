const obj = {
    js: 'JavaScript',
    cpp: 'C++'
};

for (const key in obj) {  
    console.log(`${key} is for ${obj[key]}`);
}
const arr1=["js ","rb","cpp"]
for (const val in arr1) {
   console.log(val);  //refers to index , not values
   
}

//foreach  - will use widely
const arr2=["js ","rb","cpp"]
arr2.forEach( function(val){  // it takes a callback fxn as argument and  used to iterate over arrays
    console.log(val)
})
//  function(element , index , array) 3 parameters , last 2 are optional 

const arr3=["alpha","beta","gamma"]
arr3.forEach((val)=>{  //arrow function
    console.log(val)
})

function print(item){
    console.log(item)
}
arr3.forEach(print) //diretcly fxn pass kr diya 

//usually dattabase se values array ki form me aati hai and wo values objects he hoti hai
const myCoding=[
    {
        Languagename:"javascript"
    },
    {
        Languagename:"C++"
    }
]
console.log("//////////////");

myCoding.forEach((item)=>{  //item refers to each object 
console.log(item.Languagename); 

})
