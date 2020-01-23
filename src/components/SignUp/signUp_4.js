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
        <center><h2>Personal Information Continued</h2></center><br />
        <div className="signup-questions"><br />
          <span className="survey-questions">7. Age(s) you coach and want to focus on with during the Challenge:</span><br />
          <label>choose one*</label><br />
          <Input
            onChange={this.handleChange('focus_ages')}
            type="radio"
            className="semantic-radio"
            checked={this.state.focus_ages === '1'}
            name="q1"
            value="1" />Elementary school youth (6-10 years old) <br />

          <Input
            onChange={this.handleChange('focus_ages')}
            type="radio"
            className="semantic-radio"
            checked={this.state.focus_ages === '2'}
            name="q1"
            value="2" />Middle school youth (10-13 years old)<br />

          <Input
            onChange={this.handleChange('focus_ages')}
            type="radio"
            className="semantic-radio"
            checked={this.state.focus_ages === '3'}
            name="q1"
            value="3" />High school youth (14-18 years old)<br />
          <i><label>*We realize some of you may coachmultiple age groups or may not be a coach, however, the Coaches Challenge is setup to focus on one age group at a time so please choose one age group.
            If you’dlike to focus on different age group in the future, please take the Challengeagain..</label></i><br />
          <br />

          <span className="survey-questions">8. Your answer to thisquestion informs WithAll for future programming. Select all that apply:</span> <br />
          <Input
            onChange={this.handleCheckBox('parent_or_guardian')}
            type="checkbox"
            checked={!!this.state.parent_or_guardian}
            className="semantic-radio"
            name="q2"
            value={true} />I’m a parent or guardian of a child between 0 and 18 years old<br />

          <Input
            onChange={this.handleCheckBox('healthcare_professional')}
            type="checkbox"
            checked={!!this.state.healthcare_professional}
            className="semantic-radio"
            name="q2"
            value={true} />I’m health care professional<br />

          <Input
            onChange={this.handleCheckBox('teacher')}
            type="checkbox"
            checked={!!this.state.teacher}
            className="semantic-radio"
            name="q2"
            value={true} />I’m a teacher in early education, elementary school, middle school, or high school<br />

          <Input
            onChange={this.handleCheckBox('none_above')}
            type="checkbox"
            checked={!!this.state.none_above}
            className="semantic-radio"
            name="q2"
            value={true} />None of the above<br />

          <br />

          <span className="survey-questions">9. What youth sports organizations are you or your team affiliated with?</span> <br />
          <label>If none, reply with “none.”</label><br />
          <Input
            name="sports_org"
            className="semantic-radio"
            onChange={this.handleChange('sports_org')}
            placeholder="Sports Organization..."
            value={this.state.sports_org || ''}
          /><br />
          <br />
        </div>
        <br />
        <div className="bottomDiv">
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
