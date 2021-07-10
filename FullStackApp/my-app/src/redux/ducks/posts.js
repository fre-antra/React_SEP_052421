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

const LIKE = 'LIKE'

export const likePost = (id) => async (dispatch) =>  {
    try {
        const { data } = await api.likePost(id)
        console.log('this is the LIKE data', data);
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error);
    }
}



// reducer

const postsReducer = (state = initailState, action) => {
    switch(action.type){
        case FETCH:
            return  { posts: action.payload }
        case CREATE:
            return { ...state, posts: action.payload }
        case UPDATE:
            const newPost = state.posts.map((post) => post._id === action.payload ? action.payload : post)
            console.log('newPost state',newPost, 'state:',state.posts);
            return { posts: newPost }
        case DELETE:
            const remaindPost = state.posts.filter((post) => post._id !== action.payload)
            return { posts: remaindPost }
        case LIKE:
            const likePost = state.posts.map((post) => post._id === action.payload ? action.payload : post)
            console.log('like state',likePost, 'state:',state.posts);
            return { posts: likePost }
        default:
            return state
    }
    
}

export default postsReducer