// state: collect and initial state from components
const initialState = {
    user: undefined
}

// action (object): retrive states from components
export const GET_USER = 'GET_USER'

export const getUser = {
    type: GET_USER
}

const SET_USER = 'SET_USER';

export const setUser = (user)=>({
    type: SET_USER,
    user: user
    // user  property的名字和内容一样的时候可以写一块
})

// reducer: deal all logic work
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // // 获取信息并不需要逻辑操作所以不需要了
        // case GET_USER:
        //     return {...state, count: state.count +1}
    
        case SET_USER:
            const { user } = action
            
            return {...state, user: user}
        
        default:
            return state;
    }
};
export default userReducer