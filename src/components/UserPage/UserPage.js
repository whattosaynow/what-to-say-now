import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card } from 'semantic-ui-react'
import CardTemplate from './CardTemplate';
import { Button } from "semantic-ui-react";

import './UserPage.css'

const margins = {
  margin: '20px',
}

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CONTENT' })
  }

  handleClick = () => {
    this.props.history.push("/user-preferences");
  }

  // dateCreated = moment(this.props.reduxState.user.date_created).format('YYYY MM DD');
  // currentDate = moment().format('YYYY MM DD');

  // weeklyContentCompare = (created, current) => {
  //   const answer = moment(current).diff(created, 'days');
  //   return answer
  // }

  render() {
    let content = this.props.reduxState.weeklyContentReducer.weeklyContentReducer;
    let sortedContent = content.sort((a, b) => { if (a.id > b.id) { return 1 } else { return -1 } });

    return (
      <>
        <center className="user-page"><br />
          <div style={margins} >
            <Card.Group centered stackable>
              {
                this.props.reduxState.user.content_permission === 0 ?
                  <div className="week-zero">
                    <p style={{padding:'10px'}}>
                      You are now signed up for WithAll’s “What to Say” Coaches Challenge. You will receive a message on Sunday at 6:00pm when Week one content is available. In the meantime, happy coaching!
                    <br />
                      -The WithAll Team</p>
                  </div>
                  :
                  <>
                  </>
              }
              {sortedContent.map((content) => {
                return (
                  (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                  (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                  (Number(this.props.reduxState.user.content_permission) >= Number(content.week)) &&
                  <CardTemplate content={content} key={content.id} />
                )
              })
              }

            </Card.Group>

          </div>
              <br />
          <div className='signup-prev-next-div'>
            <Button onClick={this.handleClick}>Update My Account Preferences</Button>
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
