import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import numbersSaga from './numbersSaga';
import submitAnswerSaga from './submitAnswerSaga';
import adminSaga from './adminSaga';
import updateUserPrefsSaga from './updateUserPrefsSaga';
import chartSaga from './chartSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    numbersSaga(),
    submitAnswerSaga(),
    adminSaga(),
    updateUserPrefsSaga(),
    chartSaga(), //deals with information related to charts visualized at admin /home
  ]);
}
