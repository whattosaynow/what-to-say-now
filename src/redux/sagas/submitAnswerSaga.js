import axios from "axios";
<<<<<<< HEAD
import { put, takeLatest } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        // console.log(getResponse)
        yield axios.post('/api/answer', action.payload);
=======
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        console.log('submitResponse saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        
        yield axios.post('/api/answer/signup', action.payload);
        // console.log('getResponse saga:', getResponse)
>>>>>>> master
    } catch(error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitAnswerSaga(){
<<<<<<< HEAD
    yield takeLatest("SUBMIT_SIGNUP_ANSWERS", submitSignUpAnswers);
=======
    yield takeLatest(`SUBMIT_SIGNUP_ANSWERS`, submitSignUpAnswers);
>>>>>>> master
}

export default submitAnswerSaga;