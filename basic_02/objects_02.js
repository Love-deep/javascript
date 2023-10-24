//const tinderuser=new Object()    //sengelton oject

const tinderuser={}
tinderuser.id='123rto'
tinderuser.name='harman'
tinderuser.isLoggedin=true

//console.log(tinderuser);

const regularUser={
    email:'love@gmail.com',
    fullname:{
    userfullname:{
        
        firstname:'karan',
        lastname:'deep'

    }
}
}
//console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={obj1,obj2}
//console.log(obj3); // dont use this this will give object in object


const obj4=Object.assign({},obj1,obj2)
//console.log(obj4);

//another way to combine as many object is spread methid o.e. ...
//console.log(obj5)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));