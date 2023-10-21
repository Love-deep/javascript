//Dates:- date is object in javascipt
 
let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(mydate.toUTCString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate)

let myCreatedDate=new Date(2023,6,23)

console.log(myCreatedDate.toDateString()) //months are started from 0 0-jan and so on...

let newdate=new Date()
console.log(newdate.getDay()+1)

let createdate=new Date(2023,0,23,5,9)
console.log(createdate.toLocaleString()) 


let date=new Date("2023-01-13") // here 00 month is not valid dqte so start with 01
console.log(date.toLocaleString())
let date001=new Date("01-13-2023") // above and this have same output
console.log(date001.toLocaleString()) 

//date comparision is mostly in millisecind by default we get seconds by dvide milisecond / 1000
let timeStamp= Date.now()
console.log(timeStamp)
//for comparision of date we take date001 wala variable
console.log(date001.getTime()/1000)

console.log(date001.toLocaleString('default',
{
  weekday:"long",
  month:"short",
  timeZoneName:'long'
}))
