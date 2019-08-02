import React, { Component } from 'react';
import Header from './PostSurvey_Header';
import { connect } from 'react-redux';

class PostSurvey_2 extends Component {

  state = {}

  handleChangeFor = (propertyName) => (event) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    console.log('next button clicked!', this.state);
    let survey2 = Object.keys(this.state);
    console.log(survey2.length);
    if (survey2.length < 4) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey3');
    }
    
}

handleClickBack = () => {
  console.log('back button clicked!');
  this.props.history.push('/postsurvey1');
}

  render() {
    return (

      <center>
        <Header /><br />
        <div>

          <label>5.The Challenge felt relevant to the age I coach:</label><br />
          <input onChange={this.handleChangeFor('challenge_felt_relavent')} name='q5'type="radio" value="Agree"></input>Agree<br />
          <input onChange={this.handleChangeFor('challenge_felt_relavent')} name='q5'type="radio" value="Neutral"></input>Neutral<br />
          <input onChange={this.handleChangeFor('challenge_felt_relavent')} name='q5'type="radio" value="Disagree"></input>Disagree<br />
          <label>6.The Challenge impacted my behavior with the athletes I coach:</label><br />
          <input onChange={this.handleChangeFor('challenge_impacted_behavior')} name='q6'type="radio" value="Agree"></input>Agree<br />
          <input onChange={this.handleChangeFor('challenge_impacted_behavior')} name='q6'type="radio" value="Neutral"></input>Neutral<br />
          <input onChange={this.handleChangeFor('challenge_impacted_behavior')} name='q6'type="radio" value="Disagree"></input>Disagree<br />
          <label>7.My understanding of the importance of messages kids hear from
            adults about food and body has changed:</label><br />
          <input onChange={this.handleChangeFor('understanding_importance_changed')} name='q7'type="radio" value="Agree"></input>Agree<br />
          <input onChange={this.handleChangeFor('understanding_importance_changed')} name='q7'type="radio" value="Neutral"></input>Neutral<br />
          <input onChange={this.handleChangeFor('understanding_importance_changed')} name='q7'type="radio" value="Disagree"></input>Disagree<br />
          <label>8.The Challenge tools have positively affected my ability to interact
            with my team about body and food:</label><br />
          <input onChange={this.handleChangeFor('affected_ability_interact')} name='q8'type="radio" value="Agree"></input>Agree<br />
          <input onChange={this.handleChangeFor('affected_ability_interact')} name='q8' type="radio" value="Neutral"></input>Neutral<br />
          <input onChange={this.handleChangeFor('affected_ability_interact')} name='q8' type="radio" value="Disagree"></input>Disagree<br />
       

        </div>
        <br />
        <div className="bottom-signup">
          <button onClick={this.handleClickBack}>Previous Page</button><button onClick={this.handleClick}>Next</button>
        </div>
        </center>
        );
      }
    }
    
    const mapStateToProps = (reduxState) => ({
      reduxState,
    })
    
    export default connect(mapStateToProps)(PostSurvey_2);