import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import Header from './signUp_header';


class signUp_3 extends Component {

  state = {}

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    console.log('back button clicked!');
    this.props.history.push('/signup2');
  }

  handleClickNext = () => {
    console.log('next button clicked!', this.state);
    let survey2 = Object.keys(this.state);
    console.log(survey2.length);
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
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
          #. Number of years you have been coach?<br /><br />
          <label>Choose One</label><br />
          <input onChange={this.handleChange('years_coaching')} type="radio" name="q1" value="Less than 5 years" />Less than 5 years<br />
          <input onChange={this.handleChange('years_coaching')} type="radio" name="q1" value="6-10 years" />6-10 years<br />
          <input onChange={this.handleChange('years_coaching')} type="radio" name="q1" value="11-20 years" />11-20 years<br />
          <input onChange={this.handleChange('years_coaching')} type="radio" name="q1" value="More than 21 years" />More than 21 years<br />
          <br />
          #. Genders of the athletes you coach: <br /><br />
          <label>Choose One</label><br />
          <input onChange={this.handleChange('genders_of_athletes')} type="radio" name="q2" value="Female" />Female<br />
          <input onChange={this.handleChange('genders_of_athletes')} type="radio" name="q2" value="Male" />Male<br />
          <input onChange={this.handleChange('genders_of_athletes')} type="radio" name="q2" value="Non-binary" />Non-binary<br />
          <br />
          #. Number of athletes on the team you coach?<br /><br />
          <label>Choose One</label><br />
          <input onChange={this.handleChange('number_of_athletes')} type="radio" name="q3" value="5-10" />5-10<br />
          <input onChange={this.handleChange('number_of_athletes')} type="radio" name="q3" value="11-15" />11-15<br />
          <input onChange={this.handleChange('number_of_athletes')} type="radio" name="q3" value="16-20" />16-20<br />
          <input onChange={this.handleChange('number_of_athletes')} type="radio" name="q3" value="21-25" />21-25<br />
          <input onChange={this.handleChange('number_of_athletes')} type="radio" name="q3" value="More than 25" />More than 25<br />
          <br />
        </div>
        <br />
        <div className="bottom-signup">
          <button onClick={this.handleClickBack}>Back</button><button onClick={this.handleClickNext}>Next</button>
        </div>
      </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_3);
