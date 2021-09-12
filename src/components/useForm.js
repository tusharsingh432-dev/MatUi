import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export function useForm(initialValues, validateOnChange = false, validate) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        // console.log(e.target.name);
        // console.log(values)
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) {
            validate({ [name]: value })
        }
        // console.log(e.target)
        // console.log(values)
    };


    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    }
}
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1),
        },
    },
}));

export function Form(props) {
    const { children, ...other } = props
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
