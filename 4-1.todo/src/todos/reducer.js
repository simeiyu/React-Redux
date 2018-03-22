import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{id: action.id, completed: action.completed, text: action.text}, ...state]
        case TOGGLE_TODO:
            return state.map(todoItem => {
                if(todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    }
                }
                return todoItem
            })
        case REMOVE_TODO:
            return state.filter(todoItem => todoItem.id !== action.id)
        default:
            return state
    }
}