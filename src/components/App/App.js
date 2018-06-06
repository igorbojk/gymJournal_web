import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Login from '../../pages/login/login';
import Home from '../../pages/home/home';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: [1, 2, 3, 4, 5, 6]};
        this.test = this.test.bind(this);
    }


    test() {
        this.setState({numbers: [...this.state.numbers, (this.state.numbers.length + 1)]});
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={Home}/>
            </Switch>
        );
    }

}

export default App;
