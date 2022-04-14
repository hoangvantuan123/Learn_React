/* const divItem = React.createElement('div',
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

//Get root element
const root = document.getElementById('root')

ReactDOM.render(divItem, root);
//React-DOM -> render Ul
 */


const root = document.getElementById('root')
const h1React = React.createElement(
    'h1', {
        className: 'heading'
    },
    ' Hello Guys'
)

ReactDOM.render(h1React, root);