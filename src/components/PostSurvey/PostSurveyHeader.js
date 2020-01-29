import React, { Component } from 'react';

class PostSurveyHeader extends Component {
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
                <p>Thank you for participating in WithAll's "What to Say" Coaches Challenge. </p>
                <p>Please fill out this brief survey about your experience.</p>
                <div className="outerBar" style={this.outerBar}>
                    <div className="innerBar" style={this.innerBar} />
                </div>
                <br />
            </header>
        );
    }
}

export default PostSurveyHeader;
