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

  MyComponent = (content) => {
    let markup = { __html: content }
    return <pre dangerouslySetInnerHTML={markup} />;
  }


  render() {
    return (

      <div className="challenge-div">

        <header style={name} className="content-header">
          <p>Hello, {this.props.reduxState.user.first_name}!</p>
        </header>

        <main>

          {this.props.reduxState.weeklyContentReducer.weeklyChallengeReducer.map((info, i) => {
            return (

              <div key={i}>

                <div style={welcomeDiv} className='welcomeDiv'>
                  <h2 className='welcomeWeek'>Welcome to Week
                  <span className='weekNumber'> {info.week} </span>
                    of WithAll's "What to Say" Coaches Challenge!</h2>
                  {this.MyComponent(info.intro)}
                  <h2>This week's "What to Say" phrase is : </h2>
                  <div id='phrase'> {this.MyComponent(info.phrase)} </div>
                </div>

                <div className='dropDownDiv'>
                  {this.state.why_matters ?

                    <>
                      <h2 onClick={() => { this.handleDrop('why_matters') }}
                        style={matter}>Why does this phrase matter?
                          <Icon name='chevron up' />
                      </h2>
                      <div className='backgroundDiv'>
                        {this.MyComponent(info.why_matters)}
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
                        {this.MyComponent(info.reflection)}
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
                        {this.MyComponent(info.action_steps)}
                      </div>
                    </>
                    :
                    <>
                      <h2 onClick={() => { this.handleDrop('action_steps') }}
                        style={matter}>
                        Action step options
                          <Icon name='chevron down' />
                      </h2>
                    </>}

                </div>
                <br />
                <div className="postDiv">
                  <h2 style={goodLuck} >Good luck with this challenge! Email us at <a href="mailto:hello@withall.org">hello@withall.org</a> with any questions or suggestions.</h2><br />
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
