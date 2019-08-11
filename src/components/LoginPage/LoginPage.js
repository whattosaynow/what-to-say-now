import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button } from "semantic-ui-react";

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="loginWrapper">
        {/* displays error if there is a login error */}
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}

        {/* begin login form */}
        <form className="loginForm" onSubmit={this.login}>
          <div className="innerLogin">
            <h1>Login</h1>
            <div className="innerLoginInput1">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </div>
            <div className="innerLoginInput2">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </div>
            <div>
              <Button
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              >
                Log In
              </Button>
            </div>
          </div>
        </form>
        <center>
          <Button
            type="button"
            className="link-button"
            onClick={() => {
              this.props.history.push("/signup1");
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
