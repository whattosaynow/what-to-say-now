import React, { Component } from 'react';
import { connect } from 'react-redux';

import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PostSurvey_2 extends Component {

  state = {}

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 4) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey3');
    }

  }

  handleClickBack = () => {
    this.props.history.push('/postsurvey1');
  }

  render() {
    return (
      <>
        <div className="questions-wrapper"><br />
          <span className="survey-questions">5. The Challenge felt relevant to the age I coach:</span><br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_felt_relavent')}
            className="semantic-radio"
            name='q5'
            type="radio"
            value="Disagree"
          /> Disagree
          <br />
          <span className="survey-questions">6. The Challenge impacted my behavior with the athletes I coach:</span>
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('challenge_impacted_behavior')}
            className="semantic-radio"
            name='q6'
            type="radio"
            value="Disagree"
          /> Disagree
          <br />
          <span className="survey-questions">7. My understanding of the importance of messages kids hear from
            adults about food and body has changed:</span>
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('understanding_importance_changed')}
            className="semantic-radio"
            name='q7'
            type="radio"
            value="Disagree"
          /> Disagree
          <br />
          <span className="survey-questions">8. The Challenge tools have positively affected my ability to interact
            with my team about body and food:</span>
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Agree"
          /> Agree
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Neutral"
          /> Neutral
          <br />
          <Input
            onChange={this.handleChangeFor('affected_ability_interact')}
            className="semantic-radio"
            name='q8'
            type="radio"
            value="Disagree"
          /> Disagree
          <br /><br />
        </div>
        <br />
        <div className="bottomDiv">
          <Button onClick={this.handleClickBack}>Previous Page</Button><Button onClick={this.handleClick}>Next</Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_2);