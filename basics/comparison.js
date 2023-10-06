/*console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)*/

//avoid below comparison

console.log("2">1)  //may be sometimes it does give wrong result 
//so compare same datatypes always
console.log("02">1)

console.log(null>0) //false
console.log(null==0) //false

console.log(null>=0) //true but actually there is value converion problem
//the reason behind that equality check == and comparison < > >= <= work diffrently
//comparison covert null to a number, treating it as 0 and return true

/******    *********/

//=== (strict check)
console.log("2"===2); //false because it strictly check datatypes are different so false
