//control flow - which code will be  executed based on certain conditions 
if(true){
    //execute this
}
// < , > , <= , >= ,== ,=== , !=
// == checks for value  (loose equality)
// === checks for type as well (strict equality)

if(true){
    // execute this 
}
else{
    // execute this 
}

// if    else if     else 


switch(month){
    case 1 :
        console.log("jan")

    break;
    case 2:
        console.log("feb")
    break; //if no breaks , then all cases executed except default
    default :
    break;
}