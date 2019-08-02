import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class AdminEditTable extends Component {
  state = {
    ...this.props.content
  }

  handleChange = (properyName) => (event) => {
    this.setState({
      [properyName]: event.target.value
    })
  }

  handleSubmit = () => {
    let update = Object.keys(this.state)
    let updateLength = update.length
    if (updateLength < 8) {
      alert('no')
    } else {
      this.props.dispatch({ type: 'UPDATE_CONTENT', payload: this.state })
      alert('yes')
    }
  }

  render() {
    return (
      <>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <li>Week {this.state.week}</li><br />
        <button onClick={this.handleSubmit}>Submit</button><br />br />
        This week's "What to Say" phrase is:<br />
        <textarea rows="10" cols="200" onChange={this.handleChange('intro')} value={this.state.intro}></textarea><br />
        <br />
        Why does this phrase matter?<br />
        <textarea rows="10" cols="200" onChange={this.handleChange('why_matters')} value={this.state.why_matters}></textarea><br />
        <br />
        For Your Own Reflection<br />
        <textarea rows="10" cols="200" onChange={this.handleChange('reflection')} value={this.state.reflection}></textarea><br />
        <br />
        Action Step Options<br />
        <textarea rows="10" cols="200" onChange={this.handleChange('action_steps')} value={this.state.action_steps}></textarea><br />
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminEditTable));
