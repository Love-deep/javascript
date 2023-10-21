/*const myarr=[1,2,3,4,8,9]
//console.log(myarr[2])
//console.log(myarr)

//const newArr=new Array(1,13,4,5,7)
//console.log(newArr)

const anotherarr=["lovie","honie","harry"] //index above than 2 gives undefined
console.log(anotherarr[1])

/***************ARRAY METHOD *******************/
/*myarr.push(6),
myarr.push(4) 
myarr.push(1)
console.log(myarr)
myarr.pop()
console.log(myarr)

myarr.unshift(0) // add 0 in the intial
console.log(myarr)
myarr.shift(0)   //remove element from intial
console.log(myarr)
console.log(myarr.includes(21)) //means 21 is not in array
console.log(myarr.indexOf(21))  //gives -1 as 21 is not in array


const newArr=myarr.join() // this will join myarr and change arr type to string
console.log(newArr)
*/

//SLICE AND SPLICE METHOD
const myarr=[1,2,3,4,8,9]
console.log("A",myarr)

const myn1=myarr.slice(1,3)
console.log( "B",myn1)  // it doesnt manupulate original array as splice do and it gives index 1 value and 2 onlynot 3rd when we write slice(1,3)
console.log(myarr)

const myn2=myarr.splice(1,3) //it manupulate array i.e. index 1 to 3 will deleted from array
console.log( "B",myn2)

console.log( "C",myarr)

