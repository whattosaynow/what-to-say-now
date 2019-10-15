import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PasswordReset extends Component {
    state = {
        loading: true,
        newPassword: '',
        confirmNewPassword: '',
        tokenMatch: false,
    };

    async componentDidMount() {
        this.compareTokenURL()
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
        if (this.state.loading) {
            return (
                <>
                    <br />
                    <div>
                        Comparing information, please wait
                    </div>
                    <pre>
                        {JSON.stringify(this.props.reduxState.passwordResetReducer, null, 2)}
                    </pre>
                </>
            )
        } else if (this.props.match.params.token === 'apple') {
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
                    <br />
                    <div>
                        Error - INVALID TOKEN<br />
                        Please request new  token
                    {/* <pre>
                        {JSON.stringify(this.props.match.params.token, null, 2)}
                    </pre> */}
                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapStateToProps)(PasswordReset));