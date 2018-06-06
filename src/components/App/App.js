import React from 'react';

import './App.css';

import Hello from '../../components/Hello/Hello.js';
import AppButton from '../../components/AppButton/AppButton.js';
import List from '../../components/List/List.js';
import Login from '../../pages/login/login';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {numbers:[1, 2, 3, 4, 5, 6]};
        this.test = this.test.bind(this);
    }


    test() {
        this.setState({numbers: [...this.state.numbers, (this.state.numbers.length + 1)]});
    }

    render(){
        return (
            <div>
                <Login/>
                {/*<Hello/>*/}
                {/*<Hello noTick/>*/}
                {/*<Hello/>*/}
                {/*<AppButton event={this.test}/>*/}
                {/*<Login isLoggedIn></Login>*/}
                {/*<List numbers={this.state.numbers}></List>*/}
            </div>
        );
    }

}

export default App;
