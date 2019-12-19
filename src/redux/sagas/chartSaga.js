import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* getAgeGroupData() {
  const getResponse = yield axios.get('/api/charts/ageGroups');
  yield put({ type: `SET_AGE_GROUP_DATA`, payload: getResponse.data })
}

function* getEncourageData() {
  const getResponse = yield axios.get('/api/charts/encourage');
  yield put({ type: `SET_ENCOURAGE_DATA`, payload: getResponse.data })

}

function* getFindData() {
  const getResponse = yield axios.get('/api/charts/findUs');
  yield put({ type: `SET_FIND_DATA`, payload: getResponse.data })

}

function* getLearnedData() {
  const getResponse = yield axios.get('/api/charts/learnedSomething');
  yield put({ type: `SET_LEARNED_DATA`, payload: getResponse.data })

}

function* getPositiveEffectData() {
  const getResponse = yield axios.get('/api/charts/impact');
  yield put({ type: `SET_IMPACT_DATA`, payload: getResponse.data })

}

function* chartSaga() {
  yield takeLatest("GET_AGE_GROUP_DATA", getAgeGroupData);
  yield takeLatest("GET_ENCOURAGE_DATA", getEncourageData);
  yield takeLatest("GET_FIND_DATA", getFindData);
  yield takeLatest("GET_LEARNED_DATA", getLearnedData);
  yield takeLatest("GET_POSITIVE_EFFECT_DATA", getPositiveEffectData);

}

export default chartSaga;