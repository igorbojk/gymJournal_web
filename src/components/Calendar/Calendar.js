import React from 'react';
import './calendar.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import firebase from '../../firebase.js';
import {connect} from "react-redux";
import Moment from 'react-moment';
import 'moment/locale/ru';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from "react-router-dom";
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendar: [],
        };
        this.goToTraining = this.goToTraining.bind(this);
    }

    componentDidMount() {
        firebase.database().ref('/calendar').once('value').then(
            calendar => {
                const keys = Object.keys(calendar.val());
                const updatedCalendar = Object.values(calendar.val()).map((el, index) => {
                    el.$key = keys[index];
                    return el;
                }).filter(i => i.userId === this.props.store.currentUser.id);
                this.setState({calendar: updatedCalendar});
            }
        );
    }

    goToTraining(training){
        this.props.history.push(`/training/${training.$key}`);
    }

    render() {
        const {classes} = this.props;

        if (this.state.calendar.length) {
            return (
                <div className={classes.root}>
                    <Grid container spacing={24} className={'center'}>
                        {
                            this.state.calendar.map((item) =>
                                <Grid item md={4} sm={6} xs={12} key={item.id}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography className={classes.pos} color="textSecondary">
                                                {item.title}
                                            </Typography>
                                            <Typography component="p">
                                                <Moment format="DD MMMM YYYY">{item.startAt}</Moment>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={(e) => this.goToTraining(item)}>Подробнее</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            )
        }
        return (
            <div className="loader">
                <CircularProgress/>
            </div>
        )


    }

}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(withStyles(styles)(Calendar)));
