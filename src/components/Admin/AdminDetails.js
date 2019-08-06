import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//semantic-ui
import { Button } from "semantic-ui-react";

class AdminDetails extends Component {

  objectToCsv = (data) => {
    const csvRows = [];

    //get headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    //loop over the rows
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = (''+row[header]).replace(/"/g, '\\"')
        return `"${escaped}"`;
      })
      csvRows.push(values.join(','))
    }

    //form escaped comma separated values
    return this.download(csvRows.join('\n'));
  }

  download = (data) => {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }

  render() {
    return (
      <div className="csvDiv">
        <center>
          <p className="csvInner">
            <Button
              onClick={() =>
                this.objectToCsv(
                  this.props.reduxState.adminReducer.csvReducer
                )
              }
            >
              Click here to download CSV of user data
            </Button>
          </p>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapStateToProps)(AdminDetails));
