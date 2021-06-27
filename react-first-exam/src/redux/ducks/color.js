// initail color state
const initailState = {
    color: ''
}


// action: only takes 'type' property

export const changeColor = {
    type: 'changeColor'
    
}


// reducer
const colorReducer = (state = initailState, action) => {
    switch (action.type) {
        case 'changeColor':
            return { ...state, color: action.payload}
    
        default:
            return state
    }
}

export default  colorReducer