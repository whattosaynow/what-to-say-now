import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* forgotUsername(action) {
    try {
        yield console.log('forgotSaga - username:', action.payload)
        yield axios.get(`/api/forgot/username/${action.payload}`)
    } catch (error) {
        console.log('error with forgotSaga - username', error);
    }
}

//need to add :username to api route

function* forgotPassword(action) {
    try {
        yield console.log('forgotSaga - Password:', action.payload)
    } catch (error) {
        console.log('error with forgotSaga - Password', error);
    }
}

function* forgotEmail(action) {
    try {
        yield console.log('forgotSaga - Email:', action.payload)
        yield axios.get(`/api/forgot/email/${action.payload}`)
    } catch (error) {
        console.log('error with forgotSaga - Email', error);
    }
}

function* forgotSaga() {
    yield takeLatest(`FORGOT_USERNAME`, forgotUsername);
    yield takeLatest(`FORGOT_PASSWORD`, forgotPassword);
    yield takeLatest(`FORGOT_EMAIL`, forgotEmail);
}

export default forgotSaga;