import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux";


function PrivateRoute ({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props =>
                rest.store.currentUser ? (

                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default withRouter(connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(PrivateRoute));