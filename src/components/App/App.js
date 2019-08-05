import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

//Pages
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import UserPreferences from '../UserPreferences/UserPreferences';
import InfoPage from '../InfoPage/InfoPage';
//sign-up survey pages
import signUp_1 from '../SignUp/signUp_1';
import signUp_2 from '../SignUp/signUp_2';
import signUp_3 from '../SignUp/signUp_3';
import signUp_4 from '../SignUp/signUp_4';
import signUp_5 from '../SignUp/signUp_5';
//post survey pages
import postSurvey_1 from '../PostSurvey/PostSurvey_1';
import postSurvey_2 from '../PostSurvey/PostSurvey_2';
import postSurvey_3 from "../PostSurvey/PostSurvey_3";
//Admin page
import Admin from '../Admin/AdminPage';


import './App.css';
import ThreeMonthSurvey from '../ThreeMonthSurvey/ThreeMonthSurvey';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          <Route exact path="/about" component={AboutPage} />
      
          {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
          <ProtectedRoute exact path="/info" component={InfoPage} />

          {/* Conditionally render which pages are available based on whether user is an admin */}
          {this.props.reduxState.user.is_admin ? (
          <>
          {/* routes available to admin */}
          {/* Admin page */}
          <ProtectedRoute exact path="/home" component={Admin} />
          </> 
          ):(
          // routes available to user
          <>
          <ProtectedRoute exact path="/home" component={UserPage} />
          <ProtectedRoute exact path='/user-profile' component={UserPage}/>
          <ProtectedRoute exact path='/user-preferences' component={UserPreferences}/>
          <Route exact path="/signup1" component={signUp_1} />
          <Route exact path="/signup2" component={signUp_2} />
          <Route exact path="/signup3" component={signUp_3} />
          <Route exact path="/signup4" component={signUp_4} />
          <Route exact path="/signup5" component={signUp_5} />
          <ProtectedRoute exact path="/three-month-survey" component={ThreeMonthSurvey} />
          {/* post survey routes */}
          <ProtectedRoute exact path="/postsurvey1" component={postSurvey_1} />
          <ProtectedRoute exact path="/postsurvey2" component={postSurvey_2} />
          <ProtectedRoute exact path="/postsurvey3" component={postSurvey_3} />
          </>)}
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
        {/* <Footer /> */}
        {/* {JSON.stringify(this.props.reduxState.user, null, 2)} */}
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(App);
