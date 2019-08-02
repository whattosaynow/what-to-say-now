import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* setAdminEdit(action) {
    try {
        // console.log('setAdminEdit saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});

        const response = yield axios.get('/api/admin/');
        yield put ({type: 'SET_EDIT_CONTENT', payload: response.data})
        // console.log('setAdminEdit response:', response.data)
    } catch (error) {
        console.log('error with setAdminEdit saga,', error);
    }
}

function* adminSaga() {
    yield takeLatest(`GET_EDIT_CONTENT`, setAdminEdit);
}

export default adminSaga;