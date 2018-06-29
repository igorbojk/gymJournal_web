import React from 'react';
import './UserProfile.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import firebase from "../../firebase";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import classNames from 'classnames';
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.store.user.currentUser.firstName,
            secondName: this.props.store.user.currentUser.secondName
        };
        this.goBack = this.goBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        const updatedUser = {
            firstName: this.state.firstName,
            secondName: this.state.secondName
        };
        firebase.database().ref(`/users/${this.props.store.user.currentUser.$key}`).update(updatedUser).then(
            result => {
                this.props.onUpdateCurrentUser(updatedUser);
            },
            error => {
                console.warn(error)
            }
        );
    }

    render() {
        const {classes} = this.props;
        const currentUser = this.props.store.user.currentUser;
        const avatarStyles = {
            backgroundImage: currentUser && currentUser.photoUrl ? `url(${currentUser.photoUrl})` : null
        };

        return (
            <div className={'center'}>
                <div className="header-info">
                    <IconButton aria-label="Delete" className="back-btn" onClick={this.goBack}>
                        <ArrowBack/>
                    </IconButton>
                    <Typography variant="headline">
                        Профиль
                    </Typography>
                </div>
                <Paper>
                    <Grid container spacing={24} className={'center'}>
                        <Grid item md={6} sm={6} xs={12} className='text-right'>
                            <div className="user-avatar" style={avatarStyles}></div>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                                <FormControl fullWidth className={classNames(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="adornment-firstName">Имя</InputLabel>
                                    <Input
                                        type={'text'}
                                        value={this.state.firstName}
                                        onChange={this.handleChange('firstName')}
                                    />
                                </FormControl>
                                <FormControl fullWidth className={classNames(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="adornment-secondName">Фамилия</InputLabel>
                                    <Input
                                        type={'text'}
                                        value={this.state.secondName}
                                        onChange={this.handleChange('secondName')}
                                    />
                                </FormControl>
                                <Button variant="contained" color="primary" fullWidth
                                        type={'submit'}>
                                    Сохранить
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}


export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onUpdateCurrentUser: (payload) => {
            dispatch({type: 'UPDATE_CURRENT_USER', payload})
        }
    })
)(withStyles(styles)(UserProfile));