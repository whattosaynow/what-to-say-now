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
  state = {}


  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClickBack = () => {
    this.props.history.push('/signup4');
  }

  handleClickNext = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 2) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      MySwal.fire({
        title: '',
        text: `Are you done filling out the form?`,
        type: 'warning',
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
      <center>
        <Header width={'100%'} /><br />
        <div>
          <h2>Personal Information Continued</h2><br />
          9. Why are you particpating in the "What to say" Coaches Challenge?<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" name="q1" value="I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image." />I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image.<br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" name="q1" value="I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something." />I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something.<br />
          <Input onChange={this.handleChange('why_are_you_participating')} type="radio" className="semantic-radio" name="q1" value="This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate." />This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate.<br />
          I have other reasons for participating. They are:<br />
          <textarea onChange={this.handleChange('why_are_you_participating')}  value={this.state.value} rows="4" cols="100"></textarea>

          <br />
          10. Can we call you at the completion of the Challenge for more information about your experience?
            <label>Choose One</label><br />
          <Input onChange={this.handleChange('can_we_call_after_completion')} type="radio" className="semantic-radio" name="q2" value="yes" />yes<br />
          <Input onChange={this.handleChange('can_we_call_after_completion')} type="radio" className="semantic-radio" name="q2" value="no" />no<br />

          <br />
        </div>
        <br />
        <div className="bottomDiv">
          <Button onClick={this.handleClickBack}>Back</Button><Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_5);
