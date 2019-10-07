import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* forgotUsername(action) {
    try {
        yield console.log('forgotSaga - username:', action.payload)
    } catch (error) {
        console.log('error with forgotSaga - username', error);
    }
}

function* forgotSaga() {
    yield takeLatest(`FORGOT_USERNAME`, forgotUsername);
}

export default forgotSaga;