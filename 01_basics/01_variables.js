const rollNumber = 12345
let password = "123450"
var AccountPwd = " 12344 "
City = " Jaipur"
// rollNumber=2  value of a constant cannot
// be modified

let accountState //if we dont assign value , JS 
//treats the variable as undefined

password ="3"
AccountPwd="34"
city="Chd"
console.log(password)  //to display output on console
console.table([password,AccountPwd,City , accountState])
//to display multiple items in form of table

/*do not use var for variabe declaration 
  because of issues in block and functional scope
  , using var , there was no well defined scope of
  the variable 
  so now we only use const and let to declare variable

*/

