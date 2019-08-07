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
    // let ageGroup1 = 0;
    // let ageGroup2 = 0; 
    // let ageGroup3 = 0; 
    // this.props.reduxState.chartReducer.ageGroupReducer.map(object => {
    //   if (object.S1_focus_ages === 1) {
    //     ageGroup1 = object.count;
    //   } else if (object.S1_focus_ages === 2) {
    //     ageGroup2 = object.count;
    //   } else if (object.S1_focus_ages === 3) {
    //     ageGroup3 = object.count;
    //   }
    //   console.log(ageGroup1, ageGroup2, ageGroup3);
    // })
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.ageData} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(AgeGroupChart);
