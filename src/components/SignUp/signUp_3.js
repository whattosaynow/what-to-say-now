import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Button } from "semantic-ui-react";

//styling
import Header from './signUp_header';
import './signUp.css';

class signUp_3 extends Component {

  state = {
    years_coaching: this.props.reduxState.answersReducer.signupReducer.years_coaching || '',
    genders_of_athletes_female: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_female || false,
    genders_of_athletes_male: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_male || false,
    genders_of_athletes_non_binary: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_non_binary || false,
    genders_of_athletes_not_coach: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_not_coach || false,
    number_of_athletes: this.props.reduxState.answersReducer.signupReducer.number_of_athletes || '',
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
    this.props.history.push('/signup2');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.years_coaching.trim() === '' ||
      survey.number_of_athletes.trim() === '' ||
      (
        survey.genders_of_athletes_female === false && survey.genders_of_athletes_male === false && survey.genders_of_athletes_non_binary === false && survey.genders_of_athletes_not_coach === false
      )
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup4');

    }

  }

  render() {
    return (
      <>
        <Header width={'60%'} />
        <br />
        <div className="signup-card"><br />
          <span className="survey-questions">4. Number of years you’ve been coaching:</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('years_coaching')}
              type="radio"
              className="radio-button"
              checked={this.state.years_coaching === 'Less than 5 years'}
              name="q1"
              value="Less than 5 years"
              id="ques4answer1"
            /><label className="survey-answers" for="ques4answer1">Less than 5 years</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('years_coaching')}
              type="radio"
              className="radio-button"
              checked={this.state.years_coaching === '6-10 years'}
              name="q1"
              value="6-10 years"
              id="ques4answer2"
            /><label className="survey-answers" for="ques4answer2">6-10 years</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('years_coaching')}
              type="radio"
              className="radio-button"
              checked={this.state.years_coaching === '11-20 years'}
              name="q1"
              value="11-20 years"
              id="ques4answer3"
            /><label className="survey-answers" for="ques4answer3">11-20 years</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('years_coaching')}
              type="radio"
              className="radio-button"
              checked={this.state.years_coaching === 'More than 21 years'}
              name="q1"
              value="More than 21 years"
              id="ques4answer4"
            /><label className="survey-answers" for="ques4answer4">More than 21 years</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('years_coaching')}
              type="radio"
              className="radio-button"
              checked={this.state.years_coaching === `I'm not a coach`}
              name="q1"
              value="I'm not a coach"
              id="ques4answer5"
            /><label className="survey-answers" for="ques4answer5">I'm not a coach</label>
          </div>

          <br />
          <span className="survey-questions">5. Genders of the athletes you coach:</span>
          <label className="question-label">select all that apply</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('genders_of_athletes_female')}
              type="checkbox"
              checked={!!this.state.genders_of_athletes_female}
              className="radio-button"
              name="q2"
              value={true}
              id="ques5answer1"
            /><label className="survey-answers" for="ques5answer1">Female</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('genders_of_athletes_male')}
              type="checkbox"
              checked={!!this.state.genders_of_athletes_male}
              className="radio-button"
              name="q2"
              value={true}
              id="ques5answer2"
            /><label className="survey-answers" for="ques5answer2">Male</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('genders_of_athletes_non_binary')}
              type="checkbox"
              checked={!!this.state.genders_of_athletes_non_binary}
              className="radio-button"
              name="q2"
              value={true}
              id="ques5answer3"
            /><label className="survey-answers" for="ques5answer3">Non-binary</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleCheckBox('genders_of_athletes_not_coach')}
              type="checkbox"
              checked={!!this.state.genders_of_athletes_not_coach}
              className="radio-button"
              name="q2"
              value={true}
              id="ques5answer4"
            /><label className="survey-answers" for="ques5answer4">I'm not a coach</label>
          </div>

          <br />
          <span className="survey-questions">6. Number of athletes on the team you coach?</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === '5-10'}
              name="q3"
              value="5-10"
              id="ques6answer1"
            /><label className="survey-answers" for="ques6answer1">5-10</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === '11-15'}
              name="q3"
              value="11-15"
              id="ques6answer2"
            /><label className="survey-answers" for="ques6answer2">11-15</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === '16-20'}
              name="q3"
              value="16-20"
              id="ques6answer3"
            /><label className="survey-answers" for="ques6answer3">16-20</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === '21-25'}
              name="q3"
              value="21-25"
              id="ques6answer4"
            /><label className="survey-answers" for="ques6answer4">21-25</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === 'More than 25'}
              name="q3"
              value="More than 25"
              id="ques6answer5"
            /><label className="survey-answers" for="ques6answer5">More than 25</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChange('number_of_athletes')}
              type="radio"
              className="radio-button"
              checked={this.state.number_of_athletes === `I'm not a coach`}
              name="q3"
              value="I'm not a coach"
              id="ques6answer6"
            /><label className="survey-answers" for="ques6answer6">I'm not a coach</label>
          </div>

          <br />
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

export default connect(mapStateToProps)(signUp_3);
