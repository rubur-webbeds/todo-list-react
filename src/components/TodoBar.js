import React from 'react';

const TodoBar = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Type a new TODO"
                value={props.text}
                onChange={(e) => props.onChange(e.target.value)}
            />
            <input type="button" value="Add" onClick={() => props.onClick()} />
        </div>
    )
};

export default TodoBar;