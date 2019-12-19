import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class EncourageChart extends Component {
  encourageChartData = () => {
    let encourageLabels = [];
    let encourageArray = [];
    this.props.encourage.forEach(object => {
      encourageLabels.push(object.S2_would_encourage)
      encourageArray.push(object.count)
    })
    const encourageData = {
      labels: encourageLabels,
      legend: {
        display: false
      },
      datasets: [{
        label: "Would you encourage another coach?",
        backgroundColor: [
          "#5297ff", "#e65ac4", "#ff4040"
        ],
        borderWidth: 1,
        barPercentage: 0,
        data: encourageArray
      }]
    }
    return encourageData;
  }

  render() {
    return (
      <div>
        <Doughnut data={this.encourageChartData} />
      </div>
    );
  }
}

export default connect()(EncourageChart);
