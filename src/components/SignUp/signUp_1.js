import React, { Component } from 'react';
import Header from './signUp_header';
import { isProperty } from '@babel/types';

class signUp_1 extends Component {
  state = {
    role: 1,
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleClick = () => {
    console.log('next is clicked')
  }

  render() {
    return (
      <center>
        <Header width={'20%'} /><br />
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <div>
          <h2>Personal Information</h2><br />
          <input onChange={this.handleChange('first_name')} label="First Name" placeholder="First Name" value={this.state.value}></input><br />
          <input onChange={this.handleChange('last_name')} label="Last Name" placeholder="Last Name" value={this.state.value}></input><br />
          <input onChange={this.handleChange('email')} label="Email" placeholder="Email" value={this.state.value}></input><br />
          <input onChange={this.handleChange('password')} label="Password" placeholder="Password" value={this.state.value}></input><br />
          <input onChange={this.handleChange('phone_number')} label="Phone Number" placeholder="Phone Number" value={this.state.value}></input><br />
          <input onChange={this.handleChange('street_address')} label="Street Address" placeholder="Street Address" value={this.state.value}></input><br />
          <input onChange={this.handleChange('city')} label="City" placeholder="City" value={this.state.value}></input><br />
          <input onChange={this.handleChange('state')} label="State" placeholder="State" value={this.state.value}></input>
          <input onChange={this.handleChange('zip')} label="Zip" placeholder="Zip" value={this.state.value}></input><br />
        </div><br />
        <div className="bottom-signup">
          <button onClick={this.handleClick}>Next</button>
        </div>
       
      </center>
    );
  }
}

export default signUp_1;
