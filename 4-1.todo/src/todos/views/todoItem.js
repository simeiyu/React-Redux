import React from 'react'

const TodoItem = ({onToggle, onRemove, completed, text}) => (
    <li
        className="todo-item"
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
    >
        <input className="toggle" type="checkbox" readOnly checked={completed ? 'checked' : ''} onClick={onToggle} />
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>x</button>
    </li>
)

export default TodoItem
