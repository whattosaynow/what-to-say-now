import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";


class Forgot extends Component {
    state = {
        display: 'select',
        username: '',
        password: '',
        email: '',
    }

    handleClick = (event) => {
        this.setState({
            ...this.state,
            display: event.target.value
        })
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        }
        )
    }

    handleForgot = (event) => {
        if (event.target.value === 'username' && this.state.username === '') {
            alert('Please input your email')
        } else if (event.target.value === 'username' && this.state.username !== '') {
            this.props.dispatch({ type: `FORGOT_USERNAME`, payload: this.state.username })
            alert(`We have sent an email to ${this.state.username}. Please check that email for your username`)
        }

        if (event.target.value === 'password' && this.state.password === '') {
            alert('Please input your email')
        } else if (event.target.value === 'password' && this.state.password !== '') {
            this.props.dispatch({ type: `FORGOT_PASSWORD`, payload: this.state.password })
            alert(`We have sent an email to ${this.state.password}. Please check that email for instructions to reset your password`)
        }

        if (event.target.value === 'email' && this.state.email === '') {
            alert('Please input your username')
        } else if (event.target.value === 'email' && this.state.email !== '') {
            this.props.dispatch({ type: `FORGOT_EMAIL`, payload: this.state.email })
            alert(`We have sent an email to the account registered under the ${this.state.email} username`)
        }

    }

    render() {
        return (
            <>
                <br />
                <div className="signup-card">
                    <br />
                    <center>
                        <Button
                            onClick={this.handleClick}
                            value="username"
                        >
                            Forgot Username
                        </Button>
                        <br /><br />
                        <Button
                            onClick={this.handleClick}
                            value="password"
                        >
                            Forgot Password
                        </Button>
                        <br /><br />
                        <Button
                            onClick={this.handleClick}
                            value="email"
                        >
                            Forgot Email
                        </Button>
                        <br />
                        <br />
                        {this.state.display === 'select' ?
                            <>
                                <br />
                                <p>Please select an option above</p>
                                <br />
                            </>
                            :
                            <></>
                        }
                        {this.state.display === 'username' ?
                            <>
                                Please enter the email associated with your account: <br />
                                <Input
                                    onChange={this.handleChange("username")}
                                    placeholder="Email"
                                    value={this.state.value}
                                />&nbsp;
                                <Button
                                    onClick={this.handleForgot}
                                    value="username"
                                >
                                    Send Username
                                </Button>
                                <br /><br />
                            </> :
                            <></>
                        }
                        {this.state.display === 'password' ?
                            <>
                                Please enter the email associated with your account: <br />
                                <Input
                                    onChange={this.handleChange("password")}
                                    placeholder="Email"
                                    value={this.state.value}
                                />&nbsp;
                                <Button
                                    onClick={this.handleForgot}
                                    value="password"
                                >
                                    Send Password Reset
                                </Button>
                                <br /><br />
                            </> :
                            <></>
                        }
                        {this.state.display === 'email' ?
                            <>
                                Please enter the username associated with your account: <br />
                                <Input
                                    onChange={this.handleChange("email")}
                                    placeholder="Username"
                                    value={this.state.value}
                                />&nbsp;
                                <Button
                                    onClick={this.handleForgot}
                                    value="email"
                                >
                                    Email Me
                                </Button>
                                <br /><br />
                            </> :
                            <></>
                        }
                        <br />
                    </center>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(Forgot);
