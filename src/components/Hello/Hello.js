import React, {Component} from 'react';

import './Hello.css';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        if(this.props.noTick) {
            return;
        }
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <h1>Hello, {this.state.date.toLocaleTimeString()}</h1>
    }
}

export default Hello;