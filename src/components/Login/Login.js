import React from 'react';

function Login(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
        <div>
            {isLoggedIn ? <p>test</p> : <p>everest</p>}
        </div>
    )

}

export default Login;