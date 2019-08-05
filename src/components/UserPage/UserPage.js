import React, { Component } from 'react';
import mountain from './mountain.svg';
import { connect } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react'
import Card1 from '../UserPage/Card1';
import Card2 from '../UserPage/Card2';
import Card3 from '../UserPage/Card3';
import Card4 from '../UserPage/Card4';
import Card5 from '../UserPage/Card5';
import withall from './WithAllLogo.png';
import moment from 'moment';

const margins = {
  margin: '20px'
}

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CONTENT' })
  }

  handleClick = () => {
    this.props.history.push("/user-preferences");
  }

  dateCreated = moment(this.props.reduxState.user.date_created).format('YYYY MM DD');
  currentDate = moment().format('YYYY MM DD');



  weeklyContentCompare = (created, current) => {
    const answer = moment(current).diff(created, 'days');
    return answer
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

          <div>
            Comparing date created to current date<br />
            Moment.js fromNow: {moment(this.dateCreated).fromNow(true)}<br />
            Const dateCreated: {this.dateCreated}<br />
            Const currentDate: {this.currentDate} <br />
            Compare: {this.weeklyContentCompare(this.dateCreated, this.currentDate)}
          </div>
          <pre>
            {JSON.stringify(this.props.reduxState.user.date_created, null, 2)}
          </pre>


          <div style={margins} >
            <Card.Group centered stackable>
              {(this.weeklyContentCompare(this.dateCreated, this.currentDate) > 0) ?
                <Card1 />
                :
                <>
                </>
              }
              {(this.weeklyContentCompare(this.dateCreated, this.currentDate) > 7) ?
                <Card2 />
                :
                <>
                </>
              }

              {(this.weeklyContentCompare(this.dateCreated, this.currentDate) > 14) ?
                <Card3 />
                :
                <>
                </>
              }

              {(this.weeklyContentCompare(this.dateCreated, this.currentDate) > 21) ?
                <Card4 />
                :
                <>
                </>
              }

              {(this.weeklyContentCompare(this.dateCreated, this.currentDate) > 28) ?
                <Card5 />
                :
                <>
                </>
              }
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
