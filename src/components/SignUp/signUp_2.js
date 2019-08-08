import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './signUp_header';
import './signUp.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_2 extends Component {

  state = {}

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClickBack = () => {
    this.props.history.push('/signup1');
  }

  handleClickNext = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 3) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
      this.props.history.push('/signup3');

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
          1. Choose to receive the Challenges via email, text, or both:<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChangeFor('choose_receive')} className='question' type='radio' className="semantic-radio" name='receive' value='email'></Input>Email<br />
          <Input onChange={this.handleChangeFor('choose_receive')} type='radio' className="semantic-radio" name='receive' value='text'></Input>Text<br />
          <Input onChange={this.handleChangeFor('choose_receive')} type='radio' className="semantic-radio" name='receive' value='both'></Input>Both<br />
          <br />
          
          2. Your gender:<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChangeFor('your_gender')} className='question' type='radio' className="semantic-radio" name='gender' value='female'></Input>Female<br />
          <Input onChange={this.handleChangeFor('your_gender')} type='radio' className="semantic-radio" name='gender' value='male'></Input>Male<br />
          <Input onChange={this.handleChangeFor('your_gender')} type='radio' className="semantic-radio" name='gender' value='non-binary'></Input>Non-binary<br />
          <br />
          
          3. Your age:<br /><br />
          <label>Choose One</label><br />
          <Input onChange={this.handleChangeFor('your_age')} className='question' type='radio' className="semantic-radio" name='age' value='Less than twenty years old'></Input>Less than 20 years old.<br />
          <Input onChange={this.handleChangeFor('your_age')} type='radio' className="semantic-radio" name='age' value='21-36 years old'></Input>21-36 years old.<br />
          <Input onChange={this.handleChangeFor('your_age')} type='radio' className="semantic-radio" name='age' value='36-51 years old'></Input>36-51 years old.<br />
          <Input onChange={this.handleChangeFor('your_age')} type='radio' className="semantic-radio" name='age' value='52+ years old'></Input>52+ years old.<br />
          
          <div className='bottomDiv'>
            <Button onClick={this.handleClickBack}>Back</Button><Button onClick={this.handleClickNext}>Next</Button>
          </div>

        </div>
        </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_2);

