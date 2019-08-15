import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';


//chart-js
import { Doughnut } from "react-chartjs-2";

class AgeGroupChart extends Component {
  

  ageChartData = () => {
    let agesArray = [];
    this.props.ages.forEach(object => {
      agesArray.push(object.count)
      console.log(agesArray);
      

    })
    const ageData = {
      labels: ["6-9", "10-13", "14-18"],
      legend: {
        display: false
      },
      datasets: [{
        label: "Targeted Age Groups",
        backgroundColor: [
          "#5297ff", "#e65ac4", "#ff4040"
        ],
        borderWidth: 1,
        barPercentage: 0,
        data: agesArray
      }]
    }
    return ageData;
  }




  render() {
    return (


      <div>
        {/* {this.mapChartData()} */}
        <Doughnut
          data={this.ageChartData}
        />
        {/* <pre>
          {JSON.stringify(this.props.ageGroupReducer, null, 2)}
        </pre> */}
      </div>

    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,

});

export default withRouter(connect(mapStateToProps)(AgeGroupChart));
