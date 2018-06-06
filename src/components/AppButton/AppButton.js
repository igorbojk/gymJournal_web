import React, {Component} from 'react';

import './AppButton.css';

class Button extends Component {

    constructor(props){
        super(props);
        this.activateLasers = this.activateLasers.bind(this);
    }

    activateLasers(){
        this.props.event();
    }

    render(){
        return <button onClick={this.activateLasers}> Activate Lasers</button>
    }

}

export default Button;