import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        console.log('submitResponse saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        
        yield axios.post('/api/answer/signup', action.payload);
        // console.log('getResponse saga:', getResponse)
    } catch(error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitThreeMonthAnswer(action) {
    try {
        console.log('submitThreeMonthAnswer saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        
        yield axios.post('/api/answer/threeMonth', action.payload);
        // console.log('getResponse saga:', getResponse)
    } catch(error) {
        console.log('error with submitting threeMonth answers,', error);
    }
}
function* submitPostAnswers(action) {
  try {
    console.log("submitResponse saga hit");
    yield axios.post("/api/answer/postSurvey", action.payload);
  } catch (error) {
    console.log("error with submitting answers,", error);
  }
}

function* submitAnswerSaga(){
    yield takeLatest(`SUBMIT_SIGNUP_ANSWERS`, submitSignUpAnswers);
    yield takeLatest(`SUBMIT_THREE_MONTH_ANSWERS`, submitThreeMonthAnswer)
    yield takeLatest(`SUBMIT_POST_ANSWERS`, submitPostAnswers)
}

export default submitAnswerSaga;