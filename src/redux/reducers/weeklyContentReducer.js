import { combineReducers } from 'redux';

const weeklyContentReducer = (state = [], action) => {

    switch (action.type) {
        case `SET_USER_CONTENT`:
            return action.payload;
        default:
            return state;
    }
}

const weeklyChallengeReducer = (state = [], action) => {

    switch (action.type) {
        case `SET_WEEKLY_CONTENT`:
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    weeklyContentReducer,
    weeklyChallengeReducer
  });