import React, { Component } from 'react';

class AdminEditTable extends Component {
  render() {
    return (
      <>
      <li>Text Message:</li>
      <input></input>
      <li>Week 1 hardcoded</li>
      Intro Text<br />
      <input></input><br />
      <br />
      This week's "What to Say" phrase is:<br />
      <input></input><br />
      <br />
      Why does this phrase matter?<br />
      <input></input><br />
      <br />
      For Your Own Reflection<br />
      <input></input><br />
      <br />
      Action Step Options<br />
      <input></input><br />
      <br />
      {this.props.content.action_steps}
      <br /><b>end one object</b><br /><br /><br />
      </>
    );
  }
}

export default AdminEditTable;
