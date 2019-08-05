import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Card1 from '../UserPage/Card1';
import Card2 from '../UserPage/Card2';
import Card3 from '../UserPage/Card3';
import Card4 from '../UserPage/Card4';
import Card5 from '../UserPage/Card5';

const margins = {
  margin: '20px'
}

class UserPage extends Component {
  render() {
    return (
      <>
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
          </div>

          <div style={margins} >
            <Card.Group centered stackable>
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
              <Card5 />
            </Card.Group>
          </div>
          <div className='bottomDiv'>
            <button onClick={this.handleClick}>Update My Accout Preferences</button>
          </div>
        </center>
      </>

    );
  }
}

export default UserPage;
