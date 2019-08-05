import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* updateUserPrefs(action) {
    console.log(action.payload);
    yield axios.put("/api/update-user-prefs", action.payload);
}

function* deleteAccount(action) {
    console.log('hit deleteAccount saga with:', action.payload);
    yield axios.delete('/api/delete-account/' + action.payload.id);
    yield put({type:'UNSET_USER'});
}

function* updateUserPrefsSaga() {
    yield takeLatest("UPDATE_USER_PREFERENCES", updateUserPrefs);
    yield takeLatest("DELETE_ACCOUNT", deleteAccount);
}
export default updateUserPrefsSaga;
