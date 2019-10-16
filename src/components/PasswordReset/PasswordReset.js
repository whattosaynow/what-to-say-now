import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PasswordReset extends Component {
    state = {
        newPassword: '',
        confirmNewPassword: '',
        tokenMatch: false,
    };

    componentDidMount() {
        this.compareTokenURL();
        if (this.props.reduxState.passwordResetReducer === 'ERROR_NOT_EXIST') {
            this.setState({
                ...this.state,
                loading: false,
            })
        } else if (this.props.reduxState.passwordResetReducer === 'TOKEN_EXPIRED') {
            this.setState({
                ...this.state,
                loading: false,
                tokenMatch: 'expired'
            })
        } else if (this.props.reduxState.passwordResetReducer === 'SET_PW_USER') {
            this.setState({
                ...this.state,
                loading: false,
                tokenMatch: true
            })
        }
    }

    compareTokenURL = () => {
        this.props.dispatch({ type: `COMPARE_TOKEN`, payload: this.props.match.params.token })
    }

    // figure out why this.props.dispatch.then is not a function
    //might just need to use redux store

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }


    render() {
        if (this.props.reduxState.passwordResetReducer === 'ERROR_NOT_EXIST') {
            return (
                <>
                    <br />
                    <div>
                        ERROR - Reset token does not exist. Pease make sure you copied the link correctly or try resetting again.
                    </div>
                    <pre>
                        {JSON.stringify(this.props.reduxState.passwordResetReducer, null, 2)}
                    </pre>
                </>
            )
        } else if (this.props.reduxState.passwordResetReducer === 'TOKEN_EXPIRED') {
            return (
                <>
                    <br />
                    <div>
                        ERROR - Token time limit has expired. Please request your password reset again.
                    </div>
                    <pre>
                        {JSON.stringify(this.props.reduxState.passwordResetReducer, null, 2)}
                    </pre>
                </>
            )
        } else if (this.props.reduxState.passwordResetReducer === 'SET_PW_USER') {
            return (
                <div><br />
                    <div className="signup-questions"><br />
                        <center>
                            <h1>Update Preferences</h1>
                            <br />
                            <span>New Password:</span> <br />
                            <Input type="password" onChange={this.handleChangeFor('newPassword')} ></Input><br />
                            <br />
                            <span>Confirm New Password:</span> <br />
                            <Input type="password" onChange={this.handleChangeFor('confirmNewPassword')} ></Input><br />
                            <br />
                            {this.state.newPassword === this.state.confirmNewPassword ?
                                <>
                                    <Button>Submit</Button><br />
                                </>
                                :
                                <>
                                    <span style={{ color: "red" }}>ERROR: Passwords don't match</span>
                                    <br />
                                </>
                            }
                            <br />
                        </center>
                    </div>
                </div>
            );
        } else {
            return (
                <>
                </>
            )
        }
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapStateToProps)(PasswordReset));