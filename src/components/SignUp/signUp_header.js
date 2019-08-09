import React, { Component } from 'react';

class signUp_header extends Component {
    outerBar = {
        backgroundColor: 'white',
        width: '300px',
        height: '30px',
        border: "1px solid black",
        borderRadius: '10px',
    }

    innerBar = {
        backgroundColor: "green",
        width: this.props.width,
        height: '28px',
        overflow: 'hidden',
        float: 'left',
        borderRadius: '9px',
    }

    render() {
        return (
          <header className="sign-up-header">
            <p>
              Thank you for participating in WithAll's "What To Say"
              Coaches Challenge.
            </p>
            <p>Please fill out the following form to participate.</p>
            
            <div className="outerBar" style={this.outerBar}>
              <div className="innerBar" style={this.innerBar} />
            </div>
            <br />
          </header>
        );
    }
}

export default signUp_header;
