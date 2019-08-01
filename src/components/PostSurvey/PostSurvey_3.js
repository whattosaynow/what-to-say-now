import React, { Component } from 'react';
import { connect } from 'react-redux';

const topMargin = {
  marginTop: '10px'
}

class PostSurvey_3 extends Component {

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
    if (survey2.length < 2) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      }
  }

handleClickBack = () => {
  console.log('back button clicked!');
  this.props.history.push('/postsurvey2');
}

  render() {
    return (
      <center>
        <div>
          <label> 9. What was your favorite thing about the Challenge?</label><br />
          <textarea onChange={this.handleChangeFor('favorite_thing')} style={topMargin} rows='10' cols='100'></textarea><br />
          <label>10.Can we call you for more information about your experience?</label><br />
          <input onChange={this.handleChangeFor('call_more_information')} name='q10'style={topMargin} type="radio" value="Yes"></input>Yes<br />
          <input onChange={this.handleChangeFor('call_more_information')} name='q10'type="radio" value="No"></input>No<br />
          <button onClick={this.handleClickBack}>Go Back</button>
          <button onClick={this.handleClick}>Submit</button>
      </div>
      <pre>
          {JSON.stringify(this.props.reduxState.answersReducer, null, 2)}
        </pre>
      </center>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_3);