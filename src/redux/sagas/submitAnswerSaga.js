import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* finishSignup(action) {
    yield put({ type: 'SET_SIGNUP_ANSWERS', payload: action.payload })
    console.log('response saga')
}

function* submitAnswerSaga() {
    yield takeLatest('FINISH_SIGNUP_ANSWERS', finishSignup)
}

export default submitAnswerSaga;