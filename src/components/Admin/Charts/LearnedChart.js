import React, { Component } from "react";
//chart-js
import { Doughnut } from "react-chartjs-2";

class LearnedChart extends Component {
  state = {
    learnedData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I learned something new from participating in the Challenge",
          data: [12, 19, 3],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <Doughnut data={this.state.learnedData} />
      </div>
    );
  }
}

export default LearnedChart;
