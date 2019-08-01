import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        console.log('submitResponse saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        
        yield axios.post('/api/answer', action.payload);
        // console.log('getResponse saga:', getResponse)
    } catch(error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitAnswerSaga(){
    yield takeLatest(`SUBMIT_SIGNUP_ANSWERS`, submitSignUpAnswers);
}

export default submitAnswerSaga;