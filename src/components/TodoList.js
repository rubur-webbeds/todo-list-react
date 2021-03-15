import React from 'react';
import TodoItem from '../components/TodoItem';
import { List } from '@material-ui/core';

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
        <List dense>
            {list}
        </List>
    )
};

export default TodoList;