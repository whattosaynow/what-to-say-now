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

  handleDrop = (propertyName) => {
    this.setState({
      [propertyName]: !this.state[propertyName]
    })
  }


  render() {
    return (

      <div>

        <header style={name} className="content-header">
          Hello, {this.props.reduxState.user.first_name}!
        </header>

        <main>

          {this.props.reduxState.weeklyContentReducer.weeklyChallengeReducer.map((info, i) => {
            return (

              <div key={i}>

                <div style={welcomeDiv} className='welcomeDiv'>
                  <h2 className='welcomeWeek'>Welcome to Week
                  <span className='weekNumber'> {info.week} </span>
                    of WithAll's "What to Say" Coaches Challenge!</h2>
                  <pre id='intro'>{info.intro}</pre>
                  <h2>This week's "What to Say" phrase is : </h2>
                  <p id='phrase'> {info.phrase} </p>
                </div>

                <div className='dropDownDiv'>
                  {this.state.why_matters ?

                    <>
                      <h2 onClick={() => { this.handleDrop('why_matters') }}
                        style={matter}>Why does this phrase matter?
                          <Icon name='chevron up' />
                      </h2>
                      <div className='backgroundDiv'>
                        <p className='dropdowns' style={dropDownDiv} >
                          {info.why_matters}
                        </p>
                      </div>
                    </>

                    :

                    <>
                      <h2 onClick={() => { this.handleDrop('why_matters') }}
                        style={matter}>
                        Why does this phrase matter?
                        <Icon name='chevron down' />
                      </h2>
                    </>}

                  {this.state.reflection ?

                    <>
                      <h2 onClick={() => { this.handleDrop('reflection') }}
                        style={matter}>
                        For your own reflection
                          <Icon name='chevron up' />
                      </h2>
                      <div className='backgroundDiv'>
                        <p className='dropdowns' style={dropDownDiv} >
                          {info.reflection}
                        </p>
                      </div>
                    </>

                    :

                    <>
                      <h2 onClick={() => { this.handleDrop('reflection') }}
                        style={matter}>For your own reflection
                          <Icon name='chevron down' />
                      </h2>
                    </>}

                  {this.state.action_steps ?
                    <>
                      <h2 onClick={() => { this.handleDrop('action_steps') }}
                        style={matter}>Action step options
                          <Icon name='chevron up' />
                      </h2>
                      <div className='backgroundDiv'>
                        <pre>{info.action_steps}</pre>
                      </div>
                    </>
                    :
                    <>
                      <h2 onClick={() => { this.handleDrop('action_steps') }}
                        style={matter}>
                        Action steps options
                          <Icon name='chevron down' />
                      </h2>
                    </>}

                </div>
                <br />
                <div className="postDiv">
                  <h2 style={goodLuck} >Good luck with this challenge! Email us at <a href="mailto:hello@withall.org">hello@withall.org</a> with anyquestions or suggestions.</h2><br />
                  <h2 style={quote}>"A good coach can change a game.  A great coach can change a life."
                    -John Wooden
                  </h2><br />
                </div>
              </div>
            )
          })}

        </main>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(ChallengeContent);
