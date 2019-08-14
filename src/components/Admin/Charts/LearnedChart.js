import React, { Component } from "react";
import { connect } from "react-redux";
//chart-js
import { Doughnut } from "react-chartjs-2";

class LearnedChart extends Component {
  learnedChartData = () => {
    let learnedLabels = [];
    let learnedArray = [];
    this.props.learned.forEach(object => {
      learnedLabels.push(object.S2_would_encourage)
      learnedArray.push(object.count)
      console.log(learnedArray);
      

    })
    const learnedData = {
      labels: learnedLabels,
      legend: {
        display: false
      },
      datasets: [{
        label: "Learned something",
        backgroundColor: [
          "#5297ff", "#e65ac4", "#ff4040"
        ],
        borderWidth: 1,
        barPercentage: 0,
        data: learnedArray
      }]
    }
    return learnedData;
  }

  
  render() {
    return (
      <div>
        <Doughnut data={this.learnedData} />
      </div>
    );
  }
}

export default connect()(LearnedChart);
