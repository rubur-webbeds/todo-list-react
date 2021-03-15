import React from 'react';
import '../App.css';
import { Checkbox, Button, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

const TodoItem = (props) => {
    var { done, text } = props.todo;
    return (
        <ListItem id={props.id}>
            <ListItemIcon>
                <Checkbox
                    checked={done}
                    onChange={() => props.onDoneChange(props.id)}
                />
            </ListItemIcon>
            <ListItemText className={done ? 'done-todo' : ''}>{text}</ListItemText>
            <ListItemSecondaryAction>
                <Button onClick={() => props.onDeleteClick(props.id)}>X</Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default TodoItem;