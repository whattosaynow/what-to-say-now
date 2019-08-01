import React, { Component } from 'react';
import { connect } from 'react-redux';


const topMargin = {
  marginTop: '10px'
}

class ThreeMonthSurvey extends Component {

  state = {}

  handleChangeFor = propertyName => (event) => {
    console.log(this.state,event.target.value);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }


  handleClick = () => {
    console.log('next button clicked!', this.state);
    let survey2 = Object.keys(this.state);
    console.log(survey2.length);
    if (survey2.length < 5) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SUBMIT_THREE_MONTH_ANSWERS`, payload: this.state })
    }

  }

  render() {
    return (
      <center>
        <div>
          <header className="sign-up-header">
            Thank you for participating in WithAll's "What To Say" Coaches Challenge.<br />
            Please fill out this brief survey about your experience.<br />
            <br />
            <div className="outerBar" style={this.outerBar}>
              <div className="innerBar" style={this.innerBar}></div>
            </div>
            <br />
          </header>
          <label> 1. The Challenge has continued to impact my behavior with the althletes I coach: (choose one)</label><br />
          <input onChange={this.handleChangeFor('continued_impact')} className='question' type='radio' name='impact' value='agree'></input>Agree<br />
          <input onChange={this.handleChangeFor('continued_impact')} type='radio' name='impact' value='Neutral'></input>Neutral<br />
          <input onChange={this.handleChangeFor('continued_impact')} type='radio' name='impact' value='Disagree'></input>Disagree<br /><br/>
          <label> 2. How has the Challenge continued to impact your behavior.</label>
          <br/>
          <textarea onChange={this.handleChangeFor('how_impact')} value={this.state.value} style={topMargin} rows='10' cols ='100'></textarea>
          <br />
          <br/>
          <label> 3. The Challenge tools have continued to positivley affect my ability to interact with my team about body and food: (choose one)</label><br/>
          <input onChange={this.handleChangeFor('continued_affected_ability_interact')} className='question' type='radio' name='impact' value='agree'></input>Agree<br />
          <input onChange={this.handleChangeFor('continued_affected_ability_interact')} type='radio' name='impact' value='Neutral'></input>Neutral<br />
          <input onChange={this.handleChangeFor('continued_affected_ability_interact')} type='radio' name='impact' value='Disagree'></input>Disagree<br />
          <br/>
          <label> 4. Is there anything else you would like to share?</label>
          <br/>
          <textarea onChange={this.handleChangeFor('anything_else')} value={this.state.value} style={topMargin} rows='10' cols ='100'></textarea>
          <br/>
          <br/>
          <label> 5. Can we call you for more information about your experience? (choose one)</label><br/>
          <input onChange={this.handleChangeFor('call_more_information')} className='question' type='radio' value='Yes'></input>Yes<br />
          <input onChange={this.handleChangeFor('call_more_information')} type='radio'  value='No'></input>No<br />
          <div className='bottomDiv'>
            <button onClick={this.handleClick}>Submit</button>
          </div>
        </div>
      </center>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(ThreeMonthSurvey);
