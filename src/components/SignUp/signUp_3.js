import React, { Component } from 'react';
import Header from './signUp_header';


class signUp_3 extends Component {
  render() {
    return (
      <center>
        <Header width={'60%'} /><br />

        <div>
          <h2>Personal Information Continued</h2><br />
          
            #. Number of years you have been coach?<br /><br />
            <label>Choose One</label><br />
            <input type="radio" name="q1" value="Less than 5 years" />Less than 5 years<br />
            <input type="radio" name="q1" value="6-10 years" />6-10 years<br />
            <input type="radio" name="q1" value="11-20 years" />11-20 years<br />
            <input type="radio" name="q1" value="More than 21 years" />More than 21 years<br />
            <br />
            #. Genders of the athletes you coach: <br /><br />
            <label>Choose One</label><br />
            <input type="radio" name="q2" value="Female" />Female<br />
            <input type="radio" name="q2" value="Male" />Male<br />
            <input type="radio" name="q2" value="Non-binary" />Non-binary<br />
            <br />
            #. Number of athletes on the team you coach?<br /><br />
            <label>Choose One</label><br />
            <input type="radio" name="q3" value="5-10" />5-10<br />
            <input type="radio" name="q3" value="11-15" />11-15<br />
            <input type="radio" name="q3" value="16-20" />16-20<br />
            <input type="radio" name="q3" value="21-25" />21-25<br />
            <input type="radio" name="q3" value="More than 25" />More than 25<br />
            <br />
        </div>
        <br />
        <div className="bottom-signup">
          <button>Previous Page</button><button>Next</button>
        </div>
      </center>
    );
  }
}

export default signUp_3;
