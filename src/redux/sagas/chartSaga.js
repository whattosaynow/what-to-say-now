import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* getAgeGroupData(){
    console.log('getAgeGroupData saga hit');
}

function* getEncourageData(){
    console.log('getEncourageData saga hit');
}

function* getFindData(){
    console.log('getFindData saga hit');
}

function* getLearnedData() {
  console.log("getLearnedData saga hit");
}

function* getPositiveEffectData() {
  console.log("getPositiveEffectData saga hit");
}








function* chartSaga() {
  yield takeLatest("GET_AGE_GROUP_DATA", getAgeGroupData);
  yield takeLatest("GET_ENCOURAGE_DATA", getEncourageData);
  yield takeLatest("GET_FIND_DATA", getFindData);
  yield takeLatest("GET_LEARNED_DATA", getLearnedData);
  yield takeLatest("GET_POSITIVE_EFFECT_DATA", getPositiveEffectData);
  
}

export default chartSaga;