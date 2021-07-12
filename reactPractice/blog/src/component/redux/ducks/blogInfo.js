// init state
const initialState = {
    blog: []
}


// actions
// fetch
const GET_ARTIS = 'GET_Articals'
const getArticals = {
    type:GET_ARTIS
}

//patch
const UPDATE_ARTIS = 'UPDATE_Artical'
const updateArtical = {
    type:UPDATE_ARTIS
}

//post
const POST_ARTIS = 'POST_Artical'
const postArtical = {
    type:POST_ARTIS
}

//delete
const DELETE_ARTIS = 'DELETE_Artical'
const deleteArtical = {
    type:DELETE_ARTIS
}

// action creator
export const actionCreator = {
    getArticals,
    updateArtical,
    postArtical,
    deleteArtical
}


// reducer
const blogReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_ARTIS:
            return { blog: action.paylod}
        
        case UPDATE_ARTIS:
            return { blog: 'new article'}
        
        case POST_ARTIS:
            return { ...state, blog: action.paylod}
        
        case DELETE_ARTIS:
            return { blog: 'new article'}
        
    
        default:
            return state;
    }
}

export default blogReducer