const answersReducer = (state = {}, action) => {
    console.log('Set Answers', action.payload);

    switch (action.type) {
        case `SET_SIGNUP_ANSWERS`:
            return {...state,...action.payload};
        default:
            return state;
    }
}

export default answersReducer;