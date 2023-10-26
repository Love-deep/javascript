const user={
    username:'lovedeep',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        //this humne current contex(value) ko refer krne ke liye use kiya maltb scope ke andr kuch bhi refer karna use this
        //console.log(this); //ye values dega phle lovedeep ke sath currrent contect fr sam ke sath
    }
}
//user.welcomeMessage()
//user.username='sandy'
//user.welcomeMessage() //ye sandy print krdega kyunki upper value hardcode nhi thi 

//console.log(this); //this will print{}

//browser ke anr sbse jyada object window object hai

//function chai() {
//    let username='love'
//   // console.log(this);  //function ke andr this me bhut saari values milti hai
//    console.log(this.username);  //this will give undefined ye function me nhi kaam karta object me hi ese krta hai
//}
//chai() //ye bhut kuch btayega run krke dekh lena global values etc print krdega

//another way

//const chai=function(){
//    let username='lovedeep'
//    console.log(this.username);
//    }
//chai()

//one more way using arrow function

const chai=() =>{
    let username='lovedeep'
    console.log(this);
    }
chai()

// const addtwo=(num1,num2)=>{
// return num1+num2
// }
//console.log(addtwo(3,5));

//one ,ore way that is implicit when we type one line function then dont need 
//of curly braces use return statement on same line by removing return that will understand by function
const addtwo=(num1,num2)=> num1+num2 //or (num1+num2)
console.log(addtwo(3,8));  

//upper dono ka coclusion ye h ki jub curly use kri to return likhna pdega agr nhi kri use to nhi

// const myAraray=[2,5,6,8,9]
// myAraray.forEach()
