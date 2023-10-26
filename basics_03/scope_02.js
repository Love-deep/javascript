var c=300 //print hi ni hoga ye var c if wala print ho jayega pehle jo declare kiya th thats why dont use var
let a=70
if(true){
    let a=20
    const b=30
    var c=90
    console.log('INNER', a);
}


//console.log(a);  //not printed because inside if staement return error
//console.log(b);  //not printed because inside if staement return error
//console.log(c);  //90 printed
 
console.log(a); // a ki value ab 70 i hogi kyungi global h if me bhle jo marzi ho wo andr hi use hoga bahr nhi
/*
function one(){
    const user='lovedeep'

function two() {
    const website='youtube'
    console.log(user);
}
//line by line execution is done if below cant run then program terminate dont go for two()
//console.log(website);  //cant access 
two()
}
one()  //this will not execute
*/
if (true) {
    const username='lovedeep'
    if (username=='lovedeep') {
        const website=' youtube'
        console.log(username + website);
        
    }
    //console.log(website);
}
//console.log(username);

/****************************interesting***************/