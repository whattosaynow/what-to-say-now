import React, { Component } from 'react';
import { connect } from 'react-redux';

import './signUp.css';

import Header from './signUp_header';
import { Input, Button } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class signUp_5 extends Component {
  state = {
    why_are_you_participating: this.props.reduxState.answersReducer.signupReducer.why_are_you_participating || '',
    why_are_you_participating_other: this.props.reduxState.answersReducer.signupReducer.why_are_you_participating_other || ''
  }


  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    this.props.history.push('/signup4');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.why_are_you_participating.trim() === '' 
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      MySwal.fire({
        title: '',
        html: `Thank you! <br />If you do not receive a confirmation email after hitting “submit,” please email us at <a href="mailto:hello@withall.org">hello@withall.org</a>.
        `,
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Submit'
      }).then((result) => {
        if (result.value) {
          this.props.dispatch({ type: 'SUBMIT_SIGNUP_ANSWERS', payload: this.props.reduxState.answersReducer.signupReducer })
          this.props.history.push('/home');
        }
      }
      )

    }

  } // end handleClickNext 

  render() {
    return (
      <>
        <Header width={'100%'} /><br />
        <center><h2>Personal Information Continued</h2></center><br />
        <div className="signup-questions"><br />
          <span className="survey-questions">9. Why are you particpating in the "What to say" Coaches Challenge?</span><br />
          <label>choose one</label><br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" checked={this.state.why_are_you_participating === "I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image."} name="q1" value="I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image." /><span className="radio-answer">I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image</span><br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" checked={this.state.why_are_you_participating === "I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something."} name="q1" value="I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something." /><span className="radio-answer">I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something</span><br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" checked={this.state.why_are_you_participating === "This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate."} name="q1" value="This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate." /><span className="radio-answer">This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate</span><br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" checked={this.state.why_are_you_participating === "Other"} value="Other" name="q1" /><span className="radio-answer">I have other reasons for participating. They are:</span><br />
          {this.state.why_are_you_participating === "Other" &&
            <>
              <textarea className="semantic-radio" onChange={this.handleChange('why_are_you_participating_other')} value={this.state.why_are_you_participating_other} rows="4" cols="50"></textarea><br />
            </>
          }
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

export default connect(mapStateToProps)(signUp_5);
