import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class FindChart extends Component {
  state = {
    findData: {
      labels: [
        "Girls on the Run",
        "Wayzata Girls Basketball Association",
        "The Loppet Foundation",
        "Fusion Soccer Club MN",
        "Tia Russell Dance Studio",
        "Internet search",
        "Referral",
        "Other"
      ],
      datasets: [
        {
          label: "How did you find us?",
          data: [12, 19, 3, 8, 17, 9, 2, 12],
          backgroundColor: [
            "#003f5c",
            "#2f4b7c",
            "#665191",
            "#a05195",
            "#d45087",
            "#f95d6a",
            "#ff7c43",
            "#ffa600"
          ],
          borderWidth: 1
        }
      ]
    }
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_FIND_DATA" });
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.findData} />
      </div>
    );
  }
}

export default connect()(FindChart);
