function saymyname(){
    console.log('l');
    console.log('o');
    console.log('v');
    console.log('e');
    console.log('d');
    console.log('e');
    console.log('e');
    console.log('p');
}

//saymyname() //print above written in function
saymyname  //print mothing and dont give error because function s a reference

/*
function addtwoNos(num1,num2){ //num1 and num2 are parameters 
   console.log(num1 + num2);
}
addtwoNos(3,7)  //3 and 7 are arguments*/

//another way if we store result and  then print 
function addtwoNos(num1,num2){ //num1 and num2 are parameters 
    //let result=num1 + num2;  //do like this or direct put return
    //return result
    return num1+ num2
 }
const result=addtwoNos(9,2)
//console.log(result);


function loginuserMessage(username){
    return `${username} just logged in`
}
//loginuserMessage('lovedeep') //print nothing to print that we have to use console.log

console.log(loginuserMessage('lovedeep'));

//if we dont have username
function loginuserMessage(username){
    if(username===undefined){
        console.log('please enter username');
        return
    }
    return `${username} just logged in`  //to ignore this line we use return ater if statement
}
console.log(loginuserMessage());




//we can give default values also see below
function loginuserMessage(username='lovedeep'){
    if(!username){
        console.log('please enter username');
        return
    }
    return `${username} just logged in`  
}
console.log(loginuserMessage()); //it print lovedeep just logged in as we defined in functio above
console.log(loginuserMessage('sam')); // value verwrite kar di h to upper declare
//lovedeep ki jgh ab sam just logged in pint hoga


//agar hme pta hi n ho kitne arguments aane wale hai to hm ese use krte hai function 
function calculateCartPrive(...num){      //akela num will store only 200 agar ... lgade jiska matlab rest operator hota hai to jitna chahhe utna store kro or wo array bnake store kr deta h
    return num
}
//console.log(calculateCartPrive(200,300,400));


/***********passing object in function*******************/
const user={
    username:'love',
    price:900
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)

//or we directly pass object in function name
/*handleObject({
    username:'lovie',
    price:100
})*/

const arr=[200,300,500]
function returnSecondvalue(getarray){
    return getarray[1]
}
console.log(returnSecondvalue(arr)); //or direclt put values here dont need to declare array above