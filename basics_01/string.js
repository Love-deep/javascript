const name="Lovedeep"
const repoCount=5

// old way console.log(name+repoCount+"value")

//new way using backticks `` thsis is more readable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("Hockey")
console.log(gameName[3])  //accesing element in strings

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))    //to check character at any position
console.log(gameName.indexOf('y'))   //return the index of y=5

const newString=gameName.substring(0,4); //0-3 print that is hock
console.log(newString)

const anotherString=gameName.slice(-3,5)
console.log(anotherString)

const nString="    lovedeep  "
console.log(nString)
console.log(nString.trim()) //remove spaces

const url="https://lovedeep.com/love%20deep";
console.log(url.replace('%20','-'))
//we can ask string if keyword is present or not
console.log(url.includes('lovedeep')) //true

console.log(url.includes('lovy'))  //false


const newname=new String('love-deep-com')
console.log(newname.split('-'))
