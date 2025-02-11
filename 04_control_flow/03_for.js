// for( let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

for(let i=0;i<=5;i++){
    if(i==3){
        console.log("3 detected")
        break;   //current loop se bahar le jayega
    }
    console.log(i)
}


for(let i=0;i<=5;i++){
    if(i==3){
        console.log("3 detected")
        continue;   //current iteration ko skip kr dega aur next one pe move krega
    }
    console.log(i)
}