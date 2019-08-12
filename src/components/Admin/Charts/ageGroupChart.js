import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';


//chart-js
import { Doughnut } from "react-chartjs-2";

class AgeGroupChart extends Component {
  // state = {
  //   ageData: {
  //     labels: ["6-9", "10-13", "14-18"],
  //     datasets: [
  //       {
  //         label: "Targeted Age Groups",
  //         data: [],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)"
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)"
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   }
  // };

  // componentDidMount(){
  //   this.mapChartData();

  // }

  // ***WORKING ON PROPING IN DATA FROM ADMIN PAGE TO ADMIN CHART AND FINALLY TO AGE GROUP CHART
  // IN ORDER TO GET THE INFORMATION TO LOAD, BUT GETTING TONS OF ERRORS. START HERE***

  // mapChartData = () => {
  //   console.log('agesArray', agesArray);

  // let agesArray = [];
  //    this.props.ages.map(object => {

  //       if (object.S1_focus_ages === 1) {
  //         agesArray.push(object.count);
  //       } else if (object.S1_focus_ages === 2) {
  //         agesArray.push(object.count);
  //       } else if (object.S1_focus_ages === 3) {
  //         agesArray.push(object.count);
  //       } 
  //       return this.setState({
  //       ageData:{
  //         label:this.state.ageData.label,
  //         datasets: [
  //           {
  //           ...this.state.ageData.datasets[0],
  //           data: agesArray
  //         }
  //       ]


  //       }
  //   })
  // })
  // }
  ageChartData = () => {
    let agesArray = [];
    this.props.ages.forEach(object => {
      agesArray.push(object.count)

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
  ageGroupReducer: reduxState.chartReducer.ageGroupReducer,
});

export default withRouter(connect(mapStateToProps)(AgeGroupChart));
