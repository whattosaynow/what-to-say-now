import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateUserPrefs(action) {
    yield axios.put("/api/update-user-prefs", action.payload);
    yield put({type:"FETCH_USER"});
}

function* deleteAccount(action) {
    yield axios.delete('/api/delete-account/' + action.payload.id);
    yield put({type:'UNSET_USER'});
}

function* updateUserPrefsSaga() {
    yield takeLatest("UPDATE_USER_PREFERENCES", updateUserPrefs);
    yield takeLatest("DELETE_ACCOUNT", deleteAccount);
}
export default updateUserPrefsSaga;
