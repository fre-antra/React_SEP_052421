// init state
const initialState = {
    searchTarget: 'mountain'
}

// action
export const searchUpdate = {
    type: 'searchUpdate'
}


// reducer
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchTarget':
            return {...state, searchTarget: action.payload}
        default:
            return state
    }
}

export default searchReducer