//singelton
//object.create

//object literals
const mysym=Symbol('key1')  //symbol declaration
const user={
    name:'lovedeep',
    "full name":'lovedeep singh',
    [mysym]:"key1",      //symbol act as key in object
    age:20,
    location:"Hoshiarpur",
    email:"lovedeep70295@gamil.com",
    isLoggedIn:false,
    lastLoggin:['moday','sunday']
}

//console.log(user.email)    //accesing object both method are true but prefer below 
//console.log(user['email'])
//console.log(user['full name'])
//console.log(typeof user[mysym])  //symbol printing

//changing values in object
user.email='lovedeep@gmail.com'
//console.log(user['email'])

//if we want that value cant be changes mean locked we use freeze
//Object.freeze(user)
//user.name='lovie'
//console.log(user)

//declarinf function
user.greeting=function(){
    console.log("hello js user")
}
user.greeting2=function(){
    console.log(`hello js user,${this["full name"]}`)
}

console.log(user.greeting())
console.log(user.greeting2())

