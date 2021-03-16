import React from 'react';
import '../App.css';
import { Checkbox, Button, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    var { todo, id, onDoneChange, onDeleteClick } = props;
    return (
        <ListItem id={id}>
            <ListItemIcon>
                <Checkbox
                    checked={todo.done}
                    onChange={() => onDoneChange(id)}
                />
            </ListItemIcon>
            <ListItemText className={todo.done ? 'done-todo' : ''}>{todo.text}</ListItemText>
            <ListItemSecondaryAction>
                <Button onClick={() => onDeleteClick(id)}>X</Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

TodoItem.propTypes = {
    /** todo task */
    todo: PropTypes.object,
    /** task id */
    id: PropTypes.number,
    /** delete button handler */
    onDeleteClick: PropTypes.func,
    /** done checkbox handler */
    onDoneChange: PropTypes.func,
};

export default TodoItem;