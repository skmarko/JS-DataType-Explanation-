// Primitive DataType Js

// String
const place = 'Jajwada'
console.log('Tyep of place' ,place, typeof place);

// Number 
let number = 1000;
console.log( 'Value is' , number , 'Type of this',typeof number);

// boolean

const boolan = true;
console.log('Data Type',typeof boolan)

let varNull = null;
console.log('Data Type' , typeof varNull)

// Reference Data Type

let arry = [45,5,4,45,false, 'string'];
console.log('Data Type is' , (typeof arry));

const  value= {
    name : 'Marko G',
    qualification : 'PG',
    contact :100
}
console.log('Student Information' , value , 'Data Type js' ,typeof value);

function funName() {
    
}
console.log('Data Type ', typeof funName);


const date = new Date();
console.log(typeof date);

let bool = String(true)
console.log(typeof bool);

let arry1 = [45,45,89,46,45];
console.log(arry1, typeof arry1);

let num = String(100000);
console.log(num)

const n1 = parseFloat(45.125542);
console.log(n1.toFixed(3),  ' Data Type',typeof n1)

// Data type Coercion 

const num3 = Number('455');
const num4 = 100;

console.log( ' Result' , num3 + num4);

