const nuM = 'Lala';
 const num5 = 'SportsBuzz';

console.log(nuM +' '+ num5);

let html;

html = "Code With  Marko G"  +' '+ "Javascript";

html= html.concat( ' ' ,'Began' , 'Coddibg');
console.log(html);
console.log(html[6]);
console.log(html.lastIndexOf('<'));
console.log(html.includes('Marko'));
console.log(html.substring(1, 6))
console.log(html.slice(2, 8))
console.log(html.split(' '))
console.log(html.replace('Marko' , 'Sharma'))

let nnName = 'Marko G Foolwa;a'
let flower = 'Rose';
let flower1 = " lotus";
let bundle = `Name of ${nnName}
<h2> This is  an Name of Flower </h2> 
<p> Do you Like it ${flower1} and Owner ${nnName}`;
document.body.innerHTML = bundle;



