import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

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

    requireAuth() {
        return (nextState, replace) => {
            if (!this.props.store.currentUser) {
                console.log('test');
                replace('/login');
            }
        };
    }

    render() {
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={Home} onEnter={this.requireAuth()}/>
            </Switch>
        );
    }

}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
    })
)(withRouter(App));