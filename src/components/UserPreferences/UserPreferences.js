import React, { Component } from "react";


class UserPreferences extends Component {
    render(){
        return (
          <div>
            <h1>Update Preferences</h1>
            <input
              //   onChange={this.handleChange("email")}
              label="Email"
              placeholder="Email"
              //   value={this.state.value}
            />
            <br />
            <br />
            <label>
              Update how you want to receive the Challenges: 
            </label>
            <br />
            <input
            //   onChange={this.handleChangeFor("choose_receive")}
              className="question"
              type="radio"
              name="receive"
              value="email"
            />
            Email
            <br />
            <input
            //   onChange={this.handleChangeFor("choose_receive")}
              type="radio"
              name="receive"
              value="text"
            />
            Text
            <br />
            <input
            //   onChange={this.handleChangeFor("choose_receive")}
              type="radio"
              name="receive"
              value="both"
            />
            Both
            <br />
            <br />
            <button>Delete My Account</button>
          </div>
        );
    }
}

export default UserPreferences;