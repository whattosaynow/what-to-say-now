import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Bar } from "react-chartjs-2";

class FindChart extends Component {
  state = {
    findData: {
      
    }
  };

  findChartData = () => {
    let findLabels = [];
    let findChart=[];
    this.props.find.forEach(referral => {
     findLabels.push(referral.S1_how_did_you_find_us)
     findChart.push(referral.count);
    })
    const findData = {
      labels:findLabels,
      
      datasets: [
        {
          label: "How did you find us?",
          backgroundColor: [
            "#5297ff",
            "#e65ac4",
            "#ff4040",
            "#a05195",
            "#d45087",
            "#f95d6a",
            "#ff7c43",
            "#ffa600"
          ],
          data: findChart,
          borderWidth: 1,
          scaleStartValue: 0,
          
        }
        
      ]
    }
    return findData;
  }
options =  {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }]
  }
}

  
    

  render() {
    return (
      <div>
        <Bar data={this.findChartData} options={this.options} />
      </div>
    );
  }
}

export default connect()(FindChart);
