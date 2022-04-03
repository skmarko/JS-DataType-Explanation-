let v = 10;
//  If esle condition Example
if(v==100){
    console.log('Value is equal');
}
else{
    console.log('Value is not equal');
}

// if esle if Exmaple 

let v1 = 200;
if(v1===52){
    console.log('Value is equal')
}
 if(v1=== 200){
    console.log('Value is equal')
}
else{
console.log('Value is Not matching');
}
// Ternarey Operator Example
 let skMarks= 1000;
console.log(skMarks==999? 'Marks is valid' : 'Marks is not Invalid' );

// && Operators example

let votAge = 18;

if(votAge == 18 && votAge>17){
    console.log(' You are eligible for voting')
}
else{
    console.log('you are under 18 year old')
}

// Or Operator example

const carNumber= 8989;
let nnn= 100
if (carNumber!==8989 || nnn===100);
{
    console.log('value is ture');
}

let problem = 555;
const solution = 420;
switch (problem) {
    case 50: console.log('Problem is  50')  
        break;
        
    case 55: console.log('Problem is  55')
        
    break;

    case 56: console.log('Problem is  56')
        
        break;
    default:
        console.log("Inavlid Problem")
        break;
}