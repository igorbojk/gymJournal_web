import React from 'react';
import Lodable from 'react-loadable'
import './home.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../../components/header/header';

import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

const Training = Lodable({
    loader: () => import('../../components/Training/Training'),
    loading: () => (<div className="loader">
                        <CircularProgress/>
                    </div>)
});
const Calendar = Lodable({
    loader: () => import('../../components/Calendar/Calendar'),
    loading: () => (<div className="loader">
        <CircularProgress/>
    </div>)
});
const UserProfile = Lodable({
    loader: () => import('../../components/UserProfile/UserProfile'),
    loading: () => (<div className="loader">
        <CircularProgress/>
    </div>)
});

class Home extends React.Component {

    componentDidMount() {
        if (this.props.location.pathname === '/') {
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