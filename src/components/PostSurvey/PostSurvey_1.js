import React, { Component } from 'react';


class PostSurvey_1 extends Component {
  render() {
    return (

      <>
        <label>1.How much of the Challenge did you complete?</label><br/>
        <input type="radio" value="All"></input>All<br/>
        <input type="radio" value="3-4 weeks"></input>3-4 weeks<br/>
        <input type="radio" value="1-2 weeks"></input>1-2 weeks<br/>
        <label>2.Participating in  the Challenge was easy to do.</label><br/>
        <input type="radio" value="Agree"></input>Agree<br/>
        <input type="radio" value="Neutral"></input>Neutral<br/>
        <input type="radio" value="Disagree"></input>Disagree<br/>
        <label>3.I learned something new from participating in the Challenge.</label><br/>
        <input type="radio" value="Agree"></input>Agree<br/>
        <input type="radio" value="Neutral"></input>Neutral<br/>
        <input type="radio" value="Disagree"></input>Disagree<br/>
        <label>4.I would encourage another coach I know to do the Challenge.</label><br/>
        <input type="radio" value="Agree"></input>Agree<br/>
        <input type="radio" value="Neutral"></input>Neutral<br/>
        <input type="radio" value="Disagree"></input>Disagree<br/>
        <button>Back</button>
        <button>Next</button>
      </>

    );
  }
}

export default PostSurvey_1;
