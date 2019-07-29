import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {
componentDidMount () {
  this.props.dispatch({type: `FETCH_NUMBERS`})
}

handleClick = () => {
  this.props.dispatch({type:`SEND_MESSAGES`, payload: this.props.state.numbersReducer})
}

  render() {
    return (
      <div>
        <p>
          Info Page
        </p>
        <button onClick={this.handleClick}>Send Messages</button>
        <pre>
          {JSON.stringify(this.props.state.numbersReducer, null, 2)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state:state
});

export default connect (mapStateToProps)(InfoPage);
