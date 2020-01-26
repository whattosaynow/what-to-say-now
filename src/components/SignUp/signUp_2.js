import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './signUp_header';
import './signUp.css';
//semantic-ui
import { Button } from "semantic-ui-react";

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
        <Header width={'40%'} /><br />
        <center>
          <h2>Personal Information (cont.)</h2>
        </center>
        <br />
        <div className="signup-card"><br />
          <span className="survey-questions">1. Choose to receive the Challenges via email, text, or both:</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="radio-button"
              checked={this.state.choose_receive === 'email'}
              name='receive'
              value='email'
              id='ques1answer1'
            >
            </input><label className="survey-answers" for="ques1answer1">Email</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="radio-button"
              checked={this.state.choose_receive === 'text'}
              name='receive'
              value='text'
              id='ques1answer2'
            >
            </input><label className="survey-answers" for="ques1answer2">Text</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('choose_receive')}
              type='radio'
              className="radio-button"
              checked={this.state.choose_receive === 'both'}
              name='receive'
              value='both'
              id='ques1answer3'
            >
            </input><label className="survey-answers" for="ques1answer3">Both</label><br />

          </div>
          <label className="question-label">You will receive links to Challenges on Sundays at 6:00pm CST</label><br />

          <span className="survey-questions">2. Your gender:</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="radio-button"
              checked={this.state.your_gender === 'female'}
              name='gender'
              value='female'
              id='ques2answer1'
            >
            </input><label className="survey-answers" for="ques2answer1">Female</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="radio-button"
              checked={this.state.your_gender === 'male'}
              name='gender'
              value='male'
              id='ques2answer2'
            >
            </input><label className="survey-answers" for="ques2answer2">Male</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_gender')}
              type='radio'
              className="radio-button"
              checked={this.state.your_gender === 'non-binary'}
              name='gender'
              value='non-binary'
              id='ques2answer3'
            >
            </input><label className="survey-answers" for="ques2answer3">Non-binary</label><br /><br />
          </div>

          <span className="survey-questions">3. Your age:</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="radio-button"
              checked={this.state.your_age === '21-35 years old'}
              name='age'
              value='21-35 years old'
              id='ques3answer1'
            >
            </input><label className="survey-answers" for="ques3answer1">21-35 years old</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="radio-button"
              checked={this.state.your_age === '36-51 years old'}
              name='age'
              value='36-51 years old'
              id='ques3anser2'
            >
            </input><label className="survey-answers" for="ques3anser2">36-51 years old</label><br />
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('your_age')}
              type='radio'
              className="radio-button"
              checked={this.state.your_age === '52+ years old'}
              name='age'
              value='52+ years old'
              id='ques3answer3'
            >
            </input><label className="survey-answers" for="ques3answer3">52+ years old</label><br />
          </div>

          <br />
        </div>
        <br />
        <div className='signup-prev-next-div'>
          <Button onClick={this.handleClickBack}>Back</Button><Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_2);

