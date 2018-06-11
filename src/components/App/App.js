import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import {connect} from 'react-redux';

import Login from '../../pages/login/login';
import Home from '../../pages/home/home';
import PrivateRoute from '../PrivateRoute/PrivateRoute';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: [1, 2, 3, 4, 5, 6]};
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/home" component={Home} />
                </div>
            </Router>
        );
    }

}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(App);

