import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* getAgeGroupData() {
  // console.log('getAgeGroupData saga hit');
  const getResponse = yield axios.get('/api/charts/ageGroups');
  // console.log(getResponse.data);
  yield put({ type: `SET_AGE_GROUP_DATA`, payload: getResponse.data })
}

function* getEncourageData() {
  // yield console.log('getEncourageData saga hit');
  const getResponse = yield axios.get('/api/charts/encourage');
  yield put({ type: `SET_ENCOURAGE_DATA`, payload: getResponse.data})
  
}

function* getFindData() {
  // yield console.log('getFindData saga hit');
  const getResponse = yield axios.get('/api/charts/findUs');
  // console.log('getFInd getResponse:', getResponse.data)
  yield put({ type: `SET_FIND_DATA`, payload: getResponse.data })

}

function* getLearnedData() {
  // yield console.log("getLearnedData saga hit");
  const getResponse = yield axios.get('/api/charts/learnedSomething');
  yield put({ type: `SET_LEARNED_DATA`, payload: getResponse.data})
  
}

function* getPositiveEffectData() {
  // yield console.log("getPositiveEffectData saga hit");
  const getResponse = yield axios.get('/api/charts/impact');
  yield put({ type: `SET_IMPACT_DATA`, payload: getResponse.data})

}








function* chartSaga() {
  yield takeLatest("GET_AGE_GROUP_DATA", getAgeGroupData);
  yield takeLatest("GET_ENCOURAGE_DATA", getEncourageData);
  yield takeLatest("GET_FIND_DATA", getFindData);
  yield takeLatest("GET_LEARNED_DATA", getLearnedData);
  yield takeLatest("GET_POSITIVE_EFFECT_DATA", getPositiveEffectData);

}

export default chartSaga;