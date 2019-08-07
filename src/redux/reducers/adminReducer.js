import { combineReducers } from 'redux';

const editContentReducer = (state = [], action) => {

    switch (action.type) {
        case `SET_EDIT_CONTENT`:
            return action.payload;
        default:
            return state;
    }
}

const csvReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CSV':
        return action.payload;
      default:
        return state;
    }
  };

// const chartReducer = (state = [], action) => {
//   switch (action.type) {
//     case `SET_CHARTS`:
//       return action.payload;
//     default:
//         return state;
//   }
// };

export default combineReducers({
    editContentReducer,
    csvReducer,
  });