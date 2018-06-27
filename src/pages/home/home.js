import React from 'react';
import './home.css';

import Header from '../../components/header/header';

import Calendar from '../../components/Calendar/Calendar';
import Training from '../../components/Training/Training';
import UserProfile from '../../components/UserProfile/UserProfile';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

class Home extends React.Component {

    componentDidMount() {
        if(this.props.location.pathname === '/'){
            this.props.history.push('/calendar');
        }
    }


    render() {
        return (
            <div className={'mainView'}>
                <Header/>
                <PrivateRoute path="/training/:id" component={Training}/>
                <PrivateRoute exact path="/calendar" component={Calendar}/>
                <PrivateRoute exact path="/user-profile" component={UserProfile}/>
            </div>
        )
    }

}

export default Home;