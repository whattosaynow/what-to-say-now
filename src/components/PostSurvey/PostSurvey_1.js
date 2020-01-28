import React, { Component } from 'react';
import { connect } from 'react-redux';
import './postSurvey.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";
import PostSurvey_Header from './PostSurvey_Header';

class PostSurvey_1 extends Component {

  state = {
    challenge_completed: this.props.reduxState.answersReducer.postSurveyReducer.challenge_completed || '',
    participating_was_easy: this.props.reduxState.answersReducer.postSurveyReducer.participating_was_easy || '',
    learned_something_new: this.props.reduxState.answersReducer.postSurveyReducer.learned_something_new || '',
    would_encourage: this.props.reduxState.answersReducer.postSurveyReducer.would_encourage || '',
    what_learned: this.props.reduxState.answersReducer.postSurveyReducer.what_learned || ''
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
      if (key !== 'what_learned' && value === '') {
        missingAnswers.push('Please answer question ' + (index + 1) + '. ')
      } else {
        return
      }
    }
    )

    if (missingAnswers.length === 0) {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey2');
    } else {
      alert(missingAnswers.join(' \n'))
    }
  }

  render() {
    return (
      <>
        <PostSurvey_Header width={'33.33%'} />
        <br />
        <div className="signup-card"><br />
          <span className="survey-questions">1. How much of the Challenge did you complete? </span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("challenge_completed")}
              checked={this.state.challenge_completed === 'All'}
              className="radio-button"
              name="q1"
              type="radio"
              value="All"
              id="ques1answer1"
            />
            <label className="survey-answers" for="ques1answer1">All</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("challenge_completed")}
              checked={this.state.challenge_completed === '3-4 weeks'}
              className="radio-button"
              name="q1"
              type="radio"
              value="3-4 weeks"
              id="ques1answer2"
            />
            <label className="survey-answers" for="ques1answer2">3-4 weeks</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("challenge_completed")}
              checked={this.state.challenge_completed === '1-2 weeks'}
              className="radio-button"
              name="q1"
              type="radio"
              value="1-2 weeks"
              id="ques1answer3"
            />
            <label className="survey-answers" for="ques1answer3">1-2 weeks</label>
          </div>
          <br />
          <span className="survey-questions">
            2. Participating in the Challenge was easy to do.
        </span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("participating_was_easy")}
              checked={this.state.participating_was_easy === 'Agree'}
              className="radio-button"
              name="q2"
              type="radio"
              value="Agree"
              id="ques2answer1"
            />
            <label className="survey-answers" for="ques2answer1">Agree</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("participating_was_easy")}
              checked={this.state.participating_was_easy === 'Neutral'}
              className="radio-button"
              name="q2"
              type="radio"
              value="Neutral"
              id="ques2answer2"
            />
            <label className="survey-answers" for="ques2answer2">Neutral</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("participating_was_easy")}
              checked={this.state.participating_was_easy === 'Disagree'}
              className="radio-button"
              name="q2"
              type="radio"
              value="Disagree"
              id="ques2answer3"
            />
            <label className="survey-answers" for="ques2answer3">Disagree</label>
          </div>
          <br />
          <span className="survey-questions">
            3. I learned something new from participating in the Challenge.
        </span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("learned_something_new")}
              checked={this.state.learned_something_new === 'Agree'}
              className="radio-button"
              name="q3"
              type="radio"
              value="Agree"
              id="ques3answer1"
            />
            <label className="survey-answers" for="ques3answer1">Agree</label>
          </div>
          {this.state.learned_something_new === 'Agree' &&
            <>
              <label className="question-label">What did you learn?</label>
              <Input
                name="what_learned"
                className="radio-button mobile-input"
                onChange={this.handleChangeFor('what_learned')}
                placeholder="I learned..."
                value={this.state.what_learned || ''}
              />
            </>
          }
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("learned_something_new")}
              checked={this.state.learned_something_new === 'Neutral'}
              className="radio-button"
              name="q3"
              type="radio"
              value="Neutral"
              id="ques3answer2"
            />
            <label className="survey-answers" for="ques3answer2">Neutral</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("learned_something_new")}
              checked={this.state.learned_something_new === 'Disagree'}
              className="radio-button"
              name="q3"
              type="radio"
              value="Disagree"
              id="ques3answer3"
            />
            <label className="survey-answers" for="ques3answer3">Disagree</label>
          </div>
          <br />
          <span className="survey-questions">
            4. I would encourage another coach I know to do the Challenge.
        </span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("would_encourage")}
              checked={this.state.would_encourage === 'Agree'}
              className="radio-button"
              name="q4"
              type="radio"
              value="Agree"
              id="ques4answer1"
            />
            <label className="survey-answers" for="ques4answer1">Agree</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("would_encourage")}
              checked={this.state.would_encourage === 'Neutral'}
              className="radio-button"
              name="q4"
              type="radio"
              value="Neutral"
              id="ques4answer2"
            />
            <label className="survey-answers" for="ques4answer2">Neutral</label>
          </div>

          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("would_encourage")}
              checked={this.state.would_encourage === 'Disagree'}
              className="radio-button"
              name="q4"
              type="radio"
              value="Disagree"
              id="ques4answer3"
            />
            <label className="survey-answers" for="ques4answer3">Disagree</label>
          </div>
          <br />
        </div>
        <br />
        <div className="signup-prev-next-div">
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

