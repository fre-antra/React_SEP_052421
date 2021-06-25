// state
const initialState = {
    todolist: []
}

// action
const ADDTODOLIST = 'addTodolist'

export const addTodolist = () => ({
    type: ADDTODOLIST
})

const REMOVETODOLIST = 'removeTodolist'

export const removeTodolist = () => ({
    type: REMOVETODOLIST,
})

// reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODOLIST:
            return {
                ...state, todolist: state.todolist.id + 900
            };

        case REMOVETODOLIST:
            return {
                ...state, todolist: state.todolist.id - 900
            };
        default:
            return state;
    }
}

export default todoReducer