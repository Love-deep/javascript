const coding=['py','ruby','cpp','js']
//foreach me callback(no any name of function) function declare karna padta hai
coding.forEach( function (val){
    //console.log(val);
})

///another way
coding.forEach((item)=>{
  //  console.log(item);
})

function print(item) {
    console.log(item);
    
}
//coding.forEach(print)


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


//array ke andr object
const myCoding = [
    {
        languageName:'javascript',
        languageFileName:"js"
    },
    {
        languageName:'java',
        languageFileName:"java"
    },
    {
        languageName:'python',
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})