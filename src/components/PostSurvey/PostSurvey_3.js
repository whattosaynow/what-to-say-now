import React, { Component } from 'react';
import { connect } from 'react-redux';

import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PostSurvey_Header from './PostSurvey_Header';
const MySwal = withReactContent(Swal)

const topMargin = {
  marginTop: '10px'
}



class PostSurvey_3 extends Component {
  state = {
    favorite_thing: this.props.reduxState.answersReducer.postSurveyReducer.favorite_thing || '',
    call_more_information: this.props.reduxState.answersReducer.postSurveyReducer.call_more_information || ''
  };

  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };

  handleClickNext = () => {
    let survey = this.state
    let missingAnswers = []

    Object.entries(survey).forEach(([key, value], index) => {
      if (value.trim() === '') {
        missingAnswers.push('Please answer question ' + (index + 9) + '. ')
      } else {
        return
      }
    }
    )

    if (missingAnswers.length === 0) {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state });
      MySwal.fire({
        title: "",
        text: `Thank you for your time!`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit"
      }).then(result => {
        if (result.value) {
          this.props.dispatch({
            type: "SUBMIT_POST_ANSWERS",
            payload: this.props.reduxState.answersReducer.postSurveyReducer
          });
          this.props.history.push("/home");
        }
      });
    } else {
      alert(missingAnswers.join(' \n'))
    }
  }; // end handleClickNext

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
    this.props.history.push("/postsurvey2");
  };

  render() {
    return (
      <>
        <PostSurvey_Header width={'100%'} /><br />
        <div className="signup-card"><br />
          <span className="survey-questions"> 9. What was your favorite thing about the Challenge?</span>
          <Input
            onChange={this.handleChangeFor("favorite_thing")}
            style={topMargin}
            placeholder="My favorite part..."
            className="radio-button mobile-input"
            value={this.state.favorite_thing || ''}
          />
          <span className="survey-questions">
            10. Can we call you for more information about your experience?
          </span>
          <label className="question-label">choose one</label>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("call_more_information")}
              checked={this.state.call_more_information === 'Yes'}
              name="q10"
              type="radio"
              value="Yes"
              className="radio-button"
              id="ques10answer1"
            />
            <label className="survey-answers" for="ques10answer1">Yes</label>
          </div>
          <div class="radio-answer-pair">
            <input
              onChange={this.handleChangeFor("call_more_information")}
              checked={this.state.call_more_information === 'No'}
              name="q10"
              type="radio"
              value="No"
              className="radio-button"
              id="ques10answer2"
            />
            <label className="survey-answers" for="ques10answer2">No</label>
          </div>
          <br />
        </div>
        <br />
        <div className="signup-prev-next-div">
          <Button onClick={this.handleClickBack}>Previous</Button>
          <Button onClick={this.handleClickNext}>Submit</Button>
        </div>

      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_3);