import React, {Component} from 'react'

// import React from 'react'
// const Component = React.Component

class App extends Component {
    render() {
        return (
            //JSX就是在react的javascript写html代码
            <ul className="my-list">
                <li>{false ? 'com' : '地址'}</li>
                <li>I love react</li>
            </ul>
        );
        // var child1 = React.createElement('li', null, 'com')
        // var child2 = React.createElement('li', null, 'I love react')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}

export default App