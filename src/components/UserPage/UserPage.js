import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react'
import withall from './WithAllLogo.png';

const margins = {
  margin:'20px'
}

class UserPage extends Component {
  handleClick = () => {
     this.props.history.push("/user-preferences");
  }
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
        <Card style={{ width:"250px"}} >
          <Image src= {withall} alt='mountain' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Week 1</Card.Header>
            <Card.Meta>
              <span className='date'>Challenge:</span>
            </Card.Meta>
            <Card.Description>
            “Healthy, athletic bodies come in all shapes and sizes.” 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Link to Content
            </a>
          </Card.Content>
        </Card>

        <Card style={{ width:"250px"}}>
          <Image src= {withall} alt='mountain' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Week 2</Card.Header>
            <Card.Meta>
              <span className='date'>Challenge:</span>
            </Card.Meta>
            <Card.Description>
            “Food is the fuel that powers your mind and body to perform at their best.” 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Link to Content
            </a>
          </Card.Content>
        </Card>

        <Card style={{ width:"250px"}}>
          <Image src= {withall} alt='mountain' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Week 3</Card.Header>
            <Card.Meta>
              <span className='date'>Challenge:</span>
            </Card.Meta>
            <Card.Description>
            "Your brain and body need a variety of activities to be strong.” 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Link to Content
            </a>
          </Card.Content>
        </Card>
        <Card style={{ width:"250px"}}>
          <Image src= {withall} alt='mountain' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Week 4</Card.Header>
            <Card.Meta>
              <span className='date'>Challenge:</span>
            </Card.Meta>
            <Card.Description>
            “You are unique. Your ability to [insert specific attribute] makes us a better team.” 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Link to Content
            </a>
          </Card.Content>
        </Card>
        <Card style={{ width:"250px"}}>
          <Image src= {withall} alt='mountain' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Week 5</Card.Header>
            <Card.Meta>
              <span className='date'>Challenge:</span>
            </Card.Meta>
            <Card.Description>
            “Different types of food are important for your mind and body to work well each day.” 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Link to Content
            </a>
          </Card.Content>
        </Card>
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

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(UserPage);
