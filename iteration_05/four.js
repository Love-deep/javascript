const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObject) {     // forin loop for objects 
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//forin loop for array

const arr=['py','cpp','js','java']
for (const key in arr) {
    //console.log(key);   //it will print 0,1,2,3 i.e. keys of array which is always number
    //console.log(arr[key]);
}


//forin loop is not itertable for map
const map= new Map
map.set("In","India")
map.set("PK","Pakistan")
map.set("NP","Nepal")
map.set("CH","Chandiagrh")

for (const key in map) {
   console.log(key);
}