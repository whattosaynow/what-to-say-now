import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        // console.log(getResponse)
        yield axios.post('/api/answer', action.payload);
    } catch(error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitAnswerSaga(){
    yield takeLatest("SUBMIT_SIGNUP_ANSWERS", submitSignUpAnswers);
}

export default submitAnswerSaga;