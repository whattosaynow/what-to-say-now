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
        <div className="questions-wrapper"><br />
          <span className="survey-questions">5. The Challenge felt relevant to the age I coach.</span>
          <label>choose one</label><br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            checked={this.state.challenge_felt_relavent === 'Agree'}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            checked={this.state.challenge_felt_relavent === 'Neutral'}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            checked={this.state.challenge_felt_relavent === 'Disagree'}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Disagree"
          /> Disagree
          <br /><br />
          <span className="survey-questions">6. The Challenge impacted my behavior with the athletes I coach.</span>
          <label>choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            checked={this.state.challenge_impacted_behavior === 'Agree'}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Agree"
          /> Agree
          {this.state.challenge_impacted_behavior === 'Agree' &&
            <>
              <br />
              <label>What did you notice?</label><br />
              <Input
                name="how_impacted"
                className="semantic-radio"
                onChange={this.handleChangeFor('how_impacted')}
                placeholder="I saw..."
                value={this.state.how_impacted || ''}
              />
            </>
          }
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            checked={this.state.challenge_impacted_behavior === 'Neutral'}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            checked={this.state.challenge_impacted_behavior === 'Disagree'}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Disagree"
          /> Disagree
          <br /><br />
          <span className="survey-questions">7. My understanding of the importance of messages kids hear from
            adults about food and body has changed.</span>
            <label>choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            checked={this.state.understanding_importance_changed === 'Agree'}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            checked={this.state.understanding_importance_changed === 'Neutral'}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            checked={this.state.understanding_importance_changed === 'Disagree'}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Disagree"
          /> Disagree
          <br /><br />
          <span className="survey-questions">8. The Challenge tools have positively affected my ability to interact
            with my team about body and food.</span>
            <label>choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            checked={this.state.affected_ability_interact === 'Agree'}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            checked={this.state.affected_ability_interact === 'Neutral'}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            checked={this.state.affected_ability_interact === 'Disagree'}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Disagree"
          /> Disagree
          <br /><br />
        </div>
        <br />
        <div className="bottomDiv">
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