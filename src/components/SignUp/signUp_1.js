import React, { Component } from 'react';
import Header from './signUp_header';

class signUp_1 extends Component {

  render() {
    return (
      <center>
      <Header width={'20%'} /><br />

      <div>
        <h2>Personal Information</h2><br />
        <input label="First Name" placeholder="First Name"></input><br />
        <input label="Last Name" placeholder="Last Name"></input><br />
        <input label="Email" placeholder="Email"></input><br />
        <input label="Password" placeholder="Password"></input><br />
        <input label="Phone Number" placeholder="Phone Number"></input><br />
        <input label="Street Address" placeholder="Street Address"></input><br />
        <input label="City" placeholder="City"></input><br />
        <input label="State" placeholder="State"></input><input label="Zip" placeholder="Zip"></input><br />
      </div><br />
      <div className="bottom-signup">
        <button>Next</button>
      </div>
      </center>
    );
  }
}

export default signUp_1;
