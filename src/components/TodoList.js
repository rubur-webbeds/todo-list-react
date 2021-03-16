import React from 'react';
import TodoItem from '../components/TodoItem';
import { Grid, List } from '@material-ui/core';

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
        <Grid container>
            <Grid item xs={8}>
                <List dense>
                    {list}
                </List>
            </Grid>
        </Grid>
    )
};

export default TodoList;