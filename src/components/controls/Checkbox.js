import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react'

export default function Checkbox(props) {
    const { name, label, value, onChange } = props;

    const convertToDefaultParameter = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    checked={value}
                    color="primary"
                    onChange={e => onChange(convertToDefaultParameter(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
