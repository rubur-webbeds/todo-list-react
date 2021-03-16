import React from 'react';
import '../App.css';
import { Checkbox, Button, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

const TodoItem = (props) => {
    var { done, text } = props.todo;
    var { id, onDoneChange, onDeleteClick } = props;
    return (
        <ListItem id={id}>
            <ListItemIcon>
                <Checkbox
                    checked={done}
                    onChange={() => onDoneChange(id)}
                />
            </ListItemIcon>
            <ListItemText className={done ? 'done-todo' : ''}>{text}</ListItemText>
            <ListItemSecondaryAction>
                <Button onClick={() => onDeleteClick(id)}>X</Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;