import React from 'react';

import './App.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


class Test extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

function App() {
    return (
        <div>
            <Welcome name="everest"/>
            <Test name="everest"/>
            <Welcome name="s"/>
            <Test name="s"/>
        </div>
    );
}

export default App;
