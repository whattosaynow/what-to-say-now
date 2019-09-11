import { combineReducers } from "redux";

const ageGroupReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_AGE_GROUP_DATA`:
            return action.payload;
        default: 
            return state;
    }
}

const findReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_FIND_DATA`:
            return action.payload;
        default: 
            return state;
    }
}

const learnedReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_LEARNED_DATA`:
            return action.payload;
        default: 
            return state;
    }
}

const encourageReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_ENCOURAGE_DATA`:
            return action.payload;
        default: 
            return state;
    }
}

const impactReducer = (state = [], action) => {
    switch(action.type) {
        case `SET_IMPACT_DATA`:
            return action.payload;
        default: 
            return state;
    }
}












export default combineReducers({
    ageGroupReducer,
    findReducer,
    learnedReducer,
    encourageReducer,
    impactReducer,
});