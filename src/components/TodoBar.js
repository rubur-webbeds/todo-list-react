import React from 'react';
import { InputTextField } from '@webbeds/react/components/forms';
import { Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

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

TodoBar.propTypes = {
    /** new todo's text */
    text: PropTypes.string,
    /** textfield handler */
    onChange: PropTypes.func,
    /** add button's handler */
    onClick: PropTypes.func,
};

export default TodoBar;