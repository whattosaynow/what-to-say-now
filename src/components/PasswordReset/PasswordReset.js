import React, { Component } from "react";
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PasswordReset extends Component {
    state = {
        newPassword: '',
        confirmNewPassword: ''
    };

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }


    render() {
        if (this.props.match.params.token === 'apple') {
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

export default connect(mapStateToProps)(PasswordReset);