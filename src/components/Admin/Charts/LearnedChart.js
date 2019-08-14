import React, { Component } from "react";
import { connect } from "react-redux";
//chart-js
import { Doughnut } from "react-chartjs-2";

class LearnedChart extends Component {
  state = {
    learnedData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I learned something new from participating in the Challenge",
          data: [10, 13, 3],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    }
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_LEARNED_DATA" });
  }
  
  render() {
    return (
      <div>
        <Doughnut data={this.state.learnedData} />
      </div>
    );
  }
}

export default connect()(LearnedChart);
