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

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      newUser: {...this.state.newUser, [propertyName]: event.target.value}
    })
  }

  handleClick = () => {
    let answers = Object.keys(this.state.newUser)
    let answersLength = answers.length
    if (answersLength < 11) {
      alert('Please complete every answer')
    } else {
      this.props.dispatch({type: 'SET_SIGNUP_ANSWERS', payload: this.state.newUser});
      this.setState({
        newUser: {
          role: 1,
        }
      })
      document.getElementById("signUp1").reset();
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
              placeholder="First Name"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("last_name")}
              placeholder="Last Name"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("username")}
              placeholder="Username"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("email")}
              placeholder="Email"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("password")}
              type="password"
              placeholder="Password"
              value={this.state.value}
            />
            <br />
            <Input
              onChange={this.handleChange("phone_number")}
              placeholder="Phone Number"
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
