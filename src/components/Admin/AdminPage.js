import React, { Component } from 'react';

//css styling
import './Admin.css';

//components
import AdminCharts from './AdminCharts';
import AdminDetails from './AdminDetails';
import AdminEdit from './AdminEdit';

class Admin extends Component {
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
        <p>
          Admin Page
        </p>
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

export default Admin;
