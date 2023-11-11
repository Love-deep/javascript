//for of

['','',''] //array ke andr string
[{},{}]   //array ke andr objects

const arr=[1,2,3,4,5]    //num is iterator 
for (const num of arr) {
    console.log(num);
}

const greetings='hello world'
for (const iterator of greetings) {
    //console.log(`each char is ${iterator}`);
}


//MAPS

const map= new Map
map.set("In","India")
map.set("PK","Pakistan")
map.set("NP","Nepal")
map.set("CH","Chandiagrh")
//console.log(map);

for (const key of map) {
    console.log(key); //print in array 
    
}
for (const [key,value] of map) {
    console.log(key,':-',value); 
    
}   //object me same treeke se loop nhi lagte



