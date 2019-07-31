import React, { Component } from 'react';
import Header from './PostSurvey_Header'

class PostSurvey_2 extends Component {
  render() {
    return (

      <center>
        <Header /><br />
        <div>

          <label>5.The Challenge felt relevant to the age I coach:</label><br />
          <input type="radio" value="Agree"></input>Agree<br />
          <input type="radio" value="Neutral"></input>Neutral<br />
          <input type="radio" value="Disagree"></input>Disagree<br />
          <label>6.The Challenge impacted my behavior with the athletes I coach:</label><br />
          <input type="radio" value="Agree"></input>Agree<br />
          <input type="radio" value="Neutral"></input>Neutral<br />
          <input type="radio" value="Disagree"></input>Disagree<br />
          <label>7.My understanding of the importance of messages kids hear from
            adults about food and body has changed:</label><br />
          <input type="radio" value="Agree"></input>Agree<br />
          <input type="radio" value="Neutral"></input>Neutral<br />
          <input type="radio" value="Disagree"></input>Disagree<br />
          <label>8.The Challenge tools have positively affected my ability to interact
            with my team about body and food:</label><br />
          <input type="radio" value="Agree"></input>Agree<br />
          <input type="radio" value="Neutral"></input>Neutral<br />
          <input type="radio" value="Disagree"></input>Disagree<br />
          <button>Go Back</button>
          <button>Next</button>

        </div>
        <br />
        <div className="bottom-signup">
          <button>Previous Page</button><button>Next</button>
        </div>
        </center>
        );
      }
    }
    
    export default PostSurvey_2;
