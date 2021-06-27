// state: collect and initial state from components
const initialState = {
    count: 1
}

// action (object): retrive states from components
const INCREMENT = 'increment'

export const increment = {
    type: INCREMENT
}

const DECREMENT = 'decrement'

export const decrement = {
    type: DECREMENT
}

// reducer: deal all logic work
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count +1}
    
        case DECREMENT:
            return {...state, count: state.count -1}
        
        default:
            return state;
    }
}
export default counterReducer