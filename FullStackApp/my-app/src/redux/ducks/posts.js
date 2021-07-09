import * as api from '../../api/index'

// init state
const initailState = {
    posts: []
}


// actions creators
const FETCH = 'FETCH_ALL'
// async function, from redux thunk
export const getPosts = () => async (dispatch) => {
    try {
        const { data }  = await api.fetchPosts()
        console.log('this is the get data', data);
        dispatch({ type: FETCH, payload: data })
    } catch (error) {
        console.log(error);
    }
}


const CREATE = 'CREATE'

export const createPosts = (post) => async (dispatch) =>  {
    try {
        const { data } = await api.createPost(post)
        console.log('this is the post data', data);
        dispatch({ type: CREATE, payload:data})
    } catch (error) {
        console.log(error);
        
    }
}

const UPDATE = 'UPDATE'

export const updatePost = (id, post) => async (dispatch) =>  {
    try {
        const { data } = await api.updatePost(id, post)
        console.log('this is the update data', data);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

const DELETE = 'DELETE'

export const deletePost = (id) => async (dispatch) =>  {
    try {
        await api.deletePost(id)
        console.log('this is the delete id', id);
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}


// reducer

const postsReducer = (state = initailState, action) => {
    switch(action.type){
        case FETCH:
            return  { ...state, posts: action.payload }
        case CREATE:
            return { ...state, posts: action.payload }
        case UPDATE:
            return  state.map((post) => post._id === action.payload ? action.payload : state)
        case DELETE:
            return  state.filter((post) => post._id !== action.payload)
        default:
            return state
    }
    
}

export default postsReducer