import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateUserPrefs(action) {
    console.log(action.payload);
}

function* updateUserPrefsSaga() {
    yield takeLatest("UPDATE_USER_PREFERENCES", updateUserPrefs);
}
export default updateUserPrefsSaga;
