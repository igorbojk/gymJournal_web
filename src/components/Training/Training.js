import React from 'react';
import './training.css';
import {connect} from 'react-redux';
import firebase from "../../firebase";
import CircularProgress from '@material-ui/core/CircularProgress';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Moment from 'react-moment';
import 'moment/locale/ru';
class Training extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            training: null
        };
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        firebase.database().ref(`/calendar/${this.props.match.params.id}`).once('value').then(
            training => {
                this.setState({
                    training: training.val()
                });
            }
        );

    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            this.state.training ?
                <div className={'center'}>
                    <div className="header-info">
                        <IconButton aria-label="Delete" className="back-btn" onClick={this.goBack}>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="headline">
                            {this.state.training.title}
                        </Typography>
                    </div>
                    <Typography variant="subheading" className="info-text">
                        Начало в:  <Moment format="DD MMMM YYYY, HH:mm">{this.state.training.startAt}</Moment>
                    </Typography>
                    <Typography variant="subheading" className="info-text">
                        Окончание в:  <Moment format="DD MMMM YYYY, HH:mm">{this.state.training.stopAt}</Moment>
                    </Typography>
                    <Typography variant="subheading" className="info-text">
                        Собственный вес: {this.state.training.weight} кг
                    </Typography>

                    {this.state.training.exercises.map(n => {
                        return (
                            <Paper key={n.id}>
                                <Typography color="textSecondary" className={'tableTitle'}>
                                    {n.title}
                                </Typography>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Подход</TableCell>
                                                <TableCell numeric>Повторения</TableCell>
                                                <TableCell numeric>Вес</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {n.repetitions.map((elem, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            №{index + 1}
                                                        </TableCell>
                                                        <TableCell numeric>{elem.repetition}</TableCell>
                                                        <TableCell numeric>{elem.weight}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                            </Paper>
                        )
                    })}
                </div> :
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
