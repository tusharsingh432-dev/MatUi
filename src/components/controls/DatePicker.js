import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import React from 'react'

export default function DatePicker(props) {

    const { name, label, value, onChange } = props;

    const convertToDefaultParameter = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy"
                value={value}
                onChange={date => (onChange(convertToDefaultParameter(name, date)))}
                name={name}
            />
        </MuiPickersUtilsProvider>
    )
}
