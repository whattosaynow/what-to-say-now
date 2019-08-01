import React, { Component } from 'react';
import mountain from './mountain.svg';

class UserPage extends Component {
  render() {
    return (
      <center>
      <div>
         <header className="sign-up-header">
            View your weekly Challenges.<br />
            <br />
            <div className="outerBar" style={this.outerBar}>
              <div className="innerBar" style={this.innerBar}></div>
            </div>
            <br />
          </header>
          <img src={mountain} alt='mountain' width='100px' height='100px'/>
          <p>Weekly Challenge</p>
          <div className='bottomDiv'>
            <button onClick={this.handleClick}>Update My Accout Preferences</button>
          </div>
      </div>
      </center>
    );
  }
}

export default UserPage;
