import React from 'react';
import './training.css';
import {connect} from 'react-redux';
import firebase from "../../firebase";
import CircularProgress from '@material-ui/core/CircularProgress';
class Training extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            training: null
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        firebase.database().ref(`/calendar/${this.props.match.params.id}`).once('value').then(
            training => {
                this.setState({
                    training: training.val()
                });
            }
        );
    }


    render() {

        return(
            this.state.training ?
                <h3>{this.state.training.title}</h3> :
                <div className="loader">
                    <CircularProgress/>
                </div>
        )

    }

}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(Training);
