import React, { Component } from 'react';
import { connect } from 'react-redux';
import './postSurvey.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PostSurvey_1 extends Component {

  state = {
    challenge_completed: this.props.reduxState.answersReducer.postSurveyReducer.challenge_completed || '',
    participating_was_easy: this.props.reduxState.answersReducer.postSurveyReducer.participating_was_easy || '',
    learned_something_new: this.props.reduxState.answersReducer.postSurveyReducer.learned_something_new || '',
    what_learned: this.props.reduxState.answersReducer.postSurveyReducer.what_learned || '',
    would_encourage: this.props.reduxState.answersReducer.postSurveyReducer.would_encourage || ''
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    let survey = this.state
    if (
      survey.challenge_completed.trim() === '' ||
      survey.participating_was_easy.trim() === '' ||
      survey.learned_something_new.trim() === '' ||
      (survey.learned_something_new === 'Agree' && survey.what_learned.trim() === '') ||
      survey.would_encourage.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey2');
    }

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
          <span className="survey-questions">
            1. How much of the Challenge did you complete?
        </span><br />
          <label className="question-label">choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor("challenge_completed")}
            checked={this.state.challenge_completed === 'All'}
            className="semantic-radio"
            name="q1"
            type="radio"
            value="All"
          />
          All
        <br />
          <Input
            onChange={this.handleChangeFor("challenge_completed")}
            checked={this.state.challenge_completed === '3-4 weeks'}
            className="semantic-radio"
            name="q1"
            type="radio"
            value="3-4 weeks"
          />
          3-4 weeks
        <br />
          <Input
            onChange={this.handleChangeFor("challenge_completed")}
            checked={this.state.challenge_completed === '1-2 weeks'}
            className="semantic-radio"
            name="q1"
            type="radio"
            value="1-2 weeks"
          />
          1-2 weeks
        <br /><br />
          <span className="survey-questions">
            2. Participating in the Challenge was easy to do.
        </span><br />
          <label className="question-label">choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor("participating_was_easy")}
            checked={this.state.participating_was_easy === 'Agree'}
            className="semantic-radio"
            name="q2"
            type="radio"
            value="Agree"
          />
          Agree
        <br />
          <Input
            onChange={this.handleChangeFor("participating_was_easy")}
            checked={this.state.participating_was_easy === 'Neutral'}
            className="semantic-radio"
            name="q2"
            type="radio"
            value="Neutral"
          />
          Neutral
        <br />
          <Input
            onChange={this.handleChangeFor("participating_was_easy")}
            checked={this.state.participating_was_easy === 'Disagree'}
            className="semantic-radio"
            name="q2"
            type="radio"
            value="Disagree"
          />
          Disagree
        <br /><br />
          <span className="survey-questions">
            3. I learned something new from participating in the Challenge.
        </span><br />
          <label className="question-label">choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor("learned_something_new")}
            checked={this.state.learned_something_new === 'Agree'}
            className="semantic-radio"
            name="q3"
            type="radio"
            value="Agree"
          />
          Agree
        {this.state.learned_something_new === 'Agree' &&
            <>
              <br />
              <label className="question-label">What did you learn?</label><br />
              <Input
                name="what_learned"
                className="semantic-radio"
                onChange={this.handleChangeFor('what_learned')}
                placeholder="I learned..."
                value={this.state.what_learned || ''}
              />
            </>
          }
          <br />
          <Input
            onChange={this.handleChangeFor("learned_something_new")}
            checked={this.state.learned_something_new === 'Neutral'}
            className="semantic-radio"
            name="q3"
            type="radio"
            value="Neutral"
          />
          Neutral
        <br />
          <Input
            onChange={this.handleChangeFor("learned_something_new")}
            checked={this.state.learned_something_new === 'Disagree'}
            className="semantic-radio"
            name="q3"
            type="radio"
            value="Disagree"
          />
          Disagree
        <br /><br />
          <span className="survey-questions">
            4. I would encourage another coach I know to do the Challenge.
        </span><br />
          <label className="question-label">choose one</label>
          <br />
          <Input
            onChange={this.handleChangeFor("would_encourage")}
            checked={this.state.would_encourage === 'Agree'}
            className="semantic-radio"
            name="q4"
            type="radio"
            value="Agree"
          />
          Agree
        <br />
          <Input
            onChange={this.handleChangeFor("would_encourage")}
            checked={this.state.would_encourage === 'Neutral'}
            className="semantic-radio"
            name="q4"
            type="radio"
            value="Neutral"
          />
          Neutral
        <br />
          <Input
            onChange={this.handleChangeFor("would_encourage")}
            checked={this.state.would_encourage === 'Disagree'}
            className="semantic-radio"
            name="q4"
            type="radio"
            value="Disagree"
          />
          Disagree
        <br /><br />
        </div>
        <div className="bottomDiv">
          <Button onClick={this.handleClick}>Next</Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_1);

