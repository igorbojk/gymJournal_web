import React from 'react';
import './home.css';

import Header from '../../components/header/header';

class Home extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <Header/>
                <h3>home page</h3>
            </div>
        )
    }

}

export default Home;