import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signUp.css';

//component
import Header from './signUp_header';

//semantic-ui
import { Input, Button, Form } from "semantic-ui-react";


class signUp_1 extends Component {
  state = {
    newUser: {
      role: 1,
    }
  }

  timeout = 0;

  handleChange = (propertyName) => (event) => {
    if (propertyName === "username") {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => { console.log('username:', this.state.newUser.username) }, 800)
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, [propertyName]: event.target.value }
      })
    } else {
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, [propertyName]: event.target.value }
      })
    }
  }

  handleClick = () => {
    let survey = this.state.newUser;
    if (
      !survey.first_name ||
      !survey.last_name ||
      !survey.username ||
      !survey.email ||
      !survey.password ||
      !survey.phone_number
    ) {
      alert('Please complete required fields')
    } else {
      this.props.dispatch({ type: 'SET_SIGNUP_ANSWERS', payload: this.state.newUser });
      this.setState({
        newUser: {
          role: 1,
        }
      })
      this.props.history.push('/signup2');
    }

  }

  render() {
    return (
      <>
        <Header width={"20%"} />
        <br />

        <center><h2>Personal Information</h2></center><br />
        <div className="signUp1Div">
          <form id="signUp1" style={{ backgroundColor: "white" }}><br />
            <Input
              onChange={this.handleChange("first_name")}
              placeholder="First Name - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("last_name")}
              placeholder="Last Name - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("username")}
              placeholder="Username - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("email")}
              placeholder="Email - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("password")}
              type="password"
              placeholder="Password - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("phone_number")}
              placeholder="Phone Number - Required"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("street_address")}
              placeholder="Street Address"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("city")}
              placeholder="City"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("state")}
              placeholder="State"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("zip")}
              placeholder="Zip"
              value={this.state.value}
            />
            <br />
          </form><br />
        </div><br />
        <pre>
          {JSON.stringify(this.state.newUser, null, 2)}
        </pre>
        <div className="bottomDiv">
          <Button onClick={this.handleClick} className="next-button">
            Next
          </Button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_1);
