import { combineReducers } from 'redux';

const signupReducer = (state = {}, action) => {

    switch (action.type) {
        case `SET_SIGNUP_ANSWERS`:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const postSurveyReducer = (state = {}, action) => {

    switch (action.type) {
        case `SET_POST_ANSWERS`:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const threeMonthReducer = (state = {}, action) => {

    switch (action.type) {
        case `SET_THREE_MONTH_ANSWERS`:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

const usernameCheckReducer = (state = true, action) => {
    switch (action.type) {
        case `SET_USERNAME_CHECK`:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    signupReducer,
    postSurveyReducer,
    threeMonthReducer,
    usernameCheckReducer
});