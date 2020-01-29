import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signUp.css';

//component
import Header from './signUp_header';

//semantic-ui
import { Input, Button } from "semantic-ui-react";


class signUp_1 extends Component {
  state = {
    newUser: {
      role: 1,
      first_name: (this.props.reduxState.answersReducer.signupReducer.first_name) || '',
      last_name: (this.props.reduxState.answersReducer.signupReducer.last_name) || '',
      username: (this.props.reduxState.answersReducer.signupReducer.username) || '',
      email: (this.props.reduxState.answersReducer.signupReducer.email) || '',
      password: (this.props.reduxState.answersReducer.signupReducer.password) || '',
      phone_number: (this.props.reduxState.answersReducer.signupReducer.phone_number) || '',
      street_address: (this.props.reduxState.answersReducer.signupReducer.street_address) || '',
      city: (this.props.reduxState.answersReducer.signupReducer.city) || '',
      state: (this.props.reduxState.answersReducer.signupReducer.state) || '',
      zip: (this.props.reduxState.answersReducer.signupReducer.zip) || '',
    }
  }

  timeout = 0;

  handleChange = (event) => {
    if (event.target.name === "username") {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.props.dispatch({ type: "USERNAME_CHECK", payload: this.state.newUser.username })
      }, 800
      )
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, [event.target.name]: event.target.value }
      })
    } else {
      this.setState({
        ...this.state,
        newUser: { ...this.state.newUser, [event.target.name]: event.target.value }
      })
    }
  }

  handleClick = () => {
    let survey = this.state.newUser;

    //everytime next is clicked, it resets missingAnswers to an empty array, then checks each question to see if it has an answer
    //if it is blank, it adds it to the missing array, then at the end we check if the array has a length (aka if any ques aren't answered)
    //if it has no lnegth, it means every question was answered and we can move on, 
    //if it has length, it alerts us to what. 
    let missingAnswers = []

    if (survey.first_name.trim() === '') {
      missingAnswers.push('Please fill in your first name. ')
    }

    if (survey.last_name.trim() === '') {
      missingAnswers.push('Please fill in your last name. ')
    }

    if (survey.username.trim() === '') {
      missingAnswers.push('Please fill in a username. ')
    }

    if (survey.email.trim() === '') {
      missingAnswers.push('Please fill in your email. ')
    }

    if (survey.password.trim() === '') {
      missingAnswers.push('Please fill in your password. ')
    }

    if (survey.phone_number.trim() === '') {
      missingAnswers.push('Please fill in your phone number. ')
    }

    if (survey.zip.trim() === '') {
      missingAnswers.push('Please fill in your zip code. ')
    }

    if (missingAnswers.length > 0) {
      alert(missingAnswers.join(' \n'))
    } else {
      this.props.dispatch({ type: 'SET_SIGNUP_ANSWERS', payload: this.state.newUser });
      this.props.history.push('/signup2');
    }

  }

  render() {
    return (
      <>
        <Header width={"20%"} />
        <br />
        <center>
          <h2>Personal Information</h2>
        </center>
        <div className="signUp1Div">
          <form id="signUp1" style={{ backgroundColor: "white" }}><br />
            <Input
              name="first_name"
              onChange={this.handleChange}
              placeholder="First Name - Required"
              value={this.state.newUser.first_name || ''}
            />
            <br />
            <Input
              name="last_name"
              onChange={this.handleChange}
              placeholder="Last Name - Required"
              value={this.state.newUser.last_name || ''}
            />
            <br />
            <Input
              name="username"
              onChange={this.handleChange}
              placeholder="Username - Required"
              value={this.state.newUser.username || ''}
            /> {this.props.reduxState.answersReducer.usernameCheckReducer ? <></> : <span style={{ color: 'red' }}><br />ERROR: Username Taken </span>}
            <br />
            <Input
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Email - Required"
              value={this.state.newUser.email || ''}
            />
            <br />
            <Input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password - Required"
              value={this.state.newUser.password || ''}
            />
            <br />
            <Input
              name="phone_number"
              type="tel"
              onChange={this.handleChange}
              placeholder="Phone Number - Required"
              value={this.state.newUser.phone_number || ''}
            />
            <br />
            <Input
              name="street_address"
              onChange={this.handleChange}
              placeholder="Street Address"
              value={this.state.newUser.street_address || ''}
            />
            <br />
            <Input
              name="city"
              onChange={this.handleChange}
              placeholder="City"
              value={this.state.newUser.city || ''}
            />
            <br />
            <Input
              name="state"
              onChange={this.handleChange}
              placeholder="State"
              value={this.state.newUser.state || ''}
            />
            <br />
            <Input
              name="zip"
              onChange={this.handleChange}
              type="number"
              placeholder="Zip - Required"
              value={this.state.newUser.zip || ''}
            />
            <br />
          </form><br />
        </div><br />
        <div className="signup-prev-next-div">
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
