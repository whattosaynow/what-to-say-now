import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class EncourageChart extends Component {
  state = {
    encourageData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I would encourage another coach I know to do the Challenge",
          data: [15, 14, 10],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    }
  };

  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <Doughnut data={this.state.encourageData} />
      </div>
    );
  }
}

export default connect()(EncourageChart);
