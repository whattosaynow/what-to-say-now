import React, { Component } from 'react';
import { connect } from 'react-redux';

import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const topMargin = {
  marginTop: '10px'
}



class PostSurvey_3 extends Component {
  state = {};

  handleChangeFor = propertyName => event => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  };

  handleClickNext = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 2) {
      alert("Please Answer All Questions");
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state });
      MySwal.fire({
        title: "",
        text: `Are you done filling out the form?`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit"
      }).then(result => {
        if (result.value) {
          this.props.dispatch({
            type: "SUBMIT_POST_ANSWERS",
            payload: this.props.reduxState.answersReducer.postSurveyReducer
          });
          this.props.history.push("/home");
        }
      });
    }
  }; // end handleClickNext

  handleClickBack = () => {
    this.props.history.push("/postsurvey2");
  };

  render() {
    return (
      <>
        <div className="questions-wrapper"><br />
          <span className="survey-questions"> 9. What was your favorite thing about the Challenge?</span>
          <br />
          <textarea
            onChange={this.handleChangeFor("favorite_thing")}
            style={topMargin}
            rows="10"
            cols="100"
            className="semantic-radio"
          />
          <br />
          <span className="survey-questions">
            10.Can we call you for more information about your experience?
          </span>
          <br />
          <Input
            onChange={this.handleChangeFor("call_more_information")}
            name="q10"
            style={topMargin}
            type="radio"
            value="Yes"
            className="semantic-radio"
          />
          Yes
          <br />
          <Input
            onChange={this.handleChangeFor("call_more_information")}
            name="q10"
            type="radio"
            value="No"
            className="semantic-radio"
          />
          No
          <br /><br />
        </div>
        <div className="bottomDiv">
          <Button onClick={this.handleClickBack}>Go Back</Button>
          <Button onClick={this.handleClickNext}>Submit</Button>
        </div>

      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_3);