
/* const ul = <ul>
    <li>javascript</li>
    <li>React</li>
</ul> */

const root = document.getElementById('root');
/* ReactDOM.render(ul,root); */


const courses = [
    {
        id:1,
        name: 'HMTL, CSS',
    },
    {   id:2,
        name: 'ReponsiveCSS'
    },
    {   id:3,
        name: 'ReactJS'
    }
]


const ul = (<ul>
    {courses.map((course,index) =>

        <li key={index}>React {index+1}</li>
    )}
</ul>
)
ReactDOM.render(ul, root);