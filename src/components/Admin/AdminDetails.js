import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class AdminDetails extends Component {
  render() {
    return (
      <div>
        <p>
          <button>Click here to download CSV of user data</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminDetails));
