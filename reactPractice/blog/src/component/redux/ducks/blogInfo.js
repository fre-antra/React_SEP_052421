// init state
const initialState = {
    blog: []
}


// actions
// fetch
const GET_ARTIS = 'GET_Articals'
const getArticals = ()=> ({
    type:GET_ARTIS
})

//patch
const UPDATE_ARTIS = 'UPDATE_Artical'
const updateArtical = ()=>  ({
    type:UPDATE_ARTIS
})

//post
const POST_ARTIS = 'POST_Artical'
const postArtical = () => ({
    type:POST_ARTIS
})
// const postArtical = (articals) => async (dispatch) => {
//     try {
//         dispatch({ type: POST_ARTIS, payload: articals })
//     } catch (error) {
//         console.log(error);
//     }}
    

//delete
const DELETE_ARTIS = 'DELETE_Artical'
const deleteArtical = ()=>({
    type:DELETE_ARTIS
})

// action creator
export const actionCreator = {
    getArticals,
    updateArtical,
    postArtical,
    deleteArtical
}


const tmpU = [
    {
      title: 'UU Hello world 1',
      description:  'coding coding 1',
      markdown: '## good 1',
      createAt: new Date()
    }, {
      title: 'UU Hello world 2',
      description:  'coding coding 2',
      markdown: '## good 2',
      createAt:  new Date()
    }
]
  
const tmpD = [{
    title: 'DD Hello world 2',
    description:  'coding coding 2',
    markdown: '## good 2',
    createAt:  new Date()
  }]

// reducer
const blogReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_ARTIS:
            return { blog: action.payload}
        
        case UPDATE_ARTIS:
            return { blog: tmpU }
        
        case POST_ARTIS:
            return { ...state, blog: action.payload}
        
        case DELETE_ARTIS:
            return { blog: tmpD}
        
    
        default:
            return state;
    }
}

export default blogReducer