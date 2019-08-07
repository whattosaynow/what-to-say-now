import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react';
import './ChallengeContent.css'


const name = {
  fontSize: '45px',
  height: '55px',
}

const welcomeDiv = {
  marginTop: '20px'
}

const matter = {
  backgroundColor: '#35297f',
  color: 'white',
  margin: '0',
}

const dropDownDiv = {
  backgroundColor: '#faf0e8'
}

const goodLuck = {
  color: '#35297f'
}

const quote = {
  color: '#ff6624'
}


class ChallengeContent extends Component {
 
  state = {
    why_matters: false,
    reflection: false, 
    action_steps: false,
  }


  componentDidMount() {
    this.props.dispatch({ type: 'GET_WEEKLY', payload: this.props.match.params })
  }

  handleWhy = (propertyName) => {
    this.setState({
      [propertyName]: !this.state.why_matters
    })
  }
  handleReflect = (propertyName) => {
    this.setState({
      [propertyName]: !this.state.reflection
    })
  }
  handleAction = (propertyName) => {
    this.setState({
      [propertyName]: !this.state.action_steps
    })
  }

  render() {
    return (

      <center >
        {/* <pre>
        {/* {JSON.stringify(this.state, null, 2)} */}
          {/* {JSON.stringify(this.props, null, 2)} */}
          {/* {JSON.stringify(this.props.reduxState.weeklyContentReducer.weeklyChallengeReducer, null, 2)} */}
        {/* </pre> */} 
        <header style={name} className="sign-up-header">
          Hello {this.props.reduxState.user.first_name}! <br />
          <div className="outerBar" style={this.outerBar}>
            <div className="innerBar" style={this.innerBar}></div>
          </div>
          <br />
        </header>
        <main>
          {this.props.reduxState.weeklyContentReducer.weeklyChallengeReducer.map((info,i) => {
            return (
          <div key={i}>
          <div style={welcomeDiv} className='welcomeDiv'>
            <h2 className='welcomeWeek'>Welcome to Week
            <span className='weekNumber'> {info.week} </span>
              of the "What to Say" Coaches Challenge!</h2>
            <p id='intro'>{info.intro}</p>
            <h2 >This week's "What to Say" phrase is : </h2>

            <p id='phrase'> {info.phrase} </p>
          </div>
          <div className='dropDownDiv'>

            <h2 style={matter}>Why does this phrase matter? <Icon onClick={() => { this.handleWhy('why_matters')}} name='chevron down' /></h2>
            {this.state.why_matters ?
            <div className='backgroundDiv'>
            <p className='dropdowns' style={dropDownDiv} >{info.why_matters}</p>
            </div>
            :
            <>
            </>}
            <h2 style={matter}>For your own reflection <Icon onClick={() => {this.handleReflect('reflection')}} name='chevron down' /></h2>
            {this.state.reflection ? 
            <div className='backgroundDiv'>
            <p className='dropdowns' style={dropDownDiv} >{info.reflection}</p>
            </div>
            :
            <>
            </>}
            <h2 style={matter}>Action steps options <Icon onClick={() => {this.handleAction('action_steps')}} name='chevron down' /></h2>
            {this.state.action_steps ?
            <div className='backgroundDiv'>
            <pre className='dropdowns'  >{info.action_steps}</pre>
            </div>
            :
            <>
            </> }
          </div>
          <div className="postDiv">
            <h2 style={goodLuck} >Good luck with this challenge!  Email any questions or suggestions to us</h2>
            <h2 style={quote}>"A good coach can change a game.  A great coach can change a life."
              -John Wooden
            </h2>
          </div>
          </div>
           ) })}

        </main>
      </center>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(ChallengeContent);
