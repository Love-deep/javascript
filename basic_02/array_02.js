const marvel_heroes=['thor','iron man','spiderman']
const dc_heroes=['superman','flash','batman']

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])  //print flash because we merge two arrays 
//and at third index start from superman kitself a array so we type [3] index
//which is superman and [1] for printing first index of superman wala array


//BETTER TO USE CONCAT INSTEAD OF PUSH FOR COMBINING it creates new array intead of adding in same array but 
//remenber create new variable then store element in that  using concat then it works well 
//else it work like push if we directly do like above push operation
//const allheroes=marvel_heroes.concat(dc_heroes)
//console.log(allheroes)


//SPREAD OPERATOR ->COMMONLY USE FOR JOINING MULTIPLE ARRAYS MORE THAN TWO
const all_new_heoes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heoes)
//CONCAT ONLY JOIN TWO ARRAYS BUT SPREAD IS BETTER WE CAN ADD ANOTHER ARRAY ALSO 
//JUST PUT ,... THEN NEXT ARRAY

/****************FLAT**********************/

//FLAT OPERATION IS USED TO CONVERT ARRAY INSIDE ARRAY INTO A SINGLE ARRAY
//WE HAVE TO USE flat() operation in which inaside brackets we define depth of array 
//means how many array are inside as in below 3 arrays so depth is 3 or if dont want tocount
//just simply use ifinty
const anothr_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anther_arr=anothr_arr.flat(3)
console.log(real_anther_arr)

/********************IS ARRAY OPERATION***********************/
//IF WE FETCHINFG DATA OR SCAPPING AND TO CHECK WHETHER DATA IS IN ARRAY 
//WE USE isArray opetion which return true or false if not an arrayto 
//convert that in array we use .from exmaple below

console.log(Array.isArray('lovedeep'))  //false
console.log(Array.from('lovedeep'))  //['l','o','v',.....,'p']
console.log(Array.from({name:'lovedeep'})) //interesting case 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))  //from and of must read


