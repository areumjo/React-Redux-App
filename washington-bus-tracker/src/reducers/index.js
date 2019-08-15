const initialState = {
    busPosition: ['hello - hard-coded value'],
    isLoading: false
}

export const metroReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}