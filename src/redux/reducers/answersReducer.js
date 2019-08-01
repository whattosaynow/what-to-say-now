import { combineReducers } from 'redux';

const signupReducer = (state = {}, action) => {
    console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_SIGNUP_ANSWERS`:
            return {...state,...action.payload};
        default:
            return state;
    }
}

const postSurveyReducer = (state = {}, action) => {
    console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_POST_ANSWERS`:
            return {...state,...action.payload};
        default:
            return state;
    }
}

const threeMonthReducer = (state = {}, action) => {
    console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_THREE_MONTH_ANSWERS`:
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default combineReducers({
    signupReducer,
    postSurveyReducer,
    threeMonthReducer
  });