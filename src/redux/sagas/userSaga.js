import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* setUserContent(action) {
  try {
      const response = yield axios.get('/api/user/content');
      yield put ({type: 'SET_USER_CONTENT', payload: response.data})
  } catch (error) {
      console.log('error with setAdminEdit saga,', error);
  }
}

function* getWeeklyContent(action) {
  try {
    const response = yield axios.get(`/api/user/weekly/${action.payload.role}/${action.payload.week}/${action.payload.age}`);
    yield put ({type: 'SET_WEEKLY_CONTENT', payload: response.data})
    console.log(response.data);
    
  } catch (error) {
    console.log('error with setAdminEdit saga,', error);
}
}

function* userSaga() {
  yield takeLatest('GET_WEEKLY', getWeeklyContent)
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('GET_CONTENT', setUserContent)
}

export default userSaga;
