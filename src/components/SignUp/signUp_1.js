import React, { Component } from 'react';
import { connect } from 'react-redux';

//component
import Header from './signUp_header';


class signUp_1 extends Component {
  state = {
    newUser: {
      role: 1,
    }
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      newUser: {...this.state.newUser, [propertyName]: event.target.value}
    })
  }

  handleClick = () => {
    console.log('next is clicked')
    let answers = Object.keys(this.state.newUser)
    let answersLength = answers.length
    if (answersLength < 11) {
      alert('Please complete every answer')
    } else {
      this.props.dispatch({type: 'SET_SIGNUP_ANSWERS', payload: this.state.newUser});
      console.log('this.state.newUser:', this.state.newUser)
      this.setState({
        newUser: {
          role: 1,
        }
      })
      document.getElementById("signUp1").reset();
      this.props.history.push('/signup2');
    }

  }

  render() {
    return (
      <center>
        <Header width={'20%'} /><br />
        <div>
          <h2>Personal Information</h2>
          <form id="signUp1" style={{backgroundColor: "white"}}>
            <input onChange={this.handleChange('first_name')} label="First Name" placeholder="First Name" value={this.state.value}></input><br />
            <input onChange={this.handleChange('last_name')} label="Last Name" placeholder="Last Name" value={this.state.value}></input><br />
            <input onChange={this.handleChange('username')} label="Username" placeholder="Username" value={this.state.value}></input><br />
            <input onChange={this.handleChange('email')} label="Email" placeholder="Email" value={this.state.value}></input><br />
            <input onChange={this.handleChange('password')} type="password" label="Password" placeholder="Password" value={this.state.value}></input><br />
            <input onChange={this.handleChange('phone_number')} label="Phone Number" placeholder="Phone Number" value={this.state.value}></input><br />
            <input onChange={this.handleChange('street_address')} label="Street Address" placeholder="Street Address" value={this.state.value}></input><br />
            <input onChange={this.handleChange('city')} label="City" placeholder="City" value={this.state.value}></input><br />
            <input onChange={this.handleChange('state')} label="State" placeholder="State" value={this.state.value}></input><br />
            <input onChange={this.handleChange('zip')} label="Zip" placeholder="Zip" value={this.state.value}></input><br />
          </form>
        </div><br /><br /><br />
        <div className="bottom-signup">
          <button onClick={this.handleClick}>Next</button>
        </div>

      </center>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(signUp_1);
