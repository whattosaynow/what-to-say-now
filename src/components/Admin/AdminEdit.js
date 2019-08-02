import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class AdminDetails extends Component {
  state = {
    role: '',
    age: '',
    week: ''
  }

  handleClick = (propertyName) => (event) => {
    console.log('event.target.value:', event.target.value)
    this.setState({
      [propertyName]: event.target.value
    })
  }

  render() {
    return (
      <>
        <header>
          <center><button onClick={this.handleClick('role')} value="1">Coach</button><button onClick={this.handleClick('role')} value="2">Pediatrician</button><button onClick={this.handleClick('role')} value="3">Parents</button></center><br />
          <center><button>Ages 6-9</button><button>Ages 10-13</button><button>Ages 14-18</button></center>
        </header>
        <div>
          <ul>
            <li><button>Week 1</button></li>
            <li><button>Week 2</button></li>
            <li><button>Week 3</button></li>
            <li><button>Week 4</button></li>
            <li><button>Week 5</button></li>
          </ul>
        </div>
        <div></div>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre><br /><br />
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminDetails));
