import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AdminEditTable from './AdminEditTable';

class AdminDetails extends Component {
  state = {
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_EDIT_CONTENT' })
  }

  handleClick = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  render() {
    return (
      <>
        <header>
          {/* <button onClick={this.handleSubmit}>Submit</button> */}
          <center><button onClick={this.handleClick('role')} value="1">Coach</button><button onClick={this.handleClick('role')} value="2">Pediatrician</button><button onClick={this.handleClick('role')} value="3">Parents</button></center><br />
          <center><button onClick={this.handleClick('age')} value="1">Ages 6-9</button><button onClick={this.handleClick('age')} value="2">Ages 10-13</button><button onClick={this.handleClick('age')} value="3">Ages 14-18</button></center>
        </header>
        <div>
          <ul>
            <li><button onClick={this.handleClick('week')} value="1">Week 1</button></li>
            <li><button onClick={this.handleClick('week')} value="2">Week 2</button></li>
            <li><button onClick={this.handleClick('week')} value="3">Week 3</button></li>
            <li><button onClick={this.handleClick('week')} value="4">Week 4</button></li>
            <li><button onClick={this.handleClick('week')} value="5">Week 5</button></li>
          </ul>
        </div>
        <br /><br />
        <div>
          <ul>
            {this.state.role && this.state.age && this.state.week ?
              <>
                {this.props.reduxState.adminReducer.editContentReducer.map(content => {
                  if ((Number(this.state.role) === Number(content.role_id)) && (Number(this.state.age) === Number(content.ageGroup_id)) && (Number(this.state.week) === Number(content.week))) {
                    return <AdminEditTable content={content} key={content.id}/>
                  }
                }
                )}
              </>
              :
              <>
              <AdminEditTable />
              </>
            }
          </ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminDetails));
