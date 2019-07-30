import React, { Component } from 'react';

class signUp_1 extends Component {
  render() {
    return (
      <>
      <header>
        Thank you for participating in WithAll's "What To Say" Coaches Challenge. 
        Please fill out the following form to participate.
      </header>
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
      </div>
      <div>
        <button>Next</button>
      </div>
      </>
    );
  }
}

export default signUp_1;
