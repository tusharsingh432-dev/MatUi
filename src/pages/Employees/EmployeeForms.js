import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialState = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  depatrment: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForms() {
  const classes = useStyles();
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.name);
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="E-Mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </form>
  );
}
