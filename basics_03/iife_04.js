//IMMEDIATE INVOKED FUNCTION EXPRESSION(IIFE)

function chai(){
 console.log(`DB CONNECTED`);
}
//chai()  //isko direct call krna bina chai like to neeche dekho



(function chai(){
    ////named iife iska koi name hai name is chai
    console.log(`DB CONNECTED`);
   })(); //agar ye ; nhi lgaya to neeche wala error show krega

   //IIFE hum isliye use krte hai tajo jo global scope se pollution hoti hai kayibar to
   //use global scope ke variables ya pollution htane ko iska use kiya


   //ese bhi declare ho skta hai
   ( ()=>{
    
    console.log(`db connected`);
   }) ();

   

   ( (name)=>{
    //its only iife no named
    console.log(`db connected ${name}`);
   }) ('lovedeep')