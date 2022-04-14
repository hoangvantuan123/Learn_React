/* DOM */

const h1DOM = document.createElement('h1')

h1DOM.title = 'Hello'
h1DOM.className = 'heading'
h1DOM.innerText = 'Hello guys'
Object.assign(h1DOM.style, {
    color: 'blue',
    fontSize: '30px',
})

document.body.appendChild(h1DOM);


/* React */
const h1React = React.createElement(
    'h1', {
        className: 'heading'
    },
    ' Hello Guys'
)
console.log(h1React);

/* DOM */
const ulDOM = document.createElement('ul')
const liDOM1 = document.createElement('li')
const liDOM2 = document.createElement('li')

liDOM1.innerText = 'Javascript'
liDOM2.innerText= 'React'

ulDOM.appendChild(liDOM1)
ulDOM.appendChild(liDOM2)

document.body.appendChild(ulDOM);



/* React */

const ulPost = React.createElement(
    'ul',
    null,
    React.createElement('li' , null, 'Javascript'),
    React.createElement('li' , null, 'ReactJS'),

)

const divPost = React.createElement('div',
    {
        className: 'Post-item' ,
    },
    React.createElement('h2', {
        className: 'classh2',
           title:'Learn React'

    } ,'Reacts JS'),
    React.createElement('p', {
        className: 'classp',
           title:'Learn React to basic '

    } ,'Học ReactJS từ cơ bản đến nâng cao')

)