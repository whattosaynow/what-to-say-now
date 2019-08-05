import React, { Component } from 'react';
import { whileStatement } from '@babel/types';

const name = {
  fontSize: '50px'
}

const welcomeDiv = {
  marginTop: '20px'
}

const matter = {
  backgroundColor:'#35297f',
  color: 'white',
  margin: 0,
  padding: 0
}

const dropDownDiv = {
  backgroundColor: '#faf0e8'
}

const goodLuck = {
  color: '#35297f'
}

const quote = {
  color: '#ff6624'
}


class ChallegeContent extends Component {
  render() {
    return (
      <center >
        <header style={name} className="sign-up-header">
          Hello <span>Name!</span><br />
          <div className="outerBar" style={this.outerBar}>
            <div className="innerBar" style={this.innerBar}></div>
          </div>
          <br />
        </header>
        <main>
          <div style={welcomeDiv} className='welcomeDiv'>
            <h2 className='welcomeWeek'>Welcome to Week
            <span className='weekNumber'> 1 </span>
              of the "What to Say" Coaches Challenge!</h2>
            <p>Thanks for taking the time to be an even better coach by helping
               your athletes develop healthy relationships with food and body.  <br />
              You are improving their mental and physical health.
             </p>
            <h2>This week's "What to Say" phrase is : </h2>
            <p>{/* Use prop here*/}</p>
          </div>
          <div  className='dropDownDiv'>
            <h2 style={matter}>Why does this phrase matter?</h2>
            <p style={dropDownDiv} >{/* Use conditional prop here*/}</p>
            <h2 style={matter}>For your own reflection</h2>
            <p style={dropDownDiv} >{/* Use conditional prop here*/}</p>
            <h2 style={matter}>Action steps options</h2>
            <p style={dropDownDiv} >{/* Use conditional prop here*/}</p>
          </div>
          <div className="postDiv">
            <h2 style={goodLuck} >Good luck with this challenge!  Email any questions or suggestions to us</h2>
            <h2 style={quote}>"A good coach can change a game.  A great coach can change a life."  
              -John Wooden
            </h2>
          </div>

        </main>
      </center>
    );
  }
}

export default ChallegeContent;
