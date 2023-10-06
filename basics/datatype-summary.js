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

/********************************************************************************** */

//Memory 
//Stack(Primitive)- yha pe copy milti hai 
//below example original value remains same only copy is created
let myjob="DataAnalyst"
let newjob=myjob
newjob="softwareDeveloper"
console.log(myjob)
console.log(newjob)

//Heap(non-primitive)-yha se refrerence milta h jab vale isme define hoti hai
//in below example the email in user1is also changed because of reference
//changes are made in original value
let user1={
    email:"love@gmail.com",
    upi:"love@oksbi"

}
let user2=user1

user2.email="deep@google.com"
console.log(user1.email)
console.log(user2.email)
