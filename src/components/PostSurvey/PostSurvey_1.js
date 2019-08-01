import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostSurvey_1 extends Component {

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
      this.props.dispatch({ type: `SET_SIGNUP_ANSWERS`, payload: this.state })
    }

  }

  render() {
    return (

      <center>
        <label>1.How much of the Challenge did you complete?</label><br/>
        <input onChange={this.handleChangeFor('challenge_completed')}type="radio" value="All"></input>All<br/>
        <input onChange={this.handleChangeFor('challenge_completed')}type="radio" value="3-4 weeks"></input>3-4 weeks<br/>
        <input onChange={this.handleChangeFor('challenge_completed')}type="radio" value="1-2 weeks"></input>1-2 weeks<br/>
        <label>2.Participating in  the Challenge was easy to do.</label><br/>
        <input onChange={this.handleChangeFor('participation_was_easy')}type="radio" value="Agree"></input>Agree<br/>
        <input onChange={this.handleChangeFor('participation_was_easy')}type="radio" value="Neutral"></input>Neutral<br/>
        <input type="radio" value="Disagree"></input>Disagree<br/>
        <label>3.I learned something new from participating in the Challenge.</label><br/>
        <input onChange={this.handleChangeFor('learned_something_new')}type="radio" value="Agree"></input>Agree<br/>
        <input onChange={this.handleChangeFor('learned_something_new')}type="radio" value="Neutral"></input>Neutral<br/>
        <input onChange={this.handleChangeFor('learned_something_new')}type="radio" value="Disagree"></input>Disagree<br/>
        <label>4.I would encourage another coach I know to do the Challenge.</label><br/>
        <input onChange={this.handleChangeFor('would_encourage')}type="radio" value="Agree"></input>Agree<br/>
        <input onChange={this.handleChangeFor('would_encourage')}type="radio" value="Neutral"></input>Neutral<br/>
        <input onChange={this.handleChangeFor('would_encourage')}type="radio" value="Disagree"></input>Disagree<br/>
        <button onClick={this.handleClick}>Next</button>
      </center>

    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_1);

