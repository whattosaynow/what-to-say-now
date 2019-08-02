import React, { Component } from 'react';

class AdminEditTable extends Component {
  state={
    ...this.props.content
  }

  handleChange = (properyName) => (event) => {
    this.setState({
      [properyName]: event.target.value
    })
  }
  render() {
    return (
      <>
      {/* <pre>
        {JSON.stringify(this.state, null, 2)}
      </pre> */}
        <li>Week {this.state.week}</li><br />
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

export default AdminEditTable;
