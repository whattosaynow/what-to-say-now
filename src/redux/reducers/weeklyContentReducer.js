import { combineReducers } from 'redux';

const weeklyContentReducer = (state = [], action) => {
    // console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_WEEKLY_CONTENT`:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    weeklyContentReducer,
  });