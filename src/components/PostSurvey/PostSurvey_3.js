import React, { Component } from 'react';

class PostSurvey_3 extends Component {
  render() {
    return (
      <div>
        <form>
          9. What was your favorite thing about the Challenge?
          <textarea rows="10" cols="50"></textarea>
          10.Can we call you for more information about your experience?
          <input type="radio" value="Yes">Yes</input>
          <input type="radio" value="No">Yes</input>
          <button>Go Back</button>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostSurvey_3;
