import React from 'react';
import { InputTextField } from '@webbeds/react/components/forms';
import { Button, Grid } from '@material-ui/core';

const TodoBar = (props) => {
    var { text, onChange, onClick } = props;
    return (
        <Grid container justify="center">
            <Grid item xs={8}>
                <InputTextField
                    name='todo'
                    required
                    placeholder='Type a new TODO'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={4}>
                <Button color='primary' onClick={() => onClick()}>Add</Button>
            </Grid>
        </Grid>
    )
};

export default TodoBar;