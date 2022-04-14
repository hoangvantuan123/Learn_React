/*  const root = document.getElementById('root')

const h1 = document.createElement('h1')
const class1 = document.createElement('class1')

h1.innerText = 'Hoang Van Tuan'
h1.id= 'heading'
h1.className = 'text class1'

Object.assign(h1.style, {
    backgroundColor:'#000000',
    height:'100px'

})

root.appendChild(h1);
 */


//DOM
/* const h1DOM = document.createElement('h1');

h1DOM.title ='Hoang Van Tuan'
h1DOM.className = 'class1'
h1DOM.innerText = 'Hoang Van Tuan'

Object.assign(h1DOM.style,{
    backgroundColor:'#000000',
    height:'300px',
})

console.log(h1DOM);

document.body.appendChild(h1DOM);
*/
//////////////////////////////

const classDOM = document.createElement('div');

classDOM.className ='class2';


console.log(classDOM);
document.body.appendChild(classDOM);

const class2 = document.getElementsByClassName('class2');
const h1 = document.createElement('h1')

h1.className='title'
h1.innerText = 'Lorem Ipsum'
console.log(h1);
document.body.appendChild(h1);


