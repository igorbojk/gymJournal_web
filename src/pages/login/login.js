import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import './login.css';


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

class Login extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            showPassword: false,
        };
    }



    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.email} has ${this.state.password}`);
        this.setState({email: '', password: ''});
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={'login-container'}>
                <Card>
                    <CardContent>
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <FormControl fullWidth  className={classNames(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="adornment-email">Емейл</InputLabel>
                                <Input
                                    type={'email'}
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                />
                            </FormControl>
                            <FormControl fullWidth  className={classNames(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
                                <Input
                                    id="adornment-password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <Button variant="contained" color="primary" className={'login-btn'} fullWidth type={'submit'}>
                                Войти
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Login);