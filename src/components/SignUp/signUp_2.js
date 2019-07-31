import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './signUp_header';
import './signUp_2.css';

class signUp_2 extends Component {

  state = {}

  handleChangeFor = propertyName => (event) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClickBack = () => {
    console.log('back button clicked!');
    this.props.history.push('/signup1');
  }

  handleClickNext = () => {
    console.log('next button clicked!', this.state);
    let survey2 = Object.keys(this.state);
    console.log(survey2.length);
    if (survey2.length < 3) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    }

  }

  render() {
    return (
      <center>
        <div>
          <Header width={'40%'} /><br />
          <h2>
            Personal Information (cont.)
        </h2>
          <br />
          <label> 1. Choose to receive the Challenges via email, text, or both: (choose one)</label><br />
          <input onChange={this.handleChangeFor('Email')} className='question' type='radio' name='receive' value='email'></input>Email<br />
          <input onChange={this.handleChangeFor('Text')} type='radio' name='receive' value='text'></input>Text<br />
          <input onChange={this.handleChangeFor('Both')} type='radio' name='receive' value='both'></input>Both<br />
          <br />
          <label> 2. Your gender: (choose one)</label><br />
          <input onChange={this.handleChangeFor('Female')} className='question' type='radio' name='gender' value='female'></input>Female<br />
          <input onChange={this.handleChangeFor('Male')} type='radio' name='gender' value='male'></input>Male<br />
          <input onChange={this.handleChangeFor('Non-binary')} type='radio' name='gender' value='non-binary'></input>Non-binary<br />
          <br />
          <label> 3. Your age: (choose one)</label><br />
          <input onChange={this.handleChangeFor('Less than 20 years old')} className='question' type='radio' name='age' value='Less than twenty years old'></input>Less than 20 years old.<br />
          <input onChange={this.handleChangeFor('21-36 years old')} type='radio' name='age' value='21-36 years old'></input>21-36 years old.<br />
          <input onChange={this.handleChangeFor('36-51 years old')} type='radio' name='age' value='36-51 years old'></input>36-51 years old.<br />
          <input onChange={this.handleChangeFor('52+ years old')} type='radio' name='age' value='52+ years old'></input>52+ years old.<br />
          <div className='bottomDiv'>
            <button onClick={this.handleClickBack}>Back</button><button onClick={this.handleClickNext}>Next</button>
          </div>

        </div>
        <pre>
          {JSON.stringify(this.props.reduxState, null, 2)}
        </pre>
      </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_2);

