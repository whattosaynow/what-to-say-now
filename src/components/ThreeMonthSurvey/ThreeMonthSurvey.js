import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

import './ThreeMonthSurvey.css';


const topMargin = {
  marginTop: '10px'
}

class ThreeMonthSurvey extends Component {

  state = {}

  handleChangeFor = propertyName => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }


  handleClick = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 5) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SUBMIT_THREE_MONTH_ANSWERS`, payload: this.state })
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
          <span className="survey-questions"> 1. The Challenge has continued to impact my behavior with the althletes I coach: (choose one)</span><br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='agree' />
          Agree<br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Neutral' />
          Neutral<br />
          <Input
            onChange={this.handleChangeFor('continued_impact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Disagree' />
          Disagree<br /><br />
          <span className="survey-questions"> 2. How has the Challenge continued to impact your behavior.</span>
          <br />
          <textarea
            onChange={this.handleChangeFor('how_impact')}
            className="semantic-radio"
            value={this.state.value}
            style={topMargin}
            rows='10'
            cols='100'>
          </textarea>
          <br />
          <span className="survey-questions"> 3. The Challenge tools have continued to positivley affect my ability to interact with my team about body and food: (choose one)</span><br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='agree' />
          Agree<br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Neutral' />
          Neutral<br />
          <Input
            onChange={this.handleChangeFor('continued_affected_ability_interact')}
            className="semantic-radio"
            type='radio'
            name='impact'
            value='Disagree' />
          Disagree<br />
          <br />
          <span className="survey-questions"> 4. Is there anything else you would like to share?</span>
          <br />
          <textarea
            onChange={this.handleChangeFor('anything_else')}
            className="semantic-radio"
            value={this.state.value}
            style={topMargin}
            rows='10' cols='100'>
          </textarea>
          <br />
          <span className="survey-questions"> 5. Can we call you for more information about your experience? (choose one)</span><br />
          <Input
            onChange={this.handleChangeFor('call_more_information')}
            className="semantic-radio"
            type='radio'
            value='Yes' />
          Yes<br />
          <Input
            onChange={this.handleChangeFor('call_more_information')}
            className="semantic-radio"
            type='radio'
            value='No' />
          No<br />
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
