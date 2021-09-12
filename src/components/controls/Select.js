import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const { label, name, onChange, value, options, error } = props;

    return (
        <FormControl
            variant="outlined"
            {...(error && { error: true })}
        >
            <InputLabel>{label}</InputLabel>

            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem key="0" value="0">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {(error && <FormHelperText>{error}</FormHelperText>)}
        </FormControl>
    )
}


// import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'
// import React from 'react'

// export default function Select(props) {
//     const { name, label, value, onChange, options } = props;
//     return (
//         <FormControl variant="outlined">
//             <InputLabel>{label}</InputLabel>
//             <MuiSelect
//                 label={label}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//             >
//                 {
//                     options.map(
//                         item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
//                     )
//                 }
//             </MuiSelect>
//         </FormControl>
//     )
// }