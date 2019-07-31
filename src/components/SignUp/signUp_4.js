import React, { Component } from 'react';
import Header from './signUp_header';

class signUp_4 extends Component {
  render() {
    return (
      <center>
        <Header width={'80%'} /><br />

        <div>
          <h2>Personal Information Continued</h2><br />
          
            #. Age(s) you coach and want to focus on with during the Challenge:<br /><br />
            <label>Choose One</label><br />
            <input type="radio" name="q1" value="6-10 years old" />6-10 years old<br />
            <input type="radio" name="q1" value="11-13 years old" />11-13 years old<br />
            <input type="radio" name="q1" value="14-18 years old" />14-18 years old<br />
            <br />
            #. How did you find us?
            <label>Choose One</label><br />
            <select>
            <option value="Girls on the Run">Girls on the Run</option>
            <option value="Wayzata Girls Basketball Association">Wayzata Girls Basketball Association</option>
            <option value="The Loppet Foundation">The Loppet Foundation</option>
            <option value="Fusion Soccer Club MN">Fusion Soccer Club MN</option>
            <option value="Tia Russell Dance Studio">Tia Russell Dance Studio</option>
            <option value="Internet search">Internet search</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other (fill in the blank)</option>
            </select><br />
            <textarea rows="4" cols="50"></textarea>
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

export default signUp_4;
