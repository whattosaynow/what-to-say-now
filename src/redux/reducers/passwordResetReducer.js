const passwordResetReducer = (state = '', action) => {

    switch (action.type) {
        case `ERROR_NOT_EXIST`:
            return 'ERROR_NOT_EXIST';
        case `TOKEN_EXPIRED`:
            return 'TOKEN_EXPIRED';
        case `SET_PW_USER`:
            return 'SET_PW_USER';
        default:
            return state;
    }

}

export default passwordResetReducer;