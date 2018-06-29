import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux";
import firebase from '../../firebase.js';
import './header.css';
import {withRouter} from "react-router-dom";
import Avatar from '../../components/Avatar/Avatar'


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };

        this.goToProfile = this.goToProfile.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    goToProfile(){
        this.props.history.push('/user-profile');
        this.setState({anchorEl: null});
    }

    logOut(){
        firebase.auth().signOut();
        this.props.onRemoveCurrentUser();
        this.props.history.push('/login');
        this.setState({anchorEl: null});
    }

    shouldComponentUpdate(props, state){
        return state
    }

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const currentUser = this.props.store.user.currentUser;
        return (
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Jym Journal
                        </Typography>
                        <div>
                            <div className="user">
                                <span>{currentUser.firstName} {currentUser.secondName}</span>
                                <Avatar user={currentUser} handleClick={this.handleMenu}></Avatar>
                            </div>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.goToProfile}>Профиль</MenuItem>
                                <MenuItem onClick={this.logOut}>Выйти</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRouter(connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onRemoveCurrentUser: (payload) => {
            dispatch({type: 'REMOVE_CURRENT_USER', payload})
        }
    })
)(withStyles(styles)(Header)));