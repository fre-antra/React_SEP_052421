import * as api from '../../api/index'

// init state
const initailState = {
    authData: null
}


// action
/* ---------- google OAUTH ------------*/
const AUTH = 'AUTH'
export const auth = ()=>({
    type: AUTH
})
const LOGOUT = 'LOGOUT'
export const logout = ()=>({
    type: LOGOUT
})
/* ---------- google OAUTH ------------*/




/* ---------- My Auth ------------*/
export const signup = (userInfo, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(userInfo)
        
        dispatch({ type: AUTH, payload: data })
        
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}

export const signin = (userInfo, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userInfo)
        
        dispatch({ type: AUTH, payload: data })
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}



// reducer
const authReducer = (state = initailState, action) => {
    switch (action.type) {
        case AUTH:
            // set data into local storage and name it 'profile' 
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            console.log(action?.payload, 'Set Profile');
            return { ...state, authData: action?.payload };
    
        case LOGOUT:
            // clean all user info in local storage
            localStorage.clear()
            return { ...state, authData: null };

        
        default:
            return state;
    }
    
}

export default authReducer