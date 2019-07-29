const numbersReducer = (state = [], action) => {
    console.log('set numbers', action.payload);

    switch (action.type) {
        case `SET_NUMBERS`:
            return action.payload;
            default:
                return state;
    }
    
}

export default numbersReducer;