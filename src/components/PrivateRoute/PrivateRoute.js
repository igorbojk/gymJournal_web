import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux";


// function PrivateRoute ({component: Component, ...rest}) {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 true ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: props.location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            props.currentUser ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",

                    }}
                />
            )
        }
    />
);

export default withRouter(connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(PrivateRoute));