import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import mountain from './mountain.svg';

class UserPage extends Component {
  render() {
    return (
      // const CardExampleCard = () => (
        <Card>
          <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      // )
      // <div>
      //   <p>
      //     User Page
      //   </p>
      // </div>
      // <center>
      // <div>
      //    <header className="sign-up-header">
      //       View your weekly Challenges.<br />
      //       <br />
      //       <div className="outerBar" style={this.outerBar}>
      //         <div className="innerBar" style={this.innerBar}></div>
      //       </div>
      //       <br />
      //     </header>
      //     <img src={mountain} alt='mountain' width='100px' height='100px'/>
      //     <p>Weekly Challenge</p>
      //     <div className='bottomDiv'>
      //       <button onClick={this.handleClick}>Update My Accout Preferences</button>
      //     </div>
      // </div>
      // </center>
    );
  }
}

export default UserPage;
