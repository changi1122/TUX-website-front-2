const initialState = {
    userId: undefined,
    username: '',
    nickname: '',
    role: '',
    isLogined: false 
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userId: action.userId,
                username: action.username,
                nickname: action.nickname,
                role: action.role,
                isLogined: true
            };
        case 'LOGOUT':
            return {
                ...state,
                userId: undefined,
                username: '',
                nickname: '',
                role: '',
                isLogined: false
            };
        default:
            return state;
    }
}


export { initialState, reducer };