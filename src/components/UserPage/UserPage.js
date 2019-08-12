import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card } from 'semantic-ui-react'
import moment from 'moment';
import CardTemplate from './CardTemplate';
import { Button } from "semantic-ui-react";

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

  dateCreated = moment(this.props.reduxState.user.date_created).format('YYYY MM DD');
  currentDate = moment().format('YYYY MM DD');

  weeklyContentCompare = (created, current) => {
    const answer = moment(current).diff(created, 'days');
    return answer
  }

  render() {
    return (
      <>
        <center className="user-page">
          <div style={margins} >
            <Card.Group centered stackable>
              {this.props.reduxState.weeklyContentReducer.weeklyContentReducer.map((content) => {
                return (
                  (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                  (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                  (Number(1) === Number(content.week)) &&
                  <CardTemplate content={content} key={content.id} />
                )
              })
              }
              {
                (this.weeklyContentCompare(this.dateCreated, this.currentDate) > 7) ?
                  this.props.reduxState.weeklyContentReducer.weeklyContentReducer.map((content) => {
                    return (
                      (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                      (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                      (Number(2) === Number(content.week)) &&
                      <CardTemplate content={content} key={content.id} />
                    )
                  })
                  :
                  <>
                  </>
              }

              {
                (this.weeklyContentCompare(this.dateCreated, this.currentDate) > 14) ?
                  this.props.reduxState.weeklyContentReducer.weeklyContentReducer.map((content) => {
                    return (
                      (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                      (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                      (Number(3) === Number(content.week)) &&
                      <CardTemplate content={content} key={content.id} />
                    )
                  })
                  :
                  <>
                  </>
              }

              {
                (this.weeklyContentCompare(this.dateCreated, this.currentDate) > 21) ?
                  this.props.reduxState.weeklyContentReducer.weeklyContentReducer.map((content) => {
                    return (
                      (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                      (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                      (Number(4) === Number(content.week)) &&
                      <CardTemplate content={content} key={content.id} />
                    )
                  })
                  :
                  <>
                  </>
              }

              {
                (this.weeklyContentCompare(this.dateCreated, this.currentDate) > 28) ?
                  this.props.reduxState.weeklyContentReducer.weeklyContentReducer.map((content) => {
                    return (
                      (Number(this.props.reduxState.user.role) === Number(content.role_id)) &&
                      (Number(this.props.reduxState.user.S1_focus_ages) === Number(content.ageGroup_id)) &&
                      (Number(5) === Number(content.week)) &&
                      <CardTemplate content={content} key={content.id} />
                    )
                  })
                  :
                  <>
                  </>
              }
            </Card.Group>
          </div>

          <div className='bottomDiv'>
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
