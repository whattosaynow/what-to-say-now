import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AdminDetails from './AdminDetails';


//chart-js
import { Doughnut, Bar } from "react-chartjs-2";
//semantic-ui
import { Grid } from "semantic-ui-react";
//charts
import AgeGroupChart from './Charts/ageGroupChart';
import LearnedChart from './Charts/LearnedChart';
import FindChart from './Charts/FindChart';
import EncourageChart from './Charts/EncourageChart';
import PositiveEffectChart from './Charts/PositiveEffectChart';

class AdminCharts extends Component {
  state = {

  };

  componentDidMount(){
    // this.props.dispatch({ type: "GET_AGE_GROUP_DATA" }) // this will dispatch an action to store the ageGroup chart data
  }
  
  render() {

    return (
      <div className="chartDiv">
        <br />
        <AdminDetails /><br />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h2>Age Groups Targeted</h2>
              <AgeGroupChart ages={this.props.chartData.ageGroupReducer}/>
            </Grid.Column>
            <Grid.Column>
              <h2>How users found the challenge</h2>
              <FindChart />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <h2>
                I learned something new from participating in the Challenge
              </h2>
              <LearnedChart />
            </Grid.Column>
            <Grid.Column>
              <h2>
                I would encourage another coach I know to do the Challenge
              </h2>
              <EncourageChart />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <h2>
                The Challenge tools have positively affected my ability to
                interact with my team about body and food
              </h2>
              <PositiveEffectChart />
            </Grid.Column>
          </Grid.Row>
        </Grid><br />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default withRouter(connect(mapStateToProps)(AdminCharts));


