import React from 'react';
import TodoItem from '../components/TodoItem';
import { Grid, List } from '@material-ui/core';
import PropTypes from 'prop-types';

const TodoList = (props) => {
    var { todos, onDoneChange, onDeleteClick } = props;
    const list = todos.map((todo, i) => {
        return (<TodoItem
            key={i}
            id={i}
            todo={todo}
            onDoneChange={onDoneChange}
            onDeleteClick={onDeleteClick}
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

TodoList.propTypes = {
    todos: PropTypes.array,
    onDoneChane: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

export default TodoList;