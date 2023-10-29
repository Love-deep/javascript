//if

//true hai code execute krege false hai to nhi krege i.e. loop ke andr nhi jayege 
if(true){

}

const isUserLoggedIn=true
if(isUserLoggedIn){
  console.log("welcome");
}

// <,<>,<=,>=,==,!=,=== ye sb check kr skte hai if me

if(2==='2'){
  console.log('executed');
}

const tempreture=41  //=== for stict checking
if(tempreture===41){
 console.log("less than 50");
}
else{
    console.log("greater than 50");  
}


const score=200
if(score>100){
    const power='fly'
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`);  //give erroe because scope ke bahr a gya h power to if ki
//{ } me hi thi { } khtm to scope khtm