import React from 'react';
import TodoItem from '../components/TodoItem';

const TodoList = (props) => {
    const list = props.todos.map((todo, i) => {
        return (<TodoItem
            key={i}
            id={i}
            todo={todo}
            onDoneChange={props.onDoneChange}
            onDeleteClick={props.onDeleteClick}
        />)
    });

    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
};

export default TodoList;