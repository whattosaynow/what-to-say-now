import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './signUp_header';
import './signUp.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class signUp_0 extends Component {


  handleClickNext = () => {
    this.props.history.push('/signup1');

  }


  render() {
    return (
      <>
        <header className="sign-up-header">
        </header>
        <br />
        <div className="signup-questions">
          <p id="signup-welcome">
            <center>Welcome to <b>WithAll’s “What to Say” Coaches Challenge.</b><br />
              <br />
              Here’s how the Coaches Challenge works:<br /></center>
            <br />
            Every Sunday at 6:00pm CST you will receive a link to that week’s Challenge
            that includes a phrase that you can use with the kids you coach, along with:<br />
            <li>Why this phrase matters</li>
            <li>Self-reflection exercise</li>
            <li>Action step suggestions</li><br />
            Ready to dive in? Please start by filling out this brief survey below 
            so we can get to know you better and distribute the Challenge that aligns with the age group you coach.<br /><br />
            After you complete the 5-week Challenge, you will also receive a post-challenge survey & 3-month follow-up survey. 
            Your feedback is extremely valuable and will help shape the future of What to Say and the Coaches Challenge. 
            Thank you in advance for time.<br /><br />
            For questions or to send real-time feedback, please email us at hello@withall.org<br /><br />
            We’ve also provided an introductory email below that you can share with your team’s parents so 
            they can follow along with the Coaches Challenge and gather helpful tips and tools they can use too. 
            Simply copy and paste the below email and send it along!<br /><br />
            <u>Thank you for your commitment to helping our kids build healthy relationships with food and body!</u>
          </p>
        </div>
        <br />
        <div className='bottomDiv'>
          <Button onClick={this.handleClickNext}>Begin</Button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_0);

