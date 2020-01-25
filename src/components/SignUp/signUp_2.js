import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './signUp_header';
import './signUp.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_2 extends Component {

  state = {
    choose_receive: this.props.reduxState.answersReducer.signupReducer.choose_receive || '',
    your_gender: this.props.reduxState.answersReducer.signupReducer.your_gender || '',
    your_age: this.props.reduxState.answersReducer.signupReducer.your_age || ''
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    this.props.history.push('/signup1');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.choose_receive.trim() === '' ||
      survey.your_gender.trim() === '' ||
      survey.your_age.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup3');

    }

  }

  render() {
    return (
      <>
        <div>
          <Header width={'40%'} /><br />
          <center><h2>
            Personal Information (cont.)
        </h2></center>
          <br />

          <div className="signup-card"><br />
          
            <span className="survey-questions">1. Choose to receive the Challenges via email, text, or both:</span><br />
            <label className="question-label">choose one</label><br />
            <Input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="semantic-radio"
              checked={this.state.choose_receive === 'email'}
              name='receive'
              value='email'
              id='email'
              >
            </Input><label for="email">Email</label><br />

            <Input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="semantic-radio"
              checked={this.state.choose_receive === 'text'}
              name='receive'
              value='text'
              id='text'
              >
            </Input><label for="text">Text</label><br />

            <Input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="semantic-radio"
              checked={this.state.choose_receive === 'both'}
              name='receive'
              value='both'
              id='both'
              >
            </Input><label for="both">Both</label><br />
            <label className="question-label">You will receive links to Challenges on Sundays at 6:00pm CST</label><br /><br />

            <span className="survey-questions">2. Your gender:</span><br />
            <label className="question-label">choose one</label><br />
            <Input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_gender === 'female'}
              name='gender'
              value='female'
              id='female'
              >
            </Input><label for="female">Female</label><br />

            <Input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_gender === 'male'}
              name='gender'
              value='male'
              id='male'
              >
            </Input><label for="male">Male</label><br />

            <Input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_gender === 'non-binary'}
              name='gender'
              value='non-binary'
              id='non-binary'
              >
            </Input><label for="non-binary">Non-binary</label><br /><br />

            <span className="survey-questions">3. Your age:</span><br />
            <label className="question-label">choose one</label><br />
            <Input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_age === '21-35 years old'}
              name='age'
              value='21-35 years old'
              id='21-35 years old'
              >
            </Input><label for="21-35 years old">21-35 years old</label><br />

            <Input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_age === '36-51 years old'}
              name='age'
              value='36-51 years old'
              id='36-51 years old'
              >
            </Input><label for="36-51 years old">36-51 years old</label><br />

            <Input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="semantic-radio"
              checked={this.state.your_age === '52+ years old'}
              name='age'
              value='52+ years old'
              id='52+ years old'
              >
            </Input><label for="52+ years old">52+ years old</label><br />

            <br />
          </div>
          <br />
          <div className='signup-prev-next-div'>
            <Button onClick={this.handleClickBack}>Back</Button><Button onClick={this.handleClickNext}>Next</Button>
          </div>

        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_2);

