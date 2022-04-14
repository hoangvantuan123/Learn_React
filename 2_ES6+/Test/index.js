/* arrow function */

/* const loggoer = (log) => {
    console.log(log);
}

loggoer("HI Im am Hoang Van TUan");


const sum = ( a, b) => a+ b;

console.log(sum(2,4));
 */



/* Enhanced object */

/* var filename = "name";
var price = "price";

const coure ={
    [filename]:  " Hoang Van Tuan",
    [price]: 3000000
};
console.log(coure); */


/* Dstructuring ,Rest */


/* var array = ['javasript' , 'PHP' , "Ruby"];

var [a, , c] = array;

console.log(a , c)
 */

// Dùng toán tử tử rest
/* var array = ['javasript' , 'PHP' , "Ruby"];

var [a, b,...rest] = array;

console.log(rest); */

//VD Lay ra

/* var coure = {
    name :'javascript',
    price : 10000.,
    image : 'http://image',

}; */

/* var{name, price, image} = coure;
console.log(name, price , image); */

// Cach xoa

/* var {name,...newObject} = coure;

console.log(newObject); */

// Cách doi ten  them name:getname


// Toan tử spread

//Nối mảng

/* var array1 =['Javascript' , 'ruby', 'PHP'];

var array2 =['ReactJs' , 'Java'] ;

var array3 =[...array2 ,...array1];
console.log(array3); */


/* Modules*/

import logger from './logger.js';

logger('TestModule' );



