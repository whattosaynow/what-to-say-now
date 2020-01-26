import React, { Component } from 'react';
import { connect } from 'react-redux';

import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PostSurvey_2 extends Component {

  state = {
    challenge_felt_relavent: this.props.reduxState.answersReducer.postSurveyReducer.challenge_felt_relavent || '',
    challenge_impacted_behavior: this.props.reduxState.answersReducer.postSurveyReducer.challenge_impacted_behavior || '',
    how_impacted: this.props.reduxState.answersReducer.postSurveyReducer.how_impacted || '',
    understanding_importance_changed: this.props.reduxState.answersReducer.postSurveyReducer.understanding_importance_changed || '',
    affected_ability_interact: this.props.reduxState.answersReducer.postSurveyReducer.affected_ability_interact || '',
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    let survey = this.state;
    if (
      survey.challenge_felt_relavent.trim() === '' ||
      survey.challenge_impacted_behavior.trim() === '' ||
      (survey.challenge_impacted_behavior === 'Agree' && survey.how_impacted.trim() === '') ||
      survey.understanding_importance_changed.trim() === '' ||
      survey.affected_ability_interact.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey3');
    }

  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
    this.props.history.push('/postsurvey1');
  }

  render() {
    return (
      <>
        <center>
          <header className="sign-up-header">
            Thank you for participating in WithAll's "What To Say" Coaches Challenge.<br />
            Please fill out this brief survey about your experience.<br />
            <br />
          </header>
        </center>
        <div className="signup-card"><br />
          <span className="survey-questions">5. The Challenge felt relevant to the age I coach.</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Agree'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Agree"
              id="ques5answer1"
            /> <label className="survey-answers" for="ques5answer1">Agree</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Neutral'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Neutral"
              id="ques5answer2"
            /> <label className="survey-answers" for="ques5answer2">Neutral</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Disagree'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Disagree"
              id="ques5answer3"
            /> <label className="survey-answers" for="ques5answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">6. The Challenge impacted my behavior with the athletes I coach.</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Agree'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Agree"
              id="ques6answer1"
            /> <label className="survey-answers" for="ques6answer1">Agree</label>
          </div>
          {this.state.challenge_impacted_behavior === 'Agree' &&
            <>
              <br />
              <label className="question-label">What did you notice?</label>
              <Input
                name="how_impacted"
                className="radio-button"
                onChange={this.handleChangeFor('how_impacted')}
                placeholder="I saw..."
                value={this.state.how_impacted || ''}
              />
            </>
          }
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Neutral'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Neutral"
              id="ques6answer2"
            /> <label className="survey-answers" for="ques6answer2">Neutral</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Disagree'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Disagree"
              id="ques6answer3"
            /> <label className="survey-answers" for="ques6answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">7. My understanding of the importance of messages kids hear from
            adults about food and body has changed.</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Agree'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Agree"
              id="ques7answer1"
            /> <label className="survey-answers" for="ques7answer1">Agree</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Neutral'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Neutral"
              id="ques7answer2"
            /> <label for="ques7answer2" class="survey-answers">Neutral</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Disagree'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Disagree"
              id="ques7answer3"
            /> <label className="survey-answers" for="ques7answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">8. The Challenge tools have positively affected my ability to interact
            with my team about body and food.</span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Agree'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Agree"
              id="ques8answer1"
            /> <label className="survey-answers" for="ques8answer1">Agree</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Neutral'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Neutral"
              id="ques8answer2"
            /> <label className="survey-answers" for="ques8answer2">Neutral</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Disagree'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Disagree"
              id="ques8answer3"
            /> <label className="survey-answers" for="ques8answer3">Disagree</label>
          </div><br />
        </div>
        <br />
        <div className="signup-prev-next-div">
          <Button onClick={this.handleClickBack}>Previous</Button><Button onClick={this.handleClick}>Next</Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_2);