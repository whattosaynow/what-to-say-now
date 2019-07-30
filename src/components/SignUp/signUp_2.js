import React, { Component } from 'react';
import Header from './signUp_header';
import './signUp_2.css';

class signUp_2 extends Component {

  state = {}

  handleChangeFor = propertyName => (event) => {
    console.log(propertyName, event.target.value);
    this.setState({
      ...this.state,
    [propertyName]:event.target.value
  });
    
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
          <input onChange={this.handleChangeFor('Email')} className='question' type='radio' name='receive' value={this.state.email}></input>Email<br />
          <input onChange={this.handleChangeFor('Text')} type='radio' name='receive' value={this.state.text}></input>Text<br />
          <input onChange={this.handleChangeFor('Both')} type='radio' name='receive' value={this.state.both}></input>Both<br />
          <br />
          <label> 2. Your gender: (choose one)</label><br />
          <input onChange={this.handleChangeFor('Female')}className='question' type='radio' name='gender' value={this.state.female}></input>Female<br />
          <input onChange={this.handleChangeFor('Male')}type='radio' name='gender' value={this.state.male}></input>Male<br />
          <input onChange={this.handleChangeFor('Non-binary')}type='radio' name='gender' value={this.state.nonBinary}></input>Non-binary<br />
          <br />
          <label> 3. Your age: (choose one)</label><br />
          <input onChange={this.handleChangeFor('Less than 20 years old')}className='question' type='radio' name='age' value={this.state.lessThanTwenty}></input>Less than 20 years old.<br />
          <input onChange={this.handleChangeFor('21-36 years old')}type='radio' name='age' value={this.state.twentyOneThirtySix}></input>21-36 years old.<br />
          <input onChange={this.handleChangeFor('36-51 years old')}type='radio' name='age' value={this.state.thirtySixFiftyOne}></input>36-51 years old.<br />
          <input onChange={this.handleChangeFor('52+ years old')}type='radio' name='age' value={this.state.fiftyTwoPlus}></input>52+ years old.<br />
          <div className='bottomDiv'>
          <button>Back</button><button>Next</button>
          </div>
          
          </div>
      </center>
    );
  }
}

export default signUp_2;
