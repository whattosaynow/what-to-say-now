import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getNumbers() {
    try {
        const response = yield axios.get('/api/numbers/numbers');
        console.log('response', response.data);
        yield put({ type: `SET_NUMBERS`, payload: response.data });
    } catch (error) {
        console.log('numbers request failed', error);
    }
}

function* sendMessages(action) {
    try {

        let numbersToMessage = action.payload;
        yield numbersToMessage.forEach(function textChallenge(number) {
             axios.get(`/api/numbers/messages/${number.numbers}`);
            console.log(`send message Saga`, number.numbers);
            
        })
    } catch (error) {
        console.log('messages request failed', error);
    }
}

function* numbersSaga() {
    yield takeLatest('FETCH_NUMBERS', getNumbers);
    yield takeLatest(`SEND_MESSAGES`, sendMessages);
}

export default numbersSaga;