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

  render() {
    return (
      <center>
        <div>
          <label> 9. What was your favorite thing about the Challenge?</label><br />
          <textarea style={topMargin} rows='10' cols='100'></textarea><br />
          <label>10.Can we call you for more information about your experience?</label><br />
          <input style={topMargin} type="radio" value="Yes"></input>Yes<br />
          <input type="radio" value="No"></input>No<br />
          <button>Go Back</button>
          <button>Submit</button>
      </div>
      </center>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_3);