import React from 'react'
import {connect} from 'react-redux'
import {ALL, COMPLETED, UNCOMPLETED} from '../../constants'
import {toggleTodo, removeTodo} from '../actions'
import TodoItem from './todoItem'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}

function selectVisibleTodos(todos, filter) {
    switch (filter) {
        case ALL:
            return todos
        case COMPLETED:
            return todos.filter(todoItem => todoItem.completed)
        case UNCOMPLETED:
            return todos.filter(todoItem => !todoItem.completed)
        default:
            throw new Error('unsupported filter!')
    }
}

const mapStateToProps = (state) => ({
    todos: selectVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
