import React, { Component } from 'react';
import { connect } from 'react-redux';

import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";
import PostSurveyHeader from './PostSurveyHeader';

class PostSurvey_2 extends Component {

  state = {
    challenge_felt_relavent: this.props.reduxState.answersReducer.postSurveyReducer.challenge_felt_relavent || '',
    challenge_impacted_behavior: this.props.reduxState.answersReducer.postSurveyReducer.challenge_impacted_behavior || '',
    understanding_importance_changed: this.props.reduxState.answersReducer.postSurveyReducer.understanding_importance_changed || '',
    affected_ability_interact: this.props.reduxState.answersReducer.postSurveyReducer.affected_ability_interact || '',
    how_impacted: this.props.reduxState.answersReducer.postSurveyReducer.how_impacted || '',
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    let survey = this.state
    let missingAnswers = []

    Object.entries(survey).forEach(([key, value], index) => {
      if (key !== 'how_impacted' && value === '') {
        missingAnswers.push('Please answer question ' + (index + 5) + '. ')
      } else {
        return
      }
    }
    )

    if (missingAnswers.length === 0) {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey3');
    } else {
      alert(missingAnswers.join(' \n'))
    }
  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
    this.props.history.push('/postsurvey1');
  }

  render() {
    return (
      <>
        <PostSurveyHeader width={'66.6%'} /><br />
        <div className="signup-card"><br />
          <span className="survey-questions">5. The Challenge felt relevant to the age I coach.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Agree'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Agree"
              id="ques5answer1"
            /> <label className="survey-answers" htmlFor="ques5answer1">Agree</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Neutral'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Neutral"
              id="ques5answer2"
            /> <label className="survey-answers" htmlFor="ques5answer2">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_felt_relavent')}
              checked={this.state.challenge_felt_relavent === 'Disagree'}
              className="radio-button"
              name='q5'
              type="radio"
              value="Disagree"
              id="ques5answer3"
            /> <label className="survey-answers" htmlFor="ques5answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">6. The Challenge impacted my behavior with the athletes I coach.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Agree'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Agree"
              id="ques6answer1"
            /> <label className="survey-answers" htmlFor="ques6answer1">Agree</label>
          </div>
          {this.state.challenge_impacted_behavior === 'Agree' &&
            <>
              <label className="question-label">Please share at least one example of what changed with your coaching behavior as a result of participating. No need to write complete sentences.</label>
              <Input
                name="how_impacted"
                className="radio-button mobile-input"
                onChange={this.handleChangeFor('how_impacted')}
                placeholder="I saw..."
                value={this.state.how_impacted || ''}
              />
            </>
          }
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Neutral'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Neutral"
              id="ques6answer2"
            /> <label className="survey-answers" htmlFor="ques6answer2">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('challenge_impacted_behavior')}
              checked={this.state.challenge_impacted_behavior === 'Disagree'}
              className="radio-button"
              name='q6'
              type="radio"
              value="Disagree"
              id="ques6answer3"
            /> <label className="survey-answers" htmlFor="ques6answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">7. My understanding of the importance of messages kids hear from
            adults about food and body has changed.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Agree'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Agree"
              id="ques7answer1"
            /> <label className="survey-answers" htmlFor="ques7answer1">Agree</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Neutral'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Neutral"
              id="ques7answer2"
            /> <label htmlFor="ques7answer2" className="survey-answers">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('understanding_importance_changed')}
              checked={this.state.understanding_importance_changed === 'Disagree'}
              className="radio-button"
              name='q7'
              type="radio"
              value="Disagree"
              id="ques7answer3"
            /> <label className="survey-answers" htmlFor="ques7answer3">Disagree</label>
          </div><br />
          <span className="survey-questions">8. The Challenge tools have positively affected my ability to interact
            with my team about body and food.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Agree'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Agree"
              id="ques8answer1"
            /> <label className="survey-answers" htmlFor="ques8answer1">Agree</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Neutral'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Neutral"
              id="ques8answer2"
            /> <label className="survey-answers" htmlFor="ques8answer2">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('affected_ability_interact')}
              checked={this.state.affected_ability_interact === 'Disagree'}
              className="radio-button"
              name='q8'
              type="radio"
              value="Disagree"
              id="ques8answer3"
            /> <label className="survey-answers" htmlFor="ques8answer3">Disagree</label>
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