import React from 'react';
import './training.css';
import {connect} from 'react-redux';
import firebase from "../../firebase";
import CircularProgress from '@material-ui/core/CircularProgress';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


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

        return (
            this.state.training ?
                <div className={'center'}>
                    {this.state.training.exercises.map(n => {
                        return (
                            <div key={n.id}>
                                <Typography color="textSecondary" className={'tableTitle'}>
                                    {n.title}
                                </Typography>
                                <Paper>
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
                            </div>

                        )
                    })}
                </div>


                :
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
