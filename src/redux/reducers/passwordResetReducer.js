const passwordResetReducer = (state = [], action) => {

    switch (action.type) {
        case `SET_NUMBERS`:
            return action.payload;
            default:
                return state;
    }
    
}

export default passwordResetReducer;