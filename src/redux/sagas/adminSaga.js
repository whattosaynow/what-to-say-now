import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* setAdminEdit(action) {
    try {

        const response = yield axios.get('/api/admin/');
        yield put ({type: 'SET_EDIT_CONTENT', payload: response.data})
    } catch (error) {
        console.log('error with setAdminEdit saga,', error);
    }
}

function* updateUserContent(action){
    try {
       yield axios.put('/api/admin', action.payload)
       yield put ({type: 'GET_EDIT_CONTENT'})
    } catch (error) {
        console.log('error with updateUserContent saga,', error);
    }
}

function* getCsv() {
    try {
      const response = yield axios.get('/api/admin/csv');
      yield put({ type: 'SET_CSV', payload: response.data });
    } catch (error) {
      console.log('csv get request failed', error);
    }
  }

//   function* getChartData() {
//     try {
//         const response = yield axios.get('/api/admin/charts');
//         yield put({ type: 'SET_CHARTS', payload: response.data });
//       } catch (error) {
//         console.log('chart get request failed', error);
//       } 
//   }

function* adminSaga() {
    yield takeLatest(`GET_EDIT_CONTENT`, setAdminEdit);
    yield takeLatest(`UPDATE_CONTENT`, updateUserContent);
    yield takeLatest('GET_CSV', getCsv);
    // yield takeLatest(`GET_CHART_DATA`, getChartData);
}

export default adminSaga;