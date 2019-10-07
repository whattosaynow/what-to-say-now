import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";


class Forgot extends Component {
    state = {
        display: ''
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

    render() {
        return (
            <>
                <br />
                <p>Forgot page</p>
                <br />
                <Button
                    onClick={this.handleClick}
                    value="username"
                >
                    Forgot Username
                </Button><br /><br />
                <Button
                    onClick={this.handleClick}
                    value="password"
                >
                    Forgot Password
                </Button><br /><br />
                <Button
                    onClick={this.handleClick}
                    value="email"
                >
                    Forgot Email
                </Button><br />
                <br />
                {this.state.display === 'username' ?
                    <>
                    Please enter the email associated with your account: <br/> 
                        <Input
                            onChange={this.handleChange("username")}
                            placeholder="Email"
                            value={this.state.value}
                        />&nbsp;
                        <Button>Send Username</Button>
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
                        <Button>Send Password Reset</Button>
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
                        <Button>Send Email</Button>
                    </> :
                    <></>
                }
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(Forgot);
