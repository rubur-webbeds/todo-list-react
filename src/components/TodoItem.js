import React from 'react';

const TodoItem = (props) => {
    var { check, text } = props.todo;
    return (
        <div id="todoItem">
            <input type="checkbox" value={check} onChange={(e) => props.onChange(e.target.value)} />
            <label>{text}</label>
            <input type="button" value="X" onClick={() => props.onClick()} />
        </div>
    )
};

export default TodoItem;