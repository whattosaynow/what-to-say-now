import React, { Component } from "react";
import { connect } from 'react-redux';
import './UserPreferences.css';
//semantic-ui
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
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
    MySwal.fire({
      title: 'Updated',
      text: `Your email is now: ${this.state.email} and you are receiving the content via ${this.state.choose_receive}`,
      type: 'Success',
      confirmButtonText: 'Ok'
    })
  }

  handleBack = () => {
    this.props.history.push('/home');
  }

  handleDelete = () => {
    //sweetalert to confirm user wants to delete account
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
    //enables user to change email address or cancel change email address
    this.setState({
      ...this.state,
      enabled: !this.state.enabled,
      email: this.props.reduxState.user.email,
    })
  }
  
  render() {
    return (
      <div className='userPreferencesMainDiv'><br />
        <div className="signup-questions"><br />
          <h1>Update Preferences</h1>
          {this.state.enabled ? (
            <div className="buttonDiv">
              <Button onClick={this.handleEnable} color="red">
                Cancel
              </Button>
              <Input
                onChange={this.handleChangeFor("email")}
                label="Email"
                placeholder={this.state.email}
                value={this.state.email}
              />
            </div>
          ) : (
            <div className="buttonDiv">
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
          <h2>Update how you want to receive the Challenges:</h2>
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            className="question"
            type="radio"
            name="receive"
            value="email"
            className="update-radio"

          />
          Email
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="text"
            className="update-radio"

          />
          Text
          <br />
          <Input
            onChange={this.handleChangeFor("choose_receive")}
            type="radio"
            name="receive"
            value="both"
            className="update-radio"

          />
          Both
          <br />
          <br />
          <br />
          <Button onClick={this.handleBack}>Back</Button>
          <Button onClick={this.handleSubmit}>Save Changes</Button>
          <br />
          <br />
          <Button onClick={this.handleDelete} color='red'>Delete My Account</Button>
        <br /><br /></div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(UserPreferences);