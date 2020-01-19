import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

//styling
import Header from './signUp_header';
import './signUp.css';

class signUp_3 extends Component {

  state = {
    years_coaching: this.props.reduxState.answersReducer.signupReducer.years_coaching || '',
    genders_of_athletes_female: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_female || false,
    genders_of_athletes_male: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_male || false,
    genders_of_athletes_non_binary: this.props.reduxState.answersReducer.signupReducer.genders_of_athletes_non_binary || false,
    number_of_athletes: this.props.reduxState.answersReducer.signupReducer.number_of_athletes || '',
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleCheckBox = (propertyName) => (event) => {
    if (this.state[propertyName]) {
      this.setState({
        ...this.state,
        [propertyName]: false
      })
    } else {
      this.setState({
        ...this.state,
        [propertyName]: event.target.value
      })
    }
  }

  handleClickBack = () => {
    this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    this.props.history.push('/signup2');
  }

  handleClickNext = () => {
    let survey = this.state
    if (
      survey.years_coaching.trim() === '' ||
      survey.number_of_athletes.trim() === '' ||
      (
        survey.genders_of_athletes_female === false && survey.genders_of_athletes_male === false && survey.genders_of_athletes_non_binary === false
      )
    ) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup4');

    }

  }

  render() {
    return (
      <>
        <Header width={'60%'} />
        <center><h2>Personal Information Continued</h2></center><br />
        <div className="signup-questions"><br />
          <span className="survey-questions">4. Number of years you have been coach?</span><br />
          <label>choose one</label><br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" checked={this.state.years_coaching === 'Less than 5 years'} name="q1" value="Less than 5 years" />Less than 5 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" checked={this.state.years_coaching === '6-10 years'} name="q1" value="6-10 years" />6-10 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" checked={this.state.years_coaching === '11-20 years'} name="q1" value="11-20 years" />11-20 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" checked={this.state.years_coaching === 'More than 21 years'} name="q1" value="More than 21 years" />More than 21 years<br />
          <br />
          <span className="survey-questions">5. Genders of the athletes you coach:</span> <br />
          <label>select all that apply</label><br />
          <Input onChange={this.handleCheckBox('genders_of_athletes_female')} type="checkbox" checked={!!this.state.genders_of_athletes_female} className="semantic-radio" name="q2" value={true} />Female<br />
          <Input onChange={this.handleCheckBox('genders_of_athletes_male')} type="checkbox" checked={!!this.state.genders_of_athletes_male} className="semantic-radio" name="q2" value={true} />Male<br />
          <Input onChange={this.handleCheckBox('genders_of_athletes_non_binary')} type="checkbox" checked={!!this.state.genders_of_athletes_non_binary} className="semantic-radio" name="q2" value={true} />Non-binary<br />
          <br />
          <span className="survey-questions">6. Number of athletes on the team you coach?</span><br />
          <label>choose one</label><br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" checked={this.state.number_of_athletes === '5-10' } name="q3" value="5-10" />5-10<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" checked={this.state.number_of_athletes === '11-15' } name="q3" value="11-15" />11-15<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" checked={this.state.number_of_athletes === '16-20' } name="q3" value="16-20" />16-20<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" checked={this.state.number_of_athletes === '21-25' } name="q3" value="21-25" />21-25<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" checked={this.state.number_of_athletes === 'More than 25' } name="q3" value="More than 25" />More than 25<br />
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

export default connect(mapStateToProps)(signUp_3);
