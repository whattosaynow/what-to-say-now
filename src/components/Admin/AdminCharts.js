import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";

class PostSurvey_1 extends Component {
  state = {
    //this is an example of how data must be formatted
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    }
  };
  render() {
    return (
      <div>
        {/* this is how to create a chart.js component and source in the data */}
        <Doughnut data={this.state.data} />
      </div>
    );
  }
}

export default PostSurvey_1;
