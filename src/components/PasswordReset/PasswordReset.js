import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//semantic-ui
import { Input, Button } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


class PasswordReset extends Component {
    state = {
        username: '',
        newPassword: '',
        confirmNewPassword: '',
    };

    componentDidMount() {
        this.compareTokenURL();
    }

    compareTokenURL = () => {
        this.props.dispatch({ type: `COMPARE_TOKEN`, payload: this.props.match.params.token })
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }

    handleSubmit = () => {
        this.props.dispatch({ type: `UPDATE_PASSWORD`, payload: { password: this.state.newPassword, resetToken: this.props.match.params.token } })
        MySwal.fire({
            title: 'Thank You',
            text: `Your password has been updated. Please click continue to log in
            `,
            type: 'info',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Submit'
        }).then((result) => {
            if (result.value) {
                this.props.history.push('/home');
            }
        }
        )
    }

    render() {
        if (this.props.reduxState.passwordResetReducer === 'ERROR_NOT_EXIST') {
            return (
                <>
                    <br />
                    <center>
                        <div>
                            ERROR - Reset token does not exist. <br />
                            Pease make sure you copied the link correctly or try resetting again.
                        </div>
                    </center>
                    {/* <pre>
                        {JSON.stringify(this.props.reduxState.passwordResetReducer, null, 2)}
                    </pre> */}
                </>
            )
        } else if (this.props.reduxState.passwordResetReducer === 'TOKEN_EXPIRED') {
            return (
                <>
                    <br />
                    <center>
                        <div>
                            ERROR - Token time limit has expired. Please request your password reset again.
                        </div>
                    </center>
                    {/* <pre>
                        {JSON.stringify(this.props.reduxState.passwordResetReducer, null, 2)}
                    </pre> */}
                </>
            )
        } else if (this.props.reduxState.passwordResetReducer === 'SET_PW_USER') {
            return (
                <div><br />
                    <div className="signup-card"><br />
                        <center>
                            <h1>Update Password</h1>
                            <br />
                            {/* <span>Current Username:</span> <br />
                            <Input type="text" onChange={this.handleChangeFor('username')} ></Input><br />
                            <br /> */}
                            <span>New Password:</span> <br />
                            <Input type="password" onChange={this.handleChangeFor('newPassword')} ></Input><br />
                            <br />
                            <span>Confirm New Password:</span> <br />
                            <Input type="password" onChange={this.handleChangeFor('confirmNewPassword')} ></Input><br />
                            <br />
                            {this.state.newPassword === this.state.confirmNewPassword ?
                                <>
                                    <Button onClick={this.handleSubmit}>Submit</Button><br />
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