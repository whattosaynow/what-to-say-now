import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, TextArea, Form } from "semantic-ui-react";

//sweetAlert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class AdminEditTable extends Component {
  state = {
    ...this.props.content,
  }

  handleChange = (properyName) => (event) => {
    this.setState({
      [properyName]: event.target.value
    })
  }

  handleSecret = () => {
    this.setState({
      ...this.state,
      intro: "Thank you so much for being a part of the “What to Say” initiative. Your help is very appreciated!\n\nWe hope you have enjoyed the program and are seeing great succes and we look forward to hearing back from you next week!"
    })
  }

  handleSubmit = () => {
    let update = Object.keys(this.state)
    let updateLength = update.length
    if (updateLength < 8) {
      MySwal.fire({
        title: 'Error',
        text: `Please select a role, age group, and week`,
        type: 'Error',
        confirmButtonText: 'Ok'
      })
    } else {
      this.props.dispatch({ type: 'UPDATE_CONTENT', payload: this.state })
      MySwal.fire({
        title: 'Updated',
        text: `Your changes have been saved to the database`,
        type: 'Success',
        confirmButtonText: 'Ok'
      })
    }
  }

  render() {
    return (
      <>
        <Form>
          <Form.Field>
            <label onClick={this.handleSecret}>Welcome to Week {this.state.week} of the "What to Say" Coaches Challenge!</label>
            <TextArea
              rows="5"
              cols="200"
              onChange={this.handleChange("intro")}
              value={this.state.intro}
            />
          </Form.Field>
          <Form.Field>
            <label>This week's "What to Say" phrase is:</label>
            <TextArea
              rows="5"
              cols="200"
              onChange={this.handleChange("phrase")}
              value={this.state.phrase}
            />
          </Form.Field>
          <Form.Field>
            <label>Why does this phrase matter?</label>
            <TextArea
              rows="5"
              cols="200"
              onChange={this.handleChange("why_matters")}
              value={this.state.why_matters}
            />
          </Form.Field>
          <Form.Field>
            <label>For Your Own Reflection</label>
            <TextArea
              rows="5"
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
        <center>
          <h3>Week: {this.state.week}</h3>

          <Button onClick={this.handleSubmit}>Submit</Button>
        </center>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminEditTable));
