//how does javascript works behind the scene
// Javasript execution context - the environment where js code is executed 
// at first , a global execution context is created which is
//  allocated in this keyword(for browsers , global EC is a window object)
// another is function EC - when fxn is invoked , it gets its own EC

//ab do phase hote hai - memory phase and execution phase 
// memory phase - all variables are allocated memory(and undefined)  , fxn definations
let val1 = 10
let val2=5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
// 1.global EC 
// 2.memory phase --
    //    val1-undefined 
    //    val2-undefined
    //    addnum - definations(pura utha ke rakh diya)
    //    result1- undefined
    //    resul2 - undefined

    // 3.Execution phase
        // val1<- 10
        // val2 <- 5
        // // addNum(line 15)-----fxn call so fxn EC9FOR FXN DEFINATION) -> isme memory phase bhi hoga aur execution phase bhi hoga
        //     a) variable environment ( memory phase  )              
        //          num1 -> undefined               
        //          num2-> undefined                 
        //          total ->undefined                

        //          b) execution thread (execution phase)
        //           num1 <- 10
        //           num2 <-5
        //         total <- 15

        //         now this total is returned to global Ec
        //         after this , this fxn EC is deleted 
        //         result1 <- 15
        //         similarly for result2


        // *******call stack 
        // JavaScript uses the Call Stack to keep track of function execution.
        //sbse pehle global execution context is pushed 
        //  Functions execution context(memory phase + execution  thread)  are pushed onto the stack when invoked.
        //  Functions Ec are popped off the stack once they finish execution.
        //  LIFO (Last In, First Out) Rule: The last function to enter is the first to exit.
        // When the Call Stack is empty, execution ends.

        function first() {
            console.log("Inside first function");
            second();
             let x= 1
            console.log("First function execution completed");
        }
        
        function second() {
            console.log("Inside second function");
            
        }
        first();
