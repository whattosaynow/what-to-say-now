import { combineReducers } from "redux";

const ageGroupReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_AGE_GROUP_DATA`:
            return action.payload;
        default: 
            return state;
    }
}















export default combineReducers({
    ageGroupReducer,
});