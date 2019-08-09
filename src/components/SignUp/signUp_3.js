import React, { Component } from 'react';
import { connect } from 'react-redux';

//semantic-ui
import { Input, Button } from "semantic-ui-react";

//styling
import Header from './signUp_header';
import './signUp.css';

class signUp_3 extends Component {

  state = {}

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    this.props.history.push('/signup2');
  }

  handleClickNext = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 3) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup4');

    }

  }

  render() {
    return (
      <center>
        <Header width={'60%'} /><br />

        <div>
          <h2>Personal Information Continued</h2><br />
          4. Number of years you have been coach?<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" name="q1" value="Less than 5 years" />Less than 5 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" name="q1" value="6-10 years" />6-10 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" name="q1" value="11-20 years" />11-20 years<br />
          <Input onChange={this.handleChange('years_coaching')} type="radio" className="semantic-radio" name="q1" value="More than 21 years" />More than 21 years<br />
          <br />
          5. Genders of the athletes you coach: <br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChange('genders_of_athletes')} type="radio" className="semantic-radio" name="q2" value="Female" />Female<br />
          <Input onChange={this.handleChange('genders_of_athletes')} type="radio" className="semantic-radio" name="q2" value="Male" />Male<br />
          <Input onChange={this.handleChange('genders_of_athletes')} type="radio" className="semantic-radio" name="q2" value="Non-binary" />Non-binary<br />
          <br />
          6. Number of athletes on the team you coach?<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" name="q3" value="5-10" />5-10<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" name="q3" value="11-15" />11-15<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" name="q3" value="16-20" />16-20<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" name="q3" value="21-25" />21-25<br />
          <Input onChange={this.handleChange('number_of_athletes')} type="radio" className="semantic-radio" name="q3" value="More than 25" />More than 25<br />
          <br />
        </div>
        <br />
        <div className="bottomDiv">
          <Button onClick={this.handleClickBack}>Back</Button>
          <Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_3);
