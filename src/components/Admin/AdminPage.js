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
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CSV' })
  }

  state = {
    display: 'Charts'
  }

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
            <ul className="nav-list">
              <li onClick={() => { this.handleClick('Charts') }}><u>Charts</u></li>
              <li onClick={() => { this.handleClick('Details') }}><u>Details</u></li>
              <li onClick={() => { this.handleClick('Edit') }}><u>Edit</u></li>
            </ul>
          </h2>
        </div>
        <div>
          {this.state.display === 'Charts' ?
          <>
          <AdminCharts />
          </>
          :
          <>
          </>  
        }
        {this.state.display === 'Details' ?
          <>
          <AdminDetails />
          </>
          :
          <>
          </>  
        }
        {this.state.display === 'Edit' ?
          <>
          <AdminEdit />
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
