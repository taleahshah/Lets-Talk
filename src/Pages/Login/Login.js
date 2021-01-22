import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Services/firebase';
import LoginString from '../Login/LoginString';

import './Login.css';
import { Card } from 'react-bootstrap';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLablel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
/*import LockOutlinedIcon from '@material-ui/core/icons/LockOutlinedIcon';*/
import Typography from '@material-ui/core/Typography';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: null,
            email: "",
            password: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    componentDidMount() {
        if (localStorage.getItem(LoginString.ID)) {
            this.setState({ isLoading: false }, () => {
                this.setState({ isLoading: false })
                this.props.showToast(1, 'Login Succesfully')
                this.props.history.push('./chat')
            })
        } else {
            this.setState({ isLoading: false })
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(async result => {
                let user = result.user;
                if (user) {
                    await firebase.firestore().collection('users')
                        .where('id', "==", user.uid)
                        .get()
                        .then(function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                const currentdata = doc.data();
                                localStorage.setItem(LoginString.FirebaseDocumentId, doc.id);
                                localStorage.setItem(LoginString.ID, currentdata.id);
                                localStorage.setItem(LoginString.Name, currentdata.name);
                                localStorage.setItem(LoginString.Email, currentdata.email);
                                localStorage.setItem(LoginString.Password, currentdata.password);
                                localStorage.setItem(LoginString.PhotoURL, currentdata.URL);
                                localStorage.setItem(LoginString.Description, currentdata.description);

                            })
                        })
                }
                this.props.history.push('/chat')
            }).catch(function (error) {
                this.setState({
                    error: "Error while signing in please try again"
                })
            })
    }

    render() {

        const paper = {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px'
        }

        const rightcomponent = {
            boxShadow: "0 80px 80px #808888",
            backgroundColor: 'smokegrey',
        }

        const root = {
            height: '100vh',
            background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",

            marginBottom: '50px'
        }

        const Signinsee = {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'White',
            marginBottom: '20px',
            backgroundColor: '#lebea5',
            width: '100%',
            boxShadow: " 0 5px 5px #808888",
            height: "10rem",
            paddingTop: "48px",
            opacity: "0.5",
            borderBottom: '5px solid green'
        }

        const form = {
            width: '100%',
            marginTop: '50px'
        }

        const avatar = {
            backgroundColor: 'green',
        }

        return (
            <Grid container component="main" style={root}>
                <CssBaseline />
                <Grid item xs={1} sm={4} md={7} className="image">
                    <div className="image1"></div>
                </Grid>
                <Grid item xs={12} sm={8} md={5} style={rightcomponent} elevation={6} square>
                    <Card style={Signinsee}>
                        <div>
                            <Avatar style={avatar}>

                            </Avatar>
                        </div>
                        <div>
                            <Typography component="h1" variant="h5"
                                Sign in
                                To
                            />
                        </div>
                        <div>
                            <Link to="/">
                                <button class="btn">
                                    <i class="fa fa-home"></i>
                                    LetsTalk
                                </button>
                            </Link>
                        </div>
                    </Card>
                    <div style={paper}>
                        <form style={form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                            />


                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                autoFocus
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                            />

                            <FormControlLablel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />

                            <Typography component="h6" variant="h5">
                                {this.state.error ? (
                                    <p className="text-danger">{this.state.error}</p>
                                ) : null}
                            </Typography>

                            <div className="CenterAliningItems">
                                <button>
                                    <span>Login In</span>
                                </button>
                            </div>

                            <div className="CenterAliningItems">
                                <p>Dont have an account</p>
                                <Link to="/signUp" variant="body2">
                                    SignUp
                                </Link>

                            </div>


                        </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

