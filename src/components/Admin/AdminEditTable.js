import React, { Component } from 'react';

class AdminEditTable extends Component {
  render() {
    return (
      <>
        <li>Week {this.props.content.week}</li><br />
        This week's "What to Say" phrase is:<br />
        <textarea rows="10" cols="200" value={this.props.content.intro}></textarea><br />
        <br />
        Why does this phrase matter?<br />
        <textarea rows="10" cols="200" value={this.props.content.why_matters}></textarea><br />
        <br />
        For Your Own Reflection<br />
        <textarea rows="10" cols="200" value={this.props.content.reflection}></textarea><br />
        <br />
        Action Step Options<br />
        <textarea rows="10" cols="200" value={this.props.content.action_steps}></textarea><br />
      </>
    );
  }
}

export default AdminEditTable;
