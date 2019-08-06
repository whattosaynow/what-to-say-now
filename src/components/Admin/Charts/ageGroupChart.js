import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class AgeGroupChart extends Component {
  state = {
    ageData: {
      labels: ["6-10", "11-13", "14-18"],
      datasets: [
        {
          label: "Targeted Age Groups",
          data: [12, 19, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
          ],
          borderWidth: 1
        }
      ]
    }
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_AGE_GROUP_DATA" });
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.ageData} />
      </div>
    );
  }
}

export default connect()(AgeGroupChart);
