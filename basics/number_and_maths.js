/******************** NUMBERS ********************** */
/*
const score=400
console.log(score)

const balance=new Number(100.1)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) //after decimal how many points eg 100.00

const othernumber=28.96

console.log(othernumber.toPrecision(3)) // if precesion is 1 in this case it gives value in exponential


const hundereds=10000
console.log(hundereds.toLocaleString('en-IN')) // put comaas in hundered according to indian standard
*/

/***********************  MATHS  ***************************** */


//console.log(Math)
//console.log(Math.abs(-4))  //absolute mean gives always +ve whether input is -ve
//console.log(Math.round(4.6)) //gives five
//console.log(Math.ceil(4.6))  //give topmost value  i.e.5
//console.log(Math.floor(4.6)) //give lowest value i.e.4
//
//
//console.log(Math.min(4,5,7,3))
//console.log(Math.max(4,5,7,30))

//math library is mostly used in math.random

console.log(Math.random())  //gives value between 0-1 any random value eg.0.5233 etc
console.log((Math.random()*10) +1) //we add one because value can be 0.0.. nd output after shift is 0 
//to avoid 0 we add one so output always greater than one
console.log(Math.floor(Math.random()*10) +1) //for removing decimals from output

//if we want that our output comes out according to our desire so to do that
//we declare min and max values in which output lies we have formula below
//we multiply math.random with max-min to get range and +1 to avoid zero
//add min in last to get value between min and max
const min=10
const max=30
console.log(Math.floor(Math.random()* (max-min+1)) + min)
