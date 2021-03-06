import React, { Component } from 'react';
import { connect } from 'react-redux';

//css
import './ThreeMonthSurvey.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class ThreeMonthSurvey extends Component {

  state = {
    continued_impact: this.props.reduxState.answersReducer.threeMonthReducer.continued_impact || '',
    how_continued_impact: this.props.reduxState.answersReducer.threeMonthReducer.how_continued_impact || '',
    continued_affected_ability_interact: this.props.reduxState.answersReducer.threeMonthReducer.continued_affected_ability_interact || '',
    anything_else: this.props.reduxState.answersReducer.threeMonthReducer.anything_else || '',
  }

  handleChangeFor = propertyName => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }


  handleClick = () => {
    let survey = this.state
    //everytime next is clicked, it resets missingAnswers to an empty array, then checks each question to see if it has an answer
    //if it is blank, it adds it to the missing array, then at the end we check if the array has a length (aka if any ques aren't answered)
    //if it has no lnegth, it means every question was answered and we can move on, 
    //if it has length, it alerts us to what. 
    let missingAnswers = []

    if (survey.continued_impact.trim() === '') {
      missingAnswers.push('Please answer question 1. ')
    } 

    if (survey.continued_affected_ability_interact.trim() === '') {
      missingAnswers.push('Please answer question 2. ')
    }

    if (survey.anything_else.trim() === '') {
      missingAnswers.push('Please answer question 3. ')
    }

    if (missingAnswers.length > 0) {
      alert(missingAnswers.join(' \n'))
    } else {
      MySwal.fire({
        title: "",
        width: '300px',
        text: `Thank you for your time!`,
        type: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit"
      }).then(result => {
        if (result.value) {
          this.props.dispatch({ type: `SUBMIT_THREE_MONTH_ANSWERS`, payload: this.state })
          this.props.history.push("/home");
        }
      });
    }
  }

  render() {
    return (
      <>
        <center>
          <header className="sign-up-header">
            Thank you for participating in WithAll's "What to Say" Coaches Challenge.<br />
            Please fill out this brief survey about your experience.<br />
            <br />
          </header>
        </center><br />
        <div className="signup-card">
          <p id="three-month-p">
            We hope that you are continuing to implement the things you learned in WithAll’s “What to Say” Coaches Challenge.
            Please fill out this very brief survey. Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge.<br />
            <br />
            If you have any questions, please email us at <a href="mailto:hello@withall.org">hello@withall.org</a>.<br />
            <br />
            <u>Thank you again for your commitment to helping our kids build healthy relationships with food and body!</u>
          </p><br />
        </div>

        <div className="signup-card"><br />
          <span className="survey-questions"> 1. The Challenge has continued to impact my behavior with the athletes I coach.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_impact')}
              checked={this.state.continued_impact === 'Agree'}
              className="radio-button"
              type='radio'
              name='impact'
              id="ques1answer1"
              value='Agree' />
            <label htmlFor="ques1answer1" className="survey-answers">Agree</label>
          </div>
          {this.state.continued_impact === 'Agree' &&
            <>
              <label className="question-label">How has it impacted your behavior?</label>
              <Input
                name="how_continued_impact"
                className="radio-button mobile-input"
                onChange={this.handleChangeFor('how_continued_impact')}
                placeholder=""
                value={this.state.how_continued_impact || ''}
              />
            </>
          }
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_impact')}
              checked={this.state.continued_impact === 'Neutral'}
              className="radio-button"
              type='radio'
              name='impact'
              id="ques1answer2"
              value='Neutral' />
            <label htmlFor="ques1answer2" className="survey-answers">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_impact')}
              checked={this.state.continued_impact === 'Disagree'}
              className="radio-button"
              type='radio'
              name='impact'
              id="ques1answer3"
              value='Disagree' />
            <label htmlFor="ques1answer3" className="survey-answers">Disagree</label>
          </div>
          <br />
          <span className="survey-questions"> 2. The Challenge tools have continued to positively affect my ability to interact with my team about body and food.</span>
          <label className="question-label">choose one</label>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_affected_ability_interact')}
              checked={this.state.continued_affected_ability_interact === 'agree'}
              className="radio-button"
              type='radio'
              name='positive'
              id="ques2answer1"
              value='agree' />
            <label htmlFor="ques2answer1" className="survey-answers">Agree</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_affected_ability_interact')}
              checked={this.state.continued_affected_ability_interact === 'Neutral'}
              className="radio-button"
              type='radio'
              name='positive'
              id="ques2answer2"
              value='Neutral' />
            <label htmlFor="ques2answer2" className="survey-answers">Neutral</label>
          </div>
          <div className="radio-answer-pair">
            <input
              onChange={this.handleChangeFor('continued_affected_ability_interact')}
              checked={this.state.continued_affected_ability_interact === 'Disagree'}
              className="radio-button"
              type='radio'
              name='positive'
              id="ques2answer3"
              value='Disagree' />
            <label htmlFor="ques2answer3" className="survey-answers">Disagree</label>
          </div>
          <br />
          <span className="survey-questions"> 3. Is there anything else you would like to share?</span>
          <Input
            onChange={this.handleChangeFor('anything_else')}
            className="radio-button mobile-input"
            value={this.state.anything_else}
            placeholder="Anything you can share helps!"
          />
          <br />
        </div>
        <br />
        <div className='signup-prev-next-div'>
          <Button onClick={this.handleClick}>Submit</Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(ThreeMonthSurvey);
