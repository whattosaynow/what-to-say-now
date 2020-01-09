import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import Header from './signUp_header';
import './signUp.css';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_4 extends Component {

  state = {
    focus_ages: this.props.reduxState.answersReducer.signupReducer.focus_ages || '',
    how_did_you_find_us: this.props.reduxState.answersReducer.signupReducer.how_did_you_find_us || '',
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    this.props.history.push('/signup3');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.focus_ages.trim() === '' ||
      survey.how_did_you_find_us.trim() === ''
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup5');
    }

  }

  render() {
    return (
      <>
        <Header width={'80%'} /><br />
        <center><h2>Personal Information Continued</h2></center><br />
        <div className="signup-questions"><br />
          <span className="survey-questions">7. Age(s) you coach and want to focus on with during the Challenge:</span><br />
          <label>choose one</label><br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="1" />Elementary school youth (6-10 years old) <br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="2" />Middle school youth (10-13 years old)<br />
          <Input onChange={this.handleChange('focus_ages')} type="radio" className="semantic-radio" name="q1" value="3" />High school youth (14-18 years old)<br />
          <br />
          <span className="survey-questions">8. How did you find us?</span><br />
          <label>choose one</label><br />
          <select className="semantic-radio" onChange={this.handleChange('how_did_you_find_us')} >
            <option>--choose one--</option>
            <option value="Girls on the Run">Girls on the Run</option>
            <option value="Wayzata Girls Basketball Association">Wayzata Girls Basketball Association</option>
            <option value="The Loppet Foundation">The Loppet Foundation</option>
            <option value="Fusion Soccer Club MN">Fusion Soccer Club MN</option>
            <option value="Internet search">Internet search</option>
            <option value="Referral">Referral</option>
          </select><br />
          <label>Or fill in the blank:</label><br />
          <textarea className="semantic-radio" onChange={this.handleChange('how_did_you_find_us')} value={"other " + this.state.value} rows="4" cols="50"></textarea>
          <br /><br />
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

export default connect(mapStateToProps)(signUp_4);
