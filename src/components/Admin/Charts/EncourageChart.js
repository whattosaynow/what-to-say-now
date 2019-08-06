import React, { Component } from "react";

//chart-js
import { Doughnut } from "react-chartjs-2";

class EncourageChart extends Component {
  state = {
    encourageData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I would encourage another coach I know to do the Challenge",
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
        <Doughnut data={this.state.encourageData} />
      </div>
    );
  }
}

export default EncourageChart;
