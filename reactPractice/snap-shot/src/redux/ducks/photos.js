// init state
const initialState = {
    photos: []
}

// action
export const photosUpdate ={
    type: 'photosUpdate'
}

// reducer
const photosReducer =(state=initialState,action)=>{
    switch (action.type) {
        case 'photosUpdate':
            
            return {...state, photos: action.payload}
    
        default:
            return state
    }
}

export default  photosReducer