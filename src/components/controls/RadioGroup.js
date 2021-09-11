import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {

    const { name, label, value, onChange, items } = props;
    // console.log(items);
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >

                {items.map(e => (<FormControlLabel value={e.id} label={e.title} control={<Radio />} />))
                }
                {/* <FormControlLabel value="male" label="Male" control={<Radio />} />
                <FormControlLabel value="female" label="Female" control={<Radio />} />
                <FormControlLabel value="other" label="Other" control={<Radio />} /> */}
            </MuiRadioGroup>
        </FormControl>
    )
}
