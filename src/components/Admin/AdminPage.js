import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//css styling
import './Admin.css';

//components
import AdminCharts from './AdminCharts';
import AdminDetails from './AdminDetails';
import AdminEdit from './AdminEdit';

class Admin extends Component {
  //on page load
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CSV' }) // this will dispatch an action to store all of the user table info in a reducer to download as csv
    this.props.dispatch({ type: "GET_AGE_GROUP_DATA" }) // this will dispatch an action to store the ageGroup chart data
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
      {/* <pre>{JSON.stringify(this.props.reduxState.chartReducer, null, 2)}</pre>  */}
        <div className="links">
          <h2>
            <ul className="nav-list">
              <li onClick={() => { this.handleClick('Charts') }}><u>Charts</u></li> 
              <li onClick={() => { this.handleClick('Details') }}><u>Details</u></li>
              <li onClick={() => { this.handleClick('Edit') }}><u>Edit</u></li>
              {/* onClick of each word changes the state which updates what is displayed */}
            </ul>
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
        {this.state.display === 'Details' ?
          <>
          <AdminDetails /> {/* This is the AdminDetails component. If this.state.display is Details, it will show on the admin homepage */}
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
