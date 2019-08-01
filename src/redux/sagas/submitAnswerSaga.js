import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* submitSignUpAnswers(action) {
    try {
        yield getResponse = put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        yield axios.post('/api/answer', getResponse.data);
    } catch(error) {
        console.log('error with submitting answers,', error);
    }
}

function* submitAnswerSaga(){
    takeEvery("SUBMIT_SIGNUP_ANSWERS", submitSignUpAnswers);
}

export default submitAnswerSaga;