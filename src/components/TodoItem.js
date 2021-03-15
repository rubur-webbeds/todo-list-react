import React from 'react';
import '../App.css';

const TodoItem = (props) => {
    var { done, text } = props.todo;
    return (
        <div id={props.id}>
            <input
                type="checkbox"
                title="done"
                value={done}
                onChange={() => props.onDoneChange(props.id)}
            />
            <label className={done ? 'done-todo' : ''}>{text}</label>
            <input
                type="button"
                value="X"
                title="delete"
                onClick={() => props.onDeleteClick(props.id)} 
            />
        </div>
    )
};

export default TodoItem;