import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Menu } from "semantic-ui-react";

class EditSurveys extends Component {
    state = {
        activeWeek: '',
    };

    componentDidMount() {
        //add dispatch to get text message info from db
    }


    //handles updating state for selected Week
    handleWeek = (e, { name }) => {
        if (name === "SignUp") {
            this.setState({
                activeWeek: name,
                week: 1
            });
        } else if (name === "Post") {
            this.setState({
                activeWeek: name,
                week: 2
            });
        } else if (name === "ThreeMonth") {
            this.setState({
                activeWeek: name,
                week: 3
            });
        }
    };

    render() {
        return (
            <div className="editParentDiv">
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <h3>
                    Select a survey
                </h3>
                <div className="weekMenu">
                    <Menu fluid widths={3} tabular>
                        <Menu.Item
                            name="SignUp"
                            active={this.state.activeWeek === "SignUp"}
                            onClick={this.handleWeek}
                        >
                            Sign Up Survey
                        </Menu.Item>
                        <Menu.Item
                            name="Post"
                            active={this.state.activeWeek === "Post"}
                            onClick={this.handleWeek}
                        >
                            Post Survey
                        </Menu.Item>
                        <Menu.Item
                            name="ThreeMonth"
                            active={this.state.activeWeek === "ThreeMonth"}
                            onClick={this.handleWeek}
                        >
                            Three Month Survey
                        </Menu.Item>
                    </Menu>
                </div>
                <br />
                <br />

                {/* content that is displayed renders conditionally based on 
        local state. The local state must contain a value for 
        role, age, and week; then the reducer is mapped to displaye
        the selected content.  */}
                <div>
                    Change to edit box for message info
                </div>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapStateToProps)(EditSurveys));
