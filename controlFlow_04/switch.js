//SWITCH STATEMENT SYNTAX

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
switch(month){
    case 1:
        console.log('january');
        break;                  //shift+alt+down key to copy as below
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('mar');
        break;
    case 4:
        console.log('april');
        break;
        default:
            console.log('default case match');
            break;
}

const month2='mar'
switch(month2){
    case 'jan':
        console.log('january');
        break;                  //shift+alt+down key to copy as below
    case 'feb':
        console.log('feb');
        break;
    case 'mar':
        console.log('mar');
        break;
    case 'april':
        console.log('april');
        break;
        default:
            console.log('default case match');
            break;
}
