/*Primitive data types

7 types of data type:
1.string 
2.Number-- const score=100.4
3.Boolean -- const isloggedIn=false
4.null const-- outsideTemp=null
5.undefined --  let username;
6.Symbol :   
const id=Symbol('123')
const anotherId= Symbol('123')
7.Bigint--const bignumber=2153465354657n

Reference (non-primitive):

Arrays,Objects,Function


*/
const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId) //false because we declare as symbol and 
//symbol is always unique whether they are same 


const bignumber=2153465354657n
//console.log(typeof bignumber)

const fruits=["apple","mango","banana"] //array
console.log(fruits)

//objects
let myobj={
    name:"lovedeep",
    age:20
}
console.log(myobj)
console.log(typeof fruits)

//function
const myFunction=function(){
    console.log("hello world")
}