import React, { Component } from "react";
import { connect } from "react-redux";

//chart-js
import { Doughnut } from "react-chartjs-2";

class PositiveEffectChart extends Component {
  state = {
    positiveEffectData: {
      labels: ["Agree", "Neutral", "Disagree"],
      datasets: [
        {
          label:
            "The Challenge tools have positively affected my ability to interact with my team about body and food",
          data: [15, 10, 5],
          backgroundColor: ["#5297ff", "#e65ac4", "#ff4040"],
          borderWidth: 1
        }
      ]
    }
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_POSITIVE_EFFECT_DATA" });
  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.positiveEffectData} />
      </div>
    );
  }
}

export default connect()(PositiveEffectChart);
