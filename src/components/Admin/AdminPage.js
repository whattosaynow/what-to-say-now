import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from "semantic-ui-react";

//css styling
import './Admin.css';

//components
import AdminCharts from './AdminCharts';
import AdminEdit from './AdminEdit';

class Admin extends Component {
  //on page load
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CSV' }) // this will dispatch an action to store all of the user table info in a reducer to download as csv
    this.props.dispatch({ type: "GET_AGE_GROUP_DATA" }) // this will dispatch an action to store the ageGroup chart data
    this.props.dispatch({ type: "GET_ENCOURAGE_DATA" })
    this.props.dispatch({ type: "GET_FIND_DATA" })
    this.props.dispatch({ type: "GET_LEARNED_DATA" })
    this.props.dispatch({ type: "GET_POSITIVE_EFFECT_DATA" })
  }

  
  //the initial stat is charts, as on page load that is what we want to display
  state = {
    display: 'Charts'
  }

  //this changes this.state.display to whatever is clicked, which updates what is displayed
  handleClick = (string) => {
    this.setState({
      display: string
    })
  }

  

  render() {
    return (
      <>
      
        <div className="links">
          <h2>
            <Button.Group fluid className="nav-list">
              <Button onClick={() => { this.handleClick('Charts') }}><u>Charts</u></Button> 
              <Button onClick={() => { this.handleClick('Edit') }}><u>Edit</u></Button>
              {/* onClick of each word changes the state which updates what is displayed */}
            </Button.Group>
          </h2>
        </div>
        <div>
          {this.state.display === 'Charts' ?
          <>
          <AdminCharts chartData={this.props.reduxState.chartReducer} /> {/* This is the AdminCharts component. If this.state.display is charts, it will show on the admin homepage */}
          </>
          :
          <>
          </>  
        }
        {this.state.display === 'Edit' ?
          <>
          <AdminEdit /> {/* This is the AdminEdit component. If this.state.display is Edit, it will show on the admin homepage */}
          </>
          :
          <>
          </>  
        }
        </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(Admin));
