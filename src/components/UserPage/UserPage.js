import React, { Component } from 'react';
import mountain from './mountain.svg';
import { connect } from "react-redux";

class UserPage extends Component {
  handleClick = () => {
     this.props.history.push("/user-preferences");
  }
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

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(UserPage);
