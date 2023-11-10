//TRUTHY OR FALSY VALUE

const useremail="love@gmail"
if(useremail){
    console.log('got use email');
}
else{
    console.log('dont have email');
}


const useremail1=""
if(useremail1){
    console.log('got use email');
}
else{
    console.log('dont have email');
}


const useremail2=[]
if(useremail2){
    console.log('got use email');
}
else{
    console.log('dont have email');
}

/*IMPORTANT NOTES
1.FALSY VALUES:-
false,0,-o,BigInt,0n,"",null,NaN,undefined
upper wale sbke ilawa sb truthy values hai

2.TRUTHY VALUES:-
"0",'false',' '(string ke andr space is truthy value),[],{},function(){}
*/


//array ko check ese krte hai
// if (useremail2.length===0) {
//     console.log('array is empty');
// }

//object ko kaise check karna
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log('object is empty');
}

//Nullish coalescing Operator(??):null undefned(ye null or undefined ke liye bna h)

let val1;
// val1=5??10  //print 5
// val1=null??10   //print 5
// val1=undefined??15 
val1=null??10??13   //pehle wala value print hota hai i.e.10

console.log(val1);


//TERNARY OPERATOR are different from nullish confuse nhi hona
//condition?true:false

const iceteaPrice=80
iceteaPrice<80?console.log('less than 80') : console.log('more than 80');;