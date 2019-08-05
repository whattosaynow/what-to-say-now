import React, { Component } from "react";
import { connect } from 'react-redux';

//semantic-ui
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { thisExpression } from "@babel/types";
//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class UserPreferences extends Component {
  state = {
    choose_receive: this.props.reduxState.user.S1_choose_receive,
    email: this.props.reduxState.user.email,
    enabled: false
  };
  
  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };

  handleSubmit = () => {
      //dispatch to saga
    this.props.dispatch({
      type: "UPDATE_USER_PREFERENCES",
      payload: this.state
    });
    this.props.history.push("/home");
  }

  handleDelete = () => {
    // alert('delete button clicked');
    // this.props.dispatch({
    //   type: "DELETE_ACCOUNT",
    //   payload: this.props.reduxState.user.id
    // });
    MySwal.fire({
      title: "",
      text: `Are you sure you want to delete your account?`,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit"
    }).then((result) => {
      if(result.value) {
        this.props.dispatch({
          type: "DELETE_ACCOUNT",
          payload: this.props.reduxState.user
        });
        this.props.history.push("/home");
      };
  })};

  handleEnable = () => {
    this.setState({
      ...this.state,
      enabled: !this.state.enabled
    })
  }
  render() {
    return (
      <div>
        <center>
          <h1>Update Preferences</h1>
          {this.state.enabled ? (
            <Input
              onChange={this.handleChangeFor("email")}
              label="Email"
              placeholder={this.state.email}
              value={this.state.email}
            />
          ) : (
            <div>
              <Button onClick={this.handleEnable}>
                Click to change email
              </Button>
              <Input
                disabled
                onChange={this.handleChangeFor("email")}
                label="Email"
                placeholder={this.state.email}
                value={this.state.email}
              />
            </div>
          )}
          <br />
          <br />
          <label>Update how you want to receive the Challenges:</label>
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            className="question"
            type="radio"
            name="receive"
            value="email"
          />
          Email
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="text"
          />
          Text
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="both"
          />
          Both
          <br />
          <br />
          <br />
          <Button onClick={this.handleSubmit}>Save Changes</Button>
          <br />
          <br />
          <Button onClick={this.handleDelete}>Delete My Account</Button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(UserPreferences);