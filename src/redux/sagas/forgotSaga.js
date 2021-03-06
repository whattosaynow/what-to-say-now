import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* forgotUsername(action) {
    try {
        yield axios.get(`/api/forgot/username/${action.payload}`)
    } catch (error) {
        console.log('error with forgotSaga - username', error);
    }
}

function* forgotPassword(action) {
    try {
        yield axios.put(`/api/forgot/password/${action.payload}`)
    } catch (error) {
        console.log('error with forgotSaga - Password', error);
    }
}

function* forgotEmail(action) {
    try {
        yield axios.get(`/api/forgot/email/${action.payload}`)
    } catch (error) {
        console.log('error with forgotSaga - Email', error);
    }
}

function* compareToken(action) {
    try {
        const response = yield axios.get(`/api/forgot/reset/${action.payload}`)
        if (response.data === 'ERROR - Token does not exist') {
            yield put({ type: `ERROR_NOT_EXIST` })
        } else if (response.data === 'Token Expired') {
            yield put({ type: `TOKEN_EXPIRED` })
        } else {
            yield put({ type: `SET_PW_USER`, payload: response.data })
        }
    } catch (error) {
        console.log('error with compare token:', error)
    }
}

function* updatePassword(action) {
    try {
        yield axios.put(`/api/forgot/update/`, action.payload)
    } catch (error) {
        console.log('error with update password saga token:', error)
    }
}

function* forgotSaga() {
    yield takeLatest(`FORGOT_USERNAME`, forgotUsername);
    yield takeLatest(`FORGOT_PASSWORD`, forgotPassword);
    yield takeLatest(`FORGOT_EMAIL`, forgotEmail);
    yield takeLatest(`COMPARE_TOKEN`, compareToken)
    yield takeLatest(`UPDATE_PASSWORD`, updatePassword)
}

export default forgotSaga;