import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* setAdminEdit(action) {
    try {
        // console.log('setAdminEdit saga hit')
        // const getResponse = yield put({type: "SET_SIGNUP_ANSWERS", payload: action.payload});
        
       const response =  yield axios.get('/api/admin/');
        console.log('setAdminEdit response:', response)
    } catch(error) {
        console.log('error with setAdminEdit saga,', error);
    }
}

function* adminSaga(){
    yield takeLatest(`SET_EDIT_CONTENT`, setAdminEdit);
}

export default adminSaga;