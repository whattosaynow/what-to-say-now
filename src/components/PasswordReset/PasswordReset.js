import React, { Component } from "react";
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PasswordReset extends Component {
    state = {
        newPassword: '',
        confirmNewPassword: ''
    };



    render() {
        return (
            <div><br />
                <div className="signup-questions"><br />
                    <center>
                        <h1>Update Preferences</h1>
                        <br />
                        <span>New Password:</span> <br />
                        <Input></Input><br />
                        <br />
                        <span>Confirm New Password:</span> <br />
                        <Input></Input><br />
                        <br />
                        {this.state.newPassword === this.state.confirmNewPassword ? 
                        <>
                        <Button>Submit</Button><br />
                        </>
                        :
                        <>
                        <span style={{color: "red"}}>ERROR: Passwords don't match</span>
                        <br />
                        </>
                        }
                        <br />
                    </center>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapStateToProps)(PasswordReset);