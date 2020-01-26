import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import Header from './signUp_header';
import './signUp.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_4 extends Component {

  state = {
    focus_ages: this.props.reduxState.answersReducer.signupReducer.focus_ages || '',
    parent_or_guardian: this.props.reduxState.answersReducer.signupReducer.parent_or_guardian || false,
    healthcare_professional: this.props.reduxState.answersReducer.signupReducer.healthcare_professional || false,
    teacher: this.props.reduxState.answersReducer.signupReducer.teacher || false,
    none_above: this.props.reduxState.answersReducer.signupReducer.none_above || false,
    sports_org: this.props.reduxState.answersReducer.signupReducer.sports_org || '',
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleCheckBox = (propertyName) => (event) => {
    if (this.state[propertyName]) {
      this.setState({
        ...this.state,
        [propertyName]: false
      })
    } else {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value
      })
    }
  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    this.props.history.push('/signup3');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.focus_ages.trim() === '' ||
      (survey.parent_or_guardian === false && survey.healthcare_professional === false && survey.teacher === false && survey.none_above === false) ||
      survey.sports_org.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup5');
    }

  }

  render() {
    return (
      <>
        <Header width={'80%'} /><br />
        <center>
          <h2>Personal Information Continued</h2>
        </center>
        <br />
        <div className="signup-card"><br />
          <span className="survey-questions">7. Age(s) you coach and want to focus on with during the Challenge:</span>
          <label className="question-label">choose one*</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('focus_ages')}
              type="radio"
              className="radio-button"
              checked={this.state.focus_ages === '1'}
              name="q1"
              value="1"
              id="ques7answer1"
            /><label className="survey-answers" for="ques7answer1">Elementary school youth (6-10 years old)</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('focus_ages')}
              type="radio"
              className="radio-button"
              checked={this.state.focus_ages === '2'}
              name="q1"
              value="2"
              id="ques7answer2"
            /><label className="survey-answers" for="ques7answer2">Middle school youth (10-13 years old)</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('focus_ages')}
              type="radio"
              className="radio-button"
              checked={this.state.focus_ages === '3'}
              name="q1"
              value="3"
              id="ques7answer3"
            /><label className="survey-answers" for="ques7answer3">High school youth (13-18 years old)</label>
          </div>
          <i><label className="question-label exemption">*We realize some of you may coach multiple age groups or may not be a coach, however,
            the Coaches Challenge is setup to focus on one age group at a time, so please choose one age group.
            If you’d like to focus on a different age group in the future, please take the Challengeagain.</label></i><br />
          <br />

          <span className="survey-questions">8. Your answer to this question informs WithAll for future programming. Select all that apply:</span> <br />
          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('parent_or_guardian')}
              type="checkbox"
              checked={!!this.state.parent_or_guardian}
              className="radio-button"
              name="q2"
              value={true}
              id="ques8answer1"
            /><label className="survey-answers" for="ques8answer1">I’m a parent or guardian of a child between 0 and 18 years old</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('healthcare_professional')}
              type="checkbox"
              checked={!!this.state.healthcare_professional}
              className="radio-button"
              name="q2"
              value={true}
              id="ques8answer2"
            /><label className="survey-answers" for="ques8answer2">I’m health care professional</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('teacher')}
              type="checkbox"
              checked={!!this.state.teacher}
              className="radio-button"
              name="q2"
              value={true}
              id="ques8answer3"
            /><label className="survey-answers" for="ques8answer3">I’m a teacher in early education, elementary school, middle school, or high school</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('none_above')}
              type="checkbox"
              checked={!!this.state.none_above}
              className="radio-button"
              name="q2"
              value={true}
              id="ques8answer4"
            /><label className="survey-answers" for="ques8answer4">None of the above</label>
          </div>

          <br />

          <span className="survey-questions">9. What youth sports organizations are you or your team affiliated with?</span> <br />
          <label className="question-label">If none, reply with “none.”</label>
          <Input
            name="sports_org"
            className="radio-button"
            onChange={this.handleChange('sports_org')}
            placeholder="Sports Organization..."
            value={this.state.sports_org || ''}
          /><br />
          <br />
        </div>
        <br />
        <div className="signup-prev-next-div">
          <Button onClick={this.handleClickBack}>Back</Button>
          <Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_4);
