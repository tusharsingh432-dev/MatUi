import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
// import Input from "../../components/controls/Input";
import { Controls } from "../../components/controls/Controls";
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

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' }
]

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
          <Controls.Input
            // variant="outlined"
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Controls.Input
            // variant="outlined"
            label="E-Mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </form>
  );
}
