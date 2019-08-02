import React, { Component } from 'react';
import { connect } from 'react-redux';


import Header from './signUp_header';

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
    console.log('back button clicked!');
    this.props.history.push('/signup4');
  }

  handleClickNext = () => {
    console.log('next button clicked!', this.state);
    let survey2 = Object.keys(this.state);
    console.log(survey2.length);
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
          //console.log('true')
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
          <pre>
            {JSON.stringify(this.props.reduxState.answersReducer.signupReducer, null, 2)}
          </pre>
          #. Why are you particpating in the "What to say" Coaches Challenge?<br /><br />
          <label>Choose One</label><br />
          <input onChange={this.handleChange('why_are_you_participating')} type="radio" name="q1" value="I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image." />I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image.<br />
          <input onChange={this.handleChange('why_are_you_participating')} type="radio" name="q1" value="I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something." />I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something.<br />
          <input onChange={this.handleChange('why_are_you_participating')} type="radio" name="q1" value="This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate." />This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate.<br />
          <input onChange={this.handleChange('why_are_you_participating')} type="radio" name="q1" value="other" />I have other reasons for participating. They are:<br />
          <textarea rows="4" cols="100"></textarea>

          <br />
          #. Can we call you at the completion of the Challenge for more information about your experience?
            <label>Choose One</label><br />
          <input onChange={this.handleChange('can_we_call_after_completion')} type="radio" name="q2" value="yes" />yes<br />
          <input onChange={this.handleChange('can_we_call_after_completion')} type="radio" name="q2" value="no" />no<br />

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

export default connect(mapStateToProps)(signUp_5);
