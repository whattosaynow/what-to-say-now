import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signUp.css';
//semantic-ui
import { Button } from "semantic-ui-react";

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
            <span>Welcome to <b>WithAll’s “What to Say” Coaches Challenge.</b><br />
              <br />
              Here’s how the Coaches Challenge works:<br /></span>
            <br />
            Every Sunday at 6:00pm CST you will receive a link to that week’s Challenge
            that includes a phrase that you can use with the kids you coach, along with:<br />
            <li>Why this phrase matters</li>
            <li>Self-reflection exercise</li>
            <li>Action step suggestions</li><br />
            Ready to dive in? Please start by filling out this brief survey below
            so we can get to know you better and distribute the Challenge that aligns with the age group you coach.<br /><br />
            After you complete the 5-week Challenge, you will also receive a post-challenge survey & 3-month follow-up survey.
            Your feedback is extremely valuable and will help shape the future of "What to Say" and the Coaches Challenge.
            Thank you in advance for your time.<br /><br />
            For questions or to send real-time feedback, please email us at <a href="mailto:hello@withall.org">hello@withall.org</a>.<br /><br />
            We’ve also provided an introductory email below that you can share with your team’s parents so
            they can follow along with the Coaches Challenge and gather helpful tips and tools they can use too.
            Simply copy and paste the below email and send it along!<br /><br />
            <u>Thank you for your commitment to helping our kids build healthy relationships with food and body!</u>
          </p>
        </div>
        <div className="signup-questions">
          <p id="signup-welcome">
            <i>
              Dear Parents,<br /><br />
              I wanted you to be aware that I’m proud to be participating in WithAll’s “What To Say” Coaches Challenge – 
              a program that offers guidance to youth sports coaches so they can help their athletes develop healthy relationships with food and body.<br />
              <br />
              Every week for 5 weeks, the Coaches Challenge will present me with a new phrase that I can use, along with why the phrase matters, 
              an exercise for my own reflection, and action steps I can take with the team. If you’re interested in learning more about the Coaches Challenge, 
              visit <a href="https://whattosaynow.org/coaches/" target="_blank">whattosaynow.org/coaches</a>. There you’ll find the phrases I’ll be working with and why those phrases matter.<br />
              <br />
              If you’re interested in learning more about WithAll’s “What to Say” initiative overall, visit <a href="https://whattosaynow.org/" target="_blank">whattosaynow.org</a>, 
              which includes a video about their mission and 5 phrases that any adult can use with the kids in their lives to empower their self-esteem and 
              healthy relationships with food and body.<br />
              <br />
              If you have questions about the Coaches Challenge, you can ask me or you can contact WithAll directly at <a href="mailto:hello@withall.org">hello@withall.org</a>.<br />
              <br />
              <span>Copyright 2020 © by WithAll<br />
              All rights reserved, including the right of reproduction in whole or in part in any form</span>
           </i>
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

