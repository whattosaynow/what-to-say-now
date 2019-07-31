import React, { Component } from 'react';
import Header from './signUp_header';


class signUp_5 extends Component {
  render() {
    return (
      <center>
        <Header width={'100%'} /><br />

        <div>
          <h2>Personal Information Continued</h2><br />
          
            #. Why are you particpating in the "What to say" Coaches Challenge?<br /><br />
            <label>Choose One</label><br />
            <input type="radio" name="q1" value="I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image." />I’m eager for guidance. I know how I talk to my athletes matters, but I want help knowing the right words/phrases to say about food and body image.<br />
            <input type="radio" name="q1" value="I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something." />I’m just curious. I know how I talk to my athletes matters, but I feel like my current approach/language is good. Maybe I’ll learn something.<br />
            <input type="radio" name="q1" value="This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate." />This is not a priority issue for me as a coach, but I’m doing this because I was asked to participate.<br />
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
            <textarea rows="1" cols="100"></textarea>
            <br />
        </div>
        <br />
        <div className="bottom-signup">
          <button>Previous Page</button><button>Submit</button>
        </div>
      </center>
    );
  }
}

export default signUp_5;
