import React from 'react';
import TodoItem from '../components/TodoItem';

const TodoList = (props) => {
    const list = props.todos.map((todo) => {
        return <TodoItem todo={todo} />
    });

    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
};

export default TodoList;