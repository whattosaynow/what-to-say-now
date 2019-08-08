import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, TextArea, Form } from "semantic-ui-react";

class AdminEditTable extends Component {
  state = {
    ...this.props.content,
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
        <center>
          <h3>Week: {this.state.week}</h3>
          
          <Button onClick={this.handleSubmit}>Submit</Button>
        </center>
        <Form>
          <Form.Field>
            <label>This week's "What to Say" phrase is:</label>
            <TextArea
              rows="10"
              cols="200"
              onChange={this.handleChange("intro")}
              value={this.state.intro}
            />
          </Form.Field>
          <Form.Field>
            <label>Why does this phrase matter?</label>
            <TextArea
              rows="10"
              cols="200"
              onChange={this.handleChange("why_matters")}
              value={this.state.why_matters}
            />
          </Form.Field>
          <Form.Field>
            <label>For Your Own Reflection</label>
            <TextArea
              rows="10"
              cols="200"
              onChange={this.handleChange("reflection")}
              value={this.state.reflection}
            />
          </Form.Field>

          <Form.Field>
            <label>Action Step Options</label>
            <TextArea
              rows="10"
              cols="200"
              onChange={this.handleChange("action_steps")}
              value={this.state.action_steps}
            />
          </Form.Field>
        </Form>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminEditTable));
