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
   
const topMargin = {
  marginTop: '10px'
}

class ThreeMonthSurvey extends Component {

  state = {
    continued_impact: this.props.reduxState.answersReducer.threeMonthReducer.continued_impact || '',
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
    let survey = this.state;
    if (
      survey.continued_impact.trim() === '' ||
      survey.continued_affected_ability_interact.trim() === '' ||
      survey.anything_else.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {

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
            Thank you for participating in WithAll's "What To Say" Coaches Challenge.<br />
            Please fill out this brief survey about your experience.<br />
            <br />
          </header>
        </center>
        <div className="questions-wrapper">
          <p><br />
            We hope that you are continuing to implement the things you learned in WithAll’s “What to Say” Coaches Challenge.
            Please fill out this very brief survey. Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge.<br />
            <br />
            If you have any questions, please email us at <a href="mailto:hello@withall.org">hello@withall.org</a><br />
            <br />
            <u>Thank you again for your commitment to helping our kids build healthy relationships with food and body!</u>
          </p><br />
        </div>
        <div className="questions-wrapper"><br />
          <span className="survey-questions"> 1. The Challenge has continued to impact my behavior with the althletes I coach.</span><br />
          <label>choose one</label><br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            checked={this.state.continued_impact === 'agree'}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='agree' />
          Agree<br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            checked={this.state.continued_impact === 'Neutral'}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Neutral' />
          Neutral<br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            checked={this.state.continued_impact === 'Disagree'}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Disagree' />
          Disagree<br /><br />
          <span className="survey-questions"> 2. The Challenge tools have continued to positivley affect my ability to interact with my team about body and food.</span><br />
          <label>choose one</label><br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            checked={this.state.continued_affected_ability_interact === 'agree'}
            className="semantic-radio"
            type='radio'
            name='positive'
            value='agree' />
          Agree<br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            checked={this.state.continued_affected_ability_interact === 'Neutral'}
            className="semantic-radio"
            type='radio'
            name='positive'
            value='Neutral' />
          Neutral<br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            checked={this.state.continued_affected_ability_interact === 'Disagree'}
            className="semantic-radio"
            type='radio'
            name='positive'
            value='Disagree' />
          Disagree<br />
          <br />
          <span className="survey-questions"> 3. Is there anything else you would like to share?</span>
          <br />
          <textarea
            onChange={this.handleChangeFor('anything_else')}
            className="semantic-radio"
            value={this.state.anything_else}
            style={topMargin}
            rows='10' cols='100'>
          </textarea><br />
          <br />
        </div>
        <div className='bottomDiv'>
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
