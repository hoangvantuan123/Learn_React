 - <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  - <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

## VD

const root = document.getElementById('root')
const h1React = React.createElement(
    'h1', {
        className: 'heading'
    },
    ' Hello Guys'
)

//React-DOM -> render Ul
ReactDOM.render(h1React, root);