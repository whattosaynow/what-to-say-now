import React, { Component } from 'react';
import { Doughnut, Bar } from "react-chartjs-2";

class PostSurvey_1 extends Component {
  state = {
    //this is an example of how data must be formatted
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
    },

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
    },

    learnedData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I learned something new from participating in the Challenge",
          data: [12, 19, 3],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    },

    encourageData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label: "I would encourage another coach I know to do the Challenge",
          data: [12, 19, 3],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    },

    positiveEffectData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label:
            "The Challenge tools have positively affected my ability to interact with my team about body and food",
          data: [12, 19, 3],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    }
  };
  render() {
    return (
      <div>
        {/* this is how to create a chart.js component and source in the data */}
        <h2>Age Groups Targeted</h2>
        <Bar data={this.state.ageData} />
        <h2>How users found the challenge</h2>
        <Doughnut data={this.state.findData} />
        <h2>I learned something new from participating in the Challenge</h2>
        <Doughnut data={this.state.learnedData} />
        <h2>I would encourage another coach I know to do the Challenge</h2>
        <Doughnut data={this.state.encourageData} />
        <h2>
          The Challenge tools have positively affected my ability to
          interact with my team about body and food
        </h2>
        <Doughnut data={this.state.positiveEffectData} />
      </div>
    );
  }
}

export default PostSurvey_1;
