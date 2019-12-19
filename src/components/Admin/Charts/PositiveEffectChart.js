import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class PositiveEffectChart extends Component {
  positiveEffectChartData = () => {
    let positiveLabels = [];
    let positiveEffectArray = [];
    this.props.impact.forEach(object => {
      positiveLabels.push(object.S2_challenge_impacted_behavior)
      positiveEffectArray.push(object.count)
    })
    const positiveData = {
      labels: positiveLabels,
      legend: {
        display: false
      },
      datasets: [{
        label: "The Challenge tools have positively affected my ability to interact with my team about body and food",
        backgroundColor: [
          "#5297ff", "#e65ac4", "#ff4040"
        ],
        borderWidth: 1,
        barPercentage: 0,
        data: positiveEffectArray
      }]
    }
    return positiveData;
  }

  render() {
    return (
      <div>
        <Doughnut data={this.positiveEffectChartData} />
      </div>
    );
  }
}

export default connect()(PositiveEffectChart);
