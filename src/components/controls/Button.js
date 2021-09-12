import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(props) {
    const classes = useStyles();
    const { text, variant, size, color, onClick, ...other } = props
    return (
        <MuiButton
            classes={{ root: classes.root, label: classes.label }}
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
        >
            {text}
        </MuiButton>
    )
}
